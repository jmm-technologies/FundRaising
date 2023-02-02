public class ServiceOptions
{
    public const string Identifier = "ServiceOptions";

    public SendGridOption SendGridOption { get; set; }
    public RabitMQOption RabitMQOption { get; set; }
    
   
}

public class RabitMQOption
{
    public string HostName { get; set; }
    public string UserName { get; set; }
    public string Password { get; set; }
    public int Port { get; set; }
    public string QueueName { get; set; }

}

public class SendGridOption
{
    public string ApiKey { get; set; }
    public string FromEmail { get; set; }
    public string FromName { get; set; }
}