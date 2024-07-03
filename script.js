document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const startScreen = document.getElementById('start-screen');
    const editorContainer = document.getElementById('editor-container');
    const textarea = document.getElementById('markdown-input');
    const preview = document.getElementById('markdown-preview');

    startButton.addEventListener('click', () => {
        startScreen.style.display = 'none';
        editorContainer.style.display = 'flex';
    });

    textarea.addEventListener('input', (event) => {
        const markdownText = event.target.value;
        preview.innerHTML = marked.parse(markdownText);
    });
});
