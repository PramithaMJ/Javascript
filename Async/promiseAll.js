//consuming multiple promises

// 1. promise.all()
// 2. promise.race()

//1. Fetch all posts
//2. Fetch all comments associated with a post

//fetch post
const postPromise = new Promise((resolve, reject) => {
  let isPostFetched = true;
  let post = {
    title: "Title 1",
    desc: "Description 2",
  };

  if (isPostFetched) {
    resolve(post);
  } else {
    reject("error fetching post");
  }
});

//fetch comment
const commentPromise = new Promise((resolve, reject) => {
  let commentFetched = true;
  let comment = {
    title: "Candy",
    desc: "Excellent post",
  };

  if (commentFetched) {
    resolve(comment);
  } else {
    reject("error fetching comment");
  }
});

//resolve multiple promises (promise.all())

Promise.all([postPromise, commentPromise])
  .then((allPromises) => {
    console.log(allPromises[0]);
    console.log(allPromises[1]);
  })
  .catch((err) => {
    console.log(err);
  });

//resolve multiple promises (promise.race())

Promise.race([postPromise, commentPromise])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
