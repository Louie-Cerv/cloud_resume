const counter = document.getElementById('count');
async function UpdateVisitCount() {
    let response = await fetch("https://kzbrv7w7a4tbwqo4lpwywo6spa0ymrki.lambda-url.us-west-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = data;
}

UpdateVisitCount();