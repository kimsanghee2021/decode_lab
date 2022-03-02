const main = document.querySelector('main');
const numbers = document.querySelectorAll('.screen span');
const menus = document.querySelectorAll('nav span');
const [am, pm] = document.querySelectorAll('.screen em');

setInterval(function() {
const times = getTime();
const data = [
{ condition: times[3] >= 5 && times[3] < 11, name: 'morning' },
{ condition: times[3] >= 11 && times[3] < 16, name: 'afternoon' },
{ condition: times[3] >= 16 && times[3] < 20, name: 'evening' },
{ condition: times[3] >= 20 || times[3] < 5, name: 'night' },
]
times.forEach(function(time, idx) {
if (idx < 3) {
setTime(time, idx)
}
});

data.forEach(function(item, index) {
if (item.condition) {
main.className = '';
main.classList.add(item.name);
for (const menu of menus) menu.classList.remove('on');
menus[index].classList.add('on');
}
});

if (main.classList.contains('afternoon')) {
main.classList.add('dark_txt');
} else {
main.classList.remove('dark_txt');
}
}, 1000);

function getTime() {
const now = new Date();
let hr = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();
let modified_hr = null;

if (hr > 12) {
modified_hr = hr - 12;
am.classList.remove('on');
pm.classList.add('on');
} else {
modified_hr = hr;
am.classList.add('on');
pm.classList.remove('on');
}
return [modified_hr, min, sec, hr];
}

function setTime(num, index) {
if (num < 10) num = '0' + num;
numbers[index].innerText = num;
}

