function setTheme(theme) {
    if (theme === 'dark_theme') {
        document.body.style.color = 'white';
        document.getElementById("informations").style.color = 'white';
        document.body.style.backgroundColor = 'black'
        document.getElementById("theme_reader").innerHTML = "Current Theme: Dark"
    }
    else if (theme === 'light_theme') {
        document.body.style.color = 'black';
        document.getElementById("informations").style.color = 'black';
        document.body.style.backgroundColor = 'white'
        document.getElementById("theme_reader").innerHTML = "Current Theme: Light"
    }
    if (theme === 'default_theme') {
        document.body.style.color = 'black';
        document.getElementById("informations").style.color = 'black';
        document.body.style.backgroundColor = 'wheat'
        document.getElementById("theme_reader").innerHTML = "Current Theme: Default"
    }
}