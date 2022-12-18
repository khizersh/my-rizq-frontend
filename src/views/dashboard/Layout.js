import React, { useState , useEffect } from "react";
import "assets/css/dashboard/layout.css";
import "assets/css/home/home.css";
import { FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";

export const Layout = (props) => {
  const [selected, setSelected] = useState("halal-stock-search");
  const [page, setPage] = useState("");

  function getList() {
    return [
      {
        key: "halal-stock-search",
        url: "/dashboard/halal-stock-search",
        name: "Halal Stock Search",
        icon: "fa fa-line-chart",
        active: true,
        hr: false,
      },
      {
        key: "stock-finder",
        url: "/dashboard/stock-finder",
        name: "Stock Finder",
        icon: "fa fa-pie-chart",
        active: false,
        hr: false,
      },
      {
        key: "budgeting-tool",
        url: "/dashboard/budgeting-tool",
        name: "Budgeting Tool",
        icon: "fa fa-calculator",
        active: false,
        hr: false,
      },
      {
        key: "watchlist",
        url: "/dashboard/watchlist",
        name: "Watchlist",
        icon: "fa fa-money",
        active: false,
        hr: false,
      },
      {
        key: "feedback",
        url: "/dashboard/feedback",
        name: "Feedback",
        icon: "fa fa-commenting",
        active: false,
        hr: false,
      },
      {
        key: "settings",
        url: "/dashboard/settings",
        name: "Settings",
        icon: "fa fa-cog",
        active: false,
        hr: true,
      },
      {
        key: "subscription",
        url: "/dashboard/subscription",
        name: "Subscription",
        icon: "fa fa-users",
        active: false,
        hr: false,
      },
      {
        key: "logout",
        url: "/dashboard/logout",
        name: "Logout",
        icon: "fa fa-sign-out",
        active: false,
        hr: false,
      },
    ];
  }

  function onClick(sidebar) {
    setSelected(sidebar.key);
  }

  function getPageNameByKey(key){
    let name = getList().find(m => m.key == key);
    if(name){
      return name.name;
    }else{
      return "";
    }
  }

  useEffect(() => {
    setPage(getPageNameByKey(selected));
  }, [selected])

  return (
    <>
      <header>
        {/* navbar */}
        <div className="container-fluid w-100 position-sticky bg-white shadow-sm">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-10 h-50px pt-2">
              <div className="row">
                <div className="col-4">
                  <p className="weight-700 text-black ml-2">{page}</p>
                </div>
                <div className="col-8 text-right">
                  <span className="pr-4">
                    <Input
                      placeholder="Search"
                      type="text"
                      className="bg-transparent d-inline w-30"
                      style={{ maxHeight: "30px" }}
                    />
                    <i className="fa fa-search px-3"></i>
                    <i className="fa fa-bell" aria-hidden="true"></i>
                  </span>
                  <span className="border-left pl-4">
                    <text className="font-poppins weight-600">
                      Mohammad Faris
                    </text>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sidebar */}
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush  mt-2">
              <img
                className="pl-3 mb-4"
                src={require("assets/img/brand/logo.png")}
                width="150px"
              />
              {getList().length > 0 ? (
                getList().map((side, ind) => {
                  return (
                    <>
                      <Link className="text-black" to={side.url}>
                        <div
                          onClick={() => onClick(side)}
                          className={`list-group-item list-group-item-action py-2 ripple ${
                            side.key == selected ? "active" : ""
                          } ${side.hr ? "border-bottom mt-3" : "border-none"} `}
                        >
                          <i
                            className={`${side.icon} pr-2`}
                            aria-hidden="true"
                          ></i>
                          <span>{side.name}</span>
                        </div>
                      </Link>
                    </>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </div>
        </nav>
      </header>

      <div style={{ marginTop: "58px" }} className="container-fluid">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-10 w-100">{props.children}</div>
        </div>
      </div>
    </>
  );
};
