import commands from "./commands.js";
import invalid from "./invalid.js"
/*
    template
    input:[],
    output:(text)=>{},

*/
let reader=(inputMsg,text,fullRead)=>{
    if(fullRead){return text===inputMsg}
    else{return inputMsg.split(' ')[0]===text}
}

 let botman={
 commands:commands,
     sender:(inputMsg)=>{
     let outputMsg="invalid command boisdf";
     let validCommand=false;
     botman.commands.forEach((command)=>{
        if(!validCommand) command.input.forEach((text)=>
         {
             if (reader(inputMsg,text,command.fullRead)){
             validCommand=true;
         outputMsg=command.output(inputMsg)}
         })
     })
         if(!validCommand)
             outputMsg=invalid()
         return outputMsg;
     }
};
export default botman;
