addEventListener(`DOMContentLoaded`,()=>{
    // #11Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso de computación.
    // // #ENTRADA DE DATOS
    let nombre= prompt(`ingrese su nombre:`)
    let apellido= prompt(`ingrese su apellido:`)
    let edad= prompt(`ingrese su eddad:`)
    
    let not1=int(input(`dijite su nota 1:`))
    let not2=int(input(`dijite su nota 2:`))
    let not3=int(input(`dijite su nota 3:`))
    let not4=int(input(`dijite su nota 4:`))
    let not5=int(input(`dijite su nota 5:`))
    
    let prom=(not1+not2+not3+not4+not5)/5
    if (prom >=5){
        alert(`aprobaado`)
    }
      
    else{
        alert(`no aprobado`)
    }
    alert(`promedio de las notas :&{prom}`)  
})