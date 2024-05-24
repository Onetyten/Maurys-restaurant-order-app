logInNameEl = document.getElementById("login-name")
logInEmail = document.getElementById("email-el2")
logInPass = document.getElementById("password2")
form = document.getElementById("form")

SignUpLink = document.getElementById("sign-link")
SignUpButton = document.getElementById("signup-button")
logInButton = document.getElementById("login-but")



let storedData = localStorage.getItem("Data")
if (storedData)
  { console.log(storedData)
    localLinks = JSON.parse(storedData)
    console.log(localLinks)
  }



form.addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = new FormData(form)
    console.log(formData)
    let obj = Object.fromEntries(formData)
    console.log(obj)
    let dataStore = JSON.stringify(obj)
    localStorage.removeItem("Data")
    localStorage.setItem("Data",dataStore)
    window.location.href = "../Pages/login_page.html"
})





// SignUpButton.addEventListener("click",insert)

// function insert ()
// {
//   let Name1 = signUpNameEl.value;
//   let Email1 = signUpEmail.value;
//   let Password1 =signUpPass.value;
//   let dataray = [Name1,Email1,Password1]
//   localStorage.setItem("mydata",JSON.stringify(dataray))
//   console.log(Name1,Email1,Password1)
//   console.log(dataray)
//   console.log(localStorage.getItem("myLinks"))


// }
  
// clearButton.addEventListener("dblclick",
//   function clear()
//     {
//       myLinks = []
//       localStorage.clear()
//       render_links(myLinks)
//     }
  
  
//   )