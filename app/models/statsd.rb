statsd = Datadog::Statsd.new('localhost', 3000)

statsd.increment('page.views')

