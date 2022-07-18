/*
    TABLE OF CONTENTS

    1. Variables

    2. Screen Resize

    3. Animated titles

    4. Container and content

    5. Navigation arrows

    6. Background Video

    7. Third section

    8. Redirects
*/

/************
* VARIABLES *
*************/

// if a screen has less than this many pixels in width, it will considered to be a mobile screen instead of a desktop
const mobileScreenSize = 650;
let mobileMode;
let isMobileAnimationRunning;
let mobileImgSrc;

// the interval of time set in scrollRightFunction and scrollLeftFunction
let scrollTime = 1600;

// getting the html and body elements in an object and then taking the html and body element out of the object
let html = document.getElementsByTagName('html');
html = html[0];
let body = document.getElementsByTagName('body');
body = body[0];

// finds animated titles on the first screen
const animatedTitles = document.getElementById('animated-title-parent').children;
const navigationArrows = document.getElementsByClassName('arrow');

// finds container and content elements
const container = document.getElementById('js-container');
const content = document.getElementById('js-content');

// arrows for navigating
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// converts children from an object to an array
const animatedTitlesArray = Object.values(animatedTitles);
const navigationArrowsArray = Object.values(navigationArrows);

// finds the background and the options to pick from on second section
const backgroundVideo = document.getElementById('background-video');
const mobileBackground = document.getElementById('mobile_background');
let options = document.getElementsByClassName('options');
options = options[0].children;
let activeBackgroundAndOption = 0;
let mobileBackgroundImageTime = 5000;
let mobileWhitescreenTime = 2600;

// card on third section
let card = document.getElementsByClassName('card');
card = card[0];

// shows what section the user is on
let section = 0;
let scrollPosition = html.scrollLeft;
let endScroll;

// redirect buttons
const hackingButton = document.getElementById('hacking-button');
const webDevelopmentButton = document.getElementById('web-development-button');
const roboticsButton = document.getElementById('robotics-button');
const machineLearning = document.getElementById('machine-learning-button');
const codingButton = document.getElementById('coding-button');

/***************
* SCREN RESIZE *
****************/

window.addEventListener('resize', onScreenResize);

function onScreenResize() {
    let oldScreenMode = mobileMode;
    goToSection();
    checkIfMoblieScreen();

    // checks to see if the screen is in mobile mode, and if it is, but didnt use to be, it runs the function inside
    let hasChangedToMobileMode = (oldScreenMode !== mobileMode && mobileMode == true);
    if(hasChangedToMobileMode) {
        startSecondSectionAnimation();
    }

}

// positions user to the beggining of the Section he is on after the resize
function goToSection() {

    switch(section) {
        case 1:
            scrollPosition = window.innerWidth*2;
            html.scrollLeft = scrollPosition;
            break;
        case 2:
            scrollPosition = window.innerWidth*4;
            html.scrollLeft = scrollPosition;
            break;
        default:
            scrollPosition = 0;
            html.scrollLeft = scrollPosition;
            break;
    }
}

// checks to see if screen-size is small enough to be considered mobile
function checkIfMoblieScreen() {
    if(window.innerWidth < mobileScreenSize){
        mobileMode = true;
    } else {
        mobileMode = false;
    }
}

checkIfMoblieScreen();

/******************
* ANIMATED TITLES *
*******************/

animatedTitlesArray.map(addAnimationEndListner);

function addAnimationEndListner(element) {
    
    element.addEventListener('animationend', function(){element.remove()});
    element.addEventListener('webkitAnimationEnd', function(){element.remove()});

}

/*************************
 * CONTAINER AND CONTENT *
 *************************/

// calls addDoneEventListner function
addDoneEventListener(container);
addDoneEventListener(content);

// adds event listner that listens to when the animation is done and then adds 'done' class to the elements with the listener
// and shows navigation arrows for the first time
function addDoneEventListener(element) {

    element.addEventListener('animationend', function(){element.classList.add('done'); showArrows();});
    element.addEventListener('webkitAnimationEnd', function(){element.classList.add('done'); showArrows();});

}

function changeSection(move) {
    if (move == 'right') {
    section += 1;
    }
    
    if(move == 'left') {
        section -= 1;
    }

}

/****************************
* TODO DONT REPEAT YOURSELF *
*****************************/

