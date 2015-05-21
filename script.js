var canvas = document.getElementById('mycanvas'),
    context = canvas.getContext('2d');

var sandwichMaker = {
    // context.beginPath();
    // context.moveTo(50, 50);
    // context.lineTo(100, 300);
    // context.stroke();

    addTopBread: function() {
        context.fillStyle = '#B3834B';
        context.fillRect(150, 100, 200, 30);
    },

    addGreens: function() {
        context.fillStyle = "green";
        context.fillRect(137, 130, 200, 25);
    },

    addCheese: function() {
        context.fillStyle = 'yellow';
        context.fillRect(140, 185, 220, 15);
    },

    addTomato: function() {
        context.fillStyle = 'tomato';
        context.fillRect(160, 155, 160, 30);
    },

    addBottomBread: function() {
        context.fillStyle = '#B3834B';
        context.fillRect(150, 200, 200, 30);
    },

};