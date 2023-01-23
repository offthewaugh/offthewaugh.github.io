"use-strict";

let projects = document.getElementById("projects");
let container = document.getElementById("container");
let bio = document.getElementById("bio");

let details = JSON.parse(localStorage.getItem("projectDetails")) || [];

let generateBio = () => {
  return (bio.innerHTML = `
  <div class="bio-details">
  <h3>
    My name is Christopher Waugh based in Cincinnati, Ohio, USA.
    I'm a self taught/college course developer and my main focus in front end
    development. The skills demonstrated in my porfolio are JavaScript,
    React, HTML/CSS, and Bootstrap.
  </h3>
</div>
`);
};

let generateAbout = () => {
  return (about.innerHTML = `
  <h3>Contact:</h3>
  <p>Email: chriswaugh.contact@gmail.com</p>
  <p>Mobile: 513-926-6094</p>`);
};

let generateProjects = () => {
  return (projects.innerHTML = projectItems
    .map((x) => {
      let {
        id,
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
      return `<div id="container" class="container">
    <img class="container-image"
      width="250" 
      src="${img}"
    />
  <div id="description" class="description">
  
    <h3>
        ${description}
    </h3>
    <div id="development-sources" class="development-sources">
      <div class="development">
          <img width ="100" src="${developmentImage}"/>
          <ul>
            ${development}
          </ul>
      </div>
      <div class="ds-buttons">
      <a href=${webButton} target="_blank"><button>Website</button></a>
      <a href=${codeButton} target="_blank"><button>Code</button></a>
      </div>
      <div class="sources">
          <img width="100" src="${sourcesImage}" />
          <ul>
${sources}
          </ul>
      </div>
      </div>
  </div>
  </div>`;
    })
    .join(""));
};

generateBio();
generateAbout();
generateProjects();
