import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Zap, Brain, Network } from 'lucide-react';
import { useLanguage } from '../i18n';

const moatsDataZh = [
  {
    id: 'manufacturing',
    icon: Factory,
    title: '制造壁垒',
    tag: '硬核实力',
    percentage: '85%',
    percentageLabel: '自研率',
    coreText: '85%自研·全链路可控',
    subText: '柔性定制·成本质量双优',
    description: '自主研发运动控制卡、驱动板、电机系统等核心硬件，自建钣金、注塑、喷漆生产线，实现核心部件自主生产，有效控制成本，确保产品品质一致性。',
    highlights: ['运动控制卡', '驱动板', '电机系统', '钣金加工'],
    gradient: 'from-blue-500/20 via-blue-600/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    iconBg: 'bg-blue-500/30',
    tagBg: 'bg-blue-500/20',
    tagText: 'text-blue-400'
  },
  {
    id: 'business',
    icon: Zap,
    title: '模式壁垒',
    tag: '差异化竞争',
    percentage: '3x',
    percentageLabel: '溢价率',
    coreText: '场景化整店方案',
    subText: '高溢价·强粘性',
    description: '以细分场景创业包打造差异化优势，输出标准化轻量化创业方案，从卖机器升级为输出整套盈利方案，摆脱低价内卷，提升单笔成交客单价与客户初始粘性。',
    highlights: ['创业包', '整店输出', '盈利方案', '高溢价'],
    gradient: 'from-amber-500/20 via-orange-500/20 to-yellow-500/20',
    borderColor: 'border-amber-500/30',
    iconBg: 'bg-amber-500/30',
    tagBg: 'bg-amber-500/20',
    tagText: 'text-amber-400'
  },
  {
    id: 'digital',
    icon: Brain,
    title: '数字壁垒',
    tag: '智能驱动',
    percentage: 'AI',
    percentageLabel: '中台能力',
    coreText: 'AI中台+参数标准化',
    subText: '数据运营·锁定复购',
    description: '自研智能工具、数据服务深度绑定客户，打通IoT+MES+WMS全链路数据，实现智能排产、耗材预警，构建独家数字化生态壁垒，实现中台能力商业化。',
    highlights: ['AI中台', '参数标准', '数据运营', '智能预警'],
    gradient: 'from-purple-500/20 via-violet-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
    iconBg: 'bg-purple-500/30',
    tagBg: 'bg-purple-500/20',
    tagText: 'text-purple-400'
  },
  {
    id: 'ecosystem',
    icon: Network,
    title: '生态壁垒',
    tag: '全局布局',
    percentage: '4层',
    percentageLabel: '渠道覆盖',
    coreText: '大客户+小微+全渠道+加盟',
    subText: '多层级闭环生态',
    description: '输出品牌、供应链、数字化中台、耗材体系，实现全国化、全球化生态裂变扩张，打造平台分销网络，构建从获客到生态变现的完整闭环。',
    highlights: ['KA大客户', '小微创业', '全渠道', '加盟扩张'],
    gradient: 'from-teal-500/20 via-emerald-500/20 to-green-500/20',
    borderColor: 'border-teal-500/30',
    iconBg: 'bg-teal-500/30',
    tagBg: 'bg-teal-500/20',
    tagText: 'text-teal-400'
  }
];

