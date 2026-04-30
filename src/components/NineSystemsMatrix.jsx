import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Globe, Lightbulb, Droplets, Package, Cpu, Building2, Wrench, GraduationCap,
  X, ArrowRight, ChevronDown, CheckCircle2, Sparkles, TrendingUp, Lock
} from 'lucide-react';
import { useLanguage } from '../i18n';

const iconMap = {
  ka: Users,
  online: Globe,
  scenario: Lightbulb,
  consumables: Droplets,
  substrate: Package,
  supply: Cpu,
  franchise: Building2,
  saas: Wrench,
  education: GraduationCap
};

const systemsDataZh = [
  {
    id: 'ka',
    name: 'KA大客户体系',
    role: '现金流稳定器',
    positioning: '深度绑定头部品牌与跨境分销巨头，锁定年度长期订单，夯实企业盈利基本盘，打造行业标杆背书。',
    userValue: '提供专属客户经理、年度订单保障、标杆案例背书，降低合作风险',
    cooperationMode: ['年度框架协议', '定制化解决方案', '优先供货权'],
    group: '板块一',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-400'
  },
  {
    id: 'online',
    name: '全球电商体系',
    role: '规模放量引擎',
    positioning: '全域覆盖海内外电商渠道，快速放大终端客户基数，提升品牌全球曝光度，实现规模化获客。',
    userValue: '提供电商渠道入驻支持、运营培训、营销素材，加速线上布局',
    cooperationMode: ['分销合作', '代运营服务', '联合营销活动'],
    group: '板块一',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    textColor: 'text-cyan-400'
  },
  {
    id: 'scenario',
    name: '场景解决方案体系',
    role: '高溢价增长极',
    positioning: '以细分场景创业包打造差异化优势，摆脱低价内卷，提升单笔成交客单价与客户初始粘性。',
    userValue: '提供定制化场景方案、技术支持、市场调研，避免低价内卷',
    cooperationMode: ['方案定制服务', '授权使用', '联合开发'],
    group: '板块一',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/30',
    textColor: 'text-teal-400'
  },
  {
    id: 'consumables',
    name: '工艺耗材体系',
    role: '核心利润底盘',
    positioning: '依托参数绑定实现高频刚需复购，打造企业持续高毛利现金流核心来源。',
    userValue: '提供专用耗材供应、库存管理、价格保护，保障稳定收益',
    cooperationMode: ['耗材专供协议', '自动补货系统', '返利政策'],
    group: '板块三',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    textColor: 'text-green-400'
  },
  {
    id: 'substrate',
    name: '基材耗材体系',
    role: '客单放大器',
    positioning: '补齐定制场景全品类需求，提升综合客单价，实现客户采购需求全域闭环。',
    userValue: '提供全品类基材/耗材、一站式采购、质量保障，提升综合收益',
    cooperationMode: ['全品类供应协议', '专属采购平台', '账期支持'],
    group: '板块三',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    textColor: 'text-emerald-400'
  },
  {
    id: 'supply',
    name: '模块供应链体系',
    role: '技术变现通道',
    positioning: '对外输出自研核心模块、工业加工能力，实现技术壁垒商业化，开辟B端增量市场。',
    userValue: '提供核心模块供应、技术培训、售后支持，提升产品竞争力',
    cooperationMode: ['模块采购', 'OEM/ODM合作', '技术授权'],
    group: '板块二',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-400'
  },
  {
    id: 'franchise',
    name: '加盟扩张体系',
    role: '生态规模化终局',
    positioning: '输出品牌、供应链、数字化中台、耗材体系，实现全国化、全球化生态裂变扩张，打造平台分销网络。',
    userValue: '提供全套运营体系、培训支持、数字化工具、供应链保障，降低创业风险',
    cooperationMode: ['单店加盟', '区域代理', '城市合伙人'],
    group: '生态扩张',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    textColor: 'text-pink-400'
  },
  {
    id: 'saas',
    name: 'SaaS工具体系',
    role: '数字化壁垒引擎',
    positioning: '以智能工具、数据服务深度绑定客户，实现中台能力商业化，构建独家数字化生态壁垒。',
    userValue: '提供自研SaaS工具、数据分析、系统集成，提升运营效率',
    cooperationMode: ['订阅制', '按使用量付费', '定制开发'],
    group: '板块三',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
    textColor: 'text-indigo-400'
  },
  {
    id: 'education',
    name: '教育培训体系',
    role: '信任增值盈利点',
    positioning: '通过创业培训、工艺教学赋能客户，强化品牌专业度，新增培训增值收益，深度绑定客户成长。',
    userValue: '提供产品培训、工艺教学、创业指导，提升合作伙伴能力',
    cooperationMode: ['线下培训', '线上课程', '认证体系'],
    group: '板块三',
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    textColor: 'text-amber-400'
  }
];

