
let form = document.querySelector('.form')
let select = document.querySelector('.select')
let result = document.querySelector('.result')
let inp = document.querySelector('.inp')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(select.value=="sumToUSD"){
        result.textContent=(inp.value/12450).toFixed(2) + "dollar"
    }

    else if(select.value =="USDToSum"){
        result.textContent=(inp.value*12450).toFixed(2)+"Sum"
    }

    else if(select.value =="sumToEuro"){
        result.textContent=(inp.value/13570).toFixed(2) + "Euro"
    }

    else if(select.value =="EuroToSum"){
        result.textContent=(inp.value*13570).toFixed(2) + "Sum"
    }

    else if(select.value =="EuroToUSD"){
        result.textContent=(inp.value*1.08).toFixed(2) + "Dollar"
    }

    else{
        result.textContent =(inp.value/1.08).toFixed(2) +"Euro"
    }





})
// form.addEventListener('submit', (e)=>{
//     e.defaultPrevented()
//     if(select.value=="somToUSD"){
//         result.textContent=inp.value/12450
//     }
// })