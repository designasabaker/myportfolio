import {useEffect, useState} from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import HireMeModal from '../HireMeModal';
import logoLight from '../../images/logo-lightMode.svg';
import logoDark from '../../images/logo-darkMode.svg';
import { motion, useViewportScroll } from "framer-motion"
import LanguageSwitcher from "../reusable/LanguageSwitcher";
import {LANGUAGE, useApp} from "../../context/AppContext";

const AppHeader = () => {
	const { lang } = useApp();
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();
	const [YProgress, setYProgress] = useState(0);

	const [isScrolledDown, setIsScrolledDown] = useState(false);

	const [navLinks, setNavLinks] = useState([
		{id:1, path:'/projects', value:'Projects'},
		{id:2, path:'/about', value:'About Me'},
		{id:3, path:'/contact', value:'Contact'},
	]);

	function handleScroll() {
		const windowHeight = window.innerHeight;
		const height = document.documentElement.scrollHeight - window.innerHeight;
		if (window.scrollY > windowHeight / 2) {
			setIsScrolledDown(true);
		} else {
			setIsScrolledDown(false);
		}
		const scrollProgress = document.scrollingElement.scrollTop / height;
		setYProgress(scrollProgress);
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

	},[]);

	const updateTextLang = (lang) => {
		let navLinksVal;
		switch (lang) {
			case LANGUAGE.EN:
				navLinksVal = ['Projects', 'About Me', 'Contact'];
				break;
			case LANGUAGE.CN:
				navLinksVal = ['项目', '关于我', '联系方式',''];
				break;
			default:
				navLinksVal = ['Projects', 'About Me', 'Contact'];
				break;
		};

		setNavLinks(preNavLinks => {
			return preNavLinks.map(
				(link, index) => {
					return {...link, value: navLinksVal[index]}
				})
		});
	}

	useEffect(() => {
		updateTextLang(lang);
	},[lang]);

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	function showHireMeModal() {
		if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			style={{
				width: '100vw',
				height: isScrolledDown ? '32px' : '65px',
				position: 'fixed',
				display: 'block',
				borderBottom: isScrolledDown ? '1px solid rgba(0,0,0.5,0.5)' : 'none',
				margin: 0,
				padding: 0,
				zIndex: 100,
				transition:'all 0.3s ease-in-out'
			}}
		>
			<div
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: YProgress * window.innerWidth,
					height: 1,
					backgroundColor: '#ACC8E5',
				}}
			/>
			<div
				className="bg-primary-light dark:bg-primary-dark"
				style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: '0 40px',
			}}>
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div style={{width:140}}>
						<Link to="/">
							{activeTheme === 'light'
								?
								(<img src={logoDark} alt="Dark Logo"
									  style={{opacity: isScrolledDown ? 0 : 1, transition:'all 0.1s ease-in-out'}}
									  className="w-36 hover:opacity-80 transition-opacity duration-300"
								/>)
								:
								(<img src={logoLight} alt="Dark Logo"
									  style={{opacity: isScrolledDown ? 0 : 1, transition:'all 0.1s ease-in-out'}}
									  className="w-36 hover:border hover:border-white hover:opacity-80 transition-opacity duration-300"
									/>
							)}
						</Link>
					</div>

					{/* Theme switcher small screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon
								height={20}
								className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>

					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<Link
						to="/projects"
						className={`block text-left ${isScrolledDown ? 'text-sm' : 'text-lg'} hover:border hover:border-white text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2`}
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="Contact"
					>
						Contact
					</Link>
					{/* <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
						<span
							onClick={showHireMeModal}
							className="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
							aria-label="Hire Me Button"
						>
							<Button title="Hire Me" />
						</span>
					</div> */}
				</div>

				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
					{navLinks.map((link,index) => {
						return(
							<Link
								key={index}
								to={link.path || '/'}
								className={`block text-left ${isScrolledDown ? 'text-sm pb-2' : 'text-lg'} hover:opacity-50 hover:border hover:border-white text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2`}
								aria-label="Projects"
								>
								{link.value}
							</Link>)
					})}
				</div>

				{/* Header right section buttons */}
				<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
					{/* <div className="hidden md:flex">
						<span
							onClick={showHireMeModal}
							className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
							aria-label="Hire Me Button"
						>
							<Button title="Hire Me" />
						</span>
					</div> */}

					{/* Theme switcher large screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
						style={{opacity: isScrolledDown ? 0 : 1, transition: 'opacity 0.5s ease'}}>
						{activeTheme === 'dark' ? (
							<FiMoon
								className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>

					{/* language switcher */}
					<div
						style={{opacity: isScrolledDown ? 0 : 1, transition: 'opacity 0.5s ease'}}
						className={`ml-8 ${isScrolledDown ? 'text-sm' : 'text-lg'} bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer`}>
						<LanguageSwitcher />
					</div>
				</div>
			</div>
			{/* Hire me modal */}
			<div>
				{showModal ? (
					<HireMeModal
						onClose={showHireMeModal}
						onRequest={showHireMeModal}
					/>
				) : null}
				{showModal ? showHireMeModal : null}
			</div>
		</motion.nav>
	);
};

export default AppHeader;
