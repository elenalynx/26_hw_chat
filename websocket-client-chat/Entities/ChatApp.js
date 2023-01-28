import {ChatDialog} from "./ChatDialog.js";

export class ChatApp {
    form;
    chat;
    chatDialog;

    constructor(formId, url, chatId) {
        this.form = document.querySelector(formId);
        this.chat = document.querySelector(chatId);
        this.chatDialog = new ChatDialog({
            url: url,
            onMessage: (message) => {
                this.renderMessage(message);
            },
        });
        this.form.addEventListener('submit', this.onFormSubmit);
    }

    onFormSubmit(event) {
        event.preventDefault();
        console.log(event);

        const inputsFormData = new FormData(event.target);
        console.log(inputsFormData)

        // const users = {
        //     user: this.form.user.value,
        //     message: this.form.message.value,
        //     id: 1,
        // };
        const users = {
            user: inputsFormData.get('user'),
            message: inputsFormData.get('message'),
            id: 1,
        };
        console.log(users)

        // this.chatDialog.send(users);
        this.chatDialog.sendMessageData(users);
    }

    renderMessage({user, message, id}) {

        console.log(`User: ${user} Message: ${message}`);

        // if (dialog.closest('ul')) {
        const html = `
            <li data-id="${id}">${user}: ${message}</li>`;

        this.chat.insertAdjacentHTML('afterbegin', html);
        this.form.reset();

        // }
    }
}