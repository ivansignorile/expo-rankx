import { get, post, put, destroy, patch } from "./rankx-http";

const retrievePasses = async () => {
    const res = await get('pass.json');
    return res;
}

const retrievePlaces = async () => {
    const res = await get('luoghi.json');
    return res;
}   
const retrieveFighters = async () => {
    const res = await get('fighters?populate=*');
    return res.data;
}
export {
    retrievePasses,
    retrievePlaces,
    retrieveFighters
}