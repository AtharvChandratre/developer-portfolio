import emoji from "react-easy-emoji";

export const greetings = {
	name: "Atharv Chandratre",
	title: "Hi, I'm Atharv Chandratre",
	description:
		"I'm a passionate technologist interested in web and blockchain technologies. I love to explore the disruptive potential of blockchain in present-day systems. In my free time, I play badminton, do origami and overthink.",
	resumeLink: "https://drive.google.com/file/d/1Z7-yOuNHbfBgPdjyoLmKIOWhbQsyCHyw/view?usp=sharing", //enter resume link
	emailAddress: "atharvchandratre@gmail.com"
};

export const openSource = {
	githubUserName: "AtharvChandratre",
};

export const contact = {};

export const socialLinks = {
	display: true,
	facebook: "https://www.facebook.com/atharv.chandratre",
	instagram: "https://www.instagram.com/atharv_chandra3/",
	github: "https://github.com/AtharvChandratre",
	linkedin: "https://www.linkedin.com/in/atharv-chandratre/",
	email: "mailto:atharvchandratre@gmail.com"
};

export const skillsSection = {
	title: "What I Do",
	subTitle:
		"I love to explore a variety of technologies and stacks. Some of which I have worked on are",
	// skills: [
	// 	emoji(
	// 		"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
	// 	),
	// 	emoji(
	// 		"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
	// 	),
	// 	emoji(
	// 		"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
	// 	),
	// ],

	softwareSkills: [
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "ReactJS",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "NodeJS",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "MongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "AWS",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "Python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "Git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "Docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
		{
			skillName: "CI-CD",
			fontAwesomeClassname: "clarity:ci-cd-line",
		},
		{
			skillName: "Cpp",
			fontAwesomeClassname: "logos:c-plusplus",
		},
		{
			skillName: "Java",
			fontAwesomeClassname: "logos:java",
		},
		{
			skillName: "Blockchain",
			fontAwesomeClassname: "eos-icons:blockchain",
		},
		{
			skillName: "Solidity",
			fontAwesomeClassname: "vscode-icons:file-type-light-solidity",
		},
		{
			skillName: "Truffle-Suite",
			fontAwesomeClassname: "file-icons:truffle",
		}
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "University of Illinois, Urbana-Champaign",
		subHeader: "Masters of Science in Computer Science",
		duration: "August 2022 - June 2024",
		desc: "Currently studying here",
		logo: "/img/icons/common/uiuc.svg",
		// descBullets: [
		// 	"",
		// ],
	},
	{
		schoolName: "BITS Pilani, K.K. Birla Goa Campus",
		subHeader: "Bachelor of Engineering in Computer Science",
		duration: "August 2017 - June 2021",
		desc: "Graduated with a CGPA of 8.62",
		logo: "/img/icons/common/bitslogo.svg",
		// descBullets: [
		// 	"",
		// ],
	},
	// {
	// 	schoolName: "Rajiv Gandhi Junior College",
	// 	subHeader: "Class 11-12",
	// 	duration: "August 2015 - June 2017",
	// 	desc: "Graduated with 90.5% in the HSC Board Exams",
	// 	// descBullets: [
	// 	// 	"Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
	// 	// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	// 	// ],
	// },
	// {
	// 	schoolName: "Hutchings High School",
	// 	subHeader: "Class 5-10",
	// 	duration: "August 2009 - June 2015",
	// 	desc: "Graduated with 97.2%",
	// 	// descBullets: [
	// 	// 	"Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit",
	// 	// ],
	// },
	// {
	// 	schoolName: "R. Grant Graham Elementary",
	// 	subHeader: "Class 1-5",
	// 	duration: "August 2005 - June 2009",
	// 	// desc: "Graduated with 97.2%",
	// 	// descBullets: [
	// 	// 	"Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit",
	// 	// ],
	// }
];

export const experience = [
	{
		role: "Analyst",
		company: "Goldman Sachs",
		companylogo: "/img/icons/common/goldmansachs.svg",
		date: "July 2021 – June 2022",
		desc: "Building the technology that drives the Conflicts Resolution Group to ensure no conflicts of interest arise in business deals"
	},
	{
		role: "Protocol Developer Engineer",
		company: "IOHK",
		companylogo: "/img/icons/common/iohk.svg",
		date: "Aug 2021 – Nov 2021",
		desc: "Worked with the IOHK team to implement the Prism Consensus Protocol under the advisory of Prof. Pramod Viswanath.",
	},
	{
		role: "Software Engineer Intern",
		company: "Amazon",
		companylogo: "/img/icons/common/amazon.svg",
		date: "Jan 2021 – Jun 2021",
		desc: "Built a chatbot service to manage Amazon Prime's Worldwide Customer Interactions from scratch. Received a return offer.",
	},
	{
		role: "Summer Analyst",
		company: "Goldman Sachs",
		companylogo: "/img/icons/common/goldmansachs.svg",
		date: "May 2020 – Jun 2020",
		desc: "Worked with the Conflicts and Business Selection team to display the historic query information on the banker dashboard."
	},
	{
		role: "Blockchain Engineer Intern",
		company: "UST Global",
		companylogo: "/img/icons/common/ust.svg",
		date: "May 2019 – Jul 2019",
		desc: "Built a Private Ethereum Test Network running Proof-of Authority using Docker, along with a Faucet and Block Explorer.",
	},
	{
		role: "Blockchain Developer Intern",
		company: "PrimeChain",
		companylogo: "/img/icons/common/primechain.svg",
		date: "Mar 2019 – Apr 2019",
		desc: "Wrote and deployed Solidity Smart Contracts for Supply Chain Management, and created REST APIs using Express.js"
	},
];

