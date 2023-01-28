// import {chatDialog} from "../Entities/ChatDialog.js";
//
// export class WsHandler extends WebSocket {
//     ws;
//     chat;
//
//     constructor(url, chat) {
//         super(url);
//         // this.ws = new WebSocket(url);
//         this.chat = chat;
//         this.onopen = () => console.log('Connection open');
//         // this.onopen(() => console.log('open'));
//         this.onmessage = ({data}) => {
//             console.log('message: ', data)
//             const userData = JSON.parse(data);
//
//             this.chat.renderMessage(userData);
//         }
//     }
//
// }