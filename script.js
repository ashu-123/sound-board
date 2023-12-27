const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
    const soundKey = document.createElement('button');
    soundKey.classList.add('sound-key');
    soundKey.innerText = sound;

    soundKey.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });

    document.getElementById('keys').appendChild(soundKey);
});

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime=0;
    })
}