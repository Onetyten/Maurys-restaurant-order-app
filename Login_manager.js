
let storedData = localStorage.getItem("Data");

if (storedData) {
  localLinks = JSON.parse(storedData);
  console.log(localLinks);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let obj = Object.fromEntries(formData);
  
  // Check if the form data matches the stored data
  if (localLinks && localLinks.name === obj.name && localLinks.email === obj.email && localLinks.password === obj.password) {
    // Data matches, allow the user to log in
    localStorage.setItem("Data", dataStore);
    window.location.href = "../Pages/Mainpage.html";
  } else {
    
    alert("Invalid login credentials. Please try again.");
  }
});
