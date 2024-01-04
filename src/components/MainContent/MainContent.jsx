
import React, { useState } from 'react';
import './MainContent.css';

function MainContent({ data }) {
    const [isRotating, setIsRotating] = useState(false);

    const handleImageClick = () => {
        setIsRotating(!isRotating);
    };

    const renderCourses = () => {
        return data.education.relevantCourses.map((course, index) => (
            <li key={index}>{course}</li>
        ));
    };

    const renderWorkExperience = () => {
        return data.workExperience.map((job, index) => (
            <div key={index} className='work'>
                <h3>{job.position}</h3>
                <p>{job.company}</p>
                <p>{job.startDate} - {job.endDate}</p>
                <p>{job.description}</p>
            </div>
        ));
    };

    return (
        <main>
            <section>
                <div className="about-me-container" id='about-me-container'>
                    <img
                        src={data.avatar}
                        alt="Avatar"
                        className={`avatar ${isRotating ? 'rotate' : ''}`}
                        onClick={handleImageClick}
                    />
                    <div className="about-me-content">
                        <h2>About Me</h2>
                        <p>{data.aboutMe}</p>
                    </div>
                </div>
            </section>

            <section className="education-container" id='education-container'>
                <h2>Education</h2>
                <p>{data.education.degree}</p>
                <p>{data.education.university}</p>
                <p>{data.education.graduationYear} - {data.education.honors}</p>
                <ul>{renderCourses()}</ul>
            </section>

            <section className="work-container" id='work-container'>
                <h2>Work Experience</h2>
                <div className="work-experience">{renderWorkExperience()}</div>
            </section>
        </main>
    );
}

export default MainContent;
