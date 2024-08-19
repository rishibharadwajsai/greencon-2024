import React from 'react';

const timelineData = [
  {
    date: "30th Nov, 2024",
    title: "Submission deadline of full paper",
  },
  {
    date: "15th Feb, 2025",
    title: "Final acceptance Notification",
  },
  {
    date: "15th Feb, 2025",
    endDate: "28th Feb, 2025",
    title: "Early bird registration",
  },
  {
    date: "1st March, 2025",
    title: "Submission of Camera ready final paper",
  },
  {
    date: "10th March, 2025",
    title: "Last date for conference registration",
  },
];

const Timeline = () => {
  return (
    <div className="relative max-w-2xl mx-auto mt-10 px-4">
      <div className="absolute border-l-2 border-blue-500 h-full left-6 top-0"></div>
      <ul className="space-y-6">
        {timelineData.map((item, index) => (
          <li key={index} className="relative pl-8">
            <div className="absolute top-6 left-0 w-4 h-4 bg-blue-500 rounded-full mt-1.5"></div>
            <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500">
                {item.date}
                {item.endDate ? ` - ${item.endDate}` : ""}
              </h3>
              <p className="mt-2 text-blue-800 font-medium">{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
