// Importing Learning Track Icons
import learning from "../assets/track-icons/machine-learning.png";
import business from "../assets/track-icons/business.png";
import marketing from "../assets/track-icons/marketing.png";
import quality from "../assets/track-icons/quality.png";
import backend from "../assets/track-icons/backend.png";
import ui from "../assets/track-icons/ui.png";
import frontend from "../assets/track-icons/frontend.png";
import web from "../assets/track-icons/web.png";
// Importing Clients Brands Logos
import burt from "../assets/brands-logo/burt.png";
import etikette from "../assets/brands-logo/etikette.png";
import eva from "../assets/brands-logo/eva.png";
import fairway from "../assets/brands-logo/fairway.png";
import fresh from "../assets/brands-logo/fresh.png";
import john from "../assets/brands-logo/john.png";
import ned from "../assets/brands-logo/ned.png";
import perfect from "../assets/brands-logo/perfect.png";
// Importing Font Awesome Icons for Aplication Steps
import {
  faPaperPlane,
  faClipboardCheck,
  faUserTie,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons"; 

// Incentives Data
export const incentivesData = [
    {
      id: 1,
      title: "Flexible Learning",
      description:
        "Benefit from a hybrid learning model that allows you to balance your studies with work or other commitments.",
    },
    {
      id: 2,
      title: "Global Exposure",
      description:
        "Engage in virtual global collaborations and gain insights into international tech trends and best practices.",
    },
    {
      id: 3,
      title: "Networking Opportunities",
      description:
        "Connect with industry professionals, potential employers, and fellow GAP participants.",
    },
    {
      id: 4,
      title: "Entrepreneurial Support",
      description:
        "Explore your entrepreneurial aspirations with access to resources and a network of like-minded individuals.",
    },
    {
      id: 5,
      title: "Industry-Recognized Certification",
      description:
        "Earn a valuable certificate upon program completion, validating your acquired skills.",
    },
    {
      id: 6,
      title: "Career Placement Support",
      description:
        "Access a dedicated career placement team offering resume reviews, interview preparation, and job placement assistance.",
    },
];
  
// Learning Tracks Data
export const tracks = [
    {
      title: "Full-Stack Development",
      description:
        "Master full-stack engineering by designing, building, and deploying scalable web applications with front-end and back-end technologies.",
      icon: web,
    },
    {
      title: "Front-End Development",
      description:
        "Create visually stunning, interactive user interfaces using modern technologies and best UX/UI practices.",
      icon: frontend,
    },
    {
      title: "Back-End Development",
      description:
        "Focus on server-side logic, databases, and APIs to power web applications with Node.js, Express, and more.",
      icon: backend,
    },
    {
      title: "UI/UX Design",
      description:
        "Design intuitive and visually appealing user interfaces, ensuring a seamless user experience.",
      icon: ui,
    },
    {
      title: "Software Quality Assurance",
      description:
        "Ensure the reliability and functionality of software through rigorous testing and quality control.",
      icon: quality,
    },
    {
      title: "Digital Marketing",
      description:
        "Gain skills in SEO, content marketing, and social media strategies to drive online engagement and growth.",
      icon: marketing,
    },
    {
      title: "Business Analytics",
      description:
        "Develop leadership skills to manage product life cycles and derive insights from business data.",
      icon: business,
    },
    {
      title: "Machine Learning",
      description:
        "Dive into AI and machine learning to build intelligent systems, automate processes, and analyze complex data for innovative solutions.",
      icon: learning,
    },
];

// Brands Component Logos of Clients
export const brandLogos = [
  {
    title: burt,
  },
  {
    title: etikette,
  },
  {
    title: eva,
  },
  {
    title: perfect,
  },
  {
    title: ned,
  },
  {
    title: john,
  },
  {
    title: fresh,
  },
  {
    title: fairway,
  },
];

// React Slick Carousel Setting Being Used in Brands Component
export const carouselSettings = {
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 5, // Default To Show 5 Logos at Once
    responsive: [
      {
        // Medium Screens
        breakpoint: 1024,
        settings: {
          // To Show 3 Logos
          slidesToShow: 3,
        },
      },
      {
        // Small Screens
        breakpoint: 600,
        settings: {
          // To Show 2 Logo
          slidesToShow: 2,
        },
      },
    ],
};
  
// Application Process Steps Data
export const applicationSteps = [
  {
    title: "Submit Application",
    description:
      "Submit your application form online. Be sure to include all the required documents and information.",
    icon: faPaperPlane,
  },
  {
    title: "Review & Evaluation",
    description:
      "Our expert team will thoroughly review your application based on your academic background, skills, and experience.",
    icon: faClipboardCheck,
  },
  {
    title: "Interview",
    description:
      "Selected candidates will be invited for an interview to assess their suitability for the program and discuss their aspirations.",
    icon: faUserTie,
  },
  {
    title: "Notification & Acceptance",
    description:
      "Following the interview process, successful applicants will receive an official notification of acceptance into the program.",
    icon: faEnvelopeOpenText,
  },
];