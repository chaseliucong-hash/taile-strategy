import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Rocket } from 'lucide-react';
import { STRATEGIC_MANIFESTO } from '../constants';
import { useLanguage } from '../i18n';

const stageColors = [
  {
    bg: 'from-gray-500/20 to-gray-600/20',
    border: 'border-gray-400/50',
    text: 'text-gray-300',
    badge: 'bg-gray-500/30 text-gray-300',
    shadow: 'shadow-gray-500/20'
  },
  {
    bg: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-400/50',
    text: 'text-blue-300',
    badge: 'bg-blue-500/30 text-blue-300',
    shadow: 'shadow-blue-500/20'
  },
  {
    bg: 'from-purple-500/30 via-pink-500/30 to-amber-500/20',
    border: 'border-purple-400/60',
    text: 'text-purple-300',
    badge: 'bg-gradient-to-r from-purple-500/40 to-pink-500/40 text-purple-200',
    shadow: 'shadow-purple-500/30'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export default function StrategicManifesto() {
  const [activeStage, setActiveStage] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const manifestoData = language === 'zh' ? STRATEGIC_MANIFESTO : {
    slogan: 'Empowering Creativity',
    mission: {
      title: 'Mission',
      main: 'Committed to becoming the world\'s leading heat transfer solution provider',
      sub: 'Driving the development of personalized customization industry with innovative technology'
    },
    vision: {
      title: 'Vision',
      main: 'Make creativity accessible, give unique value to every product',
      sub: 'Enabling entrepreneurs worldwide to start their customization business easily'
    },
    strategicStages: [
      { period: 'Past', title: 'Equipment Leader', stage: 'Phase 1: Scale' },
      { period: 'Present', title: 'Solution Provider', stage: 'Phase 2: Upgrade' },
      { period: 'Future', title: 'Ecosystem Platform', stage: 'Phase 3: Ecosystem' }
    ],
    ultimateVision: 'Build the world\'s largest customization entrepreneurship ecosystem platform'
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-16">
      <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">

        
        <motion.div 
          className="mb-8"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-teal-400 bg-clip-text text-transparent">
              {language === 'zh' ? '泰乐机械' : 'TAILE MACHINERY'}
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gradient">{language === 'zh' ? '从设备制造商到' : 'From Equipment Maker to'}</span>
            <motion.span 
              className="relative inline-block mx-1"
              animate={{ 
                scale: [1, 1.02, 1],
                opacity: [0.9, 1, 0.9]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
            >
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-teal-400 bg-clip-text text-transparent">
                {language === 'zh' ? '全球' : 'Global'}
              </span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-primary-400 via-accent-400 to-teal-400 bg-clip-text text-transparent blur-sm opacity-50"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.span>
            <span className="text-gradient">{language === 'zh' ? '定制创业生态平台' : 'Customization Ecosystem'}</span>
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className="flex items-center justify-center gap-4 mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-500"></div>
          <span className="text-2xl md:text-3xl font-bold text-accent-400">{manifestoData.slogan}</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-500"></div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="glass-effect rounded-2xl p-8 text-left"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold">{manifestoData.mission.title}</h3>
            </div>
            <p className="text-white text-lg font-semibold mb-4 leading-relaxed">{manifestoData.mission.main}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{manifestoData.mission.sub}</p>
          </motion.div>
          
          <motion.div 
            className="glass-effect rounded-2xl p-8 text-left"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center">
                <Globe className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold">{manifestoData.vision.title}</h3>
            </div>
            <p className="text-white text-lg font-semibold mb-4 leading-relaxed">{manifestoData.vision.main}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{manifestoData.vision.sub}</p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="glass-effect rounded-2xl p-6"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Rocket className="w-5 h-5 text-teal-400" />
              <span className="text-teal-400 font-medium">
                {language === 'zh' ? '泰乐公司战略三阶段' : 'Taile Strategic Phases'}
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {manifestoData.strategicStages.map((item, index) => {
                const colors = stageColors[index];
                const isActive = activeStage === index;
                return (
                  <motion.div
                    key={index}
                    className={`relative cursor-pointer rounded-xl p-6 transition-all duration-500 ${
                      isActive
                        ? `bg-gradient-to-br ${colors.bg} border-2 ${colors.border} scale-105 shadow-lg ${colors.shadow}`
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                    onClick={() => setActiveStage(index)}
                    whileHover={{ scale: isActive ? 1.05 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isActive && (
                      <motion.div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colors.bg}`}
                        layoutId="activeGlow"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className="relative z-10">
                      <div className={`text-sm font-medium mb-2 ${
                        isActive ? colors.text : 'text-gray-400'
                      }`}>
                        {item.period}
                      </div>
                      <h4 className={`text-lg font-bold mb-2 ${
                        isActive ? 'text-white' : 'text-gray-200'
                      }`}>
                        {item.title}
                      </h4>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        isActive ? colors.badge : 'bg-white/10 text-gray-400'
                      }`}>
                        {item.stage}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-r from-primary-600/30 via-accent-600/30 to-teal-600/30 rounded-2xl p-8 border border-white/10"
            variants={itemVariants}
          >
            <p className="text-2xl md:text-3xl font-bold text-center">
              <span className="text-white">{language === 'zh' ? '终极愿景：' : 'Ultimate Vision: '}</span>
              <span className="text-gradient">{manifestoData.ultimateVision}</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
