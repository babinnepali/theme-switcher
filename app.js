console.log("Hello, this my first dark theme integration.");

const themeSwitcher = document.getElementById('theme__switcher');
    themeSwitcher.addEventListener('click', function(){
        document.body.classList.toggle('dark');
    })