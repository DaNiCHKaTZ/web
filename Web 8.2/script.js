const images = [
    { src: 'cat1.jpg', type: 'cats' },
    { src: 'dog1.jpg', type: 'dogs' },
    { src: 'cat2.jpg', type: 'cats' },
    { src: 'dog2.jpg', type: 'dogs' },
    { src: 'cat3.jpg', type: 'cats' },
    { src: 'dog3.jpg', type: 'dogs' },
    
];

function filterImages(filter) {
    history.pushState({}, '', '?filter=' + filter);
    const container = document.getElementById('imageContainer');
    container.innerHTML = '';
    images.forEach(image => {
        if (filter === 'all' || image.type === filter) {
            const img = document.createElement('img');
            img.src = image.src;
            container.appendChild(img);
        }
    });
}

window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    filterImages(params.get('filter') || 'all');
};
