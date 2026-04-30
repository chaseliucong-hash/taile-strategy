import { motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  TrendingUp, ShoppingBag, Factory, Heart, Sparkles,
  ArrowUp, Check, X, Zap, Shield, Target, Users, Globe
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n';

export default function MarketAnalysis() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % 6);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isInView]);

  const AnimatedNumber = ({ number, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isInView) {
        let current = 0;
        const duration = 1500;
        const step = number / (duration / 16);
        const timer = setInterval(() => {
          current += step;
          if (current >= number) {
            setCount(number);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 16);
        return () => clearInterval(timer);
      }
    }, [isInView, number]);

    return (
      <span ref={ref}>
        {count}{suffix}
      </span>
    );
  };

  const trendsZh = [
    {
      icon: TrendingUp,
      title: "内需回暖，消费成为经济核心驱动力",
      description: "国内消费市场持续复苏，国家持续出台提振内需、以旧换新等促消费政策，居民消费意愿稳步提升，个性化、体验式消费替代传统刚需消费，成为市场核心增长主力。",
      data: "2025年上半年中国GDP同比增长5.3%，最终消费支出对经济增长贡献率超52%，成为经济增长第一动力（毕马威2025消费零售报告）",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: ShoppingBag,
      title: "标准化商品过剩，个性化定制消费全面爆发",
      description: "Z世代成为消费主力，大众彻底摒弃同质化服饰、礼品、文创商品，追求自我表达、专属纪念、个性化穿搭，小批量、定制化订单爆发式增长，全面替代传统大批量标准化订单。",
      data: "2026年全球定制T恤印刷市场规模预计达65.7亿美元，年复合增长率12.8%；国内服饰定制、文创定制赛道增速连续3年超传统零售3倍。",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Factory,
      title: "电商进入柔性供应链时代，零库存成刚需",
      description: "传统囤货、大批量生产、压货滞销的模式逐步被淘汰，国内电商、跨境电商全面进入「小单快反、按需定制、零库存运营」新阶段，DTF数码热转印是适配柔性供应链的最优落地技术。",
      data: "国内服装跨境电商出口规模持续攀升，柔性定制供应链商家存活率、利润率远超传统囤货商家；2026年上半年小型DTF一体机同比增长超40%。",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "情绪悦己消费崛起，定制溢价空间打开",
      description: "大众消费逻辑从「刚需实用」转向「情绪悦己、纪念留存、社交表达」，情侣定制、校园社团、企业团建、亲子DIY、文创潮玩等细分场景持续爆发，用户愿意为专属个性化服务支付高额溢价。",
      data: "超80%年轻消费者优先选择个性化定制商品，情绪消费、体验消费增速稳居消费赛道TOP3，小众定制场景复购率超45%。",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "AI技术普惠，定制创业门槛彻底清零",
      description: "AIGC智能设计、设备智能算法控制系统全面普及，彻底解决传统定制行业设计难、调色难、操作复杂的痛点，零基础创业者、小微商家可快速上手运营定制生意。",
      data: "AI设计赋能让定制图案产出效率提升90%；2026年上半年短视频平台「DIY定制创业」相关套餐销量爆发，新增小微创业用户占比超65%。",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const trendsEn = [
    {
      icon: TrendingUp,
      title: "Domestic Demand Recovery",
      description: "Consumer market continues to recover, government policies boost consumption. Personalized and experiential consumption replaces traditional essential consumption, becoming the core growth driver.",
      data: "China's GDP grew 5.3% YoY in H1 2025, final consumption expenditure contributed over 52% to economic growth (KPMG 2025 Consumer Retail Report)",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: ShoppingBag,
      title: "Personalization Explosion",
      description: "Gen Z becomes main consumers, rejecting homogeneous products. Small-batch, customized orders grow explosively, replacing traditional mass production orders.",
      data: "Global custom T-shirt printing market expected to reach $6.57B in 2026, CAGR 12.8%; domestic customization growth 3x traditional retail for 3 consecutive years.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Factory,
      title: "Flexible Supply Chain Era",
      description: "Traditional inventory-heavy models are being eliminated. E-commerce fully enters the 'small-batch, on-demand, zero-inventory' new stage. DTF digital heat transfer is the optimal technology for flexible supply chains.",
      data: "Cross-border e-commerce exports continue to rise. Flexible customization merchants' survival and profit rates far exceed traditional inventory merchants. Small DTF machines grew 40%+ YoY in H1 2026.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Emotional Consumption Rise",
      description: "Consumer logic shifts from 'practical needs' to 'emotional satisfaction'. Couple customization, campus clubs, corporate events, parent-child DIY, and creative toys continue to explode. Users willing to pay premium for personalized services.",
      data: "Over 80% of young consumers prefer personalized products. Emotional consumption growth ranks TOP3. Niche customization scenarios have 45%+ repurchase rates.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "AI Technology Democratization",
      description: "AIGC intelligent design and smart control systems are fully普及, completely solving pain points of difficult design and complex operation. Zero-experience entrepreneurs can quickly start customization business.",
      data: "AI design improves pattern output efficiency by 90%. 'DIY customization entrepreneurship' packages exploded on short video platforms. New small business users account for 65%+.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const trends = language === 'zh' ? trendsZh : trendsEn;

  const platformDataZh = [
    {
      platform: "淘宝/天猫",
      share: "45%",
      features: "占据45%专业设备市场份额，工业级发热模块、稳定控制系统搜索量同比增长22%",
      tags: ["数码热转印", "DIY定制工厂", "烫画机直销"],
      icon: ShoppingBag,
      color: "from-blue-500 to-purple-500"
    },
    {
      platform: "抖音/小红书",
      share: "65%+",
      features: "贡献65%以上新增小微创业用户，宝妈创业、后备箱市集、景区文创套餐销量爆发",
      tags: ["创业包", "定制T恤", "DTF黑科技", "文创周边"],
      icon: Zap,
      color: "from-red-500 to-pink-500"
    },
    {
      platform: "拼多多",
      share: "35%+",
      features: "耗材核心阵地，热转印膜、墨水、热熔粉等耗材销量占全网35%以上",
      tags: ["热转印耗材", "PET膜批发", "便宜烫画机"],
      icon: Shield,
      color: "from-amber-500 to-orange-500"
    },
    {
      platform: "京东",
      share: "B端KA核心",
      features: "聚焦B端KA企业采购，司顺、赛维等头部跨境电商企业采购集中",
      tags: ["商用热转印机", "自动抖粉机", "工业印刷"],
      icon: Target,
      color: "from-red-500 to-pink-500"
    }
  ];

  const platformDataEn = [
    {
      platform: "Taobao/Tmall",
      share: "45%",
      features: "Occupies 45% professional equipment market share. Industrial heating modules and stable control systems search volume grew 22% YoY",
      tags: ["Digital Heat Transfer", "DIY Factory", "Heat Press Direct"],
      icon: ShoppingBag,
      color: "from-blue-500 to-purple-500"
    },
    {
      platform: "Douyin/Red",
      share: "65%+",
      features: "Contributes 65%+ new small business users. Mom entrepreneurs, trunk markets, scenic area creative packages exploded",
      tags: ["Startup Pack", "Custom T-shirt", "DTF Tech", "Creative Products"],
      icon: Zap,
      color: "from-red-500 to-pink-500"
    },
    {
      platform: "Pinduoduo",
      share: "35%+",
      features: "Consumables stronghold. Heat transfer film, ink, hot melt powder sales account for 35%+ of total network",
      tags: ["Heat Transfer Consumables", "PET Film Wholesale", "Affordable Heat Press"],
      icon: Shield,
      color: "from-amber-500 to-orange-500"
    },
    {
      platform: "JD.com",
      share: "B2B KA Core",
      features: "Focus on B2B enterprise procurement. Top cross-border e-commerce companies like Si Shun and Sai Wei concentrate purchases",
      tags: ["Commercial Heat Press", "Auto Shaker", "Industrial Printing"],
      icon: Target,
      color: "from-red-500 to-pink-500"
    }
  ];

  const platformData = language === 'zh' ? platformDataZh : platformDataEn;

  const valuesZh = [
    {
      title: "全场景变现工具",
      description: "覆盖服饰定制、文创潮玩、企业礼赠、市集DIY、跨境供货12大核心盈利场景",
      icon: Users
    },
    {
      title: "电商柔性供应链核心",
      description: "适配全域电商小单定制需求，赋能传统实体、电商商家转型升级",
      icon: Globe
    },
    {
      title: "低门槛高回报创业入口",
      description: "设备轻量化、操作智能化、耗材可持续盈利，新手可快速起盘盈利",
      icon: Sparkles
    }
  ];

  const valuesEn = [
    {
      title: "Full-Scene Monetization",
      description: "Covering 12 core profit scenarios: apparel customization, creative toys, corporate gifts, market DIY, cross-border supply",
      icon: Users
    },
    {
      title: "Flexible Supply Chain Core",
      description: "Adapts to all e-commerce small-batch customization needs, empowering traditional retail and e-commerce transformation",
      icon: Globe
    },
    {
      title: "Low Barrier High Return Entry",
      description: "Lightweight equipment, intelligent operation, sustainable consumables profit. Beginners can quickly start and profit",
      icon: Sparkles
    }
  ];

  const values = language === 'zh' ? valuesZh : valuesEn;

  const pastItemsZh = [
    "大批量标准化生产，无个性化空间",
    "库存积压严重，资金占用风险高",
    "行业同质化严重，长期低价内卷、利润微薄",
    "大型设备占地大、操作复杂，仅适配工厂生产",
    "传统工艺环保性差，受限行业政策监管",
    "订单门槛高/制版起订量大/打样成本高，无法承接小单/散单，难快速响应定制需求"
  ];

  const pastItemsEn = [
    "Mass standardized production, no personalization space",
    "Serious inventory backlog, high capital occupation risk",
    "Severe industry homogeneity, long-term price wars, thin profits",
    "Large equipment footprint, complex operation, only suitable for factories",
    "Traditional processes are environmentally unfriendly, restricted by regulations",
    "High order threshold/large minimum order/high sampling cost, cannot accept small/scattered orders"
  ];

  const pastItems = language === 'zh' ? pastItemsZh : pastItemsEn;

  const nowItemsZh = [
    "小单快反、一件起定、完全按需生产",
    "零库存运营，无囤货滞销、资金积压压力",
    "个性化属性强，产品溢价高、利润空间充足",
    "桌面级小型设备，零基础可上手，适配全民轻创业",
    "环保合规工艺，适配国内环保政策要求",
    "特效耗材丰富，覆盖潮流文创、服饰全场景需求"
  ];

  const nowItemsEn = [
    "Small-batch quick response, one-piece minimum, complete on-demand production",
    "Zero-inventory operation, no stock backlog or capital pressure",
    "Strong personalization attributes, high product premium, sufficient profit margin",
    "Desktop-level small equipment, zero-experience friendly, suitable for everyone",
    "Eco-friendly compliant processes, meeting domestic environmental regulations",
    "Rich special effect consumables, covering all trendy creative and apparel scenarios"
  ];

  const nowItems = language === 'zh' ? nowItemsZh : nowItemsEn;

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 text-sm font-medium mb-4">
            {language === 'zh' ? '市场趋势分析' : 'Market Trend Analysis'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {language === 'zh' ? '2026，个性化定制全面进入主流消费时代' : '2026: Personalization Enters Mainstream Consumption Era'}
          </h2>
          <p className="text-xl text-gray-400 mb-3">
            {language === 'zh' ? '消费市场全面重构，热转印赛道站在万亿红利核心位置' : 'Consumer market restructuring, heat transfer track at the core of trillion-dollar opportunity'}
          </p>
          <p className="text-sm text-gray-500">
            {language === 'zh' ? '依托2025-2026年消费零售行业大数据、主流电商实时走势，个性化定制赛道进入确定性增长周期' : 'Based on 2025-2026 consumer retail industry data and mainstream e-commerce trends, personalization track enters a certain growth cycle'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {language === 'zh' ? '五大确定性趋势，见证热转印赛道爆发' : 'Five Certainty Trends, Witness Heat Transfer Track Explosion'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {trends.map((trend, index) => {
              const [isHovered, setIsHovered] = useState(false);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isInView ? 1 : 0, 
                    y: isInView ? (isHovered ? -8 : 0) : 20,
                    scale: isHovered ? 1.08 : 1,
                  }}
                  transition={{ duration: isInView ? 0.3 : 0.5, delay: isInView ? 0 : index * 0.1 }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${isHovered ? 'z-10' : ''}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${trend.color} opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`} />
                  <div className={`absolute inset-0 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
                  
                  <div className="relative p-5 h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 transition-all duration-300 ${isHovered ? 'bg-white/20 scale-110' : ''}`}>
                      <trend.icon className={`w-6 h-6 text-white transition-all duration-300 ${isHovered ? 'scale-110' : ''}`} />
                    </div>
                    
                    <h4 className={`text-white font-semibold mb-3 text-sm leading-tight transition-all duration-300 ${isHovered ? 'text-lg mb-4' : ''}`}>
                      {trend.title}
                    </h4>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ 
                        opacity: isHovered ? 1 : 0, 
                        scale: isHovered ? 1 : 0.95 
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 overflow-hidden"
                    >
                      <motion.p 
                        className="text-white/80 text-sm leading-relaxed mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {trend.description}
                      </motion.p>
                      <motion.div 
                        className="text-xs text-white/70 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: isHovered ? 1 : 0, 
                          scale: isHovered ? 1 : 0.8,
                          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.1)'
                        }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <span className="font-semibold text-white/90">{language === 'zh' ? '数据支撑：' : 'Data: '}</span>
                        <span className="text-white/80">{trend.data}</span>
                      </motion.div>
                    </motion.div>

                    <div className={`flex items-center gap-1 mt-3 text-white/60 text-xs transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                      <Sparkles className="w-3 h-3" />
                      {language === 'zh' ? '悬停查看详情' : 'Hover for details'}
                    </div>
                  </div>

                  {isHovered && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full blur-sm" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {language === 'zh' ? '行业大变局：告别低价内卷，拥抱高利润定制时代' : 'Industry Transformation: Say Goodbye to Price Wars, Embrace High-Profit Customization Era'}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                x: isInView ? 0 : -20,
                boxShadow: isInView ? [
                  '0 0 20px rgba(239, 68, 68, 0.1)',
                  '0 0 40px rgba(239, 68, 68, 0.25)',
                  '0 0 20px rgba(239, 68, 68, 0.1)'
                ] : 'none',
                borderColor: isInView ? [
                  'rgba(239, 68, 68, 0.2)',
                  'rgba(239, 68, 68, 0.5)',
                  'rgba(239, 68, 68, 0.2)'
                ] : 'rgba(239, 68, 68, 0.2)'
              }}
              transition={{ 
                opacity: { duration: 0.6 },
                x: { duration: 0.6 },
                boxShadow: { duration: 2, repeat: Infinity },
                borderColor: { duration: 2, repeat: Infinity }
              }}
              className="glass-effect rounded-xl p-6 bg-gradient-to-br from-red-900/20 to-slate-800/50 border relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{language === 'zh' ? '过去·传统印刷模式' : 'Past · Traditional Printing'}</h4>
                  <p className="text-gray-500 text-xs">{language === 'zh' ? '淘汰模式' : 'Elimination Mode'}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {pastItems.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: isInView ? 1 : 0, 
                      x: isInView ? 0 : -10,
                      backgroundColor: isInView ? (activeIndex === i ? 'rgba(239, 68, 68, 0.12)' : 'transparent') : 'transparent'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${activeIndex === i ? 'bg-red-500/40' : 'bg-red-500/20'}`}
                      animate={activeIndex === i ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <X className={`w-3 h-3 ${activeIndex === i ? 'text-red-300' : 'text-red-400'}`} />
                    </motion.div>
                    <motion.span 
                      className={`text-sm ${activeIndex === i ? 'text-red-300 font-medium' : 'text-gray-400'}`}
                      animate={activeIndex === i ? { scale: [1, 1.02, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {item}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                x: isInView ? 0 : 20,
                boxShadow: isInView ? [
                  '0 0 20px rgba(34, 197, 94, 0.1)',
                  '0 0 40px rgba(34, 197, 94, 0.25)',
                  '0 0 20px rgba(34, 197, 94, 0.1)'
                ] : 'none',
                borderColor: isInView ? [
                  'rgba(34, 197, 94, 0.2)',
                  'rgba(34, 197, 94, 0.5)',
                  'rgba(34, 197, 94, 0.2)'
                ] : 'rgba(34, 197, 94, 0.2)'
              }}
              transition={{ 
                opacity: { duration: 0.6 },
                x: { duration: 0.6 },
                boxShadow: { duration: 2, repeat: Infinity },
                borderColor: { duration: 2, repeat: Infinity }
              }}
              className="glass-effect rounded-xl p-6 bg-gradient-to-br from-green-900/20 to-slate-800/50 border relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{language === 'zh' ? '现在·DTF热转印定制模式' : 'Now · DTF Heat Transfer Customization'}</h4>
                  <p className="text-gray-500 text-xs">{language === 'zh' ? '红利模式' : 'Bonus Mode'}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {nowItems.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ 
                      opacity: isInView ? 1 : 0, 
                      x: isInView ? 0 : 10,
                      backgroundColor: isInView ? (activeIndex === i ? 'rgba(34, 197, 94, 0.12)' : 'transparent') : 'transparent'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${activeIndex === i ? 'bg-green-500/40' : 'bg-green-500/20'}`}
                      animate={activeIndex === i ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className={`w-3 h-3 ${activeIndex === i ? 'text-green-300' : 'text-green-400'}`} />
                    </motion.div>
                    <motion.span 
                      className={`text-sm ${activeIndex === i ? 'text-green-300 font-medium' : 'text-gray-400'}`}
                      animate={activeIndex === i ? { scale: [1, 1.02, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {item}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {language === 'zh' ? '全平台数据佐证赛道红利，热转印成为2026年最具潜力轻创业基础设施' : 'Platform Data Confirms Track Bonus, Heat Transfer Becomes Most Potential Light Entrepreneurship Infrastructure in 2026'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {platformData.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-effect rounded-xl p-5 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center`}>
                      <platform.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{platform.platform}</h4>
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        {platform.share}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{platform.features}</p>
                <div className="flex flex-wrap gap-2">
                  {platform.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-slate-800 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="glass-effect rounded-xl p-5 bg-gradient-to-br from-purple-900/20 to-slate-800/50 border border-purple-500/20 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <h4 className="text-white font-semibold">{language === 'zh' ? '2026上半年耗材品类核心数据' : 'H1 2026 Consumables Category Core Data'}</h4>
            </div>
            <p className="text-gray-400 text-sm">
              {language === 'zh' 
                ? <>国家环保新规落地，无气味热熔粉、水性环保墨水成交权重大幅提升；金属星际银、反光、温变、植绒等特效转印膜，在文创潮流品类应用占比升至<span className="text-purple-400 font-semibold mx-1">18%</span>，成为高利润核心耗材品类。</>
                : <>New environmental regulations implemented. Odorless hot melt powder and water-based eco-friendly ink transaction weights significantly increased. Special effect films like metallic silver, reflective, temperature-changing, and flocking account for <span className="text-purple-400 font-semibold mx-1">18%</span> in creative trendy categories, becoming high-profit core consumables.</>
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-5 hover:border-amber-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 glass-effect rounded-xl p-6 bg-gradient-to-br from-blue-900/20 to-slate-800/50 border border-blue-500/20">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              {language === 'zh' ? '品牌专属背书' : 'Brand Endorsement'}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {language === 'zh' 
                ? '泰乐机械深耕热转印设备研发，自研核心发热模块与智能控制系统，精准匹配2026年电商市场「小型智能设备+环保特效耗材+轻量化创业方案」的核心需求，打造「设备+环保耗材+AI设计中台+全程售后」全闭环解决方案，适配全平台商家、小微创业者、B端工厂多元需求，打破行业同质化低价内卷，为全渠道合作客户提供全链路扶持。'
                : 'Taile Machinery specializes in heat transfer equipment R&D, with self-developed core heating modules and intelligent control systems. We precisely match the 2026 e-commerce market\'s core needs for "small smart equipment + eco-friendly special effect consumables + lightweight startup solutions". We build a complete closed-loop solution of "equipment + eco-friendly consumables + AI design platform + full after-sales service", adapting to diverse needs of all-platform merchants, small entrepreneurs, and B2B factories.'
              }
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-effect rounded-2xl p-8 text-center bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/20 border border-blue-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            {language === 'zh' ? '把握定制红利，入局轻创业新赛道' : 'Seize Customization Bonus, Enter New Light Entrepreneurship Track'}
          </h3>
          <p className="text-gray-400 mb-6">
            {language === 'zh' ? '2026年是个性化定制赛道决胜元年，顺势入局，抢占万亿消费新风口' : '2026 is the decisive year for personalization track. Join now to seize the trillion-dollar consumer opportunity'}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('scenarios')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {language === 'zh' ? '查看12大创业场景方案' : 'View 12 Entrepreneurship Scenarios'}
            </button>
            <button
              className="px-8 py-3 bg-slate-800 text-white font-semibold rounded-lg border border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('nine-systems')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {language === 'zh' ? '咨询专属定制解决方案 & 设备扶持政策' : 'Consult Custom Solutions & Equipment Support'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}