DATA = {
  "name": "Karen Go",
  "title": "Software Engineer",
  "location": "Seattle, WA",
  "about": "Full stack engineer with a natural curiosity and drive for results. With 10 years of product development experience, Karen is transitioning into software to build tools that can change the way people live.",
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
  "skills": ["React.js", "React-Redux", "JavaScript", "HTML/CSS", "Ruby on Rails", "SQL", "PostgreSQL", "MATLAB", "Wireframing and Mockups", "Adobe CS", "CAD (Solidworks)", "LabView", "Git/GitHub", "Gantt Charts", "Risk Analysis", "Agile Methodology", "Design of Experiements"],
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

let about_section = document.querySelector('div#about')
left = about_section.getElementsByClassName('left')[0]
let name = document.createElement('h2')
name.innerText = DATA['name']
let title = document.createElement('h2')
title.innerText = DATA['title']
let loc = document.createElement('h2')
loc.innerText = DATA['location']
left.appendChild(name)
left.appendChild(title)
left.appendChild(loc)

right = about_section.getElementsByClassName('right')[0]
let blurb = document.createElement('p')
blurb.className = 'fancy'
blurb.innerText = DATA['about']
right.appendChild(blurb)