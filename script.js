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


// Team container
const teamContainer = document.createElement("div");
teamContainer.className = "team-container";

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
    teamContainer.appendChild(card);
});

document.getElementById("team").appendChild(teamContainer);

// Team photo
const teamPhotoButton = document.getElementById("show-team-photo");
const teamPhotoDiv = document.getElementById("team-photo");

teamPhotoButton.onclick = () => {
    teamPhotoDiv.innerHTML = ""; // Clear previous content
    const img = document.createElement("img");
    img.src = "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg";
    img.alt = "Team Photo";
    img.style.width = "80%";
    img.style.height = "auto";
    img.style.borderRadius = "40px";
    teamPhotoDiv.appendChild(img);

    if (img.style.opacity === "0" || image.style.opacity === "") {
        // Fade In: Set opacity to 1 (visible)
        img.style.opacity = "1";
    } else {
        // Fade Out: Set opacity to 0 (hidden)
        img.style.opacity = "0";
    }

}    



        
    