const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

const imgs = document.getElementById('imgs')


const img = document.querySelectorAll('#imgs img')

let idx=0

let interval = setInterval(run, 5000)

function run(){
    idx++;
    changeImage()
}

function changeImage(){
    if(idx > img.length - 1){
        idx=0
    } else if(idx < 0) {
        idx = img.length - 1
    }
    imgs.style.transform = `translateX(${-idx*500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 5000)
}

function fixNav(){
    if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active')
    }
}
