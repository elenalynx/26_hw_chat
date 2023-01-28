// import {WsHandler} from "./WebSocket/WsHandler.js";
import {ChatApp} from "./Entities/ChatApp.js";

const url = 'ws://localhost:8080';
const formId = '#formWs';
const chatId = '#chat-container';

let chatApp;

chatApp = new ChatApp(formId, url, chatId);

// chatApp.init();