// calculates scrollAmmount and scrollInterval and scrolls the html element to the right
function scrollRightFunction() {

    let scrollAmmount = (window.innerWidth/1920) * 20;

        endScroll = checkEndScroll();

    let scrollInterval = scrollTime / (window.innerWidth*2) * scrollAmmount;

    let htmlScroll = setInterval(() => {
        if(scrollPosition < endScroll) {
            scrollPosition += scrollAmmount;
            html.scrollLeft = scrollPosition;
        } else {
            clearInterval(htmlScroll);
            html.scrollLeft = endScroll;
            if(!mobileMode) {
                showArrowsAfterHide();
            }
            startSecondSectionAnimation();
        }

    }, scrollInterval);
}
// TODO: staviti u scrollFunction koji prima direction, i oreko if, elseif, else odluciti koji scroll position ide
// calculates scrollAmmount and scrollInterval and scrolls the html element to the left
function scrollLeftFunction() {

    let scrollAmmount = (window.innerWidth/1920) * 20;

        endScroll = checkEndScroll();

    let scrollInterval = scrollTime / (window.innerWidth*2) * scrollAmmount;

    let htmlScroll = setInterval(() => {
        if(scrollPosition  > endScroll) {
            scrollPosition -= scrollAmmount;
            html.scrollLeft = scrollPosition;
        } else {
            clearInterval(htmlScroll);
            html.scrollLeft = endScroll;
            showArrowsAfterHide();
        }

    }, scrollInterval);
}

// checks to see how many pixels html.scrollLeft property should have depending on the section
function checkEndScroll() {
    if(section == 0) {
        return 0;
    } else if (section == 1) {
        return window.innerWidth*2;
    } else if (section == 2) {
        return window.innerWidth*4
    }
}

// removes body classes from body element
function removeBodySectionClass() {
    for (let index = 1; index < 4; index++) {
        let bodyClass = 'section' + index;
        body.classList.remove(bodyClass);
    }
}

// if arrow is active and clicked moves body element to the right
function moveLeft() {
    if(!leftArrow.classList.contains('inactive')){
        hideArrows();
        changeSection('left');
        checkSection();
        scrollLeftFunction();
    }
}


// if arrow is active and clicked moves body element to the left
function moveRight() {
    if(!rightArrow.classList.contains('inactive') && !rightArrow.classList.contains('hide')){   
        hideArrows();
        changeSection('right');
        checkSection();
        scrollRightFunction();
    }
}

// sets one of the options active and makes sure all other options are not active
function setNewActiveOption() {
    for(i = 0; i < options.length; i++) {
        options[i].classList.remove('active');
    }

    options[activeBackgroundAndOption].classList.add('active');
}

// switches to next image in mobile and next video on desktop
function changeMobileActiveBackgroundAndOption() {
    if(mobileMode) {
        activeBackgroundAndOption = activeBackgroundAndOption + 1;

        if(activeBackgroundAndOption > 4) {activeBackgroundAndOption = 0;}
    }
}

/****************
* THIRD SECTION *
*****************/

 card.addEventListener('click', toggleActiveClass);

 function toggleActiveClass(){
     card.classList.toggle('active');
 }

 /*************
 * REDIRECTS *
 *************/

// add event listeners to all options on second section
for (let i = 0; i < options.length; i++) {

    // on mouseenter store old url in a variable, and check what the new url should be
    options[i].addEventListener('click', function(){
        let url;

        // checks to see which part of the site
        switch(this.textContent){
            case 'Hacking':
                url = './learnings/hacking.php';
                break;
            case 'Web Development':
                url = './learnings/web_development.php';
                break;
            case 'Robotics':
                url = './learnings/robotics.php';
                break;
            case 'Machine Learning':
                url = './learnings/machine_learning.php';
                break;
            default:
                url = './learnings/coding.php';
        }

        // relocates the user
        relocateUser(url);
    });
}

// relocates the user to the new url
function relocateUser(url){
    window.location.href = url;
}

// starts animation for switching images on second section
function startSecondSectionAnimation() {

    if(!isMobileAnimationRunning && mobileMode) {

        activeBackgroundAndOption = 1;
        setTimeout(switchMobileBackground, mobileWhitescreenTime);
        isMobileAnimationRunning = true;

    }
}

