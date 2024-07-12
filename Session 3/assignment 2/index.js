document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const hoverDiv = document.getElementById('hoverDiv');

    textInput.addEventListener('input', () => {
        console.log(textInput.value);
    });

    hoverDiv.addEventListener('mouseenter', () => {
        hoverDiv.style.backgroundColor = 'lightpink';
    });

    hoverDiv.addEventListener('mouseleave', () => {
        hoverDiv.style.backgroundColor = 'lightgrey';
    });
});
