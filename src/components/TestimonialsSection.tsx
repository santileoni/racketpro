import React from "react";

interface TestimonialData {
  id: string;
  name: string;
  designation: string;
  organization: string;
  location: string;
  testimonial: string;
  imageUrl: string;
}

interface TestimonialCardProps {
  data: TestimonialData;
}

function TestimonialCard({ data }: TestimonialCardProps) {
  return (
    <article className="testimonial-card w-full">
      {/* Card container using flexbox */}
      <div className="relative flex items-center justify-end h-full min-h-[340px] py-6 bg-gradient-to-r from-gray-50 to-gray-50 rounded-3xl">
        {/* Quote icon - positioned in top left */}
        <div className="absolute left-6 top-4 z-20">
          <svg
            className="testimonial-quote-icon w-8 h-8 text-brand-navy md:w-12 md:h-12 lg:w-20 lg:h-20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
          </svg>
        </div>

        {/* Profile image - positioned on the left side */}
        <div className="transform md:translate-x-1/2 z-10">
          <img
            src={data.imageUrl}
            alt={`${data.name} profile`}
            className="testimonial-profile-image object-cover rounded-[110px]"
          />
        </div>

        {/* Content card - using margin to create proper spacing */}
        <div className="testimonial-content bg-white rounded-2xl mr-6 flex flex-col">
          {/* Inner content with proper padding */}
          <div className="flex flex-col gap-4 p-6 pl-20 flex-1">
            {/* Header section */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <p className="text-title-medium font-extrabold text-brand-orange leading-tight">
                  RPO Member Testimonial
                </p>
                <div className="w-14 h-0.5 bg-brand-orange"></div>
              </div>

              {/* Star rating */}
              <div className="star-rating flex gap-0.5 items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial text - flex-1 to take remaining space */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="mb-4">
                <p className="testimonial-text text-body-small font-semibold text-gray-900 leading-relaxed line-clamp-6">
                  {data.testimonial}
                </p>
              </div>

              {/* Author info */}
              <div className="flex flex-col gap-1">
                <p className="testimonial-author-name text-body-small font-extrabold text-brand-navy tracking-wider">
                  {data.name}
                </p>
                <div className="testimonial-organization text-label-small font-semibold text-gray-500 leading-relaxed">
                  <p className="mb-0">{data.designation}</p>
                  {data.organization && <p className="mb-0">{data.organization}</p>}
                  {data.location && <p>{data.location}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  const testimonials: TestimonialData[] = [
    {
      id: "jarrett",
      name: "Jarrett Chirico",
      designation: "Director of Racquets, Royal Oaaks CC",
      organization: "Founder/President, The Directors Clubs",
      location: "Dallas, TX, USA",
      testimonial:
        "RPO has the \"Dream Team\". Dan Santorum, their CEO, is a legend in our industry. Collin Johns is not only a GOAT as a player, but a tremendous coach educator-'The Architect', and the staff is simply terrific! Add in JOOLA as a major and supportive sponsor and this places RPO as the best pickleball organization in the world!",
      imageUrl: "/images/profile-image.png",
    },
    {
      id: "becky",
      name: "Becky Bucolo",
      designation: "Director of Racquets, Chicago Highlands",
      organization: "Chicago, IL, USA",
      location: "",
      testimonial:
        "The RPO Level 1 course is on another level. The best workshop I have ever attended! The clinician (Eric White) was crazy good.",
      imageUrl: "/images/becky.png",
    },
    {
      id: "yev",
      name: "Yev Supeko",
      designation: "Director of Racquets, Colonial CC",
      organization: "Fort Worth, TX, USA",
      location: "",
      testimonial:
        "We had a blast hosting a Level 1 RPO certification. It was packed with a vigorous curriculum, knowledgeable clinicians (Josh Jenkins), and, most importantly, an enthusiastic professional staff ready to elevate service and member experiences to the next level! Let's have fun learning and growing together - Level 2 is next!",
      imageUrl: "/images/supeko.png",
    },
  ];

  return (
    <section className="banner">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <header className="mb-16">
          <h2 className="text-headline-medium font-extrabold text-brand-navy">PADDLE PERFECT TESTIMONIALS</h2>
        </header>

        {/* Testimonials grid */}
        <div className="testimonials-grid grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center max-w-[1240px] mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} data={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
