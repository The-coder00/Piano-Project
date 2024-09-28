// Select all the keys
const keys = document.querySelectorAll(".key");

// Function to play the corresponding note
function playNote(event) {
    const note = event.target.getAttribute('data-note');
    const audio = document.getElementById(note);
    if (audio) {
        audio.currentTime = 0;  // Reset the audio playback to the start
        audio.play();  // Play the audio
    }
}

// Add event listeners to each key to detect clicks
keys.forEach((key) => {
    key.addEventListener('click', playNote);
});
