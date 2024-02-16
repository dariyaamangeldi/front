
function loadPage(url, containerId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = html;
            } else {
                throw new Error('Container element not found');
            }
        })
        .catch(error => {
            console.error('Error loading page:', error);
        });
}
