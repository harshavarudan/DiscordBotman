let msg=`so you wanna download and play minecraft
the first thing you should do is go to this page https://tlauncher.org/en/
and download the launcher create an account and sign in with the tlauncher
click on latest release and click on play it would download the new release and save it

after that click on enter the game
after getting the main screen of the game
multiplayer-->
add server-->
leave server name as it is or rename it to your wish-->
and in minecraft address type in the server address -->
click done -->
choose the server and click join

to get the server address use the command  botman server address`
import lib from "./functions.js";
let mchelp={
    fullRead:true,
    input:[
    `help mc install`
    ],
    output:(text)=>{
    return msg;
    }
}
export default mchelp;
