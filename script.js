// Array of team members
const teamMembers = [
    {
        name: "Sinovuyo Joe",

        designation: "Frontend Developer",

        bio: "Sinovuyo Joe is a creative and driven professional with a passion for storytelling and innovation. With a background in digital design and marketing, Sinovuyo excels in crafting compelling narratives that resonate with diverse audiences. Known for a keen eye for detail and a collaborative spirit, Sinovuyo thrives in dynamic environments, delivering impactful solutions that blend creativity and strategy.In addition to professional accomplishments, Sinovuyo is deeply committed to community empowerment and personal growth. Whether leading a team project or exploring new artistic mediums, Sinovuyo approaches every challenge with enthusiasm and a desire to make a positive difference.",

        moreInfo: "Sinovuyo loves hiking and his favorite programming language is JavaScript.",

        imgSrc: "https://ca.slack-edge.com/T02LW4RMXJQ-U07Q3KG4K0D-710193470838-512",
    },
    {
        name: "Luthando Dake",

        designation: "Backend Developer",

        bio: "Luthando Dake is a web designs which builds websites and web applications, utilizing technologies such as HTML, CSS, and JavaScript. Luthando focus on creating efficient, responsive, and user-friendly experiences across various devices and platforms. Luthando has a strong problem-solving mindset, ensuring optimal performance, security, and functionality of web solutions.",

        moreInfo: "Luthando enjoys playing chess and his favorite programming language is Python.",

        imgSrc: "https://ca.slack-edge.com/T02LW4RMXJQ-U07PRUT46UX-115d9c8e2f37-512",
    },
    {
        name: "Owethu Sityala",

        designation: "Full Stack Developer",

        bio: "Owethu Sityala is a visionary leader and a dedicated professional with a flair for innovation and problem-solving. With expertise in business development and strategic planning, Owethu has a proven track record of driving growth and achieving excellence in diverse industries.Passionate about empowering others, Owethu is a mentor and advocate for lifelong learning, inspiring teams to think big and pursue bold ideas. Outside of work, Owethu enjoys exploring new technologies, engaging in community-building initiatives, and finding creative ways to make a lasting impact. With a balance of ambition and empathy, Owethu is a true catalyst for positive change.",

          moreInfo: "Owethu is passionate about painting and loves working with Ruby.",

        imgSrc: "https://ca.slack-edge.com/T02LW4RMXJQ-U07Q3KEL137-e34da79ca90f-512",
    },
];


// DOM manipulation: Style the <h1> element

const h1 = document.querySelector("h1");
h1.style.backgroundColor = "black";
h1.style.color = "white";
h1.style.position = "fixed";
h1.style.top = "0";
h1.style.width = "100%";
h1.style.padding = "10px";
h1.style.textAlign = "center";
h1.style.marginTop = "0px";

// Team container

const mainSection = document.createElement("div");
mainSection.className = "team-container";
mainSection.style.marginTop = "100px";

// Member cards
teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.className = "member-card";

    // Member image
    const img = document.createElement("img");
    img.src = member.imgSrc;
    img.alt = member.name;
    card.appendChild(img);

    // Member name
    const name = document.createElement("h3");
    name.textContent = member.name;
    card.appendChild(name);

    // Member bio
    const bio = document.createElement("p");
    bio.textContent = member.bio;
    bio.style.display = "none";
    card.appendChild(bio);

    // Learn More button
    const learnMoreButton = document.createElement("button");
    learnMoreButton.textContent = "Learn More";
    learnMoreButton.onclick = () => {
        alert(` He is a ${member.designation}: ${member.moreInfo}`);
    };
    card.appendChild(learnMoreButton);

    //  Bio button
    const toggleBioButton = document.createElement("button");
    toggleBioButton.textContent = "Toggle Bio";
    toggleBioButton.onclick = () => {
        bio.style.display = bio.style.display === "none" ? "block" : "none";
    };
    card.appendChild(toggleBioButton);
    mainSection.appendChild(card);
});

document.getElementById("team").appendChild(mainSection);

document.addEventListener("DOMContentLoaded", () => {
    const themeSelector = document.getElementById("themeSelector");
    const body = document.body;

    themeSelector.addEventListener("change", () => {
      const selectedTheme = themeSelector.value;
      // Theme
      if (selectedTheme === "light") {
        body.style.backgroundColor = "#ffffff";
        body.style.color = "#000000";
      } else if (selectedTheme === "dark") {
        body.style.backgroundColor = "#121212";
        body.style.color = "#ffffff";
      } else if (selectedTheme === "colorful") {
        body.style.backgroundColor = "#ffddc1";
        body.style.color = "#005f73";
      }
    });
});

// Team photo
const teamPhotoButton = document.getElementById("show-team-photo");
const teamPhotoDiv = document.getElementById("team-photo");
let FadedOut = false;

teamPhotoButton.onclick = () => {
    let img = document.querySelector("#teamPhotoDiv img");

    if (!img) {
        img = document.createElement("img");
        img.src = "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg";
        img.alt = "Team Photo";
        img.style.width = "80%";
        img.style.height = "auto";
        img.style.borderRadius = "40px";
        img.style.opacity = "1";
        teamPhotoDiv.appendChild(img);
    }

    if (FadedOut) {
        fadeIn(img);
        teamPhotoButton.textContent = "Fade Out";
    } else {
        fadeOut(img);
        teamPhotoButton.textContent = "Fade In";
    }
    FadedOut = !FadedOut; 
};

function fadeOut(img) {
    let opacity = 1;
    const interval = setInterval(() => {
        if (opacity <= 0) {
            clearInterval(interval);
        } else {
            opacity -= 0.1;
            img.style.opacity = opacity;
        }
    }, 1000);
}

function fadeIn(img) {
    let opacity = 0;
    const interval = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(interval);
        } else {
            opacity += 0.1;
            img.style.opacity = opacity;
        }
    }, 1000);
}




        


        
    