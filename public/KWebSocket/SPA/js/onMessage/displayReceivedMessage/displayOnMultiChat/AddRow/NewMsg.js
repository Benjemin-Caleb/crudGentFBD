let StartFunc = (inData) => {
    AppendNewMsg(inData);
};

let AppendNewMsg = (inData) => {
    let containers = document.getElementsByClassName("multi-chat-class");

    for (let i = 0; i < containers.length; i++) {
        if (containers[i].id === inData.fromId) {
            let currentContainer = containers[i];
            let receivedMessage = inData.Message;
            let chatContent = document.getElementsByClassName("multi-chat-content")[i];
            const template = document.getElementById("templateMultiChatMsg");
            let chatMessage = template.content.getElementById("chat-message");

            chatMessage.textContent = receivedMessage;
            chatContent.appendChild(template.content.cloneNode(true));

        }
    }
}


export { StartFunc };