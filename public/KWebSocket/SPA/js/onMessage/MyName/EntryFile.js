import { StartFunc as StartFuncjFLocalToInputUserNameId } from "./jFLocalToInputUserNameId.js";

let StartFunc = (inJsonData) => {
    let jVarLocalData = inJsonData;
    // console.log("jVarLocalData : ", jVarLocalData);
    if(jVarLocalData.fromId === localStorage.getItem('webSocketId')){
    StartFuncjFLocalToInputUserNameId(jVarLocalData.Message);
    }
};

export { StartFunc };