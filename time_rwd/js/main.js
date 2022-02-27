


/*
    setTimeout(실행할 함수, 지연시간) - 지연시간 이후 함수 실행
    setInterval(실행할 함수, 반복간격) - 반복간격시간마다 함수 계속 호출
*/

const numbers = document.querySelectorAll('.screen span');
const main = document.querySelector('main');


setInterval(function(){

    //getTime 함수로 시간, 분, 초값을 배열로 반환
    const times = getTime();

    const data = [
        {condition :times[0] >= 5 && times[0] < 11, name : 'morning' },
        {condition :times[0] >= 11 && times[0] < 16, name : 'afternoon' },
        {condition :times[0] >= 16 && times[0] < 20, name : 'evening' },
        {condition :times[0] >= 20 || times[0] < 5, name : 'night' },
    ]
    //반환된 숫자값들을 반복을 돌며 값을 보정해서 선택자의 순번에 맞게 적용
    //times.forEach((time, idx)=>setTime(time,idx));
    times.forEach(function(time, index){
        setTime(time, index);
    });

    data.forEach(function(item){
        if(item.condition){
            main.className = '';
            main.classList.add(item.name);
        }
    });

},1000);


//시간 값을 구해서 [시간,분,초]로 반환하는 함수
function getTime(){
    const now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    return [hr,min,sec];
}

//변환할 숫자값과 순서값을 인수로 받아서 숫자를 보정하고 해당 인수의 부모요소에 값 적용하는 함수
function setTime(num, index){
    if(num < 10) num = '0' + num;
    numbers[index].innerText = num;
}

