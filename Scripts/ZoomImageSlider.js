
"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "Images/ImageSlider/IMG_0" + photoOrderArray[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
    document.getElementsByTagName("img")[0].src = figFilename;
    createEventListener();
}

/* close window */
function closeWin() {
    window.close();
}
function saveImage() {
    var alertMsg = document.getElementById('alertMsg');
    var msg = document.getElementById('msg');
    if (window.opener) {
        if (window.opener.checkFavoritePhotoCnt()) {
            msg.innerHTML = 'You can not add more than 5 Photos. Please remove at least one of your photo.';
            alertMsg.style.display = 'block';
            window.setTimeout(disableMsg, 3000);
        } else {
            window.opener.saveImage();
            msg.innerHTML = 'The photo was added to your favorite list.';
            alertMsg.style.display = 'block';
            window.setTimeout(disableMsg, 3000);
        }
    } else {
        msg.innerHTML = 'Opener window does not exist.';
        alertMsg.style.display = 'block';
        window.setTimeout(disableMsg, 2000);
    }
}

function disableMsg() {
    var alertMsg = document.getElementById('alertMsg');

    var opacity = 1;
    var timer = setInterval(function () {
        if (opacity <= 0.1) {
            clearInterval(timer);
            alertMsg.style.display = 'none';
        }
        alertMsg.style.opacity = opacity;
        alertMsg.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
        opacity -= opacity * 0.1;
    }, 50);
}


function createEventListener() {
    var saveFavoriteDiv = document.getElementById("MyfavoriteBtn");

    if (saveFavoriteDiv.addEventListener) {
        saveFavoriteDiv.addEventListener("click", saveImage, false);
    } else if (saveFavoriteDiv.attachEvent) {
        saveFavoriteDiv.attachEvent("onclick", saveImage);
    }

    var closeWindowDiv = document.getElementById("closeBtn");
    if (closeWindowDiv.addEventListener) {
        closeWindowDiv.addEventListener("click", closeWin, false);
    } else if (closeWindowDiv.attachEvent) {
        closeWindowDiv.attachEvent("onclick", closeWin);
    }

    var image = document.getElementById('image');
    if (image.addEventListener) {
        image.addEventListener("click", closeWin, false);
    } else if (saveFavoriteDiv.attachEvent) {
        image.attachEvent("onclick", closeWin);
    }
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;