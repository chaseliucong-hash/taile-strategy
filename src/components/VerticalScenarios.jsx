import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Users, ShoppingBag, Target, Package, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react';
import { VERTICAL_SCENARIOS } from '../constants';
import { VERTICAL_SCENARIOS_EN } from '../constants.en';
import StartupMatcher from './StartupMatcher';
import { useLanguage } from '../i18n';

const tagColorsZh = {
  '高复购': 'bg-green-500/20 text-green-300 border-green-500/30',
  '低成本': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  '快速回本': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  '高溢价': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  '政府合作': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  '标杆案例': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  '体验经济': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  '全年龄段': 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  '双重盈利': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  '高粘性': 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  '长复购周期': 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  '情感消费': 'bg-red-500/20 text-red-300 border-red-500/30',
  'Z世代': 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
  '高利润': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  '网红赛道': 'bg-lime-500/20 text-lime-300 border-lime-500/30',
  '家装刚需': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  '差异化': 'bg-sky-500/20 text-sky-300 border-sky-500/30',
  '高客单': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  '集中爆发': 'bg-red-500/20 text-red-300 border-red-500/30',
  '快速回款': 'bg-green-500/20 text-green-300 border-green-500/30',
  '轻资产': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'B端稳定': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  '高客单价': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  '持续复购': 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  '仪式感': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  '蓝海赛道': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  '极小占地': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  '即时成交': 'bg-green-500/20 text-green-300 border-green-500/30',
  '无库存': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  '低门槛': 'bg-gray-500/20 text-gray-300 border-gray-500/30',
  '政企合作': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  '批量落地': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
};

const tagColorsEn = {
  'High Repurchase': 'bg-green-500/20 text-green-300 border-green-500/30',
  'Low Cost': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Quick ROI': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'High Premium': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Government Cooperation': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  'Benchmark Case': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  'Experience Economy': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  'All Ages': 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  'Dual Profit': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'High Stickiness': 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  'Long Repurchase Cycle': 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  'Emotional Consumption': 'bg-red-500/20 text-red-300 border-red-500/30',
  'Gen Z': 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
  'High Profit': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  'Viral Track': 'bg-lime-500/20 text-lime-300 border-lime-500/30',
  'Home Decoration Demand': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'Differentiation': 'bg-sky-500/20 text-sky-300 border-sky-500/30',
  'High Order Value': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'Concentrated Outbreak': 'bg-red-500/20 text-red-300 border-red-500/30',
  'Fast Cash Return': 'bg-green-500/20 text-green-300 border-green-500/30',
  'Light Asset': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'B2B Stable': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  'Continuous Repurchase': 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  'Ritual Sense': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  'Blue Ocean Track': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  'Minimal Space': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'Instant Deal': 'bg-green-500/20 text-green-300 border-green-500/30',
  'No Inventory': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Low Threshold': 'bg-gray-500/20 text-gray-300 border-gray-500/30',
  'Government-Enterprise Cooperation': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  'Mass Implementation': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
};

