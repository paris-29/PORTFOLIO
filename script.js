const toggleButton = document.getElementById('toggle-theme');
const terminalOutput = document.getElementById('terminal-output');
let darkMode = false;

toggleButton.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
});

const typingEffect = (text, element) => {
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 100);
};

typingEffect('$ ls\nprojects/  skills.txt  contact.txt\n', terminalOutput);
