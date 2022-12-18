import React, { useState, useEffect } from "react";
import "assets/css/dashboard/stock.css";
import "assets/css/dashboard/feedback.css";
import "assets/css/home/home.css";

const Feedback = () => {
  const [rated, setRate] = useState(0);
  const [review, setReview] = useState(0);

  const ratings = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  };

 

  useEffect(() => {}, [rated , review]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mb-3">
          <div className="card">
            <div className="card-header bg-white shadow-lg text-center">
              <h5 className="font-poppins text-black weight-600 mb--1">
                Feedback
              </h5>{" "}
              <text className="font-12">
                Help improve MyRizq by submitting feature requests,bug
                reports,or ideas{" "}
              </text>
            </div>
            <div className="card-body mb-5">
              <text className="weight-500">Your Thoughts?</text>
              <div className="form-group bg-white shadow-sm">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="MyRizq can iprove by..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-white shadow text-center">
              <h5 className="font-poppins text-black weight-500">
                How likely would you refer MyRizq?
              </h5>{" "}
            </div>
            <div className="card-body mb-5 d-flex justify-center">
              {ratings().length > 0 ? (
                ratings().map((rate, index) => (
                  <span
                    onClick={() => setRate(rate)}
                    className={`border-radius-10 shadow px-4 cursor-pointer ${
                      rated == rate ? "active-rate" : "bg-white"
                    }  weight-600`}
                  >
                    {rate}
                  </span>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card py-3">
            <div className="card-header bg-white shadow-lg text-center">
              <h5 className="font-poppins text-black weight-600 mb--1">
                Review
              </h5>{" "}
              <text className="font-12">Leave a review!</text>
            </div>
            <div className="card-body mb-1 d-flex justify-center">
              {ratings().length > 0 ? (
                ratings().map((rate, index) => (
                  <span
                    onClick={() => setReview(rate)}
                    className={`border-radius-10 shadow px-4 cursor-pointer ${
                      review == rate ? "active-rate" : "bg-white"
                    }  weight-600`}
                  >
                    {rate}
                  </span>
                ))
              ) : (
                <></>
              )}
              <div className="form-group bg-white shadow-sm"></div>
            </div>
            <div className="mx-3">
              <textarea
                className="form-control bg-white shadow-sm"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Thoughts?"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12  my-3 text-center">
            <button className="btn bg-green text-white">SEND   <i class="fa fa-angle-right" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
