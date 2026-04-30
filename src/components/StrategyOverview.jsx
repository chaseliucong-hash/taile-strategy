import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Users, Atom, Building2, ShoppingCart, Lightbulb, TrendingUp, Factory, Cloud, Network, Globe, ArrowRight, ChevronDown, Zap, Target, Rocket } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function StrategyOverview() {
  const { language, t } = useLanguage();

  const growthEngines = [
    {
      icon: Crown,
      title: language === 'zh' ? 'KA深度绑定引擎' : 'KA Deep Binding Engine',
      subtitle: language === 'zh' ? '现金流 & 基本盘引擎' : 'Cash Flow & Base Engine',
      description: language === 'zh' ? '绑定头部客户，年度锁单合作，打造稳定利润池与行业标杆' : 'Bind with top customers, annual lock-in cooperation, create stable profit pool and industry benchmarks',
      color: 'from-amber-500 to-orange-500',
      stats: [
        { label: language === 'zh' ? '年度锁单' : 'Annual Lock-in', value: '50+', unit: language === 'zh' ? '大客户' : 'key clients' },
        { label: language === 'zh' ? '合作深度' : 'Cooperation Depth', value: '3年+', unit: language === 'zh' ? '平均' : 'avg' },
        { label: language === 'zh' ? '利润占比' : 'Profit Share', value: '60%', unit: '+' }
      ]
    },
    {
      icon: Users,
      title: language === 'zh' ? '小微创业引擎' : 'Micro-Entrepreneurship Engine',
      subtitle: language === 'zh' ? '规模 & 流量引擎' : 'Scale & Traffic Engine',
      description: language === 'zh' ? '覆盖全球小微创业者与细分场景，快速放量，沉淀海量用户' : 'Cover global micro-entrepreneurs and niche scenarios, rapidly scale up, accumulate massive users',
      color: 'from-emerald-500 to-teal-500',
      stats: [
        { label: language === 'zh' ? '服务用户' : 'Served Users', value: '10万+', unit: '+' },
        { label: language === 'zh' ? '覆盖国家' : 'Countries', value: '80', unit: '+' },
        { label: language === 'zh' ? '场景细分' : 'Scenario Segments', value: '10', unit: language === 'zh' ? '大' : 'major' }
      ]
    },
    {
      icon: Atom,
      title: language === 'zh' ? 'AI中台引擎' : 'AI Middle Platform Engine',
      subtitle: language === 'zh' ? '效率 & 壁垒引擎' : 'Efficiency & Barrier Engine',
      description: language === 'zh' ? '数据驱动全域运营与智能决策，放大增长效率，构建独家壁垒' : 'Data-driven global operations and intelligent decision-making, amplify growth efficiency, build exclusive barriers',
      color: 'from-purple-500 to-pink-500',
      stats: [
        { label: language === 'zh' ? '数据处理' : 'Data Processing', value: '10TB', unit: language === 'zh' ? '/天' : '/day' },
        { label: language === 'zh' ? '智能模型' : 'AI Models', value: '20+', unit: language === 'zh' ? '个' : 'models' },
        { label: language === 'zh' ? '效率提升' : 'Efficiency', value: '30%', unit: '+' }
      ]
    }
  ];

  const coreLogic = {
    title: language === 'zh' ? '核心逻辑' : 'Core Logic',
    subtitle: language === 'zh' ? '以设备获客 · 以耗材盈利 · 以平台放大' : 'Acquire via Equipment · Profit from Consumables · Scale via Platform',
    description: language === 'zh' ? '客户终身价值最大化' : 'Maximize Customer Lifetime Value',
    flywheel: [
      { step: '01', title: language === 'zh' ? '卖设备' : 'Sell Equipment', subtitle: language === 'zh' ? '流量入口' : 'Traffic Entry', desc: language === 'zh' ? '高性能热转印设备，场景化创业方案，解决客户生产需求' : 'High-performance heat transfer equipment, scenario-based entrepreneurship solutions', icon: Rocket, color: 'from-blue-500 to-cyan-500' },
      { step: '02', title: language === 'zh' ? '绑定耗材' : 'Bind Consumables', subtitle: language === 'zh' ? '核心利润' : 'Core Profit', desc: language === 'zh' ? '工艺耗材参数绑定，高频刚需复购，毛利率40%-60%+' : 'Process consumables parameter binding, high-frequency repurchase, 40%-60%+ gross margin', icon: ShoppingCart, color: 'from-green-500 to-emerald-500' },
      { step: '03', title: language === 'zh' ? '提供基材' : 'Provide Substrates', subtitle: language === 'zh' ? '提升客单' : 'Increase Order Value', desc: language === 'zh' ? '全品类基材耗材，一站式采购，提升客单30%-80%' : 'Full-category substrates, one-stop procurement, increase order value by 30%-80%', icon: Building2, color: 'from-amber-500 to-orange-500' },
      { step: '04', title: language === 'zh' ? '提供工具&服务' : 'Provide Tools & Services', subtitle: language === 'zh' ? '增值放大' : 'Value-added', desc: language === 'zh' ? 'AI设计工具+数字化系统，培训/售后/运营赋能，提升效率与粘性' : 'AI design tools + digital systems, training & after-sales empowerment', icon: Zap, color: 'from-purple-500 to-pink-500' },
      { step: '05', title: language === 'zh' ? '升级&扩张' : 'Upgrade & Expand', subtitle: language === 'zh' ? '价值升级' : 'Value Upgrade', desc: language === 'zh' ? '设备升级/多店扩张，加盟合作/场景延伸，客户价值持续提升' : 'Equipment upgrade & expansion, franchise cooperation, continuous value enhancement', icon: TrendingUp, color: 'from-indigo-500 to-violet-500' }
    ]
  };

  const moats = [
    { icon: Factory, title: language === 'zh' ? '技术自研壁垒' : 'Technology R&D Barrier', desc: language === 'zh' ? '核心电控&硬件全自研，掌握发热模块、电控系统、结构机架、执行控制等核心技术' : 'Core electronic control & hardware fully self-developed', highlight: language === 'zh' ? '全自研' : 'Full R&D' },
    { icon: Building2, title: language === 'zh' ? '供应链产能壁垒' : 'Supply Chain Barrier', desc: language === 'zh' ? '全链条供应链&实体产能，自有注塑、钣金、喷涂产能，核心部件自研自产' : 'Full-chain supply chain & manufacturing capacity', highlight: language === 'zh' ? '全链条' : 'Full Chain' },
    { icon: Cloud, title: language === 'zh' ? 'AI数字化中台壁垒' : 'AI Digital Platform Barrier', desc: language === 'zh' ? 'AI数字中台&数据驱动，打通IoT+MES+WMS全链路数据，智能排产、耗材预警' : 'AI digital platform & data-driven operations', highlight: language === 'zh' ? '数据驱动' : 'Data-driven' },
    { icon: Network, title: language === 'zh' ? '场景生态壁垒' : 'Scenario Ecosystem Barrier', desc: language === 'zh' ? '场景化生态解决方案，覆盖十大细分场景，提供设备、耗材、工具、培训一体化方案' : 'Scenario-based ecosystem solutions, covering ten major segments', highlight: language === 'zh' ? '一体化' : 'Integrated' }
  ];

  const businessLoop = [
    { icon: Lightbulb, title: language === 'zh' ? '场景获客' : 'Scenario Acquisition', subtitle: language === 'zh' ? '方案转化' : 'Solution Conversion', desc: language === 'zh' ? '精准触达目标客户' : 'Precise targeting', color: 'yellow' },
    { icon: Target, title: language === 'zh' ? '交付履约' : 'Delivery & Fulfillment', subtitle: language === 'zh' ? '设备+耗材' : 'Equipment + Consumables', desc: language === 'zh' ? '高效交付保障' : 'Efficient delivery', color: 'blue' },
    { icon: ShoppingCart, title: language === 'zh' ? '持续复购' : 'Continuous Repurchase', subtitle: language === 'zh' ? '耗材+基材' : 'Consumables + Substrates', desc: language === 'zh' ? '高频刚需复购' : 'High-frequency repurchase', color: 'green' },
    { icon: TrendingUp, title: language === 'zh' ? '价值升级' : 'Value Upgrade', subtitle: language === 'zh' ? '升级/扩张/加盟' : 'Upgrade/Expand/Franchise', desc: language === 'zh' ? '客户价值持续提升' : 'Continuous value enhancement', color: 'purple' },
    { icon: Globe, title: language === 'zh' ? '平台化' : 'Platformization', subtitle: language === 'zh' ? '中国智造·服务全球' : 'China Smart Manufacturing · Global Service', desc: language === 'zh' ? '全球化运营' : 'Global operations', color: 'accent' }
  ];
  const [activeEngine, setActiveEngine] = useState(null);
  const [activeFlywheel, setActiveFlywheel] = useState(null);
  const [activeMoat, setActiveMoat] = useState(null);
  const [activeLoopStep, setActiveLoopStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLoopStep((prev) => (prev + 1) % businessLoop.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-slate-950 to-slate-950"></div>
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative px-4 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              <span className="text-primary-400 text-sm font-medium">{t.overview.title}</span>
            </motion.div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              <motion.span
                className="bg-gradient-to-r from-primary-400 via-accent-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {t.overview.subtitle}
              </motion.span>
            </h1>
            <motion.p 
              className="text-gray-400 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {t.overview.description}
            </motion.p>
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
              <h2 className="text-xl font-bold text-white">{t.overview.growthEngines}</h2>
              <span className="text-sm text-gray-500">{t.overview.growthEnginesDesc}</span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {growthEngines.map((engine, index) => (
              <motion.div
                key={engine.title}
                className={`relative glass-effect rounded-xl overflow-hidden border transition-all duration-300 ${
                  activeEngine === index ? 'border-primary-500 shadow-lg shadow-primary-500/20' : 'border-slate-700/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setActiveEngine(activeEngine === index ? null : index)}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${engine.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${engine.color} shadow-lg`}>
                      <engine.icon className="w-7 h-7 text-white" />
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeEngine === index ? 'rotate-180' : ''}`} 
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{engine.title}</h3>
                  <p className="text-sm text-primary-400 mb-3">{engine.subtitle}</p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{engine.description}</p>

                  <AnimatePresence>
                    {activeEngine === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-slate-700/50"
                      >
                        <div className="grid grid-cols-3 gap-4">
                          {engine.stats.map((stat, i) => (
                            <motion.div 
                              key={i}
                              className="text-center p-2 rounded-lg bg-slate-800/50"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div className="text-lg font-bold text-white">{stat.value}</div>
                              <div className="text-xs text-gray-500">{stat.unit}</div>
                              <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="relative mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 bg-gradient-to-b from-accent-500 to-purple-500 rounded-full"></div>
              <h2 className="text-xl font-bold text-white">{t.overview.flywheel}</h2>
              <span className="text-sm text-gray-500">{t.overview.flywheelDesc}</span>
            </div>

            <div className="glass-effect rounded-2xl p-8 border border-primary-500/30 relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary-600/10 to-accent-600/10 blur-3xl"></div>
              </div>

              <div className="relative text-center mb-10">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  {coreLogic.title}
                </motion.h3>
                <motion.p 
                  className="text-xl font-semibold text-primary-400 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  {coreLogic.subtitle}
                </motion.p>
                <motion.p 
                  className="text-gray-500 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {coreLogic.description}
                </motion.p>
              </div>

              <div className="relative">
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ height: '300px' }}>
                  <defs>
                    <linearGradient id="flywheelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#EC4899" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M 50 150 Q 50 50 150 50 T 250 150 T 350 150"
                    stroke="url(#flywheelGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="10,5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>

                <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4">
                  {coreLogic.flywheel.map((item, index) => (
                    <motion.div
                      key={item.step}
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                    >
                      <div 
                        className={`glass-effect rounded-xl p-5 h-full border transition-all duration-300 cursor-pointer ${
                          activeFlywheel === index 
                            ? 'border-accent-500 shadow-lg shadow-accent-500/20 scale-[1.02]' 
                            : 'border-slate-700/50 hover:border-accent-500/50'
                        }`}
                        onClick={() => setActiveFlywheel(activeFlywheel === index ? null : index)}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <span className="px-2 py-0.5 rounded-full bg-accent-500/20 text-accent-400 text-xs font-bold">
                              {item.step}
                            </span>
                            <h4 className="font-semibold text-white">{item.title}</h4>
                          </div>
                        </div>
                        <p className="text-xs text-primary-400 mb-2">{item.subtitle}</p>
                        <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                      
                      {index < coreLogic.flywheel.length - 1 && (
                        <motion.div 
                          className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.1 }}
                        >
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                          >
                            <ArrowRight className="w-6 h-6 text-primary-500" />
                          </motion.div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
              <h2 className="text-xl font-bold text-white">{t.overview.moats}</h2>
              <span className="text-sm text-gray-500">{t.overview.moatsDesc}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {moats.map((moat, index) => (
                <motion.div
                  key={moat.title}
                  className={`glass-effect rounded-xl overflow-hidden border transition-all duration-300 ${
                    activeMoat === index ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-slate-700/50'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  onClick={() => setActiveMoat(activeMoat === index ? null : index)}
                >
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                        <moat.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-white">{moat.title}</h4>
                          <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 text-xs font-medium">
                            {moat.highlight}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">{moat.desc}</p>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="h-1 bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
              <h2 className="text-xl font-bold text-white">{t.overview.businessLoop}</h2>
              <span className="text-sm text-gray-500">{t.overview.businessLoopDesc}</span>
            </div>

            <div className="glass-effect rounded-xl p-8 border border-slate-700/50">
              <div className="relative flex flex-wrap items-center justify-center gap-4 md:gap-8">
                {businessLoop.map((step, index) => (
                  <motion.div
                    key={step.title}
                    className="flex flex-col items-center relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className={`relative w-20 h-20 rounded-full flex items-center justify-center mb-3 transition-all duration-500 ${
                        step.color === 'yellow' ? 'bg-yellow-500/20' :
                        step.color === 'blue' ? 'bg-blue-500/20' :
                        step.color === 'green' ? 'bg-green-500/20' :
                        step.color === 'purple' ? 'bg-purple-500/20' : 'bg-accent-500/20'
                      }`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      animate={{
                        scale: activeLoopStep === index ? 1.15 : 1,
                        boxShadow: activeLoopStep === index 
                          ? step.color === 'yellow' ? '0 0 30px rgba(234, 179, 8, 0.5)' :
                            step.color === 'blue' ? '0 0 30px rgba(59, 130, 246, 0.5)' :
                            step.color === 'green' ? '0 0 30px rgba(34, 197, 94, 0.5)' :
                            step.color === 'purple' ? '0 0 30px rgba(168, 85, 247, 0.5)' : '0 0 30px rgba(236, 72, 153, 0.5)'
                          : '0 0 0px rgba(0, 0, 0, 0)'
                      }}
                    >
                      <step.icon className={`w-9 h-9 transition-all duration-300 ${
                        step.color === 'yellow' ? 'text-yellow-400' :
                        step.color === 'blue' ? 'text-blue-400' :
                        step.color === 'green' ? 'text-green-400' :
                        step.color === 'purple' ? 'text-purple-400' : 'text-accent-400'
                      }`} />
                      
                      {activeLoopStep === index && (
                        <motion.div
                          className={`absolute inset-0 rounded-full border-2 ${
                            step.color === 'yellow' ? 'border-yellow-400' :
                            step.color === 'blue' ? 'border-blue-400' :
                            step.color === 'green' ? 'border-green-400' :
                            step.color === 'purple' ? 'border-purple-400' : 'border-accent-400'
                          }`}
                          initial={{ scale: 1, opacity: 1 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                    
                    <div className="text-center">
                      <div className={`font-semibold mb-1 transition-all duration-300 ${
                        activeLoopStep === index ? 'text-white' : 'text-gray-300'
                      }`}>{step.title}</div>
                      <div className="text-xs text-gray-500 mb-1">{step.subtitle}</div>
                      <div className="text-xs text-gray-400">{step.desc}</div>
                    </div>
                    
                    {index < businessLoop.length - 1 && (
                      <motion.div 
                        className="absolute top-10 -right-4 md:-right-6 z-10"
                        animate={{ 
                          x: [0, 5, 0],
                          opacity: activeLoopStep === index ? 1 : 0.4
                        }}
                        transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.2 }}
                      >
                        <ArrowRight className="w-6 h-6 text-primary-400" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
