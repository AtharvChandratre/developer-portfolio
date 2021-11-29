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
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Atharv Chandratre | Portfolio",
					description:
						"I'm a passionate technologist interested in web and blockchain technologies. I love to explore the disruptive potential of blockchain in present-day systems, especially at its intersection with finance. In my free time, I play badminton, do origami and overthink.",
					image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
					url: "https://developer-portfolio-atharvchandratre.vercel.app/",
					keywords: [
						"Atharv",
						"Atharv Chandratre",
						"Portfolio",
						"Atharv Portfolio ",
						"Atharv Chandratre Portfolio",
						"blockchain",
						"solidity",
						"chainlink",
						"cryptocurrency",
						"crypto",
						"smart contract",
						"smart contracts",
						"infura",
						"truffle",
						"truffle suite",
						"decentralized",
						"decenttralized application",
						"decentralized applications",
						"dapps",
						"dapp",
						"blockchain developer",
						"full stack blockchain developer",
						"web developer",
						"full stack",
						"full stack web developer",
						"mobile app developer",
						"android developer",
						"django",
						"flask",
						"django rest framework",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"contextapi",
						"redux",
						"flutter"
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			{/* <Proficiency /> */}
			<Experience />
			<Education />
			{/* <Feedbacks /> */}
			<Projects />
			<TeachingExperience />
			<LeadershipExperience />
			<Podcasts />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
