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
        githubLink: "https://github.com/kamranikramofficial/simple-html-project/tree/main/color-pick",
        livePreview: "https://kamranikramofficial.github.io/simple-html-project/color-pick/index.html",
        img:'',

    },
    {
        title: "Age Calculator",
        description: "This age calculator project helps users determine their exact age in years, months, and days based on their date of birth.",
        githubLink: "https://github.com/kamranikramofficial/simple-html-project/tree/main/Age%20Calculator",
        livePreview: "https://kamranikramofficial.github.io/simple-html-project/Age%20Calculator/index.html",
        img:'<i class="fa-solid fa-calculator"></i>',

    },
    {
        title: "CountDown_Timer",
        description: "This Countdown Timer project allows users to set a specific time duration and counts down to zero, providing a visual and/or audio alert when the time is up.",
        githubLink: "https://github.com/kamranikramofficial/simple-html-project/tree/main/CountDown_Timer",
        livePreview: "https://kamranikramofficial.github.io/simple-html-project/CountDown_Timer/index.html",
        img: '<i class="fa-solid fa-stopwatch"></i>',
    },
    {
        title: "Digital Clock",
        description: "This Digital Clock project displays the current time in hours, minutes, and seconds, updating in real-time for an accurate and dynamic clock experience.",
        githubLink: "https://github.com/kamranikramofficial/simple-html-project/tree/main/Digital%20Clock",
        livePreview: "https://kamranikramofficial.github.io/simple-html-project//Digital%20Clock/index.html",
        img: '<i class="fa-solid fa-stopwatch"></i>',
    },
    {
        title: "Expense Tracker",
        description: "This Expense Tracker project helps users manage their finances by recording income and expenses, categorizing transactions, and providing real-time balance updates for better budgeting and financial planning.",
        githubLink: "https://github.com/kamranikramofficial/simple-html-project/tree/main/Expense Tracker",
        livePreview: "https://kamranikramofficial.github.io/simple-html-project/Expense Tracker/index.html",
        img: '<i class="fa-solid fa-code"></i>',
    },    {
        title: "Nav Bar",
        description: "This Navigation Bar (Nav Bar) project provides an easy-to-use and responsive menu for seamless website navigation, enhancing user experience with quick access to different sections or pages.",
        githubLink: "https://github.com/kamranikramofficial/simple-html-project/tree/main/Nav Bar",
        livePreview: "https://kamranikramofficial.github.io/simple-html-project/Nav Bar/index.html",
        img: '<i class="fa-brands fa-html5"></i>',
    },    {
        title: "Password Generator",
        description: "This Password Generator project creates strong, random passwords based on user-selected criteria, ensuring enhanced security for online accounts and data protection.",
        githubLink: "https://github.com/kamranikramofficial/simple-html-project/tree/main/Password Generator",
        livePreview: "https://kamranikramofficial.github.io/simple-html-project/Password Generator/index.html",
        img: '<i class="fa-solid fa-lock"></i>',
    },   
     {
        title: "Timer",
        description: "This Timer project allows users to set a countdown for a specific duration, providing visual and/or audio alerts when the time reaches zero, making it useful for productivity and time management.",
        githubLink: "https://github.com/kamranikramofficial/simple-html-project/tree/main/Timer",
        livePreview: "https://kamranikramofficial.github.io/simple-html-project/Timer/index.html",
        img: '<i class="fa-solid fa-clock"></i>',
    },
    {
        title: "Todo App",
        description: "This To-Do App project helps users organize tasks by adding, updating, and deleting items, improving productivity with a simple and interactive task management system.",
        githubLink: "https://github.com/kamranikramofficial/simple-html-project/tree/main/Todo App",
        livePreview: "https://kamranikramofficial.github.io/simple-html-project/Todo App/index.html",
        img: '<i class="fa-solid fa-calendar-check"></i>',
    },
    {
        title: "add-friend",
        description: " friend request system like Facebook,",
        githubLink: "https://github.com/kamranikramofficial/simple-html-project/tree/main/add-friend",
        livePreview: "https://kamranikramofficial.github.io/simple-html-project/add-friend/index.html",
        img: '<i class="fa-solid fa-code"></i>',
    },
    {
        title: "Like-post",
        description: " like request system like instagram post",
        githubLink: "https://github.com/kamranikramofficial/simple-html-project/tree/main/like",
        livePreview: "https://kamranikramofficial.github.io/simple-html-project/like/index.html",
        img: '<i class="fa-solid fa-code"></i>',
    },
    {
        title: "courser",
        description: "This project enables an element to move along with the cursor, creating a dynamic and interactive visual effect that enhances user engagement on the webpage.",
        githubLink: "https://github.com/kamranikramofficial/simple-html-project/tree/main/courser",
        livePreview: "https://kamranikramofficial.github.io/simple-html-project/courser/index.html",
        img: '<i class="fa-solid fa-laptop-code"></i>',
    },
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
                <a href="${project.livePreview}" class="project-link" target="_blank">
                <i class="fa-solid fa-magnifying-glass"></i> Live Preview
                </a>
            </div>
        </div>
        <br>
    `;
});
