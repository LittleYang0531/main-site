async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function hideSidebar() {
    var e = document.getElementById("sidebar");
    var hideButton = document.getElementById("hideSidebarButton");
    var showButton = document.getElementById("showSidebarButton");
    var width = e.clientWidth, setTime = 200;
    hideButton.classList.add("disableClick");
    showButton.classList.add("disableClick");
    for (i = 0; i < setTime; i++) {
        var left = width / 2 * (Math.cos(i * Math.PI / setTime) - 1);
        e.style.left = left + "px";
        await sleep(1);
    }
    hideButton.style.opacity = 0; hideButton.style.zIndex = -1;
    showButton.style.opacity = 1; showButton.style.zIndex = 0;
    hideButton.classList.remove("disableClick");
    showButton.classList.remove("disableClick");
}

async function showSidebar() {
    var e = document.getElementById("sidebar");
    var hideButton = document.getElementById("hideSidebarButton");
    var showButton = document.getElementById("showSidebarButton");
    var width = e.clientWidth, setTime = 200;
    hideButton.classList.add("disableClick");
    showButton.classList.add("disableClick");
    for (i = 0; i < setTime; i++) {
        var left = width / 2 * (Math.cos((setTime - i) * Math.PI / setTime) - 1);
        e.style.left = left + "px";
        await sleep(1);
    }
    hideButton.style.opacity = 1; hideButton.style.zIndex = 0;
    showButton.style.opacity = 0; showButton.style.zIndex = -1;
    hideButton.classList.remove("disableClick");
    showButton.classList.remove("disableClick");
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') window.onload = func;
    else window.onload = function () {
        oldonload();
        func();
    }
}

addLoadEvent(async function(){
    var e = document.getElementsByClassName("card");
    for (i = 0; i < e.length; i++) {
        (function(index){setTimeout(async function(){
            var ee = e[index];
            var setTime = 200, topSize = ee.getBoundingClientRect().top;
            for (var j = 0; j < setTime; j++) {
                var opacity = Math.sin(j * Math.PI / setTime / 2);
                ee.style.opacity = opacity;
                var top = topSize * (Math.cos(j * Math.PI / setTime) + 1) / 2;
                ee.style.top = top + "px";
                console.log(index + ' ' + j);
                await sleep(1);
            }
        }, i * 500);})(i);
    }
});