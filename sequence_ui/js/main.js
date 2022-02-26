/* 

동적으로 DOM생성 방법 2가지
1. 부모 DOM.innerHTML - '생성할 태그 문자열';
-- 부모 요소 안쪽에 있던 기존 DOM을 삭제하고 새로 생성할 문자열로 DOM 생성

2. 부모요소.append(elementNode);
-- 부모요소 안쪽에 있던 기존 DOM구조를 유지하면서 추가로 DOM생성
ex) <a href="주소" title = '타이틀'>링크</a>

3. 템플릿 문자열 : 문자를 백틱으로 감싼 다음에 변수부분만 ${}로 치환
- 기존 부모안의 DOM 구조를 유지하면서 새로운 DOM노드를 추가
- 부모 DOM.append(삽입할 Element노드)
- document.createElement('노드명') - 동적으로 ElementNode생성

DOM
- element node
- attrubute node
- text
-> HTML DOM이 모두 화면상에 렌더링 완료되었다고 하더라도 DOM요소에 수반되는 이미지, 영상 로딩과는 별개이다.

시스템이 발생 시키는 이벤트
-- onload, onerror
-- onload = 해당 DOM에 수반되는 이미지가 로딩완료시 발생
-- onerror = 해당 DOM에 수반되는 소스들에 문제가 발생해서 출력되지 않을 때
-- onloadeddata = 해당 DOM에 수반되는 video, audio 멀티미디어 소스 로딩 완료시

문자와 숫자 
parseInt(문자,숫자) : 소수점 이하를 버리고 정수값 반환
parseFloat(문자, 숫자) : 소숮머 이하를 살린 실수값 반환

DOM.classList.add('클래스명') : 해당 클래스명 추가
DOM.classList.remove('클래스명') : 해당 클래스명 제거
DOM.className = ''; 해당 DOM에 연결되어 있는 모든 클래스명 제거
DOM.classList.contains('클래스명') : 해당 클래스명이 있으면 true반환, 없으면 flase반환



*/

const main = document.querySelector('main');


//동적으로 200개의 img 태그를 생성
createDOM();

//모든 img dom 요소의 소스 이미지 로딩 완료시 메인화면 출력
imgLoad();

//mousemove Elvent
window.addEventListener('mousemove',function(e){
    const x = e.clientX;
    const wid = window.innerWidth;
    console.log(wid);
    const percent = parseInt(x/wid*100);
    const imgs = document.querySelectorAll('main img');
    console.log(percent);

    for(const img of imgs ){
        img.style.display = 'none';
        imgs[percent].style.display = 'block';
    }
});


function createDOM(){
    for(let i = 0; i < 200; i++){
        const imgNode = document.createElement('img');
        imgNode.setAttribute('src',`img/pic${i}.jpg`);
        main.append(imgNode);
    }
}

function imgLoad(){
    const imgs = main.querySelectorAll('img');
    const aside = document.querySelector('aside');
    const len = imgs.length;
    const delay = convertSpeed(aside);
    let total = 0;

    imgs.forEach(function(img){
        img.onload = function(){
            total++;
            // console.log(total);
            aside.innerText =`${parseInt(total/len*100)}% / 100% `;

            if(total == len){
                //모든 이미지 소스 로딩이 완료되면 off 클래스를 붙여서 fade효과를 주고 
                aside.classList.add('off');
                setTimeout(function(){
                    aside.remove();
                },delay);
            }
        }
    });
}

function convertSpeed(el){
    let delay = getComputedStyle(el).transitionDuration; //문자로 되어있는것을 숫자로 변경해야한다.
    delay = parseFloat(delay); //숫자로 변경 
    return delay;
}
