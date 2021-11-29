import React from "react";
import Lottie from "react-lottie";

const GreetingLottie = ({ animationPath, height }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		path: animationPath,
	};

	return (
		<div onClick={() => null}>
			<Lottie options={defaultOptions} height={height}/>
		</div>
	);
};

export default GreetingLottie;
