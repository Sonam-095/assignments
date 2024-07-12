document.addEventListener('DOMContentLoaded', () => {
    let itemCount = 0;

    const addButton = document.getElementById('addButton');
    const removeButton = document.getElementById('removeButton');
    const container = document.getElementById('container');

    addButton.addEventListener('click', () => {
        const itemText = prompt('Enter the text for the new item:');
        if (itemText) {
            itemCount++;
            const newItem = document.createElement('p');
            newItem.textContent = itemText;
            container.appendChild(newItem);
        }
    });

    removeButton.addEventListener('click', () => {
        if (container.lastChild) {
            container.removeChild(container.lastChild);
            itemCount--;
        }
    });
});
