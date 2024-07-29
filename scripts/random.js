// script.js
function getRandomImage(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function displayRandomImage(images) {
    const imageContainer = document.getElementById('image-container');
    const img = document.createElement('img');
    img.src = getRandomImage(images);
    img.alt = 'Random Image';
    imageContainer.appendChild(img);
}

fetch('images.json')
    .then(response => response.json())
    .then(images => {
        if (window.location.pathname === '/random' || window.location.pathname === '/random/') {
            displayRandomImage(images);
        }
    })
    .catch(error => console.error('Error fetching images:', error));


// 检查 URL 路径是否为 /random
if (window.location.pathname === '/random') {
    displayRandomImage();
}
