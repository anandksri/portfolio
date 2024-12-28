// js/script.js
function toggleMenu() {
    const menuList = document.getElementById('menuList');
    if (menuList.style.height === '0px' || menuList.style.height === '') {
        menuList.style.height = '250px'; // Adjust as needed
        menuList.style.visibility = 'visible';
    } else {
        menuList.style.height = '0';
        menuList.style.visibility = 'hidden';
    }
}
