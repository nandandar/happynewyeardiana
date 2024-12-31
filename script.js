// Логика для кнопки "Маленький подарочек прекрасной принцессе"
document.querySelector('.gift-btn').addEventListener('click', function () {
    const giftImages = document.getElementById('gift-images');
    const closeBtn = document.querySelector('.close-btn');
    const images = document.querySelectorAll('.full-screen-images img');

    // Показываем контейнер с картинками и крестик
    giftImages.classList.remove('hidden');
    closeBtn.classList.remove('hidden');
    
    let currentImageIndex = 0; // Индекс текущей картинки
    let imageTimeout; // Переменная для хранения timeout-а

    // Функция для показа картинки
    function showImage(index) {
        // Скрываем все картинки
        images.forEach((img) => img.classList.remove('show'));
        
        // Показываем текущую картинку
        images[index].classList.add('show');
    }

    // Начинаем с первой картинки
    showImage(currentImageIndex);

    // Функция для смены картинки с задержкой
    function changeImage() {
        // Если мы на последней картинке, прекращаем таймер
        if (currentImageIndex === 2) { // Переходим к последней картинке
            clearTimeout(imageTimeout); // Останавливаем таймер
            showImage(3); // Показываем последнюю картинку без таймера
            return;  // Последняя картинка остаётся на экране
        }

        // Увеличиваем индекс
        currentImageIndex++; 
        showImage(currentImageIndex); // Показываем следующую картинку

        // Планируем следующий показ картинки через 2 секунды
        imageTimeout = setTimeout(changeImage, 2000);
    }

    // Начинаем цикл смены картинок с задержкой 2 секунды
    imageTimeout = setTimeout(changeImage, 2000);

    // Закрытие картинок
    closeBtn.addEventListener('click', function () {
        giftImages.classList.add('hidden');
        closeBtn.classList.add('hidden');
        images.forEach((img) => img.classList.remove('show')); // Убираем все картинки
    });
});

// Логика для кнопки "Мой вишлистик" (оставляем как есть)
document.querySelector('.wishlist-btn').addEventListener('click', function () {
    const wishlistImage = document.getElementById('wishlist-image');
    const closeBtn = wishlistImage.querySelector('.close-btn');
    const image = wishlistImage.querySelector('img');

    // Показываем контейнер с вишлистом и крестик
    wishlistImage.classList.remove('hidden');
    closeBtn.classList.remove('hidden');
    image.classList.add('show');

    // Закрытие картинки
    closeBtn.addEventListener('click', function () {
        wishlistImage.classList.add('hidden'); // Скрываем контейнер
        closeBtn.classList.add('hidden'); // Скрываем крестик
        image.classList.remove('show'); // Убираем картинку
    });
});
