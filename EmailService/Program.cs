
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
IConfigurationBuilder config = new ConfigurationBuilder()
        .SetBasePath(builder.Environment.ContentRootPath)
        .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
        .AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true)
        .AddEnvironmentVariables(); ;
            
IConfiguration configuration = config.Build();

builder.Services.AddSingleton(configuration);
builder.Services.AddSingleton<IHostedService, EmailService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.Run();
