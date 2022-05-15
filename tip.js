var amount = document.getElementById("billamount");
var person = document.getElementById("person");
var service = document.getElementById("service");
var calc = document.getElementById("calc");
var tipdis = document.getElementById("tipdis");
var total = document.getElementById('total');
var tip = document.getElementById('tip');
var each = document.getElementById('each');
var reset = document.getElementById('reset');

var tip_amount=0;
var total_amount=0;
var each_person=0;



function validateForm(e){
    e.preventDefault();
    var amount_flag=0;
    var person_flag=0;
    if(amount.value == '' || amount.value <= 0){
        alert('Enter proper amount');
        amount_flag=1;
    }else if(person.value == '' || person.value <= 0){
        alert('Enter number of person sharing the bill');
        person_flag=1;
        
    }// }else if(amount.value != '' && amount.value>0 && person.value = ''){
        else if(amount_flag==0 && person_flag==0){
        calculateTip();
    }
}

function calculateTip(){
    // e.preventDefault();
    // if(amount.value = '' || amount.value <= 0){
    //     alert('Enter proper amount')
    //     // amount_flag=1;
    // }else if(person.value = '' || person.value <= 0){
    //     alert('Enter number of person sharing the bill')
    //     // person_flag=1;
    // }
    // else if(amount_flag==1 && person_flag==1){
    if(service.value == 'Good'){
        total_amount = (amount.value*1.2).toFixed(2);
        tip_amount = (total_amount-amount.value).toFixed(2);
        each_person = (total_amount/person.value).toFixed(2);

        total.innerHTML = `Total amount: ${total_amount}`;
        tip.innerHTML = `Tip amount: ${tip_amount}`;
        each.innerHTML = `Each Person owes: ${each_person}`;
        tipdis.style.display = 'block'

        // console.log(tip_amount)
    }else if(service.value == 'Average'){
        total_amount = (amount.value*1.1).toFixed(2); 
        tip_amount = (total_amount-amount.value).toFixed(2);
        each_person = (total_amount/person.value).toFixed(2);

        total.innerHTML = `Total amount: ${total_amount}`;
        tip.innerHTML = `Tip amount: ${tip_amount}`;
        each.innerHTML = `Each Person owes: ${each_person}`;
        tipdis.style.display = 'block'
    }//else if(service.value == 'Bad'){
        else{
        total_amount = (amount.value*(26/25)).toFixed(2);
        tip_amount = (total_amount-amount.value).toFixed(2);
        each_person = (total_amount/person.value).toFixed(2);

        total.innerHTML = `Total amount: ${total_amount}`;
        tip.innerHTML = `Tip amount: ${tip_amount}`;
        each.innerHTML = `Each Person owes: ${each_person}`;
        tipdis.style.display = 'block'
    }
}
// }

calc.addEventListener('click',validateForm);
// calc.addEventListener('click',calculateTip);
reset.addEventListener('click', function() {
    tip_amount=0;
    total_amount=0;
    each_person=0;
    tipdis.style.display = 'none'
})
// calc.addEventListener('click', function(){
//    calculateTip(e);
// })