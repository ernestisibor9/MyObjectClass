


//  console.log(myStatus[2].value);
//  console.log(myStatus.length);

function changeMe(){
    
    const myStatus = document.getElementById('status')
    const wife = document.getElementById('wife')
    const childrenMe = document.getElementById('childrenMe')

        let status = myStatus.value;
        //console.log(status);
        if(status == 'Single'){
            wife.style.display = 'none'
            childrenMe.style.display = 'none'
        }


        // else{
        //     childrenMe.style.display = 'block'
        //     wife.style.display = 'block'
        // }
    
}

