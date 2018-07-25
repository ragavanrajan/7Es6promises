const posts = [{
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    }
];

function createPost(post) {
    // **************
    // remove callback and return promise return new promise- inside promise we pass in a function
    // resolve - when we are done with what are we doing
    // reject - is some kind of error we want to throw 
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);
            // create variable called error for reject
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({
        title: 'Post Three',
        body: 'This is post three'
    })
    // *************
    // when we get a promise Response. we handle it with promise resp
    .then(getPosts)
    // *************
    // catch the error here 
    .catch(function(err) {
        console.log(err);
    });