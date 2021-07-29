const reviews = [
    {
        id: 1,
        name: "Rojash paudel",
        job: "Computer faculty",
        img:
            "https://scontent.fsif1-1.fna.fbcdn.net/v/t1.6435-9/86277086_198882394502956_5829433160944844800_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=gTMme5HRb2EAX8mhzp9&_nc_ht=scontent.fsif1-1.fna&oh=ec2e1fb7a95530df9e7c7b2838a5e5d9&oe=61269B8C",
        text: "It gives me an immense pleasure to take a stand at UTEC. With all the dedicated hardwork, it is more exciting to be in   this college and have an extraordinary performance."
        ,
    },
    {
        id: 2,
        name: "Aaditya Rijal",
        job: "civil faculty ",
        img:
            "https://scontent.fsif1-1.fna.fbcdn.net/v/t1.6435-9/75446447_1026296857722927_8342401689562644480_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Lu7G0cFZaS4AX-sMywS&_nc_ht=scontent.fsif1-1.fna&oh=372b16c44e5b56a51d57cfa02cbcb50d&oe=6126AAAE",
        text:
            "I have no regret of this.Although, I entered in the first batch of U - TEC for Electrical and Electronics program, I found the whole U - TEC administrative as well as teaching team as one of the finest and most brilliant combination as it could be.",
    },
    {
        id: 3,
        name: "Amulya Dhital",
        job: "Electrical faculty",
        img:
            "https://scontent.fsif1-1.fna.fbcdn.net/v/t1.6435-9/206953362_4088705197910235_285931375712668100_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=ad2b24&_nc_ohc=1pZODzCyqJQAX_gASmk&_nc_ht=scontent.fsif1-1.fna&oh=f312601452eeddf71a9121be265fb2cc&oe=61298969",
        text:
            "I have no regret of this.Although, I entered in the first batch of U - TEC for Electrical and Electronics program, I found the whole U - TECadministrative as well as teaching team as one of the finest and most brilliant combination as it could be.",
    },


];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;


window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});


function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
    console.log("hello");

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});