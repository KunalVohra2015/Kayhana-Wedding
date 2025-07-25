import React, { useState } from 'react';
import './App.css';

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      type: 'welcome',
      title: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ',
      subtitle: 'Kayhana & [Partner\'s Name]',
      content: 'We joyfully invite you to celebrate our union',
      blessing: 'ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ, ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫਤਿਹ',
      videoUrl: '/welcome-video.mp4'
    },
    {
      type: 'event',
      title: 'Sangeet & Mehendi',
      date: 'Friday, [Date] 2024',
      time: '6:00 PM onwards',
      venue: 'Community Hall',
      description: 'An evening of music, dance, and henna',
      icon: '🎵'
    },
    {
      type: 'event',
      title: 'Baraat',
      date: 'Saturday, [Date] 2024',
      time: '9:00 AM',
      venue: 'Starting Point Address',
      description: 'The groom\'s procession',
      icon: '🎺'
    },
    {
      type: 'event',
      title: 'Anand Karaj',
      date: 'Saturday, [Date] 2024',
      time: '10:00 AM',
      venue: 'Gurudwara Sahib',
      description: 'The sacred wedding ceremony',
      icon: '☬'
    },
    {
      type: 'event',
      title: 'Reception',
      date: 'Saturday, [Date] 2024',
      time: '7:00 PM onwards',
      venue: 'Banquet Hall',
      description: 'Dinner and celebration',
      icon: '🎊'
    },
    {
      type: 'rsvp',
      title: 'RSVP',
      content: 'Please let us know if you can join us',
      phone: '+1 (123) 456-7890',
      email: 'wedding@example.com'
    }
  ];

  const handleEnvelopeClick = () => {
    setIsEnvelopeOpen(true);
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClose = () => {
    setIsEnvelopeOpen(false);
    setCurrentPage(0);
  };

  return (
    <div className="App">
      {!isEnvelopeOpen ? (
        <div className="envelope-container" onClick={handleEnvelopeClick}>
          <div className="envelope">
            <div className="envelope-flap"></div>
            <div className="envelope-body">
              <div className="envelope-text">
                <h2>You're Invited!</h2>
                <p>Click to open</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card-container">
          <div className="card">
            <button className="close-btn" onClick={handleClose}>×</button>
            
            <div className="card-content">
              {pages[currentPage].type === 'welcome' && (
                <div className="welcome-page">
                  <div className="video-section">
                    <video 
                      controls
                      className="welcome-video"
                      poster="/video-poster.jpg"
                    >
                      <source src={pages[currentPage].videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <h1 className="greeting">{pages[currentPage].title}</h1>
                  <h2 className="couple-names">{pages[currentPage].subtitle}</h2>
                  <p className="blessing">{pages[currentPage].blessing}</p>
                </div>
              )}

              {pages[currentPage].type === 'event' && (
                <div className="event-page">
                  <div className="event-icon">{pages[currentPage].icon}</div>
                  <h2 className="event-title">{pages[currentPage].title}</h2>
                  <div className="event-details">
                    <p className="event-date">{pages[currentPage].date}</p>
                    <p className="event-time">{pages[currentPage].time}</p>
                    <p className="event-venue">{pages[currentPage].venue}</p>
                    <p className="event-description">{pages[currentPage].description}</p>
                  </div>
                </div>
              )}

              {pages[currentPage].type === 'rsvp' && (
                <div className="rsvp-page">
                  <h2 className="rsvp-title">{pages[currentPage].title}</h2>
                  <p className="rsvp-content">{pages[currentPage].content}</p>
                  <div className="contact-info">
                    <a href={`tel:${pages[currentPage].phone}`} className="contact-link">
                      📞 {pages[currentPage].phone}
                    </a>
                    <a href={`mailto:${pages[currentPage].email}`} className="contact-link">
                      ✉️ {pages[currentPage].email}
                    </a>
                  </div>
                  <div className="thank-you">
                    <p>We can't wait to celebrate with you!</p>
                    <p className="khanda">☬</p>
                  </div>
                </div>
              )}
            </div>

            <div className="card-navigation">
              <button 
                className="nav-button prev" 
                onClick={handlePrevious}
                disabled={currentPage === 0}
              >
                ←
              </button>
              <div className="page-indicator">
                {pages.map((_, index) => (
                  <span 
                    key={index} 
                    className={`dot ${index === currentPage ? 'active' : ''}`}
                  />
                ))}
              </div>
              <button 
                className="nav-button next" 
                onClick={handleNext}
                disabled={currentPage === pages.length - 1}
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;