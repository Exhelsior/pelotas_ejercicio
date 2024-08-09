class Estrella extends Pelota{
    constructor(){
        super();
    }

    dibujar(ctx) {
        const numeroDePuntas = 5;
        const radioExterior = this.radio; // Radio exterior de la estrella
        const radioInterior = this.radio / 2; // Radio interior de la estrella
        const anguloInicial = -Math.PI / 2; // Comienza en la parte superior
    
        ctx.beginPath();
        ctx.strokeStyle = this.colorBorde;
        ctx.fillStyle = this.colorFondo;
    
        for (let i = 0; i < numeroDePuntas * 2; i++) {
            const angulo = anguloInicial + i * Math.PI / numeroDePuntas;
            const radio = i % 2 === 0 ? radioExterior : radioInterior;
            const x = this.centro.x + radio * Math.cos(angulo);
            const y = this.centro.y + radio * Math.sin(angulo);
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
    
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}