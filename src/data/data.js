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
// Importing Icons for Educational Data
import discount from "../assets/discount.png";
import fee from "../assets/fee.png";
import scholarship from "../assets/scholarship.png";
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
    speed: 1800,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 0,
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

// Educational Data
export const educationalOffers = [
    {
      icon: scholarship,
      title: "Achieve Your Dreams with Fully Funded Scholarships",
      description:
        "Unlock Your Dream Career with Our Fully Funded Scholarships! We’re Committed to Empowering Students to Achieve Success.",
    },
    {
      icon: discount,
      title: "Early Birds Save Big — Enjoy 50% Off Today!",
      description:
        "Secure Your Spot Now and Enjoy 50% Off Program Fees! Register Early to Take Advantage of This Limited-Time Offer. Don’t Miss Out!",
    },
    {
      icon: fee,
      title: "Unlock Success at a Cost That Fits Your Budget",
      description:
        "Our program fee is 180,000 PKR, providing a comprehensive and high-value learning experience that sets you up for success.",
    },
  ];

// Eligibility Criteria Data
export const criteriaData = [
    {
      title: "Maintain Strong Academic Standing to Qualify",
      description:
        "Showcase Your Commitment to Learning with a Strong Academic Record. Minimum GPA Requirements May Apply!",
    },
    {
      title: "Course Completion",
      description:
        "Finish Prerequisite Courses Related to the Program's Focus Area to Build a Strong Knowledge Foundation.",
    },
    {
      title: "Your Interest and Motivation Matter!",
      description:
        "Show Genuine Interest and Passion for the Program's Field, Highlighting Your Proactive Mindset and Eagerness to Learn.",
    },
];
  
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

// Benefits Data
 export const benefits = [
    {
      id: 1,
      title: "Personal Growth",
      description:
        "Challenge yourself to step outside your comfort zone and develop valuable life skills.",
    },
    {
      id: 2,
      title: "Enhanced Employability",
      description:
        "Acquire valuable skills and experiences that employers actively seek.",
    },
    {
      id: 3,
      title: "Cultural Enrichment",
      description:
        "Immerse yourself in different cultures to broaden your perspective and foster intercultural understanding.",
    },
    {
      id: 4,
      title: "Career Exploration",
      description:
        "Gain practical experience and explore potential career paths to make informed choices.",
    },
];
  
// FAQS Data
export const faq = [
    {
      question: "What is the GradAccelerate Program?",
      answer:
        "GradAccelerate Program aka GAP is a intensive program designed to equip participants with tech skills, hands-on experience, and industry connections for a successful career",
    },
    {
      question: "Who is the GAP for?",
      answer:
        "GAP is tailored for final-year students, recent graduates, and professionals seeking to pivot into tech. It’s perfect for anyone eager to launch or advance their career in the technology sector.",
    },
    {
      question: "How long is the GAP program?",
      answer:
        "The GAP program spans 16 weeks, providing intensive training and hands-on learning in your chosen track.",
    },
    {
      question: "Is this a physical or online program?",
      answer:
        "GAP is a fully online program, allowing you to participate from anywhere with flexibility and convenience.",
    },
    {
      question: "What will I study in GAP?",
      answer:
        "You’ll gain in-depth knowledge and hands-on experience in your chosen track, whether it’s Full-stack Development, UX/UI Design, AI/ML, or more, preparing you for real-world tech challenges.",
    },
    {
      question: "Who will teach us in GAP?",
      answer:
        "GAP is taught by seasoned industry professionals and expert instructors, bringing years of real-world experience to help you master the skills needed for a successful tech career.",
    },
    {
      question: "What are the program timings?",
      answer:
        "The program runs five days a week, offering 25 to 35 hours of learning and hands-on projects each week, depending on your task completion. The flexible schedule allows you to adapt your workload based on progress, ensuring a balance between learning and practical applications.",
    },
    {
      question: "How many students will be enrolled in one batch?",
      answer:
        "Each batch is limited to 6-12 students, ensuring personalized attention and support.",
    },
    {
      question: "When does the next batch start?",
      answer:
        "The next GAP batch begins in 1 January 2025. Be sure to apply early to secure your spot! ",
    },
    {
      question: "What qualifications are required to join GAP?",
      answer:
        "You need to have completed a minimum of 16 years of education, with a keen interest in technology and innovation.",
    },

    {
      question: "Is there an interview process for admission?",
      answer:
        "Yes, shortlisted candidates will be invited for an interview to assess their skills, motivation, and suitability for the program.",
    },
    {
      question: "Are scholarships available for GAP?",
      answer:
        "Yes, we offer fully funded scholarships and early bird discounts. Ask us! ",
    },
    {
      question: "What benefits do I get if I refer a friend to GAP?",
      answer:
        "By referring a friend to join GAP, you get a chance to win a gift card when they apply and mention your name and email in their application form.",
    },
  ];