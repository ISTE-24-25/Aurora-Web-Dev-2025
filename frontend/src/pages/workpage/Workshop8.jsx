import React from 'react';
import w1 from '../../images/webdev.svg';
import logo from '../../images/iste.png';
import workback from '../../images/work_back.png';
import { useNavigate } from "react-router-dom";


const Workshop1 = () => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8 pt-[299px] pb-[250px] font-press-start bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${workback})` }}
    >
      {/* Workshop Title */}
      {/* <section className="text-center pb-[410px]">
        <h1 className="text-7xl font-heading font-extrabold">WORKSHOPS</h1>
        <p className="mt-4 text-2xl max-w-3xl mx-auto font-body leading-relaxed">
          Get Ready To Embark On An Unforgettable Journey Into The Realms Of Technology with TechWeek: Aurora, Brought To You By ISTE Manipal.
        </p>
      </section> */}

    {/* Neural Network Section */}
    <div className="text-center">
          <h2 className="lg:text-4xl text-3xl text-[#05E0EE] font-bold font-heading mb-6">Crafting the Web:  A Beginner's Guide to WebDev</h2>
          {/* <img src={w1} alt="Neural Network" className="mx-auto" style={{ width: '1153px', height: '654px' }} /> */}
     </div>

      {/* Workshop Content */}
      <section className="mt-12 w-full max-w-4xl bg-[rgba(255,255,255,0.06)] rounded-[36px] border border-[#EAEAEA] shadow-md shadow-[rgba(0,0,0,0.25)] backdrop-blur-[17.5px] p-8 pt-[95px]">

        {/* Description Section */}
        <div className="mt-8">
          <h3 className="lg:text-4xl  text-[22px] text-[#EAEAEA] font-bold text-center font-heading">Description</h3>
          <p className="mt-4 text-center font-body text-[#EAEAEA] text-base leading-relaxed">
            
"Crafting the Web: A Beginner's Guide to WebDev" is an introductory guide to building websites, covering HTML, CSS, and JavaScript basics. It empowers beginners to create modern, responsive, and interactive web experiences.
          </p>
          <div className="mt-6 flex justify-center items-center gap-8 text-center">
            {/* Date */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="font-semibold text-base text-[#EAEAEA] font-body">29th January, 2025</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 12l4.243-4.243a4 4 0 00-5.657-5.657L7.757 6.343A4 4 0 005.1 9.757l4.242 4.243-4.243 4.243a4 4 0 105.657 5.657L16.657 17.657a4 4 0 005.657-5.657z"
                />
              </svg>
              <p className="font-semibold text-[#EAEAEA] text-base font-body">AB 3</p>
            </div>

            {/* Time */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-7a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="font-semibold text-[#EAEAEA] text-base font-body">5:30 pm onwards</p>
            </div>
          </div>
        </div>

        {/* About Our Club Section */}
        <div className="mt-8 pt-9 p-6 rounded-[36px] bg-transparent border border-[#EAEAEA] shadow-md shadow-[rgba(0,0,0,0.25)] backdrop-blur-[17.5px] pt-[56px]">
        <div className="absolute top-4 leftt-4">
    <img src={logo} alt="Neural Network" className="rounded-full" style={{ width: '64px', height: '64px' }} />
  </div>
  <div className="sm:mt-8 mt-12">
          <h3 className="text-3xl font-bold text-center text-[#EAEAEA] font-heading">About Our Club</h3>
          <p className="mt-4 text-center font-body text-base  text-[#EAEAEA] leading-loose">
          The Indian Society for Technical Education (ISTE) Student Chapter, Manipal, is a leading technical club that provides students with opportunities to explore domains, enhance skills, and grow professionally. With five specialized domains, including a coding community, ISTE fosters learning through workshops, seminars, and hands-on experiences.
Key events like ACUMEN in TechTatva, AURORA TechWeek, and the ISTE Summer School drive innovation and excellence in the tech community.
          </p>
          </div>
        </div>

        {/* Register Button */}
        <div className="text-center mt-8">
        <button className="rounded-[135px] bg-orange-400 shadow-inner shadow-[0_4px_6px_5px_rgba(0,0,0,0.25)] px-6 py-2 text-white font-semibold hover:bg-[#04c3d0] transition duration-300 ease-in-out"
          onClick={()=>{
            navigate(`/Workshop`)
          }}>
            Go To Workshop Page
          </button>
          <p className="mt-4 text-sm font-body text-white">Register to reserve your spot now!!</p>
        </div>
      </section>
    </div>
  );
};

export default Workshop1;
