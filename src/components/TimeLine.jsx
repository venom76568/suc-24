import React from 'react'
import './Timeline.css'

const TimeLine = () => (
<div>
    <section>
    <div className="bg-black text-white py-8">
    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-16">
      <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
        <p className="ml-2 text-yellow-400 uppercase tracking-loose">TIMELINE</p>
        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2" id='same'>START UP CONCLAVE</p>
        <p className="text-sm md:text-base text-gray-50 mb-4">
          Mark your Calenders as we present before you the Timeline of the SUC-23 Event. Go through all the steps to know the exact process of the Event.
        </p>
        {/* <a href="#"
        className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
        Explore Now</a> */}
      </div>
      <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
        <div id="Dot1"><span id="dot1"></span></div>
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="style1 border-2-2 border-yellow-555 absolute h-full border"
              ></div>
            <div className="style2 border-2-2 border-yellow-555 absolute h-full border"
              ></div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-400">7 Nov, 2023</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl" id='same'>Registration Starts</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  Start your journey with Start-Up Conclave 2023 by registering for the event by clicking the above Register button.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1  w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-yellow-400">30 Nov, 2023</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl" id='same'>Registration Ends</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  The Last Day of Registration. Make sure to register beforehand and grab this exciting opportunity to deliever on a Big Stage.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-400"> 15 Dec, 2023</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl" id='same'>Mentorship Round</h4>
                <p clasaName="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  The Start of Mentorship rounds wherein Expereinced Business owners would consult and mentor you one on one to build your Dream Company.
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>

              <div className="order-1  w-5/12 px-1 py-4">
                <p className="mb-3 text-base text-yellow-400">2 Feb,2023</p>
                <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left" id='same'>The Consortium Battle</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  Top 15 Start-Ups which will qualify for the above rounds will then be given a once in a lifetime opportunity to present their ideas before our Sharks.
                </p>
              </div>
            </div>
          </div>
          <div id="Dot1"><span id="dot1"></span></div>
          <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" alt='hello' />
        </div>
      </div>
    </div>
  </div>
  </section>
    </div>
);

export default TimeLine;
