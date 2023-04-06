let credenciais={

    usuario:"admin",
    senha:"123456"

}

let usuario = prompt("informe seu usuário");

let senha = prompt("informe sua senha");

if(usuario != credenciais.usuario || senha != credenciais.senha){
    alert('credenciais incorretas');
}else{
    alert('credenciais corretas');
}