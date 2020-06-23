const volsDB = [{
    date: '12/03/2020',
    name: 'Daniel Arboleda',
    meditions: 20
},
{
    date: '20/03/2020',
    name: 'Alvaro vasquez',
    meditions: 17
},
{
    date: '07/04/2020',
    name: 'Lucia Ramirez',
    meditions: 15
},
{
    date: '22/06/2020',
    name: 'Andrea Torres',
    meditions: 15
},
{
    date: '13/05/2020',
    name: 'Pablo Garzon',
    meditions: 10
},
{
    date: '06/04/2020',
    name: 'Lina Bustamante',
    meditions: 9
}]

if (localStorage.getItem('isCurrentUser') !== 'true') {
    window.location.href = '/';
}

window.addEventListener('load', w => {
    var sn_items = document.querySelectorAll('.sn_item');
    var dashs = document.querySelectorAll('.dash');
    showDash(1);
    
    sn_items.forEach((sub, i) => {
        sub.onclick = e => showDash(i);
    });

    let user = JSON.parse(localStorage.getItem('user'));
    user_id.innerText = '@' + user.id;
    user_sector.innerText = user.sector + ' - ' + '30 voluntarios';
    document.querySelectorAll('.user_name').forEach(e => {
        e.innerText = user.user;
    });

    function showDash(i) {
        sn_items.forEach(s => s.classList.remove('selected'));
        sn_items[i].classList.add('selected');
        dashs.forEach(d => d.classList.remove('visible'));
        dashs[i].classList.add('visible');
    }

    let cont =  document.querySelector('.comp_vol');
    ///////finder
    finder.oninput = e => {
        let val = e.target.value.toLowerCase();
        cont.innerHTML = '';
        let arr = [...volsDB];
        arr = arr.filter(vol => {
            return vol.name.toLowerCase().substring(0, val.length) === val
        });

        arr.forEach(vol => createVol(vol));
    }

    ///////// voluntarios
    volsDB.forEach(vol => createVol(vol));

    function createVol(vol) {
        let sect = document.createElement('section');
        sect.classList.add('row');
        sect.classList.add('cont');

        sect.innerHTML = `<img src="images/community/perf_min_${vol.name.replace(' ', '').toLowerCase()}.svg" alt="">
        <div>
            <h4>${vol.name}</h4>
            <h6>${vol.meditions} medicones</h6>
            <p>Vinculado al proyecto desde ${vol.date}</p>
            <button>Ver más</button>
        </div>`;

        cont.appendChild(sect);

    }

});