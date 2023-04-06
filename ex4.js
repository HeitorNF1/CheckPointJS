let idade = prompt('informe sua idade');


if (idade <= 12 ){

    alert('você é criança');

}else if(idade >= 13 && idade <= 18){

    alert('você é adolescente');

}else if(idade >= 19 && idade <= 60){

    alert('você é adulto');

}else{
    alert('você é idoso');
}