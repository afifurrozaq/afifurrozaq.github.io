import { 
  Cpu, 
  Smartphone, 
  Coffee, 
  FileCode, 
  Server, 
  Globe, 
  Cloud, 
  Database 
} from 'lucide-react';
import { Profile, Skill, Experience, Education, Award, Project } from './types';

// Import project images
import astralifeImg from './assets/images/astralife.webp';
import prezentImg from './assets/images/prezent.jpeg';
import gaidzImg from './assets/images/gaidz.webp';
import pasarindImg from './assets/images/pasarind.webp';
import bayarindindImg from './assets/images/bayarind.webp';
import myveegoImg from './assets/images/myveego.jpg';
import doaImg from './assets/images/doa.png';

export const PROFILE: Profile = {
  name: "Afifur Rozaq",
  role: "Lead Technical Engineer",
  location: "Jakarta, Indonesia",
  phone: "08980009811",
  email: "afifurrozaq@gmail.com",
  summary: "Lead Technical Engineer and Assistant Manager of Technology with 7+ years delivering mobile and full-stack products across insurance, fintech, travel, and retail. Proven track record leading teams of up to 5 engineers to ship high-quality iOS/Android apps and enterprise services, including migrations (PHP to Golang; native to Flutter) and payment gateway integrations. Deep hands-on expertise in Golang, Kotlin, Java, Dart/Flutter, React Native, Angular/Cordova, SQL/NoSQL, and GCP.",
  social: {
    linkedin: "https://www.linkedin.com/in/afifurrozaq/",
    github: "https://github.com/afifurrozaq",
    portfolio: "https://afifurrozaq.github.io/"
  }
};

export const SKILLS: Skill[] = [
  { name: "Golang", category: "Backend", icon: Cpu },
  { name: "Kotlin", category: "Mobile", icon: Smartphone },
  { name: "Java", category: "Backend/Mobile", icon: Coffee },
  { name: "Javascript", category: "Web/Mobile", icon: FileCode },
  { name: "PHP", category: "Backend", icon: Server },
  { name: "ReactJS", category: "Web", icon: Globe },
  { name: "React Native", category: "Mobile", icon: Smartphone },
  { name: "Swift", category: "Mobile", icon: Smartphone },
  { name: "Flutter", category: "Mobile", icon: Smartphone },
  { name: "Dart", category: "Mobile", icon: Smartphone },
  { name: "GCP", category: "Cloud", icon: Cloud },
  { name: "SQL/NoSQL", category: "Database", icon: Database },
  { name: "Angular", category: "Web", icon: Globe },
  { name: "Cordova", category: "Mobile", icon: Smartphone },
  { name: "Next.js", category: "Web", icon: Globe },
  { name: "TypeScript", category: "Web", icon: FileCode },
  { name: "Gemini API", category: "AI", icon: Cpu },
];

export const EXPERIENCE: Experience[] = [
  {
    period: "January 2024 – Present",
    role: "Assistant Manager Of Technology",
    company: "PT. Asuransi Jiwa Astra",
    location: "Jakarta",
    description: "Lead development and maintenance of iProsper iOS app (Angular/Cordova) and supporting Java services for the insurance digital platform. Own AFC Salestools (iOS/Android) for Bank Jasa Jakarta, overseeing architecture, delivery, and quality across the Angular/Cordova codebase. Define technical standards, run code reviews, and coordinate releases with product, QA, and security stakeholders."
  },
  {
    period: "October 2019 – December 2023",
    role: "Assistant Manager Of Technology",
    company: "PT. Sprint Asia Technology",
    location: "Jakarta",
    description: "Lead the PREZENT B2B e-voucher platform as Lead Full-Stack Developer; migrated PPOB services from PHP to Golang to improve performance and maintainability. Lead the GAIDZ travel guide app; migrated native Android/iOS codebases to Flutter and integrated payment gateway capabilities. Directed the PASARIND (point-of-sale) mobile product as Lead Mobile Developer, from roadmap to production release. Managed a team of 5 engineers (1 BE, 1 Web FE, 3 Mobile), scoping work, conducting code reviews, and ensuring on-time delivery."
  },
  {
    period: "December 2018 – October 2019",
    role: "Android Developer",
    company: "PT. Sprint Asia Technology",
    location: "Jakarta",
    description: "Developed the GAIDZ travel guide application from scratch on Android (native) and iOS (native) to support family vacations. Launched at the RISE Hong Kong exhibition; trended in the Hong Kong Play Store."
  },
  {
    period: "September 2017 – December 2018",
    role: "Mobile Developer",
    company: "PT. Astra Graphia Information Technology (AGIT)",
    location: "Jakarta",
    description: "Developed a mobile vehicle‑tracking app for Astra International merchants; ingested IoT/OBD telemetry and visualized location data. Won 1st place at QCP 2017 with the Myveego Fleet Management System (IoT platform); finalist at Inovastra 35th (2019). Built the OBD tracking client with React Native."
  }
];

