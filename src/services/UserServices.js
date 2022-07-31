export async function getUsers() {
    return await fetch('http://localhost:3333/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json())
}

export async function getUser(email) {
    return await fetch(`http://localhost:3333/users?email=${email}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json())
}
 
export async function setUser(user) {
    return fetch('http://localhost:3333/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(data => data.json())
}