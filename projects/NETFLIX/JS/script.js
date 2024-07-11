// grab all the tab-item (the ICONS) and the tab-content-item from the DOM
const tabItem = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');
// grab the tab icons from the DOM
var Tabs = document.getElementsByClassName('containera');
var Btn = document.getElementsByClassName('omar');


// for loop throw the icons , then we declare a function which is listen by click ,
// the function grab the class active and replace it with none when listen to a click 
//then add the class active to the next element in for loop.
for (var i = 0; i < Btn.length; i++) {
    Btn[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active', '');
        this.classList.add('active');

    });
}
// Select tab content item , changing the border
function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');
    // grab the content item from th DOM 
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //add show class
    tabContentItem.classList.add('show');
}
function removeBorder() {
    tabItem.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItem.forEach(item => item.classList.remove('show'));
}
//Listen for tabICON click
// Event listner for where we click on! and because tab-item is like an array (more than one item)
// we gonna loop throw it
tabItem.forEach(item => item.addEventListener('click', selectItem)); //(loop throw the tab-item) listen for click and when it click call the function select item
