// Skills Icons
import rosIcon from "./images/skillsIcon/ROS.jpg"
import openCVIcon from "./images/skillsIcon/OpenCV.png"
import RPIIcon from "./images/skillsIcon/CPU.svg"
import CADIcon from "./images/skillsIcon/CAD.svg"
import codeIcon from "./images/skillsIcon/code.svg"
import clangIcon from "./images/skillsIcon/C_lang.png"

// Social Icons
import githubIcon from "./images/contactIcon/github.svg"
import linkedinIcon from "./images/contactIcon/linkedin.png"
import websiteIcon from "./images/contactIcon/website.png"

// Company Icons
import NovusIcon from "./images/company/NovusHiTech.webp"
import MothersonIcon from "./images/company/Motherson.webp"

// Company / Work Images
import novusWorkImg from "./images/workPhotos/NovusWork.webp"
import mothersonDevImg from "./images/workPhotos/MothersonDev.webp"
import mothersonInternImg from "./images/workPhotos/MothersonIntern.webp"

// School Images
import THKolnLogo from "./images/school/THKoln.png"
import KonguLogo from "./images/school/Kongu.png"
import THKolnImg from "./images/school/THKoln_img.webp"
import KonguImg from "./images/school/Kongu_img.webp"

// Helper function for getting text in current language
export const getText = (textObj, language = 'en') => {
  if (typeof textObj === 'string') return textObj;
  if (textObj && typeof textObj === 'object') {
    return textObj[language] || textObj.en || textObj.de || Object.values(textObj)[0] || '';
  }
  return textObj || '';
};

