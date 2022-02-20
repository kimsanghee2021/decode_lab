var lis = document.querySelectorAll('ul li');

// for(var i = 0; i < lis.length; i++){
//     lis[i].addEventListener('click',function(e){
//         e.preventDefault();
//         console.log(i);
//     });
// }

//es5버전에서 관리방법
for(var i = 0; i < lis.length; i++){
    (function(index){
        lis[index].addEventListener('click',function(e){
            e.preventDefault();
            console.log(index);
        });
    })(i);
}
/*
hoisting (위로 끌어져 올라감)
- 반복문이 안쪽의 var로 선언하고 지역 변수 i값이 반복이 끝나면 사라져야하지만 
    반복문이 끝난 후에도 값이 남아서 전역변수로 등록되는 호이스팅 현상이 발생됨
- es5 버전에서 위와 같은 문자를 해결하기 위해 이벤트문 안쪽을 즉시실행함수로 감싸줌

기존의 위와같은 var 선언방식의 문제점을 보완하기 위한 변수 선언방식 'let'
*/