var contjogada = 1
function jogo() {
    let position, i, pos;
    pos=[]; //posições possíveis
    for (i=1; i<10; i++) {
        pos[i] = i;
    }
    position = document.getElementById("position").value;
    for (i=1; i<10; i++) { //Leitura da posição de jogada
        if (pos[i] == i) {
            if (contjogada % 2 == 0) {
            document.getElementById("pos"+position).innerHTML = "O";
            }
            else {
                document.getElementById("pos"+position).innerHTML = "X";
            } 
        }
    }
  
    contjogada = contjogada + 1; 
    if (contjogada == 10){
        let removebutton = document.getElementById("button");
        removebutton.parentNode.removeChild(removebutton);
        fimdejogo.innerHTML = "Fim de jogo. Obrigado!";
    }
}