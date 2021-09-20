import lib from "./functions.js";
let invalidComment=[
    `invalid command bro`
    ,`idk what that means :man_shrugging: `
    ,`no clue what u meant :man_shrugging: `
    ,`invalid command use help to know syntax`
    ,`im not sentient man idk what u mean :man_shrugging: `
    ,`use the help command cause idk what you just said`
    ,`:man_shrugging: no idea`
    ,`!#%^*$Q@#(*!#@$%`

]

export default ()=>invalidComment[lib.rand(invalidComment.length)];
