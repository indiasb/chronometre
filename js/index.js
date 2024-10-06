let time = 0;
let chrono = document.querySelector(".time");
let launch = true;

function chronoLaunch() {
    if (launch) {
        time++;
        chrono.innerHTML=time;
        setTimeout(chronoLaunch, 1000);
    }
} 

function chronoStop () {
    launch = false;
}

function chronoReset () {
    time = 0;
    chrono.innerHTML = time;
    launch = true;
}