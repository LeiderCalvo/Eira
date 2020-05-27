//var urlParams = new URLSearchParams(window.location.search);
//var param = urlParams.get('kind');
cts = document.querySelectorAll('.container');

window.addEventListener('storage', function(e) {  
    e.key === 'logtype' && setRigthForm(e.newValue);
});

window.addEventListener('load', e => {
    setRigthForm(localStorage.getItem('logtype'));
    x_closer.onclick = e => localStorage.setItem('log_display', 'none');
});

function setRigthForm(param) {
    cts.forEach(e => e.style.display = 'none');
    cts[param? parseInt(param) : 0].style.display = 'flex';
}

/////// init sesion
btn_init_sesion.onclick = e => {
    Login({email: is_email.value, password: is_pass.value}, false, (success, response) => {
        if(success){
            is_email.value = '';
            is_pass.value = '';
            localStorage.setItem('log_display', 'none');
        }
    })
}