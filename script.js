document.addEventListener('DOMContentLoaded', function() {
    fetch('https://tradestie.com/api/v1/apps/reddit')
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Fetching error:', error));
});

function displayData(data) {
    const container = document.getElementById('api-data');
    data.forEach(item => {
        const element = document.createElement('div');
        element.className = 'api-data-item';
        element.innerHTML = `
            <strong>Ticker:</strong> ${item.ticker} <br>
            <strong>Sentiment:</strong> <span class="${item.sentiment.toLowerCase()}">${item.sentiment}</span> <br>
            <strong>Sentiment Score:</strong> ${item.sentiment_score} <br>
            <strong>Number of Comments:</strong> ${item.no_of_comments}
        `;
        container.appendChild(element);
    });
}
