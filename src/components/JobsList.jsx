import AppleIcon from "../icons/AppleIcon";
import LocationIcon from "../icons/LocationIcon";

const jobData = [
	{
		position: "Senior UI/UX Designer",
		company: "Apple",
		location: "San Francisco, CA",
		salary: "$25000 - $30950",
	},
	{
		position: "Front-End Developer",
		company: "Google",
		location: "Mountain View, CA",
		salary: "$28000 - $35000",
	},
	{
		position: "Product Manager",
		company: "Amazon",
		location: "Seattle, WA",
		salary: "$30000 - $39000",
	},
	{
		position: "Data Scientist",
		company: "Facebook",
		location: "Menlo Park, CA",
		salary: "$29000 - $36000",
	},
	{
		position: "Backend Engineer",
		company: "Netflix",
		location: "Los Gatos, CA",
		salary: "$28000 - $34500",
	},
	{
		position: "DevOps Specialist",
		company: "Microsoft",
		location: "Redmond, WA",
		salary: "$27000 - $33000",
	},
	{
		position: "Graphic Designer",
		company: "Adobe",
		location: "San Jose, CA",
		salary: "$24000 - $30000",
	},
	{
		position: "Mobile App Developer",
		company: "Spotify",
		location: "New York, NY",
		salary: "$26500 - $32000",
	},
	{
		position: "Database Administrator",
		company: "Oracle",
		location: "Redwood City, CA",
		salary: "$26000 - $31500",
	},
	{
		position: "Cybersecurity Expert",
		company: "Cisco",
		location: "San Jose, CA",
		salary: "$27500 - $34000",
	},
];

function JobCard({ job }) {
	return (
		<div className="flex bg-white border-[#96C2DB] px-6 py-4 rounded-md justify-between">
			<div className="flex gap-2 w-1/3">
				<div className="flex flex-col justify-between">
					<AppleIcon />
				</div>
				<div className="flex flex-col  justify-start gap-0">
					<div className="text-[#50555b] font-bold text-sm">
						{job.position}
					</div>
					<div className="opacity-70 text-xs">{job.company}</div>
				</div>
			</div>
			<div className="flex flex-col w-1/3">
				<div className="text-[#50555b] font-bold text-sm">
					{job.location}
				</div>
				<div className="opacity-70 text-xs">Location</div>
			</div>
			<div className="flex flex-col w-1/3">
				<div className="text-[#50555b] font-bold text-sm">
					{job.salary}
				</div>
				<div className="opacity-70 text-xs">Monthly Salary</div>
			</div>
		</div>
	);
}

function JobsList() {
	return (
		<div className="flex flex-col gap-4 overflow-y-auto max-h-[40rem] scrollbar-hide">
			{jobData.map((job, index) => (
				<JobCard key={index} job={job} />
			))}
		</div>
	);
}
export default JobsList;
