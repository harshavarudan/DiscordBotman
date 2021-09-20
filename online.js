import lib from "./functions.js";
let online={
    fullRead:true,
    input:[
        ``,
        ` `,
        `u der`
        ,`online`
        ,`online?`
        ,`u der?`
        ,`alive?`
        ,`alive`
        ,`der?`
        ,`u der`
        ,`u alive?`
        ,`u alive`
        ,`hi`
        ,`hello`
        ,`sup`

    ],
    output:(text)=>{
        const outputmsg=[
            `:cry: yea?`
            ,`entra ne bada`
            ,`yea man im der`
            ,`ssup boi`
            ,`yea kiddo?`
            ,`need anything?`
            ,`sup`
            ,`yea?`
            ,`im ded`
            ,`.....botman is dead \ni killed him`
            ,`kya hua`
            ,`yep?`
            ,`hello`
            ,`hi`
            ,`bol`
            ,`em kavali?`
            ,`i exist to serve your ass`
        ]
        return outputmsg[ lib.rand(outputmsg.length)];
    }
}
export default online;
