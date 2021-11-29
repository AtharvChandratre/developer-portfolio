import React from "react";
import { leadership } from "../portfolio";
import { Container, Row } from "reactstrap";

import { Fade } from "react-reveal";

import LeadershipCard from "../components/LeadershipCard";

const LeadershipExperience = () => {
	return (
		<section className="bg-gradient-info pt-2 pb-4" id="leadership-experience">
			<Container>
				<Fade bottom duration={1000} distance="40px">
					<div className="d-flex p-4 align-items-center">
						<div>
							<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                                <span className="iconify" data-icon="fa-solid:users"></span>
							</div>
						</div>
						<div className="pl-4 pt-2">
							<h4 className="display-3 text-white">Leadership Experience</h4>
						</div>
					</div>
					<Row className="row-grid align-items-center">
						{leadership.map((data, i) => {
							return <LeadershipCard key={i} data={data}/>;
						})}
					</Row>
				</Fade>
			</Container>
		</section>
	);
};

export default LeadershipExperience;
