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
function saveStorage()
  {
    let storage = document.getElementsByClassName("stored-div")[0]
    localStorage.clear()
    localStorage.setItem("chefDiv", storage.innerHTML);
    console.log(localStorage.getItem("chefDiv"))
    updateFoodPrice()
  }

function loadStorage()
  {
    let storage = document.getElementsByClassName("stored-div")[0];
    let savedOrderContainerContent = localStorage.getItem("chefDiv");
    if (savedOrderContainerContent) 
    { localStorage.clear()
      console.log(savedOrderContainerContent)
      storage.innerHTML = savedOrderContainerContent;
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
