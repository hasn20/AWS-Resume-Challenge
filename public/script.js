document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('https://7lttvfsyu2.execute-api.eu-north-1.amazonaws.com/prod/prod/counter');
    const data = await response.json();
    document.getElementById('visitorCount').textContent = data.count;
});
