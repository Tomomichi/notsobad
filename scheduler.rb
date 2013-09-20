require 'net/http'
uri = URI.parse(ENV['APP_URL'])
Net::HTTP.get(uri)
