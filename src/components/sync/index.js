import lodash from "lodash-es"
import item from "./sync.css"
const sync = function () {
    console.log("sync");
    document.getElementById("app").innerHTML= `<h1 class="${item.test}">sync  h1</h1>`;
}

const isArray = function (args) {
    console.log("isArray");
    console.log(lodash.isArray(args));
}

export {
    sync,
    isArray
}