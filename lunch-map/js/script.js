document.addEventListener('DOMContentLoaded', function() {

    // --- ハンバーガーメニュー機能 ---
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('.main-nav');

    // ボタンとナビゲーションが存在する場合のみ、処理を実行
    if (menuButton && nav) {
        menuButton.addEventListener('click', function() {
            // 'is-open' というクラスを付けたり外したりする
            nav.classList.toggle('is-open');
        });
    }


    // --- トップページのスライダー機能（index.htmlでのみ動作） ---
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        const slides = sliderContainer.querySelectorAll('.slide');
        const navContainer = sliderContainer.querySelector('.slider-nav');
        let currentSlide = 0;
        let slideInterval;

        if (slides.length > 0) {
            slides.forEach((slide, index) => {
                const dot = document.createElement('button');
                dot.classList.add('nav-dot');
                if (index === 0) dot.classList.add('active');
                dot.dataset.slide = index;
                navContainer.appendChild(dot);
            });

            const navDots = navContainer.querySelectorAll('.nav-dot');

            function showSlide(index) {
                slides.forEach(s => s.classList.remove('active'));
                navDots.forEach(d => d.classList.remove('active'));
                slides[index].classList.add('active');
                navDots[index].classList.add('active');
                currentSlide = index;
            }

            function nextSlide() {
                showSlide((currentSlide + 1) % slides.length);
            }

            function startSlideShow() {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 5000);
            }

            navDots.forEach(dot => {
                dot.addEventListener('click', () => {
                    showSlide(parseInt(dot.dataset.slide));
                    startSlideShow();
                });
            });

            startSlideShow();
        }
    }
});
