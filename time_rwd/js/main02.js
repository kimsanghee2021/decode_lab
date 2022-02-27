/*
    시간에 맞춰서 메인의 백그라운드 이미지 변경 및 시간도 같이 변경해서 노출시키기
    1. 현재 시간을 구해라
    2. 현재 시간을 구한다음 if문으로 시간에 따른 배경이미지을 노출 시키고, 10보다 작은 숫자앞에 0을 노출시켜라
    3. 이것들을 함수로 함축 시켜서 좀더 유지보수하기 쉽게 만들어라
*/
const main = document.querySelector('main');
const numbers = document.querySelectorAll('.screen span');


const now = new Date();
const hr = now.getHours();
const min = now.getMinutes();

console.log(min);