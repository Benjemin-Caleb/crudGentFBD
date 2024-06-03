let StartFunc = (inData) => {
    BuildMsgContainer(inData);
};

let BuildMsgContainer = ({inData:inData,len}) => {
    let temp = document.getElementById("templateMultiChat");
    let uniqueId = inData.fromId;
    let temp_content = temp.content;
    let copyHTML = document.importNode(temp_content, true);
    let app = document.getElementById("container");
    app.querySelector(".row").append(copyHTML);
    document.getElementById("multi-chat-id").id = uniqueId;
    console.log("len", len);
    document.getElementsByClassName("fromNameClass")[len].innerHTML = uniqueId;
}

export { StartFunc };