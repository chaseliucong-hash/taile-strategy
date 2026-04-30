import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  zh: {
    nav: {
      strategicPlanning: '战略规划',
      coreBusiness: '核心业务',
      ecosystem: '生态体系',
      strategicTop: '战略顶层',
      strategicEngine: '战略引擎',
      competitiveBarriers: '竞争壁垒',
      strategicOverview: '战略概览',
      coreBusinessSection: '核心业务',
      verticalScenarios: '垂直场景',
      nineSystems: '九大体系',
      businessLoop: '业务闭环',
      heatTransferEcosystem: '热转印生态',
      competitorComparison: '竞品对比'
    },
    manifesto: {
      title: '使命愿景',
      mission: '使命',
      vision: '愿景',
      missionContent: '致力于成为全球领先的热转印解决方案提供商，以创新技术推动个性化定制产业发展',
      visionContent: '让创意触手可及，让每个产品都有独特价值'
    },
    engine: {
      title: '战略引擎',
      growthEngine: '增长引擎',
      profitEngine: '利润引擎',
      scaleEngine: '规模引擎'
    },
    moats: {
      title: '竞争壁垒',
      brandMoat: '品牌壁垒',
      technologyMoat: '技术壁垒',
      channelMoat: '渠道壁垒',
      costMoat: '成本壁垒'
    },
    coreBusiness: {
      title: '三大核心业务',
      heatTransfer: '热转印设备',
      digitalPrinting: '数码印花',
      customizationService: '定制服务'
    },
    scenarios: {
      title: '垂直场景',
      viewSolutions: '查看12大创业场景方案',
      customizePlan: '联系定制方案'
    },
    matrix: {
      title: '九大销售体系',
      miniProgram: '小程序商城',
      liveStream: '直播带货',
      communityGroup: '社群团购',
      offlineStore: '线下体验店',
      distributor: '区域经销商',
      enterprise: '企业定制',
      crossBorder: '跨境电商',
      OEM: 'OEM代工',
      afterSales: '售后服务'
    },
    loop: {
      title: '业务闭环',
      traffic: '流量获取',
      conversion: '方案转化',
      delivery: '交付服务',
      retention: '客户留存'
    },
    ecosystem: {
      title: '热转印生态',
      explore: '探索生态'
    },
    marketAnalysis: {
      title: '市场分析',
      certainties: '五大确定性趋势',
      industryChange: '行业大变局',
      past: '过去 · 传统印刷模式',
      now: '现在 · 数码印花时代',
      eliminationMode: '淘汰模式',
      bonusMode: '红利模式',
      viewSolutions: '查看12大创业场景方案',
      platformData: '全平台电商数据',
      trackValue: '赛道核心价值',
      brandEndorsement: '品牌背书',
      trend1: '个性化需求爆发',
      trend2: '柔性供应链崛起',
      trend3: '数字营销升级',
      trend4: '跨境电商出海',
      trend5: 'AI设计赋能'
    },
    productPricing: {
      title: '赚钱模型验证',
      reportVersion: '0416版产品分析报告',
      grossMargin: '平均毛利率',
      priceRange: '价格区间',
      complianceLevel: '合规水平',
      corePosition: '核心盘位',
      topProducts: '毛利率 Top 5',
      patentHealth: '专利健康度',
      categoryDistribution: '产品分布',
      strategyBoard: '策略看板',
      focusPromotion: '重点推广',
      riskAvoidance: '风险规避',
      visualOptimization: '视觉优化',
      productName: '产品名称',
      category: '分类',
      retailPrice: '零售价',
      grossMarginCol: '毛利率',
      certification: '认证',
      patent: '专利'
    },
    competitor: {
      title: '全球竞品分析',
      compare: '竞品对比'
    },
    matrixSection: {
      title: '九大体系'
    },
    footer: {
      copyright: 'Copyright 2024 义乌泰乐机械有限公司'
    },
    overview: {
      title: '泰乐机械 · 三年战略商业模式',
      subtitle: '从设备制造商到全球定制创业基础设施平台',
      description: '三大引擎相互驱动，形成「获取客户 → 创造价值 → 放大价值」的持续增长闭环',
      growthEngines: '三大增长引擎',
      growthEnginesDesc: '驱动持续增长',
      kaEngine: 'KA深度绑定引擎',
      kaSubtitle: '现金流 & 基本盘引擎',
      kaDesc: '绑定头部客户，年度锁单合作，打造稳定利润池与行业标杆',
      kaAnnualLock: '年度锁单',
      kaCooperation: '合作深度',
      kaProfit: '利润占比',
      microEngine: '小微创业引擎',
      microSubtitle: '规模 & 流量引擎',
      microDesc: '覆盖全球小微创业者与细分场景，快速放量，沉淀海量用户',
      microUsers: '服务用户',
      microCountries: '覆盖国家',
      microScenarios: '场景细分',
      aiEngine: 'AI中台引擎',
      aiSubtitle: '效率 & 壁垒引擎',
      aiDesc: '数据驱动全域运营与智能决策，放大增长效率，构建独家壁垒',
      aiData: '数据处理',
      aiModels: '智能模型',
      aiEfficiency: '效率提升',
      flywheel: '收入增长飞轮',
      flywheelDesc: '持续复购 & 价值放大',
      coreLogic: '核心逻辑',
      coreLogicSubtitle: '以设备获客 · 以耗材盈利 · 以平台放大',
      coreLogicDesc: '客户终身价值最大化',
      step1: '卖设备',
      step1Subtitle: '流量入口',
      step1Desc: '高性能热转印设备，场景化创业方案，解决客户生产需求',
      step2: '绑定耗材',
      step2Subtitle: '核心利润',
      step2Desc: '工艺耗材参数绑定，高频刚需复购，毛利率40%-60%+',
      step3: '提供基材',
      step3Subtitle: '提升客单',
      step3Desc: '全品类基材耗材，一站式采购，提升客单30%-80%',
      step4: '提供工具&服务',
      step4Subtitle: '增值放大',
      step4Desc: 'AI设计工具+数字化系统，培训/售后/运营赋能，提升效率与粘性',
      step5: '升级&扩张',
      step5Subtitle: '价值升级',
      step5Desc: '设备升级/多店扩张，加盟合作/场景延伸，客户价值持续提升',
      moats: '四大核心壁垒',
      moatsDesc: '构建竞争护城河',
      techMoat: '技术自研壁垒',
      techMoatDesc: '核心电控&硬件全自研，掌握发热模块、电控系统、结构机架、执行控制等核心技术',
      supplyMoat: '供应链产能壁垒',
      supplyMoatDesc: '全链条供应链&实体产能，自有注塑、钣金、喷涂产能，核心部件自研自产',
      dataMoat: 'AI数字化中台壁垒',
      dataMoatDesc: 'AI数字中台&数据驱动，打通IoT+MES+WMS全链路数据，智能排产、耗材预警',
      ecosystemMoat: '场景生态壁垒',
      ecosystemMoatDesc: '场景化生态解决方案，覆盖十大细分场景，提供设备、耗材、工具、培训一体化方案',
      businessLoop: '完整商业闭环链路',
      businessLoopDesc: '场景获客到全球化',
      loop1: '场景获客',
      loop1Subtitle: '方案转化',
      loop1Desc: '精准触达目标客户',
      loop2: '交付履约',
      loop2Subtitle: '设备+耗材',
      loop2Desc: '高效交付保障',
      loop3: '持续复购',
      loop3Subtitle: '耗材+基材',
      loop3Desc: '高频刚需复购',
      loop4: '价值升级',
      loop4Subtitle: '升级/扩张/加盟',
      loop4Desc: '客户价值持续提升',
      loop5: '平台化',
      loop5Subtitle: '中国智造·服务全球',
      loop5Desc: '全球化运营'
    },
    matcher: {
      title: '测一测你适合做哪个创业项目',
      subtitle: '30秒出结果',
      start: '立即测试',
      question1: '您目前最主要的资源是什么？',
      opt1a: '门店/摊位',
      opt1b: '线上渠道',
      opt1c: '人脉资源',
      opt1d: '时间/技能',
      question2: '您期望的投入预算是？',
      opt2a: '0-5000元',
      opt2b: '5000-20000元',
      opt2c: '20000-50000元',
      opt2d: '50000元以上',
      question3: '您更偏好哪种经营模式？',
      opt3a: '线下体验/摆摊',
      opt3b: '电商/线上销售',
      opt3c: '企业定制/B端合作',
      opt3d: '加盟/合伙人',
      question4: '您期望的回本周期是？',
      opt4a: '1个月内',
      opt4b: '1-3个月',
      opt4c: '3-6个月',
      opt4d: '6个月以上',
      resultTitle: '您最适合的创业项目',
      reasons: '适配理由',
      profit: '收益预期',
      growthPath: '成长路径',
      caseTitle: '真实案例',
      viewPlan: '查看方案',
      consult: '立即咨询',
      retest: '重新测试',
      flowerGift: '鲜花礼品定制',
      campusCultural: '校园文创',
      mallDigital: '商场数码快闪',
      enterpriseGift: '企业礼品定制',
      petProducts: '宠物周边定制',
      culturalTourism: '文创景区文旅',
      diyCraft: 'DIY拼豆手工体验',
      babyClothing: '母婴儿童服饰',
      trendyToys: '潮玩手办盲盒',
      homeCustom: '家居个性定制',
      weddingCustom: '婚庆纪念定制',
      publicWelfare: '公益轻创业'
    }
  },
  en: {
    nav: {
      strategicPlanning: 'Strategic Planning',
      coreBusiness: 'Core Business',
      ecosystem: 'Ecosystem',
      strategicTop: 'Strategic Top',
      strategicEngine: 'Strategic Engine',
      competitiveBarriers: 'Competitive Barriers',
      strategicOverview: 'Strategic Overview',
      coreBusinessSection: 'Core Business',
      verticalScenarios: 'Vertical Scenarios',
      nineSystems: 'Nine Systems',
      businessLoop: 'Business Loop',
      heatTransferEcosystem: 'Heat Transfer Ecosystem',
      competitorComparison: 'Competitor Comparison'
    },
    manifesto: {
      title: 'Mission & Vision',
      mission: 'Mission',
      vision: 'Vision',
      missionContent: 'Committed to becoming the world\'s leading heat transfer solution provider, driving the development of personalized customization industry with innovative technology',
      visionContent: 'Make creativity accessible, give unique value to every product'
    },
    engine: {
      title: 'Strategic Engine',
      growthEngine: 'Growth Engine',
      profitEngine: 'Profit Engine',
      scaleEngine: 'Scale Engine'
    },
    moats: {
      title: 'Competitive Barriers',
      brandMoat: 'Brand Barrier',
      technologyMoat: 'Technology Barrier',
      channelMoat: 'Channel Barrier',
      costMoat: 'Cost Barrier'
    },
    coreBusiness: {
      title: 'Three Core Businesses',
      heatTransfer: 'Heat Transfer Equipment',
      digitalPrinting: 'Digital Printing',
      customizationService: 'Customization Service'
    },
    scenarios: {
      title: 'Vertical Scenarios',
      viewSolutions: 'View 12 Entrepreneurship Scenarios',
      customizePlan: 'Contact for Custom Plan'
    },
    matrix: {
      title: 'Nine Sales Systems',
      miniProgram: 'Mini Program Store',
      liveStream: 'Live Streaming',
      communityGroup: 'Community Group Buy',
      offlineStore: 'Offline Experience Store',
      distributor: 'Regional Distributor',
      enterprise: 'Enterprise Customization',
      crossBorder: 'Cross-border E-commerce',
      OEM: 'OEM Manufacturing',
      afterSales: 'After Sales Service'
    },
    loop: {
      title: 'Business Loop',
      traffic: 'Traffic Acquisition',
      conversion: 'Solution Conversion',
      delivery: 'Delivery Service',
      retention: 'Customer Retention'
    },
    ecosystem: {
      title: 'Heat Transfer Ecosystem',
      explore: 'Explore Ecosystem'
    },
    marketAnalysis: {
      title: 'Market Analysis',
      certainties: 'Five Certainty Trends',
      industryChange: 'Industry Transformation',
      past: 'Past · Traditional Printing',
      now: 'Now · Digital Printing Era',
      eliminationMode: 'Elimination Mode',
      bonusMode: 'Bonus Mode',
      viewSolutions: 'View 12 Entrepreneurship Scenarios',
      platformData: 'Platform E-commerce Data',
      trackValue: 'Track Core Value',
      brandEndorsement: 'Brand Endorsement',
      trend1: 'Personalization Demand Explosion',
      trend2: 'Flexible Supply Chain Rise',
      trend3: 'Digital Marketing Upgrade',
      trend4: 'Cross-border E-commerce',
      trend5: 'AI Design Empowerment'
    },
    productPricing: {
      title: 'Profit Model Verification',
      reportVersion: 'Product Analysis Report v0416',
      grossMargin: 'Avg Gross Margin',
      priceRange: 'Price Range',
      complianceLevel: 'Compliance Level',
      corePosition: 'Core Position',
      topProducts: 'Top 5 Gross Margin',
      patentHealth: 'Patent Health',
      categoryDistribution: 'Category Distribution',
      strategyBoard: 'Strategy Board',
      focusPromotion: 'Focus Promotion',
      riskAvoidance: 'Risk Avoidance',
      visualOptimization: 'Visual Optimization',
      productName: 'Product Name',
      category: 'Category',
      retailPrice: 'Retail Price',
      grossMarginCol: 'Gross Margin',
      certification: 'Certification',
      patent: 'Patent'
    },
    competitor: {
      title: 'Global Competitor Analysis',
      compare: 'Competitor Comparison'
    },
    matrixSection: {
      title: 'Nine Systems'
    },
    footer: {
      copyright: 'Copyright 2024 Yiwu Taile Machinery Co., Ltd.'
    },
    overview: {
      title: 'Taile Machinery · 3-Year Strategic Business Model',
      subtitle: 'From Equipment Manufacturer to Global Customization Entrepreneurship Infrastructure Platform',
      description: 'Three engines drive each other, forming a continuous growth cycle of "Acquire Customers → Create Value → Scale Value"',
      growthEngines: 'Three Growth Engines',
      growthEnginesDesc: 'Driving Sustainable Growth',
      kaEngine: 'KA Deep Binding Engine',
      kaSubtitle: 'Cash Flow & Base Engine',
      kaDesc: 'Bind with top customers, annual lock-in cooperation, create stable profit pool and industry benchmarks',
      kaAnnualLock: 'Annual Lock-in',
      kaCooperation: 'Cooperation Depth',
      kaProfit: 'Profit Share',
      microEngine: 'Micro-Entrepreneurship Engine',
      microSubtitle: 'Scale & Traffic Engine',
      microDesc: 'Cover global micro-entrepreneurs and niche scenarios, rapidly scale up, accumulate massive users',
      microUsers: 'Served Users',
      microCountries: 'Countries Covered',
      microScenarios: 'Scenario Segments',
      aiEngine: 'AI Middle Platform Engine',
      aiSubtitle: 'Efficiency & Barrier Engine',
      aiDesc: 'Data-driven global operations and intelligent decision-making, amplify growth efficiency, build exclusive barriers',
      aiData: 'Data Processing',
      aiModels: 'AI Models',
      aiEfficiency: 'Efficiency Improvement',
      flywheel: 'Revenue Growth Flywheel',
      flywheelDesc: 'Continuous Repurchase & Value Amplification',
      coreLogic: 'Core Logic',
      coreLogicSubtitle: 'Acquire Customers via Equipment · Profit from Consumables · Scale via Platform',
      coreLogicDesc: 'Maximize Customer Lifetime Value',
      step1: 'Sell Equipment',
      step1Subtitle: 'Traffic Entry',
      step1Desc: 'High-performance heat transfer equipment, scenario-based entrepreneurship solutions, solve customer production needs',
      step2: 'Bind Consumables',
      step2Subtitle: 'Core Profit',
      step2Desc: 'Process consumables parameter binding, high-frequency rigid repurchase, gross margin 40%-60%+',
      step3: 'Provide Substrates',
      step3Subtitle: 'Increase Order Value',
      step3Desc: 'Full-category substrate consumables, one-stop procurement, increase order value by 30%-80%',
      step4: 'Provide Tools & Services',
      step4Subtitle: 'Value-added Amplification',
      step4Desc: 'AI design tools + digital systems, training/after-sales/operation empowerment, improve efficiency and stickiness',
      step5: 'Upgrade & Expand',
      step5Subtitle: 'Value Upgrade',
      step5Desc: 'Equipment upgrade/multi-store expansion, franchise cooperation/scenario extension, continuous customer value enhancement',
      moats: 'Four Core Barriers',
      moatsDesc: 'Building Competitive Moats',
      techMoat: 'Technology R&D Barrier',
      techMoatDesc: 'Core electronic control & hardware fully self-developed, mastering heating modules, electronic control systems, structural frames, execution control and other core technologies',
      supplyMoat: 'Supply Chain Capacity Barrier',
      supplyMoatDesc: 'Full-chain supply chain & physical capacity, self-owned injection molding, sheet metal, spraying capacity, core components self-developed and self-produced',
      dataMoat: 'AI Digital Middle Platform Barrier',
      dataMoatDesc: 'AI digital middle platform & data-driven, connecting IoT+MES+WMS full-link data, intelligent production scheduling, consumables warning',
      ecosystemMoat: 'Scenario Ecosystem Barrier',
      ecosystemMoatDesc: 'Scenario-based ecosystem solutions, covering ten major niche scenarios, providing integrated equipment, consumables, tools and training solutions',
      businessLoop: 'Complete Business Loop',
      businessLoopDesc: 'From Scenario Acquisition to Globalization',
      loop1: 'Scenario Acquisition',
      loop1Subtitle: 'Solution Conversion',
      loop1Desc: 'Precise reach to target customers',
      loop2: 'Delivery & Fulfillment',
      loop2Subtitle: 'Equipment + Consumables',
      loop2Desc: 'Efficient delivery guarantee',
      loop3: 'Continuous Repurchase',
      loop3Subtitle: 'Consumables + Substrates',
      loop3Desc: 'High-frequency rigid repurchase',
      loop4: 'Value Upgrade',
      loop4Subtitle: 'Upgrade/Expand/Franchise',
      loop4Desc: 'Continuous customer value enhancement',
      loop5: 'Platformization',
      loop5Subtitle: 'China Smart Manufacturing · Serve the World',
      loop5Desc: 'Global operations'
    },
    matcher: {
      title: 'Find Your Ideal Entrepreneurship Project',
      subtitle: 'Get results in 30 seconds',
      start: 'Start Test',
      question1: 'What is your main resource?',
      opt1a: 'Store/Stall',
      opt1b: 'Online Channels',
      opt1c: 'Network Resources',
      opt1d: 'Time/Skills',
      question2: 'What is your expected investment budget?',
      opt2a: '0-5000 RMB',
      opt2b: '5000-20000 RMB',
      opt2c: '20000-50000 RMB',
      opt2d: 'Over 50000 RMB',
      question3: 'Which business model do you prefer?',
      opt3a: 'Offline Experience/Street Vending',
      opt3b: 'E-commerce/Online Sales',
      opt3c: 'Enterprise Customization/B2B',
      opt3d: 'Franchise/Partnership',
      question4: 'What is your expected payback period?',
      opt4a: 'Within 1 month',
      opt4b: '1-3 months',
      opt4c: '3-6 months',
      opt4d: 'Over 6 months',
      resultTitle: 'Your Ideal Entrepreneurship Project',
      reasons: 'Matching Reasons',
      profit: 'Profit Expectation',
      growthPath: 'Growth Path',
      caseTitle: 'Real Cases',
      viewPlan: 'View Plan',
      consult: 'Consult Now',
      retest: 'Retest',
      flowerGift: 'Flower & Gift Customization',
      campusCultural: 'Campus Cultural & Creative',
      mallDigital: 'Mall Digital Flash Sale',
      enterpriseGift: 'Enterprise Gift Customization',
      petProducts: 'Pet Products Customization',
      culturalTourism: 'Cultural Tourism',
      diyCraft: 'DIY Craft Experience',
      babyClothing: 'Baby & Children Clothing',
      trendyToys: 'Trendy Toys & Figures',
      homeCustom: 'Home Customization',
      weddingCustom: 'Wedding Customization',
      publicWelfare: 'Public Welfare Entrepreneurship'
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('zh');

  useEffect(() => {
    const saved = localStorage.getItem('taile-language');
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('taile-language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'zh' ? 'en' : 'zh';
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default translations;