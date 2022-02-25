const removeCartBtn = document.getElementsByClassName('btn-danger');
//console.log(removeCartBtn);
for(let i = 0; i < removeCartBtn.length; i++){
    //console.log(removeCartBtn[i]);
    let buttonMe = removeCartBtn[i];
    buttonMe.addEventListener('click', function(event){
        let buttonClick = event.target;
        buttonClick.parentElement.parentElement.remove()
        //console.log(buttonClick);
        //console.log('You just clicked me!');
        cal();
        
    })
}

function cal(){
    let holder = document.getElementsByClassName('holder');
    let total = 0;
    for(let i = 0; i < holder.length; i++){
        let myHolder = holder[i];
        //console.log(myHolder);
        let price = document.getElementsByClassName('priceMe')[i]
        let qty = document.getElementsByClassName('qty')[i]
        //console.log(price.innerText);
        total = total + (price * qty);
    }
    document.getElementsByClassName('total').innerText = total
}


