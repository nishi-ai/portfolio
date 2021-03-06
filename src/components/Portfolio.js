import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
          console.log('pro', projects)
        var projectImage = 'images/'+projects.image;
        return <div key={projects.title} className="col-md-4 portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><FontAwesomeIcon icon={['fas', 'link']} /></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;