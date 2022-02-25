let myRadio = document.querySelectorAll('input[type = radio]:checked')

if(!myRadio.value){
    alert('Please select a gender')
}
else{
    selectedValue = myRadio.value;
}
alert(selectedValue)