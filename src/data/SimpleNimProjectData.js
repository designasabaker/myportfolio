// Import images
import Image1 from '../images/SimpleNim-1.png';
import Image2 from '../images/SimpleNim-2.png';
// import Image3 from '../images/SimpleNim-3.png';
// import Image4 from '../images/SimpleNim-4.png';
// import Image5 from '../images/SimpleNim-5.png';
import Image6 from '../images/SimpleNim-code.png';

import WeLightImage1 from '../images/WeLight.png';

// Import icons
import {
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiYoutube,
} from 'react-icons/fi';
import OSBCover from "../images/OSB-1.png";
import EcoHomeCover from "../images/EcoHomeCover.png";

export const SimpleNimProjectData = {
    name: 'SimpleNim',
    ProjectHeader: {
        title: 'SimpleNim',
        publishDate: 'Jun 21, 2023',
        tags: 'UI / Frontend',
    },
    ProjectImages: [
        {
            id: 1,
            title: 'Kabul Project Management UI',
            img: Image1,
        },
        {
            id: 2,
            title: 'Kabul Project Management UI',
            img: Image2,
        },
        // {
        //     id: 3,
        //     title: 'Kabul Project Management UI',
        //     img: Image3,
        // },
        // {
        //     id: 4,
        //     title: 'Kabul Project Management UI',
        //     img: Image4,
        // },
        // {
        //     id: 5,
        //     title: 'Kabul Project Management UI',
        //     img: Image5,
        // },
        {
            id: 6,
            title: 'Kabul Project Management UI',
            img: Image6,
        },
    ],
    ProjectInfo: {
        ClientHeading: 'About',
        CompanyInfo: [
            {
                id: 1,
                title: 'Name',
                details: 'Simple Nim'
            },
            {
                id: 2,
                title: 'Services',
                details: 'UI Design & Frontend Development',
            },
            {
            	id: 3,
            	title: 'Website',
            	details: 'https://designasabaker.github.io/Nim/',
            },
            // {
            // 	id: 4,
            // 	title: 'Phone',
            // 	details: '555 8888 888',
            // },
        ],
        // ObjectivesHeading: 'Objective',
        // ObjectivesDetails:
        //     'A team of design students from the Rhode Island School of Design (RISD) is collaborating with a chemistry professor from the University of Rhode Island to create a new brand. In this UI/UX design project, our team aims to deliver a comprehensive digital experience that captures the essence of the professor\'s brand and effectively communicates it to its target audience.',
        Technologies: [
            {
                title: 'Tools & Technologies',
                techs: [
                    'HTML',
                    'CSS',
                    'JavaScript',
                ],
            },
        ],
        ProjectDetailsHeading: 'Challenge',
        ProjectDetails: [
            {
                id: 1,
                details:
                    "Nim is a web game that I developed as part of a CS project at Brown University. The game allows two players to compete against each other, using strategy and logic to outsmart their opponent."
            },
            // {
            //     id: 2,
            //     details:
            //         'By incorporating this local element into the brand\'s identity, Ocean State Bioactives is closely linked to the state and its natural resources. In this UI/UX design project, we aim to showcase the brand\'s connection to Rhode Island through a visually engaging and user-friendly digital experience.',
            // },
            // {
            //     id: 3,
            //     details:
            //         'Our goal is to create a visually engaging and user-friendly website that showcases the brand\'s advanced ingredients and its connection to Rhode Island, ultimately attracting the attention of business partners in the cosmetics industry.',
            // },
            // {
            //     id: 4,
            //     details:
            //         'In our design approach, we avoided using fancy elements and instead focused on creating a clean and simple aesthetic that reflects the brand\'s commitment to nature.',
            // },
        ],
        SocialSharingHeading: '',
        SocialSharing: [
            // {
            // 	id: 1,
            // 	name: 'Twitter',
            // 	icon: <FiTwitter />,
            // 	url: 'https://twitter.com/realstoman',
            // },
            // {
            // 	id: 2,
            // 	name: 'Instagram',
            // 	icon: <FiInstagram />,
            // 	url: 'https://instagram.com/realstoman',
            // },
            // {
            // 	id: 3,
            // 	name: 'Facebook',
            // 	icon: <FiFacebook />,
            // 	url: 'https://facebook.com/',
            // },
            // {
            // 	id: 4,
            // 	name: 'LinkedIn',
            // 	icon: <FiLinkedin />,
            // 	url: 'https://linkedin.com/',
            // },
            // {
            // 	id: 5,
            // 	name: 'Youtube',
            // 	icon: <FiYoutube />,
            // 	url: 'https://www.youtube.com/c/StomanStudio',
            // },
        ],
    },
    RelatedProject: {
        title: 'Related Projects',
        Projects: [
            {
                id: 'r1',
                name: 'OSB',
                title: 'OSB Website',
                img: OSBCover,
            },
            {
                id: 'r2',
                name:'EcoHome',
                title: 'EcoHome',
                img: EcoHomeCover,
            },
            // {
            // 	id: 3,
            // 	title: 'UI Design',
            // 	img: Image6,
            // },
            // {
            // 	id: 4,
            // 	title: 'Kabul Mobile App UI',
            // 	img: Image3,
            // },
        ],
    },
};
