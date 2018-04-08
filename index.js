var canvas = document.getElementById('asteroids'),
    context = canvas.getContext('2d');

draw_grid(context, 5, 45, 'red', 'yellow');
draw_ship(context, 200, 200, 150, {guide: true});

































// function draw_pacMan() {
//     context.beginPath();
//     context.arc(200, 200, 150, 0.2 * Math.PI, 1.8 * Math.PI);
//     context.lineTo(200, 200);
//     context.fillStyle = 'yellow';
//     context.fill();
//     context.closePath();
// }
//
// setInterval(draw_pacMan, 100);



