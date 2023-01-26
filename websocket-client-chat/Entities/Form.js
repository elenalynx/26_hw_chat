import {WsHandler} from "../WebSocket/WsHandler.js";

export class Form {
    ws;
    form;
    // event;
    messageText;

    constructor(formId, url) {
        // this.ws = new WebSocket(url);
        this.ws = new WsHandler(url);
        this.form = document.querySelector(formId);
        this.form.addEventListener('submit', this.onFormSubmit);
        console.log(this.form)
        console.log(this.ws)
        // console.log(this.event)
    }

    // init() {
    //     this.addHandlerOnSubmit();
    //     console.log('init form')
    // }

    addHandlerOnSubmit() {
        // this.form.addEventListener('submit', this.onFormSubmit);
        // console.log('init form handler')
        // console.log(this.form.addEventListener('submit', this.onFormSubmit))
    }

    onFormSubmit(event) {
        event.preventDefault();
        console.log(event);

        this.form = event.target;
        console.log(this.form);
        console.log(this.ws);
        this.messageText = this.form.message.value;
        console.log(this.messageText);

        this.ws.send(this.messageText);
    }
}