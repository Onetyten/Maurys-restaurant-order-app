

tabP1 = document.getElementById("p1")
tabP2 = document.getElementById("p2")
tabP3 = document.getElementById("p3")
tabP4 = document.getElementById("p4")
tabP5 = document.getElementById("p5")
tabP6 = document.getElementById("p6")
tabE1 = document.getElementById("e1")
tabE2 = document.getElementById("e2")
tabE3 = document.getElementById("e3")

tabP1.addEventListener("click", function()
{
  manageTab("P1")
} 
) 

tabP2.addEventListener("click", function()
{
  manageTab("P2") 
} 
)

tabP3.addEventListener("click", function()
{
  manageTab("P3") 
} 
) 

tabP4.addEventListener("click", function()
{
  manageTab("P4") 
} 
) 

tabP5.addEventListener("click", function()
{
  manageTab("P5") 
} 
) 

tabP6.addEventListener("click", function()
{
  manageTab("P6") 
} 
) 

tabE1.addEventListener("click", function()
{
  manageTab("E1") 
} 
) 

tabE2.addEventListener("click", function()
{
  manageTab("E2") 
} 
) 

tabE3.addEventListener("click", function()
{
  manageTab("E3") 
} 
) 


















function manageTab(name)
 {
  console.log(name)
  localStorage.removeItem("selectedTable")
  localStorage.setItem("selectedTable",name) 
  window.location.href = "./order_page.html"
 }
