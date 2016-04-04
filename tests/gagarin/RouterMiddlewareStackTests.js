
describe('clinical:router-middleware-stack', function () {
  var server = meteor();
  var client = browser(server);

  it('Handler should exist on the client', function () {
    return client.execute(function () {
      expect(Handler).to.exist;
    });
  });

  it('Handler should exist on the client', function () {
    return server.execute(function () {
      expect(Handler).to.exist;
    });
  });
});
