import React from "react";
import { Card, CardBody, Badge, Col } from "reactstrap";

import { Fade } from "react-reveal";
import Image from "next/image";

const EdutionCard = ({ education }) => {
	return (
		<Fade left duration={1000} distance="40px">
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
					<Col lg="2">
						<Image
								src={education.logo}
								// width = {1000}
								// height = {1000}
								layout="fill"
								alt={education.logo}
							/>
						</Col>
						<Col>
						<div className="pl-4">
							<h5 className="text-info">
								{education.schoolName}
							</h5>
							<h6>{education.subHeader}</h6>
							<p className="description mt-3">{education.desc}</p>
							<ul>
								{education.descBullets
									? education.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
						</div>
						</Col>
						<Col lg="3" className="d-flex align-items-center">
							<h4>
								<Badge color="white" className="mr-1 text-info">
									{education.duration}
								</Badge>
							</h4>
						</Col>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default EdutionCard;
