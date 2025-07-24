document.addEventListener('DOMContentLoaded', function () {
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.style.opacity = '0';
        profileImage.style.transform = 'translateY(20px)';
        profileImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

        setTimeout(() => {
            profileImage.style.opacity = '1';
            profileImage.style.transform = 'translateY(0)';
        }, 300);
    }
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        link.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });
    const projectCard = document.querySelector('.project-card');
    if (projectCard) {
        projectCard.style.opacity = '0';
        projectCard.style.transform = 'translateY(20px)';
        projectCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

        setTimeout(() => {
            projectCard.style.opacity = '1';
            projectCard.style.transform = 'translateY(0)';
        }, 800);
    }
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'scale(0.8)';
        tag.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        setTimeout(() => {
            tag.style.opacity = '1';
            tag.style.transform = 'scale(1)';
        }, 1000 + (index * 100));
    });
});

let datafoproject = [
    {
        title: "color-pick",
        description: "This Color Picker project allows users to select and copy colors easily, providing a seamless way to choose and apply colors for design and development purposes.",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/color-pick",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/color-pick/index.html",
        img: '<i class="fa-solid fa-palette"></i>',

    },
    {
        title: "Age Calculator",
        description: "This age calculator project helps users determine their exact age in years, months, and days based on their date of birth.",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/Age%20Calculator",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/Age%20Calculator/index.html",
        img: '<i class="fa-solid fa-calculator"></i>',

    },
    {
        title: "CountDown_Timer",
        description: "This Countdown Timer project allows users to set a specific time duration and counts down to zero, providing a visual and/or audio alert when the time is up.",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/CountDown_Timer",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/CountDown_Timer/index.html",
        img: '<i class="fa-solid fa-stopwatch"></i>',
    },
    {
        title: "Digital Clock",
        description: "This Digital Clock project displays the current time in hours, minutes, and seconds, updating in real-time for an accurate and dynamic clock experience.",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/Digital%20Clock",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project//Digital%20Clock/index.html",
        img: '<i class="fa-solid fa-stopwatch"></i>',
    },
    {
        title: "Expense Tracker",
        description: "This Expense Tracker project helps users manage their finances by recording income and expenses, categorizing transactions, and providing real-time balance updates for better budgeting and financial planning.",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/Expense Tracker",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/Expense Tracker/index.html",
        img: '<i class="fa-solid fa-code"></i>',
    }, {
        title: "Nav Bar",
        description: "This Navigation Bar (Nav Bar) project provides an easy-to-use and responsive menu for seamless website navigation, enhancing user experience with quick access to different sections or pages.",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/Nav Bar",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/Nav Bar/index.html",
        img: '<i class="fa-brands fa-html5"></i>',
    }, {
        title: "Password Generator",
        description: "This Password Generator project creates strong, random passwords based on user-selected criteria, ensuring enhanced security for online accounts and data protection.",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/Password Generator",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/Password Generator/index.html",
        img: '<i class="fa-solid fa-lock"></i>',
    },
    {
        title: "Timer",
        description: "This Timer project allows users to set a countdown for a specific duration, providing visual and/or audio alerts when the time reaches zero, making it useful for productivity and time management.",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/Timer",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/Timer/index.html",
        img: '<i class="fa-solid fa-clock"></i>',
    },
    {
        title: "add-friend",
        description: " friend request system like Facebook,",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/add-friend",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/add-friend/index.html",
        img: '<i class="fa-solid fa-code"></i>',
    },
    {
        title: "Like-post",
        description: " like request system like instagram post",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/like",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/like/index.html",
        img: '<i class="fa-solid fa-code"></i>',
    },
    {
        title: "courser",
        description: "This project enables an element to move along with the cursor, creating a dynamic and interactive visual effect that enhances user engagement on the webpage.",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/courser",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/courser/index.html",
        img: '<i class="fa-solid fa-laptop-code"></i>',
    },
    {
        title: "3d Loop Animation Use image",
        description: "This project Only Image Take Full Secreen And Top to Buttom or other.",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/3d",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/3d/index.html",
        img: '<i class="fa-solid fa-loop-code"></i>',
    },
    {
        title: "BirthdayAnimationCard",
        description: "This project create some Carde and in this 3 animation.",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/birthday-animation-card",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/birthday-animation-card/index.html",
        img: '<i class="fa-solid fa-laptop-code"></i>',
    },
    {
        title: "Button",
        description: "This project in Different Type Animation transition Animatios .",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/button/courser",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/button/index.html",
        img: '<i class="fa-solid fa-laptop-code"></i>',
    },
    {
        title: "Button_Bacground_Animation",
        description: "This project Animation Border oR BackGrounde .",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/button-ani",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/button-ani/index.html",
        img: '<i class="fa-solid fa-laptop-code"></i>',
    },
    {
        title: "Button Glow",
        description: "This project The button Glow bacgrounde and Click than full Button in Glow .",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/button-glow",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/button-glow/index.html",
        img: '<i class="fa-solid fa-laptop-code"></i>',
    },
    {
        title: "car",
        description: "This project One car run starte day and night and day .",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/car",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/car/index.html",
        img: '<i class="fa-solid fa-laptop-code"></i>',
    },
    {
        title: "calculater",
        description: "This project Simple Calculater And Calculate .",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/calculator",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/calculator/index.html",
        img: '<i class="fa-solid fa-laptop-code"></i>',
    },
    {
        title: "Ecommerce",
        description: "This project ui like ecommerce and this Scroll Animation .",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/ecommerce",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/ecommerce/index.html",
        img: '<i class="fa-solid fa-laptop-code"></i>',
    },
    {
        title: "Hover_Effect_mouse_Moving",
        description: "This project my Mouse move and Move Effect in the page .",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/hover-effect-mouse-moving",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/hover-effect-mouse-moving/index.html",
        img: '<i class="fa-solid fa-laptop-code"></i>',
    },
    {
        title: "MokeUp",
        description: "This project create a Mokeup In the Box of Iphone .",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/iphoneBox",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/iphoneBox/index.html",
        img: '<i class="fa-solid fa-laptop-code"></i>',
    },
    {
        title: "SmokeAnimation",
        description: "This project Relode The page and my name background smoking Effect ",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/smoke animation",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/smoke animation/index.html",
        img: '<i class="fa-solid fa-laptop-code"></i>',
    },
    {
        title: "SocailLink",
        description: "This project My all Socail Account Link in the Side .",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/sociallink",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/sociallink/index.html",
        img: '<i class="fa-solid fa-laptop-code"></i>',
    },
    {
        title: "Traffic Light Effect",
        description: "This project create and Traffic Light Effect .",
        githubLink: "https://github.com/kamranikramofficial/simple-mini-project/tree/main/traffic-light",
        livePreview: "https://kamranikramofficial.github.io/simple-mini-project/traffic-light/index.html",
        img: '<i class="fa-solid fa-laptop-code"></i>',
    }
]


let main = document.getElementById("project-details");
datafoproject.forEach((project) => {
    main.innerHTML += `
        <div class="project-card">
            <div class="project-icon">
            ${project.img}           
         </div>
            <div class="project-details">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.githubLink}" class="project-link" target="_blank">
                    <i class="fab fa-github"></i> View on GitHub
                </a> &nbsp &nbsp &nbsp
                <a href="${project.livePreview}" class="project-link project-link-pa " target="_blank">
                <i class="fa-solid fa-magnifying-glass"></i> Live Preview
                </a>
            </div>
        </div>
        <br>

    `;
});
