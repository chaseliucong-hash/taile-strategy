import { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Package, ChevronDown, ChevronUp } from 'lucide-react';
import { CORE_BUSINESS } from '../constants';
import { useLanguage } from '../i18n';

const iconMap = {
  systems: Monitor,
  components: Cpu,
  consumables: Package
};

const colorMap = {
  blue: {
    bg: 'bg-blue-500/20',
    bgHover: 'bg-blue-500/30',
    border: 'border-blue-500/30',
    borderHover: 'border-blue-500/60',
    text: 'text-blue-400',
    gradient: 'from-blue-500 to-cyan-500',
    badge: 'bg-blue-500/30 text-blue-300',
    glow: 'shadow-blue-500/20'
  },
  purple: {
    bg: 'bg-purple-500/20',
    bgHover: 'bg-purple-500/30',
    border: 'border-purple-500/30',
    borderHover: 'border-purple-500/60',
    text: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    badge: 'bg-purple-500/30 text-purple-300',
    glow: 'shadow-purple-500/20'
  },
  teal: {
    bg: 'bg-teal-500/20',
    bgHover: 'bg-teal-500/30',
    border: 'border-teal-500/30',
    borderHover: 'border-teal-500/60',
    text: 'text-teal-400',
    gradient: 'from-teal-500 to-green-500',
    badge: 'bg-teal-500/30 text-teal-300',
    glow: 'shadow-teal-500/20'
  }
};

