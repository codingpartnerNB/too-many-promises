// Using Promises

// function userPostCreated() {
//     const posts = [];

//     // const updateLastUserActivityTime = new Promise((resolve, reject) => {
//     //     resolve(new Date().getTime());
//     // });

//     const updateLastUserActivityTime = Promise.resolve(new Date().getTime());
       

//         const createPost = (post) => new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 posts.push(post);
//                 resolve(post);
//             }, 1000);
//         });

//         const deletePost = ()=> new Promise((resolve, reject) => {
//             if (posts.length > 0) {
//                 const poppedElement = posts.pop();
//                 resolve(poppedElement);
//             } else {
//                 reject("ERROR: ARRAY IS EMPTY");
//             }
//         });

//         const displayPosts = ()=>{
//             return new Promise((resolve,reject)=>{
//                 posts.forEach((post)=>{
//                     console.log(post.title);
//                 })
//                 resolve();
//             })
//         }

//         Promise.all([createPost({ title: "Post One" }), updateLastUserActivityTime,createPost({ title: "Post Two" }), updateLastUserActivityTime,createPost({ title: "Some Post" }), updateLastUserActivityTime])
//         .then((msg)=>{
//             console.log(msg);
//         })
//         .then(()=>{
//             deletePost();
//         })
//         .then(()=>{
//             displayPosts();
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//     }
  
  
//   userPostCreated();



// Using async/await

  const userPostCreated = async()=> {
    const posts = [];

    const updateLastUserActivityTime = Promise.resolve(new Date().getTime());
       

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

        const [post1, lastActivity1, post2, lastActivity2, post3, lastActivity3] = await Promise.all([createPost({ title: "Post One" }), updateLastUserActivityTime,createPost({ title: "Post Two" }), updateLastUserActivityTime,createPost({ title: "Some Post" }), updateLastUserActivityTime])
        .catch((err) => {
            console.log(err);
        })

        console.log(`${post1.title} - ${lastActivity1}`);
        console.log(`${post2.title} - ${lastActivity2}`);
        console.log(`${post3.title} - ${lastActivity3}`);

        await deletePost();
        
        await displayPosts();
        
    }
  
  
  userPostCreated();