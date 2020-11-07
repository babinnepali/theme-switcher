//storing the latest [theme value] in the Local Storage
if(localStorage.getItem('theme')==="dark"){
    document.body.classList.toggle(localStorage.getItem('theme'));
}


const themeSwitcher = document.getElementById('toggle__fill');
    themeSwitcher.addEventListener('click', function(){
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList);
    })