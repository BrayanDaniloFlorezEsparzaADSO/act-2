addEventListener(`DOMContentLoaded`,()=>{
    // #3Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el menor o si son iguales
    // #entrada de datos
    let num1=Number(prompt(`ingrese el pirmer numero:`))
    let num2=Number(prompt(`ingrese el segundo numero:`))
    let num3=Number(prompt(`ingrese el tercero numero:`))
    // #proceso
    // #esta parte es de mayor
    if (num1>num2 && num1>num3){
        alert(`El numero 1 es mayor`)
    }else if (num2>num3 && num2>num1){
        alert(`El numero 2 es mayor`)
    }else{
        alert(`el numero 3 es mayor`)

    }if (num1<=num2 && num1<=num3){
        alert(`El numero 1 es menor`)
    }else if (num2<=num3 && num2<=num1){
        alert(`El numero 2 es menor`)
    }else{alert(`el numero 3 es menor`)


    } if(num1==num2){
         alert(`El numero 1 y 2 son iguales `)
    }else if (num2==num3){
        alert(`El numero 2 y 3 son iguales`)
    }else if (num3==num1){
        alert(`el numero 1 y 3 son iguales`) 
    }  
})