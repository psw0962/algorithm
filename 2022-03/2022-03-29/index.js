// 1
function solution(seoul) {
  var answer = "";

  seoul.forEach((x, idx) => {
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

// 3
function solution(n) {
  let answer = [];
  const arr = n.toString().split("").reverse();

  arr.forEach((x) => answer.push(Number(x)));

  return answer;
}

// 4
function solution(answers) {
  // 주어진 규칙 선언
  const template = [
    { 1: [1, 2, 3, 4, 5] },
    { 2: [2, 1, 2, 3, 2, 4, 2, 5] },
    { 3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] },
  ];

  var answer = [];

  // 매개변수의 배열 요소들이 규칙배열에 있을 때마다 1씩 증가시킬 변수 선언
  let one = 0;
  let two = 0;
  let three = 0;

  for (let i = 0; i < answers.length; i++) {
    // 정의한 규칙(template 변수) 들에 매개변수의 배열 요소들이 있는지 체크하고 있다면 선언한 각 변수에 1씩 증가
    if (answers[i] === template[0][1][i]) {
      one += 1;
    }

    if (answers[i] === template[1][2][i]) {
      two += 1;
    }

    if (answers[i] === template[2][3][i]) {
      three += 1;
    }
  }

  // 정답이 하나라도 있다면 1씩 증가 되었을 변수들이 0 이상이면 리턴할 배열에 원하는 형태로 push
  if (one > 0) {
    answer.push(1);
  }

  if (two > 0) {
    answer.push(2);
  }

  if (three > 0) {
    answer.push(3);
  }

  return answer;
}
