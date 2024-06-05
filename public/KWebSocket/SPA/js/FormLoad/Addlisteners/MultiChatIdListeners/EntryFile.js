import { StartFunc as StartFuncChangeName } from './ChangeName/EntryFile.js';
import { StartFunc as StartFuncSendButton } from './sendBtn/EntryFile.js';
let StartFunc = () => {
    StartFuncChangeName();
};

export { StartFunc };