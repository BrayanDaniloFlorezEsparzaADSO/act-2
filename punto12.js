addEventListener(`DOMContentLoaded`,()=>{
    // #12Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él segundo, en caso contrario indicar con un mensaje que la operación no es posible realizarla.
    //     #ENTRADA DE DATOS
        let num1=Number(prompt(`Dijite el primer numero:`))
        let num2 =Number(prompt(`Dijte el segundo numero:`))
        
        // #proceso de datos
        
        if (num1>num2){
            let res=num1-num2
            alert(`se respuesta es ${res} `)
        
        }else{
            alert(`la operacion no es posible realizarla"`)  
        }
})
        
          
          
        