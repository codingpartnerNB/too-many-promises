function userPostCreated() {
    const posts = [];

    const updateLastUserActivityTime = new Promise((resolve, reject) => {
        resolve(new Date().getTime());
    });

        const createPost = (post) => new Promise((resolve, reject) => {
            setTimeout(() => {
                posts.push(post);
                resolve(post);
            }, 1000);
        });

        const deletePost = ()=> new Promise((resolve, reject) => {
            if (posts.length > 0) {
                const poppedElement = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY");
            }
        });

        const displayPosts = ()=>{
            return new Promise((resolve,reject)=>{
                posts.forEach((post)=>{
                    console.log(post.title);
                })
                resolve();
            })
        }

        Promise.all([createPost({ title: "Post One" }), updateLastUserActivityTime,createPost({ title: "Post Two" }), updateLastUserActivityTime,createPost({ title: "Some Post" }), updateLastUserActivityTime])
        .then((msg)=>{
            console.log(msg);
        })
        .then(()=>{
            deletePost();
        })
        .then(()=>{
            displayPosts();
        })
        .catch((err) => {
            console.log(err);
        })
    }
  
  
  userPostCreated();