
// Меню
const IMG_URL = `https://image.tmdb.org/t/p/w185_and_h278_bestv2`;
const API_KEY = 24%5 + `e61d32c7f8095da04f6550d8cc3dd9` + 24%5;
const leftMenu = document.querySelector('.left-menu'),
     hamburger = document.querySelector('.hamburger'),
     tvShowsList = document.querySelector('.tv-shows__list'),
     modal = document.querySelector('.modal'),
     tvShows = document.querySelector('.tv-shows'),
     tvCardImg = document.querySelector('.tv-card__img'),
     modalTitle = document.querySelector('.modal__title'),
     genresList = document.querySelector('.genres-list'),
     rating = document.querySelector('.rating'),
     descruption = document.querySelector('.description'),
     modalLink = document.querySelector('.modal__link');

const loading = document.createElement('div');
loading.className = 'loading';

// открытие / закрытие меню 

hamburger.addEventListener('click', () => {
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});

document.addEventListener('click', event => {
   const target = event.target;
    if (!target.closest('.left-menu')) {
        leftMenu.classList.remove('openMenu');
        hamburger.classList.remove('open');
    }
});

leftMenu.addEventListener('click', event => {
    const target = event.target;
    const dropdown = target.closest('.dropdown');
});


//открытие модального окна

tvShowsList.addEventListener('click', event => {
    const target = event.target;
    const card = target.closest('.tv-card');

    if(card) {
        document.body.style.overflow = 'hidden';
        modal.classList.remove('hide');
    }
});


// Вывод карточек

const DBService = class  {
    getData = async (url) => {
        const res = await fetch(url);
        if (res.ok) {
            return res.json();
        } else {
            throw new Error(`Не удалось получить данные по адресу ${url}`)
        }
    }
    getTestData = async () => {
        return  await this.getData(`test.json`)
    }
}
new DBService().getTestData().then((renderCard));


// Скопированное из VK Сергей Кочетков

vShowsList.addEventListener('click', event => { 
    const target = event.target; 
    const card = target.closest('.tv-card'); 
    if(card) { 
    document.body.style.overflow = 'hidden'; 
    modal.classList.remove('hide'); 
    } 
    console.log(target); 
    });
  // End of скопированное из VK  
const renderCard = response => {
    console.log(response);
    tvShowsList.textContent = '';

    response.result.forEach(item => {
        const card = document.createElement('li');
        card.className = 'tv-shopw__item';
        card.innerHTML = `
        <a href="#" class="tv-card">
        <span class="tv-card__vote">7.1</span>
        <img class="tv-card__img"
             src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/2lsuke69bRdyB1sxtKmavtwkc35.jpg"
             data-backdrop="https://image.tmdb.org/t/p/w185_and_h278_bestv2/pxkeqSHfTkefKz0y5naAX1u9cDw.jpg"
             alt="Звёздные войны. Войны клонов">
        <h4 class="tv-card__head">Звёздные войны. Войны клонов</h4>
    </a>
    `;
        tvShowsList.append(card);
    });
};


