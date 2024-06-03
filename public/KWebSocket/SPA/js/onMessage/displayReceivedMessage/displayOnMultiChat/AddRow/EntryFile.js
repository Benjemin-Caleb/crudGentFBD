import { StartFunc as StartFuncBuildMsgContainer } from "./BuildMsgContainer.js";
import { StartFunc as StartFuncNewMsg } from "./NewMsg.js";

let existingUser = [];

let StartFunc = (inData) => {
    console.log("existingUser:", existingUser, inData);
    if (existingUser.includes(inData.fromId)===false) {
        StartFuncBuildMsgContainer(inData);
        existingUser.push(inData.fromId);
    }
    console.log(existingUser, "after keeping");
    StartFuncNewMsg(inData);
};

export { StartFunc };