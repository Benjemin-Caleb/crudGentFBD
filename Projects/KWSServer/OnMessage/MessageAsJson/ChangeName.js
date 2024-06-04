let StartFunc = ({ inDataAsJson, inws, inClients,inWss }) => {

    let LocalDataAsJson = inDataAsJson;

    LocalFuncChangeNameInClients({ inClients, inws, inName: LocalDataAsJson.Message });
    let LocalClientObject = inClients.get(inws);
    LocalDataAsJson.fromId = LocalClientObject.id;
    
    LocalFuncToAllClients({ inDataAsJson: LocalDataAsJson, inws,inWss });
};

let LocalFuncToAllClients = ({  inDataAsJson, inws,inWss }) => {
    inWss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(inDataAsJson));
        }
      });

}

let LocalFuncChangeNameInClients = ({ inClients, inws, inName }) => {
    let LocalChangedObject = inClients.get(inws);
    LocalChangedObject.Name = inName;

}

export { StartFunc };