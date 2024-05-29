menus = [
  //   {
  //     id: 1,
  //     menuName: "ButterChicken",
  //     discription: "chicken with butter",
  //     price: 100.0,
  //     image: "./images/butterChicken.jpg",
  //   },
  {
    id: 2,
    menuName: "gulabjamun",
    discription: "gulabjamun with butter",
    price: 200.0,
    image: "./images/gulabjamun.jpg",
  },
  {
    id: 3,
    menuName: "icecreame",
    discription: "icecreame with butter",
    price: 150.0,
    image: "./images/icecreame.jpg",
  },
  {
    id: 4,
    menuName: "kadhaiPaneer",
    discription: "kadhaiPaneer with butter",
    price: 200.0,
    image: "./images/kadhaiPaneer.jpg",
  },
  {
    id: 5,
    menuName: "vegKolhapuri",
    discription: "vegKolhapuri with butter",
    price: 200.0,
    image: "./images/vegKolhapuri.jpg",
  },
];

showCarts = document.getElementById("showCarts");

menus.forEach((element) => {
  rowDiv = document.createElement("div");
  rowDiv.className = "col-3";
  rowDiv.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img src=${element.image} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${element.menuName}</h5>
                            <p class="card-text">${element.discription}</p>
                            <h4 class="card-text">&#x20b9; ${element.price}</h4>
                            <button class="btn btn-primary" onclick="addToCart(${element.id})">Add to cart</button>
                        </div>
                    </div>
    `;
  showCarts.appendChild(rowDiv);
});

// after add to cart
let cart = [];
let totalPrice = 0;

function addToCart(ID) {
  console.log(ID);
  indexNumber = menus.findIndex((element) => element.id === ID);
  console.log(indexNumber);
  if (indexNumber != -1) {
    cart.push(menus[indexNumber]);
  } else {
    alert("product not in stock");
  }
  console.log(cart);
  console.log(cart.length);
  document.getElementById("menuCountInCart").innerHTML = cart.length;
}

document
  .getElementById("showCartOnModal")
  .addEventListener("click", showProductsOnCarts);
productInCart = document.getElementById("productsInCart");
function showProductsOnCarts() {
  productInCart.innerHTML = "";
  totalPrice = 0;
  cart.forEach((element) => {
    cartList = document.createElement("div");
    cartList.innerHTML = `<div> <span style="font-size:bold">${element.menuName}</span>
                        <span>&#x20b9; ${element.price}</span> 
                        <button onclick='removeFromCart(${element.id})' class="btn btn-danger">Remove</button>
                        </div>
                      `;
    totalPrice = totalPrice + element.price;
    productInCart.appendChild(cartList);
  });
  document.getElementById("totalPrice").innerHTML = totalPrice;
}

function removeFromCart(ID) {
  console.log("ID of product", ID);
  indNo = cart.findIndex((ele) => ele.id == ID);
  console.log("Index", indNo);
  if (indNo != -1) {
    console.log(indNo);
    cart.splice(indNo, 1);
    console.log(cart);
  }
  showProductsOnCarts();
  document.getElementById("menuCountInCart").innerHTML = cart.length;

}
