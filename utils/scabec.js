import { get, post, put, destroy, patch } from "./scabec-http";

const retrievePasses = async () => {
    const res = await get('pass.json');
    return res;
}

const retrievePlaces = async () => {
    const res = await get('luoghi.json');
    return res;
}   

export {
    retrievePasses,
    retrievePlaces
}