function BusinessCard({ section, index, language }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const colors = colorMap[section.color];
  const Icon = iconMap[section.id];

  return (
    <motion.div
      className={`glass-effect rounded-2xl border transition-all duration-300 overflow-hidden h-full flex flex-col ${isHovered ? `${colors.borderHover} ${colors.glow}` : 'border-slate-700/50'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredItem(null);
      }}
    >
      <div className={`p-6 transition-all duration-300 ${isHovered ? colors.bgHover : colors.bg} min-h-[180px]`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
              <Icon className={`w-6 h-6 ${colors.text}`} />
            </div>
            <div>
              <h3 className={`text-xl font-bold ${colors.text}`}>{section.name}</h3>
              <p className="text-gray-500 text-sm">{section.nameEn}</p>
            </div>
          </div>
        </div>
        
        <div className={`inline-block px-3 py-1 rounded-full ${colors.badge} text-sm mb-3 transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}>
          {section.positioning}
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed">{section.task}</p>
      </div>

      <div className="p-6 flex-1">
        {section.id === 'systems' && (
          <>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              {language === 'zh' ? '核心渠道与销售打法' : 'Core Channels & Sales Strategy'}
            </h4>
            <div className="space-y-4">
              {section.channels.map((channel, i) => (
                <div 
                  key={i} 
                  className={`bg-slate-800/50 rounded-xl p-4 border transition-all duration-300 cursor-pointer ${hoveredItem === i ? 'border-blue-500/60 bg-blue-500/15 shadow-lg shadow-blue-500/20' : 'border-slate-700/30'}`}
                  onMouseEnter={() => setHoveredItem(i)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-white">{channel.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">{channel.tag}</span>
                  </div>
                  <p className="text-gray-500 text-xs mb-2">{language === 'zh' ? '覆盖：' : 'Coverage: '}{channel.target}</p>
                  <p className="text-gray-400 text-sm">{channel.strategy}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                {language === 'zh' ? '十二大垂直场景' : '12 Vertical Scenarios'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {section.scenarios.map((scenario, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs border border-blue-500/20 transition-all duration-300 cursor-pointer hover:bg-blue-500/20 hover:border-blue-500/40 hover:scale-105"
                  >
                    {scenario}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        {section.id === 'components' && (
          <>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              {language === 'zh' ? '核心技术能力' : 'Core Technical Capabilities'}
            </h4>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {section.capabilities.map((cap, i) => (
                <div 
                  key={i} 
                  className={`bg-slate-800/50 rounded-xl p-3 border transition-all duration-300 text-center cursor-pointer ${hoveredItem === `cap-${i}` ? 'border-purple-500/60 bg-purple-500/15 shadow-lg shadow-purple-500/20' : 'border-slate-700/30'}`}
                  onMouseEnter={() => setHoveredItem(`cap-${i}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="text-purple-300 font-medium text-sm mb-1 whitespace-pre-line">{cap.name}</div>
                  <div className="text-gray-500 text-xs">{cap.desc}</div>
                </div>
              ))}
            </div>
            
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              {language === 'zh' ? '自有产能' : 'In-house Production'}
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {section.production.map((prod, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-300 text-sm border border-purple-500/20 transition-all duration-300 cursor-pointer hover:bg-purple-500/20 hover:border-purple-500/40 hover:scale-105"
                >
                  {prod}
                </span>
              ))}
            </div>
            
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              {language === 'zh' ? '业务方向' : 'Business Directions'}
            </h4>
            <div className="space-y-3">
              {section.business.map((biz, i) => (
                <div 
                  key={i} 
                  className={`bg-slate-800/50 rounded-xl p-4 border transition-all duration-300 cursor-pointer ${hoveredItem === `biz-${i}` ? 'border-purple-500/60 bg-purple-500/15 shadow-lg shadow-purple-500/20' : 'border-slate-700/30'}`}
                  onMouseEnter={() => setHoveredItem(`biz-${i}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="text-purple-300 font-medium">{biz.type}</span>
                  <p className="text-gray-400 text-sm mt-1">{biz.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
              <p className="text-gray-300 text-sm">{section.value}</p>
            </div>
          </>
        )}

        {section.id === 'consumables' && (
          <>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              {language === 'zh' ? '四大业务模块' : 'Four Business Modules'}
            </h4>
            <div className="space-y-3">
              {section.modules.map((mod, i) => (
                <div 
                  key={i} 
                  className={`bg-slate-800/50 rounded-xl p-4 border transition-all duration-300 cursor-pointer ${hoveredItem === `mod-${i}` ? 'border-teal-500/60 bg-teal-500/15 shadow-lg shadow-teal-500/20' : 'border-slate-700/30'}`}
                  onMouseEnter={() => setHoveredItem(`mod-${i}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-white">{mod.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-teal-500/20 text-teal-300">{mod.tag}</span>
                  </div>
                  <p className="text-gray-500 text-xs mb-2">{mod.products}</p>
                  <p className="text-gray-400 text-sm mb-2">{mod.strategy}</p>
                  <div className="text-teal-300 text-sm font-medium">{mod.value}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default function CoreBusiness() {
  const { language } = useLanguage();

  const coreBusinessData = language === 'zh' ? CORE_BUSINESS : {
    subtitle: 'Core Business',
    title: 'Three Core Businesses',
    sections: [
      {
        id: 'systems',
        name: 'Heat Transfer Systems',
        nameEn: '热转印设备',
        color: 'blue',
        positioning: 'Main Revenue Driver',
        task: 'Provide complete heat transfer equipment solutions, covering various application scenarios',
        channels: [
          { name: 'E-commerce', tag: 'Online', target: 'Global B2B/B2C', strategy: 'Multi-platform operation, professional store management' },
          { name: 'Offline', tag: 'Physical', target: 'Domestic distributors', strategy: 'Regional partner expansion, experience centers' },
          { name: 'Cross-border', tag: 'Export', target: 'Global markets', strategy: 'Amazon, AliExpress, independent sites' }
        ],
        scenarios: ['Apparel', 'Home Decor', 'Promo Gifts', 'Sports Goods', 'Electronics', 'Toys', 'Cosmetics', 'Food Packaging', 'Auto Parts', 'Office Supplies', 'Crafts', 'Souvenirs']
      },
      {
        id: 'components',
        name: 'Core Components',
        nameEn: '核心零部件',
        color: 'purple',
        positioning: 'Technology Barrier',
        task: 'Self-developed core components, ensuring product quality and competitiveness',
        capabilities: [
          { name: 'Control Board', desc: 'Smart Control' },
          { name: 'Heating Module', desc: 'Stable Heating' },
          { name: 'Mechanical Structure', desc: 'Precision Design' },
          { name: 'Software System', desc: 'User Friendly' },
          { name: 'Safety Protection', desc: 'Reliable' },
          { name: 'Energy Saving', desc: 'Green Tech' }
        ],
        production: ['PCB Assembly', 'Mechanical Processing', 'Quality Testing', 'Warehouse Logistics'],
        business: [
          { type: 'OEM Manufacturing', desc: 'Provide OEM services for global brands' },
          { type: 'ODM Development', desc: 'Customized product development' },
          { type: 'Technical Consultation', desc: 'Provide professional technical support' }
        ],
        value: 'Core technology autonomy, ensuring product stability and long-term competitiveness'
      },
      {
        id: 'consumables',
        name: 'Consumables',
        nameEn: '耗材与服务',
        color: 'teal',
        positioning: 'Profit Engine',
        task: 'Complete consumables supply chain, creating recurring revenue streams',
        modules: [
          { name: 'Heat Transfer Film', tag: 'High Margin', products: 'PU film, PET film, special films', strategy: 'High-quality products, competitive pricing', value: 'Profit Margin: 35-45%' },
          { name: 'Ink & Toner', tag: 'Recurring', products: 'Sublimation ink, toner cartridges', strategy: 'Continuous supply, loyalty program', value: 'Recurring Revenue' },
          { name: 'Accessories', tag: 'Complementary', products: 'Print heads, rollers, spare parts', strategy: 'Complete product line', value: 'Customer Stickiness' },
          { name: 'After-sales', tag: 'Service', products: 'Maintenance, repair, training', strategy: 'Professional service team', value: 'Customer Lifetime Value' }
        ]
      }
    ]
  };

  return (
    <section id="core-business" className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-500/20 text-primary-400 text-sm font-medium mb-4">
            {coreBusinessData.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4">
            {coreBusinessData.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {coreBusinessData.sections.map((section, index) => (
            <BusinessCard key={section.id} section={section} index={index} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}
