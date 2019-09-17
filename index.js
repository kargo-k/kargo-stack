DATA = {
  "name": "Karen Go",
  "title": "Software Engineer",
  "location": "Seattle, WA",
  "about": "Karen is a full stack engineer with a natural curiosity and drive for results. With 10 years of product development experience in the beverage, pharmaceutical, and technology industries, Karen recently graduated from an accelerated web development program with Flatiron School.  Experienced in Ruby and JavaScript, she is transitioning into software to build tools that can change the way people live.",
  "projects": [
    {
      "title": "Capsule Curate",
      "summary": "Single page web application for building and visualizing capsule wardrobes, it is a tool for users to select and pair items to wear as well as suggests an OOTD (outfit of the day) to wear, based on the weather forecast.",
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
      "course": "Biomedical Engineering, BSc",
      "dates": "May 2010"
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


//------------- about section

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
let link_div = document.createElement('div')
left.appendChild(link_div)

let li = document.createElement('img')
li.setAttribute('src', 'linkedin_icon.png')
li.className = 'icon'
li.addEventListener('click', () => window.open('https://www.linkedin.com/in/kargo/', '_blank'))
link_div.appendChild(li)
let gh = document.createElement('img')
gh.setAttribute('src', 'github_icon.png')
gh.className = 'icon'
gh.addEventListener('click', () => window.open('https://github.com/kargo-k', '_blank'))
link_div.appendChild(gh)

let text = document.createElement('h4')
text.innerText = 'Contact'
left.appendChild(text)
let skip = document.querySelector('div#contact')
text.addEventListener('click', () => skip.scrollIntoView())


right = about_section.getElementsByClassName('right')[0]
let blurb = document.createElement('p')
blurb.className = 'fancy'
blurb.innerText = DATA['about']
let div = document.createElement('h1')
div.innerText = '__'
// div.innerText = '• • •'
right.appendChild(blurb)
right.appendChild(div)

// --------------------projects section
// make each project into a div of width vw hide overflow. scrollable like capsule collection. also add button to scroll through?
let project_section = document.querySelector('div#projects')
for (let i = 0; i < DATA['projects'].length; i++) {
  prj_div = document.createElement('div')
  title = document.createElement('h3')
  title.innerText = DATA['projects'][i]['title']
  summary = document.createElement('p')
  summary.innerText = DATA['projects'][i]['summary']
  summary.className = 'fancy'
  prj_div.appendChild(title)
  prj_div.appendChild(summary)
  project_section.appendChild(prj_div)
}




// --------------------knowledge section
let knowledge_section = document.querySelector('div#knowledge')
education = knowledge_section.getElementsByClassName('left')[0]
let newdiv, h2, h3
for (let i = 0; i < DATA['education'].length; i++) {
  newdiv = document.createElement('div')
  newdiv.className = 'education'
  h2 = document.createElement('h2')
  h2.innerText = DATA['education'][i]['course']
  h3 = document.createElement('h3')
  h3.innerText = DATA['education'][i]['school'] + " • " + DATA['education'][i]['dates']
  newdiv.appendChild(h2)
  newdiv.appendChild(h3)
  education.appendChild(newdiv)
}

skills = about_section.getElementsByClassName('right')[0]


// --------------------experience section




// --------------------contact section
let contact_section = document.querySelector('div#contact')
let user = 'karenrgo'
let dom = 'gmail.com'
let linktext = user + '@' + dom
let e = document.createElement('h3')
e.innerHTML = `<a href='mailto:${user}@${dom}'>${linktext}</a>`
contact_section.appendChild(e)