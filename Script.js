function SubmitForm(){

    const email = document.getElementById('Email').value
    const pass = document.getElementById("Password").value
    if(email === 'user@gmail.com' && pass === "password"){
        window.location.href = 'http://127.0.0.1:5500/pageTow.html'

    }
}