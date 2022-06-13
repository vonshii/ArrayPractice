function texto(cadena){
    if(cadena === cadena.toUpperCase()){
        return 'Completamente en mayusculas';
    }else if(cadena === cadena.toLowerCase()){
        return 'Completamente en minusculas'
    }else{
        return 'con mayusculas y minusculas';
    }
}

let cadena = prompt('Ingrese un texto para analizar');
document.write(`El texto esta escrito ${texto(cadena)}`)