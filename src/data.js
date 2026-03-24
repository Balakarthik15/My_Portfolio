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
        en: "Ackermann RC Car — \nAutonomous Navigation (2025-2026)",
        de: "Ferngesteuertes Ackermann-Auto — \nAutonome Navigation (2025-2026)"
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
        en: "Franka Panda Robot Manipulation — \nObject Detection using YOLO (2026)",
        de: "Franka Panda Robotermanipulation — \nObjekterkennung mit YOLO (2026)"
      },
      subtitle: {
        en: "ROS2 · MoveIt2 · YOLO · Obstacle-Aware Motion Planning",
        de: "ROS2 · MoveIt2 · YOLO · Hindernisbewusste Bewegungsplanung"
      },
      description: {
        en: "Developed a Pick-and-Sort robot with YOLO-based object detection and MoveIt2 for collision-free trajectory and obstacle-aware motion planning using Franka Emika Panda",
        de: "Entwicklung eines Pick-and-Sort-Roboters mit YOLO-basierter Objekterkennung und MoveIt2 für die kollisionsfreie Trajektorienplanung und hindernisbewusste Bewegungsplanung mit Franka Emika Panda"
      },
      buttons: [{ text: { en: "GitHub", de: "GitHub" }, url: "https://github.com/Balakarthik15/Franka-7dof-Robot-Manipulation_Pick-Place.git" }],
    },
    {
      media: "dataAnalyticsImg",
      category: "github",
      type: "video",
      title: {
        en: "Data Analytics & AI Modelling Platform \n(2024)",
        de: "Datenanalyse- & KI-Modellierungsplattform \n(2024)"
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
        en: "Physics-Informed Neural Network — \nVehicle Sideslip (2025-2026)",
        de: "Physics-Informed Neuronales Netz — \nFahrzeugschwimmwinkel (2025-2026)"
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
        en: "S7/PROFINET — \nIntrusion Detection System (2026)",
        de: "S7/PROFINET — \nIntrusion Detection System (2026)"
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
        en: "AMR Fleet Deployment & \nTraffic Management (2022-2024)",
        de: "AMR-Flottenbereitstellung & \nVerkehrsmanagement (2022-2024)"
      },
      industry: {
        en: "Robotics & Manufacturing",
        de: "Robotik & Fertigung"
      },
      oneLiner: {
        en: "Deployed 100+ robots in different industries and different environments",
        de: "Einsatz von über 100 Robotern in verschiedenen Branchen und Umgebungen"
      },
      // Full modal details
      role: {
        en: "Robotics & Automation Engineer",
        de: "Robotik- & Automatisierungsingenieur"
      },
      techStack: {
        en: "ROS · PLC · Fleet Manager · Traffic Control System · Lifter / Conveyor / Tugger Attachments",
        de: "ROS · SPS · Flottenmanager · Verkehrsleitsystem · Heber / Förderer / Schlepper-Aufsätze"
      },
      description: {
        en: "Led end-to-end deployment of 100+ Autonomous Mobile Robots across multiple automotive manufacturing facilities, including 75 AMRs at Ola Electric. Managed multi-robot traffic, collision avoidance, and task scheduling for material transport using lifter, conveyor, and tugger attachments for bins, trolleys, and conveyors.",
        de: "Leitung der End-to-End-Bereitstellung von über 100 autonomen mobilen Robotern in mehreren Automobilfertigungsstätten, darunter 75 AMRs bei Ola Electric. Verwaltung von Multi-Roboter-Verkehr, Kollisionsvermeidung und Aufgabenplanung für den Materialtransport mit Heber-, Förderer- und Schlepper-Aufsätzen."
      },
      outcome: {
        en: "Significantly accelerated intra-facility material movement, reducing manual material handling across production lines",
        de: "Deutliche Beschleunigung des innerbetrieblichen Materialflusses und Reduzierung der manuellen Materialhandhabung in den Produktionslinien"
      },
      demoLinks: [
        {
          text: { en: "🎥 Watch Demo — Multi-robot deployment", de: "🎥 Demo ansehen — Multi-Roboter-Einsatz" },
          url: "https://www.linkedin.com/posts/novus-hitech_happyholi-holi-activity-7179380353554403330-WCCj?utm_source=share&utm_medium=member_desktop&rcm=ACoAACHDu8AB77tA3sT69-qTNOl1EZ59lQ_oSs4"
        },
        {
          text: { en: "🎥 Watch Demo — AMR with attachment", de: "🎥 Demo ansehen — AMR mit Aufsatz" },
          url: "https://www.linkedin.com/posts/novus-hitech_autonomousmobilerobots-innovation-robotics-activity-7176106445027885056-EBeM?utm_source=share&utm_medium=member_desktop&rcm=ACoAACHDu8AB77tA3sT69-qTNOl1EZ59lQ_oSs4"
        }
      ],
      demoCredit: {
        en: "Demo video originally posted by Ola Electric & Novus Hi-Tech on LinkedIn",
        de: "Demovideo ursprünglich veröffentlicht von Ola Electric & Novus Hi-Tech auf LinkedIn"
      },
      ndaNote: {
        en: "Code and internal details under NDA — available for discussion",
        de: "Code und interne Details unter NDA — für Gespräche verfügbar"
      },
      buttons: [],
    },
    {
      media: "robotarmImg",
      category: "professional",
      type: "image",
      title: {
        en: "Robotic Arm Integration for \nAutomated Carton Handling & Depalletizing (2023)",
        de: "Roboterarm-Integration für \nautomatisiertes Kartonhandling & Depalletierung (2023)"
      },
      industry: {
        en: "Paint & Chemical Manufacturing",
        de: "Farben- & Chemieherstellung"
      },
      oneLiner: {
        en: "Integrated ABB robotic arm with AMR for automated carton handling & depalletizing",
        de: "Integration eines ABB-Roboterarms mit AMR für automatisiertes Kartonhandling und Depalletierung"
      },
      role: {
        en: "Robotics Integration Engineer",
        de: "Roboter-Integrationsingenieur"
      },
      techStack: {
        en: "ABB 4-DOF Robot · RobotStudio · ABB Pendant · Cognex Vision System · ROS · Conveyor Integration · Popup Lifter · AMR Integration",
        de: "ABB 4-DOF Roboter · RobotStudio · ABB Pendant · Cognex Visionsystem · ROS · Förderer-Integration · Popup-Lifter · AMR-Integration"
      },
      description: {
        en: "Integrated a 4-DOF ABB robotic arm with an AMR-based material handling system for a leading paint manufacturer in India. The AMR delivered pallets loaded with cartons to the robot workspace. Using a Cognex vision camera, the robot identified carton positions by reading product labels, precisely picked carton bundles, and placed them onto a carton arrangement machine. The robot also performed strap cutting to enable automatic carton separation. After completing each pallet, a popup lifter transferred the empty pallet back to the AMR for return logistics.",
        de: "Integration eines 4-DOF ABB-Roboterarms in ein AMR-basiertes Materialtransportsystem für einen führenden Farbenhersteller in Indien. Der AMR lieferte mit Kartons beladene Paletten in den Arbeitsbereich des Roboters. Mithilfe einer Cognex-Visionskamera identifizierte der Roboter Kartonpositionen durch das Lesen von Produktetiketten, nahm Kartonbündel präzise auf und platzierte sie auf einer Kartonanordnungsmaschine. Der Roboter führte außerdem ein Bandschneiden durch, um eine automatische Kartontrennung zu ermöglichen. Nach Abschluss jeder Palette beförderte ein Popup-Lifter die leere Palette zurück zum AMR für die Rücklauflogik."
      },
      outcome: {
        en: "Fully automated carton depalletizing and sorting process, eliminating manual handling and significantly improving throughput in the packaging line",
        de: "Vollständig automatisierter Kartondepalletierungs- und Sortierprozess, der die manuelle Handhabung überflüssig macht und den Durchsatz in der Verpackungslinie erheblich verbessert"
      },
      demoLinks: [],
      demoCredit: {
        en: "",
        de: ""
      },
      ndaNote: {
        en: "Code and internal details under NDA — available for discussion",
        de: "Code und interne Details under NDA — für Gespräche verfügbar"
      },
      buttons: [],
    },
    {
      media: "stackerImg",
      category: "professional",
      type: "image",
      title: {
        en: "Autonomous Stacker AMR — \nMulti-Facility Pallet Management (2023-2024)",
        de: "Autonomer Stacker AMR — \nMulti-Facility Palettenmanagement (2023-2024)"
      },
      industry: {
        en: "Food & Beverage Manufacturing · Electronics Manufacturing",
        de: "Lebensmittel- & Getränkeherstellung · Elektronikfertigung"
      },
      oneLiner: {
        en: "Deployed autonomous stacker robots with multi-zone storage & cross-floor logistics",
        de: "Einsatz autonomer Stacker-Roboter mit Multi-Zonen-Lagerung und etagenübergreifender Logistik"
      },
      role: {
        en: "Robotics & Automation Engineer",
        de: "Robotik- & Automatisierungsingenieur"
      },
      techStack: {
        en: "Stacker AMR · ROS · Fleet Manager · Traffic Control System · Call Station Integration · Lift/Elevator Integration · Storage Buffer Management · PLC",
        de: "Stacker AMR · ROS · Flottenmanager · Verkehrsleitsystem · Rufstation-Integration · Lift/Aufzug-Integration · Lagerpuffer-Management · SPS"
      },
      description: {
        en: "Deployed and commissioned autonomous stacker robots across multiple manufacturing facilities with complex intra-facility logistics.\nMondelez (Confectionery Manufacturing): Deployed 4 stacker AMRs across a multi-section chocolate manufacturing facility. Implemented a fully automated pallet IN/OUT sequence with intelligent buffer management across 20-pallet storage zones per carton type. Operators initiate robot tasks via call stations placed at warehouse entry and machine areas. The system dynamically tracks storage occupancy — automatically halting warehouse intake when buffers are full and prioritizing machine-side delivery when production demand is triggered. Managed multi-zone storage sequencing, fleet coordination, and real-time traffic management across different production sections.\nPanasonic (Electronics Manufacturing): Deployed 2 stacker AMRs across a two-floor facility for finished goods logistics. Ground floor robot and first floor robot worked in coordination — first floor robot picks finished carton pallets from the production line and delivers them to the lift area, places the pallet inside the lift, and signals the lift to descend. Ground floor robot autonomously receives the pallet from the lift upon arrival and places it in the designated warehouse dispatch storage area. Managed cross-floor pallet sequencing, lift synchronization, and warehouse storage IN/OUT tracking.",
        de: "Implementierung und Inbetriebnahme autonomer Stacker-Roboter in mehreren Produktionsstätten mit komplexer intralogistischer Logistik.\nMondelez (Süßwarenherstellung): Einsatz von 4 Stacker-AMRs in einer Schokoladenfabrik mit mehreren Bereichen. Implementierung einer vollautomatischen Paletten-IN/OUT-Sequenz mit intelligentem Puffermanagement in 20-Paletten-Lagerzonen pro Kartontyp. Bediener lösen Roboteraufgaben über Rufstationen aus. Das System verfolgt dynamisch die Lagerbelegung – es stoppt automatisch die Lageraufnahme, wenn die Puffer voll sind, und priorisiert die maschinenseitige Lieferung bei Produktionsbedarf.\nPanasonic (Elektronikfertigung): Einsatz von 2 Stacker-AMRs in einer zweistöckigen Anlage für die Fertigwarenlogistik. Der Roboter im Erdgeschoss und der Roboter im ersten Stock arbeiteten koordiniert zusammen – der Roboter im ersten Stock holt fertige Kartonpaletten von der Produktionslinie ab, liefert sie zum Liftbereich, platziert die Palette im Lift und signalisiert dem Lift die Abfahrt. Der Roboter im Erdgeschoss empfängt die Palette bei Ankunft autonom und platziert sie im Versandlagerbereich."
      },
      outcome: {
        en: "Eliminated manual pallet handling across two major manufacturing facilities, enabling fully automated multi-zone storage management, cross-floor logistics, and real-time buffer tracking — significantly reducing material wait times and human error in production lines",
        de: "Eliminierung der manuellen Palettenhandhabung in zwei großen Produktionsstätten, Ermöglichung eines vollautomatischen Multi-Zonen-Lagermanagements, etagenübergreifender Logistik und Echtzeit-Pufferverfolgung – dies führte zu einer erheblichen Reduzierung der Materialwartezeiten und menschlicher Fehler."
      },
      demoLinks: [
        {
          text: { en: "🎥 Watch Demo — NOVUS Stacker", de: "🎥 Demo ansehen — NOVUS Stacker" },
          url: "https://www.linkedin.com/posts/novus-hitech_warehouseautomation-forkliftamr-smartintralogistics-activity-7373574459083055104-Tszr?utm_source=share&utm_medium=member_desktop&rcm=ACoAACHDu8AB77tA3sT69-qTNOl1EZ59lQ_oSs4"
        }
      ],
      demoCredit: {
        en: "Officially posted by Novus Hi-Tech Robotics",
        de: "Offiziell veröffentlicht von Novus Hi-Tech Robotics"
      },
      ndaNote: {
        en: "Code and internal details under NDA — available for discussion",
        de: "Code und interne Details unter NDA — für Gespräche verfügbar"
      },
      buttons: [],
    },
    {
      media: "asrsImg",
      category: "professional",
      type: "image",
      title: {
        en: "Automated Storage & Retrieval System (ASRS) — \n5-Level Bin Storage (2021-2022)",
        de: "Automatisiertes Lager- und Bereitstellungssystem (ASRS) — \n5-Ebenen-Behälterlager (2021-2022)"
      },
      industry: {
        en: "Industrial Automation / Warehouse Management",
        de: "Industrieautomatisierung / Lagerverwaltung"
      },
      oneLiner: {
        en: "Developed 5-level ASRS for intelligent bin-based stock management & WMS integration",
        de: "Entwicklung eines 5-Ebenen-ASRS für intelligentes behälterbasiertes Bestandsmanagement"
      },
      role: {
        en: "Robotics & Automation Engineer",
        de: "Robotik- & Automatisierungsingenieur"
      },
      techStack: {
        en: "ASRS Robot · Telescopic Fork Mechanism · QR Code Scanner · Conveyor System · Popup Lifter · Central PLC · WMS Integration · ERP/Stock Software Integration · Fleet Manager",
        de: "ASRS-Roboter · Teleskopgabel-Mechanismus · QR-Code-Scanner · Förderer-System · Popup-Lifter · Zentrale SPS · WMS-Integration · ERP/Lagersoftware-Integration · Flottenmanager"
      },
      description: {
        en: "Developed and implemented a 5-level Automated Storage and Retrieval System for intelligent bin-based stock management. Each level housed 50 bins (250 total capacity) with dedicated conveyor and lifter infrastructure. The ASRS robot used a telescopic fork attachment to retrieve bins across all levels, navigating between floors via an integrated lifter mechanism. QR codes affixed to each bin enabled automatic robot positioning on the frontline conveyor without manual input. Integrated a custom WMS system with the company's official ERP/stock management software, enabling real-time inventory tracking through a central PLC. Upon product selection by the operator, the system autonomously identifies the bin location, dispatches the robot, retrieves the bin, and delivers it to the frontline conveyor.",
        de: "Entwicklung und Implementierung eines 5-Ebenen-ASRS für das behälterbasierte Bestandsmanagement. Jede Ebene beherbergte 50 Behälter (Gesamtkapazität 250) mit dedizierter Förder- und Hebetechnik. Der ASRS-Roboter nutzte eine Teleskopgabel zum Abrufen der Behälter. QR-Codes ermöglichten die automatische Positionierung des Roboters. Integration eines maßgeschneiderten WMS in die ERP-Software des Unternehmens, was eine Bestandsverfolgung in Echtzeit ermöglichte."
      },
      outcome: {
        en: "Delivered a fully automated warehouse management solution with 250-bin capacity, eliminating manual stock retrieval, enabling real-time inventory visibility, and significantly reducing order fulfillment time for electrical component management",
        de: "Bereitstellung einer vollautomatischen Lagerverwaltungslösung mit einer Kapazität von 250 Behältern, die die manuelle Bestandsentnahme überflüssig macht und die Zeit für die Auftragsabwicklung erheblich verkürzt."
      },
      demoLinks: [],
      demoCredit: {
        en: "",
        de: ""
      },
      ndaNote: {
        en: "Code and internal details under NDA — available for discussion",
        de: "Code und interne Details unter NDA — für Gespräche verfügbar"
      },
      buttons: [],
    },
    {
      media: "agvImg",
      category: "professional",
      type: "image",
      title: {
        en: "AGV Development & International Deployment — \nMotherson France (2020-2021)",
        de: "AGV-Entwicklung & internationale Bereitstellung — \nMotherson Frankreich (2020-2021)"
      },
      industry: {
        en: "Automotive Manufacturing",
        de: "Automobilfertigung"
      },
      oneLiner: {
        en: "Developed AGVs at Motherson Chennai and successfully deployed them in France",
        de: "Entwicklung von AGVs bei Motherson Chennai und erfolgreiche Bereitstellung in Frankreich"
      },
      role: {
        en: "Robotics & Automation Engineer",
        de: "Robotik- & Automatisierungsingenieur"
      },
      techStack: {
        en: "AGV · PLC · Navigation System · Production Line Integration · Motherson Internal Systems",
        de: "AGV · SPS · Navigationssystem · Produktionslinien-Integration · Motherson-interne Systeme"
      },
      description: {
        en: "Contributed to the development and international deployment of Motherson's proprietary AGV systems. Three AGVs developed at Motherson Chennai,india were successfully deployed at Motherson's production facility in France. Oversaw the commissioning and integration of AGVs into the active production line, ensuring seamless operation in a live automotive manufacturing environment across international borders.",
        de: "Beitrag zur Entwicklung und zum internationalen Einsatz der AGV-Systeme von Motherson. Drei bei Motherson Chennai, Indien, entwickelte AGVs wurden erfolgreich im Motherson-Werk in Frankreich eingesetzt. Überwachung der Inbetriebnahme und Integration der AGVs in die aktive Produktionslinie."
      },
      outcome: {
        en: "Successfully deployed and commissioned 3 AGVs in a French automotive production facility, enabling automated material movement in a live production environment and demonstrating cross-border deployment capability",
        de: "Erfolgreiche Bereitstellung und Inbetriebnahme von 3 AGVs in einer französischen Automobilfertigung, die eine automatisierte Materialbewegung ermöglichen."
      },
      demoLinks: [],
      demoCredit: {
        en: "",
        de: ""
      },
      ndaNote: {
        en: "Code and internal details under NDA — available for discussion",
        de: "Code und interne Details unter NDA — für Gespräche verfügbar"
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