import React, { useState } from "react";
import JobsList from "../components/JobsList";

import SearchIcon from "../icons/SearchIcon";
import LocationIcon from "../icons/LocationIcon";

function JobPage() {
	const [selectedCity, setSelectedCity] = useState("Anywhere");
	return (
		<div className="flex w-full h-screen">
			{/* 1st Section (1:5:2 ratio) */}
			<div className="flex flex-col items-center flex-wrap justify-between py-4 w-56">
				{/* Icon */}
				<div className="flex justify-center flex-col mt-8 text-[#454647]">
					<i className="fas fa-icons fa-2x"></i>
				</div>
				{/* Navigation Links */}
				<div className="flex flex-col ">
					<a
						href="#"
						className="mb-4 text-[#50555b] hover:text-[#3d6f7b] transition duration-200 ease-in-out font-semibold cursor-pointer "
					>
						Home
					</a>
					<a
						href="#"
						className="mb-4 text-[#50555b] hover:text-[#3d6f7b] transition duration-200 ease-in-out font-semibold cursor-pointer "
					>
						Search Job
					</a>
					<a
						href="#"
						className="mb-4 text-[#50555b] hover:text-[#3d6f7b] transition duration-200 ease-in-out font-semibold cursor-pointer "
					>
						Find Freelancer
					</a>
					<a
						href="#"
						className="mb-4 text-[#50555b] hover:text-[#3d6f7b] transition duration-200 ease-in-out font-semibold cursor-pointer "
					>
						Community
					</a>
					<a
						href="#"
						className="mb-4 text-[#50555b] hover:text-[#3d6f7b] transition duration-200 ease-in-out font-semibold cursor-pointer "
					>
						About Us
					</a>
				</div>
				{/* Avatar Icon */}
				<div className="flex justify-center flex-col mb-8 text-[#454647]">
					<i className="fas fa-user-circle mt-auto fa-2x"></i>
				</div>
			</div>

			{/* 2nd Section (5 parts) */}
			<div className="bg-[#E5EDF1] py-4 px-16 w-8/12 flex flex-col">
				{/* Content goes here */}

				{/* <div className="h-40 flex mt-8">
					<div className="flex flex-col text-[#50555b]">
						<div className="text-3xl font-bold text-[#454647]">
							Search Jobs
						</div>
						<div>
							<span className="text-[#3d6f7b] text-xl pr-2">
							
								144 results
							</span>
							<span className="text-sm opacity-70">
								of your preferences
							</span>
						</div>
					</div>
					<div className="flex-grow pl-16">
						<div className="flex items-center border rounded">
						
							<button className="flex items-center px-2 py-1">
								<i class="fa-solid fa-magnifying-glass"></i>
								{selectedCity}
							</button>

					
							<input
								type="text"
								placeholder="Search..."
								className="flex-grow px-2 outline-none"
							/>

							
							<button className="px-2 py-1">
								<i class="fa-solid fa-location-dot"></i>
							</button>
						</div>
					</div>
				</div> */}
				{/* <div className="flex-grow">content</div> */}
				<div className="mx-auto w-11/12 max-w-7xl p-4 mt-6">
					<div className="mb-4 flex justify-between items-center gap-4">
						<div className="relative grow ">
							<input
								type="text"
								placeholder="Search by Title, Company or Keywords..."
								className="w-full p-2.5 pl-32 bg-[#ffffff1d] border   focus:outline-[#96C2DB] focus:outline-2 focus:outline bg-white rounded-full "
							/>
							<div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#50555b] font-semibold text-sm flex pr-2 border-r-2">
								<LocationIcon />
								Anywhere
							</div>
							<SearchIcon />
						</div>
					</div>

					<div className=" mt-8">
						<JobsList />
					</div>
				</div>
			</div>

			{/* 3rd Section (2 parts) */}
			<div className=" p-4 w-2/12">
				{/* Content goes here */}
				<p>Side content here...</p>
			</div>
		</div>
	);
}
export default JobPage;
