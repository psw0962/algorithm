// 1
function solution(seoul) {
  var answer = "";

  seoul.map((x, idx) => {
    if (x === "Kim") {
      answer = `김서방은 ${idx}에 있다`;
    } else {
      return;
    }
  });

  return answer;
}

// 2
const solution = (a, b) => {
  let arr = [];
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    arr.push(a[i] * b[i]);
  }

  arr.forEach((x) => {
    result += x;
  });

  return result;
};
