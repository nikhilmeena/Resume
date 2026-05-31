import * as React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Mail, ExternalLink, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

// Assets
import avatarImg from "@/assets/magicpath/context/01-context-image-1-9af763494f65.png";
import project1Img from "@/assets/magicpath/context/02-context-image-2-45b3960758bd.png";
import project2Img from "@/assets/magicpath/context/03-context-image-3-6ff75761621e.png";
import project3Img from "@/assets/magicpath/context/05-context-image-5-364b3da9cf80.png";

// Types
interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}
interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
}
interface AwardItem {
  id: string;
  title: string;
  org: string;
  detail: string;
}
interface SkillItem {
  id: string;
  label: string;
}
interface ContactItem {
  id: string;
  label: string;
  value: string;
  link: string;
}

// Data
const SKILLS: SkillItem[] = [{
  id: "sk1",
  label: "Product Manager"
}, {
  id: "sk2",
  label: "Cross-Functional Team Leadership"
}, {
  id: "sk3",
  label: "Adaptability"
}, {
  id: "sk4",
  label: "Vendor Relations"
}, {
  id: "sk5",
  label: "Fund Transfer"
}, {
  id: "sk6",
  label: "UI/UX"
}, {
  id: "sk7",
  label: "API Banking"
}, {
  id: "sk8",
  label: "Python"
}, {
  id: "sk9",
  label: "PostMan"
}, {
  id: "sk10",
  label: "JIRA"
}, {
  id: "sk11",
  label: "Data Analysis"
}, {
  id: "sk12",
  label: "Microsoft Office"
}];
const EXPERIENCE: ExperienceItem[] = [{
  id: "e1",
  role: "Product Analyst",
  company: "ICICI Bank Ltd",
  location: "Hyderabad",
  period: "July 2022 – Present",
  bullets: ["Spearheading redesign of ICICI Bank mobile app with native UI over Figma, implementing microservice architecture.", "Testing APIs using Postman, tracking defects via JIRA dashboards.", "Improving app ratings through innovative feature integrations.", "Drafted BRDs and feature specifications for product teams."]
}];
const EDUCATION: EducationItem[] = [{
  id: "edu1",
  degree: "M.Tech in Chemical Engineering",
  institution: "Indian Institute of Technology Kanpur",
  period: "Aug 2020 – July 2022"
}, {
  id: "edu2",
  degree: "B.Tech in Chemical Engineering",
  institution: "Indian Institute of Technology Delhi",
  period: "Aug 2015 – July 2019"
}];
const AWARDS: AwardItem[] = [{
  id: "a1",
  title: "Pride of NILGIRI",
  org: "IIT Delhi Hostel Association",
  detail: "Dramatics"
}, {
  id: "a2",
  title: "Outstanding Contribution to Cultural Activities",
  org: "IIT Delhi",
  detail: ""
}, {
  id: "a3",
  title: "2nd Position Street Play",
  org: "Inter-IIT Cultural Meet 2017",
  detail: "IIT Kanpur"
}];
const CONTACTS: ContactItem[] = [{
  id: "c1",
  label: "E-Mail",
  value: "nikhilmeenaiit@gmail.com",
  link: "mailto:nikhilmeenaiit@gmail.com"
}, {
  id: "c2",
  label: "Phone",
  value: "+91 8800487634",
  link: "tel:+918800487634"
}, {
  id: "c3",
  label: "Location",
  value: "Hyderabad, India",
  link: "#"
}];

