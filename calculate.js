import lib from "./functions.js";
import {evaluate} from "mathjs"
let calculate={
    fullRead:false,
    input:[
    'calculate'
    ],
    output:(text)=>{
        try {
            return evaluate(text.slice(9))
        }
        catch (err){
            return "Bro mathematical error man type correctly"
        }
    }
}
export default calculate;
