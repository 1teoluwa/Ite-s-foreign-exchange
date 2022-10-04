let btn = document.querySelector(".convert")
let select = document.querySelectorAll(".select")
let input = document.querySelector(".input")
let result = document.querySelector(".result")
var currencies = `https://api.frankfurter.app/currencies`;
fetch(currencies)   
.then((response) => {
    return response.json();
})
.then((data) =>{
   display(data)
})
function display(data){
    console.log(data)
    let entries = Object.entries(data)
    console.log(entries)
    for(let i = 0; i < entries.length; i++){
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i]}</option>`
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i]}</option>`
        console.log(select[0][i])
    }
}
btn.addEventListener('click', function(){
    let currency1 = select[0].value
    let currency2 = select[1].value
    let value = input.value

    if(currency1 != currency2){
        convert(currency1, currency2, value);
    }else{
        alert("choose different currencies!!")
    }

    function convert(currency1, currency2, value){
        const host = "api.frankfurter.app";
        fetch(`https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`)
        .then((response) => response.json())
        .then((response) =>{
            console.log(Object.values(response.rates)[0]);
            result.value = Object.values(response.rates)[0];
        })
    }
})