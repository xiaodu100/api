const DEV = 'prod';

const dbConfig = [{
    type: 'mysql',
    host: DEV != 'prod' ? '127.0.0.1' : '10.8.11.23'
}]