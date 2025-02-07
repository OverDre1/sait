'use strict'

/*****************************
 * 
 *  SMOOTH SCROLL TO ANCHOR
 * 
 */

 document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.top-offset').offsetHeight;
        const topOffset = 0; // нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const popUp = document.getElementById("popUP");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Останавливаем стандартную отправку формы

        popUp.style.display = "flex"; // Показываем попап
        setTimeout(() => {
            popUp.classList.add("show"); // Запускаем анимацию
        }, 10);
    });

    popUp.addEventListener("click", () => {
        popUp.classList.remove("show"); // Скрываем анимацию
        setTimeout(() => {
            popUp.style.display = "none"; // Полностью скрываем через 300ms
        }, 300);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date().getTime();
        const future = now + (3 * 24 * 60 * 60 * 1000); 
        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const timeLeft = future - currentTime;

            if (timeLeft <= 0) {
                clearInterval(interval);
                countdownElement.innerHTML = "Акция завершена!";
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
        }, 1000);
    }

    updateCountdown();
});