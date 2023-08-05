//Function return a promise

const getUser = () => {
  return new Promise((resolve, reject) => {
    //logic goes here
    let user = {
      name: "John",
      city: "N-Eliya",
    };
    let isFetched = false;
    if (isFetched) {
      //resolve
      resolve(user);
    } else {
      //reject
      reject("Error fetching user");
    }
  });
};

// const result = getUser();
// console.log(result);

getUser()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
