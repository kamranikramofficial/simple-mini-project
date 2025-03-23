document.addEventListener('DOMContentLoaded', function() {
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

let datafoproject =[
    {
        projectname : "Age Calculator",
        projectdetail:"This age calculator project helps users determine their exact age in years, months, and days based on their date of birth.",
        githublink:"https://github.com/kamranikramofficial/simple-html-project/tree/main/Age%20Calculator",
        livepereve:
    

    }
]



  
// {/* <div class="project-section">
// <h2>My Project</h2>
// <div class="project-card">
//     <div class="project-icon">
//         <i class="fa-solid fa-code"></i>
//     </div>
//     <div class="project-details">
//         <h3>Simple HTML Project</h3>
//         <p>A lightweight, clean HTML starter template for building modern websites.</p>
//         <a href="https://github.com/kamranikramofficial/simple-html-project" class="project-link" target="_blank">
//             <i class="fab fa-github"></i> View on GitHub
//         </a> &nbsp &nbsp &nbsp
//         <a href="https://github.com/kamranikramofficial/simple-html-project" class="project-link" target="_blank">
//             <i class="fab fa-github"></i> Live Perview
//         </a>
//     </div>
// </div>
// </div> */}