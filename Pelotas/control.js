let pelotica = [];
let canvas = null;
let ctx = null;
const gravedad = 0.1;
const numPelotas = 1;

window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = this.canvas.getContext("2d");
    for (let i = 0; i < numPelotas; i++){
        pelotica.push(new Pelota())
        pelotica.push(new Cuadrado())
        pelotica.push(new Triangulo())
        pelotica.push(new Estrella())
    }
    animar();
}

function animar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pelotica.forEach(pelotica => {
        pelotica.dibujar(ctx);
        pelotica.actualizar(gravedad);
    });
    requestAnimationFrame(animar);
}

