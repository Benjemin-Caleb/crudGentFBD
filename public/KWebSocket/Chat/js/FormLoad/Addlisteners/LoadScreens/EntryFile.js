import { StartFunc as StartFuncOnlineScreen } from "./OnlineScreenLoad/EntryFile.js";
import { StartFunc as StartFuncChatScreen } from "./ChatScreenLoad/EntryFile.js";
import { StartFunc as StartFuncMultiChatScreen } from "./MultiChatScreenLoad/EntryFile.js";
import { StartFunc as StartFuncProfileScreen } from "./ProfileScreenLoad/EntryFile.js";

let StartFunc = () => {
    StartFuncOnlineScreen();
    StartFuncChatScreen();
    StartFuncMultiChatScreen();
    StartFuncProfileScreen();
}
export { StartFunc };