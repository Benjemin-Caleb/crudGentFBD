import { StartFunc as StartFuncOnlineId } from './onlineId/Entryfile.js';
import { StartFunc as StartFuncChatId } from './ChatId/EntryFile.js';
import { StartFunc as StartFuncMultiChatId } from './MultiChatId/Entryfile.js';
import { StartFunc as StartFuncProfileId } from './ProfileId/EntryFile.js'

const StartFunc = () => {
    StartFuncOnlineId();
    StartFuncChatId();
    StartFuncMultiChatId();
    StartFuncProfileId();
};

export { StartFunc };
