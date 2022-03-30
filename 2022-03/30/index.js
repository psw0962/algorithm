// 1
function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  return Array.from(new Set(answer)).sort((a, b) => a - b);
}

// 2
function solution(s) {
  // 공백을 기준으로 1차원 배열생셩
  let arr = s.split(" ");
  // 인덱스 요소를 기준으로 2차원 배열생성
  arr = arr.map((x) => x.split(""));

  // 바깥 배열의 길이만큼 반복
  for (let i = 0; i < arr.length; i++) {
    // 안에 배열의 길이만큼 반복
    for (let j = 0; j < arr[i].length; j++) {
      // 짝수면 소문자, 홀수면 대문자
      if (j % 2 !== 0) {
        arr[i][j] = arr[i][j].toLowerCase();
      }

      if (j % 2 === 0) {
        arr[i][j] = arr[i][j].toUpperCase();
      }
    }
  }
  return arr.map((x) => x.join("")).join("");
}
