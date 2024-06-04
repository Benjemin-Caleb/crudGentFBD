import { StartFunc as StartFuncMyName } from "./MyName/EntryFile.js";
import { StartFunc as displayReceivedMessage } from "./displayReceivedMessage/EntryFile.js";
import { StartFunc as displayOnlineClients } from "./displayOnlineClients/EntryFile.js";

let StartFunc = (inEvent) => {
    const data = JSON.parse(inEvent.data);

    if (data.type === 'returnOnlineClientsWOMe') {
        displayOnlineClients(data.res);
    };

    if (data.type === 'GetWebSocketId') {
        localStorage.setItem('webSocketId', data.webSocketId);
    };

    if (data.type === 'sendMessage') {
        displayReceivedMessage(data);
    };

    if (data.Type === 'ChangeName') {
        StartFuncMyName(data);
    };

};

export { StartFunc };