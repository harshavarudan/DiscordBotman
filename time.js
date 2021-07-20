import lib from "./functions.js";

let time ={
    fullRead: true,
    input:[
        `time`
        ,`time?`
        ,`what is the time?`
        ,`what is the time`
        ,`time kitna`
        ,`time kitna hua`
        ,`time kitna?`
        ,`time kitna hua?`
    ],
    output:(text)=>
    {
        const currentTime=time.getcurrenttime();
        const outputmsg=
            [
                `it is currently ${currentTime}`
                ,`fine, it is ${currentTime} right now`
                ,`yea it is ${currentTime}`
                ,`look it up genius\n${currentTime}`
                ,`${currentTime} \nfuture of this country,and asking a bot for the time smh:man_facepalming: :man_facepalming: `
                ,`hmm ${currentTime}`
                ,`dont have a device connected to the internet or smtg :unamused: :unamused: ? smh \n its ${currentTime} btw`


            ];
            let msg=outputmsg[lib.rand(outputmsg.length)];
        return  text.includes(`kitna`)? `${msg}\nmalli hindi mohaniki :man_facepalming: :man_facepalming: `:msg;
    },

    getcurrenttime :()=>{ return `${new Date().getHours()}:${new Date().getMinutes()}`}

}

export default time;
