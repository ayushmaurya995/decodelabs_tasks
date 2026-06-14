// DARK MODE TOGGLE

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeToggle.textContent = "☀️ Light Mode";

    }else{

        themeToggle.textContent = "🌙 Dark Mode";
    }

});


// HERO CONTENT CHANGE

const changeContentBtn = document.getElementById("changeContentBtn");

const heroTitle = document.getElementById("heroTitle");

const heroText = document.getElementById("heroText");

changeContentBtn.addEventListener("click", () => {

    heroTitle.textContent =
    "ARTIFICIAL INTELLIGENCE IS SHAPING THE FUTURE";

    heroText.textContent =
    "AI is revolutionizing healthcare, education, software development, cybersecurity and countless other industries worldwide.";

});


// NEWSLETTER SUBSCRIBE

const subscribeBtn = document.getElementById("subscribeBtn");

const emailInput = document.getElementById("emailInput");

const subscribeMessage =
document.getElementById("subscribeMessage");

subscribeBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();

    if(email === ""){

        subscribeMessage.style.color = "red";

        subscribeMessage.textContent =
        "Please enter your email address.";

        return;
    }

    subscribeMessage.style.color = "green";

    subscribeMessage.textContent =
    "Thank you for subscribing to TECHLYFE!";

    emailInput.value = "";

});


// LIKE BUTTONS

const likeButtons =
document.querySelectorAll(".like-btn");

likeButtons.forEach((button) => {

    let likes = 0;

    const count =
    button.nextElementSibling;

    button.addEventListener("click", () => {

        likes++;

        count.textContent =
        likes + " Likes";

    });

});


// TRENDING TOPICS HOVER EFFECT

const trendingTopics =
document.querySelectorAll(".trending-topics span");

trendingTopics.forEach((topic) => {

    topic.addEventListener("mouseenter", () => {

        topic.style.transform = "scale(1.1)";
        topic.style.transition = "0.3s";

    });

    topic.addEventListener("mouseleave", () => {

        topic.style.transform = "scale(1)";

    });

});


// WELCOME MESSAGE

window.addEventListener("load", () => {

    console.log("Welcome to TECHLYFE Technology Blog");

});