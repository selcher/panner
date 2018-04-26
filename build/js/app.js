var body = document.body;
var container = body.querySelector(".container");
var elem = container.querySelector(".content");
Panner.init(elem, container);

elem = container.querySelector("#panner-img");
Panner.init(elem);