const moatsDataEn = [
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing',
    tag: 'Core Strength',
    percentage: '85%',
    percentageLabel: 'Self-developed',
    coreText: '85% In-house Development',
    subText: 'Flexible & Cost-effective',
    description: 'Self-developed core hardware including motion control cards, driver boards, and motor systems. In-house sheet metal, injection molding, and painting production lines ensure cost control and quality consistency.',
    highlights: ['Motion Control', 'Driver Board', 'Motor System', 'Sheet Metal'],
    gradient: 'from-blue-500/20 via-blue-600/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    iconBg: 'bg-blue-500/30',
    tagBg: 'bg-blue-500/20',
    tagText: 'text-blue-400'
  },
  {
    id: 'business',
    icon: Zap,
    title: 'Business Model',
    tag: 'Differentiation',
    percentage: '3x',
    percentageLabel: 'Premium',
    coreText: 'Scenario-based Solutions',
    subText: 'High Margin, Strong Loyalty',
    description: 'Scenario-based startup packages create differentiated advantages. Standardized lightweight startup solutions transform from equipment sales to complete profit model delivery, avoiding price wars and increasing customer lifetime value.',
    highlights: ['Startup Packs', 'Turnkey', 'Profit Model', 'Premium'],
    gradient: 'from-amber-500/20 via-orange-500/20 to-yellow-500/20',
    borderColor: 'border-amber-500/30',
    iconBg: 'bg-amber-500/30',
    tagBg: 'bg-amber-500/20',
    tagText: 'text-amber-400'
  },
  {
    id: 'digital',
    icon: Brain,
    title: 'Digital',
    tag: 'AI Powered',
    percentage: 'AI',
    percentageLabel: 'Platform',
    coreText: 'AI Platform + Standardization',
    subText: 'Data-driven Operations',
    description: 'Self-developed intelligent tools and data services deeply bind customers. IoT+MES+WMS integration enables smart production scheduling and consumables warning, building exclusive digital ecosystem barriers.',
    highlights: ['AI Platform', 'Standardization', 'Data Ops', 'Smart Alert'],
    gradient: 'from-purple-500/20 via-violet-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
    iconBg: 'bg-purple-500/30',
    tagBg: 'bg-purple-500/20',
    tagText: 'text-purple-400'
  },
  {
    id: 'ecosystem',
    icon: Network,
    title: 'Ecosystem',
    tag: 'Global Reach',
    percentage: '4 Layers',
    percentageLabel: 'Channels',
    coreText: 'Enterprise + SMB + Omnichannel',
    subText: 'Multi-tier Ecosystem',
    description: 'Brand, supply chain, digital platform, and consumables system expansion. National and global ecosystem fission through platform distribution network, building complete closed-loop from acquisition to monetization.',
    highlights: ['Enterprise', 'SMB', 'Omnichannel', 'Franchise'],
    gradient: 'from-teal-500/20 via-emerald-500/20 to-green-500/20',
    borderColor: 'border-teal-500/30',
    iconBg: 'bg-teal-500/30',
    tagBg: 'bg-teal-500/20',
    tagText: 'text-teal-400'
  }
];

export default function FourMoats() {
  const { language } = useLanguage();
  const moatsData = language === 'zh' ? moatsDataZh : moatsDataEn;
  
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const timerRefs = useRef({});

  useEffect(() => {
    if (hoveredIndex !== null) {
      timerRefs.current[hoveredIndex] = setTimeout(() => {
        setExpandedIndex(hoveredIndex);
      }, 500);
    }
    
    return () => {
      Object.values(timerRefs.current).forEach(clearTimeout);
    };
  }, [hoveredIndex]);

  const handleMouseLeave = () => {
    Object.values(timerRefs.current).forEach(clearTimeout);
    setHoveredIndex(null);
    setExpandedIndex(null);
  };

  return (
    <section className="relative px-4 py-16" id="moats">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-500/20 text-primary-400 text-sm font-medium mb-4">
            {language === 'zh' ? '核心壁垒' : 'Core Barriers'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            {language === 'zh' ? '四大核心壁垒' : 'Four Core Barriers'}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {language === 'zh' ? '构建不可复制的竞争护城河，为合作伙伴创造长期价值' : 'Build irreplicable competitive moats, creating long-term value for partners'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moatsData.map((moat, index) => {
            const Icon = moat.icon;
            const isHovered = hoveredIndex === index;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={moat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={handleMouseLeave}
                className="perspective-1000"
              >
                <motion.div
                  className={`relative bg-gradient-to-br ${moat.gradient} rounded-2xl border ${moat.borderColor} overflow-hidden transition-all duration-500`}
                  animate={{
                    scale: isHovered ? 1.02 : 1,
                    y: isHovered ? -5 : 0
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="absolute top-0 right-0 p-3">
                    <div className={`${moat.tagBg} ${moat.tagText} px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm`}>
                      {moat.tag}
                    </div>
                  </div>

                  <div className="relative z-10 p-6">
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-14 h-14 rounded-xl ${moat.iconBg} flex items-center justify-center backdrop-blur-sm`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{moat.title}</h3>
                        <p className={`${moat.tagText} font-medium text-sm`}>{moat.coreText}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <p className="text-gray-400 text-sm">{moat.subText}</p>
                      <div className="text-right">
                        <div className="text-xl font-bold text-white">{moat.percentage}</div>
                        <div className="text-xs text-gray-500">{moat.percentageLabel}</div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-white/10">
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                              {moat.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {moat.highlights.map((highlight, idx) => (
                                <span
                                  key={idx}
                                  className="px-2.5 py-1 rounded-full bg-white/10 text-xs text-gray-300 backdrop-blur-sm"
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.div
                    className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-white/5 blur-3xl"
                    animate={{
                      scale: isHovered ? 1.5 : 1,
                      opacity: isHovered ? 0.5 : 0.2
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            {language === 'zh' ? '四大壁垒相互协同，构建完整的商业护城河体系' : 'Four barriers work synergistically to build a complete business moat system'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}