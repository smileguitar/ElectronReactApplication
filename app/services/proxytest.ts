const request = require('request');

function doRequest(url: string, proxy: string) {
  return new Promise((resolve, reject) => {
    request(
      {
        url,
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
          Connection: 'keep-alive'
        },
        proxy
      },
      (error, res, body) => {
        if (!error && res.statusCode === 200) {
          resolve(2);
        } else {
          resolve(3);
        }
      }
    );
  });
}

export default async function proxyTest(
  proxies: ProxyData[],
  desktopUrl: string,
  updateProxyStatus: (id: number, status: number, time: number) => void,
  async = true
) {
  if (!async) {
    // sync test
    for (let i = 0; i < proxies.length; i++) {
      const p = proxies[i];
      let proxyUrl = '';
      if (p.username && p.username !== '') {
        proxyUrl = `http://${p.username}:${p.password}@${p.ip}:${p.port}`;
      } else {
        proxyUrl = `http://${p.ip}:${p.port}`;
      }

      updateProxyStatus(p.id, 1, 0);
      const now = new Date().getTime();
      // eslint-disable-next-line no-await-in-loop
      const result = await doRequest(desktopUrl, proxyUrl);
      const diff = new Date().getTime() - now;
      updateProxyStatus(p.id, result as number, diff);
    }
  } else {
    // async test
    proxies.forEach((p, i) => {
      let proxyUrl = '';
      if (p.username && p.username !== '') {
        proxyUrl = `http://${p.username}:${p.password}@${p.ip}:${p.port}`;
      } else {
        proxyUrl = `http://${p.ip}:${p.port}`;
      }

      updateProxyStatus(p.id, 1, 0);
      const now = new Date().getTime();
      request(
        {
          url: desktopUrl,
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
            Connection: 'keep-alive'
          },
          proxy: proxyUrl
        },
        (err, res, body) => {
          const diff = new Date().getTime() - now;
          if (!err && res.statusCode === 200) {
            updateProxyStatus(p.id, 2, diff);
          } else {
            updateProxyStatus(p.id, 3, diff);
          }
        }
      );
    });
  }
}
