const menu = document.querySelector('.navbar');
const btnOpenMenu = document.querySelector('.menu-icon');
const btnCloseMenu = document.querySelector('.arrow-back');
const tech = document.querySelector('#technology');
const openBoxVideo = document.querySelectorAll('.btn-open-box-video');
const a = document.getElementsByClassName('item');

btnOpenMenu.addEventListener('click', () => {
    menu.classList.add('active');
});

btnCloseMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', () => {
        menu.classList.remove('active');
        if(a[i].classList.contains('personal')) openPersonal();
    });
}

for (let i =0; i < openBoxVideo.length; i++) {
    openBoxVideo[i].addEventListener('click', event => {
        insertBoxData(event);
    });
}

function insertBoxData(event) {
    const e = event.target;
    if(e.classList.contains('video')) {
        openVideo();
    } else if (e.classList.contains('personal')) {
        openPersonal();
    }

}

function openVideo() {
    tech.innerHTML += `
    <div class="wrapper-resume off" style="backdrop-filter: blur(5px);">
        <div class="container-resume">
            <span class="close"><a>X</a></span>
            <div class="content-container">
                <p>No vídeo abaixo, vou te explicar o que me motivou a estudar Desenvolvimento Web, por que escolhi HTML, CSS, JS, Git, TS e Angular e quais as próximas tecnologias que pretendo estudar.</p>
                <video autoplay controls>
                    <source src="./assets/video/tecnologias.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>`;

    animationBox();
}

function openPersonal() {
    tech.innerHTML += `
    <div class="wrapper-resume off" style="backdrop-filter: blur(5px);">
        <div class="container-resume">
            <span class="close"><a>X</a></span>
            <div class="content-container">
                <h1>Conheça meus gostos pessoais</h1>

                <div class="personal-tastes">
                    <div class="personal-taste">
                        <img src="./assets/img/dog.png" alt="Cachorro">
                        <p>Cuidar do cachorro</p>
                    </div>
    
                    <div class="personal-taste">
                        <img src="./assets/img/plant.png" alt="Natureza">
                        <p>Cuidar da natureza</p>
                    </div>
    
                    <div class="personal-taste">
                        <img src="./assets/img/book.png" alt="Clube do livro">
                        <p>Participar do clube do livro</p>
                    </div>

                    <div class="personal-taste">
                        <img src="./assets/img/jesus.png" alt="Jesus">
                        <p>Ir à igreja</p>
                    </div>
                    
                    <div class="personal-taste">
                        <img src="./assets/img/friendship.png" alt="Amigos e família">
                        <p>Visitar família e amigos</p>
                    </div>
    
                    <div class="personal-taste">
                        <img src="./assets/img/watching-a-movie.png" alt="Assistir">
                        <p>Assistir séries e filmes</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    animationBox();
}

function animationBox() {
    const wrapperResume = document.querySelector('.wrapper-resume');
    const btnCloseResume = document.querySelector('.close');

    setTimeout(() => {
        openBoxAnim();
    }, 100);

    btnCloseResume.addEventListener('click', () => {
        closeBoxAnim();
        setTimeout(() => {
            tech.removeChild(wrapperResume);
        }, 600);
    });

    function openBoxAnim() {
        wrapperResume.classList.remove('off');
        wrapperResume.classList.add('on');
    };
    
    
    function closeBoxAnim() {
        wrapperResume.classList.remove('on');
        wrapperResume.classList.add('off');
    };
}