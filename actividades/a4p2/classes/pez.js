function Pez() {

  this.x = 0;
  this.y = 0;

  this.pez = new Image();
  this.pez.src = "pez.png";

  this.width = 150;
  this.height = 150;
}

Pez.prototype.draw = function(context) {

  context.save();

  context.translate(
    this.x,
    this.y
  );

  context.drawImage(
    this.pez,
    -this.width / 2,
    -this.height / 2,
    this.width,
    this.height
  );

  context.restore();

};