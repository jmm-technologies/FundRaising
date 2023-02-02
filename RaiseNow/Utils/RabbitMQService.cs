using Newtonsoft.Json;
using RabbitMQ.Client;
using System.Text;

namespace RaiseNow.Utils
{
    public class RabbitMQService
    {
        private readonly IConnection _connection;
        private readonly IModel _channel;
        //ServiceOptions options = new();

        public RabbitMQService(IConfiguration config)
        {
            var factory = new ConnectionFactory()
            {
                //TODO: fix these
                HostName = "queueservice",
                UserName = "username",
                Password = "password",
                Port = 5672
            };
            //_connection = factory.CreateConnection();
            //_channel = _connection.CreateModel();
            //_channel.QueueDeclare("email_queue", durable: false, exclusive: false, autoDelete: false, arguments: null);
        }
        public class EmailData
        {
            public string email { get; set; }
            public string name { get; set; }
            public string message { get; set; }
        }
        public async Task SendMail(EmailData data)
        {
            var properties = _channel.CreateBasicProperties();
            properties.Persistent = false;

            var message = JsonConvert.SerializeObject(data);
            byte[] messageBodyBytes = Encoding.UTF8.GetBytes(message);
            _channel.BasicPublish("", "email_queue", properties, messageBodyBytes);
        }
    }
}
