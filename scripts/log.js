//var urlParams = new URLSearchParams(window.location.search);
//var param = urlParams.get('kind');
cts = document.querySelectorAll('.container');

window.addEventListener('storage', function (e) {
    e.key === 'logtype' && setRigthForm(e.newValue);
});

window.addEventListener('load', e => {
    setRigthForm(localStorage.getItem('logtype'));
    x_closer.onclick = e => localStorage.setItem('log_display', 'none');

    document.querySelectorAll('.p_change').forEach( p => {
        p.onclick = e => setRigthForm(p.dataset.pos);
    });

    /////// init sesion
    btn_init_sesion.onclick = e => {
        Login({ email: is_email.value, password: is_pass.value }, false, (success, response) => {
            if (success) {
                is_email.value = '';
                is_pass.value = '';
                localStorage.setItem('log_display', 'none');
            }
        })
    }

    /////// reg User
    btn_reg_user.onclick = e => {
        Login({ email: regU_email.value, password: regU_pass.value, user: regU_name.value }, true, (success, response) => {
            if (success) {
                regU_email.value = '';
                regU_pass.value = '';
                regU_name.value = '';
                localStorage.setItem('log_display', 'none');
            }
        })
    }
});

function setRigthForm(param) {
    cts.forEach(e => e.style.display = 'none');
    cts[param ? parseInt(param) : 0].style.display = 'flex';
}

