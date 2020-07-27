import React from "react";
import "../styles/Search.css";

const Search = () => {
    return (
        <div className="search bg-light">
        <div className="input-group col-lg-4 mx-auto my-4">
            <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fas fa-search mr-2"> </i> Search </span>
            </div>
            <input type="text" className="form-control" aria-describedby="search" placeholder="Name"></input>
        </div>
        </div>
    );
}
export default Search;