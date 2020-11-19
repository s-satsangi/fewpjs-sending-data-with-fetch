// Add your code here
// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle Sent From index.js"
//   })
// });
// let formData = {
//   dogName: "Errnie",
//   dogBreed: "ErrTest",
// };

// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configObj)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object.id);
//   })
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

function submitData(userName, userEmail) {
  let userData = {
    name: userName,
    email: userEmail,
  };

  let confObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  };

  return fetch("http://localhost:3000/users", confObj)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      let bod = document.querySelector("script");
      //   getElementById("addHere");
      let newDiv = document.createElement("div");
      newDiv.innerHTML = object.id;
      bod.appendChild(newDiv);
      console.log(object.id);
    })
    .catch(function (error) {
      //   alert("Whoopsie");
      let script = document.querySelector("script");
      let newDiv = document.createElement("div");
      newDiv.innerHTML = error.message;
      script.appendChild(newDiv);
      console.log(error.message);
    });
}
