import { Bookmark } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-primary mb-8 text-3xl font-medium">About</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-primary mb-4 flex items-center text-xl font-medium">
            <Bookmark className="mr-2 h-5 w-5" />
            Our Name
          </h2>
          <p className="text-gray-700">
            Our name is inspired by Revelation 3:18, which speaks of "gold tried
            in the fire" - symbolizing the purest, most resilient forms of faith
            and love.
          </p>
        </section>

        <section>
          <h2 className="text-primary mb-4 flex items-center text-xl font-medium">
            <Bookmark className="mr-2 h-5 w-5" />
            Our Mission
          </h2>
          <ol className="list-decimal space-y-4 pl-6 text-gray-700">
            <li>
              <p className="font-medium">
                Explore timeless truths from biblical teachings and their
                relevance in today's world
              </p>
            </li>
            <li>
              <p className="font-medium">
                Prepare individuals for navigating uncertain times and societal
                changes
              </p>
            </li>
            <li>
              <p className="font-medium">
                Foster personal growth that reflects compassion, integrity, and
                resilience
              </p>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-primary mb-4 flex items-center text-xl font-medium">
            <Bookmark className="mr-2 h-5 w-5" />
            Our Approach
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              At Tried Gold, we believe that regardless of one's background or
              beliefs, there's value in understanding the moral and practical
              insights offered by biblical narratives. Our programs blend
              spiritual teachings with practical life skills, aiming to equip
              people with tools for ethical decision-making, building strong
              communities, and finding purpose in a rapidly changing world.
            </p>
            <p>
              We invite you to join us in this journey of discovery and growth.
              Whether you're seeking spiritual depth, practical wisdom, or a
              supportive community, Tried Gold offers a space for learning and
              transformation as we face the future together.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
