class Pelota{
    constructor(){
        this.colores = ["red", "green", "yellow", ""];
            

        this.radio = this.getRandomInt(10, 50);
        this.centro = { x: this.getRandomInt(this.radio, canvas.width - this.radio), y: this.getRandomInt(this.radio, canvas.height - this.radio)};
        this.direccion = { x: this.getRandomInt(-10, 10), y: this.getRandomInt(-10, 10)}
        this.colorFondo = this.colores[this.getRandomInt(0, this.colores.length)];
        this.colorBorde = this.colores[this.getRandomInt(0, this.colores.length)];
    }

    getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    dibujar(ctx){
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.arc(this.centro.x, this.centro.y, this.radio, 0, 2 * Math.PI);
        ctx.strokeStyle = this.colorBorde;
        ctx.fillStyle = this.colorFondo;
        ctx.fill();
        ctx.stroke();
    }

    actualizar(gravedad){
        this.direccion.y += gravedad;
        this.centro.x += this.direccion.x;
        this.centro.y += this.direccion.y;
        if(this.centro.x < this.radio || this.centro.x + this.radio > canvas.width) {
            this.centro.x -= this.direccion.x;
            this.direccion.x = -this.direccion.x;
        }
        if(this.centro.y < this.radio || this.centro.y + this.radio > canvas.height) {
            this.centro.y -= this.direccion.y;
            this.direccion.y = -this.direccion.y;
        }
    }
}    
