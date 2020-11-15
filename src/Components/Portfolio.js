import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    let projects;

    if(this.props.data){
      projects = this.props.data.projects.map(function(projects){
        const projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon">
                <a href={projects.url} title={projects.title} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-link"></i>
                </a>
                <a href={projects.repo} title={projects.title} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                </div>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>My Projects</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
