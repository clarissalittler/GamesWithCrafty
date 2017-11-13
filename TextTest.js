window.onload = function () {
    Crafty.init(500,350, document.getElementById('game'));
    var textBox = Crafty.e('2D, DOM, Text, Keyboard')
	.attr({x : 100, y: 100});
    textBox.texty = "";
    textBox.bind("KeyDown", function(e) {
	if (e.key >= Crafty.keys["0"] && e.key <= Crafty.keys.Z) {
	    textBox.texty = textBox.texty + String.fromCharCode(e.key);
	    textBox.text(textBox.texty);
	}
    });
}
