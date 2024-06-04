let StartFunc = () => {
  document.getElementById("container").innerHTML = "";
  let temp = document.getElementById("templateMultiChatContainer");
  let temp_content = temp.content;
  let copyHTML = document.importNode(temp_content, true);

  let app = document.getElementById("container");
  app.append(copyHTML);
}

export { StartFunc };