// Sub-components
const Section = ({
  label,
  children,
  className
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) => <section className={cn("grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12 py-16 md:py-24 border-t border-[#2a2a2a]", className)} style={{
  paddingBottom: "",
  paddingTop: ""
}}>
    <div className="flex flex-col">
      <h2 className="text-[#f0f0f0] text-sm uppercase tracking-widest font-semibold">
        {label}
      </h2>
    </div>
    <div className="flex flex-col gap-8">{children}</div>
  </section>;
const Clock = () => {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return <div className="flex flex-col gap-2">
      <div className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-extralight text-[#f0f0f0] tabular-nums tracking-tighter leading-none">
        {time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      }).toUpperCase()}
      </div>
    </div>;
};
export const Portfolio = () => {
  return <div className="min-h-screen bg-[#161616] text-[#f0f0f0] font-sans selection:bg-white selection:text-black">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">

        {/* Header / Hero */}
        <header className="pt-24 pb-20 md:pt-32 md:pb-28" style={{
        paddingTop: "110px",
        paddingBottom: "50px"
      }}>
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8 mb-12">
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[#2a2a2a] grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411803889998901248/assets/51b8bd30-1661-443c-8b35-491983f07630.jpeg" alt="Nikhil Kumar Meena" className="w-full h-full object-cover" style={{
              objectFit: "cover",
              objectPosition: "top",
              opacity: "1",
              borderTopWidth: "0px",
              borderRightWidth: "0px",
              borderBottomWidth: "0px",
              borderLeftWidth: "0px",
              borderStyle: "none",
              borderRadius: "0px"
            }} />
            </motion.div>
            <div className="flex flex-col items-center md:items-start gap-4">
              <motion.h1 initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} className="text-4xl md:text-6xl font-bold tracking-tight">
                Nikhil Kumar Meena
              </motion.h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-[#888888] text-sm">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>Product Manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Hyderabad, India</span>
                </div>
                <a href="mailto:nikhilmeenaiit@gmail.com" className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>nikhilmeenaiit@gmail.com</span>
                </a>
                <a href="tel:+918800487634" className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>8800487634</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* About */}
        <Section label="About">
          <div className="flex flex-col gap-6 max-w-3xl">
            <p className="text-[#888888] text-lg md:text-xl leading-relaxed">
              As a Product Analyst at ICICI Bank, I am actively driving the revamp of the iMobile Pay App, leading the integration of an advanced native UI and a robust microservice architecture. By collaborating closely with design and development teams, I am focused on enhancing user experience and ensuring smooth, on-time, and on-budget project progress.
            </p>
            <p className="text-[#888888] text-lg md:text-xl leading-relaxed">
              Seeking to leverage my cross-functional leadership and data analysis skills in a Product Manager role to drive impactful, user-centric solutions.
            </p>
          </div>
        </Section>

        {/* Skills */}
        <Section label="Skills">
          <div className="flex flex-wrap gap-3">
            {SKILLS.map(skill => <span key={skill.id} className="px-4 py-2 bg-[#1e1e1e] border border-[#2a2a2a] rounded-full text-[#cccccc] text-sm font-medium hover:border-[#555] hover:text-white transition-all duration-200">
                {skill.label}
              </span>)}
          </div>
        </Section>

        {/* Projects / Workshop */}
        <Section label="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Featured workshop card */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} className="group cursor-pointer md:col-span-2">
              <div className="relative aspect-[16/7] bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] border border-[#2a2a2a] rounded-2xl overflow-hidden mb-4 group-hover:border-[#444] transition-all duration-500 flex items-center justify-center" style={{
              opacity: "0.5",
              display: "",
              minHeight: "",
              height: "",
              width: "",
              maxWidth: ""
            }}>
                <div className="text-center px-8">
                  <p className="text-[#888888] text-xs uppercase tracking-widest mb-3 font-medium">ICICI BANK LTD </p>
                  <h3 className="text-[#f0f0f0] text-2xl md:text-3xl font-bold mb-3">UI/UX Design</h3>
                  <p className="text-[#aaaaaa] text-base" style={{
                  display: ""
                }}>Send Money (Funds Transfer)</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 max-w-2xl">
                <h3 className="text-[#f0f0f0] font-bold text-lg">UI/UX Design </h3>
                <p className="text-[#888888] text-sm leading-relaxed">Developed UI/UX for a funds transfer system by analysing VIMM loads and creating design strategies, user profiles, personas, scenarios, task flows, wireframes and prototypes using Figma.<br /></p>
              </div>
            </motion.div>

            {/* Additional project images for visual variety */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} className="group cursor-pointer">
              <div className="relative aspect-[4/3] bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl overflow-hidden mb-4 group-hover:border-[#444] transition-all duration-500">
                <svg className="w-full h-full" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="iMobile Pay App Redesign - ICICI Bank">
                  <defs>
                    <linearGradient id="bg47" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#0a0f1e" />
                      <stop offset="100%" stopColor="#0d1b3e" />
                    </linearGradient>
                    <linearGradient id="screen47" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#111827" />
                      <stop offset="100%" stopColor="#0a0f1e" />
                    </linearGradient>
                  </defs>
                  {/* Background */}
                  <rect width="480" height="360" fill="url(#bg47)" />
                  {/* Subtle grid lines */}
                  <line x1="0" y1="90" x2="480" y2="90" stroke="#1a2744" strokeWidth="1" />
                  <line x1="0" y1="180" x2="480" y2="180" stroke="#1a2744" strokeWidth="1" />
                  <line x1="0" y1="270" x2="480" y2="270" stroke="#1a2744" strokeWidth="1" />
                  <line x1="120" y1="0" x2="120" y2="360" stroke="#1a2744" strokeWidth="1" />
                  <line x1="240" y1="0" x2="240" y2="360" stroke="#1a2744" strokeWidth="1" />
                  <line x1="360" y1="0" x2="360" y2="360" stroke="#1a2744" strokeWidth="1" />
                  {/* Phone body */}
                  <rect x="165" y="28" width="150" height="304" rx="22" ry="22" fill="#0d1527" stroke="#1e3a6e" strokeWidth="1.5" />
                  {/* Phone screen */}
                  <rect x="173" y="52" width="134" height="260" rx="8" ry="8" fill="url(#screen47)" />
                  {/* Status bar */}
                  <rect x="173" y="52" width="134" height="20" rx="0" ry="0" fill="#0f1e42" />
                  <rect x="185" y="58" width="24" height="6" rx="3" fill="#1e3a6e" />
                  <rect x="292" y="58" width="8" height="6" rx="1" fill="#1e3a6e" />
                  <rect x="302" y="58" width="8" height="6" rx="1" fill="#1e3a6e" />
                  {/* Notch */}
                  <rect x="218" y="36" width="44" height="10" rx="5" fill="#0a0f1e" />
                  {/* Bank header bar */}
                  <rect x="173" y="72" width="134" height="36" fill="#0f1e42" />
                  <rect x="183" y="82" width="50" height="8" rx="2" fill="#1e3a6e" />
                  <circle cx="291" cy="86" r="10" fill="#1e3a6e" fillOpacity="0.6" />
                  {/* Balance card */}
                  <rect x="181" y="116" width="118" height="52" rx="8" fill="#132040" stroke="#1e3a6e" strokeWidth="1" />
                  <rect x="191" y="124" width="40" height="5" rx="2" fill="#2a4a8a" fillOpacity="0.7" />
                  <rect x="191" y="133" width="70" height="8" rx="2" fill="#3b62b5" fillOpacity="0.5" />
                  <rect x="191" y="148" width="55" height="5" rx="2" fill="#1e3a6e" />
                  {/* Quick action buttons */}
                  <circle cx="208" cy="192" r="14" fill="#0f1e42" stroke="#1e3a6e" strokeWidth="1" />
                  <circle cx="240" cy="192" r="14" fill="#0f1e42" stroke="#1e3a6e" strokeWidth="1" />
                  <circle cx="272" cy="192" r="14" fill="#0f1e42" stroke="#1e3a6e" strokeWidth="1" />
                  <rect x="201" y="209" width="14" height="4" rx="2" fill="#1e3a6e" />
                  <rect x="233" y="209" width="14" height="4" rx="2" fill="#1e3a6e" />
                  <rect x="265" y="209" width="14" height="4" rx="2" fill="#1e3a6e" />
                  {/* Transaction list items */}
                  <rect x="181" y="222" width="118" height="18" rx="4" fill="#0f1e42" />
                  <circle cx="193" cy="231" r="5" fill="#1e3a6e" />
                  <rect x="202" y="227" width="40" height="4" rx="2" fill="#1e3a6e" />
                  <rect x="202" y="233" width="25" height="3" rx="1.5" fill="#1a2f5e" fillOpacity="0.7" />
                  <rect x="268" y="228" width="24" height="4" rx="2" fill="#2a4a8a" fillOpacity="0.6" />
                  <rect x="181" y="244" width="118" height="18" rx="4" fill="#0f1e42" />
                  <circle cx="193" cy="253" r="5" fill="#1e3a6e" />
                  <rect x="202" y="249" width="35" height="4" rx="2" fill="#1e3a6e" />
                  <rect x="202" y="255" width="20" height="3" rx="1.5" fill="#1a2f5e" fillOpacity="0.7" />
                  <rect x="271" y="250" width="20" height="4" rx="2" fill="#1e3a6e" fillOpacity="0.6" />
                  <rect x="181" y="266" width="118" height="18" rx="4" fill="#0f1e42" />
                  <circle cx="193" cy="275" r="5" fill="#1e3a6e" />
                  <rect x="202" y="271" width="45" height="4" rx="2" fill="#1e3a6e" />
                  <rect x="202" y="277" width="28" height="3" rx="1.5" fill="#1a2f5e" fillOpacity="0.7" />
                  <rect x="266" y="272" width="26" height="4" rx="2" fill="#2a4a8a" fillOpacity="0.6" />
                  {/* Bottom nav */}
                  <rect x="173" y="294" width="134" height="18" fill="#0f1e42" />
                  <rect x="189" y="298" width="16" height="10" rx="2" fill="#1e3a6e" />
                  <rect x="222" y="298" width="16" height="10" rx="2" fill="#3b62b5" fillOpacity="0.7" />
                  <rect x="255" y="298" width="16" height="10" rx="2" fill="#1e3a6e" />
                  <rect x="287" y="298" width="16" height="10" rx="2" fill="#1e3a6e" />
                  {/* Label text */}
                  <text x="240" y="346" textAnchor="middle" fill="#1e3a6e" fontSize="9" fontFamily="sans-serif" letterSpacing="2">iMOBILE PAY · REDESIGN</text>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#f0f0f0] font-bold text-lg">iMobile Pay UI Redesign</h3>
                <p className="text-[#888888] text-sm">Mobile Interface · ICICI Bank</p>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} className="group cursor-pointer">
              <div className="relative aspect-[4/3] bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl overflow-hidden mb-4 group-hover:border-[#444] transition-all duration-500">
                <svg className="w-full h-full" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="iMobile Pay API Banking Integration">
                  <defs>
                    <linearGradient id="bg53" x1="480" y1="0" x2="0" y2="360" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#0c0e1a" />
                      <stop offset="100%" stopColor="#111827" />
                    </linearGradient>
                  </defs>
                  {/* Background */}
                  <rect width="480" height="360" fill="url(#bg53)" />
                  {/* Subtle diagonal lines */}
                  <line x1="0" y1="0" x2="480" y2="360" stroke="#1a2030" strokeWidth="1" />
                  <line x1="120" y1="0" x2="480" y2="240" stroke="#1a2030" strokeWidth="1" />
                  <line x1="240" y1="0" x2="480" y2="120" stroke="#1a2030" strokeWidth="1" />
                  <line x1="0" y1="120" x2="360" y2="360" stroke="#1a2030" strokeWidth="1" />
                  {/* Phone outline left */}
                  <rect x="60" y="48" width="120" height="240" rx="16" ry="16" fill="#0a0e1c" stroke="#1e3060" strokeWidth="1.5" />
                  <rect x="68" y="68" width="104" height="204" rx="6" ry="6" fill="#090d1a" />
                  {/* Left phone screen elements */}
                  <rect x="76" y="78" width="88" height="12" rx="3" fill="#101d3a" />
                  <rect x="76" y="96" width="60" height="7" rx="2" fill="#1a3060" fillOpacity="0.8" />
                  <rect x="76" y="107" width="40" height="12" rx="3" fill="#1a3060" fillOpacity="0.5" />
                  <rect x="76" y="126" width="88" height="40" rx="6" fill="#0f1e3a" stroke="#1a3060" strokeWidth="1" />
                  <rect x="84" y="134" width="30" height="5" rx="2" fill="#1e3a6e" />
                  <rect x="84" y="143" width="52" height="7" rx="2" fill="#2a4a8a" fillOpacity="0.6" />
                  <rect x="76" y="174" width="40" height="28" rx="6" fill="#0f1e3a" />
                  <rect x="122" y="174" width="40" height="28" rx="6" fill="#0f1e3a" />
                  <rect x="76" y="210" width="88" height="12" rx="3" fill="#101d3a" />
                  <rect x="76" y="228" width="88" height="12" rx="3" fill="#101d3a" />
                  <rect x="76" y="246" width="88" height="12" rx="3" fill="#101d3a" />
                  {/* Connection lines between phones */}
                  <line x1="182" y1="128" x2="298" y2="100" stroke="#1e3a6e" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="182" y1="168" x2="298" y2="168" stroke="#1e3a6e" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="182" y1="208" x2="298" y2="236" stroke="#1e3a6e" strokeWidth="1" strokeDasharray="4 4" />
                  {/* API node */}
                  <circle cx="240" cy="168" r="16" fill="#0f1e3a" stroke="#1e3a6e" strokeWidth="1.5" />
                  <text x="240" y="172" textAnchor="middle" fill="#2a4a8a" fontSize="7" fontFamily="monospace" fontWeight="bold">API</text>
                  {/* Phone outline right */}
                  <rect x="300" y="48" width="120" height="240" rx="16" ry="16" fill="#0a0e1c" stroke="#1e3060" strokeWidth="1.5" />
                  <rect x="308" y="68" width="104" height="204" rx="6" ry="6" fill="#090d1a" />
                  {/* Right phone screen elements */}
                  <rect x="316" y="78" width="88" height="12" rx="3" fill="#101d3a" />
                  <rect x="316" y="96" width="50" height="7" rx="2" fill="#1a3060" fillOpacity="0.8" />
                  <rect x="316" y="107" width="70" height="7" rx="2" fill="#1a3060" fillOpacity="0.5" />
                  <rect x="316" y="122" width="88" height="50" rx="6" fill="#0f1e3a" stroke="#1a3060" strokeWidth="1" />
                  <rect x="324" y="132" width="35" height="5" rx="2" fill="#1e3a6e" />
                  <rect x="324" y="141" width="60" height="7" rx="2" fill="#2a4a8a" fillOpacity="0.6" />
                  <rect x="324" y="152" width="45" height="5" rx="2" fill="#1e3a6e" fillOpacity="0.5" />
                  <rect x="316" y="180" width="88" height="14" rx="3" fill="#101d3a" />
                  <rect x="316" y="200" width="88" height="14" rx="3" fill="#101d3a" />
                  <rect x="316" y="220" width="88" height="14" rx="3" fill="#101d3a" />
                  <rect x="316" y="240" width="88" height="14" rx="3" fill="#101d3a" />
                  {/* Label */}
                  <text x="240" y="328" textAnchor="middle" fill="#1e3a6e" fontSize="9" fontFamily="sans-serif" letterSpacing="2">MICROSERVICE ARCHITECTURE</text>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#f0f0f0] font-bold text-lg">BACKEND FRAMEWORK </h3>
                <p className="text-[#888888] text-sm">Microservice Architecture</p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Experience */}
        <Section label="Experience">
          <div className="flex flex-col gap-6">
            {EXPERIENCE.map(exp => <motion.div key={exp.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-xl p-6 md:p-8 hover:border-[#444] transition-colors duration-300">
                <div className="flex flex-col gap-1 mb-5">
                  <span className="text-[#888888] text-xs uppercase tracking-wider font-medium">PRODUCT MANAGER</span>
                  <h3 className="text-[#f0f0f0] text-xl md:text-2xl font-bold">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-3 text-[#888888] text-sm">
                    <span>{exp.location}</span>
                    <span className="w-1 h-1 rounded-full bg-[#555]" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="flex flex-col gap-2">- Led end-to-end product lifecycle for mobile banking application redesign impacting X million users<br />- Partnered with design teams to build user-centric UI/UX using Figma<br />- Defined PRDs, user stories, and acceptance criteria for multiple product features<br />- Collaborated with engineering to implement microservices architecture, improving system performance by 30%<br />- Conducted API testing using Postman; reduced the defect count from 300 to a single digit.<br />- Used JIRA to track and resolve issues, improving delivery timelines and sprint efficiency by 40%<br /><br /></ul>
              </motion.div>)}
          </div>
        </Section>

        {/* Education */}
        <Section label="Education">
          <div className="flex flex-col gap-6">
            {EDUCATION.map(edu => <motion.div key={edu.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-xl p-6 md:p-8 hover:border-[#444] transition-colors duration-300">
                <div className="flex flex-col gap-1">
                  <span className="text-[#888888] text-xs uppercase tracking-wider font-medium">
                    {edu.degree}
                  </span>
                  <h3 className="text-[#f0f0f0] text-xl md:text-2xl font-bold">
                    {edu.institution}
                  </h3>
                  <span className="text-[#888888] text-sm">{edu.period}</span>
                </div>
              </motion.div>)}
          </div>
        </Section>

        {/* Awards */}
        <Section label="Awards">
          <div className="flex flex-col gap-2">
            {AWARDS.map(award => <div key={award.id} className="flex items-center group py-4">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 flex-grow">
                  <span className="text-[#f0f0f0] font-bold md:text-lg group-hover:translate-x-1 transition-transform duration-300">
                    {award.title}
                  </span>
                  <span className="text-[#888888] text-sm md:text-base">{award.org}</span>
                  {award.detail && <span className="text-[#555555] text-sm">{award.detail}</span>}
                </div>
                <div className="hidden md:block flex-grow mx-8 border-b border-[#2a2a2a] h-1 group-hover:border-[#444] transition-colors" />
              </div>)}
          </div>
        </Section>

        {/* Personal Interests */}
        <Section label="Interests">
          <div className="flex flex-col gap-3 max-w-xl">
            <p className="text-[#888888] text-lg leading-relaxed">
              Playing guitar and piano, working out at the gym, and watching movies.
            </p>
          </div>
        </Section>

        {/* Contact */}
        <Section label="Contact">
          <div className="flex flex-col gap-4 max-w-md">
            {CONTACTS.map(contact => <a key={contact.id} href={contact.link} target={contact.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center justify-between group py-3 border-b border-transparent hover:border-[#2a2a2a] transition-all">
                <span className="text-[#888888] text-sm uppercase tracking-wider font-medium">
                  {contact.label}
                </span>
                <span className="text-[#f0f0f0] font-medium group-hover:text-white transition-colors">
                  {contact.value}
                </span>
              </a>)}
          </div>
        </Section>

        {/* Footer */}
        <footer className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12 py-24 border-t border-[#2a2a2a]">
          <div className="flex flex-col">
            <h2 className="text-[#f0f0f0] text-sm uppercase tracking-widest font-semibold" style={{
            display: "none"
          }}>
              My time
            </h2>
          </div>
          <div className="flex flex-col gap-12">
            <Clock />
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-12 border-t border-[#1f1f1f]" style={{
            display: "none"
          }}>
              <span className="text-[#555555] text-[10px] uppercase tracking-[0.2em] cursor-pointer hover:text-[#888] transition-colors" style={{
              display: "none"
            }}>
                Proudly built with React
              </span>
              <span className="text-[#555555] text-[10px] uppercase tracking-[0.2em]" style={{
              display: "none"
            }}>
                © Nikhil Kumar Meena 2024
              </span>
            </div>
          </div>
        </footer>

      </div>
    </div>;
};
export default Portfolio;