import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight, Globe } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../i18n';

function NavDropdown({ group, isOpen, onToggle, onItemClick, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={onToggle}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
          isOpen ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
        }`}
      >
        {group.label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 mt-2 min-w-[160px] glass-effect rounded-xl border border-slate-700/50 overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            {group.items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  onItemClick(item.id);
                  onClose();
                }}
                className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all flex items-center justify-between group/item"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navGroups = [
    {
      label: t.nav.strategicPlanning,
      items: [
        { id: 'manifesto', label: t.nav.strategicTop },
        { id: 'engine', label: t.nav.strategicEngine },
        { id: 'moats', label: t.nav.competitiveBarriers },
        { id: 'overview', label: t.nav.strategicOverview }
      ]
    },
    {
      label: t.nav.coreBusiness,
      items: [
        { id: 'core-business', label: t.nav.coreBusinessSection },
        { id: 'scenarios', label: t.nav.verticalScenarios },
        { id: 'matrix', label: t.nav.nineSystems },
        { id: 'loop', label: t.nav.businessLoop }
      ]
    },
    {
      label: t.nav.ecosystem,
      items: [
        { id: 'ecosystem', label: t.nav.heatTransferEcosystem },
        { id: 'competitor', label: t.nav.competitorComparison }
      ]
    }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Logo />

        <div className="hidden lg:flex items-center gap-1">
          {navGroups.map((group) => (
            <NavDropdown
              key={group.label}
              group={group}
              isOpen={openDropdown === group.label}
              onToggle={() => setOpenDropdown(openDropdown === group.label ? null : group.label)}
              onItemClick={scrollToSection}
              onClose={() => setOpenDropdown(null)}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all"
            title={language === 'zh' ? '切换到英文' : 'Switch to Chinese'}
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">{language === 'zh' ? 'EN' : '中文'}</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden glass-effect mt-2 mx-4 rounded-xl p-4 border border-slate-700/50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navGroups.map((group) => (
              <div key={group.label} className="mb-4 last:mb-0">
                <div className="text-xs text-gray-500 font-medium px-4 py-2 uppercase tracking-wider">
                  {group.label}
                </div>
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all mt-4"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'zh' ? 'English / EN' : '中文 / Chinese'}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}