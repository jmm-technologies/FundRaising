using Newtonsoft.Json;
using RabbitMQ.Client.Events;
using RabbitMQ.Client;
using SendGrid.Helpers.Mail;
using SendGrid;
using System.Text;
using Microsoft.Extensions.Options;

public class EmailService : BackgroundService
{
    private readonly ILogger<EmailService> logger;
    private readonly IConnection _connection;
    private readonly IModel _channel;
    private readonly SendGridClient _sendGridClient;
    ServiceOptions _options = new ServiceOptions();

    public EmailService(IConfiguration configuration, ILogger<EmailService> logger)
    {
        this.logger = logger;
        configuration.GetSection(ServiceOptions.Identifier).Bind(_options);
        var factory = new ConnectionFactory()
        {
            HostName = _options.RabitMQOption.HostName,
            UserName = _options.RabitMQOption.UserName,
            Password = _options.RabitMQOption.Password,
            Port = _options.RabitMQOption.Port,
        };
        _connection = factory.CreateConnection();
        _channel = _connection.CreateModel();

        _channel.QueueDeclare(queue: _options.RabitMQOption.QueueName, durable: true, exclusive: false, autoDelete: false, arguments: null);

        _sendGridClient = new SendGridClient(_options.SendGridOption.ApiKey);
    }

    protected async override Task ExecuteAsync(CancellationToken stoppingToken)
    {
        logger.LogInformation($"{nameof(EmailService)} is Starting");
        stoppingToken.Register(() =>
        {
            logger.LogInformation($"{nameof(EmailService)} is Stopping");
        });
        while (!stoppingToken.IsCancellationRequested)
        {
           // logger.LogInformation($"{nameof(EmailService)} is working in background");
            var consumer = new EventingBasicConsumer(_channel);
            consumer.Received += async (model, ea) =>
            {
                var body = ea.Body;
                var message = Encoding.UTF8.GetString(body.ToArray());
                Console.WriteLine("Received message: {0}", message);
                await SendEmail(message);
                _channel.BasicAck(ea.DeliveryTag, false);
            };
            _channel.BasicConsume(queue: _options.RabitMQOption.QueueName, autoAck: false, consumer: consumer);

            await Task.Delay(10000, stoppingToken);
        }


    }

    private async Task SendEmail(string message)
    {
        var emailData = JsonConvert.DeserializeObject<EmailData>(message);
        Console.WriteLine("Sending email to: {0} with message: {1}", emailData.email, emailData.message);

        var from = new EmailAddress(_options.SendGridOption.FromEmail, _options.SendGridOption.FromName);
        var to = new EmailAddress(emailData.email, emailData.name);
        var subject = "Email from Email Service";
        var plainTextContent = emailData.message;
        var htmlContent = "<p>" + emailData.message + "</p>";
        var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
        var response = await _sendGridClient.SendEmailAsync(msg);

        if (response.StatusCode == System.Net.HttpStatusCode.Accepted ||
                    response.StatusCode == System.Net.HttpStatusCode.OK)
        {
            Console.WriteLine("Email sent successfully.");
        }
        else
        {
            Console.WriteLine("Failed to send email: {0}", response.StatusCode);
        }
    }

    public override void Dispose()
    {
        _connection.Close();
        _channel.Close();
        base.Dispose();
    }
}

public class EmailData
{
    public string email { get; set; }
    public string name { get; set; }
    public string message { get; set; }
}