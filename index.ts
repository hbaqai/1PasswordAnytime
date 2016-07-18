import * as http from 'http';
import * as log from 'loglevel';

const server = http.createServer((request, response) => {
  response.statusCode = 200;
});

server.listen(8080, () => {
  log.info('listening on port 8080');
});
