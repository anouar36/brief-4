

function showSection(sectionNumber) {
    
  document
    .querySelectorAll(".section")
    .forEach((section) => section.classList.add("d-none"));
  document.getElementById("section" + sectionNumber).classList.remove("d-none");
}

function nextSection(sectionNumber) {
    const valueInput = document.getElementById("exampleInputName").value;
    console.log(valueInput);
  showSection(sectionNumber);
}

function previousSection(sectionNumber) {
  showSection(sectionNumber);
}