export const EDUCATION: Education = {
  period: "2013 – 2017",
  school: "University of Brawijaya, Malang",
  degree: "Bachelor Degree in Informatic Engineering",
  gpa: "3.45/4.00",
  details: "Lab Assistant: Data Structures & Algorithms, Basic Programming"
};

export const AWARDS: Award[] = [
  { title: "Juara Vibe Coding Top 100 idea Creation", organization: "Google Developer Group", year: "2026", description: "Top 100 Create Idea App on Education" },
  { title: "1st winner QCP 2017", organization: "PT Astra Graphia", year: "2017", description: "Winner idea with Myveego Fleet management System IoT platform" },
  { title: "Inovastra 35th Finalist", organization: "PT Astra International", year: "2019", description: "With Myveego Fleet management System IoT platform" },
  { title: "Webinar Speaker (2021)", organization: "Tips Ngoding Tech Talk", year: "2021", description: "Manage Your Project During Pandemic" }
];

export const PROJECTS: Project[] = [
  {
    title: "iProsper",
    description: "Digital insurance platform for Astra Life, facilitating insurance sales and policy management.",
    tech: ["Angular", "Cordova", "Java"],
    link: "https://www.astralife.co.id/",
    image: astralifeImg
  },
  {
    title: "PREZENT",
    description: "B2B e-voucher platform with high-performance PPOB services migrated to Golang.",
    tech: ["Golang", "PHP", "SQL Server"],
    link: null,
    image: prezentImg
  },
  {
    title: "GAIDZ",
    description: "Comprehensive travel guide application with integrated payment gateway and Flutter migration.",
    tech: ["Flutter", "Android Native", "iOS Native"],
    link: "https://play.google.com/store/apps/details?id=com.gaidz.bayarind&hl=id",
    image: gaidzImg
  },
  {
    title: "PASARIND",
    description: "Full-featured Point of Sale (POS) mobile application for retail and F&B businesses.",
    tech: ["React Native", "Javascript"],
    link: "https://play.google.com/store/apps/details?id=sprintasia.tech.pasarind&hl=id",
    image: pasarindImg
  },
  {
    title: "BAYARIND",
    description: "Bayarind E-Wallet ",
    tech: ["Android Native", "Golang", "iOS Native"],
    link: "https://play.google.com/store/apps/details?id=net.sprintasia.ewallet&hl=id",
    image: bayarindindImg
  },
  {
    title: "Myveego",
    description: "IoT-based fleet management system for vehicle tracking and telemetry visualization.",
    tech: ["React Native", "IoT", "OBD"],
    link: null,
    image: myveegoImg
  },
  {
    title: "Teach AI Assistant",
    description: "An AI-powered teaching assistant platform to help educators and students interact with AI models for better learning experiences. Selected as Top 100 project in GDG #JuaraVibeCoding.",
    tech: ["Next.js", "Gemini API", "Tailwind CSS", "TypeScript"],
    link: "https://teach-ai-assistant.vercel.app",
    image: "https://picsum.photos/seed/teachai/400/300"
  },
  {
    title: "Aplikasi Doa Harian",
    description: "A digital collection of daily prayers (Doa) to help users practice and memorize Islamic prayers easily. Selected as Top 100 project in GDG #JuaraVibeCoding.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://aplikasi-doa-harian.vercel.app/",
    image: doaImg
  }
];
