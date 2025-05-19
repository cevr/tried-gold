import { Mail, MapPin, Send } from 'lucide-react';
import type { ActionFunctionArgs } from 'react-router';
import { Form, useActionData } from 'react-router';

type ActionData = {
  success: boolean;
  message: string;
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // Here you would typically handle the form submission
  // For now, we'll simulate a successful submission
  return {
    success: true,
    message: "Thank you for your message. We'll be in touch soon.",
  };
}

export default function ContactPage() {
  const actionData = useActionData<ActionData>();

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-primary mb-8 text-3xl font-medium">Contact Us</h1>

      <div className="grid gap-12 md:grid-cols-2">
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
                <p className="text-gray-700">info@triedgold.com</p>
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

        <div>
          {actionData ? (
            <div
              className={`rounded-md p-4 ${actionData.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
            >
              <p>{actionData.message}</p>
              {actionData.success && (
                <Form method="post">
                  <button
                    type="submit"
                    className="text-primary mt-4 underline"
                  >
                    Send another message
                  </button>
                </Form>
              )}
            </div>
          ) : (
            <Form
              method="post"
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-[#0a3254] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-[#0a3254] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-[#0a3254] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-[#0a3254] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-[#0a3254] px-4 py-2 text-white transition-colors hover:bg-[#0c3d65]"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </button>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
}
