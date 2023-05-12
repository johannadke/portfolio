/**@type {HTMLButtonElement} */
let addHobby;

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM CONTENT LOADED");
  addHobby = document.getElementById("submitNewHobby");
  addHobby.addEventListener("click", addNewHobby);
});

const addNewHobby = () => {
  const newHobby = document.getElementById("NewHobby").value;

  if (newHobby) {
    let node = document.createElement("li");
    node.innerText = newHobby;

    document.getElementById("hobbyList").appendChild(node);
  }
};
