console.log("Hello, this my first dark theme integration.");

if(localStorage.getItem('theme')==="dark"){
    document.body.classList.toggle(localStorage.getItem('theme'));
}
const themeSwitcher = document.getElementById('theme__switcher');
    themeSwitcher.addEventListener('click', function(){
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList);
    })