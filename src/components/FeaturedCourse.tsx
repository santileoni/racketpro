import React from "react";

interface FeaturedCourseProps {
  title?: string;
  category?: string;
  level?: string;
  duration?: string;
  chapters?: number;
  topics?: string[];
  originalPrice?: number;
  currentPrice?: number;
  imageSrc?: string;
}

export default function FeaturedCourse({
  title = "RPO Pickleball Level 1",
  category = "Featured",
  level = "Beginner - Intermediate",
  duration = "6+ hours",
  chapters = 9,
  topics = ["Pickleball History", "Scoring", "Warm Ups", "Starting a Game", "Organizing Group Activities"],
  originalPrice = 259.0,
  currentPrice = 199.0,
  imageSrc = "/images/course-placeholder.jpg",
}: FeaturedCourseProps) {
  return (
    <section className="bg-gray-100 py-8 px-4 md:py-16 md:px-20">
      <div className="max-w-full">
        {/* Header with title and browse courses button */}
        <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between md:mb-12">
          <h1 className="text-brand-navy text-2xl font-extrabold md:text-4xl">Lorem Ipsum</h1>
          <button className="btn btn-ghost text-sm self-start pl-0 md:self-auto">Browse courses →</button>
        </div>

        {/* Featured Course Card */}
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-200 featured-course-container relative md:p-5">
          <div className="flex flex-col gap-6 h-full md:flex-row md:gap-6">
            {/* Course Image Placeholder */}
            <figure className="w-full bg-gray-100 rounded-lg flex items-center justify-center featured-course-image aspect-video min-w-0 md:w-auto md:aspect-[374/232] md:min-w-60 md:flex-shrink-0">
              <div className="text-gray-400 text-center">
                <div className="text-4xl mb-2">📚</div>
                <div className="text-sm">Course Preview</div>
              </div>
            </figure>

            {/* Course Content */}
            <div className="flex-1 flex flex-col gap-4 featured-course-content md:gap-6">
              <div className="space-y-3 md:space-y-4">
                <header className="lg:flex lg:items-center lg:justify-between">
                  <div className="space-y-3 md:space-y-4">
                    <div className="text-gray-400 text-xs font-medium uppercase tracking-wide md:text-sm">
                      {category}
                    </div>
                    <h2 className="text-gray-900 text-xl font-bold tracking-tight md:text-2xl">{title}</h2>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 border-2 border-white shadow-md -mr-2 z-10"></div>
                      <div className="w-11 h-11 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 border-2 border-white shadow-md"></div>
                    </div>
                  </div>
                </header>

                {/* Level Badge */}
                <div className="inline-flex">
                  <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-xl">{level}</span>
                </div>

                {/* Duration and Chapters */}
                <div className="flex flex-col gap-3 md:flex-row md:gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 text-brand-orange">
                      <svg viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm1-8.5V4a1 1 0 1 0-2 0v4.5L4.5 10a1 1 0 1 0 1 1.732L8 10.464l2.5 1.268A1 1 0 1 0 11.5 10L9 8.5z" />
                      </svg>
                    </div>
                    <span className="text-brand-navy text-xs font-bold">{duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 text-brand-orange">
                      <svg viewBox="0 0 16 16" fill="currentColor">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 0v12h8V2H4z" />
                        <path d="M6 4h4v1H6V4zm0 2h4v1H6V6zm0 2h4v1H6V8z" />
                      </svg>
                    </div>
                    <span className="text-brand-navy text-xs font-bold">{chapters} Chapters</span>
                  </div>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-1">
                  {topics.map((topic, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-gray-600 text-xs px-3 py-1.5 rounded-xl border border-gray-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <footer className="flex flex-col gap-3 relative mt-auto flex-wrap md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-3 md:flex-row">
                  <button className="btn btn-outline flex items-center gap-2">
                    <div className="w-4 h-4">
                      <svg viewBox="0 0 16 16" fill="currentColor">
                        <path d="M3 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1.5.86l8-5a1 1 0 0 0 0-1.72l-8-5A1 1 0 0 0 3 2z" />
                      </svg>
                    </div>
                    <span>Preview Course</span>
                  </button>
                  <button className="btn btn-secondary">Get Started</button>
                </div>
                <div className="featured-course-price pt-2 pb-4 order-first lg:text-right lg:order-last lg:pt-0 lg:pb-0">
                  <div className="text-gray-400 text-sm font-bold line-through mb-2 md:mb-3">
                    $ {originalPrice.toFixed(2)}
                  </div>
                  <div className="text-gray-900 text-xl font-bold md:text-2xl">$ {currentPrice.toFixed(2)}</div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
