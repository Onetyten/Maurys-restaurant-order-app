
nature = document.getElementById("nature")
vintage = document.getElementById("vintage")
minimalist = document.getElementById("minimalist")
spring= document.getElementById("spring")
food = document.getElementById("food")
kids = document.getElementById("kids")

let savedTheme = localStorage.getItem("themeDat")

if (savedTheme)
    {document.body.className = (savedTheme)}






nature.addEventListener("click", function()
{
    setTheme('root')
}) 

vintage.addEventListener("click", function()
{
    setTheme('vintage')
}) 

minimalist.addEventListener("click", function()
{
    setTheme('minimalist')
}) 
spring.addEventListener("click", function()
{
    setTheme('spring')
}) 
food.addEventListener("click", function()
{
    setTheme('food')
}) 

kids.addEventListener("click", function()
{
    setTheme('kids')
}) 


function setTheme(themeName)
    {
        document.body.className = (themeName)
        localStorage.setItem("themeDat",themeName)
    }
themeButton = document.getElementById("theme-but")
themebar1 = document.getElementsByClassName("theme-bar")[0]
themeButton.addEventListener("click",function()
{
    themebar1.classList.toggle("close-bar")

})