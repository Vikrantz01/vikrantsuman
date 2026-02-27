import {
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  CheckCircle,
} from "lucide-react";

/* =========================
   Types
========================= */

interface ResumeProps {
  isDark: boolean;
}

type ResumeListItem = {
  heading: string;
  subHeading: string;
  period: string;
  location?: string;
  bullets?: string[];
};

type ResumeSection =
  | {
    id: string;
    title: string;
    type: "text";
    content: string;
  }
  | {
    id: string;
    title: string;
    type: "list";
    items: ResumeListItem[];
  }
  | {
    id: string;
    title: string;
    type: "skills";
    categories: { label: string; value: string }[];
  }
  | {
    id: string;
    title: string;
    type: "bullets";
    bullets: string[];
  };

/* =========================
   Resume Data
========================= */

const RESUME_DATA: ResumeSection[] = [
  {
    id: "summary",
    title: "Executive Summary",
    type: "text",
    content:
      "I am passionate about creating clean, responsive, and User-friendly web experiences. I focus on building visually appealing designs that are intuitive, efficient, and enhance overall user engagement.",
  },
  {
    id: "education",
    title: "Education",
    type: "list",
    items: [
      {
        heading: "Makhanlal Chaturvedi National University",
        subHeading: "Bachelor of Computer Applications ",
        period: "2023 – 2026",
        location: "Bhopal, Madhya Pradesh",
      },
      {
        heading: "Madhya Pradesh Board Bhopal",
        subHeading: "12th Grade – Argiculture | Percentage: 65%",
        period: "May 2023",
        location: "MP Board, Bhopal",
      },
    ],
  },
  {
    id: "skills",
    title: "Core Competencies",
    type: "skills",
    categories: [
      { label: "Languages", value: "JavaScript, Python, PHP, SQL, C/C++" },
      {
        label: "Frontend & UI",
        value: "HTML5, CSS3, React",
      },
      {
        label: "Backend",
        value: "Python, PHP",
      },
      {
        label: "DevOps & Cloud",
        value: "Github CI/CD",
      },
      {
        label: "Database",
        value: "MySQl, MongoDB",
      },
    ],
  },
  {
    id: "experience",
    title: "Professional Experience",
    type: "list",
    items: [
      {
        heading: "Frontend Developer Intern",
        subHeading: "Codveda Technologies",
        period: "Aug 2025 – Sep 2025",
        location: "Remote",
        bullets: [
          "During my 1-month internship at Codveda Technologies, I worked on multiple real-world web development",
          "projects including a personal portfolio, a To-Do App, and an eCommerce website. Through these projects, I",
          "gained hands-on experience in designing responsive user interfaces, implementing core functionalities, and",
          "understanding practical development workflows.",
        ],
      },
    ],
  },
  {
    id: "projects",
    title: "Strategic Projects",
    type: "list",
    items: [
      {
        heading: "Hair Salon Website",
        subHeading: "HTML5, CSS3, Node.js, MongoDB",
        period: "Production Project",
        bullets: [
          "Designed and developed a fully responsive hair salon website for service presentation.",
          "Integrated user-friendly interface to enhance customer engagement and accessibility."
        ],
      },
      {
        heading: "Weather Web App",
        subHeading: "HTML, CSS, JavaScript, OpenWeatherAPI",
        period: "Personal Project",
        bullets: [
          "Integrated real-time weather data for accurate forecasts.",
          "Optimized performance for fast loading and smooth user experience."
        ],
      },
    ],
  },
  {
    id: "achievements",
    title: "Leadership & Impact",
    type: "bullets",
    bullets: [
      "JavaScript Fundamentals course from GreatStack!.",
      "MERN Development certification from Infosys Springboard.",
      "Google Cloud's Introduction to Generative AI Studio.",
    ],
  },
];

/* =========================
   Component
========================= */

export function Resume({ isDark }: ResumeProps) {
  return (
    <div
      className={`w-full h-full overflow-auto pb-20 ${isDark ? "bg-[#0a0a0a] text-gray-300" : "bg-white text-gray-800"
        }`}
    >
      <div className="max-w-4xl mx-auto p-6 md:p-12">
        {/* Header */}
        <header className="mb-12 border-b border-current/10 pb-10">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold">Vikrant Suman</h1>
              <p className="text-xl mt-2 font-medium text-blue-600">
                Frontend Developer
              </p>
            </div>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Vikrant-ressume.pdf";
                link.download = "Vikrant-resume.pdf";
                link.click();
              }}
              className="flex items-center h-fit w-fit gap-2 px-4 py-2 border rounded-lg  text-sm font-semibold"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 mt-8 text-sm opacity-80">
            <a
              href="mailto:work.sudhanshukhosla@gmail.com"
              className="flex gap-2"
            >
              <Mail className="w-4 h-4" />
              vikranteditz26@gmail.com
            </a>
            <div className="flex gap-2">
              <Phone className="w-4 h-4" />
              +91 9174542335
            </div>
            <div className="flex gap-2">
              <MapPin className="w-4 h-4" />
              Madhya Pradesh, India
            </div>
            <a href="https://linkedin.com" className="flex gap-2 text-blue-500">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="https://github.com" className="flex gap-2 text-blue-500">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </header>

        {/* Sections */}
        <div className="space-y-12">
          {RESUME_DATA.map((section) => (
            <section
              key={section.id}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest opacity-50">
                {section.title}
              </h3>

              <div className="md:col-span-3">
                {section.type === "text" && (
                  <p className="leading-relaxed">{section.content}</p>
                )}

                {section.type === "list" &&
                  section.items.map((item, i) => (
                    <div key={i} className="mb-8">
                      <div className="flex justify-between">
                        <h4 className="font-bold">{item.heading}</h4>
                        <span className="text-xs opacity-50">
                          {item.period}
                        </span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <p className="text-blue-600 font-semibold">
                          {item.subHeading}
                        </p>
                        {item.location && (
                          <span className="text-xs italic opacity-50">
                            {item.location}
                          </span>
                        )}
                      </div>
                      {item.bullets && (
                        <ul className="space-y-2">
                          {item.bullets.map((bullet, j) => (
                            <li key={j} className="flex gap-3 text-sm">
                              <span className="w-1.5 h-1.5 mt-2 bg-current rounded-full opacity-40" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                {section.type === "skills" &&
                  section.categories.map((cat, i) => (
                    <div key={i} className="mb-6">
                      <p className="text-xs uppercase opacity-50">
                        {cat.label}
                      </p>
                      <p>{cat.value}</p>
                    </div>
                  ))}

                {section.type === "bullets" && (
                  <ul className="space-y-3">
                    {section.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
