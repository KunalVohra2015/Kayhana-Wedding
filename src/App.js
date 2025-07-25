import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('welcome');

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="wedding-nav">
        <button 
          className={`nav-item ${currentSection === 'welcome' ? 'active' : ''}`}
          onClick={() => setCurrentSection('welcome')}
        >
          Welcome
        </button>
        <button 
          className={`nav-item ${currentSection === 'invitation' ? 'active' : ''}`}
          onClick={() => setCurrentSection('invitation')}
        >
          Invitation
        </button>
        <button 
          className={`nav-item ${currentSection === 'events' ? 'active' : ''}`}
          onClick={() => setCurrentSection('events')}
        >
          Events
        </button>
        <button 
          className={`nav-item ${currentSection === 'venue' ? 'active' : ''}`}
          onClick={() => setCurrentSection('venue')}
        >
          Venue
        </button>
        <button 
          className={`nav-item ${currentSection === 'rsvp' ? 'active' : ''}`}
          onClick={() => setCurrentSection('rsvp')}
        >
          RSVP
        </button>
      </nav>

      {/* Main Content */}
      <main className="wedding-content">
        {currentSection === 'welcome' && <WelcomeSection />}
        {currentSection === 'invitation' && <InvitationSection />}
        {currentSection === 'events' && <EventsSection />}
        {currentSection === 'venue' && <VenueSection />}
        {currentSection === 'rsvp' && <RSVPSection />}
      </main>
    </div>
  );
}

// Welcome Section with Video
function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="welcome-overlay">
        <h1 className="welcome-title">ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ</h1>
        <h2 className="couple-names">Kayhana & [Partner's Name]</h2>
        <p className="welcome-text">Welcome to our wedding celebration</p>
        <div className="video-container">
          <video controls poster="/video-poster.jpg">
            <source src="/welcome-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

// Invitation Card Section
function InvitationSection() {
  return (
    <section className="invitation-section">
      <div className="invitation-card">
        <div className="card-border">
          <div className="card-content">
            <div className="khanda-symbol">☬</div>
            <h2 className="invitation-title">Wedding Invitation</h2>
            <div className="invitation-text">
              <p className="blessing">ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ, ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫਤਿਹ</p>
              <p className="invite-message">
                With the blessings of Waheguru Ji and our families,<br/>
                we joyfully invite you to celebrate<br/>
                the union of
              </p>
              <h3 className="bride-groom">
                Kayhana<br/>
                <span className="with">&</span><br/>
                [Partner's Name]
              </h3>
              <p className="date">Saturday, [Date] 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Events Section
function EventsSection() {
  const events = [
    {
      name: "Sangeet & Mehendi",
      date: "Friday, [Date]",
      time: "6:00 PM onwards",
      venue: "Community Hall",
      description: "An evening of music, dance, and henna"
    },
    {
      name: "Anand Karaj",
      date: "Saturday, [Date]",
      time: "10:00 AM",
      venue: "Gurudwara Sahib",
      description: "The sacred wedding ceremony"
    },
    {
      name: "Reception",
      date: "Saturday, [Date]",
      time: "7:00 PM onwards",
      venue: "Banquet Hall",
      description: "Dinner and celebration"
    }
  ];

  return (
    <section className="events-section">
      <h2 className="section-title">Wedding Events</h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.name}</h3>
            <p className="event-date">{event.date}</p>
            <p className="event-time">{event.time}</p>
            <p className="event-venue">{event.venue}</p>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Venue Section
function VenueSection() {
  return (
    <section className="venue-section">
      <h2 className="section-title">Venue Details</h2>
      <div className="venue-grid">
        <div className="venue-card">
          <h3>Gurudwara Sahib</h3>
          <p>123 Main Street, City, State 12345</p>
          <button className="directions-btn">Get Directions</button>
        </div>
        <div className="venue-card">
          <h3>Reception Venue</h3>
          <p>456 Celebration Ave, City, State 12345</p>
          <button className="directions-btn">Get Directions</button>
        </div>
      </div>
    </section>
  );
}

// RSVP Section
function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: 1,
    attending: 'yes',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('RSVP submitted:', formData);
    alert('Thank you for your RSVP!');
  };

  return (
    <section className="rsvp-section">
      <h2 className="section-title">RSVP</h2>
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        <select
          value={formData.attending}
          onChange={(e) => setFormData({...formData, attending: e.target.value})}
        >
          <option value="yes">Joyfully Attending</option>
          <option value="no">Regretfully Declining</option>
        </select>
        <input
          type="number"
          placeholder="Number of Guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={(e) => setFormData({...formData, guests: e.target.value})}
        />
        <textarea
          placeholder="Special message or dietary requirements"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          rows="4"
        />
        <button type="submit" className="submit-btn">Submit RSVP</button>
      </form>
    </section>
  );
}

export default App;