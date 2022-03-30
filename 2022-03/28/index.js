// 1. forEach
const replaceNumber1 = (string) => {
  // 찾을 문자열 선언
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let result = string;

  // numbers 배열 안에 있는 요소들을 입력받은 매개변수 string에 있는지 찾고 배열로 리턴한다.
  numbers.forEach((value, index) => {
    let arr = result.split(numbers[index]);

    // 리턴한 배열의 요소 자리에 반복문을 진행하는 인덱스 숫자와 numbers가 의미하는 숫자가 같기 때문에
    // 인덱스 숫자로 변환시키고 join메소드를 활용하여 문자열인 숫자로 변환
    result = arr.join(index);
  });
  return Number(result);
};

// 2. replaceAll
const replaceNumber2 = (s) => {
  const numbers = [
    {
      num: 0,
      string: "zero",
    },
    {
      num: 1,
      string: "one",
    },
    {
      num: 2,
      string: "two",
    },
    {
      num: 3,
      string: "three",
    },
    {
      num: 4,
      string: "four",
    },
    {
      num: 5,
      string: "five",
    },
    {
      num: 6,
      string: "six",
    },
    {
      num: 7,
      string: "seven",
    },
    {
      num: 8,
      string: "eight",
    },
    {
      num: 9,
      string: "nine",
    },
  ];
  let result = s;

  numbers.forEach((val, idx) => {
    let regex = val.string;
    result = result.replaceAll(regex, val.num);
  });
  return Number(result);
};
