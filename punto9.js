addEventListener(`DOMContentLoaded`,()=>{ 
    let par =0,impa=0
    while(confirm(`desea ingresar un numero`)){
        let num=Number(prompt(`dijite un numero`))
        eval(`${(num%2==0)?"par+=num": "impa*=num"}`);
    }
    alert(`la suma de los pares es :${par}\nEl producto de los impares es: ${impa}`)
})

