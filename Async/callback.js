//callback

//Logic
// 1. create a post
// 2. fetch all posts

const postsData = [
  {
    title: "Title 1",
    desc: "Description 1",
  },
  {
    title: "Title 2",
    desc: "Description 2",
  },
  {
    title: "Title 3",
    desc: "Description 3",
  },
];

// fetch all data
fetchPosts = () => {
  console.log("Post is fetching...");
  console.log(postsData);
};

fetchPosts();

//create post
// createPosts=(post)=>{
//     postsData.push(post);
//     console.log(postsData);
// }

createPosts = (post, cb) => {
  setTimeout(() => {
    postsData.push(post);
    //invoke callback
    cb();
  }, 5000);
  // console.log(postsData);
};

//invoke
// createPosts(
//   {
//     title: "Title 4",
//     desc: "Description 4",
//   },
//   () => {
//     console.log("I am a call back and i will be caught after 5 second");
//   }
// );
createPosts(
  {
    title: "Title 4",
    desc: "Description 4",
  },
  () => {
    fetchPosts;
  }
);
