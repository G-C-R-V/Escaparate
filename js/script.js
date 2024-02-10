document.addEventListener('DOMContentLoaded', function () {
    const fotosContainer = document.querySelector('.fotos');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    nextBtn.addEventListener('click', function () {
        if (currentIndex < fotosContainer.children.length - 1) {
            currentIndex++;
            updateGallery();
        }
    });

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateGallery();
        }
    });

    function updateGallery() {
        const photoWidth = fotosContainer.children[0].clientWidth;
        const maxIndex = fotosContainer.children.length - 1;
        
        if (currentIndex <= maxIndex) {
            fotosContainer.style.transform = `translateX(${-currentIndex * photoWidth}px)`;
        }
    }
});
