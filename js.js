const openBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.modal-container');
const closeM = document.querySelector('i');

function hideMe() {
    closeBtn.style.display = 'none';
}

closeM.addEventListener('click', hideMe);

function openMe() {
    closeBtn.style.display = 'block';
}

openBtn.addEventListener('click', openMe);

function windowCloseMe(e) {

    const target = e.target;
    
    if ( target === closeBtn ) {
        closeBtn.style.display = 'none';
    };

}

window.addEventListener('click', windowCloseMe);

