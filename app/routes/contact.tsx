import { Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-primary mb-8 text-3xl font-medium">Contact Us</h1>

      <div className="grid gap-12">
        <div>
          <p className="mb-6 text-gray-700">
            We'd love to hear from you. Whether you have questions about our
            programs, want to attend an event, or are interested in
            collaborating, please reach out using the form or contact
            information below.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div>
                <Mail className="text-primary mt-1 size-6" />
              </div>
              <div>
                <h3 className="text-primary font-medium">Email</h3>
                <a
                  href="mailto:info@triedgold.com"
                  className="text-gray-700"
                >
                  info@triedgold.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div>
                <MapPin className="text-primary size-6" />
              </div>
              <div>
                <h3 className="text-primary font-medium">Location</h3>
                <p className="text-gray-700">
                  Our events are held at various locations. Please contact us
                  for specific event details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
