function openFullScreen(imgElement) {
    const fullScreenContainer = document.getElementById('fullScreenContainer');
    const fullScreenImage = document.getElementById('fullScreenImage');
    fullScreenImage.src = imgElement.src;
    fullScreenContainer.style.display = 'flex';
}

function closeFullScreen() {
    const fullScreenContainer = document.getElementById('fullScreenContainer');
    fullScreenContainer.style.display = 'none';
}