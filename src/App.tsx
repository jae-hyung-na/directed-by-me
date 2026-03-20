import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Play, 
  X, 
  Instagram, 
  Youtube, 
  Mail, 
  Plus, 
  Trash2, 
  Edit2, 
  LogOut,
  ArrowLeft,
  ArrowRight,
  Menu,
  Settings
} from "lucide-react";
import { Project } from "./types";
import { projectsData } from "./data/projects";

// --- Components ---
const Navbar: React.FC<{ 
  activeTab: string, 
  onTabChange: (tab: string) => void,
  isScrolled: boolean
}> = ({ activeTab, onTabChange, isScrolled }) => (
  <nav className={`fixed top-0 left-0 w-full z-[100] flex justify-center items-center gap-4 md:gap-8 ${
    isScrolled 
      ? "bg-black/60 backdrop-blur-md py-4 border-b border-white/5" 
      : "bg-transparent py-8"
  }`}>
    {["Home", "About", "Works", "Services", "Contact"].map((tab) => (
      <button
        key={tab}
        onClick={() => onTabChange(tab)}
        className={`relative text-xs md:text-sm uppercase tracking-tight font-bold transition-all duration-300 ${
          activeTab === tab 
            ? "text-white" 
            : "text-zinc-600 hover:text-zinc-400"
        }`}
      >
        {tab}
        {activeTab === tab && (
          <div className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white" />
        )}
      </button>
    ))}
  </nav>
);

const HomeSection: React.FC = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex flex-col items-center justify-center min-h-screen bg-black relative px-4"
  >
    <motion.h1 
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-5xl md:text-7xl lg:text-9xl uppercase text-white text-center leading-[0.9] tracking-tighter"
      style={{ fontWeight: 700 }}
    >
      Directed by Me
    </motion.h1>
    
    <div className="absolute bottom-12 left-0 w-full text-center px-6">
      <p className="text-[10px] md:text-[11px] text-zinc-500 uppercase tracking-[0.4em]" style={{ fontWeight: 500 }}>
        © 2026 DIRECTED BY ME. &nbsp;&nbsp; WARNING : ALL RIGHTS RESERVED.
      </p>
    </div>
  </motion.div>
);

