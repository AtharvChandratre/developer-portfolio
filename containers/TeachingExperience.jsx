import React from "react";

import { teachingExperience } from "../portfolio";
import { Container, Row } from "reactstrap";
import TeachingCard from "../components/TeachingCard";
import { Fade } from "react-reveal";

const TeachingExperience = () => {
	return (
		<section className="bg-gradient-white pb-5 pt-2" id="teaching-experience">
			<Container>
				<Fade bottom duration={1000} distance="40px">
					<div className="d-flex p-4 align-items-center">
						<div>
							<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
								<i className="iconify" data-icon="mdi:google-classroom" data-inline="false"/>
							</div>
						</div>
						<div className="pl-4 pt-2">
							<h4 className="display-3 text-info">Teaching Experience</h4>
						</div>
					</div>
					<Row className="row-grid align-items-center">
						{teachingExperience.map((data, i) => {
							return <TeachingCard key={i} data={data} />;
						})}
					</Row>
				</Fade>
			</Container>
		</section>
	);
};

export default TeachingExperience;
