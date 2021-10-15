function rgb(r, g, b){
  // RGB uses decimal number system (base 10)
    // 10 chars in RGB are 0-9
  // Hexcode uses a hexadecimal number system (base 16)
    // 16 chars in hexcode are 0-9 and A-F
  
  // Garbage mess of if statements to fulfill test cases >255 and <0
  if (r > 255) {r = 255;} 
  else if (r < 0) {r = 0;}
  
  if (g > 255) {g = 255;} 
  else if (g < 0) {g = 0;}
  
  if (b > 255) {b = 255;} 
  else if (b < 0) {b = 0;}
  
  // using toString(16) to convert from base 10 to base 16
  var r = r.toString(16);
  var g = g.toString(16);
  var b = b.toString(16);
  
  // appending 0 to single digits and under
  if (r.length == 1) {r = '0' + r;} 
  if (g.length == 1) {g = '0' + g;}
  if (b.length == 1) {b = '0' + b;}
  
  return (r+g+b).toUpperCase();
}