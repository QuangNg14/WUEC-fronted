import React, { useContext, useState } from "react";
import "./Blog.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Context as NameContext } from "../../contexts/searchContext";
import { useNavigate } from "react-router-dom";


const Blog = () => {

  return (
    <div>
    
    <div className="sect sect--white">
      <div className="container2">
        <div className="row">
          <h1 className="row__title">
            Our blog
          </h1>
          {/* <h2 className="row__sub">Our hand-picked news for you</h2> */}
        </div>
        <div className="row row--margin">
          <div className="col-md-6 article-pre__col">
            <a href="#" className="article-pre ">
              <div className="article-pre__img article-pre__img--first" />
              <h2 className="article-pre__info">
                <span className="article-pre__cat">Protips • </span><span className="article-pre__aut"> by Ann Timothy</span> <span className="article-pre__date"> - 5 mins read</span>
              </h2>
              <h1 className="article-pre__title">How to improve analytics using few tools in Bricks<span className="article-pre__arrow--purple"> →</span></h1>
            </a>
          </div>
          <div className="col-md-6 article-pre__col">
            <a href="#" className="article-pre ">
              <div className="article-pre__img article-pre__img--second" />
              <h2 className="article-pre__info">
                <span className="article-pre__cat">Pricing • </span><span className="article-pre__aut"> by Josh Ford</span> <span className="article-pre__date"> - 5 mins read</span>
              </h2>
              <h1 className="article-pre__title">Rich Thornett &amp; Dan Coderholm about Dribbble in early 2009<span className="article-pre__arrow--purple">→</span></h1>
            </a>
          </div>    
        </div>
        <div className="row">
          <div className="col-md-6 article-pre__col">
            <a href="#" className="article-pre ">
              <div className="article-pre__img article-pre__img--fourth" />
              <h2 className="article-pre__info">
                <span className="article-pre__cat">Success Stories • </span><span className="article-pre__aut"> by Andrew Lincoln</span> <span className="article-pre__date"> - 5 mins read</span>
              </h2>
              <h1 className="article-pre__title">Steward Butterfield told us about his startup Slack<span className="article-pre__arrow--purple"> →</span></h1>
            </a>
          </div>
          <div className="col-md-6 article-pre__col">
            <a href="#" className="article-pre ">
              <div className="article-pre__img article-pre__img--third" />
              <h2 className="article-pre__info">
                <span className="article-pre__cat">Protips • </span><span className="article-pre__aut"> by Ann Timothy</span> <span className="article-pre__date"> - 5 mins read</span>
              </h2>
              <h1 className="article-pre__title">How to improve analytics using few tools in Bricks<span className="article-pre__arrow--purple"> →</span></h1>
            </a>
          </div>     
        </div>
      </div>
    </div>
  </div>
  );
};

export default Blog;