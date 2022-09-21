addEventListener(`DOMContentLoaded`,()=>{
    // #4Cálculo de áreas - Elige una figura geométrica:" Triángulo y Círculo
    // #ENTRADA DE DATOS
    let figura=prompt(`elija una figura triangulo(t) o circulo(c):`)
    // #PROCESO
    if (figura== `t`){
        let base=Number(prompt(`coloque la base del  triangulo:`))
      let altura=Number(prompt(`coloque la altura del triangulo:`))
      let res=(base*altura)/2
      alert(`el area del triangulo es de:${res}`)
    }else if (figura=="c"){
        let pi=3.14
      let radio=Number(prompt(`coloque el radio:`))
      let res=(pi*radio)**2
      alert(`el area del circulo es de:${res}`)
    }
      
      
    
    
})