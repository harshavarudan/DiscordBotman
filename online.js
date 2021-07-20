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
            ,`yep`
            ,`im ded`
            ,`.....botman is dead \ni killed him`


        ]
        return outputmsg[ lib.rand(outputmsg.length)];
    }
}
export default online;
