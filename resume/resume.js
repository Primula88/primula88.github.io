const home = document.getElementById('homeClass');
const homebtn = document.getElementById('homeMenu');
const test = document.getElementById('testClass');
const testbtn = document.getElementById('testMenu');

homebtn.addEventListener('click', function handleClick(){
    if (home.style.display === 'none'){
        home.style.display = 'flex';
        test.style.display = 'none';
    } else {
        home.style.display = 'none';
    }
});

testbtn.addEventListener('click', function handleClick(){
    if (test.style.display === 'none'){
        test.style.display = 'flex';
        home.style.display = 'none';
    } else {
        test.style.display = 'none';
    }
});