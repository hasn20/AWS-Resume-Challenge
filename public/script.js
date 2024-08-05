const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://ot3lmzgkfdlxbmlrlfbp42ogda0mexwc.lambda-url.eu-north-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `👀 Views: ${data.views}`;
}
updateCounter();