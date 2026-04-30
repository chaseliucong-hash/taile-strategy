import { motion } from 'framer-motion';
import { useLanguage } from '../i18n';

export default function Logo() {
  const { language } = useLanguage();
  
  return (
    <motion.div
      className="flex items-center gap-2"
      whileHover={{ scale: 1.02 }}
    >
      <svg 
        viewBox="0 0 100 40" 
        className="w-10 h-10"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient id="featherGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>
        
        <g fill="none" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M25 35 Q5 35 8 25" />
          <path d="M22 32 Q3 32 8 22" />
          <path d="M19 29 Q2 29 10 18" />
          <path d="M16 26 Q1 26 12 14" />
          <path d="M13 23 Q0 23 14 10" />
          <path d="M10 20 Q-1 20 16 6" />
          <path d="M28 35 Q15 15 30 10" />
        </g>
        
        <text x="38" y="30" fill="url(#logoGradient)" fontSize="24" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="1">
          AILE
        </text>
      </svg>
      <span className="font-bold text-xl bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
        {language === 'zh' ? '泰乐机械' : 'Taile Machinery'}
      </span>
    </motion.div>
  );
}
