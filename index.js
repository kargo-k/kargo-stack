DATA = {
  "header": "Full stack engineer with a natural curiosity and drive for results. With 10 years of product development experience, Karen is transitioning into software to build tools that change the way people live",
  "projects": [
    {
      "title": "Capsule Curate",
      "summary": "Single page web application for building and visualizing capsule wardrobes.",
      "bullets": [
        "Engineered Ruby on Rails API backend with ActiveRecord Serializers and JWT Authentication",
        "Designed and built frontend using React.js and SCSS for styling",
        "Constructed 16 components and managed state using React-Redux"
      ],
      "github-f": "https://github.com/kargo-k/capsule-curate-client",
      "github-b": "https://github.com/kargo-k/capsule-curate-server",
      "app-link": "https://capsule-curate-client.herokuapp.com/",
      "demo": "https://youtu.be/wRQVGnccpMM"
    },
    {
      "title": "Algorhythm Nation",
      "summary": "Single page web application that allows users to build playlists based on track features such as energy, valence, and daceability.",
      "bullets": [
        "Scoped and managed project timeline with a remote team",
        "Focused on server-side Rails API development with endpoints for songs and playlists",
        "Utilized Spotify OAuth and API endpoints to populate user's libraries and search tracks"
      ],
      "github-f": "https://github.com/kargo-k/algorhythm-client",
      "github-b": "https://github.com/kargo-k/algorhythm-backend2",
      "app-link": "http://algorhythm-nation-front.herokuapp.com/"
    },
    {
      "title": "Capsule v1",
      "summary": "Singe page web application for building and visualizing capsule wardrobes.",
      "bullets": [
        "Scraped Uniqlo's Women's Apparel website using Nokogiri",
        "Wrote over 1000 lines of vanilla JavaScript with full CRUD functionality"
      ],
      "github-f": "https://github.com/kargo-k/capsule-wardrobe",
      "app-link": "https://kargo-k.github.io/capsule-wardrobe/index.html"
    },
    {
      "title": "Dive Slate",
      "summary": "Web application for scuba divers to take their dive log book with them wherever their underwater travels bring them to.",
      "bullets": [
        "Built using Ruby on Rails on backend and frontend using the MVC pattern",
        "Authored user stories and sketched wiredframes for data flow",
        "Scoped and managed project timeline using Trello"
      ],
      "github-f": "https://github.com/kargo-k/dive-slate-app"
    },
    {
      "title": "Feeding Zeus",
      "summary": "Amazon Alexa Skill to assist user on reaclling when they last fed their pet",
      "bullets": [
        "Self-taught implementation of the Alexa Skills Kit and S3"
      ],
      "github-b": "https://github.com/kargo-k/ask-feeding-zeus"
    },
  ],
  "education": [
    {
      "school": "Boston University",
      "course": "Biomedical Engineering, BSc"
    },
    {
      "school": "Flatiron School",
      "course": "Software Engineering Immersive",
      "dates": "Sept 2019"
    }
  ],
  "experience": [
    {
      "title": "Product Engineer",
      "company": "Talking Rain Beverage Company",
      "location": "Seattle, WA",
      "dates": "2017-2019",
      "summary": "Focused on ideation and technical development for new product lines.",
      "bullets": [
        "Iterated on product concepts by analyzing consumer data, developing launch timelines, and collecting feedback from test markets",
        "Streamlined cross-functional efficiencies between Supply Chain, R&D, Brand, and Contract Manufacturers by creating a clear and concise workflow",
        "Aligned internal technical teams to validate technical feasibility of new products"
      ]
    },
    {
      "title": "Product Manager",
      "company": "Scientific Innovations Company Pte Ltd",
      "location": "Singapore",
      "dates": "2015-2016",
      "summary": "Managed cross-functional product development teams and developed the go-to-market plans across four product lines",
      "bullets": [
        "Led overall product strategy development for a virtual wellness clinic with a team of 4 software engineers and communicated progress to stakeholders weekly",
        "Gathered and defined product requirements and designed user interface for rapid prototyping wireframes and mockups",
        "Streamlined business operations and personnel responsibilities to save the company over 40 man-hours a week, which increased case throughput by 25%"
      ]
    },
    {
      "title": "Senior Research Associate",
      "company": "Pulmatrix Inc",
      "location": "Boston, MA",
      "dates": "2011-2014",
      "summary": "Product development using systematic experimental design and quantitative data analysis",
      "bullets": [
        "Led validation testing for performance and efficiency of prototype inhalers",
        "Reviewed and audited the work of colleagues and caught a major data entry error that would have set the project timeline back by 2 months"
      ]
    }
  ]
}