const systemsDataEn = [
  {
    id: 'ka',
    name: 'KA Enterprise System',
    role: 'Cash Flow Stabilizer',
    positioning: 'Deeply bind with top brands and cross-border distributors, lock in long-term annual orders, consolidate profit foundation, and build industry benchmark credibility.',
    userValue: 'Provide dedicated account managers, annual order guarantees, and benchmark case endorsements to reduce cooperation risks',
    cooperationMode: ['Annual Framework Agreement', 'Customized Solutions', 'Priority Supply Rights'],
    group: 'Section 1',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-400'
  },
  {
    id: 'online',
    name: 'Global E-commerce System',
    role: 'Scale Expansion Engine',
    positioning: 'Full coverage of domestic and international e-commerce channels, rapidly expand end customer base, enhance global brand exposure, and achieve scaled acquisition.',
    userValue: 'Provide e-commerce channel entry support, operation training, and marketing materials to accelerate online presence',
    cooperationMode: ['Distribution Partnership', 'Managed Operations', 'Joint Marketing'],
    group: 'Section 1',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    textColor: 'text-cyan-400'
  },
  {
    id: 'scenario',
    name: 'Scenario Solution System',
    role: 'High Premium Growth Pole',
    positioning: 'Create differentiated advantages with niche scenario startup packages, escape price wars, and increase order value and initial customer stickiness.',
    userValue: 'Provide customized scenario solutions, technical support, and market research to avoid price wars',
    cooperationMode: ['Solution Customization', 'License Usage', 'Co-Development'],
    group: 'Section 1',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/30',
    textColor: 'text-teal-400'
  },
  {
    id: 'consumables',
    name: 'Process Consumables System',
    role: 'Core Profit Foundation',
    positioning: 'Achieve high-frequency mandatory repurchase through parameter binding, creating a sustainable high-margin cash flow source.',
    userValue: 'Provide exclusive consumables supply, inventory management, and price protection to ensure stable revenue',
    cooperationMode: ['Exclusive Supply Agreement', 'Auto Restocking', 'Rebate Policy'],
    group: 'Section 3',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    textColor: 'text-green-400'
  },
  {
    id: 'substrate',
    name: 'Substrate Consumables System',
    role: 'Order Value Amplifier',
    positioning: 'Complete full-category needs for customization scenarios, increase comprehensive order value, and achieve full closure of customer procurement needs.',
    userValue: 'Provide full-category substrate/consumables, one-stop procurement, and quality assurance to increase comprehensive revenue',
    cooperationMode: ['Full-Category Supply', 'Exclusive Platform', 'Payment Terms Support'],
    group: 'Section 3',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    textColor: 'text-emerald-400'
  },
  {
    id: 'supply',
    name: 'Module Supply Chain System',
    role: 'Technology Monetization Channel',
    positioning: 'Export self-developed core modules and industrial processing capabilities, commercialize technology barriers, and open up B2B growth markets.',
    userValue: 'Provide core module supply, technical training, and after-sales support to enhance product competitiveness',
    cooperationMode: ['Module Procurement', 'OEM/ODM Partnership', 'Technology License'],
    group: 'Section 2',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-400'
  },
  {
    id: 'franchise',
    name: 'Franchise Expansion System',
    role: 'Ecosystem Scale Finale',
    positioning: 'Export brand, supply chain, digital platform, and consumables system to achieve national and global ecosystem fission expansion.',
    userValue: 'Provide full operation system, training support, digital tools, and supply chain guarantee to reduce startup risks',
    cooperationMode: ['Single Store Franchise', 'Regional Agency', 'City Partner'],
    group: 'Ecosystem Expansion',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    textColor: 'text-pink-400'
  },
  {
    id: 'saas',
    name: 'SaaS Tool System',
    role: 'Digital Barrier Engine',
    positioning: 'Deeply bind customers with intelligent tools and data services, commercialize platform capabilities, and build exclusive digital ecosystem barriers.',
    userValue: 'Provide self-developed SaaS tools, data analysis, and system integration to improve operational efficiency',
    cooperationMode: ['Subscription', 'Usage-Based', 'Custom Development'],
    group: 'Section 3',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
    textColor: 'text-indigo-400'
  },
  {
    id: 'education',
    name: 'Education & Training System',
    role: 'Trust Value-Added Profit Point',
    positioning: 'Empower customers through entrepreneurship training and process teaching, enhance brand professionalism, add training value revenue.',
    userValue: 'Provide product training, process teaching, and entrepreneurship guidance to enhance partner capabilities',
    cooperationMode: ['Offline Training', 'Online Courses', 'Certification System'],
    group: 'Section 3',
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    textColor: 'text-amber-400'
  }
];

