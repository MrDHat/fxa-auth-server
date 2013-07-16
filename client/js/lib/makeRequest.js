var makeRequest = (function() {
  
  var xhr = new XMLHttpRequest();
  
  function get (path, args, success, err) {
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(xhr.responseText);
        }
      }
    };
    xhr.onerror = function() {
      console.log('xhr GET error, readyState: ' + xhr.readyState + 'status: ' + xhr.status);
      err({'response': xhr.responseText, 'status': xhr.status});
    };
    xhr.open('GET', path, true);
    if (args) {
      if (args.header) {
        xhr.setRequestHeader('Content-type', args.header);
      }
    }
    xhr.send();
  }

  function post (path, args, success, err) {
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(xhr.responseText);
        }
      }
    };
    xhr.onerror = function() {
      console.log('xhr POST error, readyState: ' + xhr.readyState + 'status: ' + xhr.status);
      err({'response': xhr.responseText, 'status': xhr.status});
    };
    xhr.open('POST', path, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    if (args.header) {
      xhr.setRequestHeader('Content-type', args.header);
    }
    xhr.send(args.data);
  }
  
  return {
    get: get,
    post: post
  };

})();