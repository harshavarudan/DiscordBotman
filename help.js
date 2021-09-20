
let help={
    fullRead:true,
    input:[
        `help`
        ,`pls help`
        ,`--help`
        ,`--h`
        ,`info`
    ],
    output:(text)=>{
    return `most of the commands should be easily relatable
    
    help-->shows this info
    time-->shows time
    online-->check to see if the bot is online
    help mc install-->helps newbies on installing minecraft
    server-->for minecraft
    {
    server status-->shows status
    ,server start-->starts the server(can only start one),
    server address-->gives the address of the server for minecraft
    }
    note-->allows you write and read note 
    {
    note read-->reads the note
    ,note write-->writes a note(appends)
    ,note override||note delete-->deletes the note
    }
    calculate-->calculates a given mathematical expression
    ping -->for giving highly inacurate ping(usesless af)
    meme x-->sends x random crrappy memes
    `

    }
}
export default help;
