import React from 'react'
import './AuthorOfTheDay.css'
import { Link } from 'gatsby';

const AuthorOfTheDay = ({data}) => {
  console.log(data);
    const date = new Date();
    const today = date.getDate()
    let item = today;
    const infoAboutPhotographers = data.allMarkdownRemark.edges.map(item => item.node.frontmatter);
    const slugs = data.allMarkdownRemark.edges.map(item => item.node.fields);
    while(item > infoAboutPhotographers.length) {
      item = item - infoAboutPhotographers.length
    }
    const infoAboutPhotographer = infoAboutPhotographers[item-1];
    const slug = slugs[item-1];
          return (
              <>
              <div className="authorOfTheDay" style={{ margin: `20px auto` }}>
                <div className="authorOfTheDay_header">
                  <p>Photographer of the day</p>
                </div>
                <div className="authorOfTheDay_main">
                    <img
                    className="authorOfTheDay_img"
                    src={infoAboutPhotographer.picture}
                    alt="Author's picture"
                    />
                    <div className="authorOfTheDay_info">
                        <h4 className="authorOfTheDay_name">{infoAboutPhotographer.name}</h4>
                        <h5 className="authorOfTheDay_date">{infoAboutPhotographer.birthDate} - {infoAboutPhotographer.deathDate}</h5>
                        <Link to={slug}>
                            <button className="authorOfTheDay_but">Go</button>
                        </Link>
                    </div>
                </div>
              </div>
              </>
          )
  }

  export default AuthorOfTheDay