// chooses url to switch to in mobile background
function switchMobileBackground() {

    switch(activeBackgroundAndOption) {
        case 0:
            mobileImgSrc = 'assets/images/metasploit.png';
            break;
        case 1:
            mobileImgSrc = 'assets/images/web_development.jpeg';
            break;
        case 2:
            mobileImgSrc = 'assets/images/robotics.jpeg';
            break;
        case 3:
            mobileImgSrc = 'assets/images/machine_learning.jpg';
            break;
        case 4:
            mobileImgSrc = 'assets/images/coding.png';
            break;

    }

    switchBackgroundImage(mobileImgSrc);

}

// animates switching between mobile backgrounds
function switchBackgroundImage(url) {
    
    mobileBackground.classList.remove('active');

    setTimeout(changeMobileBackgroundImage, mobileWhitescreenTime, url);

}

// switches mobile background
function changeMobileBackgroundImage(url) {
    
    mobileBackground.setAttribute('src', url);
    mobileBackground.classList.add('active');
    
    if(mobileMode) {
        setNewActiveOption();
    }

    changeMobileActiveBackgroundAndOption();
    setTimeout(switchMobileBackground, mobileBackgroundImageTime);
    
}

/*********************
 * NAVIGATION ARROWS *
 *********************/

 function showArrows() {
    navigationArrowsArray.map(animationEndListener);
    navigationArrowsArray.map(showArrowsClasses);
}

function showArrowsClasses(element) {
    element.classList.remove('hide');
    element.classList.add('show');
}

function hideArrowsClasses(element) {
    element.classList.remove('show');
    element.classList.add('hide');
}

function animationEndListener(element) {
    element.addEventListener('animationend', enableArrowClick);
    element.addEventListener('webkitAnimationEnd', enableArrowClick);
}

function removeAnimationEndListener(element) {
    element.removeEventListener('animationend', enableArrowClick);
    element.removeEventListener('webkitAnimationEnd', enableArrowClick);
}

function enableArrowClick() {
    navigationArrowsArray.map(removeAnimationEndListener);
    leftArrow.addEventListener('click', moveLeft);
    rightArrow.addEventListener('click', moveRight);
}

function disableArrowClick() {
    leftArrow.removeEventListener('click', moveLeft);
    rightArrow.removeEventListener('click', moveRight);
}

function hideArrows() {
    disableArrowClick();
    navigationArrowsArray.map((element) => hideArrowsClasses(element));
}

function showArrowsAfterHide() {
    navigationArrowsArray.map(function (element) {showArrowsClasses(element), animationEndListener(element)});
}

// makes arrows active or inactive depending on the section that the user is on
function checkSection() {
    if(section == 0) {
        addInactiveClass(leftArrow);
    }
    else if(section == 1){
        removeInactiveClass(leftArrow);
        removeInactiveClass(rightArrow);
    } else {
        addInactiveClass(rightArrow);
    }
}

// adds inactive class to navigation arrows
function addInactiveClass(element){
    element.classList.add('inactive');
}

// removes inactive class from navigation arrows
function removeInactiveClass(element){
    element.classList.remove('inactive');
}

/********************
 * BACKGROUND VIDEO *
 ********************/

// add event listeners to all options on second section
for (let i = 0; i < options.length; i++) {

    // on mouseenter store old url in a variable, and check what the new url should be
    options[i].addEventListener('mouseenter', function(){
        let url = backgroundVideo.getAttribute('src');
        let new_url;

        switch(this.textContent){
            case 'Hacking':
                activeBackgroundAndOption = 0;
                new_url = 'assets/videos/ethical_hacking.mp4';
                break;
            case 'Web Development':
                activeBackgroundAndOption = 1
                new_url = 'assets/videos/web_development.mp4';
                break;
            case 'Robotics':
                activeBackgroundAndOption = 2;
                new_url = 'assets/videos/robotics.mp4';
                break;
            case 'Machine Learning':
                activeBackgroundAndOption = 3;
                new_url = 'assets/videos/machine_learning.mp4';
                break;
            default:
                activeBackgroundAndOption = 4;
                new_url = 'assets/videos/coding.mp4';
        }

        // if old and new url arnt the same, change the src property of the video
        if(new_url !== url) {
            backgroundVideo.setAttribute('src', new_url);
            setNewActiveOption();
        }
    });
}