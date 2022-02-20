/* 동적으로 DOM생성 방법 2가지

*/

const main = document.querySelector('main');
let tags = '';
for(let i = 0; i < 200 ; i++){
    tags += `<img src= "img/pic${i}.jpg">`;
}
console.log(tags);
main.innerHTML = tags;