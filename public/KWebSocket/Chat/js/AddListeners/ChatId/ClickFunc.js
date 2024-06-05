import { StartFunc as StartFuncChangeName} from "./AddListeners/ChangeName/EntryFile.js";
import { StartFunc as StartFuncChangeScreen} from "./AddListeners/ChangeScreen/EntryFile.js";

let StartFunc = () => {
    StartFuncChangeScreen();
    StartFuncChangeName();
};

export { StartFunc };