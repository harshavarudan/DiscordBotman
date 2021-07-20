
import xmlhttprequest from "xmlhttprequest"
import shell from "shelljs"

/*
shell.cd("C:\\Users\\harsh\\Desktop\\Minecraft")
shell.exec("ngrok.bat ",{async:true})
shell.cd("Minecraft Server")
shell.exec("start cmd.exe /k start.bat",{async:true})
*/
/*
function httpGetAsync(theUrl, callback)
{

    const xmlHttp = new xmlhttprequest.XMLHttpRequest();
    xmlHttp.onreadystatechange = ()=> {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}
let temp="3224";

httpGetAsync("http://localhost:4040/api/tunnels", (text) => text === `inactive` ? text : temp= JSON.parse(text).tunnels[0].public_url)
let func=()=>{ setTimeout(()=>{(temp)},5000)}

*/
import {evaluate} from "mathjs"
console.log(evaluate("12.7 cm to inch"))
