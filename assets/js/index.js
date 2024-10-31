function showSection(sectionNumber) {
  document.querySelectorAll(".section").forEach((section) => section.classList.add("d-none"));
  document.getElementById("section" + sectionNumber).classList.remove("d-none");
}

function nextSection(sectionNumber) {
  showSection(sectionNumber);
}

function previousSection(sectionNumber) {
  showSection(sectionNumber);
}

function submiform(event) {
  event.preventDefault();
  const firstName = document.getElementById("InputName").value;
  const lastname = document.getElementById("InputLastName").value;
  const email = document.getElementById("InputEmail").value;
  const tel = document.getElementById("Inputtel").value;
  const Password = document.getElementById("InputPassword").value;
document.getElementById("Name").innerHTML="Name : "+firstName;
document.getElementById("LastName").innerHTML= "last Name : "+lastname;
document.getElementById("email").innerHTML= "Email : "+email;
document.getElementById("tel").innerHTML= "telphone : "+tel;
document.getElementById("password").innerHTML="Name : "+Password;
showSection(4)
}



