import React, { useState } from "react";
import '../css/Comp.css';
import styles from './Desktop.module.css';


const CinemaWorld = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });


  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
  ];


  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newPosition = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };


    setPosition(newPosition);
  };


  return (
    <div className="cinema-world-container">
      <div className="video-grid">
      <div className={styles.makeIntelligentInvestmentsContainer}>
          					<span className={styles.makeIntelligentInvestmentsContainer1}>
            						<p className={styles.makeIntelligent}>{`MAKE INTELLIGENT `}</p>
            						<p className={styles.investmentsWithUs}>
              							<span>INVESTMENTS</span>
              							<span className={styles.withUs}> WITH US</span>
            						</p>
          					</span>
        				</div>
        {videos.map((video, index) => (
          <div
            key={index}
            className="video-column"
            onMouseEnter={() => setHoveredVideo(index)}
            onMouseLeave={() => setHoveredVideo(null)}
            onMouseMove={handleMouseMove}
          >
            
           
            {hoveredVideo === index && (
              <video
                src={video}
                autoPlay
                loop
                muted
                className="video-player"
                style={{
                  left: `${position.x - 150}px`, // Centers video horizontally
                  top: `${position.y - 150}px`,  // Centers video vertically
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default CinemaWorld;
