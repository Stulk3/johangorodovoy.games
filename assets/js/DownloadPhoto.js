function DownloadFile(filename, callback) {
    console.log(error);  
    request('https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key=https://disk.yandex.ru/i/FF-8mgvo3t3N7A&path=/' + filename, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          var link = JSON.parse(body).href;
          callback(null, link);
        } else {
          console.log(error);
        }
      });

    }