//첫번째 해야할 일 
//1. 이미지를 다 불러온다. main 안에 이미지 태그를 생성시켜서 다 불러온다. 
//2. 이미지 로딩 대기중일때 메인화면에 이미지 로딩 태그 보여주기

const main = document.querySelector('main');
createDOM();

function createDOM(){
    for(let i = 0; i < 200; i++){
        const imgNode = document.createElement('img');
        console.log(imgNode);
        imgNode.setAttribute('src',`img/pic${i}.jpg`);
        main.append(imgNode);
    }
}
