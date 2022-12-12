import React from "react";
import bankImg from "./images/banking.webp";
function Home() {
  return (
    <div className="card w-75 m-auto ">
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Simplifying Global Finance</h5>
            <p className="card-text">You are Welcomed to Try any Services</p>
            {/* <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p> */}
          </div>
        </div>
        <div className="col-md-4">
          <img src={bankImg} className="img-fluid rounded-start" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Home;
