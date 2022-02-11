function addNewEdu() {
  // console.log("Adding new field")
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eduField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Enter here");

  let eduOb = document.getElementById("edu");
  let eduAddBtnOb = document.getElementById("eduAddBtn");

  eduOb.insertBefore(newNode, eduAddBtnOb);
}

function addNewWork() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("workField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let workOb = document.getElementById("work");
  let workAddBtnOb = document.getElementById("workAddBtn");

  workOb.insertBefore(newNode, workAddBtnOb);
}

function addNewProject() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("projectsField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let projectOb = document.getElementById("projects");
  let projectAddBtnOb = document.getElementById("projectsAddBtn");

  projectOb.insertBefore(newNode, projectAddBtnOb);
}