// View 1 - Intro
let div_title = document.querySelector('div#title')
let title = document.createElement('h1')
title.id = 'title'
div_title.appendChild(title)
title.innerText = 'kargo stack'
// title.addEventListener('mouseover', extendTitle)
// title.addEventListener('mouseleave', shortenTitle)

let blurb = document.createElement('p')
blurb.innerText = 'Karen is a product-focused full stack software engineer with a natural curiosity and drive for results.  With 10 years of product development experience in the beverage, pharmaceutical, and tech industries, she is transitioning into software to build tools that change the way people live.'
let div_text = document.querySelector('div#text')
div_text.appendChild(blurb)

let next = document.createElement('span')
next.innerText = 'projects >>'
next.id = 'next'
let footer = document.querySelector('div#footer')
footer.appendChild(next)
next.addEventListener('click', projects1)


function extendTitle() {
  title.innerText = 'karen go - full stack software engineer'
}

function shortenTitle() {
  title.innerText = 'kargo stack'
}

function projects1() {
  let data = DATA['projects']
  clearDivs('PROJECTS')

  for (let i = 0; i < 2; i++) {
    formatProject(data[i], div_text)
  }

  let next = document.createElement('span')
  next.innerText = 'more >>'
  next.id = 'next'
  document.getElementById('footer').appendChild(next)
  next.addEventListener('click', projects2)

}

function projects2() {
  let data = DATA['projects']
  clearDivs('PROJECTS')

  for (let i = 2; i < 5; i++) {
    formatProject(data[i], div_text)
  }

  let next = document.createElement('span')
  next.innerText = 'knowledge >>'
  next.id = 'next'
  document.getElementById('footer').appendChild(next)
  // next.addEventListener('click', projects2)
}

function formatProject(project, div_text) {
  let heading = document.createElement('div')
  heading.classList = 'title'
  div_text.appendChild(heading)

  let title = document.createElement('h3')
  title.innerText = project['title']
  heading.appendChild(title)

  let summary = document.createElement('div')
  summary.innerText = project['summary']
  heading.appendChild(summary)

  let wrapper = document.createElement('div')
  wrapper.className = 'wrapper'
  heading.appendChild(wrapper)

  let link
  if (!!project['github-f']) {
    link = document.createElement('button')
    link.innerText = 'GitHub'
    wrapper.appendChild(link)
    // add event listener to open github repo
  }

  if (!!project['github-b']) {
    link = document.createElement('button')
    link.innerText = 'GitHub'
    wrapper.appendChild(link)
    // add event listener to open github repo
  }

  if (!!project['app-link']) {
    link = document.createElement('button')
    link.innerText = 'App'
    wrapper.appendChild(link)
    // add event listener to open github repo
  }

  if (!!project['demo']) {
    link = document.createElement('button')
    link.innerText = 'Demo'
    wrapper.appendChild(link)
    // add event listener to open github repo
  }

  let list = document.createElement('ul')
  div_text.appendChild(list)

  let bullet
  for (let i = 0; i < project['bullets'].length; i++) {
    bullet = document.createElement('li')
    bullet.innerText = project['bullets'][i]
    list.appendChild(bullet)
  }
}

function clearDivs(title) {
  // clear existing data
  let div_title = document.querySelector('div#title')
  div_title.innerHTML = `<h1>${title}</h1>`
  let div_text = document.querySelector('div#text')
  div_text.innerHTML = ""
  let footer = document.querySelector('div#footer')
  footer.innerHTML = ""
}



// View 3 - Knowledge (Education and Technical Skills)




// View 4 - Past Job Experiences




// Contact Information
// let contact_div = document.getElementById('contact')
// let email = document.createElement('button')
// email.innerText = 'Email'
// contact_div.appendChild(email)
// let github = document.createElement('button')
// github.innerText = 'GitHub'
// contact_div.appendChild(github)