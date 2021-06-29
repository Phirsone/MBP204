const bolumler = document.querySelectorAll('.icerik');
const menuLinks = document.querySelectorAll('.menu-link');

const sectionObserverOptions = {
    root: null,
    threshold: .6, // 0 ile 1
    rootMargin: "0px"
};
const sectionObserver = new IntersectionObserver( /* fonsiyon, options */ (girdiler => {
    girdiler.forEach(girdi => {
        menuLinks[girdi.target.dataset.position].classList.toggle('aktif', girdi.isIntersecting);
    });
}), sectionObserverOptions);

bolumler.forEach(bolum => {
    sectionObserver.observe(bolum);
});
