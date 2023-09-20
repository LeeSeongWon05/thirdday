    // hoisting : 메모리를 선언하지 않고 값도할당하지 않았음에도 불구하고 
    // 선언되지 않은 메모리

    function plus(n1. n2){
      console.log(n1+n2);
      return n1 + n2
    }
/*
    const minus = (n1, n2) => {
      return n1 - n2;
    }
*/
// 화살표 함수에서 중괄호과 return은 생략가능
// 인수로 2개의 값을 받아서 연산한 다음에 리턴하는 함수
// 함수안쪽의 복수줄이상의 state문이 들어가게 되면 무조건 중괄호로 감싼뒤에 return 문 처리
const minus = (n1, n2) => {
  console.log(n1 - n2)
  return n1 - n2
};

const result = minus(4, 2);
console.log(result);

const returnObject = (name,age) => {
  return{
    name: name,
    age: age,
  }
}

/* 
다르게는 
const returnObject = (name, age) => ({name: name, age, age}) 로 쓸수도 있다
*/

const student1 = returnObject('david', 20);
console.log(student1)
