import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../Config.json" assert { type: "json" };

let StartFunc = async ({ inBodyData }) => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;

    let jVarLocalFetchHeaders = await StartFuncFetchHeaders({ inBodyData });
    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/WithCheckAndGenPk`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let data = await response.json();

    return await data;
};



export { StartFunc };