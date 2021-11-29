import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";

import { Fade } from "react-reveal";

const TeachingCard = ({ data }) => {
	return (
		<Col lg="6">
			<Fade left duration={1000} distance="40px">
				<Card className="shadow-lg--hover shadow mt-4">
					<CardBody>
						<div className="d-flex px-3">
							<div className="pl-4">
                                <h2 className="d-flex text-center justify-content-center">{data.companyName}</h2>
								<h4 className="heading d-flex text-center justify-content-center">{data.name}</h4>
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
											SSRN Link
										</span>
									</Button>
								) : null}
                                {data.landingPage ? (
									<Button
										className="btn-icon mb-2"
										color="success"
										href={data.ssrn}
										target="_blank"
										rel="noopener" aria-label="Landing Page"
									>
										<span className="btn-inner--icon">
                                        <i class="fa fa-paper-plane mr-2"></i>
										</span>
										<span className="nav-link-inner--text ml-1">
											Landing Page
										</span>
									</Button>
								) : null}
                                {data.youtubePlaylist2 ? (
									<Button
										className="btn-icon mb-2 icons"
										color="youtube"
										href={data.youtubePlaylist2}
										target="_blank"
										rel="noopener" aria-label="Youtube Playlist 2"
									>
										<span
											className="iconify"
											data-icon="ant-design:youtube-filled"
											data-inline="false"
										></span>
										<span className="nav-link-inner--text ml-1">
											Jun-Jul 2021
										</span>
									</Button>
								) : null}
                                {data.youtubePlaylist1 ? (
									<Button
										className=" mb-2 iconify"
										color="youtube"
										href={data.youtubePlaylist2}
										target="_blank"
										rel="noopener" aria-label="Youtube Playlist 1"
									>
										<span
											className="iconify"
											data-icon="ant-design:youtube-filled"
											data-inline="false"
										></span>
										<span className="nav-link-inner--text ml-1">
											Apr-May 2021
										</span>
									</Button>
								) : null}
								{data.certificate2 ? (
									<Button
										className="btn-icon"
										color="facebook"
										href={data.certificate2}
										target="_blank"
										rel="noopener" aria-label="Certificate 2"
									>
										<span
												className="iconify"
												data-icon="fluent:certificate-20-filled"
												data-inline="false"
											></span>
										<span className="nav-link-inner--text ml-1">
											Certificate '20
										</span>
									</Button>
								) : null}
								{data.certificate1 ? (
									<Button
										className="btn-icon"
										color="facebook"
										href={data.certificate1}
										target="_blank"
										rel="noopener" aria-label="Certificate 1"
									>
										<span
												className="iconify"
												data-icon="fluent:certificate-20-filled"
												data-inline="false"
											></span>
										<span className="nav-link-inner--text ml-1">
											Certificate '19
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

export default TeachingCard;
