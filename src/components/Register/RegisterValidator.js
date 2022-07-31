export default function RegisterValidator(user, data) {
    for(let element of data){
        if(element.email === user.email){
            throw new Error('Email already exists.');
        } else if (element.username === user.username) {
            throw new Error('Username already exists.');
        }
    }
}