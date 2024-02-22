// Your code here...
document.addEventListener('DOMContentLoaded', function () {
    const colorButtons = document.querySelectorAll('.color-button');
    const productImage = document.getElementById('product-image');

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.id;
            const imagePath = `img/mockup_the_shop/tshirts/tshirt_${color}.jpg`;
            productImage.setAttribute('src', imagePath);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const refreshButton = document.getElementById('sell');
    refreshButton.addEventListener('click', function () {
        location.reload(); // Перезагружаем страницу
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sizeButtons = document.querySelectorAll('.size-button');
    const colorButtons = document.querySelectorAll('.color-button');

    sizeButtons.forEach(button => {
        button.addEventListener('click', function () {
            sizeButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    colorButtons.forEach(button => {
        button.addEventListener('click', function () {
            colorButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });
});

