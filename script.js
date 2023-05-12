console.log("hello world");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM CONTENT LOADED");
});

const addNewHobby = () => {
  const newHobby = document.getElementById("NewHobby").value;

  let node = document.createElement("li")
  node.appendChild(document.createTextNode(newHobby));
  
  document.getElementById("hobbyList").appendChild(node);
};
