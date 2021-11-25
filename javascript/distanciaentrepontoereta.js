function limpar() {
    document.getElementById("X").value ="";
    document.getElementById("Y").value ="";
    document.getElementById("A").value ="";
    document.getElementById("B").value ="";
    document.getElementById("C").value ="";
    document.getElementById("display").value ="";
}

function calcularDistancia() {
    Number(document.getElementById("X").value); 
    Number(document.getElementById("Y").value);
    Number(document.getElementById("A").value);
    Number(document.getElementById("B").value);
    Number(document.getElementById("C").value);

    var primeiraParte = ((A * X) + (B * Y) + (C));
    var segundaPArte = Math.sqrt(Math.pow(A,2) + Math.pow(B,2));
    var dividir = primeiraParte / segundaPArte;
    var resultado = Math.sqrt(dividir);
    document.getElementById("display").value = resultado.toFixed(2);
}