const AboutSection: React.FC = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-24"
  >
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-stretch">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="h-full bg-zinc-900 rounded-sm overflow-hidden">
          <img
            src="/profile.jpg"
            alt="Director portrait"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-4xl md:text-5xl uppercase tracking-tight" style={{ fontWeight: 700 }}>NA JAE-HYEONG</h2>
        <div className="space-y-4 text-zinc-400 leading-relaxed">
          <p>
            시네마틱한 영상 연출과 정교한 사운드 설계를 결합해 서사를 구축하는 
			영상 연출가이자 사운드 엔지니어입니다. 촬영, 편집, 사운드 디자인을 아우르며 
			아이디어를 시각적 경험으로 구현하는 작업을 합니다.
          </p>
          <p>
			2025년 동서대학교 방송영상학과를 졸업했으며 현재 부산을 기반으로 
			영상 작업과 포트폴리오 프로젝트를 진행하고 있습니다.
          </p>
          <p>
			모든 작업에서 장면의 리듬, 사운드의 밀도, 서사의 흐름을 함께 설계하는 것을 중요하게 생각합니다.
          </p>
        </div>
        
        <div className="pt-6 space-y-3">
          <div className="flex items-center gap-3 md:gap-4">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-600 shrink-0" style={{ fontWeight: 500 }}>BORN</span>
            <span className="text-white text-xs sm:text-sm md:text-base whitespace-nowrap">1998-02-13 (age 28)</span>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-600 shrink-0" style={{ fontWeight: 500 }}>EDUCATION</span>
            <span className="text-white text-[10px] sm:text-sm md:text-base whitespace-nowrap tracking-tighter sm:tracking-normal">Dongseo University Dept. of Broadcasting & Media (2025)</span>
          </div>
          <div className="flex items-start gap-3 md:gap-4 pt-2">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-600 shrink-0 pt-1" style={{ fontWeight: 500 }}>AWARDS</span>
            <div className="flex flex-col gap-2">
              <span className="text-white text-xs sm:text-sm md:text-base leading-tight">DSU LINC 3.0 캡스톤디자인 FAIR, 장려상 (2023)</span>
              <span className="text-white text-xs sm:text-sm md:text-base leading-tight">호치킨 동영상 공모전, 장려상 (2021)</span>
              <span className="text-white text-xs sm:text-sm md:text-base leading-tight">대한민국 한옥공모전 영상부문, 금상 (2021)</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const ServicesSection: React.FC = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen bg-black text-white py-32 px-6"
  >
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
        {/* Editorial */}
        <div className="bg-black p-10 space-y-8 hover:bg-zinc-950 transition-colors duration-500">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-zinc-600 tracking-widest">01</span>
            <h3 className="text-3xl font-bold tracking-tight uppercase">Editorial</h3>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm tracking-tight">Color Grading</h4>
            <h4 className="text-white font-bold text-sm tracking-tight">2D Clean & Beauty</h4>
          </div>
        </div>

        {/* Sound */}
        <div className="bg-black p-10 space-y-8 hover:bg-zinc-950 transition-colors duration-500">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-zinc-600 tracking-widest">02</span>
            <h3 className="text-3xl font-bold tracking-tight uppercase">Sound</h3>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm tracking-tight">Mixing & Mastering</h4>
            <h4 className="text-white font-bold text-sm tracking-tight">Dialogue Recording & Editing</h4>
            <h4 className="text-white font-bold text-sm tracking-tight">Audio Restoration & Noise Reduction</h4>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ContactSection: React.FC = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen bg-black text-white py-32 px-6 flex flex-col items-center justify-center"
  >
    <div className="max-w-2xl w-full mx-auto text-center space-y-16">
      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Contact</h2>
      
      <div className="space-y-12">
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Instagram</h4>
          <a href="https://instagram.com/directedby__me" target="_blank" rel="noopener noreferrer" className="block text-xl md:text-3xl font-medium hover:text-zinc-400 transition-colors">
            @directedby__me
          </a>
        </div>

        <div className="space-y-4">
          <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Phone</h4>
          <a href="tel:+821073057415" className="block text-xl md:text-3xl font-medium hover:text-zinc-400 transition-colors">
            +82 10-7305-7415
          </a>
        </div>

        <div className="space-y-4">
          <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">E-Mail</h4>
          <a href="mailto:iaminrighthere@gmail.com" className="block text-xl md:text-3xl font-medium hover:text-zinc-400 transition-colors">
            iaminrighthere@gmail.com
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

