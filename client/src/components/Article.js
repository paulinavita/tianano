import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const Article = props => {
  const { id, title, slug, excerpt, date_gmt, featured_image } = props;
  return (
    <>
      <div className=" card mb-3">
        <img src={featured_image.source} className="card-img-top" alt={slug} />
        <div className="card-body">
          <Link to={{ pathname: `/${id}`, state: {slug, id } }} >
            <h5
              className="card-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </Link>
          <p key={id} dangerouslySetInnerHTML={{ __html: excerpt }} />
          <p className="card-text">
            <small className="text-muted">
              {moment(date_gmt).format("MMMM Do YYYY, h:mm:ss a")}
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

export default Article;
