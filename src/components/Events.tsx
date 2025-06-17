import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  location: string;
  type: string;
}

const Events: React.FC = () => {
  const upcomingEvents: Event[] = [
    {
      title: "मैथिली काव्य गोष्ठी",
      date: "15 जुलाई 2024",
      location: "दरभंगा, बिहार",
      type: "काव्य पाठ"
    },
    {
      title: "सांस्कृतिक कार्यक्रम",
      date: "28 अगस्त 2024", 
      location: "जनकपुर, नेपाल",
      type: "मैथिली सम्मेलन"
    }
  ];

  return (
    <section id="events" className="section bg-gradient-yellow">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">आगामी कार्यक्रम</h2>
          <div className="section-divider yellow"></div>
          <p className="section-description">काव्य पाठ आ सांस्कृतिक कार्यक्रम</p>
        </div>
        <div className="events-grid">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-header">
                <Calendar className="icon-md event-icon" />
                <span className="event-type">
                  {event.type}
                </span>
              </div>
              <h3 className="event-title">{event.title}</h3>
              <div className="event-details">
                <Calendar className="event-icon-small" />
                {event.date}
              </div>
              <div className="event-details">
                <MapPin className="event-icon-small" />
                {event.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events; 