const ProjectItem: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
  <motion.div 
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    onClick={onClick}
    className="project-item group cursor-pointer border-none relative overflow-hidden"
  >
    <img 
      src={project.thumbnail_url} 
      alt={project.title} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      referrerPolicy="no-referrer"
    />
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500 flex flex-col items-center justify-center p-4">
      {/* Title & Category */}
      <div className="flex flex-col items-center transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="text-white font-bold text-lg md:text-xl text-center mb-1 tracking-tight">{project.title}</h3>
        {project.description && (
          <p className="text-zinc-300 text-xs md:text-sm text-center mb-2">{project.description}</p>
        )}
        <p className="text-white font-bold text-xs md:text-sm text-center">
          {project.display_category || project.category}{project.year ? ` • ${project.year}` : ''}
        </p>
      </div>
    </div>
  </motion.div>
);

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[200] overflow-y-auto bg-black/100 backdrop-blur-sm p-4 md:p-10"
  >
    <button 
      onClick={onClose}
      className="fixed top-6 right-6 md:top-10 md:right-10 text-white hover:text-accent transition-all z-10"
    >
      <X size={32} />
    </button>
    
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center py-10 min-h-full">
      <div className="aspect-video w-full bg-zinc-900 mb-12 shadow-2xl">
        <iframe 
          src={project.video_url} 
          className="w-full h-full"
          allow="autoplay; fullscreen"
          title={project.title}
        />
      </div>
      <div className="flex flex-col items-center text-center max-w-3xl">
        <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-6">
          {project.display_category || project.category}{project.year ? ` • ${project.year}` : ''}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10">{project.title}</h2>
        
        <div className="flex flex-col items-start text-left w-full border-t border-zinc-900 pt-12 space-y-12">
          {project.role && (
            <div>
              <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">Role</h4>
              <p className="text-zinc-400 text-sm whitespace-pre-line leading-loose max-w-3xl">
                {project.role}
              </p>
            </div>
          )}
          
          <div>
            <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">Credits</h4>
            <p className="text-zinc-400 text-sm whitespace-pre-line leading-loose max-w-3xl">{project.credits}</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [projects, setProjects] = useState<Project[]>(projectsData);
  const [visibleCount, setVisibleCount] = useState(8);
  const [activeTab, setActiveTab] = useState<string>(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const formatted = hash.charAt(0).toUpperCase() + hash.slice(1).toLowerCase();
      if (["Home", "About", "Works", "Services", "Contact"].includes(formatted)) {
        return formatted;
      }
    }
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");
    if (tabParam) {
      const formatted = tabParam.charAt(0).toUpperCase() + tabParam.slice(1).toLowerCase();
      if (["Home", "About", "Works", "Services", "Contact"].includes(formatted)) {
        return formatted;
      }
    }
    return "Home";
  });
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!window.location.hash && !window.location.search.includes("tab=")) {
      window.history.replaceState(null, "", `#${activeTab.toLowerCase()}`);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const formatted = hash.charAt(0).toUpperCase() + hash.slice(1).toLowerCase();
        if (["Home", "About", "Works", "Services", "Contact"].includes(formatted)) {
          setActiveTab(formatted);
          return;
        }
      }
      
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");
      if (tabParam) {
        const formatted = tabParam.charAt(0).toUpperCase() + tabParam.slice(1).toLowerCase();
        if (["Home", "About", "Works", "Services", "Contact"].includes(formatted)) {
          setActiveTab(formatted);
          return;
        }
      }
      
      setActiveTab("Home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (selectedProject) {
        setSelectedProject(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selectedProject]);

  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    window.location.hash = tab.toLowerCase();
  };

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    window.history.pushState({ modalOpen: true }, "");
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  const filteredProjects = projects.filter(p => {
    if (activeCategory === "ALL") return true;
    return p.category === activeCategory;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
        isScrolled={isScrolled}
      />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === "Home" && (
            <HomeSection key="home" />
          )}

          {activeTab === "About" && (
            <AboutSection key="about" />
          )}

          {activeTab === "Works" && (
            <motion.div 
              key="works"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pt-32 pb-24"
            >
              <div className="flex flex-col items-center mb-16 px-4">
                <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                  {["ALL", "Content", "Sound"].map(cat => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setVisibleCount(8); // Reset count when changing category
                      }}
                      className={`px-6 py-3 text-[10px] md:text-xs tracking-tight uppercase border font-bold transition-all duration-300 ${
                        activeCategory === cat
                          ? "bg-white text-black border-white"
                          : "bg-black text-white border-white/20 hover:border-white/50"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="project-grid">
                {visibleProjects.map((project: Project) => (
                  <ProjectItem 
                    key={project.id} 
                    project={project} 
                    onClick={() => handleOpenProject(project)} 
                  />
                ))}
              </div>
              
              {filteredProjects.length > visibleCount && (
                <div className="py-20 flex justify-center">
                  <button 
                    onClick={() => setVisibleCount(prev => prev + 8)}
                    className="bg-zinc-900 text-white px-12 py-4 rounded-sm text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all"
                  >
                    Load More
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "Services" && (
            <ServicesSection key="services" />
          )}

          {activeTab === "Contact" && (
            <ContactSection key="contact" />
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={handleCloseProject} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
