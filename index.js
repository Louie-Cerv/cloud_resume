const countUrl = 'https://kzbrv7w7a4tbwqo4lpwywo6spa0ymrki.lambda-url.us-west-1.on.aws/'
const countElement = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch(countUrl)
        .then(res => res.json())
        .then(res => {
        countElement.innerHTML = res.views;
    });
}