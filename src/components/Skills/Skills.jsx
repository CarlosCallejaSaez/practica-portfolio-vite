import React, { useState } from 'react';
import './Skills.css';

function Skills({ skills }) {
    const [searchTerm, setSearchTerm] = useState('');

    const renderSkills = () => {
        const filteredSkills = skills.filter(skill =>
            skill.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return filteredSkills.map((skill, index) => (
            <li key={index} className="skill-item li">
                {skill}
            </li>
        ));
    };

    return (
        <section className="skills-section" id="skills">
            <h2>Skills</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <ul className="skills-list">{renderSkills()}</ul>
        </section>
    );
}

export default Skills;
