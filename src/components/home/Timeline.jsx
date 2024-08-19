import React from 'react';

const timelineData = [
  {
    date: "20th Sep, 2021",
    endDate: "30th Sep, 2021",
    title: "Extended Last Date (Final) for Full Paper Submission",
  },
  {
    date: "1st Nov, 2021",
    title: "Final Acceptance Notification",
  },
  {
    date: "1st Nov",
    endDate: "15th Nov, 2021",
    title: "Early bird Registration",
  },
  {
    date: "25th Nov, 2021",
    title: "Camera ready final paper",
  },
  {
    date: "25th Nov, 2021",
    title: "Last date for conference registration",
  },
];

const Timeline = () => {
  return (
    <div className="relative max-w-xl mx-auto mt-10 px-4">
      <div className="absolute border-l-4 border-blue-500 h-full left-5 sm:left-10 top-0"></div>
      <ul className="space-y-8">
        {timelineData.map((item, index) => (
          <li key={index} className="relative pl-12 sm:pl-16">
            <div className="absolute top-0 left-2 sm:left-6 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500">
                {item.date}
                {item.endDate ? ` - ${item.endDate}` : ""}
              </h3>
              <p className="mt-1 text-blue-800 font-medium">{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
