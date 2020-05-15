import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import SmurfCard from "../SmurfCard";

import { smurfs as actions } from "../../store/actions";
const {
  fetchSmurfsStart,
  fetchSmurfsSuccess,
  addSmurfStart,
  addSmurfSuccess,
} = actions;

const SmurfList = (props) => {
  const {
    smurfs,
    isFetching,
    isPosting,
    fetchSmurfsStart,
    fetchSmurfsSuccess,
    addSmurfStart,
    addSmurfSuccess,
  } = props;

  useEffect(() => {
    fetchSmurfsStart();
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        fetchSmurfsSuccess(res.data);
      })
      .catch((err) => {
        debugger;
      });
  }, []);
  return (
    <div>
      {smurfs && (
        <div>
          {smurfs.map((x) => {
            return <SmurfCard smurf={x} key={x.id} />;
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.smurfs;
};

export default connect(mapStateToProps, {
  fetchSmurfsStart,
  fetchSmurfsSuccess,
  addSmurfStart,
  addSmurfSuccess,
})(SmurfList);
