var if_log = document.querySelector('#if_log');
window.addEventListener('storage', function(e) {  
    //console.log(e.key); console.log(e.oldValue); console.log(e.newValue); console.log(e.url); console.log(JSON.stringify(e.storageArea));

    if(e.key === 'log_display'){
        if_log.style.display = e.newValue;
    }
});

window.addEventListener('load', e => {
    document.querySelector('#init_sesion').addEventListener('click', e => {
        localStorage.setItem('log_display', 'block');
        if_log.style.display = 'block';
    });
})
