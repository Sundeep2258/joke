let jokeText = document.getElementById("jokeText");
let spinner = document.getElementById("spinner");
let jokeBtn = document.getElementById("jokeBtn");

let options = {
  method: "GET",
};

function getRandomJoke() {
  spinner.classList.remove("d-none");
  jokeText.classList.add("d-none");

  fetch("https://apis.ccbp.in/jokes/random", options)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      let randomJoke = jsonData.value;
      spinner.classList.add("d-none");
      jokeText.classList.remove("d-none");

      jokeText.textContent = randomJoke;
    });
}
jokeBtn.addEventListener("click", getRandomJoke);
