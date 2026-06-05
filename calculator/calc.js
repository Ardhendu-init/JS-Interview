let result = document.getElementById("result");
let expression = "";

function appendNumber(num) {
  expression += num;
  result.value = expression;
}
function appendOperator(operator) {
  expression += operator;
  result.value = expression;
}

const calculateRes = () => {
  const res = eval(expression);
  result.value = res;
};
