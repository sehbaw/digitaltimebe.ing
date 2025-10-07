var canvas;

var hydra = new Hydra({
    canvas: document.getElementById("myCanvas"),
    makeGlobal: false
  }).synth


function setup() {
    createCanvas(400,400);
}

function draw() {
    hydra.noise(3)
    .kaleid(4)
    .modulate(hydra.modulateKaleid(4))
    .out(o0)

      }

