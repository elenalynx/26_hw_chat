import {WsHandler} from "./WebSocket/WsHandler.js";
import {Form} from "./Entities/Form.js";

const url = 'ws://localhost:8080';
const ws = new WebSocket(url);
const form = document.querySelector('#formWs');
const dialog = document.querySelector('#chat-container');
let inputsFormData;
let users = {};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    inputsFormData = new FormData(form);

    users = {
        user: inputsFormData.get('user'),
        message: inputsFormData.get('message'),
        id: 1,
    };

    ws.send(JSON.stringify(users));
}

console.log(ws)


// onclose
// onerror
ws.onopen = () => console.log('Connection open');


ws.onmessage = ({data}) => {
    console.log(data)
    const userData = JSON.parse(data);

    renderMessage(userData);

}

function renderMessage( { user, message, id } ) {

    console.log(`User: ${user} Message: ${message}`);
    // console.log(event);
    // console.log(`User:${} Message: ${data}`);
    // if (dialog.closest('ul')) {
    const html = `
    <li data-id="${id}">${user}: ${message}</li>`;

    dialog.insertAdjacentHTML('afterbegin', html);
    // }
}

// const ws = new WsHandler(url);
// console.log(ws)

//для пробы другой реализации
// const formId = '#formWs';
// console.log(formId)
// const formHandler = new Form(formId, url);
// console.log(formHandler)
