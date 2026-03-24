import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import data, { getText } from "../../data";

// Helper function to detect if file is a video
const isVideoFile = (url) => {
  if (!url) return false;
  const videoExtensions = ['.webm', '.mp4', '.mov', '.avi'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

const Card = ({id, heading, paragraph, degree, duration, position, industry, result, imgUrl, projectLink, setOpenModal, setId, type = "project"}) => {
  const { language } = useLanguage();
  const isVideo = isVideoFile(imgUrl);
  const isInfoCard = type === "education" || type === "experience";
  
  return (
    <div className={`card ${isInfoCard ? "info-card" : ""}`}>
      {isInfoCard ? (
        <div className="card-front">
          <div className="logo-container">
            <img src={imgUrl} alt={heading} className="info-logo" />
          </div>
          <div className="info-text-front">
            <p className="degree">{type === "education" ? degree : position}</p>
          </div>
        </div>
      ) : isVideo ? (
        // Video background
        <div className="background-video">
          <video
            className="background-video-element"
            src={imgUrl}
            autoPlay
            muted
            loop
            playsInline
            loading="lazy"
            preload="metadata"
          />
          <div className="video-overlay" />
        </div>
      ) : (
        // Image background
        <div 
          className="background-image"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" + imgUrl + ")"
          }}
        />
      )}
      <div className="content">
        <h1 className="header" style={{ fontWeight: "bold" }}>{heading}</h1>
        
        {isInfoCard && (
          <div className="info-detail">
            <p className="degree">{type === "education" ? degree : position}</p>
            <p className="duration">{duration}</p>
          </div>
        )}

        {industry && (
          <div className="industry-tag">
            <span role="img" aria-label="factory">🏭</span> {industry}
          </div>
        )}
        {result && (
          <p className="result-text">{result}</p>
        )}
        
        <div className="explore-text" onClick={()=>{
            setOpenModal(true);
            setId(id);
          }}>
          Click to Explore →
        </div>
      </div>
      
    </div>
    
  )
}

export default Card
