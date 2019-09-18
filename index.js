DATA = {
  "name": "Karen Go",
  "title": "Software Engineer",
  "location": "Seattle, WA",
  "about": "Karen is a full stack engineer with a natural curiosity and drive for results. With 10 years of product development experience in the beverage, pharmaceutical, and technology industries, Karen recently graduated from an accelerated web development program with Flatiron School.  Experienced in Ruby and JavaScript, she is transitioning into software to build tools that can change the way people live.",
  "projects": [
    {
      "title": "Capsule Curate",
      "summary": "Single page web application for building and visualizing capsule wardrobes, it is a tool for users to select and pair items to wear as well as suggests an OOTD (outfit of the day) to wear, based on the weather forecast.  Built using the React.js framework, Capsule Curate includes controlled forms and renders data dynamically and instantly.",
      "bullets": [
        "Engineered Ruby on Rails API backend with ActiveRecord Serializers and JWT Authentication",
        "Designed and built frontend using React.js and custom CSS",
        "Implemented Sass to create more manageable CSS",
        "Constructed over 16 class and functional components",
        "Managed state using React-Redux store and dispatch"
      ],
      "github-f": "https://github.com/kargo-k/capsule-curate-client",
      "github-b": "https://github.com/kargo-k/capsule-curate-server",
      "app-link": "https://capsule-curate-client.herokuapp.com/",
      "demo": "https://youtu.be/wRQVGnccpMM",
      "img": "./images/curate-cover.png",
      "img2": "./images/curate-wireframe.jpg"
    },
    {
      "title": "Algorhythm Nation",
      "summary": "Single page web application that allows users to view their Spotify playlists and built new playlists based on specific track features such as energy, valence, and daceability utilizing the Spotify API.",
      "bullets": [
        "Scoped and managed project timeline with a remote team",
        "Focused on server-side Rails API development with endpoints for songs and playlists",
        "Utilized Spotify OAuth and API endpoints to populate user's libraries and search tracks",
        "Styled frontend using custom CSS"
      ],
      "github-f": "https://github.com/kargo-k/algorhythm-client",
      "github-b": "https://github.com/kargo-k/algorhythm-backend2",
      "app-link": "http://algorhythm-nation-front.herokuapp.com/",
      "img": "./images/algorhythm.gif"
    },
    {
      "title": "Capsule v1",
      "summary": "Singe page web application for building and visualizing capsule wardrobes.  As version 1 of the 'Capsule Curate' project, Capsule v1 was completed as a paired project using plain JavaScript.",
      "bullets": [
        "Scraped Uniqlo's Women's Apparel website using Nokogiri",
        "Wrote over 1000 lines of vanilla JavaScript with full CRUD functionality",
        "Manipulated the DOM using plain JavaScript and event listeners"
      ],
      "github-f": "https://github.com/kargo-k/capsule-wardrobe",
      "app-link": "https://kargo-k.github.io/capsule-wardrobe/index.html",
      "img": "./images/capsulev1.gif"
    },
    {
      "title": "Dive Slate",
      "summary": "Web application for scuba divers to take their dive log book with them wherever their underwater travels bring them to.",
      "bullets": [
        "Built using Ruby on Rails on backend and frontend using the MVC pattern",
        "Authored user stories and sketched wiredframes for data flow",
        "Scoped and managed project timeline using Trello",
        "Constructed complex model relationships with multiple join tables"
      ],
      "github-f": "https://github.com/kargo-k/dive-slate-app",
      "img": "./images/diveslate.jpg"
    },
    {
      "title": "Feeding Zeus",
      "summary": "Amazon Alexa Skill to assist user on recalling when they last fed their pet",
      "bullets": [
        "Self-taught implementation of the Alexa Skills Kit and S3",
        "Authored blog series on the process of learning and creating"
      ],
      "github-f": "https://github.com/kargo-k/ask-feeding-zeus",
      "img": "https://miro.medium.com/max/689/1*lw3Dc2ZTsCDDwa_E6mjZOw.png"
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
li.setAttribute('src', './images/linkedin_icon.png')
li.className = 'icon'
li.addEventListener('click', () => window.open('https://www.linkedin.com/in/kargo/', '_blank'))
link_div.appendChild(li)
let gh = document.createElement('img')
gh.setAttribute('src', './images/github_icon.png')
gh.className = 'icon'
gh.addEventListener('click', () => window.open('https://github.com/kargo-k', '_blank'))
link_div.appendChild(gh)

let text = document.createElement('h4')
text.innerText = 'Connect'
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
let wrapper = document.createElement('div')
wrapper.id = 'wrapper'
project_section.appendChild(wrapper)
for (let i = 0; i < DATA['projects'].length; i++) {
  prj_div = document.createElement('div')
  prj_div.className = 'project'
  title = document.createElement('h3')
  title.innerText = DATA['projects'][i]['title']
  prj_div.appendChild(title)

  innerDiv = document.createElement('div')
  innerDiv.className = 'inner-flex-div'
  prj_div.appendChild(innerDiv)

  left = document.createElement('div')
  left.className = 'prj-left'
  innerDiv.appendChild(left)

  buttonDiv = document.createElement('div')
  buttonDiv.id = 'button-div'
  left.appendChild(buttonDiv)

  summary = document.createElement('p')
  summary.innerText = DATA['projects'][i]['summary']
  left.appendChild(summary)

  for (let j = 0; j < DATA['projects'][i]['bullets'].length; j++) {
    b = document.createElement('li')
    b.innerText = DATA['projects'][i]['bullets'][j]
    left.appendChild(b)
  }

  right = document.createElement('div')
  right.className = 'prj-right'
  innerDiv.appendChild(right)




  if (DATA['projects'][i]['demo']) {
    btn = document.createElement('button')
    btn.innerText = 'Video'
    btn.addEventListener('click', () => window.open(`${DATA['projects'][i]['demo']}`, '_blank'))
    buttonDiv.appendChild(btn)
  }

  if (DATA['projects'][i]['github-f']) {
    btn = document.createElement('button')
    btn.innerText = 'Github'
    btn.addEventListener('click', () => window.open(`${DATA['projects'][i]['github-f']}`, '_blank'))
    buttonDiv.appendChild(btn)
  }

  if (DATA['projects'][i]['github-b']) {
    btn = document.createElement('button')
    btn.innerText = 'Github II'
    btn.addEventListener('click', () => window.open(`${DATA['projects'][i]['github-b']}`, '_blank'))
    buttonDiv.appendChild(btn)
  }

  if (DATA['projects'][i]['app-link']) {
    btn = document.createElement('button')
    btn.innerText = 'App'
    btn.addEventListener('click', () => window.open(`${DATA['projects'][i]['app-link']}`, '_blank'))
    buttonDiv.appendChild(btn)
  }

  if (DATA['projects'][i]['img']) {
    img = document.createElement('img')
    img.setAttribute('src', DATA['projects'][i]['img'])
    right.appendChild(img)
  }

  if (DATA['projects'][i]['img2']) {
    img = document.createElement('img')
    img.setAttribute('src', DATA['projects'][i]['img2'])
    right.appendChild(img)
  }

  wrapper.appendChild(prj_div)
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