export class ChatDialog {
    ws;
    config;

    constructor(config) {
        this.config = config;
        this.ws = new WebSocket(this.config.url);

        this.ws.onopen = this.onopen;
        this.ws.onmessage = this.onmessage.bind(this);
    }

    onopen() {
        console.log('Connection open');
    }

    onmessage({data}) {
        console.log('message: ', data)
        const userData = JSON.parse(data);

        this.config.onMessage(userData);
    }

    /**
     * @param {Object} message
     */
    sendMessageData(message) {
        this.ws.send(JSON.stringify(message));
    }
}