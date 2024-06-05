import { StartFunc as StartFuncAddListeners } from '../../../Entryfile.js';
let StartFunc = () => {
  document.getElementById('container').className = "OnlineClass";
  document.getElementById("container").innerHTML = "";
  let temp = document.getElementById("templateOnlineUser");
  let temp_content = temp.content;
  let copyHTML = document.importNode(temp_content, true);

  let app = document.getElementById("container");
  app.append(copyHTML);
    StartFuncAddListeners();
}

export { StartFunc };