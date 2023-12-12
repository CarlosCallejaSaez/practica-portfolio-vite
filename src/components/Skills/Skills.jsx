
import React from 'react';
import './Skills.css';

function Skills({ skills }) {
    const renderSkills = () => {
        return skills.map((skill, index) => (
            <li key={index} className="skill-item">
                {skill}
            </li>
        ));
    };

    return (
        <section className="skills-section">
            <h2>Skills</h2>
            <ul className="skills-list">{renderSkills()}</ul>
        </section>
    );
}

export default Skills;
