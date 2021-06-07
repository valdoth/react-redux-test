/*
import React from 'react';
import tele from '../images/tv.svg';
import { useSelector, useDispatch } from "react-redux";
import { buyTv } from "../redux/tv/actionTv";



function TvContainer() {

  const tv = useSelector((state) => state.television.tv);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <img src={tele} alt="tv" />
      <p>
        Disponnible :<span id="count-tv">{tv}</span>
      </p>
      <button onClick={() => dispatch(buyTv())}>Acheter</button>
    </div>
  );
}

export default TvContainer
*/


import React from 'react';
import { connect } from 'react-redux';
import tele from '../images/tv.svg';
import { buyTv } from "../redux/tv/actionTv";


function TvContainer(props) {

  console.log(props);

  return (
    <div className="container">
      <img src={tele} alt="tv" />
      <p>
        Disponnible :<span id="count-tv"> {props.phones}</span>
      </p>
      <button onClick={() => props.buyTv()}>Acheter</button>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    phones: state.television.tv
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyTv: () => dispatch(buyTv())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TvContainer);
