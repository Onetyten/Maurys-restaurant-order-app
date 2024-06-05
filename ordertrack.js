let tableNum = "P1"
let tableTitle = document.getElementsByClassName("order-head-text")[0]


const tableName = localStorage.getItem("selectedTable")
if (tableName)
  {tableNum = tableName
  console.log('clicked table name: ',tableNum,);
  tableTitle.innerText += " "+tableNum}


  






loading()
if (document.readyState==="loading")
  {
    document.addEventListener("DOMContentLoaded",ready)
  }
else
  {
    ready()
  }

function loading()
  {
    let loaded = false
  
      if (loaded == false)
        {
         console.log("loaded")
         loadStorage()
         loaded = true
        }
      else
        {
         console.log("i said loaded")
        }
    }





function ready()
  { 


   
    let deliverButton = document.getElementsByClassName("btn-clr")
    for(i = 0; i<deliverButton.length; i++)
      {
      let button = deliverButton[i]
      button.addEventListener("click",deliverOrders)
      }
    var quantityInput = document.getElementsByClassName("order-quantity-input")
    for (let i = 0; i<quantityInput.length;i++)
      {
        let input = quantityInput[i]
        input.addEventListener("change",quantityChanged)
      }
    let orderButtons = document.getElementsByClassName("Order-btn")
    for (let i = 0; i<orderButtons.length;i++)
    {
      let orderBtn = orderButtons[i]
      orderBtn.addEventListener("click",addToOrderClicked)
    }

    updateFoodPrice()
  

   
  }


// function saveStorage()
//   {
//     let storage = document.getElementsByClassName("stored-div")[0]
//     localStorage.removeItem("chefDiv")
//     localStorage.setItem("chefDiv", storage.innerHTML);
//     console.log(localStorage.getItem("chefDiv"))
//     updateFoodPrice()
//   }

function saveStorage()
  {
    // let tableNum = "P1"
    let storage = document.getElementsByClassName("stored-div")[0]

    if(tableNum == "P1")
      {
        localStorage.removeItem("chefDiv1")
        localStorage.setItem("chefDiv1", storage.innerHTML);
        console.log(localStorage.getItem("chefDiv1"))
      }

    else if(tableNum == "P2")
      {
        localStorage.removeItem("chefDiv2")
        localStorage.setItem("chefDiv2", storage.innerHTML);
        console.log(localStorage.getItem("chefDiv2"))
      }

    else if(tableNum == "P3")
      {
        localStorage.removeItem("chefDiv3")
        localStorage.setItem("chefDiv3", storage.innerHTML);
        console.log(localStorage.getItem("chefDiv3"))
      }

    else if(tableNum == "P4")
      {
        localStorage.removeItem("chefDiv4")
        localStorage.setItem("chefDiv4", storage.innerHTML);
        console.log(localStorage.getItem("chefDiv4"))
      }

    else if(tableNum == "P5")
      {
        localStorage.removeItem("chefDiv5")
        localStorage.setItem("chefDiv5", storage.innerHTML);
        console.log(localStorage.getItem("chefDiv5"))
      }

    else if(tableNum == "P6")
      {
        localStorage.removeItem("chefDiv6")
        localStorage.setItem("chefDiv6", storage.innerHTML);
        console.log(localStorage.getItem("chefDiv6"))
      }
            
    else if(tableNum == "E1")
    {
      localStorage.removeItem("chefDiv7")
      localStorage.setItem("chefDiv7", storage.innerHTML);
      console.log(localStorage.getItem("chefDiv7"))
    }
          
    else if(tableNum == "E2")
      {
        localStorage.removeItem("chefDiv8")
        localStorage.setItem("chefDiv8", storage.innerHTML);
        console.log(localStorage.getItem("chefDiv8"))
      }
            
    else if(tableNum == "E3")
    {
      localStorage.removeItem("chefDiv9")
      localStorage.setItem("chefDiv9", storage.innerHTML);
      console.log(localStorage.getItem("chefDiv9"))
    }
    else
    {
      localStorage.removeItem("chefDiv")
      localStorage.setItem("chefDiv", storage.innerHTML);
      console.log(localStorage.getItem("chefDiv"))
    }



    updateFoodPrice()
  }











function loadStorage()
  {
    let storage = document.getElementsByClassName("stored-div")[0];
    let savedOrderContainerContent1 = localStorage.getItem("chefDiv1");
    let savedOrderContainerContent2 = localStorage.getItem("chefDiv2");
    let savedOrderContainerContent3 = localStorage.getItem("chefDiv3");
    let savedOrderContainerContent4 = localStorage.getItem("chefDiv4");
    let savedOrderContainerContent5 = localStorage.getItem("chefDiv5");
    let savedOrderContainerContent6 = localStorage.getItem("chefDiv6");
    let savedOrderContainerContent7 = localStorage.getItem("chefDiv7");
    let savedOrderContainerContent8 = localStorage.getItem("chefDiv8");
    let savedOrderContainerContent9 = localStorage.getItem("chefDiv9");
    let savedOrderContainerContent0 = localStorage.getItem("chefDiv");

    if(tableNum == "P1")
      {
        if (savedOrderContainerContent1) 
          { 
            // localStorage.removeItem("chefDiv1")
            console.log(savedOrderContainerContent1)
            storage.innerHTML = savedOrderContainerContent1;
          }
      }
      
    else if(tableNum == "P2")
    {
      if (savedOrderContainerContent2) 
        { 
          // localStorage.removeItem("chefDiv2")
          console.log(savedOrderContainerContent2)
          storage.innerHTML = savedOrderContainerContent2;
        }
    }
  
    
    else if(tableNum == "P3")
      {
        if (savedOrderContainerContent3) 
          { 
            // localStorage.removeItem("chefDiv3")
            console.log(savedOrderContainerContent3)
            storage.innerHTML = savedOrderContainerContent3;
          }
      }
    
      
    else if(tableNum == "P4")
    {
      if (savedOrderContainerContent4) 
        { 
          console.log(savedOrderContainerContent4)
          storage.innerHTML = savedOrderContainerContent4;
        }
    }
  
    
    else if(tableNum == "P5")
      {
        if (savedOrderContainerContent5) 
          { 
            console.log(savedOrderContainerContent5)
            storage.innerHTML = savedOrderContainerContent5;
          }
      }
    
      
    else if(tableNum == "P6")
    {
      if (savedOrderContainerContent6) 
        { 
          console.log(savedOrderContainerContent6)
          storage.innerHTML = savedOrderContainerContent6;
        }
    }
  
    else if(tableNum == "E1")
    {
      if (savedOrderContainerContent7) 
        { 
          console.log(savedOrderContainerContent7)
          storage.innerHTML = savedOrderContainerContent7;
        }
    }
      
    else if(tableNum == "E2")
    {
      if (savedOrderContainerContent8) 
        { 
          console.log(savedOrderContainerContent8)
          storage.innerHTML = savedOrderContainerContent8;
        }
    }
      
    else if(tableNum == "E3")
    {
      if (savedOrderContainerContent9) 
        { 
          console.log(savedOrderContainerContent9)
          storage.innerHTML = savedOrderContainerContent9;
        }
    }

    else
    {
      if (savedOrderContainerContent0) 
        { 
          console.log(savedOrderContainerContent0)
          storage.innerHTML = savedOrderContainerContent0;
        }
    }













  }

function addToOrderClicked(event)
  {
    let button = event.target
    let foodItem = button.parentElement.parentElement.parentElement
    let foodTitle  = foodItem.getElementsByClassName("food-title")[0].innerText
    let foodPrice  = foodItem.getElementsByClassName("shopping-price")[0].innerText
    let foodImgSrc = foodItem.getElementsByClassName("shoppingImage")[0].src
    let foodQuantity = foodItem.getElementsByClassName("order-quantity-input")[0].value
    console.log(foodTitle,foodPrice,foodImgSrc,foodQuantity)
    addOrderToCart(foodTitle, foodPrice,foodImgSrc,foodQuantity)
    saveStorage()
      
  }

function addOrderToCart(title, price,src,quantity)
  {
    let cartRow = document.createElement("div")
    let OrderContainer = document.getElementsByClassName("chef-order-container")[0]
    cartRow.classList.add("chef-order")
    let rowContent = `
              <div class="image">
                <img src="${src}" alt="">
              </div>
              <div class="name">
                <p id="">
                  ${title}
                </p>
                
              </div>
              <div>
                <p>
                  Quantity: <span class="quantity">${quantity}</span>
                </p>
              </div>
              <div class="price">
                ${price} NGN
              </div>
              <div>
                <button class="btn-clr">
                  Delivered
                </button>
              </div>`
    cartRow.innerHTML = rowContent
    OrderContainer.append(cartRow)
    ready()
    updateFoodPrice()

    
    

  }

 cancelButton = document.getElementById("cancel-order")
 cancelButton.addEventListener("click",cancelOrder)



function cancelOrder()
  {
    let storage = document.getElementsByClassName("chef-order-container")[0]
    storage.innerHTML = ""
    localStorage.setItem("chefDiv",storage.innerHTML);
    updateFoodPrice()
  }




function quantityChanged(event)
  {
    let input = event.target
    if(isNaN(input.value) || input.value <= 0)
      {
        input.value = 1
      }
    


  }


function deliverOrders(event)
  { var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    saveStorage()
    updateFoodPrice()}


  
function updateFoodPrice()
  {
    let orderContainer = document.getElementsByClassName("chef-order-container")[0]
    let orders= orderContainer.getElementsByClassName("chef-order")


    let total = 0
    let totalPrice = document.getElementsByClassName("food-total")[0]
    for(i = 0; i<orders.length; i++)
      {
 
        
        let order = orders[i]
        let priceElement = order.getElementsByClassName("price")[0]
        let quantityElement = order.getElementsByClassName("quantity")[0]
        let price = parseFloat(priceElement.innerText.replace(" NGN",""))
        let quantity = parseFloat(quantityElement.innerText)
        total =total+(price*quantity) 
      }
      totalPrice.innerText = total
      
  }  

 updateFoodPrice() 
