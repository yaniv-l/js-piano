// Array of buttom row keyboad keys to be used for keydown - represent whitekeys
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
// Array of middle row keyboad keys to be used for keydown - represent blackkesy
const BLACK_KEYS = ['s', 'd', 'f', 'g', 'h'];

// Get all the kesy using the key class
const keys = document.querySelectorAll('.key');
// Array for the white keys using the key and white class
const whiteKeys = document.querySelectorAll('.key.white');
// Array for the blac keys using the key and black class
const blackKeys = document.querySelectorAll('.key.black');

// Add click event listener for each key
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
})

// keydown event listener to play key based on keybord keys keydown
document.addEventListener('keydown', e => {
    // check if key is hold down, if so returns
    if (e.repeat) return;
    const key = e.key;

    // We're using correlated indexes of WHITE_KEYS for keyboard white and whiteKeys for key.white
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    // We're using correlated indexes of WHITE_KEYS for keyboard black and whiteKeys for key.black
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    // play note using the correlated index
    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
})

// Play note
function playNote(key) {
    // Add class active to 'animate' key press
    key.classList.add('active');
    // get the note of the key based on the dataset (data-note = dataset.note)
    const noteAudio = document.getElementById(key.dataset.note);
    // reset the play current time so incase key is pressed again before play ended, the play will restart again instead of wait to end
    noteAudio.currentTime = 0;
    // Play the note
    noteAudio.play();
    // Add event listsre for the audion, when play end to remove the active class to revet style to normal state
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}