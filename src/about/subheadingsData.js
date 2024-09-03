import React from 'react';
import PhotographyGallery from './PhotographyGallery';  // Import the PhotographyGallery component

const subheadingsData = {
  1: [
    {
      title: "About Me",
      content: (
        <>
          <p style={{ lineHeight: "1.6" }}>
      
Hello! I'm Muzzi Khan, a Computer Science major at Wilfrid Laurier University with a passion for technology, creativity, and problem-solving. Outside of my studies, I enjoy playing soccer and capturing the dynamic energy of cars through photography. Below are some of my shots, showcasing the beauty and power of cars.
          </p>
        </>
      ),
    },
    {
      title: "Automotive Photography",  // This adds the Photography tab under Personal
      content: (
        <>
          <p style={{ lineHeight: "1.6" }}>
            My journey into automotive photography started with a passion for cars and the thrill of capturing their essence through the lens. Here are some key highlights of my work in this area.
          </p>
          <PhotographyGallery />  {/* This renders the gallery */}
        </>
      ),
    },
  ],
  2: [
    {title: "Wilfrid Laurier University",
content: (
  <>
    <p style={{ lineHeight: "1.6" }}>
      • BSc in Computer Science <br />
      &nbsp;&nbsp;&nbsp;(Sept 2023 - Present) <br />
      • Expected Graduation Date: August 2027 <br/>
      • Languages Learned: Python, DSA, Java & C
    </p>
  </>
),
    },
    {
      title: "St. Benedict C.S.S",
      content: (
        <>
          <p style={{ lineHeight: "1.6" }}>
          • Gradation Date: September 2022 <br/>
          • Award of Excellence sponsored by Linimar Corporation.
          </p>
        </>
      ),
    },
  ],
  3: [
    {
      title: "Hack The 6ix - Volunteer",
content: (
  <>
    <p>
      <span style={{ color: "purple" }}>
        August 2024 - August 2024 <br/>
        Toronto, Ontario, Canada <br/>
      </span> {/* Close the <span> tag here */}
      Actively contributed to the successful execution of Toronto’s premier hackathon by supporting event logistics and participant coordination. Responsibilities included managing registration, providing technical support, and offering on-site assistance for over 100 participants. Collaborated closely with teams to ensure seamless operations and deliver an engaging experience for all attendees.
    </p>
  </>
)

    },
    {
      title: "Best Buy - Sales Associate",
      content: (
        <>
          <p>
          <span style={{ color: "purple" }}>
        August 2022 - Present <br/>
        Cambridge, Ontario, Canada <br/>
      </span> {/* Close the <span> tag here */}
• Awarded Employee of the Month for consistently showing exceptional performance and outstanding customer service. <br/>
• Provided exceptional customer service by assisting customers with purchasing decisions, locating items, and resolving issues promptly.<br/>
• Maintained the sales floor and ensured merchandise organization, contributing to a positive shopping experience.<br/>
• Processed cash and credit transactions efficiently, demonstrating accuracy and professionalism in a busy retail setting.<br/>
• Developed positive customer relationships through friendly greetings and product knowledge, contributing to customer satisfaction and repeat business.
          </p>
        </>
      ),
    },
    {
      title: " Certifications",
      content: (
        <>
          <p style={{ lineHeight: "1.6" }}>
         
          • JavaScript Algorithms and Data Structures (Issued: August 2024)<br/>
          • Responsive Web Design (Issued: August 2024)<br/>
          • SHSM (Special High Skills Major) Certification (Issued: June 2022)<br/>
          • First Aid Certification (Issued: November 2021)


          </p>
        </>
      ),
    },
  ],
};

export default subheadingsData;
