/**@type {HTMLButtonElement} */
let addHobby;

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM CONTENT LOADED");
  addHobby = document.getElementById("submit_new_hobby");
  addHobby.addEventListener("click", (e) => {
    e.preventDefault()
    addNewHobby()
  });
});

const addNewHobby = () => {
  const newHobby = document.getElementById("new_hobby").value;
  const list = document.getElementById("hobby_list")

  if (newHobby) {
    let node = document.createElement("li");
    node.innerText = newHobby;

    list.appendChild(node);
    document.getElementById("hobby_form").reset()
  }
};
