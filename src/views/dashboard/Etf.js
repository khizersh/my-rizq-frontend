import React, { useState, useEffect } from "react";
import "assets/css/dashboard/stock.css";
import "assets/css/dashboard/feedback.css";
import "assets/css/dashboard/budgeting-tool.css";
import "assets/css/home/home.css";
import swal from "sweetalert";
import { BASE_URL } from "utility";
import etfImage from "assets/img/dashboard/etf.png";
import salamImage from "assets/img/dashboard/salam.png";

const Etf = () => {
  const [email, setEmail] = useState("");

  const onClick = () => {
    let body = [{ email }];

    fetch(BASE_URL + "/newsletter/", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.status == "0000") {
          swal("Success!", "We will notify you!", "success");
        } else {
          swal("Error!", data.message, "error");
        }
        // setLoaded(true)
        // if(data && data.response.financialData && data.response.summaryDetail){

        // }
      });
  };


  useEffect(() => {
    console.log("etfImage : ", etfImage);
    console.log("salamImage : ", salamImage);
  }, []);

  return (
    <div className="container-fluid m-p-0">
      <div className="row">
        <div className="col-12">
          <div className="card mb-3 shadow">
            <div className="card-header bg-white shadow text-center">
              <img
                // src={require("assets/img/dashboard/salam.png")}
                src={require("assets/img/dashboard/etf.png")}
                className="salam-img"
                alt="Salam img"
              />
              <text className="font-mon weight-600 text-black d-inline font-20">
                As-salamu alaykum
              </text>
            </div>
            <div className="text-center w-100 mt-4">
              <div className="">
                <h3 className="weight-700 font-mon text-green mt-3 font-mon">
                  Halal ETF Summary Guide
                </h3>
                <a
                  href="https://docs.google.com/spreadsheets/d/1izx9bTAoTKK4_YelXJcqlc9RAvsQmGFwm8mt-BNlQgU/edit#gid=637576221"
                  target={"_blank"}
                  className="text-black weight-500 font-12 font-mon onHoverBlack"
                >
                  <u>
                    click this link to see a detail breakdown and analysis of
                    all the Halal ETFs in the market
                  </u>
                </a>

                <div className="mt-2">
                  <img
                    src={require("assets/img/dashboard/etf.png")}
                    // src={}
                    alt="Salam img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Etf;
