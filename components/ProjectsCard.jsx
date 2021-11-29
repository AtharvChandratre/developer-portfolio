import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";

import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
	return (
		<Col lg="6">
			<Fade left duration={1000} distance="40px">
				<Card className="shadow-lg--hover shadow mt-4">
					<CardBody>
						<div className="d-flex px-3">
							<div className="pl-4">
								<h3 className="d-flex text-center justify-content-center">{data.name}</h3>
								{data?.lottiePath && <DisplayLottie animationPath={data?.lottiePath} height={200}/>}
								<p className="description mt-3">{data.desc}</p>
								{data.github ? (
									<Button
										className="btn-icon"
										color="github"
										href={data.link}
										target="_blank"
										rel="noopener"
										aria-label="Github"
									>
										<span className="btn-inner--icon">
											<i className="fa fa-github" />
										</span>
									</Button>
								) : null}
								{data.demo ? (
									<Button
										className="btn-icon"
										color="success"
										href={data.demo}
										target="_blank"
										rel="noopener" aria-label="Twitter"
									>
										<span className="btn-inner--icon">
											<i className="fa fa-play mr-2" />
										</span>
										<span className="nav-link-inner--text ml-1">
											Demo
										</span>
									</Button>
								) : null}
								{data.ssrn ? (
									<Button
										className="btn-icon"
										color="success"
										href={data.ssrn}
										target="_blank"
										rel="noopener" aria-label="SSRN"
									>
										<span className="btn-inner--icon">
											<i className="fa fa-file mr-2" />
										</span>
										<span className="nav-link-inner--text ml-1">
											SSRN
										</span>
									</Button>
								) : null}
							</div>
						</div>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default ProjectsCard;
