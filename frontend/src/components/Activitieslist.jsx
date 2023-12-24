import React, { useState } from 'react';
import activityData from '../utils/activitieslist.json';

const ActivitiesList = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState({});

  const openPopup = (activity) => {
    setSelectedActivity(activity);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <h1 className="sm:text-3xl text-2xl title-font mb-4 text-gray-900 text-center mt-10 font-bold">
        Recently Completed Activities - Aidwave Connect
      </h1>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {activityData.map((activity, index) => (
              <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">{activity.category}</span>
                  <span className="mt-1 text-gray-500 text-sm">{activity.date}</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{activity.title}</h2>
                  <p className="leading-relaxed">{activity.description}</p>
                  <button
                    className="text-indigo-500 inline-flex items-center mt-4"
                    onClick={() => openPopup(activity)}
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Card */}
      {isPopupVisible && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-md rounded-md">
          {/* Add content for the popup card here */}
          <h3 className="text-xl font-semibold mb-4">{selectedActivity.title}</h3>
          <p className="text-gray-700">{selectedActivity.description}</p>
          <button
            className="bg-indigo-500 text-white px-4 py-2 mt-4"
            onClick={closePopup}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}

export default ActivitiesList;
