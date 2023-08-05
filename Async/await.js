//Async /Await

const makeApiRequest = () => {
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
      reject("Error fetching user ");
    }, 5000);
  });
};
const getUser = async () => {
  try {
    //make api call to fetch user
    const res = await makeApiRequest();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

getUser();
