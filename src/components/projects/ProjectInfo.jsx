import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import {useApp} from "../../context/AppContext";

const ProjectInfo = () => {
	const { lang } = useApp();
	const { singleProjectData } = useContext(SingleProjectContext);

	const projectDetailInfo = singleProjectData.ProjectInfo.ProjectDetails.map((detail) => {
		// has language options
		return (
			<div
				key={detail.id}
				className="w-full font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
			>
				{!!detail.details[lang] ? detail.details[lang] : detail.details}
			</div>
		);
	})

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						{singleProjectData.ProjectInfo.ClientHeading}
					</p>
					<ul className="leading-loose">
						{singleProjectData.ProjectInfo.CompanyInfo.map(
							(info) => {
								return (
									<li
										className="font-general-regular text-ternary-dark dark:text-ternary-light py-2"
										key={info.id}>
										<span>{info.title}: </span>
										{info.title === 'Website'
										|| info.title === 'Research Work (Under Development)'
										|| info.title === 'Preview Video'
										|| info.title === 'Other VR Demo Video'
										|| info.title === 'Github Repo'
											? (
											<a
												href={info.details}
												target="_blank"
												className={
													//info.title === 'Website' ||
													//info.title === 'Phone'
														'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
														// : ''
												}
												aria-label="Project Website and Phone"
											>
												<br /><b className={"font-bold"}>{info.details}</b>
											</a>)
											: (
											<spanp>
												{info.details}
											</spanp>)}
									</li>
								);
							}
						)}
					</ul>
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.ObjectivesHeading}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{singleProjectData.ProjectInfo.ObjectivesDetails}
					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.Technologies[0].title}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{singleProjectData.ProjectInfo.Technologies[0].techs.join(
							', '
						)}
					</p>
				</div>

				<div>
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.SocialSharingHeading}
					</p>
					<div className="flex items-center gap-3 mt-5">
						{singleProjectData.ProjectInfo.SocialSharing.map(
							(social) => {
								return (
									<a
										key={social.id}
										href={social.url}
										target="__blank"
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</a>
								);
							}
						)}
					</div>
				</div>
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{singleProjectData.ProjectInfo.ProjectDetailsHeading}
				</p>
				{projectDetailInfo}
				{/*{singleProjectData.ProjectInfo.ProjectDetails.map((details) => {*/}
				{/*	return (*/}
				{/*		<div*/}
				{/*			key={details.id}*/}
				{/*			className="w-full font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"*/}
				{/*		>*/}
				{/*			{details.details}*/}
				{/*		</div>*/}
				{/*	);*/}
				{/*})}*/}
			</div>
		</div>
	);
};

export default ProjectInfo;
