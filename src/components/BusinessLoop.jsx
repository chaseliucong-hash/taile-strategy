import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, Target, Truck, RefreshCw, Wrench, ArrowUp, 
  Network, Database, RotateCcw 
} from 'lucide-react';
import { useLanguage } from '../i18n';

const iconMap = {
  Lightbulb,
  Target,
  Truck,
  RefreshCw,
  Wrench,
  ArrowUp,
  Network,
  Database,
  RotateCcw
};

const loopNodesZh = [
  {
    id: 'acquisition',
    title: '场景获客',
    description: '通过场景化方案精准触达目标客户，构建多元化获客渠道',
    icon: 'Lightbulb',
    color: 'from-primary-500 to-blue-500'
  },
  {
    id: 'conversion',
    title: '方案转化',
    description: '输出标准化创业方案包，实现从线索到成交的高效转化',
    icon: 'Target',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'delivery',
    title: '交付履约',
    description: '提供设备+耗材一站式交付，确保客户顺利启动运营',
    icon: 'Truck',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    id: 'repurchase',
    title: '持续复购',
    description: '高频刚需耗材驱动持续复购，构建稳定现金流',
    icon: 'RefreshCw',
    color: 'from-teal-500 to-green-500'
  },
  {
    id: 'empower',
    title: '工具赋能',
    description: 'AI设计工具+智能管理系统，提升客户运营效率',
    icon: 'Wrench',
    color: 'from-green-500 to-yellow-500'
  },
  {
    id: 'upgrade',
    title: '价值升级',
    description: '引导客户从单机到整店方案升级，提升客户LTV',
    icon: 'ArrowUp',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    id: 'platform',
    title: '平台收入',
    description: 'SaaS订阅+增值服务，构建多元化收入来源',
    icon: 'Network',
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 'data',
    title: '数据沉淀',
    description: '积累用户行为数据，驱动精准运营与产品迭代',
    icon: 'Database',
    color: 'from-orange-500 to-pink-500'
  },
  {
    id: 're-acquisition',
    title: '再获客',
    description: '基于数据洞察拓展新场景，实现客户裂变增长',
    icon: 'RotateCcw',
    color: 'from-pink-500 to-primary-500'
  }
];

const loopNodesEn = [
  {
    id: 'acquisition',
    title: 'Acquisition',
    description: 'Reach target customers through scenario-based solutions, build multi-channel acquisition',
    icon: 'Lightbulb',
    color: 'from-primary-500 to-blue-500'
  },
  {
    id: 'conversion',
    title: 'Conversion',
    description: 'Deliver standardized startup packages, achieve efficient conversion from lead to deal',
    icon: 'Target',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'delivery',
    title: 'Delivery',
    description: 'One-stop equipment and consumables delivery, ensure smooth startup operation',
    icon: 'Truck',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    id: 'repurchase',
    title: 'Repurchase',
    description: 'High-frequency consumables drive recurring revenue, build stable cash flow',
    icon: 'RefreshCw',
    color: 'from-teal-500 to-green-500'
  },
  {
    id: 'empower',
    title: 'Empower',
    description: 'AI design tools + smart management system, improve operational efficiency',
    icon: 'Wrench',
    color: 'from-green-500 to-yellow-500'
  },
  {
    id: 'upgrade',
    title: 'Upgrade',
    description: 'Guide customers from single device to complete store solutions, increase LTV',
    icon: 'ArrowUp',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    id: 'platform',
    title: 'Platform',
    description: 'SaaS subscriptions + value-added services, build diversified revenue',
    icon: 'Network',
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 'data',
    title: 'Data',
    description: 'Accumulate user behavior data, drive precise operations and product iteration',
    icon: 'Database',
    color: 'from-orange-500 to-pink-500'
  },
  {
    id: 're-acquisition',
    title: 'Re-acquisition',
    description: 'Expand new scenarios based on data insights, achieve customer fission growth',
    icon: 'RotateCcw',
    color: 'from-pink-500 to-purple-500'
  }
];

