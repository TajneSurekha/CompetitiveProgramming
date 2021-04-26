// Time Complexity : O(2^n)
// Space Complexity : O(n)

var fib = function(n) {
  if(n < 2) return n;
  
  return fib(n-1) + fib(n-2);
};
