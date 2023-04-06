let peso = prompt('informe seu peso');

let altura = prompt('informe sua altura');

let imc = peso/(altura*2);

imc = (imc.toFixed(1));


if(imc < 18.5){

    alert('você esta abaixo do peso ideal');
}else if(imc >= 18.5 && imc <= 24.9){
alert('você está no peso ideal')
}else{
    alert('você está acima do peso');

}