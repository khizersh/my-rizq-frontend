import React,{useState} from "react";
import "assets/css/dashboard/stock.css";
import "assets/css/dashboard/feedback.css";
import "assets/css/home/home.css";
import { useHistory } from "react-router-dom";


const StockFinder = () => {
  let router = useHistory();

  const [text , setText] = useState("")
  const onClick = () => {

    if(text){
      router.push("/dashboard/halal-stock-search?symbol=" + text)
    }

  }

  return (
    <div className="container-fluid m-p-0">
      <div className="row">
        <div className="col-12">
          <div className="card mb-3">
            <div className="card-header bg-white shadow d-flex justify-center">
                <button className="btn bg-green text-white w-50 btn-mbl">Search Companies</button>
                <button className="btn btn-secondary w-50 btn-mbl">Advance Search</button>
            </div>
            <div className="text-center w-100 mt-4">
                <div className="padding-search">
                    <h4 className="weight-700 font-mon text-black my-3">Halal Stock Finder</h4>
                    <div className=" input-group mb-3 text-center bg-white shadow">
                        <input type="text" className="form-control" placeholder="Serach Stocks & Determine Shariah Compliance" onChange={(e) => setText(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append ">
                            <button className="btn bg-green text-white" type="button" onClick={onClick}>Search</button>
                        </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockFinder;
