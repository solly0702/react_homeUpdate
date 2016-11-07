import React from "react";

const cardFieldGroup = (props) => {
  const { img, title, link, link_desc, contaxt } = props;

  return (
    <div class="row" id="project">
      <div class="col m8 s10 offset-m2 offset-s1">
        <div class="card hoverable">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src={img} />
          </div>
          <div class="card-content">
            <span class="card-title activator">{title}<i class="material-icons right">more_vert</i></span>
            <p><a href={link}>{link_desc}</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title">{title}<i class="material-icons right">close</i></span>
            {contaxt()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default cardFieldGroup;
