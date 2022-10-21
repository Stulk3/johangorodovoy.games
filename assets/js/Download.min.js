function (filename, callback) {
      request('https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key=ПУБЛИЧНАЯ_ССЫЛКА&path=/' + filename, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          var link = JSON.parse(body).href;
          callback(null, link);
        } else {
          console.log(error);
        }
      });

    }