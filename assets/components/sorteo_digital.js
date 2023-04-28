const d = document;

export default function drow (btn,selector,ganador) {
    const $ganador = document.getElementById(ganador);
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
          random = Math.floor(Math.random()*$players.length),
          winner = $players[random];
        console.log($players)

    return `El ganador es: ${winner.textContent}`;
    }

    d.addEventListener("click", e => {
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            $ganador.innerHTML = `<h3><b>${result}</b></h3>`
            // alert(result);
            // console.log(result);
        }
    })
}