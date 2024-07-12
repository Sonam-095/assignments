document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchButton');
    const dataContainer = document.getElementById('dataContainer');

    fetchButton.addEventListener('click', () => {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                dataContainer.innerHTML = `<img src="${data[0].url}" alt="Random Cat" style="max-width: 100%;">`;
            })
            .catch(error => {
                dataContainer.innerHTML = `<p>Error: ${error.message}</p>`;
            });
    });
});
