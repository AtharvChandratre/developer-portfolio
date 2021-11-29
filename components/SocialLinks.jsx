import React from "react";

import { Button } from "reactstrap";

import { socialLinks } from "../portfolio";

const SocialLinks = () => {
	return (
		<div className="text-lg btn-group-lg">
			<Button
				className="btn btn-icon-only rounded-circle ml-1"
				color="outline-dark"
				href={socialLinks.github}
				rel="noopener"
				aria-label="Github"
				target="_blank"
			>
				<span className="btn-inner--icon d-flex align-items-center justify-content-center">
					<i className="fa fa-github " />
				</span>
			</Button>
			<Button
				className="btn-icon-only rounded-circle ml-1"
				color="outline-dark"
				rel="noopener"
				aria-label="Linkedin"
				href={socialLinks.linkedin}
				target="_blank"
			>
				<span className="btn-inner--icon d-flex align-items-center justify-content-center">
					<i className="fa fa-linkedin" />
				</span>
			</Button>
			<Button
				className="btn-icon-only rounded-circle ml-1"
				color="outline-dark"
				rel="noopener"
				aria-label="Email"
				href={socialLinks.email}
				target="_blank"
			>
				<span className="btn-inner--icon d-flex align-items-center justify-content-center">
					<i className="fa fa-envelope" />
				</span>
			</Button>
			<Button
				className="btn-icon-only rounded-circle ml-1"
				color="outline-dark"
				rel="noopener"
				aria-label="instagram"
				href={socialLinks.instagram}
				target="_blank"
			>
				<span className="btn-inner--icon d-flex align-items-center justify-content-center">
					<i className="fa fa-instagram" />
				</span>
			</Button>
			<Button
				className="btn-icon-only rounded-circle ml-1"
				color="outline-dark"
				rel="noopener"
				aria-label="Facebook"
				href={socialLinks.facebook}
				target="_blank"
			>
				<span className="btn-inner--icon d-flex align-items-center justify-content-center">
					<i className="fa fa-facebook" />
				</span>
			</Button>
		</div>
	);
};

export default SocialLinks;
