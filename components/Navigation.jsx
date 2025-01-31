import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import Link from "next/link";
import {
	UncontrolledCollapse,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
} from "reactstrap";

const Navigation = () => {
	const [collapseClasses, setCollapseClasses] = useState("");
	const onExiting = () => setCollapseClasses("collapsing-out");

	const onExited = () => setCollapseClasses("");

	useEffect(() => {
		let headroom = new Headroom(document.getElementById("navbar-main"));
		// initialise
		headroom.init();
	});

	return (
		<>
			<header className="header-global">
				<Navbar
					className="navbar-main navbar-transparent navbar-light headroom"
					expand="lg"
					id="navbar-main"
				>
					<Container>
						{/* <NavbarBrand href="#landing" className="mr-lg-5">
							<h2 className="text-white" id="nav-title">
								{greetings.name}
							</h2>
						</NavbarBrand> */}
						<button
							className="navbar-toggler"
							aria-label="navbar_toggle"
							id="navbar_global"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<UncontrolledCollapse
							toggler="#navbar_global"
							navbar
							className={collapseClasses}
							onExiting={onExiting}
							onExited={onExited}
						>
							<div className="navbar-collapse-header">
								<Row>
									<Col className="collapse-brand" xs="6">
										<h3
											className="text-black"
											id="nav-title"
										>
											{greetings.name}
										</h3>
									</Col>
									<Col className="collapse-close" xs="6">
										<button
											className="navbar-toggler"
											id="navbar_global"
										>
											<span />
											<span />
										</button>
									</Col>
								</Row>
							</div>
							<Nav
								className="align-items-lg-center ml-lg-auto"
								navbar
							>
								<NavItem >
									<NavLink
										rel="noopener"
										aria-label="Skills"
										href={"#skills"}
									>
										<span className="nav-link mb-sm-3 mb-md-0">
											Skills
										</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Experience"
										href={"#experience"}
									>
										<span className="nav-link mb-sm-3 mb-md-0">
											Experience
										</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Education"
										href={"#education"}
									>
										<span className="nav-link mb-sm-3 mb-md-0">
											Education
										</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Projects"
										href={"#projects"}
									>
										<span className="nav-link mb-sm-3 mb-md-0">
											Projects
										</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Teaching Experience"
										href={"#teaching-experience"}
									>
										<span className="nav-link mb-sm-3 mb-md-0">
											Teaching
										</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Leadership Experience"
										href={"#leadership-experience"}
									>
										<span className="nav-link mb-sm-3 mb-md-0">
											Leadership
										</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Podcasts"
										href={"#podcasts"}
									>
										<span className="nav-link mb-sm-3 mb-md-0">
											Podcasts
										</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Contact Me"
										href={"#contact-me"}
									>
										<span className="nav-link mb-sm-3 mb-md-0">
											Contact
										</span>
									</NavLink>
								</NavItem>
							</Nav>
						</UncontrolledCollapse>
					</Container>
				</Navbar>
			</header>
		</>
	);
};

export default Navigation;
