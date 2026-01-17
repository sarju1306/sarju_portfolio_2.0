// Data for Sarju Dharsandiya Portfolio
import { Skill, Project, Experience } from '@/types';

export const personalInfo = {
  name: "Sarju Dharsandiya",
  title: "Software Development Engineer",
  tagline: "Transforming ideas into seamless digital experiences.",
  email: "dharsandiyasarju.it@gmail.com",
  phone: "+91 9016161800",
  location: "Rajkot, Gujarat, India",
  github: "https://github.com/sarju90",
  linkedin: "https://linkedin.com/in/sarju-dharsandiya",
  whatsapp: "https://wa.me/9016161800",
  experience: "3+ years",
  education: "B.Tech in Information & Technology",
  bio: `Hi! I'm Sarju Dharsandiya, a passionate and dedicated software development engineer with a deep love for creating scalable, innovative web solutions. Over the years, I've honed my skills in designing elegant front-end interfaces and building robust back-end systems.

My journey began with a curiosity for technology, which quickly grew into a career that I am immensely proud of. I believe in staying ahead of the curve, continuously learning, and adopting the latest technologies to deliver exceptional results for my clients and projects.

Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring aspiring developers to help them achieve their goals.`
};

export const skills: Skill[] = [
  { name: "React.js", category: "Core Tech" },
  { name: "Next.js", category: "Core Tech" },
  { name: "TypeScript", category: "Core Tech" },
  { name: "JavaScript", category: "Core Tech" },
  { name: "HTML5", category: "Core Tech" },
  { name: "CSS3", category: "Core Tech" },
  { name: "SCSS", category: "Core Tech" },
  { name: "Tailwind CSS", category: "UI Frameworks" },
  { name: "Material UI", category: "UI Frameworks" },
  { name: "Reactstrap", category: "UI Frameworks" },
  { name: "Styled Components", category: "UI Frameworks" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "MySQL", category: "Backend" },
  { name: "Git", category: "Dev Tools" },
  { name: "GitHub", category: "Dev Tools" },
  { name: "Bitbucket", category: "Dev Tools" },
  { name: "Postman", category: "Dev Tools" },
  { name: "Insomnia", category: "Dev Tools" },
  { name: "VS Code", category: "Dev Tools" },
  { name: "Redux Toolkit", category: "State Management" },
  { name: "Context API", category: "State Management" },
  { name: "Cypress", category: "Testing" },
  { name: "React Native", category: "Mobile" },
];

export const projects: Project[] = [
  {
    title: "Smarty Shop",
    description: "A scalable e-commerce platform with responsive UI.",
    techStack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://smarty-shop.vercel.app/",
    category: "E-commerce"
  },
  {
    title: "EventHive",
    description: "An advanced event management platform allowing users to organize, track, and manage events effortlessly.",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
    liveUrl: "https://sarju-eventhive.vercel.app/",
    category: "Event Management"
  },
  {
    title: "Shofy",
    description: "A complete full-stack E-commerce platform with modern UI, seamless shopping experience, and secure payment integration.",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Redux"],
    liveUrl: "https://shofy-frontend.vercel.app/",
    category: "E-commerce"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my skills, projects, and experiences in web development.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Portfolio"
  }
];

export const experiences: Experience[] = [
  {
    title: "Software Development Engineer",
    company: "Zignuts Technolab",
    location: "Gandhinagar, Gujarat",
    duration: "Aug 2025 – Present",
    description: "Currently working as a Software Development Engineer, building scalable and optimized web applications. Leading development of responsive web applications using React.js and Next.js. Collaborate with designers and backend teams to deliver clean, accessible, and responsive UIs.",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    type: "work"
  },
  {
    title: "Jr. Software Development Engineer",
    company: "Zignuts Technolab",
    location: "Gandhinagar, Gujarat",
    duration: "Aug 2023 – June 2025",
    description: "Worked as Junior Software Development Engineer, contributing to various web development projects. Assisted in building responsive UIs and integrating APIs using React.js. Gained hands-on experience with JavaScript, state management, and frontend workflows.",
    skills: ["React.js", "Next.js", "TypeScript", "HTML5", "CSS3", "JavaScript (ES6+)", "Git"],
    type: "work"
  },
  {
    title: "Internship",
    company: "Zignuts Technolab",
    location: "Gandhinagar, Gujarat",
    duration: "Jan 2023 – June 2023",
    description: "Worked as an intern, contributing to various web development projects. Assisted in building responsive UIs and integrating APIs using React.js. Gained hands-on experience with JavaScript, state management, and basic frontend workflows.",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Git"],
    type: "work"
  },
  {
    title: "Bachelor's in Information & Technology",
    company: "Charusat University",
    location: "Changa, Gujarat",
    duration: "2019 – 2023",
    description: "Completed Bachelor's degree in Information & Technology, gaining expertise in software development and web technologies. Built a strong foundation in programming paradigms and software engineering principles.",
    skills: ["Data Structures", "Algorithms", "Web Development", "Database Systems"],
    type: "education"
  }
];
