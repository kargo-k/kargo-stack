// View 1 - Intro
let root = document.querySelector('div')
let title = document.createElement('h1')
root.appendChild(title)
title.innerText = 'Karen Go - Full Stack'
let blurb = document.createElement('p')
blurb.innerText = 'Karen is a product focused full stack software engineer with a natural curiosity and drive for results.  With 10 years of product development experience, Karen is transitioning into software to build tools that change the way people live.'
root.appendChild(blurb)


// View 2 - Projects
let project_div = document.getElementById('projects')
let title1 = document.createElement('h2')
title1.innerText = "Capsule Curate"
project_div.appendChild(title1)
let about1 = document.createElement('p')
about1.innerText = "Capsule Curate is a single page web application for building and visualizing capsule wardrobes.  Built using Ruby on Rails API and React.js, this web app utilizes Nokogiri, React-Redux, and SCSS."
project_div.appendChild(about1)



// View 3 - Knowledge (Education and Technical Skills)




// View 4 - Past Job Experiences




// Contact Information
let contact_div = document.getElementById('contact')
let email = document.createElement('button')
email.innerText = 'Email'
contact_div.appendChild(email)
let github = document.createElement('button')
github.innerText = 'GitHub'
contact_div.appendChild(github)