const groupConfigZh = {
  '板块一': {
    title: '前端获客与规模放量',
    desc: '负责获取客户、建立品牌认知',
    color: 'from-blue-500 to-cyan-500'
  },
  '板块二': {
    title: '技术与供应链商业化',
    desc: '负责技术研发、核心部件生产',
    color: 'from-purple-500 to-purple-600'
  },
  '板块三': {
    title: '利润留存与壁垒构建',
    desc: '负责利润转化与客户留存',
    color: 'from-green-500 to-emerald-500'
  },
  '生态扩张': {
    title: '生态规模化终局',
    desc: '实现全国化、全球化生态裂变',
    color: 'from-pink-500 to-pink-600'
  }
};

const groupConfigEn = {
  'Section 1': {
    title: 'Frontend Acquisition & Scale Expansion',
    desc: 'Responsible for customer acquisition and brand awareness',
    color: 'from-blue-500 to-cyan-500'
  },
  'Section 2': {
    title: 'Technology & Supply Chain Commercialization',
    desc: 'Responsible for R&D and core component production',
    color: 'from-purple-500 to-purple-600'
  },
  'Section 3': {
    title: 'Profit Retention & Barrier Building',
    desc: 'Responsible for profit conversion and customer retention',
    color: 'from-green-500 to-emerald-500'
  },
  'Ecosystem Expansion': {
    title: 'Ecosystem Scale Finale',
    desc: 'Achieve national and global ecosystem fission',
    color: 'from-pink-500 to-pink-600'
  }
};

