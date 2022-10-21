const home = document.getElementById('homeCSS');
const homebtn = document.getElementById('homeMenu');

homebtn.addEventListener('click', function handleClick(){
    if (home.style.display === 'none'){
        home.style.display = 'flex';
    } else {
        home.style.display = 'none';
    }
});