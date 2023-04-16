// 1-  using closure build fibonoci series

function fib() {
    let x = 0, y = 1, z = 0;
    return function next() {
        [z, x, y] = [x, y, x + y];
        return z;
    };
}
let fun = fib();
for (let i = 0; i < 10; i++) {
    console.log(fun());
}


//2- using elixir programming language Design & Code one of the sorting algorithms

// defmodule Quick do
//   def sort([]), do: []
//   def sort([pivot | rest]) do { left, right } = Enum.partition(rest, & (& 1 < pivot))
//     sort(left)++ [pivot | sort(right)]
// end
// end