class Cuadrado extends Pelota {
    constructor(){
        super();
    }

    dibujar(ctx){
        ctx.beginPath();
        ctx.strokeStyle = this.colorBorde;
        ctx.fillStyle = this.colorFondo;
        ctx.rect(this.centro.x, this.centro.y, this.radio, this.radio);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}
