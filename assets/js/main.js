function getTimeFromSeconds(seconds) {
const data = new Date(seconds * 1000);
return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
})
}
// console.log(getTimeFromSeconds(10))
const clock = document.querySelector('.clock')
// const iniciar = document.querySelector('.iniciar')
// const pausar = document.querySelector('.pausar')
// const zerar = document.querySelector('.zerar')
let seconds = 0;
let timer;
function startTimer() {
    timer = setInterval(function () {
        seconds++;
        clock.innerHTML = getTimeFromSeconds(seconds)
    }, 1000);
}

document.addEventListener('click', function (e) {
    const el = e.target;
    if(el.classList.contains('iniciar')) {
        clock.classList.remove('paused');
        clearInterval(timer);
        startTimer();
    }
    if(el.classList.contains('pausar')) {
        clock.classList.add('paused');
        clearInterval(timer);
    }
    if(el.classList.contains('zerar')) {
        clock.classList.remove('paused');
        clearInterval(timer);
        clock.innerHTML = `00:00:00`;
        seconds = 0;
    }
});

// iniciar.addEventListener('click', function(e) {
//     clock.classList.remove('paused');
//     clearInterval(timer);
//     startTimer();
// });


// pausar.addEventListener('click', function(e) {
//     clock.classList.add('paused');
//     clearInterval(timer);
// });

// zerar.addEventListener('click', function(e) {
//     clearInterval(timer);
//     clock.innerHTML = `00:00:00`;
//     seconds = 0;
// })

// const timer = setInterval(function () {
        
// });

// iniciar.addEventListener('click', function(event) {
//     setInterval(timer, 1000);
//     function timer() {
//         const date = new Date();
//         clock.innerHTML = date.toLocaleTimeString(
//             pt-BR, 1000
//         );
//     }

// });


// setInterval(function () {
//     clock.innerHTML = `00:00:${sec}`
// }, 1000);
// let sec = 0;
// return (sec < 10) ? `0${sec}` : sec;
// // sec++;
// // console.log(sec);
// });
// const seconds = clock.innerHTML
// // setInterval(seconds, 1000);