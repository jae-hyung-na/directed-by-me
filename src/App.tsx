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

const AdminDashboard: React.FC<{ 
  projects: Project[], 
  onUpdate: () => void,
  onLogout: () => void 
}> = ({ projects, onUpdate, onLogout }) => {
  const [editingProject, setEditingProject] = useState<Partial<Project> | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      await fetch(`/api/projects/${id}`, { method: "DELETE" });
      onUpdate();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editingProject?.id ? "PUT" : "POST";
    const url = editingProject?.id ? `/api/projects/${editingProject.id}` : "/api/projects";
    
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingProject)
    });
    
    setEditingProject(null);
    setIsAdding(false);
    onUpdate();
  };

  return (
    <div className="min-h-screen bg-black pt-24 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter">Admin Dashboard</h2>
          <div className="flex gap-4">
            <button 
              onClick={() => { setIsAdding(true); setEditingProject({}); }}
              className="px-6 py-2 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-accent transition-all"
            >
              + New Entry
            </button>
            <button 
              onClick={onLogout}
              className="px-6 py-2 border border-zinc-800 text-zinc-500 text-xs font-bold uppercase tracking-widest hover:border-red-500 hover:text-red-500 transition-all"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {projects.map(p => (
            <div key={p.id} className="bg-zinc-950 border border-zinc-900 p-6 group hover:border-white transition-all">
              <img src={p.thumbnail_url} className="w-full aspect-video object-cover mb-4" referrerPolicy="no-referrer" />
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1 block">{p.display_category || p.category}</span>
              <h3 className="font-bold text-lg mb-4">{p.title}</h3>
              <div className="flex gap-4 pt-4 border-t border-zinc-900">
                <button onClick={() => setEditingProject(p)} className="text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">Edit</button>
                <button onClick={() => handleDelete(p.id)} className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-red-500 transition-colors">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {(editingProject || isAdding) && (
        <div className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-md flex items-center justify-center p-6">
          <div className="w-full max-w-2xl p-10 bg-zinc-950 border border-zinc-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 tracking-tighter">{isAdding ? "New Project" : "Edit Project"}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Title</label>
                  <input 
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 p-3 text-sm focus:border-white outline-none transition-colors"
                    value={editingProject?.title || ""}
                    onChange={e => setEditingProject({...editingProject, title: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Year</label>
                  <input 
                    placeholder="e.g. 2023"
                    className="w-full bg-zinc-900 border border-zinc-800 p-3 text-sm focus:border-white outline-none transition-colors"
                    value={editingProject?.year || ""}
                    onChange={e => setEditingProject({...editingProject, year: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Category</label>
                  <select 
                    className="w-full bg-zinc-900 border border-zinc-800 p-3 text-sm focus:border-white outline-none transition-colors appearance-none"
                    value={editingProject?.category || "Content"}
                    onChange={e => setEditingProject({...editingProject, category: e.target.value})}
                  >
                    <option>Content</option>
                    <option>Sound</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Display Category</label>
                  <input 
                    placeholder="e.g. Music Video"
                    className="w-full bg-zinc-900 border border-zinc-800 p-3 text-sm focus:border-white outline-none transition-colors"
                    value={editingProject?.display_category || ""}
                    onChange={e => setEditingProject({...editingProject, display_category: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Video URL (Embed)</label>
                <input 
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 p-3 text-sm focus:border-white outline-none transition-colors"
                  value={editingProject?.video_url || ""}
                  onChange={e => setEditingProject({...editingProject, video_url: e.target.value})}
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Thumbnail URL</label>
                <input 
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 p-3 text-sm focus:border-white outline-none transition-colors"
                  value={editingProject?.thumbnail_url || ""}
                  onChange={e => setEditingProject({...editingProject, thumbnail_url: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Role</label>
                  <input 
                    className="w-full bg-zinc-900 border border-zinc-800 p-3 text-sm focus:border-white outline-none transition-colors"
                    value={editingProject?.role || ""}
                    onChange={e => setEditingProject({...editingProject, role: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Credits</label>
                  <input 
                    className="w-full bg-zinc-900 border border-zinc-800 p-3 text-sm focus:border-white outline-none transition-colors"
                    value={editingProject?.credits || ""}
                    onChange={e => setEditingProject({...editingProject, credits: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Description</label>
                <textarea 
                  className="w-full bg-zinc-900 border border-zinc-800 p-3 text-sm focus:border-white outline-none transition-colors h-24 resize-none"
                  value={editingProject?.description || ""}
                  onChange={e => setEditingProject({...editingProject, description: e.target.value})}
                />
              </div>
              <div className="flex gap-6 pt-4">
                <button type="submit" className="flex-1 bg-white text-black font-bold py-4 hover:bg-accent transition-all uppercase text-[10px] tracking-widest">Save Entry</button>
                <button type="button" onClick={() => { setEditingProject(null); setIsAdding(false); }} className="flex-1 border border-zinc-800 font-bold py-4 hover:bg-zinc-900 transition-all uppercase text-[10px] tracking-widest">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [activeTab, setActiveTab] = useState<string>("Home");
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [isScrolled, setIsScrolled] = useState(false);

  const fetchProjects = async () => {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginForm)
    });
    if (res.ok) {
      setIsAdmin(true);
      setShowLogin(false);
    } else {
      alert("Invalid credentials (admin / admin123)");
    }
  };

  const filteredProjects = projects.filter(p => {
    if (activeCategory === "ALL") return true;
    return p.category === activeCategory;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  if (isAdmin) {
    return (
      <AdminDashboard 
        projects={projects} 
        onUpdate={fetchProjects} 
        onLogout={() => setIsAdmin(false)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
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
                    onClick={() => setSelectedProject(project)} 
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
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLogin && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] bg-black/98 backdrop-blur-xl flex items-center justify-center p-8"
          >
            <div className="w-full max-w-sm">
              <button onClick={() => setShowLogin(false)} className="flex items-center gap-2 text-zinc-600 hover:text-white mb-12 transition-colors text-[10px] uppercase tracking-widest font-bold">
                <ArrowLeft size={14} /> Back
              </button>
              <h2 className="text-4xl font-bold mb-10 tracking-tighter text-white">Admin Access</h2>
              <form onSubmit={handleLogin} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Username</label>
                  <input 
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-zinc-800 py-3 focus:border-white outline-none transition-colors text-white"
                    value={loginForm.username}
                    onChange={e => setLoginForm({...loginForm, username: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Password</label>
                  <input 
                    type="password"
                    required
                    className="w-full bg-transparent border-b border-zinc-800 py-3 focus:border-white outline-none transition-colors text-white"
                    value={loginForm.password}
                    onChange={e => setLoginForm({...loginForm, password: e.target.value})}
                  />
                </div>
                <button type="submit" className="w-full bg-white text-black font-bold py-4 hover:bg-accent transition-all uppercase text-[10px] tracking-[0.3em]">
                  Authenticate
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
