function draw_ship(ctx, x, y, radius, options) {
    options = options || {};
    ctx.save();

    if(options.guide) {
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }
}







function draw_grid(ctx, minor, major, stroke, fill) {
    minor = minor || 10;
    major = major || minor * 5;
    stroke = stroke || '#00FF00';
    fill = fill || '#009900';
    ctx.save();
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    var width = ctx.canvas.width,
        height = ctx.canvas.height;

    for(var x = 0; x < width; x += 10) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.lineWidth = (x % major === 0) ? 0.5 : 0.25;
        ctx.stroke();
        if(x % 50 === 0) {
            ctx.fillText(x, x, 10);
        }
        ctx.closePath();
    }

    for(var y = 0; y < height; y += 10) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.lineWidth = (y % major === 0) ? 0.5 : 0.25;
        ctx.stroke();
        if(y % 50 === 0) {
            ctx.fillText(y, 0, y + 10);
        }
        ctx.closePath();
    }
    ctx.restore();
}