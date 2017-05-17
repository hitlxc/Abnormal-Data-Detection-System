import low from 'lowdb';
const fakeDB = low();

fakeDB.defaults({data: [
  {
    id: '1',
    url_path: '/323',
    http_method: 'GET',
    http_headers: 'Accept-Ranges:bytes Cache-Control:public, max-age=0 Connection:keep-alive Date:Wed, 17 May 2017 12:56:03 GMT ETag:W/"29-15c0ae6f8ef" Last-Modified:Mon, 15 May 2017 06:58:48 GMT X-Powered-By:Express',
    http_time: '2017-03-02',
  }, {
    id: '2',
    url_path: '/3233124',
    http_method: 'GET',
    http_headers: 'Accept-Ranges:bytes Cache-Control:public, max-age=0 Connection:keep-alive Date:Wed, 17 May 2017 12:56:03 GMT ETag:W/"29-15c0ae6f8ef" Last-Modified:Mon, 15 May 2017 06:58:48 GMT X-Powered-By:Express',
    http_time: '2017-03-02',
  }, {
    id: '3',
    url_path: '/w323',
    http_method: 'GET',
    http_headers: 'Accept-Ranges:bytes Cache-Control:public, max-age=0 Connection:keep-alive Date:Wed, 17 May 2017 12:56:03 GMT ETag:W/"29-15c0ae6f8ef" Last-Modified:Mon, 15 May 2017 06:58:48 GMT X-Powered-By:Express',
    http_time: '2017-03-02',
  },{
    id: '4',
    url_path: '/w323/32',
    http_method: 'GET',
    http_headers: 'Accept-Ranges:bytes Cache-Control:public, max-age=0 Connection:keep-alive Date:Wed, 17 May 2017 12:56:03 GMT ETag:W/"29-15c0ae6f8ef" Last-Modified:Mon, 15 May 2017 06:58:48 GMT X-Powered-By:Express',
    http_time: '2017-03-02',
  },{
    id: '5',
    url_path: '/w323/32',
    http_method: 'GET',
    http_headers: 'Accept-Ranges:bytes Cache-Control:public, max-age=0 Connection:keep-alive Date:Wed, 17 May 2017 12:56:03 GMT ETag:W/"29-15c0ae6f8ef" Last-Modified:Mon, 15 May 2017 06:58:48 GMT X-Powered-By:Express',
    http_time: '2017-03-02',
  },{
    id: '6',
    url_path: '/w323/32',
    http_method: 'GET',
    http_headers: 'Accept-Ranges:bytes Cache-Control:public, max-age=0 Connection:keep-alive Date:Wed, 17 May 2017 12:56:03 GMT ETag:W/"29-15c0ae6f8ef" Last-Modified:Mon, 15 May 2017 06:58:48 GMT X-Powered-By:Express',
    http_time: '2017-03-02',
  },{
    id: '7',
    url_path: '/w323/32',
    http_method: 'GET',
    http_headers: 'Accept-Ranges:bytes Cache-Control:public, max-age=0 Connection:keep-alive Date:Wed, 17 May 2017 12:56:03 GMT ETag:W/"29-15c0ae6f8ef" Last-Modified:Mon, 15 May 2017 06:58:48 GMT X-Powered-By:Express',
    http_time: '2017-03-02',
  },{
    id: '8',
    url_path: '/w323/32',
    http_method: 'GET',
    http_headers: 'Accept-Ranges:bytes Cache-Control:public, max-age=0 Connection:keep-alive Date:Wed, 17 May 2017 12:56:03 GMT ETag:W/"29-15c0ae6f8ef" Last-Modified:Mon, 15 May 2017 06:58:48 GMT X-Powered-By:Express',
    http_time: '2017-03-02',
  },{
    id: '9',
    url_path: '/w323/32',
    http_method: 'GET',
    http_headers: 'Accept-Ranges:bytes Cache-Control:public, max-age=0 Connection:keep-alive Date:Wed, 17 May 2017 12:56:03 GMT ETag:W/"29-15c0ae6f8ef" Last-Modified:Mon, 15 May 2017 06:58:48 GMT X-Powered-By:Express',
    http_time: '2017-03-02',
  },{
    id: '10',
    url_path: '/w323/32',
    http_method: 'GET',
    http_headers: 'Accept-Ranges:bytes Cache-Control:public, max-age=0 Connection:keep-alive Date:Wed, 17 May 2017 12:56:03 GMT ETag:W/"29-15c0ae6f8ef" Last-Modified:Mon, 15 May 2017 06:58:48 GMT X-Powered-By:Express',
    http_time: '2017-03-02',
  },{
    id: '11',
    url_path: '/w323/32',
    http_method: 'GET',
    http_headers: 'Accept-Ranges:bytes Cache-Control:public, max-age=0 Connection:keep-alive Date:Wed, 17 May 2017 12:56:03 GMT ETag:W/"29-15c0ae6f8ef" Last-Modified:Mon, 15 May 2017 06:58:48 GMT X-Powered-By:Express',
    http_time: '2017-03-02',
  },
]}).value();

export default function(page, perPage, sort, order, filter, callback) {
  const start = (page - 1) * perPage;
  const end = page * perPage;
  if (filter !== '') {
    const pattern = new RegExp(filter.toLowerCase());
    setTimeout(() => {
      const result = {
        count: fakeDB.get('data').filter((data) => {
          console.log(data)
          return pattern.test(data.id.toLowerCase());
        }).size().value(),
        data: fakeDB.get('data').filter((data) => {
          console.log(data)
          return pattern.test(data.id.toLowerCase());
        }).orderBy([sort], [order]).slice(start, end).value(),
      };
      callback(result);
    }, 200);
  } else {
    setTimeout(() => {
      const result = {
        count: fakeDB.get('data').size().value(),
        data: fakeDB.get('data').orderBy([sort], [order]).slice(start, end).value(),
      };
      callback(result);
    }, 200);
  }
}