export const CHANGE_NAME = 'change-name';
export function changeName(name){
    return {
        type: CHANGE_NAME,
        value: name
    }
};

export const ADD_AGE = 'add-age';
export function addAge(value){
    return {
        type: ADD_AGE,
        value: value
    }
};