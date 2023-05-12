/**@type {HTMLButtonElement} */
let addHobby;
let addExperience

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM CONTENT LOADED");
  addHobby = document.getElementById("submit_new_hobby");
  addHobby.addEventListener("click", (e) => {
    e.preventDefault()
    addNewElementToList(e.target.name)
  });
  addExperience = document.getElementById("submit_new_experience");
  addExperience.addEventListener("click", (e) => {
    e.preventDefault()
    addNewElementToList(e.target.name)
  });
});

const addNewElementToList = (type) => {
  const newHobby = document.getElementById(`new_${type}`).value;
  const list = document.getElementById(`${type}_list`)

  if (newHobby) {
    let node = document.createElement("li");
    node.innerText = newHobby;

    list.appendChild(node);
    document.getElementById(`${type}_form`).reset()
  }
};
