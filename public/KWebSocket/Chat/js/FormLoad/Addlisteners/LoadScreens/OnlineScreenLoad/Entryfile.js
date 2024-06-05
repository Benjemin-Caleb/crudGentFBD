import { StartFunc as StartFuncClickFunc } from "./ClickFunc/EntryFile.js";

let StartFunc = () => {
  document
    .getElementById("onlineId")
    .addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };