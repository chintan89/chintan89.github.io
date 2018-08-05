
"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */

var photoOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var autoAdvance = setInterval(rightAdvance, 5000);
var figureCount = 9;
var favoriteImages, PhotoNum = 9;
/* add src values to img elements based on order specified in photoOrder array */

function populateFigures() {
    var filename;
    var currentFig;
    if (figureCount === 9) {
        for (var i = 1; i < 8; i++) {
            filename = "Images/ImageSlider/IMG_0" + photoOrder[i] + "sm.jpg";
            currentFig = document.getElementsByTagName("img")[i - 1];
            currentFig.src = filename;
        }
    } else {
        for (var i = 0; i < 9; i++) {
            filename = "Images/ImageSlider/IMG_0" + photoOrder[i] + "sm.jpg";
            currentFig = document.getElementsByTagName("img")[i];
            currentFig.src = filename;
        }
    }
}
/* stop automatic image switching and call rightAdvance() function */
function rightArrow() {
    clearInterval(autoAdvance);
    rightAdvance();
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightAdvance() {
    for (var i = 0; i < 9; i++) {
        if ((photoOrder[i] + 1) === 10) {
            photoOrder[i] = 1;
        } else {
            photoOrder[i] += 1;
        }
        populateFigures();
    }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
    clearInterval(autoAdvance);
    for (var i = 0; i < 9; i++) {
        if ((photoOrder[i] - 1) === 0) {
            photoOrder[i] = 9;
        } else {
            photoOrder[i] -= 1;
        }
        populateFigures();
    }
}

/* switch to 9-image layout */
function previewNine() {
    var articleEl = document.getElementsByTagName("article")[0];
    // create figure and img elements for fifth image
    var lastFigure = document.createElement("figure");
    lastFigure.id = "fig9";
    lastFigure.style.zIndex = "-26";
    lastFigure.style.position = "absolute";
    lastFigure.style.right = "84px";
    lastFigure.style.top = "90px";
    var lastImage = document.createElement("img");
    lastImage.width = "240";
    lastImage.height = "90";


    lastFigure.appendChild(lastImage);
    //   articleEl.appendChild(lastFigure);
    articleEl.insertBefore(lastFigure, document.getElementById("rightarrow"));

    //clone figure element for fifth image and edit to be first image
    var firstFigure = lastFigure.cloneNode(true);
    firstFigure.id = "fig1";
    firstFigure.style.right = "";
    firstFigure.style.left = "91px";

    articleEl.insertBefore(firstFigure, document.getElementById("fig2"));

    figureCount = 9;
    //change button to hide extra images
    var numberButton = document.querySelector("#fiveButton p");
    numberButton.innerHTML = "Show fewer images";
    if (numberButton.addEventListener) {
        numberButton.removeEventListener("click", previewNine, false);
        numberButton.addEventListener("click", previewSeven, false);
    } else if (numberButton.attachEvent) {
        numberButton.detachEvent("onclick", previewNine);
        numberButton.attachEvent("onclick", previewSeven);
    }

    // add appropriate src values to two new img elements
    document.getElementsByTagName("img")[0].src = "Images/ImageSlider/IMG_0" + photoOrder[0] + "sm.jpg";
    document.getElementsByTagName("img")[9].src = "Images/ImageSlider/IMG_0" + photoOrder[4] + "sm.jpg";
}

/* switch to 7-image layout */
function previewSeven() {
    var articleEl = document.getElementsByTagName("article")[0];
    var numberButton = document.querySelector("#fiveButton p");
    figureCount = 7;
    articleEl.removeChild(document.getElementById("fig1"));
    articleEl.removeChild(document.getElementById("fig9"));
    numberButton.innerHTML = "Show more images";
    if (numberButton.addEventListener) {
        numberButton.removeEventListener("click", previewSeven, false);
        numberButton.addEventListener("click", previewNine, false);
    } else if (numberButton.attachEvent) {
        numberButton.detachEvent("onclick", previewSeven);
        numberButton.attachEvent("onclick", previewNine);
    }
}

/* open center figure in separate window */
function zoomFig() {
    var propertyWidth = 960;
    var propertyHeight = 600;
    var winLeft = ((screen.width - propertyWidth) / 2);
    var winTop = ((screen.height - propertyHeight) / 2);
    var winOptions = "width=960,height=600";
    winOptions += ",left=" + winLeft;
    winOptions += ",top=" + winTop;
    var zoomWindow = window.open("ZoomImageSlider.html", "zoomwin", winOptions);
    zoomWindow.focus();
}


/* create event listeners for left arrow, right arrow, and center figure element */
function createEventListeners() {
    var leftarrow = document.getElementById("leftarrow");
    if (leftarrow.addEventListener) {
        leftarrow.addEventListener("click", leftArrow, false);
    } else if (leftarrow.attachEvent) {
        leftarrow.attachEvent("onclick", leftArrow);
    }

    var rightarrow = document.getElementById("rightarrow");
    if (rightarrow.addEventListener) {
        rightarrow.addEventListener("click", rightArrow, false);
    } else if (rightarrow.attachEvent) {
        rightarrow.attachEvent("onclick", rightArrow);
    }

    var mainFig = document.getElementsByTagName("img")[1];
    if (mainFig.addEventListener) {
        mainFig.addEventListener("click", zoomFig, false);
    } else if (mainFig.attachEvent) {
        mainFig.attachEvent("onclick", zoomFig);
    }

    var showAllButton = document.querySelector("#fiveButton p");
    if (showAllButton.addEventListener) {
        showAllButton.addEventListener("click", previewNine, false);
    } else if (showAllButton.attachEvent) {
        showAllButton.attachEvent("onclick", previewNine);
    }
    myCustomInitializer();
}

function myCustomInitializer() {


    document.getElementById('fig3').addEventListener('mousedown', savePosition, false);
    document.getElementById('fig3').addEventListener('drag', checkDrag, false);

    var MyFavoritePics = document.getElementById('MyFavoritePics');
    addEvent(MyFavoritePics, 'mouseover', showRemoveBtns);
    addEvent(MyFavoritePics, 'mouseout', hideRemoveBtns);
    for (var child in MyFavoritePics.childNodes) {
        addEvent(child, 'mouseover', showRemoveBtns);
        addEvent(child, 'mouseout', hideRemoveBtns);
    }
}
function addEvent(obj, behavior, functionName) {
    if (obj.addEventListener) eval("obj.addEventListener('" + behavior + "', " + functionName + ", false);");
    if (obj.attachEvent) eval("obj.attachEvent('" + behavior + "', " + functionName + ", false);");
}


function showRemoveBtns() {
    manupulateRemoveBtns('block');
}

function hideRemoveBtns() {
    manupulateRemoveBtns('none');
}

function manupulateRemoveBtns(value) {
    var inputs = document.querySelectorAll('#MyFavoritePics input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.display = value;
    }
}



var beforePics = 0;
var direction = '';
function savePosition(event) {
    beforePics = event.clientX;
}

function checkDrag(event) {
    if (event.clientX > beforePics)
        direction = 'right';
    else if (event.clientX < beforePics)
        direction = 'left';

    if (event.clientX > beforePics + 100 && direction == 'right') {
        leftArrow();
        beforePics = event.clientX;
    } else if (event.clientX != 0 && event.clientX < beforePics - 100 && direction == 'left') {
        rightArrow();
        beforePics = event.clientX;
    }
}

/* create event listeners and populate image elements */
function setUpPage() {
    setVariables();
    createEventListeners();
    populateFigures();
}

function setVariables() {
    photoOrder = new Array(PhotoNum);
    for (var i = 0; i < PhotoNum; i++) photoOrder[i] = i;

    autoAdvance = setInterval(rightAdvance, 5000);
    figureCount = 9;
    favoriteImages = new Array(photoOrder.length);

    for (var i = 0; i < favoriteImages.length; i++) favoriteImages[i] = false;
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}

/**
 * called by zoom page
 * @returns
 */
function saveImage() {
    favoriteImages[photoOrder[2] - 1] = true;
    drawFavorite();
}

function checkFavoritePhotoCnt() {
    var PhotoNum = 0;
    for (var i = 0; i < favoriteImages.length; i++) {
        if (favoriteImages[i]) PhotoNum++;
    }
    if (PhotoNum == 5) return true;
    else return false;
}

function drawFavorite() {
    var MyFavoritePics = document.getElementById('MyFavoritePics');
    var favoriateHtml = '<h3>My Favorite Photos</h3><ul>';
    for (var i = 0; i < favoriteImages.length; i++) {
        if (favoriteImages[i]) {
            favoriateHtml += "<li><img src='Images/ImageSlider/IMG_0" + (i + 1) + "sm.jpg" + "'><br>";
            favoriateHtml += "<input type='button' style='font-size:8px;position:relative;left:50px;display:none;' onclick='removeFavorite(" + i + ");' value='Remove'></input></li>";
        }
    }

    favoriateHtml += '</ul>';
    console.log(favoriateHtml);
    MyFavoritePics.innerHTML = favoriateHtml;

    return true;
}

function removeFavorite(index) {
    favoriteImages[index] = false;
    drawFavorite();
}