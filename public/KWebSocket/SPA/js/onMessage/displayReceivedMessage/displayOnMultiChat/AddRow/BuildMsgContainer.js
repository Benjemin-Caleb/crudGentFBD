let StartFunc = (inData) => {
    let temp = document.getElementById("templateMultiChat");
    console.log("new user came")
    // console.log(temp);
    let uniqueId = inData.fromId;
    let temp_content = temp.content;
    let copyHTML = document.importNode(temp_content, true);
    let app = document.getElementById("pageId");
    console.log(app);
    // console.log(temp.content);
    
    
    // console.log(document.getElementById("fromNameId"))
    app.append(copyHTML);
    console.log(document.getElementById("fromNameId"))
    // copyHTML.querySelector("#fromNameId").textContent = uniqueId;
    document.getElementById("pageId").id = uniqueId;
    // copyHTML.querySelector("#multi-chat-id").id = uniqueId;
    // document.getElementById("fromIdName").textContent = uniqueId;
};

export { StartFunc };