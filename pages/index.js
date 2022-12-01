import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const TeachingExperience = dynamic(() => import("../containers/TeachingExperience"));
const LeadershipExperience = dynamic(() => import("../containers/LeadershipExperience"));
const Podcasts = dynamic(() => import("../containers/Podcasts"));
const ContactMe = dynamic(() => import("../containers/ContactMe"));

import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div className="text-center">
			<h1>
		This website is being rebuilt. Thank you for your patience!
			</h1>
		</div>
		
		// <div>
		// 	<SEO
		// 		data={{
		// 			title: "Atharv Chandratre | Portfolio",
		// 			description:
		// 				"I'm a passionate technologist interested in web and blockchain technologies. I love to explore the disruptive potential of blockchain in present-day systems, especially at its intersection with finance. In my free time, I play badminton, do origami and overthink.",
		// 			image: "https://media-exp1.licdn.com/dms/image/C5603AQGK1Zc_CNCXaA/profile-displayphoto-shrink_400_400/0/1639934873557?e=1648684800&v=beta&t=yu3ybHoVwOaa5rfX4yro_3pM0tuYv2pmM512A6fc37A",
		// 				url: "https://developer-portfolio-atharvchandratre.vercel.app/",
		// 			keywords: [
		// 				"Atharv",
		// 				"Atharv Chandratre",
		// 				"Portfolio",
		// 				"Atharv Portfolio ",
		// 				"Atharv Chandratre Portfolio",
		// 				"blockchain",
		// 				"solidity",
		// 				"chainlink",
		// 				"cryptocurrency",
		// 				"crypto",
		// 				"smart contract",
		// 				"smart contracts",
		// 				"infura",
		// 				"truffle",
		// 				"truffle suite",
		// 				"decentralized",
		// 				"decenttralized application",
		// 				"decentralized applications",
		// 				"dapps",
		// 				"dapp",
		// 				"blockchain developer",
		// 				"full stack blockchain developer",
		// 				"web developer",
		// 				"full stack",
		// 				"full stack web developer",
		// 				"mobile app developer",
		// 				"android developer",
		// 				"django",
		// 				"flask",
		// 				"django rest framework",
		// 				"nodejs ",
		// 				"expressjs",
		// 				"reactjs ",
		// 				"contextapi",
		// 				"redux",
		// 				"flutter"
		// 			],
		// 		}}
		// 	/>
		// 	<Navigation />
		// 	<Greetings />
		// 	<Skills />
		// 	{/* <Proficiency /> */}
		// 	<Experience />
		// 	<Education />
		// 	<Projects />
		// 	<TeachingExperience />
		// 	<LeadershipExperience />
		// 	<Podcasts />
		// 	<ContactMe />
		// </div>
	);
}
