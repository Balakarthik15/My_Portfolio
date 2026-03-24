import React from "react"
import Card from "./atoms/Card"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import {useState} from "react"
import Modal from "./modal"

const Work = () => {
  const { language } = useLanguage();
  const [openModal, setOpenModal] = useState(false);

  const [id, setId] = useState(0);
  
  // Navigation functions for modal
  const handlePrevious = () => {
    if (id > 0) {
      setId(id - 1);
    }
  };
  
  const handleNext = () => {
    if (id < data.projects.length - 1) {
      setId(id + 1);
    }
  };

  const internships = data.projects.filter(p => p.workType === 'internship');
  const fullTime = data.projects.filter(p => p.workType === 'full-time');

  return (
    <div className="section" id="work">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText(data.sections.experience, language)}</h1>
        </Fade>
        <div className="work-wrapper split-layout">
          
          {/* Internship Section */}
          <div className="work-column">
            <Fade bottom cascade distance="20px">
              <h2>{getText(data.sections.workInternship, language)}</h2>
            </Fade>
            <div className="grid">
              <Fade>
                {internships.map((project, index) => (
                  <Card
                    key={`internship-${index}`}
                    id={data.projects.indexOf(project)}
                    heading={getText(project.title, language)}
                    paragraph={getText(project.para, language)}
                    position={getText(project.position, language)}
                    duration={project.date}
                    industry={getText(project.industry, language)}
                    result={getText(project.result, language)}
                    imgUrl={project.imageSrc}
                    projectLink={project.url}
                    setOpenModal={setOpenModal}
                    setId={setId}
                    type="experience"
                  ></Card>
                ))}
              </Fade>
            </div>
          </div>

          {/* Full Time Section */}
          <div className="work-column">
            <Fade bottom cascade distance="20px">
              <h2>{getText(data.sections.workFullTime, language)}</h2>
            </Fade>
            <div className="grid">
              <Fade>
                {fullTime.map((project, index) => (
                  <Card
                    key={`fulltime-${index}`}
                    id={data.projects.indexOf(project)}
                    heading={getText(project.title, language)}
                    paragraph={getText(project.para, language)}
                    position={getText(project.position, language)}
                    duration={project.date}
                    industry={getText(project.industry, language)}
                    result={getText(project.result, language)}
                    imgUrl={project.imageSrc}
                    projectLink={project.url}
                    setOpenModal={setOpenModal}
                    setId={setId}
                    type="experience"
                  ></Card>
                ))}
              </Fade>
            </div>
          </div>

          {openModal && <Modal 
            closeModal={setOpenModal} 
            id={id} 
            totalItems={data.projects.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />}
    
        </div>
      </div>
    </div>
  )
}

export default Work
