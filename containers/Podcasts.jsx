import React from "react";

import { Container, Row, Col } from "reactstrap";
import { Fade } from "react-reveal";

const Podcasts = () => {
	return (
		<section className="bg-gradient-info pb-5 pt-2" id="podcasts">
			<Container>
				<Fade bottom duration={1000} distance="40px">
					<div className="d-flex p-4 align-items-center">
						<div>
							<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                                <span className="iconify" data-icon="fontisto:podcast"></span>
							</div>
						</div>
						<div className="pl-4 pt-2">
							<h4 className="display-3 text-white">Podcasts</h4>
						</div>
					</div>
					<Row className="row-grid align-items-center">
                        <Col lg="6">
                            <Fade left duration={1000} distance="40px">
                                <div className="d-flex px-3">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TYwOU3Asy6I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </Fade>
                        </Col>
                        <Col lg="6">
                            <Fade left duration={1000} distance="40px">
                                <div className="d-flex px-3">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/JTPPMwqaXOo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
				</Fade>
			</Container>
		</section>
	);
};

export default Podcasts;
