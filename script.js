const toggleBtn = document.querySelector(".toggle-button");
const toggleIcon = document.querySelector(".toggle-button i");
const dropDown = document.querySelector(".drop-down");
var counter = 1;


toggleBtn.onclick = function clicked()
  {
    dropDown.classList.toggle("open")
    const isOpen = dropDown.classList.contains("open")
    toggleIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
  }

setInterval(
  function()
    {
      document.getElementById("radio"+counter).checked = true;
      counter++
      if (counter>6)
        {
          counter = 1
        }
    },5000





 )
