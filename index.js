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

function importHTML(path, e) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
            document.getElementById(e).innerHTML = this.responseText;
    }; xmlhttp.open("GET", path, true);
    xmlhttp.send();
}

function insertCard(bg, src, title, desp, e = "app") {
    var E = document.getElementById(e);
    E.innerHTML += "<div class=\"card\">"
                + "<div class=\"header\" style=\"background-image: url(" + bg + ")\"></div>"
                + "<div class=\"content\">"
                + "<a class=\"h2\" href=\"" + src + "\">" + title + "</a>"
                + "<p>" + desp + "</p></div></div>";
}

async function loadCard() {
    var e = document.getElementsByClassName("card");
    for (i = 0; i < e.length; i++) {
        (function(index){setTimeout(async function(){
            var ee = e[index];
            var setTime = 200, topSize = window.getComputedStyle(ee, null).top.replace("px", "");
            for (var j = 0; j < setTime; j++) {
                var opacity = Math.sin(j * Math.PI / setTime / 2);
                ee.style.opacity = opacity;
                var top = topSize * (Math.cos(j * Math.PI / setTime) + 1) / 2;
                ee.style.top = top + "px";
                await sleep(1);
            }
        }, i * 300);})(i);
    }
}

async function insertArticle(bg, title, src, e = "app") {
    var E = document.getElementById(e);
    var text = ""; var ok = false;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) text = this.responseText, ok = true;
    }; xmlhttp.open("GET", src, true);
    xmlhttp.send();
    while(ok == false) await sleep(1);
    E.innerHTML += "<div class=\"article flex flex-column\">"
                + "<div class=\"header\" style=\"background-image: url(" + bg + ")\"></div>"
                + "<div class=\"content flex flex-column\">"
                + "<p class=\"h1 center\" style=\"margin-bottom: 30px\">" + title + "</p>"
                + text + "</div></div>";
}

async function loadArticle() {
    var e = document.getElementsByClassName("article");
    for (i = 0; i < e.length; i++) {
        (function(index){setTimeout(async function(){
            var ee = e[index];
            var setTime = 200, topSize = window.getComputedStyle(ee, null).top.replace("px", "");
            for (var j = 0; j < setTime; j++) {
                var opacity = Math.sin(j * Math.PI / setTime / 2);
                ee.style.opacity = opacity;
                var top = topSize * (Math.cos(j * Math.PI / setTime) + 1) / 2;
                ee.style.top = top + "px";
                await sleep(1);
            }
        }, i * 500);})(i);
    }
}