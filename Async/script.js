// console.log("Buy Hamburger");
// console.log("Buy Pizza");
// alert("Welcome wait for me");
// console.log("Buy Tea");

//setTimeout
// const msg = () => {
//   console.log("How are you");
// };

// // setTimeout(function () {
// //   msg();
// // }, 3000);

//Asyn code

// const msg = () => {
//   console.log("How are you");
// };

// console.log("Go to park");
// setTimeout(msg, 3000);
// console.log("Go to Bank");

//-----
//Callback
//------

//Logic
//1. create a post
//2. fetch all posts

// const postsData = [
//   {
//     title: "Title 1",
//     desc: "Desc 1",
//   },
//   {
//     title: "Title 2",
//     desc: "Desc 2",
//   },
//   {
//     title: "Title 3",
//     desc: "Desc 3",
//   },
// ];

// //fetch all posts

// function fetchPosts() {
//   console.log("Post is fetcting...");
//   console.log(postsData);
// }

// fetchPosts();

// //create post
// function createPost(post, cb) {
//   //push the new post into the existing posts
//   setTimeout(function () {
//     postsData.push(post);
//     //invoke callback
//     cb();
//   }, 5000);
// }

// //invoke
// createPost(
//   {
//     title: "Title 4",
//     desc: "Desc 4",
//   },
//   fetchPosts
// );

//-----
//Promise
//------

// const userPromise = new Promise((resolve, reject) => {
//   //code
//   let user = {
//     name: "John",
//     city: "Kumasi",
//   };
//   let isFetched = true;
//   if (isFetched) {
//     resolve(user);
//   } else {
//     reject("Error fetching user. Try again later");
//   }
// });

// //Resolving

// userPromise
//   .then(function (valueFromResolve) {
//     //.then() is use to get the value from resolve fn
//     console.log(valueFromResolve);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//-------
//Function returning a promise
//------

// function getUser() {
//   return new Promise((resolve, reject) => {
//     //logic goes here
//     let user = {
//       name: "John",
//       city: "Accra",
//     };
//     let isFetched = false;
//     if (isFetched) {
//       //resolve
//       resolve(user);
//     } else {
//       //reject
//       reject("Error fetching user");
//     }
//   });
// }

// getUser()
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//-------
//Consuming multiple promises
//------

//1.promise.all()
//2. promise.race()

//1. Fetch all posts
//2. fetch all comments associated with a post

//fetch post
// const postPromise = new Promise(function (resolve, reject) {
//   let isPostFetched = true;
//   let post = {
//     title: "Title 1",
//     desc: "Desciption 1",
//   };
//   if (isPostFetched) resolve(post);
//   //reject
//   reject("error fetch post");
// });

//fetch comment
// const commentPromise = new Promise(function (resolve, reject) {
//   let commentFetched = true;
//   let comment = {
//     user: "Candy",
//     desc: "Excellent post",
//   };
//   if (commentFetched) resolve(comment);
//   //reject
//   reject("Error fetching comment");
// });

//resolve multiple promises (promise.all())

// Promise.all([postPromise, commentPromise])
//   .then(allPromises => {
//     console.log(allPromises[0]);
//     console.log(allPromises[1]);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//resolve multiple promises (promise.race())

// Promise.race([postPromise, commentPromise])
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//------
//Async /Await
//-----

function makeAPIRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve
      let isFetched = true;
      let user = {
        name: "Miki",
        age: 20,
      };

      if (isFetched) {
        resolve(user);
      }
      //reject
      reject("Error fetching user");
    }, 5000);
  });
}

async function getUser() {
  try {
    //make api call to fetch user
    const res = await makeAPIRequest();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

getUser();
