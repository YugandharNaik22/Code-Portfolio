import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider, Loader } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  const [loading, setLoading] = useState(false);

  const handleToggle = (value) => {
    setLoading(true);
    setToggle(value);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton $active={toggle === 'all'} value="all" onClick={() => handleToggle('all')}>
            All
          </ToggleButton>
          <Divider />
          <ToggleButton $active={toggle === 'static web app'} value="static web app" onClick={() => handleToggle('static web app')}>
            Static WEB APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton $active={toggle === 'web app'} value="web app" onClick={() => handleToggle('web app')}>
            Dynamic WEB APP'S
          </ToggleButton>
        </ToggleButtonGroup>

        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          <CardContainer>
            {toggle === 'all'
              ? projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  />
                ))
              : projects
                  .filter((item) => item.category === toggle)
                  .map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                    />
                  ))}
          </CardContainer>
        )}
      </Wrapper>
    </Container>
  );
};

export default Projects;
