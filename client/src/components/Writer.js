import React from "react";
import "../App.css";

export default function Writer(props) {
  const { display_name, avatar_url } = props;
  return (
    <div className="container-fluid pt-3">
      <div className="row justify-content-center">
        <div className="col-md-1 ">
          <img className="writer-img" src={avatar_url} alt={display_name} />
        </div>
        <div style={{ margin: "auto" }} className=" col-md-11 ">
          <p className="py-0 my-0">Written by :</p>
          <p>{display_name}</p>
        </div>
      </div>
    </div>
  );
}
