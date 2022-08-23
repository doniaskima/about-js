// Elements
const getJokesBtn = document.querySelector(".get-jokes");
const input = document.querySelector('input[type="number"]');
const jokes = document.querySelector(".jokes");

getJokesBtn.addEventListener("click", getJokes);

function getJokes(e) {
    const number = input.value;

    const xhr = new XMLHttpRequest();

    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);
            const response = JSON.parse(this.responseText);
            let output = "";

            if (response.type === "success") {
                response.value.forEach((joke) => {
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += `<li>Something is wrong</li>`;
            }

            jokes.innerHTML = output;
        }
    };

    xhr.send();

    e.preventDefault();
}