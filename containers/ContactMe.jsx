import React from "react";

import { Card, Col, Row, Container } from "reactstrap";
import { Fade } from "react-reveal";

import SocialLinks from "../components/SocialLinks";

const ContactMe = () => {
	return (
		<section className="bg-gradient-info pb-5 pt-2" id="contact-me">
			<Container>
				<Fade bottom duration={1000} distance="40px">
					<div className="d-flex p-3 align-items-center">
						<div>
							<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                                <span className="iconify" data-icon="eva:phone-call-outline"></span>
							</div>
						</div>
						<div className="pl-4 pt-2">
							<h4 className="display-3 text-white">Contact Me</h4>
						</div>
					</div>
					<h4 className="d-flex text-white pb-3 pl-4 ">Do you have a project idea in mind, or just want to say hi? My inbox is open to all!</h4>
                    <div className="d-flex justify-content-center">
                        <Card className="p-2">
                            <SocialLinks />
                        </Card>
                    </div>
				</Fade>
			</Container>
		</section>
	);
};

export default ContactMe;
