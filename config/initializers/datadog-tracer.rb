require 'ddtrace'

Datadog.configure do |c|
  c.use :rails, {'analytics_enabled': true, 'service_name': 'my-rails-app'}
  c.use :http, {'analytics_enabled': true, 'service_name': 'my-rails-app'}
  c.tracer hostname: 'agent'
end