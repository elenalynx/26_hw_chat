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

        this.form.addEventListener('submit', this.onFormSubmit.bind(this));
    }

    onFormSubmit(event) {
        event.preventDefault();

        const inputsFormData = new FormData(event.target);

        const users = {
            user: inputsFormData.get('user'),
            message: inputsFormData.get('message'),
            id: 1,
        };

        this.chatDialog.sendMessageData(users);
    }

    renderMessage({user, message, id}) {

        console.log(`User: ${user} Message: ${message}`);

        if (this.chat.closest('ul')) {
        const html = `
            <li data-id="${id}">${user}: ${message}</li>`;

        this.chat.insertAdjacentHTML('afterbegin', html);
        this.form.reset();
        }
    }
}