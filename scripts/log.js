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