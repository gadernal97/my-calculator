var valor;
var resultado;
function botao(num){
valor=document.calc.visor.value+=num
}
function reset(){
    document.calc.visor.value=''
}
function equal(){
    resultado=eval(valor)
    document.calc.visor.value=resultado
}