function SystemCard({ system, index, onClick, language }) {
  const Icon = iconMap[system.id] || Users;

  return (
    <motion.div
      className={`relative rounded-2xl ${system.bgColor} border ${system.borderColor} p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onClick={() => onClick(system)}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${system.color} flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-1">{system.name}</h3>
          <p className={`text-sm ${system.textColor} font-medium mb-2`}>{system.role}</p>
          <p className="text-gray-400 text-sm line-clamp-2">{system.positioning}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors">
        <span>{language === 'zh' ? '查看详情' : 'View Details'}</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
}

function SystemModal({ system, onClose, language }) {
  const Icon = iconMap[system.id] || Users;

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={`w-full max-w-lg bg-slate-900 rounded-2xl border ${system.borderColor} overflow-hidden`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`p-6 bg-gradient-to-r ${system.color}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{system.name}</h3>
                <p className="text-white/80 text-sm">{system.role}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary-400" />
              {language === 'zh' ? '核心定位' : 'Core Positioning'}
            </h4>
            <p className="text-gray-300">{system.positioning}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              {language === 'zh' ? '用户价值' : 'User Value'}
            </h4>
            <p className="text-green-400">{system.userValue}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Lock className="w-4 h-4 text-primary-400" />
              {language === 'zh' ? '合作模式' : 'Cooperation Mode'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {system.cooperationMode.map((mode, i) => (
                <span
                  key={i}
                  className={`px-3 py-1.5 rounded-full ${system.bgColor} ${system.textColor} text-sm`}
                >
                  {mode}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-slate-800">
          <button
            className={`w-full py-3 rounded-xl bg-gradient-to-r ${system.color} text-white font-semibold hover:opacity-90 transition-opacity`}
          >
            {language === 'zh' ? '立即咨询合作' : 'Inquire About Partnership'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FlywheelSection({ language }) {
  const steps = language === 'zh' ? [
    { name: '获客', desc: 'KA+电商', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { name: '转化', desc: '场景方案', icon: Lightbulb, color: 'from-teal-500 to-green-500' },
    { name: '留存', desc: '耗材+SaaS', icon: Droplets, color: 'from-green-500 to-emerald-500' },
    { name: '扩张', desc: '供应链+加盟', icon: Building2, color: 'from-purple-500 to-pink-500' }
  ] : [
    { name: 'Acquire', desc: 'KA+E-commerce', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { name: 'Convert', desc: 'Scenario Solutions', icon: Lightbulb, color: 'from-teal-500 to-green-500' },
    { name: 'Retain', desc: 'Consumables+SaaS', icon: Droplets, color: 'from-green-500 to-emerald-500' },
    { name: 'Expand', desc: 'Supply+Franchise', icon: Building2, color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <div className="mt-16 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700">
      <h3 className="text-xl font-bold text-white text-center mb-8">
        {language === 'zh' ? '体系飞轮 · 正向循环，持续增长' : 'System Flywheel · Positive Cycle, Continuous Growth'}
      </h3>
      
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="flex items-center gap-4">
              <motion.div
                className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex flex-col items-center justify-center`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                <Icon className="w-8 h-8 text-white mb-1" />
                <span className="text-white font-bold">{step.name}</span>
                <span className="text-white/70 text-xs">{step.desc}</span>
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6 text-gray-500" />
                </motion.div>
              )}
            </div>
          );
        })}
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <ArrowRight className="w-6 h-6 text-gray-500" />
        </motion.div>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className={`text-sm font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
              {step.name}
            </div>
            <div className="text-gray-500 text-xs mt-1">
              {index === 0 && (language === 'zh' ? '获取客户，建立品牌认知' : 'Acquire customers, build brand awareness')}
              {index === 1 && (language === 'zh' ? '提升客单价，差异化竞争' : 'Increase order value, differentiate competition')}
              {index === 2 && (language === 'zh' ? '高频复购，持续盈利' : 'High-frequency repurchase, sustained profit')}
              {index === 3 && (language === 'zh' ? '生态裂变，规模化复制' : 'Ecosystem fission, scale replication')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CooperationSection({ language }) {
  const modes = language === 'zh' ? [
    {
      title: 'KA大客户合作',
      icon: Building2,
      desc: '头部品牌/跨境分销巨头',
      color: 'from-blue-500 to-blue-600',
      cta: '申请专属合作'
    },
    {
      title: '加盟扩张合作',
      icon: Globe,
      desc: '创业者/区域合作伙伴',
      color: 'from-pink-500 to-pink-600',
      cta: '提交加盟申请'
    },
    {
      title: '供应链合作',
      icon: Cpu,
      desc: 'B端企业/设备制造商',
      color: 'from-purple-500 to-purple-600',
      cta: '咨询供应合作'
    }
  ] : [
    {
      title: 'KA Enterprise Partnership',
      icon: Building2,
      desc: 'Top Brands/Cross-border Distributors',
      color: 'from-blue-500 to-blue-600',
      cta: 'Apply for Partnership'
    },
    {
      title: 'Franchise Expansion',
      icon: Globe,
      desc: 'Entrepreneurs/Regional Partners',
      color: 'from-pink-500 to-pink-600',
      cta: 'Submit Franchise Application'
    },
    {
      title: 'Supply Chain Partnership',
      icon: Cpu,
      desc: 'B2B Enterprises/Equipment Makers',
      color: 'from-purple-500 to-purple-600',
      cta: 'Inquire About Supply'
    }
  ];

  return (
    <div className="mt-16">
      <h3 className="text-xl font-bold text-white text-center mb-8">
        {language === 'zh' ? '选择适合您的合作模式' : 'Choose Your Cooperation Mode'}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modes.map((mode, index) => {
          const Icon = mode.icon;
          return (
            <motion.div
              key={index}
              className={`rounded-2xl bg-gradient-to-br ${mode.color} p-6 text-center`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{mode.title}</h4>
              <p className="text-white/80 text-sm mb-4">{mode.desc}</p>
              <button className="w-full py-2 rounded-xl border-2 border-white/50 text-white font-medium hover:bg-white/20 transition-colors">
                {mode.cta}
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function FAQSection({ language }) {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = language === 'zh' ? [
    { q: '加盟需要什么条件？', a: '需要具备一定的创业资金、经营场地，认同泰乐品牌理念，愿意接受总部统一管理和培训。' },
    { q: '如何成为KA大客户合作伙伴？', a: '年采购额达到100万以上，或具有稳定的终端销售渠道，可申请成为KA合作伙伴，享受专属服务和价格优惠。' },
    { q: '供应链合作的结算方式是什么？', a: '支持月结、季度结等多种结算方式，具体根据合作规模和信用评级协商确定。' },
    { q: 'SaaS工具和耗材体系如何收费？', a: 'SaaS工具支持订阅制和按使用量付费两种模式；耗材体系采用阶梯定价，采购量越大价格越优惠。' }
  ] : [
    { q: 'What are the franchise requirements?', a: 'Need certain startup capital, business space, agree with Taile brand philosophy, and willing to accept unified management and training from headquarters.' },
    { q: 'How to become a KA partner?', a: 'Annual procurement amount of 1 million RMB or more, or having stable end sales channels, you can apply to become a KA partner and enjoy exclusive services and price discounts.' },
    { q: 'What are the payment terms for supply chain cooperation?', a: 'Supports monthly, quarterly and other settlement methods, determined based on cooperation scale and credit rating.' },
    { q: 'How are SaaS tools and consumables priced?', a: 'SaaS tools support subscription and pay-as-you-go models; consumables use tiered pricing, with larger purchases enjoying better discounts.' }
  ];

  return (
    <div className="mt-16">
      <h3 className="text-xl font-bold text-white text-center mb-8">
        {language === 'zh' ? '常见问题 · 解答您的顾虑' : 'FAQ · Answers to Your Concerns'}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <button
              className="w-full p-4 flex items-center justify-between text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-white">{faq.q}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-4 pb-4 text-gray-400 text-sm">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function NineSystemsMatrix() {
  const [selectedSystem, setSelectedSystem] = useState(null);
  const { language } = useLanguage();

  const systemsData = language === 'zh' ? systemsDataZh : systemsDataEn;
  const groups = language === 'zh' ? ['板块一', '板块二', '板块三', '生态扩张'] : ['Section 1', 'Section 2', 'Section 3', 'Ecosystem Expansion'];

  return (
    <section className="px-4 py-16" id="matrix">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-500/20 text-primary-400 text-sm font-medium mb-4">
            {language === 'zh' ? '全链路闭环落地体系' : 'Full-Stack Closed-Loop System'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4">
            {language === 'zh' ? '九大销售体系' : 'Nine Sales Systems'}
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto text-center leading-relaxed">
            {language === 'zh' ? '三大业务板块 × 九大标准化体系，从获客到生态变现' : 'Three Business Sectors × Nine Standardized Systems, from Acquisition to Monetization'}<br/>
            {language === 'zh' ? '为合作伙伴提供可落地、可规模化的商业解决方案' : 'Providing actionable, scalable business solutions for partners'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systemsData.map((system, index) => (
            <SystemCard
              key={system.id}
              system={system}
              index={index}
              onClick={setSelectedSystem}
              language={language}
            />
          ))}
        </div>

        <CooperationSection language={language} />
        <FAQSection language={language} />
      </div>

      <AnimatePresence>
        {selectedSystem && (
          <SystemModal
            system={selectedSystem}
            onClose={() => setSelectedSystem(null)}
            language={language}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
