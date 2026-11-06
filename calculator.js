const input = document.querySelector('.display');
const clear = document.querySelector('#clear');
const deleteSolution = document.querySelector('#delete');
const percent = document.querySelector('#percent');
const divide = document.querySelector('#divide');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const numNine = document.querySelector('#nine');
const multiply = document.querySelector('#multiply');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const minus = document.querySelector('#minus');
const three =document.querySelector('#three');
const two = document.querySelector('#two');
const one = document.querySelector('#one');
const plus = document.querySelector('#plus');
const zero = document.querySelector('#zero');
const decimal = document.querySelector('#dot');
const equalTo = document.querySelector('#equal-to');

let calculation = localStorage.getItem('calculation')|| '';
const displayCalculation =()=>{
    input.value = calculation
}
displayCalculation()
const updateCalculation= (value)=>{
    if (calculation === 'Syntax error'){
        calculation = '';
    }

 calculation += value
  displayCalculation()
 localStorage.setItem('calculation',calculation)

}
const calculate = ()=>{
    try{
        calculation = String(eval(calculation));
    }catch{
        calculation ='Syntax error'
    }
}

clear.addEventListener('click',()=>{
  calculation= ''
  displayCalculation()
  localStorage.setItem('calculation', calculation)
})
one.addEventListener('click',()=>{
 updateCalculation('1')
})
two.addEventListener('click',()=>{
    updateCalculation('2')
})
three.addEventListener('click',()=>{
    updateCalculation('3')
})
plus.addEventListener('click',()=>{
    updateCalculation(' + ')
})
four.addEventListener('click',()=>{
    updateCalculation('4')
})
five.addEventListener('click',()=>{
    updateCalculation('5')
})
six.addEventListener('click',()=>{
    updateCalculation('6')
})
multiply.addEventListener('click',()=>{
    updateCalculation(' * ')
})
seven.addEventListener('click',()=>{
    updateCalculation('7')
})
eight.addEventListener('click',()=>{
    updateCalculation('8')
})
numNine.addEventListener('click',()=>{
    updateCalculation('9')
})
zero.addEventListener('click',()=>{
    updateCalculation('0')
})
deleteSolution.addEventListener('click',()=>{
    calculation = calculation.slice(0, -1)
    displayCalculation()
    localStorage.setItem('calculation', calculation)
})
decimal.addEventListener('click',()=>{
    updateCalculation('.')
})
percent.addEventListener('click',()=>{
    updateCalculation(' % ')

})
divide.addEventListener('click',()=>{
    updateCalculation(' / ')
})
minus.addEventListener('click',()=>{
    updateCalculation(' - ')
})
equalTo.addEventListener('click',()=>{
    calculate()
    displayCalculation()
    localStorage.setItem('calculation',calculation)
})
