// https://icanhazdadjoke.com/

const jokes = document.querySelector(".jokes");
const btn = document.querySelector(".btn");

const dadjokes = () => {


    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com', setHeader)
        .then((res) => res.json())
        .then((data) => {
            jokes.innerHTML = data.joke;
        }).catch((error) => {
            console.log(error);
        })

}

btn.addEventListener('click', dadjokes);
dadjokes();