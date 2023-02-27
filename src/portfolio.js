"use-strict";

let projects = document.getElementById("projects");
let container = document.getElementById("container");
let bio = document.getElementById("bio-wrap");

let details = JSON.parse(localStorage.getItem("projectDetails")) || [];

let generateBio = () => {
  return (biowrap.innerHTML = `
  <div id="bio" class="bio">
  <div id="bio-pic" class="bio-pic">
    <img width="300" src="images/About-me.jpg" />
  </div>
  <div id="bio-info" class="bio-info">
    <div id="bio-header" class="bio-header">
      <h1>About Me</h1>
    </div>
    <div class="bio-details">
      <h3>
        My name is Christopher Waugh based in Cincinnati, Ohio, USA and willing to relocate. I'm a
        self taught/college course developer and my main focus is front
        end development. I am very hard-working and can fit with any team.
        The skills demonstrated in my portfolio are JavaScript, React,
        HTML/CSS, and Bootstrap.
      </h3>
    </div>
  </div>
</div>
`);
};
let generateContact = () => {
  return (contact.innerHTML = `
  <div id="contact-pic" class="contact-pic">
  <img width=400 height=300 src="images/contact-pic.jpg"
</div>
<div id="contact-info" class="contact-info">
  <h3>Contact:</h3>
  <div id="call-hours" class="call-hours">
    <p>Phone Number: 513-926-6094</p>
  </div>
  <div id="email" class="email">
    <p>Email: chriswaugh.contact@gmail.com</p>
  </div>
  <div class="about-home-button">
    <a href="index.html"><button>Top of Page</button></a>
  </div>
</div>
`);
};

let generateProjects = () => {
  return (projects.innerHTML = projectItems
    .map((x) => {
      let {
        id,
        title,
        img,
        description,
        development,
        developmentImage,
        sources,
        sourcesImage,
        webButton,
        codeButton,
      } = x;
      let search = details.find((x) => x.id === id) || [];
      return `      <div id="container" class="container">
      <div class="container-images">
        <img src="${img}" />
      </div>
      <div id="project-info" class="project-info">
        <div id="title" class="title">
          <h1>${title}</h1>
        </div>
        <div id="description" class="description">
          <h4>
            ${description}
          </h4>
        </div>
        <div id="description-buttons" class="description-buttons">
          <a
            href="${webButton}"
            target="_blank"
          >
            <button>Live Code</button>
          </a>
          <a
            href="${codeButton}"
            target="_blank"
          >
            <button>Code</button>
          </a>
        </div>
      </div>
    </div>`;
    })
    .join(""));
};

generateBio();
generateContact();
generateProjects();
