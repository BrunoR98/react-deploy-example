export async function getPosts() {
    return await fetch('http://localhost:3333/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json())
}

export async function setPost(post) {
    return fetch('http://localhost:3333/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(data => data.json())
}