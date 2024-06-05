import { StartFunc as StartFuncChangeScreen } from "./AddListerners/changeScreen/EntryFile.js";
import {StartFunc as StartFuncChangeUserName} from "./AddListerners/changeUserName/EntryFile.js";
import { StartFunc as StartFuncGetOnlineUsers} from "./AddListerners/getOnlineUsers/EntryFile.js";


let StartFunc = () => {
  StartFuncChangeScreen();
  StartFuncChangeUserName();
  StartFuncGetOnlineUsers();
};

export { StartFunc };