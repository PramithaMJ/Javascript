//promise

const userpromise = new Promise((resolve, reject) => {
  //code
  let user = {
    name: "John",
    city: "Kandy",
  };

  let isFetched = false;
  if (isFetched) {
    resolve(user);
  } else {
    reject("Error fetching user. Try again later");
  }
});

//Resolving

userpromise
  .then((valueFromResolve) => {
    //.then() is used to get the value of the resolve function of promise
    console.log(valueFromResolve);
  })
  .catch((error) => {
    console.log(error);
  });
