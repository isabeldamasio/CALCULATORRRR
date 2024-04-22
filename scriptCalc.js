function calcular(){
    const opcoes = document.getElementById('operation').selectedIndex;
    var numUm = parseFloat(document.getElementById('numUm').value);
    var numDois = parseFloat(document.getElementById('numDois').value);
    var teste = document.getElementById('teste');
    var resultado = 0;
    //console.log(numUm);


    switch(opcoes){
        case 1:
            resultado = (numUm) + (numDois);
            teste.innerHTML = resultado;
        break;
        case 2:
            resultado = (numUm) - (numDois);
            teste.innerHTML = resultado;
        break;
        case 3:
            resultado = (numUm) * (numDois);
            teste.innerHTML = resultado;
        break;
        case 4:
            if (numDois == 0){
                teste.innerHTML = "Não é possível dividir um número por 0";
            } else {
                console.log(numUm)
                console.log(numDois)
                resultado = (numUm / numDois);
                teste.innerHTML = resultado;
            }
        break;
        default:
            teste.innerHTML = "Por favor, selecione uma operação";
    }
}