import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Factory, Zap, ArrowRight, Settings, Target, TrendingUp, Layers, Rocket } from 'lucide-react';
import { STRATEGIC_ENGINE } from '../constants';
import { useLanguage } from '../i18n';

export default function StrategicEngine() {
  const [activeEngine, setActiveEngine] = useState(null);
  const { language } = useLanguage();

  const leftEngine = language === 'zh' ? {
    title: '技术引擎',
    subtitle: 'Technology Engine',
    icon: Cpu,
    color: 'blue',
    description: '自研核心技术，构建竞争壁垒',
    items: [
      { name: '自研电控主板', desc: '设备大脑，精准控制' },
      { name: '发热模块研发', desc: '核心技术，稳定可靠' },
      { name: '结构一体化设计', desc: '工业美学，品质保障' },
      { name: '智能控制系统', desc: '一键操作，傻瓜式体验' }
    ]
  } : {
    title: 'Technology Engine',
    subtitle: '技术引擎',
    icon: Cpu,
    color: 'blue',
    description: 'Self-developed core technology, building competitive barriers',
    items: [
      { name: 'Self-developed PCB', desc: 'Device brain, precise control' },
      { name: 'Heating Module R&D', desc: 'Core technology, stable and reliable' },
      { name: 'Integrated Structure Design', desc: 'Industrial aesthetics, quality assurance' },
      { name: 'Smart Control System', desc: 'One-click operation, user-friendly' }
    ]
  };

  const rightEngine = language === 'zh' ? {
    title: '商业引擎',
    subtitle: 'Business Engine',
    icon: TrendingUp,
    color: 'purple',
    description: '全链路商业闭环，持续变现',
    items: [
      { name: '整机销售', desc: '流量入口，获客底盘' },
      { name: '耗材复购', desc: '利润引擎，持续变现' },
      { name: '场景方案', desc: '差异化竞争，高溢价' },
      { name: '生态服务', desc: '客户粘性，长期价值' }
    ]
  } : {
    title: 'Business Engine',
    subtitle: '商业引擎',
    icon: TrendingUp,
    color: 'purple',
    description: 'Full-link business closed loop, continuous monetization',
    items: [
      { name: 'Equipment Sales', desc: 'Traffic entry, customer acquisition' },
      { name: 'Consumables Repurchase', desc: 'Profit engine, continuous revenue' },
      { name: 'Scenario Solutions', desc: 'Differentiated competition, high premium' },
      { name: 'Ecosystem Services', desc: 'Customer loyalty, long-term value' }
    ]
  };

  return (
    <section className="px-4 py-16 overflow-hidden" id="engine">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            {language === 'zh' ? '战略引擎' : 'Strategic Engine'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4">
            {language === 'zh' ? '双引擎联动驱动' : 'Dual Engine Drive'}
          </h2>
          <p className="text-gray-400 text-lg">
            {language === 'zh' ? '技术引擎 × 商业引擎 = 核心竞争力飞轮' : 'Technology Engine × Business Engine = Core Competitiveness Flywheel'}
          </p>
        </motion.div>

        <div className="relative">
          {/* 背景速度线 */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
                style={{
                  top: `${15 + i * 10}%`,
                  left: '-100%',
                  right: '-100%',
                }}
                animate={{
                  x: ['-100%', '200%'],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: 'linear'
                }}
              />
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 relative z-10">
            {/* 左侧技术引擎 */}
            <motion.div
              className={`relative w-full lg:w-[42%] glass-effect rounded-2xl p-6 border transition-all duration-300 ${
                activeEngine === 'left' 
                  ? 'border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.4),inset_0_0_30px_rgba(59,130,246,0.1)]' 
                  : 'border-blue-500/30'
              }`}
              onMouseEnter={() => setActiveEngine('left')}
              onMouseLeave={() => setActiveEngine(null)}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* 引擎激活时的脉冲效果 */}
              {activeEngine === 'left' && (
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-blue-400"
                  animate={{ scale: [1, 1.02, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className={`w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center`}
                  animate={activeEngine === 'left' ? { 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  } : {}}
                  transition={{ duration: 0.5, repeat: activeEngine === 'left' ? Infinity : 0 }}
                >
                  <Cpu className="w-6 h-6 text-blue-400" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-blue-400">{leftEngine.title}</h3>
                  <p className="text-gray-500 text-sm">{leftEngine.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">{leftEngine.description}</p>
              
              <div className="grid grid-cols-2 gap-3">
                {leftEngine.items.map((item, i) => (
                  <motion.div
                    key={i}
                    className={`p-3 rounded-xl bg-slate-800/50 border transition-all duration-200 ${
                      activeEngine === 'left' 
                        ? 'border-blue-500/60 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.2)]' 
                        : 'border-slate-700/30'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 0 30px rgba(59,130,246,0.3)',
                      borderColor: 'rgba(59,130,246,0.6)'
                    }}
                  >
                    <div className="text-white font-medium text-sm mb-1">{item.name}</div>
                    <div className="text-gray-500 text-xs">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* 连接点 */}
              <motion.div 
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block"
                animate={activeEngine === 'left' ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                transition={{ duration: 0.5, repeat: activeEngine === 'left' ? Infinity : 0 }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-blue-400"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* 中心联动核心 */}
            <div className="relative flex flex-col items-center justify-center py-8 lg:py-0 lg:px-4">
              <motion.div
                className="relative w-36 h-36 lg:w-44 lg:h-44"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                {/* 外层旋转环 */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
                {/* 中层反向旋转环 */}
                <motion.div
                  className="absolute inset-3 rounded-full border-2 border-dashed border-purple-500/40"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                />
                {/* 内层旋转环 */}
                <motion.div
                  className="absolute inset-6 rounded-full border border-cyan-500/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* 中心核心 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-cyan-500/40 border border-white/30 flex items-center justify-center backdrop-blur-sm"
                    animate={{ 
                      boxShadow: [
                        '0 0 30px rgba(59,130,246,0.4), 0 0 60px rgba(147,51,234,0.3)',
                        '0 0 50px rgba(59,130,246,0.6), 0 0 100px rgba(147,51,234,0.5)',
                        '0 0 30px rgba(59,130,246,0.4), 0 0 60px rgba(147,51,234,0.3)'
                      ],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    >
                      <Zap className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* 四个方向的能量点 */}
                {[
                  { pos: 'top', color: 'bg-blue-400', shadow: 'shadow-blue-400/50' },
                  { pos: 'bottom', color: 'bg-purple-400', shadow: 'shadow-purple-400/50' },
                  { pos: 'left', color: 'bg-cyan-400', shadow: 'shadow-cyan-400/50' },
                  { pos: 'right', color: 'bg-pink-400', shadow: 'shadow-pink-400/50' }
                ].map((dot, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${dot.color} rounded-full shadow-lg ${dot.shadow}`}
                    style={{
                      top: dot.pos === 'top' ? '-4px' : dot.pos === 'bottom' ? undefined : '50%',
                      bottom: dot.pos === 'bottom' ? '-4px' : undefined,
                      left: dot.pos === 'left' ? '-4px' : dot.pos === 'right' ? undefined : '50%',
                      right: dot.pos === 'right' ? '-4px' : undefined,
                      transform: dot.pos === 'top' || dot.pos === 'bottom' ? 'translateX(-50%)' : 'translateY(-50%)',
                      width: '8px',
                      height: '8px'
                    }}
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                      boxShadow: [
                        '0 0 10px currentColor',
                        '0 0 20px currentColor',
                        '0 0 10px currentColor'
                      ]
                    }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}

                {/* 速度粒子 */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                    }}
                    animate={{
                      x: [0, Math.cos(i * 60 * Math.PI / 180) * 80],
                      y: [0, Math.sin(i * 60 * Math.PI / 180) * 80],
                      opacity: [1, 0],
                      scale: [1, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.25,
                      ease: 'easeOut'
                    }}
                  />
                ))}
              </motion.div>
              
              <motion.div 
              className="mt-6 text-center"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-white font-bold text-base flex items-center gap-2">
                <Rocket className="w-4 h-4 text-yellow-400" />
                {language === 'zh' ? '双引擎联动' : 'Dual Engine Drive'}
                <Rocket className="w-4 h-4 text-yellow-400 rotate-180" />
              </div>
              <div className="text-gray-500 text-sm">{language === 'zh' ? '相互驱动 · 协同增长' : 'Mutual Drive · Synergistic Growth'}</div>
            </motion.div>
            </div>

            {/* 右侧商业引擎 */}
            <motion.div
              className={`relative w-full lg:w-[42%] glass-effect rounded-2xl p-6 border transition-all duration-300 ${
                activeEngine === 'right' 
                  ? 'border-purple-500 shadow-[0_0_60px_rgba(147,51,234,0.4),inset_0_0_30px_rgba(147,51,234,0.1)]' 
                  : 'border-purple-500/30'
              }`}
              onMouseEnter={() => setActiveEngine('right')}
              onMouseLeave={() => setActiveEngine(null)}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* 引擎激活时的脉冲效果 */}
              {activeEngine === 'right' && (
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-purple-400"
                  animate={{ scale: [1, 1.02, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className={`w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center`}
                  animate={activeEngine === 'right' ? { 
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 5, 0]
                  } : {}}
                  transition={{ duration: 0.5, repeat: activeEngine === 'right' ? Infinity : 0 }}
                >
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-purple-400">{rightEngine.title}</h3>
                  <p className="text-gray-500 text-sm">{rightEngine.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">{rightEngine.description}</p>
              
              <div className="grid grid-cols-2 gap-3">
                {rightEngine.items.map((item, i) => (
                  <motion.div
                    key={i}
                    className={`p-3 rounded-xl bg-slate-800/50 border transition-all duration-200 ${
                      activeEngine === 'right' 
                        ? 'border-purple-500/60 bg-purple-500/10 shadow-[0_0_20px_rgba(147,51,234,0.2)]' 
                        : 'border-slate-700/30'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 0 30px rgba(147,51,234,0.3)',
                      borderColor: 'rgba(147,51,234,0.6)'
                    }}
                  >
                    <div className="text-white font-medium text-sm mb-1">{item.name}</div>
                    <div className="text-gray-500 text-xs">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* 连接点 */}
              <motion.div 
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block"
                animate={activeEngine === 'right' ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                transition={{ duration: 0.5, repeat: activeEngine === 'right' ? Infinity : 0 }}
              >
                <div className="w-8 h-8 rounded-full bg-purple-500/30 border-2 border-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.5)]">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-purple-400"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* 底部联动逻辑 */}
          <motion.div
            className="mt-12 grid md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {(language === 'zh' ? [
              { icon: Target, title: '技术驱动商业', desc: '自研技术降低成本，提升产品竞争力，驱动商业变现', color: 'blue', gradient: 'from-blue-500 to-cyan-500' },
              { icon: Settings, title: '商业反哺技术', desc: '商业利润投入研发，持续迭代升级，巩固技术壁垒', color: 'purple', gradient: 'from-purple-500 to-pink-500' },
              { icon: Layers, title: '飞轮效应', desc: '技术与商业相互促进，形成正向循环，持续增长', color: 'teal', gradient: 'from-teal-500 to-green-500' }
            ] : [
              { icon: Target, title: 'Tech Drives Business', desc: 'Self-developed tech reduces costs, enhances competitiveness, drives monetization', color: 'blue', gradient: 'from-blue-500 to-cyan-500' },
              { icon: Settings, title: 'Business Feeds Tech', desc: 'Business profits fund R&D, continuous iteration, strengthen tech barriers', color: 'purple', gradient: 'from-purple-500 to-pink-500' },
              { icon: Layers, title: 'Flywheel Effect', desc: 'Tech and business mutually promote, form positive cycle, sustainable growth', color: 'teal', gradient: 'from-teal-500 to-green-500' }
            ]).map((item, i) => (
              <motion.div
                key={i}
                className="glass-effect rounded-xl p-5 border border-slate-700/50 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                {/* 悬停时的光效 */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className={`w-10 h-10 rounded-lg bg-${item.color}-500/20 flex items-center justify-center mb-3 relative z-10`}>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                  </motion.div>
                </div>
                <h4 className="text-white font-semibold mb-2 relative z-10">{item.title}</h4>
                <p className="text-gray-400 text-sm relative z-10">{item.desc}</p>
                
                {/* 角落装饰 */}
                <motion.div
                  className={`absolute -right-8 -top-8 w-16 h-16 rounded-full bg-${item.color}-500/10 blur-xl group-hover:scale-150 transition-transform duration-500`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* 底部总结 */}
          <motion.div
            className="mt-8 glass-effect rounded-2xl p-6 text-center border border-slate-700/50 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* 背景动态效果 */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <motion.div 
                  className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <Zap className="w-5 h-5 text-yellow-400" />
                </motion.div>
                <motion.div 
                  className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                </motion.div>
              </div>
              <p className="text-lg font-semibold text-white">
                {language === 'zh' ? '技术引擎 × 商业引擎 = 核心竞争力飞轮' : 'Tech Engine × Business Engine = Core Competitiveness Flywheel'}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {language === 'zh' ? '双引擎相互驱动、协同增长，构建不可复制的竞争壁垒' : 'Dual engines drive each other, grow synergistically, building irreplicable competitive barriers'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
