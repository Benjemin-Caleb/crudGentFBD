// let StartFunc = (inData) => {
//     let message = inData.Message;
//     let temp = document.getElementById("chat_in_mutlichat");
//     let chatContent = document.getElementById("mutli-chat-content");
//     let chatMessage = temp.content.getElementById("chat-message");
//     chatMessage.textContent = message;
//     console.log(chatContent)
//     chatContent.appendChild(temp.content.cloneNode(true));

// };

// export { StartFunc };

let StartFunc = (inData) => {
    let containers = document.getElementsByClassName("page-heading");
    console.log("containers:", containers);

    for (let i = 0; i < containers.length; i++) {
        if (containers[i].id === inData.fromId) {
            let currentContainer = containers[i];
            console.log("currentContainer:", currentContainer);
            let receivedMessage = inData.Message;
            let chatContent = document.getElementById("multi-chat-content");
            const template = document.getElementById("templateMultiChatMsg");
            console.log("template:", template);
            let chatMessage = template.content.getElementById("chat-message");

            chatMessage.textContent = receivedMessage;
            chatContent.appendChild(template.content.cloneNode(true));

        }
    }
};

export { StartFunc };