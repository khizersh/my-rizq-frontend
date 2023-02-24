import React, { useEffect, useState } from "react";
import "assets/css/dashboard/stock.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import swal from "sweetalert";
import { BASE_URL } from "utility";
import StockFinder from "./StockFinder";
import { numberWithCommas } from "utility";
import { useHistory } from "react-router-dom";

export const Stock = () => {
  const router = useHistory();
  const [loaded, setLoaded] = useState(false);
  const [freeUser, setFreeUser] = useState(true);
  const [deptRatio, setDepthRatio] = useState(0);
  const [securityRatio, setSecurityRatio] = useState(0);
  const [liquidityRatio, setLiquidityRatio] = useState(0);
  const [shortName, setShortName] = useState("");
  const [isShariah, setIsShariah] = useState(false);
  const [totalDebt, setTotalDepth] = useState("--");
  const [totalAssets, setTotalAssets] = useState("--");
  const [netReceivables, setNetReceivables] = useState("--");
  const [marketCap, setMarketCap] = useState("--");
  const [cash, setCash] = useState("--");
  const [longBusinessSummary, setLongBusinessSummary] = useState("--");

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const fetchData = (symbol) => {
    if (symbol) {
      fetch(BASE_URL + "/stock/yahoo", {
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
          if (data && data.response.financialData && data.response.price) {
            let dep = (
              (Number(data.response.financialData.totalDebt) /
                Number(data.response.price.marketCap)) *
              100
            ).toFixed(0);

            let sec = (
              (Number(data.response.financialData.totalCash) /
                Number(data.response.price.marketCap)) *
              100
            ).toFixed(0);
            let liq = (
              ((Number(data.response.financialData.totalCash) +
                Number(
                  data.response.balanceSheetHistoryQuarterly
                    .balanceSheetStatements[0].netReceivables
                )) /
                Number(
                  data.response.balanceSheetHistoryQuarterly
                    .balanceSheetStatements[0].totalAssets
                )) *
              100
            ).toFixed(0);

            setTotalAssets(
              numberWithCommas(
                data.response.balanceSheetHistoryQuarterly
                  .balanceSheetStatements[0].totalAssets
              )
            );
            setNetReceivables(
              numberWithCommas(
                data.response.balanceSheetHistoryQuarterly
                  .balanceSheetStatements[0].netReceivables
              )
            );
            setTotalDepth(
              numberWithCommas(data.response.financialData.totalDebt)
            );
            setMarketCap(numberWithCommas(data.response.price.marketCap));
            setCash(numberWithCommas(data.response.financialData.totalCash));
            setLongBusinessSummary(
              data.response.assetProfile.longBusinessSummary
            );

            setDepthRatio(dep);
            setSecurityRatio(sec);
            setLiquidityRatio(liq);
            if (dep < 30 && sec < 30 && liq < 30) {
              setIsShariah(true);
            } else {
              setIsShariah(false);
            }
          }
        });
    }
  };

  const fetchData2 = (symbol) => {
    if (symbol) {
      fetch(BASE_URL + "/stock", {
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
            setTotalDepth(
              numberWithCommas(data.response.financialData.totalDebt)
            );
            setMarketCap(
              numberWithCommas(data.response.summaryDetail.marketCap)
            );
            setCash(numberWithCommas(data.response.financialData.totalCash));
            setLongBusinessSummary(
              data.response.summaryProfile.longBusinessSummary
            );

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

  const onClickFollow = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user.freeUser) {
      router.push("/signup?premium=true");
    } else {
      let obj = [
        {
          email: user.email,
          symbol: params.symbol,
        },
      ];

      fetch(BASE_URL + "/follow/save", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && data.status == "0000") {
            swal("Success!", "Followed successfully!", "success").then(
              (m) => {}
            );
          } else if (data && data.status == "9999") {
            swal("Error!", data.message, "error");
          } else {
            swal("Error!", "Something went wrong!", "error");
          }
        });
    }
  };

  useEffect(() => {
    setLoaded(false);
    fetchData(params.symbol);
    let user = localStorage.getItem("user");
    if (user) {
      let userData = JSON.parse(user);
      if (userData.email) {
        if (userData.freeUser) {
          setFreeUser(true);
        } else {
          setFreeUser(false);
        }
      } else {
      }
    } else {
    }
  }, [deptRatio, params.symbol]);

  return (
    <>
      {params.symbol ? (
        loaded ? (
          deptRatio ? (
            <div className="container-fluid mb-5">
              <div className="row card shadow-sm bg-white p-3">
                <div
                  className={`col-12  ${
                    isShariah ? "bg-green-opacity" : "bg-danger-op-2"
                  } border-radius-10`}
                >
                  <div className="row p-2">
                    <div className="col-12 col-lg-4 m-text-center">
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
                    <div className="col-12 col-lg-4 text-right m-text-center">
                      <text className="d-block font-10  text-stock-grey line-height-1">
                        Updated as of January 1 2022
                      </text>
                      <text className="d-block font-10 line-height-1 text-stock-grey">
                        Following AAOIFI standard
                      </text>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-12 text-black mt-2 mb-1">
                Disclaimer: As-salamu alaykum this stock screener is made to the
                best of our ability, there may be errors. Please use this as a
                source of informtion May Allah make it easy for us!
              </p>
              <p className="font-12 text-black  mb-3">{longBusinessSummary}</p>
              {/* FIRST CARD */}
              <div className="row card mt-5 shadow pb-2 mb-5">
                <div className="card-header bg-white shadow-lg">
                  <h5 className="font-mon weight-600 d-inline text-black m-font-14">
                    Quantitative Screeing
                  </h5>{" "}
                  <text
                    className="cursor-pointer border-radius-10 pills ml-3 px-2 m-font-10"
                    onClick={onClickFollow}
                  >
                    <img
                      style={{ marginTop: "-1px" }}
                      className="width-accept"
                      src={require("assets/img/dashboard/plus.png")}
                    />{" "}
                    Follow
                  </text>
                  {isShariah ? (
                    <text className="border-radius-10  bg-green font-10 float-right m-mt-2 text-white px-3">
                      Pass
                    </text>
                  ) : (
                    <text className="border-radius-10  bg-red font-10 float-right m-mt-2 text-white px-3">
                      Fail
                    </text>
                  )}{" "}
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
                            pathColor: `${
                              deptRatio > 29 ? "#FF0000" : "#1EC372"
                            }`,
                            textColor: "#000000",
                            trailColor: "#fff",
                            backgroundColor: "#3e98c7",
                          })}
                        />
                        <img
                          src={require(`assets/img/dashboard/${
                            deptRatio < 30 ? "accept.png" : "reject.png"
                          }`)}
                          width="10px"
                        />
                        <text> Interest-bearing Debt Ratio</text>
                      </div>
                      <text className="font-12 text-stock-grey mt-2  m-d-block">
                        Total Debt / Market Cap Must be less than 30%
                      </text>
                      <text className="font-12 text-stock-grey  m-d-block text-left">
                        Total Dept : {totalDebt}
                      </text>
                      <text className="font-12 text-stock-grey mb-3  m-d-block text-left">
                        Market Capital : {marketCap}
                      </text>
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
                            pathColor: `${
                              securityRatio > 29 ? "#FF0000" : "#1EC372"
                            }`,
                            textColor: "#000000",
                            trailColor: "#fff",
                            backgroundColor: "#3e98c7",
                          })}
                        />
                        <img
                          src={require(`assets/img/dashboard/${
                            securityRatio < 30 ? "accept.png" : "reject.png"
                          }`)}
                          width="10px"
                        />
                        <text> Interest-bearing Securities Ratio</text>
                      </div>
                      <text className="font-12 text-stock-grey mt-2 mb-3 m-d-block">
                        (Cash + Cash Equivalents + Deposits) / Market Cap Must
                        be less than 30%
                      </text>
                      <text className="font-12 text-stock-grey   m-d-block text-left">
                        Total Cash : {cash}
                      </text>
                      <text className="font-12 text-stock-grey mb-3  m-d-block text-left">
                        Market Capital : {marketCap}
                      </text>
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
                            pathColor: `${
                              liquidityRatio > 29 ? "#FF0000" : "#1EC372"
                            }`,
                            textColor: "#000000",
                            trailColor: "#fff",
                            backgroundColor: "#3e98c7",
                          })}
                        />
                        <img
                          src={require(`assets/img/dashboard/${
                            liquidityRatio < 30 ? "accept.png" : "reject.png"
                          }`)}
                          width="10px"
                        />
                        <text> Liquidity Ratio</text>
                      </div>
                      <text className="font-12 text-stock-grey mt-2 mb-3 m-d-block">
                        (Cash + Cash Equivalents + Accounts Receivable) / Total
                        Assets Must be less than 30%
                      </text>
                      <text className="font-12 text-stock-grey   m-d-block text-left">
                        Total Cash : {cash}
                      </text>
                      <text className="font-12 text-stock-grey   m-d-block text-left">
                        Account Receivables : {netReceivables}
                      </text>
                      <text className="font-12 text-stock-grey mb-3  m-d-block text-left">
                        Total Assets : {totalAssets}
                      </text>
                    </div>
                  </div>
                </div>
                <div className="col-12 d--d-block">
                  <div className="row">
                    <div className="col-4">
                      <text className="font-12 text-stock-grey mt-2 mb-3">
                        Total Debt / Market Cap Must be less than 30%
                      </text>
                      <text className="d-block font-12 text-stock-grey mt-2 ">
                        Total Dept : {totalDebt}
                      </text>
                      <text className="d-block font-12 text-stock-grey  mb-3">
                        Market Capital : {marketCap}
                      </text>
                    </div>
                    <div className="col-4">
                      <text className="font-12 text-stock-grey mt-2 mb-3">
                        (Cash + Cash Equivalents + Deposits) / Market Cap Must
                        be less than 30%
                      </text>
                      <text className="d-block font-12 text-stock-grey mt-2 ">
                        Total Cash : {cash}
                      </text>
                      <text className="d-block font-12 text-stock-grey  mb-3">
                        Market Capital : {marketCap}
                      </text>
                    </div>
                    <div className="col-4">
                      <text className="font-12 text-stock-grey mt-2 mb-3">
                        (Cash + Cash Equivalents + Accounts Receivable) / Total
                        Assets Must be less than 30%
                      </text>
                      <text className="d-block font-12 text-stock-grey mt-2 ">
                        Total Cash : {cash}
                      </text>
                      <text className="d-block font-12 text-stock-grey">
                        Account Receivables : {netReceivables}
                      </text>
                      <text className="d-block font-12 text-stock-grey">
                        Total Assets : {totalAssets}
                      </text>
                    </div>
                  </div>
                </div>
              </div>
              {/* SECOND CARD */}
              <div className="row card shadow pb-2 margin-bottom">
                <div className="card-header bg-white shadow-lg">
                  <h5 className="font-mon weight-600 d-inline text-black m-font-14">
                    Qualitative Screeing
                  </h5>{" "}
                  <text
                    className="cursor-pointer border-radius-10 pills ml-3 px-2 m-font-10"
                    onClick={onClickFollow}
                  >
                    <img
                      style={{ marginTop: "-1px" }}
                      className="width-accept"
                      src={require("assets/img/dashboard/plus.png")}
                    />{" "}
                    Follow
                  </text>
                  {isShariah ? (
                    <text className="border-radius-10  bg-green font-10 float-right m-mt-2 text-white px-3">
                      Pass
                    </text>
                  ) : (
                    <text className="border-radius-10  bg-red font-10 float-right m-mt-2 text-white px-3">
                      Fail
                    </text>
                  )}{" "}
                </div>
                <div className="card-body">
                  {/* <div
                    className={`${
                      isShariah ? "bg-green-opacity" : "bg-danger-op-2"
                    } border-radius-5 d-inline p-2`}
                  >
                    <text className="font-mon">
                      <img
                        className="pr-1"
                        style={{ marginTop: "-1px" }}
                        src={require(`assets/img/dashboard/${
                          isShariah ? "warning.png" : "red-warning.png"
                        }`)}
                      />
                      Revenue
                    </text>
                  </div> */}
                  {/* <div className="progress mt-3">
                    <div
                      className={`progress-bar ${
                        isShariah ? "bg-success" : "bg-danger"
                      }  w-100`}
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div> */}
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-lg-4 col-12">
                      <div className=" text-center my-4">
                        <img
                          src={require("assets/img/dashboard/construction.png")}
                          className=""
                          alt="Salam img"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 col-12 text-center">
                      <p
                        className="text-center font-poppins font-17 px-5 text-black"
                        style={{ lineHeight: "30px" }}
                      >
                        The  <b className="weight-600">Qualitative Screening</b> feature is still under
                        construction we want to ensure this feature is ready
                        before we push to production! Please bare with us Jazāk
                        Allāhu Khayran{" "}
                      </p>
                      <div className=" text-center my-4">
                        <img
                          src={require("assets/img/blog/leaf.png")}
                          className=""
                          width={"50px"}
                          alt="Salam img"
                        />
                      </div>
                      <div className="d-flex justify-content-center w-100 text-center">
                        <input
                          type={"text"}
                          className="form-control border-15 w-50 btn-stock "
                          placeholder="Type Your Email Account To Get Notified"
                        />
                        <button className="btn btn-stock ml-3 text-black">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-12">
                  <div className="row mb-4">
                    <div className="col-12 col-lg-4 text-center m-mb-2">
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
                    <div className="col-12 col-lg-4 text-center m-mb-2">
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
                    <div className="col-12 col-lg-4 text-center m-mb-2">
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
                    <div className="col-12 col-lg-7">
                      <text className="font-12  mt-2 mb-3 font-mon lint-height text-stock-grey">
                        Organizations are only to be considered compliant for
                        the
                        <b> Qualitative Screening</b> if the cumulative revenue
                        from non-compliant activities and non-operating interest
                        income does not exceed 5% of their total income. Look
                        into the detaild results to detrmine wht non-compliant
                        activities are
                      </text>
                    </div>
                    <div className="col-12 col-lg-5 text-center">
                      <button className="btn btn-secondary w-60 m-ml-5 m-font-10 m-mt-2">
                        View detailed results{" "}
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          ) : (
            <div className="text-center text-black">No Data Found!</div>
          )
        ) : (
          <div className="text-center text-black">Loading...</div>
        )
      ) : (
        <StockFinder />
      )}
    </>
  );
};
