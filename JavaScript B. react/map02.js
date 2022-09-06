var Fh = [0,32,44,45,47,91,93,121];

var C = Fh.map(function(item){return ((item - 32)*5/9).toFixed(2)});

console.log(C)