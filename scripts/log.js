//var urlParams = new URLSearchParams(window.location.search);
//var param = urlParams.get('kind');

var param = localStorage.getItem('logging');

window.addEventListener('load', e => {
    cts = document.querySelectorAll('.container');
    cts[param? parseInt(param) : 0].style.display = 'flex';

    x_closer.onclick = e => localStorage.setItem('log_display', 'none');

});
