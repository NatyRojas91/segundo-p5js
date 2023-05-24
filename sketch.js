var contador = 1;
let movimiento;
let colorLinea;

function setup() {
  createCanvas(500, 600);
  / background(150);/;
}

function draw() {
  background(150);

  push();
  stroke(0);
  strokeWeight(3);

  fill(235, 43, 43);
  rect(20, 20, 400, 525); // rectangulo atras
  noFill();

  fill(0, 0, 0, 175);
  stroke(0, 51, 255);
  rect(40, 10, 250, 450); //rectangulo borde azul
  noFill();

  stroke(0);
  fill(255, 250, 102);
  ellipse(295, 505, 200, 50);
  noStroke();
  pop();

  push();

  if (contador >= 0 && contador < 100) {
    colorLinea = color(255, 250, 102);
    noFill();
  } else if (contador >= 100 && contador < 200) {
    fill(235, 43, 43);
  } else if (contador >= 200 && contador < 300) {
    colorLinea = color(0, 51, 255);
    noFill();
  } else if (contador >= 300 && contador < 400) {
    fill(235, 43, 43);
  } else if (contador >= 400 && contador < 500) {
    colorLinea = color(0); //color(45, 250, 255);
    fill(255); //noFill();
  } else if (contador >= 500 && contador < 600) {
    noFill();
  }

  contador++;
  if (contador == 500) {
    contador = 0;
  }

  //  noFill()
  strokeWeight(12);
  stroke(colorLinea); //linea del circulo amarillo
  rect(310, 100, 160, 175, 100); //circulo
  pop();

  push();
  stroke(0, 51, 255);
  strokeWeight(3);
  line(384, 355, 20, 355); //azul arriba

  stroke(0, 51, 255);
  strokeWeight(3);
  line(384, 395, 20, 395); //azul

  stroke(0);
  strokeWeight(3);
  line(384, 375, 20, 375); //negra

  stroke(255, 235, 59);
  strokeWeight(3);
  line(243, 175, 243, 415); //amarilla lagrima01

  stroke(255, 235, 59);
  strokeWeight(3);
  line(226, 200, 226, 435); //amarilla lagrima02

  stroke(255, 235, 59);
  strokeWeight(3);
  line(209, 225, 209, 455); //amarilla

  //noStroke();

  fill(235, 43, 43);
  strokeWeight(5);
  stroke(255, 250, 102);
  triangle(165, 225, 80, 90, 256, 90); //triangulo invertido
  pop();
}
