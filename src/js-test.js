const arr = [1, 2, 3, 4]
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    `Index: ${i} | Element: ${arr[i]}`
  }, 3000);
}