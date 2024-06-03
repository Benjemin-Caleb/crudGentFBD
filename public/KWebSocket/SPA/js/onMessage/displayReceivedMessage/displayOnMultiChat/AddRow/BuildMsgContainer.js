let StartFunc = (inData) => {
    BuildMsgContainer(inData);
};

let BuildMsgContainer = (inData) => {
    let temp = document.getElementById("templateMultiChat");
    let uniqueId = inData.fromId;
    let temp_content = temp.content;
    let copyHTML = document.importNode(temp_content, true);
    let app = document.getElementById("pageId");
    app.append(copyHTML);
    document.getElementById("multi-chat-id").id = uniqueId;
    document.getElementById("fromNameId").innerHTML = uniqueId;
}

export { StartFunc };