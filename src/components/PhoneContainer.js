/*
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import phone from "../images/mobile-alt.svg";
import { buyPhone } from "../redux/phone/actionPhone";


function PhoneContainer() {

  const phones = useSelector((state) => {
    console.log(state);
    state = state.phone.phones
    return state;
  });
  const dispatch = useDispatch();

  return (
    <div className="container">
      <img src={phone} alt="phone" />
      <p>
        Disponnible :<span id="count">{phones}</span>
      </p>
      <button onClick={() => dispatch(buyPhone())}>Acheter</button>
    </div>
  );
}

export default PhoneContainer
*/




import React from 'react';
import { connect } from 'react-redux';
import phone from '../images/mobile-alt.svg';
import { buyPhone } from "../redux/phone/actionPhone";


function PhoneContainer(props) {

  console.log(props);

  return (
    <div className="container">
      <img src={phone} alt="phone" />
      <p>
        Disponnible :<span id="count"> {props.phones}</span>
      </p>
      <button onClick={() => props.buyPhone()}>Acheter</button>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    phones: state.phone.phones
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyPhone: () => dispatch(buyPhone())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneContainer);
