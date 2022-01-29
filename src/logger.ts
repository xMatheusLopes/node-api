import * as graylog2 from 'graylog2';

const logger = new graylog2.graylog({
    servers: [
        { 'host': '127.0.0.1', port: 12201 },
        { 'host': '127.0.0.1', port: 12201 }
    ],
    hostname: 'node_api', // the name of this host
                             // (optional, default: os.hostname())
    facility: 'Node.js',     // the facility for these log messages
                             // (optional, default: "Node.js")
    bufferSize: 1350         // max UDP packet size, should never exceed the
                             // MTU of your system (optional, default: 1400)
});

export default logger;