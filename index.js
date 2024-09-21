const target = document.querySelector(".header");
const cardBanner = document.querySelector(".card_banner");
const cardBannerCloseButton = document.querySelector(".card_banner__close_button");

if (sessionStorage.getItem('isBannerShown') === 'true') cardBanner.classList.add('hidden');

function handleIntersection(entries) {
    if (entries[0].intersectionRatio === 0) {
        cardBanner.classList.remove('invisible');
        observer.unobserve(target);
    } 
}

const observer = new IntersectionObserver(handleIntersection, {threshold: 0});
observer.observe(target);

const clickListener = cardBannerCloseButton.addEventListener('click', () => {
    cardBanner.classList.add('hidden');
    sessionStorage.setItem('isBannerShown', true);
}, {once: true});