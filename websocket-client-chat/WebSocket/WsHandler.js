export class WsHandler extends WebSocket {
    ws;

    constructor(url) {
        super(url);
        // this.ws = new WebSocket(url);
        this.onopen = () => console.log('open');
        // this.onopen(() => console.log('open'));
        this.onmessage = (event) => {
            console.log('message: ', event.data)
            // this.send = (message) => {
            //     console.log('send')
            // };
        }
    }

}