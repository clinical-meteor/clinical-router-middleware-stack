
describe('clinical:router-middleware-stack', function () {
  var server = meteor();
  var client = browser(server);

  it('MiddlewareStack should exist on the client', function () {
    return client.execute(function () {
      expect(Iron.MiddlewareStack).to.exist;
    });
  });

  it('MiddlewareStack should be undefined on the server', function () {
    return server.execute(function () {
      //expect(typeof Router).to.equal("undefined");
      expect(typeof Iron.MiddlewareStack).to.equal("undefined");
    });
  });
});
