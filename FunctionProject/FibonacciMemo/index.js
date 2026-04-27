var bigInt = require("big-integer");

let memo = {};

function fibMemo(n) {
    if (n in memo) return memo[n];
    if (n <= 0) return bigInt.zero;
    if (n === 1) return bigInt.one;
    memo[n] = fibMemo(n - 1).add(fibMemo(n - 2));
    return memo[n];
}

module.exports = async function (context, req) {
    context.log('FibonacciMemo function processed a request.');
    let nth = req.body.nth;
    if (nth < 0) throw 'must be greater than 0';
    context.res = { body: fibMemo(nth).toString() };
}