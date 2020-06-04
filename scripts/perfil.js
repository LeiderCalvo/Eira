
window.addEventListener('load', w => {
    var sn_items = document.querySelectorAll('.sn_item');
    var dashs = document.querySelectorAll('.dash');

    showDash(0);

    sn_items.forEach((sub, i) => {
        sub.onclick = e => showDash(i);
    });
    
    function showDash(i) {
        sn_items.forEach(s => s.classList.remove('selected'));
        sn_items[i].classList.add('selected');
        dashs.forEach(d => d.classList.remove('visible'));
        dashs[i].classList.add('visible');
    }
})