function openMenu() {
    document.getElementById('sidebar').style.width = "350px";
}

function closeMenu() {
    document.getElementById('sidebar').style.width = "0px";
}
 const main = document.querySelector('main');
 const form = document.querySelector('.sign-up');
 const thanks = document.querySelector('.thanks');
 const sidebar = document.getElementById('sidebar');
function displayForm(){
 main.style.display = "none";
 form.style.display = "block";
}
function checkInputs() {
    const email = document.getElementById('email').value;
    const emailError = document.querySelector('.email-err');
    if (email === '') {
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
        form.style.display = "none";
        thanks.style.display = "block";
    }
}
function goBack(){
    thanks.style.display = "none";
    main.style.display = "block";
    sidebar.style.width = "0px";
}
