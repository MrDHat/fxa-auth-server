var assert = chai.assert;

describe('Make Request', function() {
  it('should send a GET Request to idp server', function() {
    makeRequest.get('http://127.0.0.1:9000/__heartbeat__', null, function(response) {
      assert.equal(response, 'ok');
    }, function(error){
      console.log(error);
      
    });
  });
});