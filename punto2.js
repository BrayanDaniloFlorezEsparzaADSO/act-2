addEventListener(`DOMContentLoaded`,()=>{
    // #2Calcule el mayor de tres números, permitiendo leer 3 valores diferentes
    // #entrada de datos
    let num1=Number(prompt(`ingrese el pirmer numero`))
    let num2=Number(prompt(`ingrese el segundo numero`))
    let num3=Number(prompt(`ingrese el tercero numero`))
    // #proceso
    if (num1>num2 && num1>num3){
        alert(`El numero 1 es mayor`)
    }
      
    if (num2>num3 && num2>num1){
        alert(`El numero 2 es mayor`)
    }else{
        alert(`el numero 3 es mayor`)
    }
      
       
})