export const projects = [
	{
		name: "Blockchain Based Raspberry Pi Mesh Network",
		desc: "Analyzed transaction and block propagation latencies within a private blockchain network of Raspberry Pis in a mesh configuration. Researched the correlation between these latencies and the number of Raspberry Pi nodes in the network. Done under the advisory of Prof. Neena Goveas.",
		ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3800557",
		lottiePath: "/lottie/blockchain_iot.json"
	},
	{
		name: "Blockchain Based Intellectual Property Management",
		desc: "Developed an Intellectual Property Management system using blockchain-based smart contracts written in Solidity. Evaluated its ability to expedite resolution of ownership conflicts and legal issues that arise in Intellectual Property. Done under the advisory of Prof. Rajorshi Sen Gupta.",
		ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3800734",
		lottiePath: "/lottie/blockchain_patent.json"
	},
	{
		name: "Blockchain Based Course Feedback System",
		desc: "Designed a feedback system for University courses based on Solidity smart contracts deployed to Ethereum's test network. Assessed its ability to report immmutable, secure and bias-agnostic feedback by keeping feedback provider identities confidential. Done under the advisory of Prof. Vinayak Naik.",
		github: "https://github.com/AtharvChandratre/CourseFeedbackSystem",
		ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3762332",
		lottiePath: "/lottie/blockchain_course_feedback.json"
	},
	{
		name: "Election System Enabled by Blockchain",
		desc: "Created a Blockchain based Secure Voting System to tackle Voting Machine tampering. Modelled around the Estonian model of blockchain voting, it utilizes two factor authentication for each vote using QR codes and random key value pair generation for each voter. It allows for vote verification by the voter.",
		github: "https://github.com/never2average/CODEFUNDO-2019",
		lottiePath: "/lottie/blockchain_election.json"
	},
	{
		name: "Proof of Authority Ethereum TestNet Using Docker",
		desc: "Implementated a multi-node local private network. Built a faucet and block explorer as well, with the front-end written in React. Containerization was done using Docker.",
		github: "https://github.com/AtharvChandratre/Proof-of-Authority-Test-Network-using-Docker",
		lottiePath: "/lottie/blockchain_private_testnet.json"
	}
];

export const teachingExperience = [
	{
		companyName: "Basics of Blockchain",
		name: "Course Instructor - BlueLearn",
		desc: "Designed and taught the Basics of Blockchain course two times to over 60 students across India. Had the highest student retention of any course on the platform and received overwhelmingly positive student feedback both times.",
		ssrn: "",
		lottiePath: "",
		landingPage: "https://www.bluelearn.in/courses/atharvchandratre/basics-of-blockchain",
		certificate1: "",
		certificate2: "",
		youtubePlaylist1: "https://www.youtube.com/playlist?list=PL0SgGcCGLo6qRVo49RBAe-2J67U3tOyzd",
		youtubePlaylist2: "https://www.youtube.com/playlist?list=PL0SgGcCGLo6pGoegbBISsUQUF3khP4Nme"
	},
	{
		companyName: "Intro to Blockchain",
		name: "Course Instructor - Center for Technical Education, BITS Goa",
		desc: "Designed and taught this course twice to over 50 students. Demonstrated the highest student retention of any course in CTE, 2019. Designed the course to teach concepts about blockchains, like Basic Cryptography, Merkle Trees, how Bitcoin works under the hood, Consesus Mechanisms and Smart Contracts.",
		ssrn: "",
		lottiePath: "",
		landingPage: "",
		certificate1: "https://drive.google.com/file/d/1pft_K3O1kvWzM0cpwz632Kb1r1qCenR_/view",
		certificate2: "https://drive.google.com/file/d/1PZehNyd4FtUJeQJnWShGuLNiNz7QWPbN/view",
		youtubePlaylist1: "",
		youtubePlaylist2: ""
	},
	{
		companyName: "Object Oriented Programming",
		name: "Teaching Assistant - BITS Goa",
		desc: "Designed the problem statements for the weekly 2-hour long OOP lab} and contributed to examination answer-script correction. My performance was given a rating of 'Excellent'.",
		ssrn: "",
		lottiePath: "",
		landingPage: "",
		certificate1: "https://drive.google.com/file/d/18hmni4lUMXwLN8m87M4J8IjvSrQhmfGs/view",
		certificate2: "",
		youtubePlaylist1: "",
		youtubePlaylist2: ""
	}
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];

export const leadership = [
	{
		role: "Founder and President",
		company: "Blockchain Club, BITS Goa",
		companylogo: "/img/icons/common/blockchain-club.svg",
		date: "Jun 2019 – May 2020",
		desc: "Founded the Blockchain Club, BITS Goa and grew it to one of the largest university-based blockchain clubs in India. Conducted talks, events and hackathons, and played a pivotal role in creating a strong culture around blockchain technology at my university.",
		certificate: "https://drive.google.com/file/d/1_EoW8M6h35xryBHxKvRtMWrddqYorR7Y/view"
	},
	{
		role: "Coordinator",
		company: "BITSMUN",
		companylogo: "/img/icons/common/bitsmun.svg",
		date: "Aug 2019 – May 2020",
		desc: "Led a team of over 40 people to organize the conference. Achieved a 100% increase in year-on-year profit in the 2020 edition. Persuaded 6 NGOs and 15 MUNs to partner with us, with names like RedDot, The Dais and LonePack.",
		certificate: "https://drive.google.com/file/d/1AXIKuVA6GvKp-J1gmKh0yNhP7egPjK4D/view"
	}
];
