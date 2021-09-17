const menuItems = document.getElementById('menu-items');
menuItems.style.maxHeight = '0px';

const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', () => {
  console.log('menu toggled!');
  if (menuItems.style.maxHeight == '0px') {
    menuItems.style.maxHeight = '200px';
  } else if (menuItems.style.maxHeight === '200px') {
    menuItems.style.maxHeight = '0px';
  }
});
