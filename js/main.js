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

//Generate Resume

function generateResume() {
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;

  document.getElementById("nameT2").innerHTML = nameField;

  //contacts
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  //address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  //links
  document.getElementById("linkedinT").innerHTML =
    document.getElementById("linkedinField").value;
  document.getElementById("githubT").innerHTML =
    document.getElementById("githubField").value;
  document.getElementById("twitterT").innerHTML =
    document.getElementById("twitterField").value;

  //education
  let eduSection = document.getElementsByClassName("eduField");
  let str = "";

  for (let e of eduSection) {
    str = str + `<li> ${e.value} </li>`;
  }

  document.getElementById("eduT").innerHTML = str;

  //work experience
  let workSection = document.getElementsByClassName("workField");
  let str1 = "";

  for (let e of workSection) {
    str1 += `<li> ${e.value} </li>`;
  }

  document.getElementById("workT").innerHTML = str1;

  //projects
  let projectsSection = document.getElementsByClassName("projectsField");
  let str2 = "";

  for (let e of projectsSection) {
    str2 += `<li> ${e.value} </li>`;
  }

  document.getElementById("projectsT").innerHTML = str2;

  //set image
  let file = document.getElementById("imgField").files[0];
  console.log(file);

  let reader = new FileReader();
  reader.readAsDataURL(file);

  console.log(reader.result);

  //set image to template
  reader.onloadend = function () {
    document.getElementById("imgT").src = reader.result;
  };

  document.getElementById("resume-form").style.display = "none";
  document.getElementById("resume-template").style.display = "block";
}

//print resume

function printResume() {
  window.print();
}
