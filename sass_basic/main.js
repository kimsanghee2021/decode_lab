/*
    변수 : 특정 데이터를 저장하는 그릇
    쓰는 이유 
    1. 반복적인 값을 관리할때 (사용상의 편의)
    2. 스크립트로 하여금 한번 찾은 내용을 또 찾지 않고 재사용해야 될때 (성능상의 이점)
    자주쓰는 DOM요소를 변수에 담는 행위 (메모리에 해당 DOM요소를 미리 Caching)
*/

//ECMAScript  ES5 (2015) ES6

var num; //변수선언 (heap에 메모리를 할당해서 저장 공간 생성)
num = 3; //변수에 값 할당 
var num2 = 5; //변수를 초기화 (메모리와 값 동시 할당)
num2=3;
console.log(num2);

/*
primitive type(원시형)
메모리공간에 실제로 해당 값이 할당 (메모리에 값만 저장)
- String(문자열)
- Number(숫자)
- Boolean(true, false)
- undefined - 변수를 선언하고 값을 할당하지 않으면 자동으로 들어가는 값
- null - 명시적으로(일부러) 값을 비워둘때
reference type(참조형)
메모리 공간에 해당 값의 참조 주소 할당 (참조되는 값이 사용할수 있는 다양한 내장함수)
-Array(배열) 여러값을 그룹핑 객체- 일련의 정보값들을 그룹으로 묶어서 관리하는 자료형 -많은 양의 같은 성격의 자료를 관리
-Object(객체)  key:value형태로 구조적으로 묶은 자료형태-데이터의 갯수는 많지않지만 저장되는 값들의 성격이 상이할때
*/

var colors = ['red','blue','green'];
console.log(colors[0]);

var student1 = {
    name: '홍길동',
    age: 20,
    isFemale: false
}

/* 
    DOM 선택
    - document.getElementById('아이디명');
    - document.getElementsByClassName('클래스명');
    - document.getElementsByTagName('태그명');

    Collection (유사배열)

    - 배열과 비슷하지만 배열은 아닌 복수개의 DOM요소들을 묶어놓은 그룹형태
    유사배열
    - 배열의 부분적인 기능들을 활용은 가능하지만 순수배열이 아니기때문의 기능 제약
    - document.querySelector(선택자) 단수개요소 선택
    - document.querySelectorAll(선택자) 복수개 요소 선택
*/
var lis = document.getElementsByTagName('li');
var liss = document.querySelectorAll('li');
console.log(lis, liss);


/*
    DOM 이벤트 연결
    DOM.onclick = 연결할 함수;
    DOM.addEventListener('이벤트명', 연결할 함수)
    DOM 스타일 제어
    스타일 변경
    DOM.style.속성명 = '속성값'
    자바스크립트는 HTML를 만들어진 DOM객체에만 접근 가능하고, stylesheet의 값은 접근 불가
    만약 자바스크립트에 의해서 변경된 스타일값을 접근가능하지만
    css에 초기설정된 스타일값을 접근 불가
    --해결->화면에 출력된 값을 다시 연산해서 값을 가져와야됨
    getComputedStyle(DOM).속성명
*/

var box = document.getElementById('box');


box.addEventListener('click',function(){
    this.style.backgroundColor = 'hotpink';
    console.log(btn);
});

var btn = document.querySelector('button');
btn.addEventListener('click',function(){
    var bg = getComputedStyle(box).backgroundColor;
    console.log(bg);
})


