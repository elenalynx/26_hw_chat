import {WsHandler} from "./WebSocket/WsHandler.js";
import {Form} from "./Entities/Form.js";

const url = 'ws://localhost:8080';

// const ws = new WsHandler(url);
// console.log(ws)

const formId = '#formWs';
console.log(formId)
const formHandler = new Form(formId, url);
console.log(formHandler)
