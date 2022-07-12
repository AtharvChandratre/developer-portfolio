import React from "react";
import EdutionCard from "../components/EdutionCard";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";

const Edution = () => {
	return (
		<section className="pt-2 pb-5 bg-gradient-white my-0" id="education">
			<Container>
				<div className="d-flex px-3 align-items-center pt-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<span className="iconify" data-icon="fa-solid:university"></span>
						</div>
					</div>
					<div className="pl-4 pt-2">
						<h4 className="display-3 text-info">Education</h4>
					</div>
				</div>
				<Row className="row-grid align-items-center justify-content-center">
					{educationInfo.map((info) => {
						return (
							<Col
								className="order-lg-1"
								lg="6"
								key={info.schoolName}
							>
								<EdutionCard education={info} />
							</Col>
						);
					})}
				</Row>
			</Container>
			{/* <div className="separator separator-bottom separator-skew zindex-100">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0"
				>
					<polygon
						className="fill-white"
						points="2560 0 2560 100 0 100"
					/>
				</svg>
			</div> */}
		</section>
	);
};

export default Edution;
