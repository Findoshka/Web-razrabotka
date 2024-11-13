const backgrounds = [
    'images/background2.jpg',
    'images/background1.jpg',
];

let currentBackgroundIndex = 0;

const themeSwitchSound = document.getElementById('theme-switch-sound');

function toggleThemeAndBackground() {
    document.body.classList.toggle('light-theme');

    if (themeSwitchSound) {
        themeSwitchSound.currentTime = 0;
        themeSwitchSound.play();
    }

    document.body.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;

    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
}

document.querySelector('.theme-toggle').addEventListener('click', toggleThemeAndBackground);

toggleThemeAndBackground();
