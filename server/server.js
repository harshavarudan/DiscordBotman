import xmlhttprequest from "xmlhttprequest"
import shell from "shelljs"
import invalid from "../invalid.js";

 function httpGetAsync(theUrl, callback)
{
    const xmlHttp = new xmlhttprequest.XMLHttpRequest();
    xmlHttp.onreadystatechange = ()=> {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText);
        else{callback(`inactive`)}
    }
     xmlHttp.open("GET", theUrl, true); // true for asynchronous
     xmlHttp.send(null);
}
let processList=[]
const startServer=()=>{
    shell.cd("C:\\Users\\harsh\\Desktop\\Minecraft")
    processList[0]= shell.exec("ngrok.bat ",{async:true})
    shell.cd("Minecraft Server")
    processList[1] =shell.exec("start cmd.exe /k start.bat",{async:true})

}

const getAddress= ()=> {
     httpGetAsync("http://localhost:4040/api/tunnels", (text) => text === `inactive` ? text : server.ServerStatus.Address = JSON.parse(text).tunnels[0].public_url.slice(6))

}
const getPlayers= ()=>{
     httpGetAsync("http://localhost:4567/v1/players", (array) => {

         if(array==='inactive'){
             return;
         }
         array=JSON.parse(array);
         let list=[];
        array.forEach((player)=>{list.push(player.displayName)})
         server.ServerStatus.players=list;

     });
}
let server={
    ServerStatus:{
        IsOn:false,
        Address:`inactive`,
        players:[]
    },
    fullRead:false,
    input:[
        `server`,
        `players`
    ],
    output:(text)=>{
        if (text==='server start'){
            if(!server.ServerStatus.IsOn){
                server.ServerStatus.IsOn=true;
                startServer()
               setTimeout( getAddress,2000)
                setInterval(getPlayers,5000)
                return `ok starting minecraft server`
            }
            else {
               return  server.ServerStatus.Address===`inactive`?`there is an error man need to do manual reboot`:`its already on`
            }
        }
        if (text==='server address'){
            return server.ServerStatus.Address;
        }
        if(text==='server status'){
            return JSON.stringify(server.ServerStatus)
        }
        if(text==='players'){
        return server.ServerStatus.players.length===0?`None are playing right now :cry:`: `Current players:\n${server.ServerStatus.players.toString()}`;
        }

        else{return invalid()}
    }
}
export default server;
