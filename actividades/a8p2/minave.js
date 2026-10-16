
function Navecita() {
  this.x = 0;
  this.y = 0;
  this.width = 70;
  this.height = 70;
  this.rotation = 0;
  this.showFlame = false;

  this.imagen = new Image();
  this.imagen.src = "nave.png";
}

Navecita.prototype.draw = function(context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);

  // Dibujar la flama cuando acelera
  if (this.showFlame) {
    context.fillStyle = "orange";
    context.beginPath();
    context.moveTo(-this.width / 2, -10);
    context.lineTo(-this.width / 2 - 25, 0);
    context.lineTo(-this.width / 2, 10);
    context.closePath();
    context.fill();
  }

  // Dibujar imagen de la nave
  if (this.imagen.complete && this.imagen.naturalWidth > 0) {
    context.drawImage(
      this.imagen,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
  }

  context.restore();
};