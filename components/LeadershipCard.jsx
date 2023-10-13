import React from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	CardHeader,
	Col,
    Button
} from "reactstrap";

import Color from "color-thief-react";

import { Fade } from "react-reveal";
import Image from "next/image";

const ExperienceCard = ({ data }) => {
	return (
		<Col lg="6">
			<Fade left duration={1000} distance="40px">
				<Card
					style={{ flex: 1 }}
					className="shadow-lg--hover shadow border-0 text-center rounded mb-4"
				>
					<Color src={data.companylogo} format="hex">
						{(color) => (
							data.company === 'Goldman Sachs' ?
							(<CardHeader style={{ background: '#0E3D66' }}>
								<h5 className="text-white">{data.company}</h5>
							</CardHeader>)
							: data.company === 'PrimeChain' ?
							(<CardHeader style={{ background: '#48B8F0' }}>
								<h5 className="text-white">{data.company}</h5>
							</CardHeader>)
							: (<CardHeader style={{ background: color.data }}>
							<h5 className="text-white">{data.company}</h5>
						</CardHeader>)
						)}
					</Color>
					<CardBody className="py-3">
						<div
							className="bg-white square mb-3 img-center img-fluid shadow-lg "
							style={{ width: "100px", height: "100px" }}
						>
							<Image
								src={data.companylogo}
								width={"100"}
								height={"100"}
								alt={data.companylogo}
							/>
						</div>
						<CardTitle tag="h5">{data.role}</CardTitle>
						<CardSubtitle>{data.date}</CardSubtitle>
						<CardText className="description my-2 text-left">
							{data.desc}
							<ul>
								{data.descBullets
									? data.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
						</CardText>
                        {data.certificate ? (
									<Button
										className="btn-icon"
										color="facebook"
										href={data.certificate}
										target="_blank"
										rel="noopener" aria-label="Certificate 1"
									>
										<span
												className="iconify"
												data-icon="fluent:certificate-20-filled"
												data-inline="false"
											></span>
										<span className="nav-link-inner--text ml-1">
											Certificate
										</span>
									</Button>
								) : null}
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default ExperienceCard;
