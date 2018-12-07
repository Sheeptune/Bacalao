var nav = document.querySelector("#navbars");
var navItems = nav.querySelectorAll(".nav-link");
var hamburgerButton = nav.querySelector("#hamburger-button");
console.log(navItems);
// We add an event listener for each nav-item
navItems.forEach(function(navItem) {
    navItem.addEventListener("click",activateItem);
});

function activateItem(event) {
    // we put in a variable the clicked item
    var navItem = event.target;
    // First we reset to "nav-item" each item's class
    navItems.forEach(function(navItem) {
        navItem.className = "nav-link";
    });
    // Then we add the "active" class to the one that got clicked
    navItem.className += " active";

    console.log(hamburgerButton);
    hamburgerButton.checked = false;
}