export default function BusinessLoop() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const loopNodes = language === 'zh' ? loopNodesZh : loopNodesEn;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % loopNodes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [loopNodes.length]);

  const nodeSize = 80;
  const radius = 220;
  const centerX = 300;
  const centerY = 300;

  const getNodePosition = (index, total) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y };
  };

  const isActive = (index) => activeIndex === index;
  const isHovered = (index) => hoveredIndex === index;

  return (
    <section className="relative px-4 py-16" id="loop">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-4">
            {language === 'zh' ? '业务闭环' : 'Business Loop'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'zh' ? '动态销售闭环' : 'Dynamic Sales Loop'}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {language === 'zh' ? '从获客到平台化的完整盈利闭环，持续运转的赚钱系统' : 'Complete profit loop from acquisition to platformization, continuously operating money-making system'}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="relative w-[600px] h-[600px] flex-shrink-0">
            <svg className="w-full h-full" viewBox="0 0 600 600">
              <defs>
                <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
                  <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
                  <stop offset="100%" stopColor="rgba(139, 92, 246, 0.3)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <motion.circle
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke="url(#orbitGradient)"
                strokeWidth="3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              
              <motion.circle
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke="rgba(99, 102, 241, 0.1)"
                strokeWidth="60"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ strokeDasharray: `${radius * Math.PI * 2}` }}
              />
            </svg>

            {loopNodes.map((node, index) => {
              const Icon = iconMap[node.icon];
              const pos = getNodePosition(index, loopNodes.length);
              const active = isActive(index);
              const hovered = isHovered(index);
              const currentZIndex = active || hovered ? 10 : 1;

              return (
                <div
                  key={node.id}
                  className="absolute pointer-events-auto cursor-pointer"
                  style={{
                    left: `${(pos.x / 600) * 100}%`,
                    top: `${(pos.y / 600) * 100}%`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: currentZIndex
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    className="flex flex-col items-center"
                    animate={{
                      scale: active || hovered ? 1.3 : 1
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${node.color} opacity-40 blur-xl`}
                      style={{ zIndex: -1 }}
                      animate={{
                        scale: active || hovered ? [1, 2.5, 1] : [1, 1.5, 1],
                        opacity: active || hovered ? [0.4, 0.2, 0.4] : [0.2, 0.1, 0.2]
                      }}
                      transition={{
                        duration: active || hovered ? 2 : 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <motion.div
                      className={`relative w-20 h-20 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center shadow-lg`}
                      animate={{
                        boxShadow: active || hovered 
                          ? `0 0 30px rgba(99, 102, 241, 0.6), 0 0 60px rgba(99, 102, 241, 0.3)` 
                          : `0 4px 15px rgba(0, 0, 0, 0.3)`
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <motion.div
                      className="mt-2 text-center whitespace-nowrap"
                      style={{ zIndex: 100 }}
                      animate={{
                        opacity: active || hovered ? 1 : 0.6,
                        y: active || hovered ? 0 : 5
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className={`text-base font-medium ${active || hovered ? 'text-white' : 'text-gray-400'}`}>
                        {node.title}
                      </span>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: 'center' }}
              >
                <svg className="w-24 h-24" viewBox="0 0 64 64">
                  <defs>
                    <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <circle cx="32" cy="32" r="28" fill="none" stroke="url(#centerGradient)" strokeWidth="2" opacity="0.3" />
                  <circle cx="32" cy="32" r="24" fill="none" stroke="url(#centerGradient)" strokeWidth="1" opacity="0.2" />
                  <path
                    d="M32 16 L32 28 L44 28"
                    stroke="url(#centerGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </motion.div>
              <div className="absolute text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {language === 'zh' ? '商业闭环' : 'Business Loop'}
                </div>
                <div className="text-sm text-gray-500 mt-2">{language === 'zh' ? '无限循环 · 持续增长' : 'Infinite Loop · Continuous Growth'}</div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full lg:max-w-md">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="glass-effect rounded-2xl p-8 border border-primary-500/30 bg-gradient-to-br from-primary-500/10 to-purple-500/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${loopNodes[activeIndex].color} flex items-center justify-center`}>
                  {(() => {
                    const Icon = iconMap[loopNodes[activeIndex].icon];
                    return <Icon className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <div>
                  <div className="text-sm text-primary-400 font-medium">{language === 'zh' ? '当前阶段' : 'Current Stage'}</div>
                  <h3 className="text-xl font-bold text-white">{loopNodes[activeIndex].title}</h3>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {loopNodes[activeIndex].description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-green-400"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span className="text-sm text-gray-400">{language === 'zh' ? '持续增长' : 'Continuous Growth'}</span>
                </div>
                <span className="text-sm text-gray-500">
                  {activeIndex + 1} / {loopNodes.length}
                </span>
              </div>
            </motion.div>

            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {loopNodes.map((node, index) => (
                <button
                  key={node.id}
                  onClick={() => setActiveIndex(index)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive(index)
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                      : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {node.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}