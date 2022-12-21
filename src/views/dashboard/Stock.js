import React, { useEffect, useState } from "react";
import "assets/css/dashboard/stock.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Stock = () => {
  const percentage = 66;
  const greenStroke = "#1EC372";

  const [loaded, setLoaded] = useState(false);
  const [deptRatio, setDepthRatio] = useState(0);
  const [securityRatio, setSecurityRatio] = useState(0);
  const [liquidityRatio, setLiquidityRatio] = useState(0);
  const [shortName, setShortName] = useState("");
  const [isShariah, setIsShariah] = useState(false);

  const fetchData = (symbol) => {
    if (symbol) {
      fetch("http://localhost:3001/stock", {
        method: "POST",
        body: JSON.stringify({
          symbol: symbol,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setLoaded(true);
          if (data && data.response.price) {
            setShortName(data.response.price.shortName);
          }
          if (
            data &&
            data.response.financialData &&
            data.response.summaryDetail
          ) {
            let dep = parseFloat(
              data.response.financialData.totalDebt /
                data.response.summaryDetail.marketCap
            ).toFixed(2);
            let sec = parseFloat(
              data.response.financialData.totalCash /
                data.response.summaryDetail.marketCap
            ).toFixed(2);
            let liq = parseFloat(
              data.response.financialData.totalCash /
                data.response.summaryDetail.marketCap
            ).toFixed(2);
            setDepthRatio(dep);
            setSecurityRatio(sec);
            setLiquidityRatio(liq);
            if (dep < 30 && sec < 30 && liq < 30) {
              setIsShariah(true);
            }
          }
        });
    }
  };

  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    fetchData(params.symbol);
  }, [deptRatio]);

  return (
    <>
      {loaded ? (
        deptRatio ? (
          <div className="container-fluid mb-5">
            <div className="row card shadow-sm bg-white p-3">
              <div
                className={`col-12  ${
                  isShariah ? "bg-green-opacity" : "bg-danger-op-2"
                } border-radius-10`}
              >
                <div className="row p-2">
                  <div className="col-12 col-lg-4">
                    <img
                      src={require(`assets/img/dashboard/${
                        isShariah ? "accept.png" : "reject.png"
                      }`)}
                      width="30px"
                    />
                    <p
                      className={`${
                        isShariah ? "bg-green" : "bg-danger"
                      } border-radius-10 weight-500 text-white d-inline padding-shariah ml-2`}
                    >
                      {isShariah
                        ? "Shariah Compliant"
                        : "Shariah Non-Compliant"}
                    </p>
                  </div>
                  <div className="col-12 col-lg-4 font-mon text-center">
                    <text className="weight-600" style={{ fontSize: "15px" }}>
                      {shortName}
                    </text>{" "}
                  </div>
                  <div className="col-12 col-lg-4 text-right">
                    <text className="d-block font-10  text-stock-grey line-height-1">
                      Updated as of January 1 2022
                    </text>
                    <text className="d-block font-10 line-height-1 text-stock-grey">
                      Followinf AAQIFI standard
                    </text>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-12 text-black mt-2 mb-3">
              Disclaimer: As-salamu alaykum this stock screener is made to the
              best of our ability, there may be errors. Please use this as a
              source of informtion May Allah make it easy for us!
            </p>
            {/* FIRST CARD */}
            <div className="row card shadow pb-2">
              <div className="card-header bg-white shadow-lg">
                <h5 className="font-mon weight-600 d-inline text-black">
                  Qualitative Screeing
                </h5>{" "}
                <text className="border-radius-10 pills ml-3 px-2">
                  <img
                    width={"13px"}
                    style={{ marginTop: "-1px" }}
                    src={require("assets/img/dashboard/plus.png")}
                  />{" "}
                  Follow
                </text>{" "}
                <text className="border-radius-10  bg-green font-10 float-right mt-2 text-white px-3">
                  Pass
                </text>{" "}
              </div>
              <div className="card-body">
                <div className="bg-green-opacity border-radius-5 d-inline p-2">
                  <text className="font-mon">
                    <img
                      className="pr-1"
                      style={{ marginTop: "-1px" }}
                      src={require("assets/img/dashboard/warning.png")}
                    />
                    Revenue
                  </text>
                </div>
                <div className="progress mt-3">
                  <div
                    className="progress-bar bg-success w-100"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="col-12">
                <div className="row mb-4">
                  <div className="col-12 col-lg-4 text-center ">
                    <div className="comp-1st-card padding-circle  border-radius-5">
                      <CircularProgressbar
                        value={100}
                        text={100 + "%"}
                        strokeWidth={5}
                        styles={buildStyles({
                          rotation: 0.5,
                          textSize: "16px",
                          pathTransitionDuration: 0.5,

                          background: true,
                          backgroundPadding: 40,
                          pathColor: "#1EC372",
                          textColor: "#000000",
                          trailColor: "#fff",
                          backgroundColor: "#3e98c7",
                        })}
                      />
                      <text>COMPLIANT</text>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 text-center ">
                    <div className="comp-2nd-card padding-circle  border-radius-5">
                      <CircularProgressbar
                        value={4}
                        text={4 + "%"}
                        strokeWidth={5}
                        styles={buildStyles({
                          rotation: 0.5,
                          textSize: "16px",
                          pathTransitionDuration: 0.5,
                          pathColor: `#F0A439`,
                          textColor: "#000000",
                          trailColor: "#fff",
                          backgroundColor: "#3e98c7",
                        })}
                      />
                      <text>QUESTIONABLE</text>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 text-center ">
                    <div className="comp-3rd-card padding-circle  border-radius-5">
                      <CircularProgressbar
                        value={10}
                        text={10 + "%"}
                        strokeWidth={5}
                        styles={buildStyles({
                          rotation: 0.5,
                          textSize: "16px",
                          pathTransitionDuration: 0.5,
                          pathColor: `#FF0000`,
                          textColor: "#000000",
                          trailColor: "#fff",
                          backgroundColor: "#3e98c7",
                        })}
                      />
                      <text>NON-COMPLIANT</text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-7">
                    <text className="font-12  mt-2 mb-3 font-mon lint-height text-stock-grey">
                      Organizations are only to be considered compliant for the
                      <b> Qualitative Screening</b> if the cumulative revenue
                      from non-compliant activities and non-operating interest
                      income does not exceed 5% of their total income. Look into
                      the detaild results to detrmine wht non-compliant
                      activities are
                    </text>
                  </div>
                  <div className="col-5 text-center">
                    <button className="btn btn-secondary w-60 ml-5">
                      View detailed results{" "}
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* SECOND CARD */}
            <div className="row card mt-5 shadow pb-2">
              <div className="card-header bg-white shadow-lg">
                <h5 className="font-mon weight-600 d-inline text-black">
                  Quantitative Screeing
                </h5>{" "}
                <text className="border-radius-10 pills ml-3 px-2">
                  <img
                    width={"13px"}
                    style={{ marginTop: "-1px" }}
                    src={require("assets/img/dashboard/plus.png")}
                  />{" "}
                  Follow
                </text>{" "}
                <text className="border-radius-10  bg-green font-10 float-right mt-2 text-white px-3">
                  Pass
                </text>{" "}
              </div>
              <div className="card-body"></div>
              <div className="col-12">
                <div className="row mb-4">
                  <div className="col-12 col-lg-4 text-center ">
                    <div className="comp-1st-card padding-circle  border-radius-5">
                      <CircularProgressbar
                        value={deptRatio}
                        text={deptRatio + "%"}
                        strokeWidth={5}
                        styles={buildStyles({
                          rotation: 0.5,
                          textSize: "16px",
                          pathTransitionDuration: 0.5,
                          pathColor: "#1EC372",
                          textColor: "#000000",
                          trailColor: "#fff",
                          backgroundColor: "#3e98c7",
                        })}
                      />
                      <img
                        src={require("assets/img/dashboard/accept.png")}
                        width="10px"
                      />
                      <text> Interest-bearing Debt Ratio</text>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 text-center ">
                    <div className="comp-1st-card padding-circle  border-radius-5">
                      <CircularProgressbar
                        value={securityRatio}
                        text={securityRatio + "%"}
                        strokeWidth={5}
                        styles={buildStyles({
                          rotation: 0.5,
                          textSize: "16px",
                          pathTransitionDuration: 0.5,
                          pathColor: "#1EC372",
                          textColor: "#000000",
                          trailColor: "#fff",
                          backgroundColor: "#3e98c7",
                        })}
                      />
                      <img
                        src={require("assets/img/dashboard/accept.png")}
                        width="10px"
                      />
                      <text> Interest-bearing Securities Ratio</text>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 text-center ">
                    <div className="comp-1st-card padding-circle  border-radius-5">
                      <CircularProgressbar
                        value={liquidityRatio}
                        strokeWidth={5}
                        text={liquidityRatio + "%"}
                        styles={buildStyles({
                          rotation: 0.5,
                          textSize: "16px",
                          pathTransitionDuration: 0.5,
                          pathColor: "#1EC372",
                          textColor: "#000000",
                          trailColor: "#fff",
                          backgroundColor: "#3e98c7",
                        })}
                      />
                      <img
                        src={require("assets/img/dashboard/accept.png")}
                        width="10px"
                      />
                      <text> Liquidity Ratio</text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-4">
                    <text className="font-12 text-stock-grey mt-2 mb-3">
                      Total Debt / Market Cap Must be less than 30%
                    </text>
                  </div>
                  <div className="col-4">
                    <text className="font-12 text-stock-grey mt-2 mb-3">
                      (Cash + Cash Equivalents + Deposits) / Market Cap Must be
                      less than 30%
                    </text>
                  </div>
                  <div className="col-4">
                    <text className="font-12 text-stock-grey mt-2 mb-3">
                      (Cash + Cash Equivalents + Accounts Receivable) / Total
                      Assets Must be less than 30%
                    </text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-black">No Data Found!</div>
        )
      ) : (
        <div className="text-center text-black">Loading...</div>
      )}
    </>
  );
};
