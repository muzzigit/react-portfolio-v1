import React from 'react';
import PhotographyGallery from './PhotographyGallery';  

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
      &nbsp;&nbsp;&nbsp;(Sept 2023 - Aug 2027) <br />
      • Expected Graduation Date: August 2027 <br/>
    </p>
  </>
),
    },
    {
      title: "Relevant Coursework",
      content: (
        <>
          <p style={{ lineHeight: "1.6" }}>
          • Programming Languages:
          Python, C, Java , VBA, ARMv7<br/>
          • Software Engineering <br/>
          • Data Structures and Algorithm Design<br/>
          • SQL / Database Management Systems<br/>
          • Microprocessors / Digital Electronics<br/>
          • Opject-Oriented Programming (OOP)<br/>
          • Discrete Mathematics<br/>
          • Operating Systems<br/>
          • Project Management<br/>
          </p>
        </>
      ),
    },
  ],
  3: [
    {
      title: "Refonte Learning - AI/Data Engineer",
      content: (
        <>
          <p>
          <span style={{ color: "darkgrey" }}>
        October 2024 - Present <br/>
        Remote <br/>
      </span> {/* Close the <span> tag here */}
      •Enhanced Gen AI models with precision Prompt Engineering, driving adaptability and accuracy across
      diverse data applications.<br/>
      •Engineered robust data pipelines and seamless ETL processes, enabling smooth, efficient data flow for
      real-time and batch processing across global projects.<br/>
      •Designed high-efficiency data warehouses and optimized databases, creating scalable structures that
      streamline data access and support massive data loads.<br/>
      •Harnessed big data tools such as Hadoop and Spark, transforming vast datasets into actionable insights
      through powerful, scalable processing.<br/>
          </p>
        </>
      ),
    },
    {
      title: "SwiftlyWeb - Web Developer",
      content: (
        <>
          <p>
          <span style={{ color: "darkgrey" }}>
        June 2024 - Present <br/>
        Self-employed <br/>
      </span> {/* Close the <span> tag here */}
      • Developed custom websites for small businesses to boost online visiblility using front-end and back-end technologies <br/>
      • Conducted client outreach and needs analysis via social media, presenting tailored UI/UX prototypes. <br/>
      • Managed the full development lifecycle, from requirements gathering to deployment.<br/>
      • Implemented HTML, CSS, JavaScript, and back-end frameworks to build dynamic, data-driven applications.<br/>
          </p>
        </>
      ),
    },
    {
      title: "Hack The 6ix - Workshop Supervisor",
content: (
  <>
    <p>
      <span style={{ color: "darkgrey" }}>
        August 2024 - August 2024 <br/>
        Toronto, Ontario, Canada <br/>
      </span> {/* Close the <span> tag here */}
      • Led coding workshops on HTML, CSS, JavaScript, and server side programming <br/>
      • Worked with instructors to refine curriculum materials for better participant outcomes.<br/>
      • Facilitated group discussions and collaborative coding to foster teamwork and problem-solving.<br/>
      • Mentored attendees on project, troubleshooting, and software development best practices.<br/>
    </p>
  </>
)

    },
    
    {
      title: " Certifications",
      content: (
        <>
          <p style={{ lineHeight: "1.6" }}>
          • Front End Development Libraries (Issued: October 2024) <br/>
          • JavaScript Algorithms and Data Structures (Issued: August 2024)<br/>
          • Responsive Web Design (Issued: August 2024)<br/>
          


          </p>
        </>
      ),
    },
  ],
};

export default subheadingsData;
