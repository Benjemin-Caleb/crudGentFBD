import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import ConfigJson from `/bin/config/${jVarGlobalTableName}` with {type: 'json'};
// import ConfigJson from '/bin/config/Openings.json' with {type: 'json'};


const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        columns:ConfigJson.tableConfig.columns
    });
};

export { StartFunc };
