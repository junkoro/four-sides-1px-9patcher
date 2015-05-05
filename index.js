'use strict';


var fs = require('fs');
var Canvas = require('canvas');


function drawPixel(context, x, y, color) {
  context.save();
  context.translate(x, y);
  context.fillStyle = color;
  context.fillRect(0, 0, 1, 1);
  context.restore();
}


function fourSides1px9patcher(src, dst) {

  var img = new Canvas.Image();
  img.src = src;

  // add 1px transparent border
  var cv = new Canvas(img.width + 2, img.height + 2);

  var ctx = cv.getContext('2d');

  // draw image at (1, 1)
  ctx.drawImage(img, 1, 1);

  // 9-patch dot must be black
  var color = 'rgba(0, 0, 0, 1.0)';

  // LEFT-TOP
  drawPixel(ctx, 1, 0, color);

  // LEFT-LEFT
  drawPixel(ctx, 0, 1, color);

  // LEFT-BOTTOM
  drawPixel(ctx, 0, cv.height - 2, color);

  // RIGHT-TOP
  drawPixel(ctx, cv.width - 2, 0, color);

  // write canvas buffer to the file
  fs.writeFile(dst, cv.toBuffer());

}


// Export module
module.exports = fourSides1px9patcher;
