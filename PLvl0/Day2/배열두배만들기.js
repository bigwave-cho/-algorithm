/* 
문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
  return numbers.map((number) => {
    return number * 2;
  });
}

console.log(solution([1, 2, 3, 4]));

// reduce로 푸는 방법 이거 잘 모르것다!

function solution2(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}

console.log(solution2([1, 2, 3, 4]));