const siteData = {
  name: {
    en: "Balakarthik Senthilvel Palani",
    de: "Balakarthik Senthilvel Palani",
    zh: "Balakarthik Senthilvel Palani"
  },

  headerParagraph: {
    en: "Automation and Robotics Engineer with 3+ years of industry experience delivering autonomous mobile robot fleets and intelligent control systems for large-scale manufacturing environments.",
    de: "Automatisierungs- und Robotikingenieur mit mehr als 3 Jahren Industrieerfahrung in der Bereitstellung autonomer mobiler Roboterflotten und intelligenter Steuerungssysteme für industrielle Fertigungsumgebungen."
  },

  // Navigation labels
  nav: {
    home: { en: "Home", de: "Startseite" },
    work: { en: "Experience", de: "Erfahrung" },
    projects: { en: "Projects", de: "Projekte" },
    contact: { en: "Contact", de: "Kontakt" },
    resume: { en: "Resume", de: "Lebenslauf" }
  },

  // Section titles
  sections: {
    about: { en: "About", de: "Über mich" },
    education: { en: "Education", de: "Ausbildung" },
    experience: { en: "Experience", de: "Berufserfahrung" },
    workFullTime: { en: "Full Time", de: "Vollzeit" },
    workInternship: { en: "Internship", de: "Praktikum" },
    projects: { en: "Projects", de: "Projekte" },
    skills: { en: "Skills", de: "Fähigkeiten" },
    contact: { en: "Contact", de: "Kontakt" },
    professionalWork: { en: "Professional Work", de: "Berufliche Projekte" },
    githubProjects: { en: "Personal & Academic Projects", de: "Persönliche & Akademische Projekte" },
    ndaNote: { en: "Full details under NDA — available for discussion", de: "Vollständige Details unter NDA – für Gespräche verfügbar" }
  },

  // Button text
  buttons: {
    explore: { en: "Explore", de: "Mehr erfahren" },
    readMore: { en: "Read More", de: "Weiterlesen" },
    close: { en: "Close", de: "Schließen" }
  },

  contactEmail: "msbkarthik1511@gmail.com",

  // ─── EDUCATION ───────────────────────────────────────────────
  education: [
    {
      title: {
        en: "TH Köln — University of Applied Sciences",
        de: "TH Köln — Technische Hochschule Köln"
      },
      degree: {
        en: "M.Eng. in Automation and IT",
        de: "M.Eng. in Automatisierung und IT"
      },
      duration: {
        en: "Oct 2024 – Present",
        de: "Okt 2024 – Heute"
      },
      imageSrc: THKolnLogo,
      workImg: THKolnImg,
      url: "https://www.th-koeln.de/",
      socialLinks: [
        { img: websiteIcon, url: "https://www.th-koeln.de/" },
        { img: linkedinIcon, url: "https://www.linkedin.com/school/cologne-university-of-applied-sciences/" }
      ],
      description: [
        {
          en: "Focus: Intelligent Robotics, Machine Learning, Physics-Informed Modelling, Industrial Automation",
          de: "Schwerpunkte: Intelligente Robotik, Maschinelles Lernen, Physics-Informed Modelling, Industrieautomatisierung"
        },
        {
          en: "Active projects: ROS2 Nav2 autonomous navigation, Franka Panda manipulation (MoveIt2), PINN-based vehicle sideslip estimation",
          de: "Aktive Projekte: Autonome Navigation mit ROS2 Nav2, Manipulation mit Franka Panda (MoveIt2), PINN-basierte Schätzung des Fahrzeugschwimmwinkels"
        }
      ],
    },
    {
      title: {
        en: "Kongu Engineering College",
        de: "Kongu Engineering College"
      },
      degree: {
        en: "B.E. in Mechatronics Engineering",
        de: "B.E. in Mechatronik"
      },
      duration: {
        en: "Jun 2016 – May 2020",
        de: "Jun 2016 – Mai 2020"
      },
      imageSrc: KonguLogo,
      workImg: KonguImg,
      url: "https://www.kongu.ac.in/",
      socialLinks: [
        { img: websiteIcon, url: "https://kongu.ac.in/" },
        { img: linkedinIcon, url: "https://www.linkedin.com/school/kongu-engineering-collegeerode/" }
      ],
      description: [
        {
          en: "Specialised in mechatronics systems, sensors, actuators, and control engineering",
          de: "Spezialisierung auf mechatronische Systeme, Sensorik, Aktorik und Regelungstechnik"
        },
        {
          en: "Foundation in PLC programming, servo control, and industrial automation systems",
          de: "Grundlagen der SPS-Programmierung, Servosteuerung und industriellen Automatisierungssystemen"
        }
      ],
    },
  ],

  // ─── WORK EXPERIENCE ───────────────────────────────────────
  projects: [
    {
      title: {
        en: "Novus Hi-Tech Robotics Pvt. Ltd.",
        de: "Novus Hi-Tech Robotics Pvt. Ltd."
      },
      position: {
        en: "Systems & Solution Engineer — Robotics",
        de: "Systems & Solution Engineer — Robotik"
      },
      workType: "full-time",
      para: {
        en: "Deployed 75+ AMRs across 25+ facilities with SLAM-based navigation and fleet coordination.",
        de: "Implementierung von über 75 AMRs an über 25 Standorten mit SLAM-basierter Navigation und Flottenkoordination."
      },
      imageSrc: NovusIcon,
      url: "#",
      date: "06/2022 – 09/2024",
      socialLinks: [
        { img: websiteIcon, url: "https://novushitech.com/" },
        { img: linkedinIcon, url: "https://www.linkedin.com/company/novus-hitech" }
      ],
      description: [
        {
          en: "Spearheaded end-to-end deployment of 75+ AMRs across 25+ manufacturing facilities, from SLAM-based navigation and integration to customer handover, eliminating manual transport dependency at each site",
          de: "Leitung der End-to-End-Implementierung von mehr als 75 AMRs in über 25 Produktionsstätten, von der SLAM-basierten Navigation bis zur Kundenübergabe, wodurch manuelle Transporte entfallen"
        },
        {
          en: "Architected and deployed a real-time fleet and traffic coordination system for concurrent multi-AMR operation in shared factory environments, eliminating routing conflicts and improving material-flow throughput",
          de: "Architektur und Bereitstellung eines Echtzeit-Flottenkoordinationssystems für den parallelen Multi-AMR-Betrieb, das Routenkonflikte beseitigt und den Materialfluss optimiert"
        },
        {
          en: "Developed ROS-based path-planning pipelines and custom HMI dashboards for live robot tracking, access control, and diagnostics, reducing operator intervention time across deployed sites",
          de: "Entwicklung von ROS-basierten Pfadplanungsfunktionen sowie maßgeschneiderten HMI-Dashboards zur Live-Verfolgung, Zugangskontrolle und Diagnose"
        },
        {
          en: "Led cross-functional teams in system integration, hardware testing, and customer training programmes for 25+ client facilities",
          de: "Führung funktionsübergreifender Teams bei der Systemintegration, beim Hardwaretest und bei Kundenschulungen"
        }
      ],
      workImg: novusWorkImg,
    },
    {
      title: {
        en: "Motherson Automotive Technologies",
        de: "Motherson Automotive Technologies"
      },
      position: {
        en: "Development Engineer — Autonomous Systems",
        de: "Entwicklungsingenieur — Autonome Systeme"
      },
      workType: "full-time",
      para: {
        en: "Designed full control architecture for an autonomous stacker integrating ROS, PLC & WMS.",
        de: "Entwurf einer vollständigen Steuerungsarchitektur für einen autonomen Hochregalstapler, der ROS, SPS und WMS integriert."
      },
      imageSrc: MothersonIcon,
      url: "#",
      date: "04/2021 – 06/2022",
      socialLinks: [
        { img: linkedinIcon, url: "https://www.linkedin.com/company/robis-motherson" }
      ],
      description: [
        {
          en: "Designed full control architecture for an autonomous stacker system, integrating ROS path planning with PLC actuation logic (Modbus/Profinet) and a custom HMI, achieving autonomous pallet retrieval without manual intervention",
          de: "Entwicklung einer vollständigen Steuerungsarchitektur für einen autonomen Stapler durch Integration der ROS-Pfadplanung mit der SPS-Ansteuerungslogik (Modbus/Profinet) und einem HMI"
        },
        {
          en: "Integrated PLC and ROS platforms with a Warehouse Management System (WMS) for real-time material handling logic and live inventory coordination",
          de: "Integration von SPS- und ROS-Plattformen mit einem Warehouse-Management-System (WMS) für die Echtzeitlogik des Materialhandlings"
        },
        {
          en: "Implemented Modbus and Profinet protocols for reliable data exchange between robotic and automation subsystems",
          de: "Implementierung der Modbus- und Profinet-Protokolle für den zuverlässigen Datenaustausch zwischen Roboter- und Automatisierungssubsystemen"
        }
      ],
      workImg: mothersonDevImg,
    },
    {
      title: {
        en: "Motherson Automotive Technologies",
        de: "Motherson Automotive Technologies"
      },
      position: {
        en: "Graduate Intern & Automation Trainee",
        de: "Trainee für Automatisierung"
      },
      workType: "internship",
      para: {
        en: "Contributed to panel design, servo control, and structured PLC programming for industrial systems.",
        de: "Mitwirkung bei der Schaltschrankkonstruktion, Servosteuerung und strukturierten SPS-Programmierung."
      },
      imageSrc: MothersonIcon,
      url: "#",
      date: "11/2019 – 04/2021",
      socialLinks: [
        { img: linkedinIcon, url: "https://www.linkedin.com/company/robis-motherson" }
      ],
      description: [
        {
          en: "Contributed to panel design, servo control configuration, and structured PLC programming (LAD, ST) for industrial automation systems",
          de: "Beitrag zum Schaltschrankbau, zur Konfiguration von Servosteuerungen und zur strukturierten SPS-Programmierung (FUP, AWL) für industrielle Automatisierungssysteme"
        },
        {
          en: "Supported multidisciplinary engineering tasks involving sensors, variable-speed drives, and automation components during product development cycles",
          de: "Unterstützung bereichsübergreifender Ingenieursaufgaben in den Bereichen Sensoren, drehzahlvariable Antriebe und Automatisierungskomponenten"
        }
      ],
      workImg: mothersonInternImg,
    },
  ],

  // ─── ABOUT SECTION ───────────────────────────────────────────
  aboutParaOne: {
    en: "I am an Automation and Robotics Engineer with 3+ years of industry experience delivering autonomous mobile robot fleets and intelligent control systems for large-scale manufacturing environments. I have spearheaded end-to-end deployment of 75+ AMRs across 25+ manufacturing facilities, integrating ROS2, SLAM, PLC, and custom HMI into production-grade systems.",
    de: "Ich bin Automatisierungs- und Robotikingenieur mit mehr als 3 Jahren Industrieerfahrung in der Bereitstellung autonomer mobiler Roboterflotten und intelligenter Steuerungssysteme für industrielle Fertigungsumgebungen. Ich habe die Implementierung von über 75 AMRs in mehr als 25 Produktionsstätten geleitet und ROS2, SLAM, SPS und HMIs in produktionsreife Systeme integriert."
  },

  aboutParaTwo: {
    en: "I am currently pursuing an M.Eng. in Automation and IT at TH Köln, Germany, with a focus on autonomous navigation, robot manipulation, and AI-based estimation for industrial applications. I hold a B.E. in Mechatronics Engineering from Kongu Engineering College, India.",
    de: "Derzeit absolviere ich einen M.Eng. in Automatisierung und IT an der TH Köln mit Schwerpunkt auf autonomer Navigation, Robotermanipulation und KI-basierten Schätzungsmethoden für industrielle Anwendungen. Ich habe einen Bachelorabschluss (B.E.) in Mechatronik vom Kongu Engineering College, Indien."
  },

  aboutParaThree: {
    en: "I am open to full-time positions, Werkstudent (working student), internship, or M.Eng. thesis collaboration in robotics engineering and intelligent automation roles across Germany and Europe.",
    de: "Ich bin offen für Vollzeitstellen, Werkstudententätigkeiten, Praktika oder Kooperationen für meine Masterarbeit im Bereich Robotik und intelligente Automatisierung in Deutschland und Europa."
  },

  // ─── PROJECTS CAROUSEL ───────────────────────────────────────
  projectsCarouselItems: [
    {
      media: "ackermanImg",
      category: "github",
      type: "video",
      title: {
        en: "Ackermann RC Car — Autonomous Navigation (2025–26)",
        de: "Ferngesteuertes Ackermann-Auto — Autonome Navigation (2025–26)"
      },
      subtitle: {
        en: "ROS2 · Nav2 · Gazebo · SLAM · Reverse Parking",
        de: "ROS2 · Nav2 · Gazebo · SLAM · Rückwärtseinparken"
      },
      description: {
        en: "Built a ROS2 Nav2 autonomous RC car migrating from Gazebo simulation to a physical vehicle with real-time SLAM obstacle avoidance and autonomous reverse parking. Tuned path-planning algorithms for Ackermann steering constraints.",
        de: "Aufbau eines autonomen ROS2 Nav2 RC-Autos, das von der Gazebo-Simulation auf ein physisches Fahrzeug migriert wurde, mit SLAM-Echtzeit-Hindernisvermeidung und automatisiertem Rückwärtseinparken."
      },
      buttons: [{ text: { en: "GitHub", de: "GitHub" }, url: "https://github.com/Balakarthik15/Ros2_ackermann_robot.git" }],
    },
    {
      media: "frankaImg",
      category: "github",
      type: "video",
      title: {
        en: "Franka Panda — Colour-Based Sorting (2024–25)",
        de: "Franka Panda — Farbbasierte Sortierung (2024–25)"
      },
      subtitle: {
        en: "ROS2 · MoveIt2 · Gazebo · 7-DOF Planning",
        de: "ROS2 · MoveIt2 · Gazebo · 7-DOF-Planung"
      },
      description: {
        en: "Developed a pick-and-place pipeline using MoveIt2 for collision-free 7-DOF trajectory planning with a colour-based perception module for autonomous object sorting.",
        de: "Entwicklung einer Pick-and-Place-Pipeline mit MoveIt2 für die kollisionsfreie 7-DOF-Trajektorienplanung mit einem farbbasierten Wahrnehmungsmodul."
      },
      buttons: [{ text: { en: "GitHub", de: "GitHub" }, url: "https://github.com/Balakarthik15/Franka-7dof-Robot-Manipulation_Pick-Place.git" }],
    },
    {
      media: "dataAnalyticsImg",
      category: "github",
      type: "video",
      title: {
        en: "Data Analytics & AI Modelling Platform (2024)",
        de: "Datenanalyse- & KI-Modellierungsplattform (2024)"
      },
      subtitle: {
        en: "Python · Scikit-learn · TensorFlow · TensorBoard · CNN",
        de: "Python · Scikit-learn · TensorFlow · TensorBoard · CNN"
      },
      description: {
        en: "Built an end-to-end ML platform for CSV/ZIP input, preprocessing, regression, classification, and image-based AI modelling with TensorBoard and confusion-matrix evaluation.",
        de: "Entwicklung einer End-to-End-ML-Plattform für CSV/ZIP-Eingabe, Vorverarbeitung, Regression, Klassifizierung und bildbasierte KI-Modellierung."
      },
      buttons: [{ text: { en: "GitHub", de: "GitHub" }, url: "https://github.com/Balakarthik15/data-analytics.git" }],
    },
    {
      media: "pinnImg",
      category: "github",
      type: "video",
      title: {
        en: "Physics-Informed Neural Network — Vehicle Sideslip (2025–26)",
        de: "Physics-Informed Neuronales Netz — Fahrzeugschwimmwinkel (2025–26)"
      },
      subtitle: {
        en: "PyTorch · PINN · RNN · TCN",
        de: "PyTorch · PINN · RNN · TCN"
      },
      description: {
        en: "Developed and benchmarked a PINN against standard NN baselines for vehicle lateral dynamics estimation, using physical constraints to improve generalisation. Applied RNN and TCN correctors to refine lateral velocity predictions.",
        de: "Entwicklung und Benchmarking eines PINN im Vergleich zu Standard-NN-Baselines für die Schätzung der Querdynamik von Fahrzeugen unter Verwendung physikalischer Beschränkungen zur Verbesserung der Generalisierung."
      },
      buttons: [{ text: { en: "GitHub", de: "GitHub" }, url: "https://github.com/Balakarthik15/VEHICLE_SIDESLIP_ESTIMATION_PINNS" }],
    },
    {
      media: "otSecurityImg",
      category: "github",
      type: "image",
      title: {
        en: "S7/PROFINET — Intrusion Detection System",
        de: "S7/PROFINET — Intrusion Detection System"
      },
      subtitle: {
        en: "Suricata · Lua · ICS Security · S7 · PROFINET",
        de: "Suricata · Lua · ICS-Sicherheit · S7 · PROFINET"
      },
      description: {
        en: "Developed a passive network-based IDS using Suricata and custom Lua scripts to detect vulnerabilities in unauthenticated industrial protocols (S7 PUT/GET & PROFINET DCP). Implemented Layer-2 inspection and stateful behavioral analysis for OT environment protection.",
        de: "Entwicklung eines passiven netzwerkbasierten IDS mit Suricata und benutzerdefinierten Lua-Skripten zur Erkennung von Schwachstellen in unauthentifizierten Industrieprotokollen (S7 & PROFINET)."
      },
      buttons: [{ text: { en: "GitHub", de: "GitHub" }, url: "https://github.com/Balakarthik15/S7-Profinet-Intrusion-Detection.git" }],
    },
    {
      media: "amrFleetImg",
      category: "professional",
      type: "image",
      title: {
        en: "AMRFleet — Multi-Robot Traffic Coordination",
        de: "AMRFleet — Multi-Roboter-Verkehrskoordination"
      },
      industry: {
        en: "Robotics & Manufacturing",
        de: "Robotik & Fertigung"
      },
      techStack: {
        en: "ROS · SLAM · Python · PLC · SCL",
        de: "ROS · SLAM · Python · SPS · SCL"
      },
      outcome: {
        en: "Eliminated multi-robot routing conflicts and boosted material throughput via real-time coordination software.",
        de: "Beseitigung von Routing-Konflikten bei mehreren Robotern und Steigerung des Materialdurchsatzes durch Echtzeit-Koordinationssoftware."
      },
      description: {
        en: "Developed an SLAM-based AMR with PLC safety logic and multi-robot coordination software; built HMI for live tracking, diagnostics, and access control. Confidential industry project.",
        de: "Entwicklung eines SLAM-basierten AMR mit SPS-Sicherheitslogik und Multi-Roboter-Software; Entwicklung von HMIs zur Live-Verfolgung und Diagnose. Vertrauliches Industrieprojekt."
      },
      buttons: [],
    },
  ],

  // ─── SKILLS ──────────────────────────────────────────────────
  skills: [
    {
      img: rosIcon,
      title: { en: "Robotics", de: "Robotik" },
      para: {
        en: "ROS2, Nav2, MoveIt2, SLAM, Gazebo, URDF, TF2",
        de: "ROS2, Nav2, MoveIt2, SLAM, Gazebo, URDF, TF2"
      }
    },
    {
      img: RPIIcon,
      title: { en: "Industrial", de: "Industrie" },
      para: {
        en: "TIA Portal, Siemens PLC (S7), HMI, SCADA, OPC-UA",
        de: "TIA Portal, Siemens SPS (S7), HMI, SCADA, OPC-UA"
      }
    },
    {
      img: openCVIcon,
      title: { en: "ML / AI", de: "ML / KI" },
      para: {
        en: "PyTorch, TensorFlow, scikit-learn, CNN, PINN",
        de: "PyTorch, TensorFlow, scikit-learn, CNN, PINN"
      }
    },
    {
      img: codeIcon,
      title: { en: "Programming", de: "Programmierung" },
      para: {
        en: "Python, C++, SQL, SCL, Structured Text, LAD",
        de: "Python, C++, SQL, SCL, ST, AWL/KOP"
      }
    },
    {
      img: clangIcon,
      title: { en: "Data & Tools", de: "Daten & Tools" },
      para: {
        en: "Pandas, NumPy, Matplotlib, Git, GitHub, TensorBoard",
        de: "Pandas, NumPy, Matplotlib, Git, GitHub, TensorBoard"
      }
    },
    {
      img: CADIcon,
      title: { en: "Languages", de: "Sprachen" },
      para: {
        en: "English (Fluent) · German (A2) · Tamil (Native)",
        de: "Englisch (Fließend) · Deutsch (A2) · Tamil (Muttersprache)"
      }
    },
  ],

  // ─── CONTACT ─────────────────────────────────────────────────
  contactSubHeading: {
    en: "Let's talk robotics & automation!",
    de: "Lassen Sie uns über Robotik und Automatisierung sprechen!"
  },

  social: [
    {
      img: githubIcon,
      url: "https://github.com/Balakarthik15",
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/balakarthiksenthilvelpalani",
    },
  ],
}

export default siteData