function ScenarioCard({ scenario, index, onClick, isSelected, language }) {
  const tagColors = language === 'zh' ? tagColorsZh : tagColorsEn;
  
  return (
    <motion.div
      className={`relative group cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${isSelected ? 'border-primary-500/60 shadow-lg shadow-primary-500/20' : 'border-slate-700/50 hover:border-slate-600/50'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      whileHover={{ y: -4 }}
    >
      <div className="relative h-40 overflow-hidden">
        <img 
          src={scenario.image} 
          alt={scenario.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10" />
        <div className="absolute top-3 right-3 z-20">
          <span className="px-2 py-1 rounded-lg bg-black/40 backdrop-blur-sm text-white/80 text-xs font-medium">
            {language === 'zh' ? '套餐' : 'Plan'}{String(scenario.id).padStart(2, '0')}
          </span>
        </div>
        <div className="absolute bottom-3 left-4 right-4 z-20">
          <h3 className="text-lg font-bold text-white drop-shadow-lg">{scenario.name}</h3>
        </div>
      </div>
      
      <div className="p-4 bg-slate-900/80">
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{scenario.sellingPoint}</p>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {scenario.tags.map((tag, i) => (
            <span key={i} className={`px-2 py-0.5 rounded-full text-xs border ${tagColors[tag] || 'bg-slate-500/20 text-slate-300 border-slate-500/30'}`}>
              {tag}
            </span>
          ))}
        </div>
        
        <button className="w-full py-2.5 rounded-xl bg-primary-500/20 text-primary-400 text-sm font-medium flex items-center justify-center gap-2 group-hover:bg-primary-500/30 transition-all duration-300">
          {language === 'zh' ? '查看赚钱方案' : 'View Profit Plan'}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

function ScenarioDetail({ scenario, onClose, language }) {
  const tagColors = language === 'zh' ? tagColorsZh : tagColorsEn;
  
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 rounded-2xl border border-slate-700/50 shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 p-6 flex items-center justify-between">
          <div>
            <span className="text-primary-400 text-sm font-medium">{language === 'zh' ? '套餐' : 'Plan'}{scenario.id}</span>
            <h2 className="text-2xl font-bold text-white mt-1">{scenario.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex flex-wrap gap-2">
            {scenario.tags.map((tag, i) => (
              <span key={i} className={`px-3 py-1 rounded-full text-sm border ${tagColors[tag] || 'bg-slate-500/20 text-slate-300 border-slate-500/30'}`}>
                {tag}
              </span>
            ))}
          </div>
          
          <div className="p-4 bg-primary-500/10 border border-primary-500/20 rounded-xl">
            <p className="text-primary-300 font-medium">{scenario.sellingPoint}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/30">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">{language === 'zh' ? '适配渠道' : 'Suitable Channels'}</span>
              </div>
              <p className="text-gray-400 text-sm">{scenario.channels}</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/30">
              <div className="flex items-center gap-2 mb-2">
                <ShoppingBag className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">{language === 'zh' ? '经营模式' : 'Business Model'}</span>
              </div>
              <p className="text-gray-400 text-sm">{scenario.model}</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/30">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-teal-400" />
                <span className="text-white font-medium">{language === 'zh' ? '核心定制品类' : 'Core Customization Categories'}</span>
              </div>
              <p className="text-gray-400 text-sm">{scenario.products}</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/30">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">{language === 'zh' ? '精准客户' : 'Target Customers'}</span>
              </div>
              <p className="text-gray-400 text-sm">{scenario.customers}</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-xl p-4 border border-green-500/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">{language === 'zh' ? '核心盈利卖点' : 'Core Profit Selling Points'}</span>
            </div>
            <p className="text-gray-300 text-sm">{scenario.profit}</p>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">{language === 'zh' ? '落地策略' : 'Implementation Strategy'}</span>
            </div>
            <p className="text-gray-300 text-sm">{scenario.strategy}</p>
          </div>
          
          <div className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-xl p-5 border border-primary-500/20">
            <div className="flex items-center gap-2 mb-3">
              <Package className="w-5 h-5 text-primary-400" />
              <span className="text-white font-medium">{language === 'zh' ? '合作套餐' : 'Cooperation Package'}</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">{scenario.package}</p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                {language === 'zh' ? '立即咨询合作' : 'Consult Now'}
              </button>
              <button className="flex-1 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-medium transition-colors">
                {language === 'zh' ? '获取详细方案' : 'Get Detailed Plan'}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function VerticalScenarios() {
  const [selectedScenario, setSelectedScenario] = useState(null);
  const { language } = useLanguage();
  
  const scenariosData = language === 'zh' ? VERTICAL_SCENARIOS : VERTICAL_SCENARIOS_EN;

  const handleViewScenario = (scenarioId) => {
    const scenario = scenariosData.scenarios.find(s => s.id === scenarioId);
    if (scenario) {
      setSelectedScenario(scenario);
    }
  };

  return (
    <section id="scenarios" className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-500/20 text-primary-400 text-sm font-medium mb-4">
            {scenariosData.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4">
            {scenariosData.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {language === 'zh' ? '12套全场景标准化创业套餐，全覆盖、可直接做生态辐射分支' : '12 full-scenario standardized startup packages, fully covered, ready for ecosystem expansion'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {scenariosData.scenarios.map((scenario, index) => (
            <ScenarioCard
              key={scenario.id}
              scenario={scenario}
              index={index}
              onClick={() => setSelectedScenario(scenario)}
              isSelected={selectedScenario?.id === scenario.id}
              language={language}
            />
          ))}
        </div>
        
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div id="startup-matcher" className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-primary-500/20 p-8">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-500/20 text-primary-400 text-sm font-medium mb-4">
                {language === 'zh' ? '智能匹配' : 'Smart Matching'}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                {language === 'zh' ? '30秒创业项目匹配引擎' : '30-second Startup Matching Engine'}
              </h3>
              <p className="text-gray-400">
                {language === 'zh' ? '通过简单问答，为您匹配最适合的创业项目' : 'Answer a few questions to find your ideal startup project'}
              </p>
            </div>
            <StartupMatcher onViewScenario={handleViewScenario} language={language} />
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedScenario && (
          <ScenarioDetail
            scenario={selectedScenario}
            onClose={() => setSelectedScenario(null)}
            language={language}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
