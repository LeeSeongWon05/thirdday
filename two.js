const btns = document.querySelectorAll('.btns li');

const handler = () => {
	console.log('text');
};

const handlerText = (text) => {
	console.log('event', text);
	return text;
};

// es6
// 이벤트 발생시 호출할 함수에 인수를 전달할 필요가 없을때
btns[0].addEventListener('click', handler);
// 이벤트 발생시 호출할 함수에 인수를 전달해야 될 때 다시 화살표함수로 wrapping 처리
const result = btns[1].addEventListener('click', handlerText('hello'));
console.log('result', result);
