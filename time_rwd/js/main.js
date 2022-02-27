


/*
    setTimeout(실행할 함수, 지연시간) - 지연시간 이후 함수 실행
    setInterval(실행할 함수, 반복간격) - 반복간격시간마다 함수 계속 호출
*/

const time = document.querySelectorAll('.screen span');
const main = document.querySelector('main');
console.log(time);

setInterval(function(){
    const now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    
    if(hr >= 5 && hr < 11){
        main.className = '';
        main.classList.add('morning');
    }
    if(hr >= 11 && hr < 16){
        main.className = '';
        main.classList.add('afternoon');
    }
    if(hr >= 16 && hr < 20){
        main.className = '';
        main.classList.add('evening');
    }
    if(hr >= 20 || hr < 5){
        main.className = '';
        main.classList.add('night');
    }

    if(hr < 10 ) hr = '0' + hr;
    if(min < 10 ) min = '0' + min;
    if(sec < 10 ) sec ='0' + sec;

    time[0].innerText =hr;
    time[1].innerText =min;
    time[2].innerText =sec;

},1000);

//미션 1. 각 시간값이 한자리 일대 앞쪽에 0을 추가 해보기




