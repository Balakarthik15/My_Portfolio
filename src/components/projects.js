import React, { useState, useEffect } from "react"
import Fade from "./animations/Fade"
import { Carousel } from "react-bootstrap"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import ProfessionalModal from "./ProfessionalModal"
import "../styles/projects.scss"

import ackermanImg from "../images/ProjectPhotos/ackermann_car.mp4"
import pinnImg from "../images/ProjectPhotos/pinn_sideslip.mp4"
import frankaImg from "../images/ProjectPhotos/franka_panda.mp4"
import dataAnalyticsImg from "../images/ProjectPhotos/data_analytics.mp4"
import amrFleetImg from "../images/ProjectPhotos/amr_fleet.webp"
import otSecurityImg from "../images/ProjectPhotos/Otsecurity.png"

const Project = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("github");
  const [isMobile, setIsMobile] = useState(false);
  const [professionalModalOpen, setProfessionalModalOpen] = useState(false);
  const [professionalModalItem, setProfessionalModalItem] = useState(null);

  // Media mapping for carousel items
  const mediaMap = {
    ackermanImg,
    pinnImg,
    frankaImg,
    dataAnalyticsImg,
    amrFleetImg,
    otSecurityImg,
  };

  // Get carousel items from data and dynamically convert text fields based on language
  const carouselItems = data.projectsCarouselItems.map(item => ({
    ...item,
    title: getText(item.title, language),
    subtitle: getText(item.subtitle, language),
    description: getText(item.description, language),
    industry: getText(item.industry, language),
    techStack: getText(item.techStack, language),
    outcome: getText(item.outcome, language),
    oneLiner: getText(item.oneLiner, language),
    role: getText(item.role, language),
    demoCredit: getText(item.demoCredit, language),
    ndaNote: getText(item.ndaNote, language),
    demoLinks: item.demoLinks ? item.demoLinks.map(link => ({
      text: getText(link.text, language),
      url: link.url
    })) : [],
    buttons: item.buttons.map(btn => ({
      text: getText(btn.text, language),
      url: btn.url
    })),
    media: mediaMap[item.media],
  }));

  const filteredItems = carouselItems.filter(item => item.category === activeCategory);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    try {
      window.addEventListener('resize', checkMobile);
    } catch (error) {
    }
    
    return () => {
      try {
        window.removeEventListener('resize', checkMobile);
      } catch (error) {
      }
    };
  }, []);

  const handleCarouselSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handleTabChange = (category) => {
    setActiveCategory(category);
    setActiveIndex(0);
  };

  const openProfessionalModal = (item) => {
    setProfessionalModalItem(item);
    setProfessionalModalOpen(true);
  };

  return (
    <div className="section" id="projects">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText(data.sections.projects, language)}</h1>
        </Fade>
          <div className="project-wrapper">
            <div className="project-tabs">
              <button 
                className={`tab-btn ${activeCategory === 'github' ? 'active' : ''}`}
                onClick={() => handleTabChange('github')}
              >
                {getText(data.sections.githubProjects, language)}
              </button>
              <button 
                className={`tab-btn ${activeCategory === 'professional' ? 'active' : ''}`}
                onClick={() => handleTabChange('professional')}
              >
                {getText(data.sections.professionalWork, language)}
              </button>
            </div>

            {filteredItems.length > 0 && (
              <Carousel 
                className="masterCarousel" 
                activeIndex={activeIndex}
                onSelect={handleCarouselSelect}
                touch={true} 
                interval={activeCategory === 'professional' ? 5000 : 3000}
                indicators={!isMobile && filteredItems.length > 1}
                controls={filteredItems.length > 1}
                keyboard={false}
                slide={true}
                wrap={true}
                variant="dark"
              >
                  {filteredItems.map((item, index) => (
                    <Carousel.Item key={index}>
                      {item.type === 'video' ? (
                        <video
                          className="d-block w-100"
                          src={item.media}
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <img
                          className="d-block w-100"
                          src={item.media}
                          alt={item.title}
                          loading="lazy"
                        />
                      )}
                      <Carousel.Caption className="carouselCaption">
                        {item.category === 'professional' ? (
                          <div className="professional-info">
                            <h3>{item.title}</h3>
                            <div className="meta-row">
                              <span className="label">{language === 'en' ? 'Industry:' : 'Branche:'}</span>
                              <span className="value">{item.industry}</span>
                            </div>
                            <p className="one-liner-text">{item.oneLiner}</p>
                            <button
                              className="explore-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                openProfessionalModal(item);
                              }}
                            >
                              {language === 'en' ? 'Click to Explore →' : 'Klicken zum Entdecken →'}
                            </button>
                          </div>
                        ) : (
                          <div className="github-info">
                            <h3>{item.title}</h3>
                            <h4>{item.subtitle}</h4>
                            <p>{item.description}</p>
                            <div className="btn-row">
                              {item.buttons.map((button, buttonIndex) => (
                                <button
                                  key={buttonIndex}
                                  onClick={() => window.open(button.url)}
                                  type="button"
                                  className="btn"
                                >
                                  {button.text}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
              </Carousel>
            )}
          </div>
        </div>

      {/* Professional project modal */}
      {professionalModalOpen && professionalModalItem && (
        <ProfessionalModal
          item={professionalModalItem}
          closeModal={() => setProfessionalModalOpen(false)}
        />
      )}
    </div>
  )
}

export default Project
