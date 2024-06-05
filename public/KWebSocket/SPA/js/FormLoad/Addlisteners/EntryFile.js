import { StartFunc as StartFuncOnlineScreenListeners } from "./OnlineScreenListeners/EntryFile.js";
import { StartFunc as StartFuncChatScreenListeners } from "./ChatScreenListeners/EntryFile.js";
import { StartFunc as StartFuncMultiChatScreenListeners } from  "./ProfileScreenListeners/EntryFile.js";
import { StartFunc as StartFuncProfileScreenListeners } from  "./MultiChatIdListeners/EntryFile.js";

import { StartFunc as StartFuncSideMenuListeners } from "./SideMenuListeners/EntryFile.js";
import { StartFunc as StartFuncLoadScreens } from "./LoadScreens/EntryFile.js";

const StartFunc = () => {
    StartFuncOnlineScreenListeners();
    StartFuncChatScreenListeners();
    StartFuncProfileScreenListeners();
    StartFuncMultiChatScreenListeners();

    StartFuncSideMenuListeners();
    StartFuncLoadScreens();
};

export { StartFunc };
