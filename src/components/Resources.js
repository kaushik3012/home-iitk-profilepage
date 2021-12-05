import React, { Component } from "react";

class Resources extends Component {
  
  render() {
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.resources;
      var resources = this.props.resumeResources.map(function (resources, i) {
        
        return (
          <li className="list-inline-item mx-3" key={i}>
            <div className="text-center resource-tile">
                <a type="button" class="btn-lg btn" href={resources.url} rel="noopener noreferrer" target="_blank" style={{ margin:"20px 10px", fontSize:"2.5rem", fontFamily:"'Caveat', cursive", padding:"15px", borderRadius:"15px"}}>
                  {resources.name}</a>
            </div>
          
        </li>
        );
      });
    }

    return (
      <section id="resource">

        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black"}}>
              <span >{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{resources}</ul>
          </div>
        </div>
        
      </section>
    );
  }
}

export default Resources;
