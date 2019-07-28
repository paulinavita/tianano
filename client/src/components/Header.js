import React from "react";
import { Link, withRouter } from "react-router-dom";

const Header = props => {
  const { match } = props;
  console.log(match);

  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">TECHINASIA</h1>
        <p className="lead">Your first daily source for tech news</p>
        <hr className="my-4" />
        {match.path === "/" ? null : <Link to={"/"}> Back to Home</Link>}
      </div>
    </>
  );
};

export default withRouter(Header);
