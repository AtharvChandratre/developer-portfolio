import React from "react";
import { Card, CardBody, Col, Color, CardHeader, CardTitle, CardSubtitle, CardText } from "reactstrap";

import { Fade } from "react-reveal";
import Image from "next/image";

const EdutionCard = ({ education }) => {
	return (
		<Col lg="6">
			<Fade left duration={1000} distance="40px">
				<Card
					style={{ flex: 1 }}
					className="shadow-lg--hover shadow border-0 text-center rounded mb-4 mt-4"
				>
					<CardHeader style={{ background: '#b78a2c' }}>
						<h5 className="text-white">{education.schoolName}</h5>
					</CardHeader>
					<CardBody className="py-3">
						<div
							className="bg-white square mb-3 img-center img-fluid shadow-lg "
							style={{ width: "200px", height: "200px" }}
						>
							<Image
								src={education.logo}
								width={"300px"}
								height={"200px"}
								alt={education.logo}
							/>
						</div>
						<CardTitle tag="h5">{education.subHeader}</CardTitle>
						<CardSubtitle>{education.duration}</CardSubtitle>
						<CardText className="description my-2 text-center">
							{education.desc}
							<ul>
								{education?.descBullets
									? education.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
						</CardText>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default EdutionCard;
