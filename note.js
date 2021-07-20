import lib from "./functions.js";
import fs from 'fs'
import invalid from "./invalid.js";

const read=()=>{fs.readFile(note.path,'utf8',(err,data)=>{if(err){console.log(err)}note.writtenText=data})}
const write=(text)=>{fs.writeFile(note.path,text,(err)=>{if(err)console.log(err)})}
const append=(text)=>{fs.appendFile(note.path,text,(err)=>{if(err)console.log(err)})}

let note={
    fullRead:false,
    input:[
    `note`
    ],
    path:'note.txt',
    writtenText:"",
    output:(text)=>{
        let arg=text.slice(5)
        let command=arg.split(' ')[0];

    if(arg==="read"||arg===""||arg==="r"){return note.writtenText===""?"No note created":note.writtenText}
    if(command==="write"||command==="w"||command==="append"){
        append(arg.slice(arg.indexOf(" ")+1)+"\n")
        setTimeout(read,1000);
        return "ok adding to notes"
    }
    if(command==="override"||command==="delete"){
        write("");
        setTimeout(read,1000)
        return "Previous note has been deleted"
    }
    else return invalid();
    }
}
read()
export default note;
