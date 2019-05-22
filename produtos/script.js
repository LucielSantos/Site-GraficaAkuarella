function soma(){
    var n = parseInt( document.getElementById("numero").value);
    var qtd= parseInt(document.getElementById("qtd").value);
    var div = document.getElementById("valor");

    div.innerHTML+="R$ " +n*qtd+",00";

    
}