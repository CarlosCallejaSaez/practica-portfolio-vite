
import React from 'react';
import classes from "./Pro.module.css"

function Projects({ projects }) {
    const renderProjects = () => {
        return projects.map((project, index) => (
            <div key={index} className={classes.project_item}>
                <img src={project.preview} alt={`Preview of ${project.title}`} className={classes.project_image} />
                <div className={classes.project_details}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={classes.view_on_github}>
                        View on GitHub
                    </a>
                </div>
            </div>
        ));
    };

    return (
        <section className={classes.projects_section}>
            <h2>Projects</h2>
            <div className={classes.projects_container}>{renderProjects()}</div>
        </section>
    );
}

export default Projects;
