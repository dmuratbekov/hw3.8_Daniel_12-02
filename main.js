const baseURL = 'https://jsonplaceholder.typicode.com';

const endpoints = {
    posts: "/posts",
    post: (id) => `/posts/${id}`
};

const myFetch = (url, method, data = null, header = null) =>{
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.send(data);

        xhr.onload = () => {

            if (xhr.status >= 100 && xhr.status < 400) {
                resolve(JSON.parse(xhr.response))
            } else {
                reject({status: xhr.status})
            }

        }
    })
}


const getAllPosts = async () => {
    const response = await myFetch(`${baseURL}${endpoints.posts}`, 'GET');
    console.log(response);
}
getAllPosts();

const post = {
    userId: 10,
    title: "Hello, World!",
    body: "its body"
};

const creatPost = async (post) => {
    const response = await myFetch(`${baseURL}${endpoints.posts}`, 'POST',  JSON.stringify(post));
    console.log(response);
}

creatPost(post);


const updatePost = async (post_id, post_obj) => {
    const response = await myFetch(`${baseURL}${endpoints.post(post_id)}`, 'PUT',  JSON.stringify(post_obj));
    console.log(response);
}

updatePost(1, post);


const deletePost = async (post_id) => {
    const response = await myFetch(`${baseURL}${endpoints.post(post_id)}`, 'DELETE');
    console.log(response);
}


deletePost(2);


