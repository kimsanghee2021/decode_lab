
   
const btn = document.querySelector('button');
const box = document.querySelector('article');

btn.addEventListener('click',e => {
  e.preventDefault();

  /*
  //opacity
  new Animate(box,{
    prop: 'opacity',
    value: 0.5 //0에서  1사이의 실수값
  })
  new Animate(box, {
    prop: 'left',
    value: '50%' //퍼센트 입력시는 문자열로
    //속도값 생략하면 기본값 500적용됨
  })
  //스크롤 이동
  new Animate(window, {
    prop: 'scroll',
    value: 500,
  })
  */

  //콜백함수로 모션 동기화
  new Animate(box, {
    prop: 'left',
    value: 500,
    duration: 1000,
    callback: () => {
      new Animate(box, {
        prop: 'top',
        value: 300,
        duration: 1000
      })
    }
  })

  
})