import { StartFunc as StartFuncChangeName } from './AddListenrs/ChangeName/EntryFile.js';
import { StartFunc as StartFuncChangeScreen } from './AddListenrs/ChangeScreen/EntryFile.js';
let StartFunc = () => {
    StartFuncChangeScreen();
    StartFuncChangeName();
};

export { StartFunc };