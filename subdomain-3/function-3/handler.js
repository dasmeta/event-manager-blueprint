import someApiClient from someApiClient;

transform = (data) => {
  return data.something;
}

exports.handler = (data) => {
  someApiClient.call(transform(data));
}