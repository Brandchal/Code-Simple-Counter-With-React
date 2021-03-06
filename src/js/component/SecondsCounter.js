import React from "react";
import PropTypes from "prop-types";
import "../../styles/simpleCounter.css";

export function SecondsCounter(props) {
	let one = props.seconds;
	let two = 0;
	let three = 0;
	let four = 0;
	let five = 0;
	let six = 0;

	if (one > 9) {
		two = Math.trunc(props.seconds / 10);
		one = props.seconds % 10;

		if (two > 9) {
			three = Math.trunc(two / 10);
			two = two % 10;

			if (three > 9) {
				four = Math.trunc(three / 10);
				three = three % 10;

				if (four > 9) {
					five = Math.trunc(four / 10);
					four = four % 10;

					if (five > 9) {
						six = Math.trunc(five / 10);
						five = five % 10;
					}
				}
			}
		}
	}

	return (
		<div className="counter">
			<div className="d-inline-block fs-1">
				<i className="fas fa-stopwatch"></i>
			</div>
			<div className="d-inline-block fs-1">{six}</div>
			<div className="d-inline-block fs-1">{five}</div>
			<div className="d-inline-block fs-1">{four}</div>
			<div className="d-inline-block fs-1">{three}</div>
			<div className="d-inline-block fs-1">{two}</div>
			<div className="d-inline-block fs-1">{one}</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};
