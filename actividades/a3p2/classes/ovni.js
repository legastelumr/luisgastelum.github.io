function Ovni() {

  this.x = 0;
  this.y = 0;

  this.scaleX = 1;
  this.scaleY = 1;

  this.ovni = new Image();
  this.ovni.src = "ovni.png";

  this.width = 300;
  this.height = 350;
}


Ovni.prototype.draw = function(context) {

  context.save();

  context.translate(
    this.x,
    this.y
  );

  context.scale(
    this.scaleX,
    this.scaleY
  );

  context.drawImage(
    this.ovni,

    -this.width / 2,
    -this.height / 2,

    this.width,
    this.height
  );

  context.restore();

};