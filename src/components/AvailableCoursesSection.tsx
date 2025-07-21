import React from "react";

interface CourseCardProps {
  title: string;
  level: string;
  levelType: "introductory" | "beginner-intermediate" | "advanced" | "coming-soon";
  image: string;
  comingSoon?: boolean;
}

function CourseCard({ title, level, levelType, image, comingSoon }: CourseCardProps) {
  const getLevelIcon = () => {
    switch (levelType) {
      case "introductory":
        return (
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 flex items-center">
              <svg viewBox="0 0 18 18" className="w-full h-full">
                <rect x="2" y="12" width="2" height="4" fill="[var(--color-orange-600)]" />
                <rect x="8" y="8" width="2" height="8" fill="text-brand-navy" />
                <rect x="14" y="6" width="2" height="10" fill="text-brand-navy" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-brand-navy">{level}</span>
          </div>
        );
      case "beginner-intermediate":
      case "advanced":
        return (
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 flex items-center">
              <svg viewBox="0 0 18 18" className="w-full h-full">
                <rect x="2" y="8" width="2" height="8" fill="currentColor" />
                <rect x="8" y="4" width="2" height="12" fill="currentColor" />
                <rect x="14" y="6" width="2" height="10" fill="currentColor" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-brand-navy">{level}</span>
          </div>
        );
      case "coming-soon":
        return (
          <span className="text-sm font-semibold text-brand-navy">
            Coming in <span className="text-brand-orange">2025</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Course Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* Level Badge */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="bg-white">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-1 inline-flex items-center">{getLevelIcon()}</div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-4">
        <h3 className="text-xl font-extrabold text-brand-navy mb-3 leading-tight">{title}</h3>

        {/* Preview Course Link */}
        <div className="flex items-center gap-1 text-brand-navy hover:text-brand-orange transition-colors cursor-pointer">
          <span className="text-sm font-extrabold tracking-wide">Preview Course</span>
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function AvailableCoursesSection() {
  const courses = [
    {
      title: "COMMUNITY ORGANIZER",
      level: "Introductory Level",
      levelType: "introductory" as const,
      image: "/images/hero-banner-image.png", // Using existing placeholder
    },
    {
      title: "RPO Pickleball Level 1",
      level: "Beginner-Intermediate Level",
      levelType: "beginner-intermediate" as const,
      image: "/images/hero-banner-image.png", // Using existing placeholder
    },
    {
      title: "RPO PICKLEBALL LEVEL 2",
      level: "Advanced Level",
      levelType: "advanced" as const,
      image: "/images/hero-banner-image.png", // Using existing placeholder
    },
    {
      title: "RPO PICKLEBALL LEVEL 3",
      level: "Coming in 2025",
      levelType: "coming-soon" as const,
      image: "/images/hero-banner-image.png", // Using existing placeholder
      comingSoon: true,
    },
  ];

  return (
    <section className="bg-[var(--color-gray-200)] py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-brand-navy leading-tight">
            AVAILABLE EDUCATIONAL COURSES
          </h2>

          {/* Browse Courses Link */}
          <div className="flex items-center gap-2 text-brand-orange hover:text-[var(--color-orange-600)] transition-colors cursor-pointer">
            <span className="text-lg lg:text-xl font-extrabold">Browse Courses</span>
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              level={course.level}
              levelType={course.levelType}
              image={course.image}
              comingSoon={course.comingSoon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
