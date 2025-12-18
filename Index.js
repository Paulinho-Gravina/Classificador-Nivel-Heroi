let nomeJogador = "Hugo"
let quantidadeXP = 9030
let nivelDeHeroi = ""

if(quantidadeXP <= 1000){
    nivelDeHeroi = "Ferro"
}else if(quantidadeXP >= 1001 && quantidadeXP < 2000){
    nivelDeHeroi = "Bronze"
}else if(quantidadeXP >= 2001 && quantidadeXP < 5000){
    nivelDeHeroi = "Prata"
}else if(quantidadeXP >= 5001 && quantidadeXP < 7000){
    nivelDeHeroi = "Ouro"
}else if(quantidadeXP >= 7001 && quantidadeXP < 8000){
    nivelDeHeroi = "Platina"
}else if(quantidadeXP >= 8001 && quantidadeXP < 9000){
    nivelDeHeroi = "Ascendente"
}else if(quantidadeXP >= 9001 && quantidadeXP < 10000){
    nivelDeHeroi = "Imortal"
}else{
    nivelDeHeroi = "Radiante"
}

console.log("O Herói de nome " + nomeJogador + " está no nível " + nivelDeHeroi)
