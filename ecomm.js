const products = [
    {
        id: 1,
        name:'Cristiano Ronaldo',
        description: 'The Portuguese captain',
        imgSrc:'./images/ororo.jpg',
    },
    {
        id: 2,
        name:'Lionel Messi',
        description: 'The Argentine captain',
        imgSrc:'./images/messi.jpg',
    },
    {
        id: 3,
        name:'Kylian Mbappe',
        description: 'The French superstar',
        imgSrc:'./images/mbappewin.jpg',
    },
    {
        id: 4,
        name:'Mohammed Salah',
        description: 'The Egyptian King',
        imgSrc:'./images/salahliv.jpg',
    },
]

const myPro = document.querySelector('.myCon')

function myProduct (){
    products.forEach((product)=>{
        myPro.innerHTML += `
        <div class="col-3">
        <img src="${product.imgSrc}" alt="" width="400px" height="100px"  class="img-fluid">
        <h4>${product.name}</h4>
        <h4>${product.description}</h4>
        <button class = 'btn btn-primary' onclick ="addToCart(${product.id})">
        <i class="fa-solid fa-cart-shopping"></i>
        </button>
    </div>`
    })
}
myProduct();

let cart = []

function addToCart(id){
    if(cart.some((item)=>item.id == id)){
        alert('Already existing')
    }
    //console.log(id);
    const item = products.find((product)=> product.id == id);
    cart.push(item)
    console.log(cart);
  
}