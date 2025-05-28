document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const sliderContainer = document.querySelector('.slider-container');
    const prevButton = document.querySelector('.slider-control.prev');
    const nextButton = document.querySelector('.slider-control.next');
    const productItems = document.querySelectorAll('.product-item');

    let itemWidth = productItems[0].offsetWidth + 30; // Ширина элемента + margin
    let currentPosition = 0;
    let maxPosition = -(itemWidth * (productItems.length - 1)); // Максимальная позиция

    // Функция для обновления позиции слайдера
    function updateSliderPosition() {
        slider.style.transform = `translateX(${currentPosition}px)`;
    }

    // Обработчик для кнопки "Назад"
    prevButton.addEventListener('click', function() {
        currentPosition += itemWidth;
        if (currentPosition > 0) {
            currentPosition = 0;
        }
        updateSliderPosition();
    });

    // Обработчик для кнопки "Вперед"
    nextButton.addEventListener('click', function() {
        currentPosition -= itemWidth;
        if (currentPosition < maxPosition) {
            currentPosition = maxPosition;
        }
        updateSliderPosition();
    });

    // Адаптивность слайдера (пересчет ширины элемента при изменении размера окна)
    function handleResize() {
        itemWidth = productItems[0].offsetWidth + 30;
        maxPosition = -(itemWidth * (productItems.length - 1));

        // Если текущая позиция больше максимальной, корректируем её
        if (currentPosition < maxPosition) {
            currentPosition = maxPosition;
        }
        updateSliderPosition();
    }

    window.addEventListener('resize', handleResize);

    // Первоначальный расчет при загрузке страницы
    handleResize();
});

