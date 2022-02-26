/* 동적으로 DOM생성 방법 2가지
- element node
- attrubute node
- text

기존 부모안에 DOM구조를 유지하면서 새로운 노드를 추가
부모 DOM.append(삽입할 element노드)

docuemnt.createElement('노드명')  -  동적으로 eleemntnode 생성
*/

// const main = document.querySelector('main');
// let tags = '';
// for(let i = 0; i < 200 ; i++){
//     tags += `<img src= "img/pic${i}.jpg">`;
// }
// console.log(tags);
// main.innerHTML = tags;

const main = document.querySelector('main');

//동적으로 200개의 img 태그를 생성
for(let i = 0; i < 200; i++){
    const imgNode = document.createElement('img');
    imgNode.setAttribute('src',`img/pic${i}.jpg`);
    main.append(imgNode);
}

/* HTML dom이 모두 화면상에 렌더링 완료되었다고 하더라도 해당 DOM 요소에 수반되는 소소 이미지 영상 로딩과는 별개로 뜬다.
시스템이 발생시키는 이벤트 onload,onerror
*/

//모든 img dom 요소의 소스 이미지 로딩 완료시 메인화면 출력
const imgs = main.querySelectorAll('img');
const aside = document.querySelector('aside');
const len = imgs.length;
let total = 0;

imgs.forEach(function(img){
    img.onload = function(){
        total++;
        console.log(total);
        if(total == len)aside.remove();
    }
});
//미션 1 - 로딩화면에 다음의 텍스트를 출력 (현재 로딩되는 이미지 순번 / 전체 이미지 갯수)
