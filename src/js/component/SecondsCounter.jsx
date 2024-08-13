import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const SecondsCounter = (props) => {
    console.log(props)
    SecondsCounter.propTypes = {
        digitSeven: PropTypes.number,
        digitSix: PropTypes.number,
        digitFive: PropTypes.number,
        digitFour: PropTypes.number,
        digitThree: PropTypes.number,
        digitTwo: PropTypes.number,
        digitOne: PropTypes.number
      };
    return (
        <div className="d-flex justify-content-center display-1">
            <div className="mx-4 bg-secondary p-5 rounded-3"><i className="far fa-clock"></i></div>
            <div className="mx-4 bg-secondary p-4 py-5 rounded-3">{props.digitSeven % 10}</div>
            <div className="mx-4 bg-secondary p-4 py-5 rounded-3">{props.digitSix % 10}</div>
            <div className="mx-4 bg-secondary p-4 py-5 rounded-3">{props.digitFive % 10}</div>
            <div className="mx-4 bg-secondary p-4 py-5 rounded-3">{props.digitFour % 10}</div>
            <div className="mx-4 bg-secondary p-4 py-5 rounded-3">{props.digitThree % 10}</div>
            <div className="mx-4 bg-secondary p-4 py-5 rounded-3">{props.digitTwo % 10}</div>
            <div className="mx-4 bg-secondary p-4 py-5 rounded-3">{props.digitOne % 10}</div>
        </div>
    );
};

