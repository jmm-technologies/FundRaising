FROM rabbitmq:3-management

# Define environment variables.
#ENV RABBITMQ_USER abc
#ENV RABBITMQ_PASSWORD abc


ADD RabbitMQ/rabbitmq.conf /etc/rabbitmq/rabbitmq.conf
ADD RabbitMQ/definitions.json /etc/rabbitmq/definitions.json

EXPOSE 15672
EXPOSE 5672