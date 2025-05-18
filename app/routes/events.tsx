import { Calendar, Clock, ExternalLink, MapPin } from 'lucide-react';
import { Link } from 'react-router';

import type { Route } from './+types/events';

// Sample event data - in a real application, this would come from a database or CMS
const upcomingEvents = [
  {
    id: '1',
    title: 'The Three Angels Messages: Understanding End-Time Prophecy',
    date: 'June 15, 2025',
    time: '7:00 PM - 9:00 PM',
    location: 'Community Center, 123 Main St, Anytown',
    description:
      'Join us for an in-depth study of Revelation 14 and the Three Angels Messages. We will explore the historical context, current relevance, and practical application of these crucial end-time prophecies. This seminar will strengthen your understanding of our unique SDA message and mission.',
    registrationLink: '#register-1',
  },
  {
    id: '2',
    title: "Health and Temperance: God's Natural Remedies",
    date: 'Every Thursday starting June 20, 2025',
    time: '6:30 PM - 8:00 PM',
    location: 'Virtual Event (Zoom)',
    description:
      "This 8-week study will explore the health principles given to Ellen G. White and their biblical foundation. Topics include the eight natural remedies, plant-based nutrition, and practical steps for implementing God's health laws in your daily life. Perfect for those seeking to align their lifestyle with SDA health principles.",
    registrationLink: '#register-2',
  },
  {
    id: '3',
    title: 'Sabbath School Leadership Training',
    date: 'July 12, 2025',
    time: '9:00 AM - 2:00 PM',
    location: 'Church Fellowship Hall',
    description:
      'A comprehensive training session for Sabbath School teachers and leaders. Learn effective methods for teaching Bible lessons, engaging youth, and creating meaningful Sabbath School experiences that honor our SDA heritage and promote spiritual growth.',
    registrationLink: '#register-3',
  },
];

const pastEvents = [
  {
    id: '4',
    title: 'The Great Controversy: Understanding the Conflict',
    date: 'May 8, 2025',
    description:
      'A deep dive into the great controversy theme and its relevance to our daily walk with Christ. This workshop explored the cosmic conflict between good and evil from an SDA perspective.',
  },
  {
    id: '5',
    title: 'Biblical Stewardship: Tithing and Offerings',
    date: 'April 22, 2025',
    description:
      "A practical seminar on biblical stewardship principles, focusing on the importance of tithing, systematic benevolence, and faithful management of God's resources according to SDA teachings.",
  },
  {
    id: '6',
    title: 'Pathfinder Club Annual Investiture',
    date: 'March 31, 2025',
    description:
      'A special ceremony celebrating the spiritual growth and achievements of our youth in the Pathfinder program, reinforcing our commitment to youth development and SDA values.',
  },
];

export function loader() {
  return {
    upcomingEvents,
    pastEvents,
  };
}

export default function EventsPage({ loaderData }: Route.ComponentProps) {
  const { upcomingEvents, pastEvents } = loaderData;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-primary mb-8 text-3xl font-semibold">Events</h1>

      <div className="mb-12">
        <p className="mb-6 text-gray-700">
          At Tried Gold, we offer a variety of events designed to foster
          spiritual growth, build community, and provide practical wisdom for
          navigating life's challenges. From workshops and study groups to
          service opportunities and special gatherings, our events aim to equip
          and encourage participants in their faith journey.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-primary mb-6 text-2xl font-medium">
          Upcoming Events
        </h2>

        <div className="space-y-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-lg border border-gray-200 p-6 shadow-sm"
            >
              <h3 className="text-primary mb-3 text-xl font-medium">
                {event.title}
              </h3>

              <div className="mb-4 space-y-3">
                <div className="flex items-start">
                  <Calendar className="text-primary mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">{event.date}</span>
                </div>

                <div className="flex items-start">
                  <Clock className="text-primary mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">{event.time}</span>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-primary mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">{event.location}</span>
                </div>
              </div>

              <p className="mb-6 text-gray-700">{event.description}</p>

              <Link
                to={event.registrationLink}
                className="inline-flex items-center rounded-md bg-[#0a3254] px-4 py-2 text-white transition-colors hover:bg-[#0c3d65]"
              >
                Register <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-primary mb-6 text-2xl font-medium">Past Events</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-lg border border-gray-100 bg-gray-50 p-5"
            >
              <h3 className="text-primary mb-2 text-lg font-medium">
                {event.title}
              </h3>
              <div className="mb-3 text-sm text-gray-500">{event.date}</div>
              <p className="text-sm text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-lg border border-gray-100 bg-gray-50 p-6">
        <h2 className="text-primary mb-4 text-xl font-medium">
          Want to stay updated on our events?
        </h2>
        <p className="mb-6 text-gray-700">
          Join our mailing list to receive notifications about upcoming events
          and activities.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center rounded-md bg-[#0a3254] px-4 py-2 text-white transition-colors hover:bg-[#0c3d65]"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
