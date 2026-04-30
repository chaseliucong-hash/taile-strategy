import { motion } from 'framer-motion';
import { TrendingUp, Target, DollarSign, ShieldCheck, Zap, TrendingDown, AlertTriangle, CheckCircle, XCircle, ChevronRight, Eye, Lock } from 'lucide-react';
import { useState, useEffect, useRef, useMemo } from 'react';
import { useLanguage } from '../i18n';

const PricePopup = ({ retail, wholesale, language = 'zh' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const hideTimerRef = useRef(null);

  useEffect(() => {
    if (isHovering && !isVisible) {
      let elapsed = 0;
      progressRef.current = setInterval(() => {
        elapsed += 50;
        setProgress((elapsed / 3000) * 100);
      }, 50);

      timerRef.current = setTimeout(() => {
        setIsVisible(true);
        clearInterval(progressRef.current);
      }, 3000);
    } else {
      clearTimeout(timerRef.current);
      clearInterval(progressRef.current);
      setProgress(0);
    }

    return () => {
      clearTimeout(timerRef.current);
      clearInterval(progressRef.current);
    };
  }, [isHovering]);

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (!isVisible) {
      setProgress(0);
    } else {
      hideTimerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 1500);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    clearTimeout(hideTimerRef.current);
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-zinc-400 cursor-pointer">
        <span>¥{retail}</span>
      </div>

      {isHovering && !isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50"
        >
          <div className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 shadow-xl min-w-[80px]">
            <div className="w-full h-1 bg-zinc-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-emerald-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 border-l border-t border-zinc-700 rotate-45" />
        </motion.div>
      )}

      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50"
        >
          <div className="bg-gradient-to-br from-emerald-500/20 to-green-600/20 border border-emerald-500/30 rounded-lg px-4 py-3 shadow-xl min-w-[120px]">
            <div className="text-xs text-zinc-400 mb-1">{language === 'zh' ? '批发价' : 'Wholesale'}</div>
            <div className="text-2xl font-bold text-emerald-400">¥{wholesale}</div>
            <div className="text-xs text-zinc-500 mt-1">{language === 'zh' ? '利润' : 'Profit'}: ¥{retail - wholesale}</div>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gradient-to-br from-emerald-500/20 to-green-600/20 border-l border-t border-emerald-500/30 rotate-45" />
        </motion.div>
      )}
    </div>
  );
};

const HiddenPrice = ({ price, label = "批发价", language = 'zh' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const hideTimerRef = useRef(null);

  useEffect(() => {
    if (isHovering && !isVisible) {
      let elapsed = 0;
      progressRef.current = setInterval(() => {
        elapsed += 50;
        setProgress((elapsed / 3000) * 100);
      }, 50);

      timerRef.current = setTimeout(() => {
        setIsVisible(true);
        clearInterval(progressRef.current);
      }, 3000);
    } else {
      clearTimeout(timerRef.current);
      clearInterval(progressRef.current);
      setProgress(0);
    }

    return () => {
      clearTimeout(timerRef.current);
      clearInterval(progressRef.current);
    };
  }, [isHovering]);

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (!isVisible) {
      setProgress(0);
    } else {
      hideTimerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 1500);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    clearTimeout(hideTimerRef.current);
  };

  return (
    <div 
      className="text-right min-w-[100px] relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-white font-medium">¥{price}</div>
          <div className="text-zinc-500 text-sm">{language === 'zh' ? '批发价' : 'Wholesale'}</div>
        </motion.div>
      ) : (
        <div className="relative">
          <div className="flex items-center justify-end gap-1.5 text-zinc-600">
            <Lock className="w-3.5 h-3.5" />
            <span className="font-medium">•••••</span>
          </div>
          <div className="text-zinc-600 text-sm">{language === 'zh' ? '批发价' : 'Wholesale'}</div>
          
          {isHovering && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-xs text-zinc-400">
                <Eye className="w-3 h-3" />
                <span>{language === 'zh' ? `悬停 ${Math.ceil((100 - progress) / 33.3)}秒查看` : `Hover ${Math.ceil((100 - progress) / 33.3)}s to view`}</span>
              </div>
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 border-l border-t border-zinc-700 rotate-45" />
            </motion.div>
          )}
          
          {isHovering && (
            <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-zinc-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-emerald-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const PRODUCT_DATA_ZH = [
  { name: 'mini摩天轮', category: '迷你设备', wholesale: 80, retail: 120, grossMargin: 33.33, certification: true, patent: '外观专利', color: '白红、黑', isTop: true },
  { name: '便携式', category: '便携式设备', wholesale: 268, retail: 330, grossMargin: 18.79, certification: true, patent: '发明专利', color: '白红', isTop: true },
  { name: '高尔夫烤帽机', category: '烤帽机', wholesale: 340, retail: 380, grossMargin: 10.53, certification: true, patent: '外观专利', color: '黑' },
  { name: '高尔夫四合一烤帽机', category: '烤帽机', wholesale: 420, retail: 450, grossMargin: 6.67, certification: true, patent: '外观专利', color: '黑' },
  { name: '立威抽拉火狐平板机', category: '平板机', wholesale: 450, retail: 500, grossMargin: 10.0, certification: true, patent: false, color: '黑' },
  { name: '3838平板机', category: '平板机', wholesale: 390, retail: 450, grossMargin: 13.33, certification: true, patent: false, color: '黑', isTop: true },
  { name: '4060平板机', category: '平板机', wholesale: 680, retail: 750, grossMargin: 9.33, certification: true, patent: false, color: '黑' },
  { name: '4050平板机', category: '平板机', wholesale: 660, retail: 700, grossMargin: 5.71, certification: true, patent: false, color: '黑' },
  { name: '2938五合一组合机 分体式', category: '组合机', wholesale: 500, retail: 550, grossMargin: 9.09, certification: true, patent: '发明专利', color: '黑' },
  { name: '2938五合一组合机', category: '组合机', wholesale: 460, retail: 540, grossMargin: 14.81, certification: true, patent: '钣金外观无。塑料外观有外观专利', color: '黑', isTop: true },
  { name: '29*38八合一组合机', category: '组合机', wholesale: 680, retail: 720, grossMargin: 5.56, certification: true, patent: false, color: '黑' },
  { name: '38*38五合一组合机', category: '组合机', wholesale: 600, retail: 660, grossMargin: 9.09, certification: true, patent: false, color: '黑' },
  { name: '38*38八合一组合机', category: '组合机', wholesale: 780, retail: 840, grossMargin: 7.14, certification: true, patent: false, color: '黑' },
  { name: '腾空烤杯机', category: '烤杯机', wholesale: 140, retail: 160, grossMargin: 12.5, certification: false, patent: false, color: '黑', isTop: true },
  { name: '五表五合一烤杯机', category: '烤杯机', wholesale: 900, retail: 1000, grossMargin: 10.0, certification: false, patent: false, color: '黑' },
  { name: '水晶机11W', category: '水晶机', wholesale: 420, retail: 450, grossMargin: 6.67, certification: false, patent: false, color: '黑' },
  { name: '23*30主机', category: '主机', wholesale: 320, retail: 350, grossMargin: 8.57, certification: true, patent: false, color: '黑' },
  { name: '29*38主机', category: '主机', wholesale: 360, retail: 400, grossMargin: 10.0, certification: true, patent: false, color: '黑' },
  { name: '双星烤杯机', category: '烤杯机', wholesale: 450, retail: 500, grossMargin: 10.0, certification: true, patent: false, color: '绿' },
  { name: '喜悦烤杯机', category: '烤杯机', wholesale: 270, retail: 300, grossMargin: 10.0, certification: true, patent: '外观专利', color: '黑' },
];

const PRODUCT_DATA_EN = [
  { name: 'Mini Ferris Wheel', category: 'Mini Device', wholesale: 80, retail: 120, grossMargin: 33.33, certification: true, patent: 'Design Patent', color: 'White-Red, Black', isTop: true },
  { name: 'Portable Machine', category: 'Portable Device', wholesale: 268, retail: 330, grossMargin: 18.79, certification: true, patent: 'Invention Patent', color: 'White-Red', isTop: true },
  { name: 'Golf Cap Press', category: 'Cap Press', wholesale: 340, retail: 380, grossMargin: 10.53, certification: true, patent: 'Design Patent', color: 'Black' },
  { name: 'Golf 4-in-1 Cap Press', category: 'Cap Press', wholesale: 420, retail: 450, grossMargin: 6.67, certification: true, patent: 'Design Patent', color: 'Black' },
  { name: 'Liwei Slide Fox Press', category: 'Flat Press', wholesale: 450, retail: 500, grossMargin: 10.0, certification: true, patent: false, color: 'Black' },
  { name: '3838 Flat Press', category: 'Flat Press', wholesale: 390, retail: 450, grossMargin: 13.33, certification: true, patent: false, color: 'Black', isTop: true },
  { name: '4060 Flat Press', category: 'Flat Press', wholesale: 680, retail: 750, grossMargin: 9.33, certification: true, patent: false, color: 'Black' },
  { name: '4050 Flat Press', category: 'Flat Press', wholesale: 660, retail: 700, grossMargin: 5.71, certification: true, patent: false, color: 'Black' },
  { name: '2938 5-in-1 Combo Split', category: 'Combo Machine', wholesale: 500, retail: 550, grossMargin: 9.09, certification: true, patent: 'Invention Patent', color: 'Black' },
  { name: '2938 5-in-1 Combo', category: 'Combo Machine', wholesale: 460, retail: 540, grossMargin: 14.81, certification: true, patent: 'Design Patent (Plastic)', color: 'Black', isTop: true },
  { name: '29*38 8-in-1 Combo', category: 'Combo Machine', wholesale: 680, retail: 720, grossMargin: 5.56, certification: true, patent: false, color: 'Black' },
  { name: '38*38 5-in-1 Combo', category: 'Combo Machine', wholesale: 600, retail: 660, grossMargin: 9.09, certification: true, patent: false, color: 'Black' },
  { name: '38*38 8-in-1 Combo', category: 'Combo Machine', wholesale: 780, retail: 840, grossMargin: 7.14, certification: true, patent: false, color: 'Black' },
  { name: 'Air Mug Press', category: 'Mug Press', wholesale: 140, retail: 160, grossMargin: 12.5, certification: false, patent: false, color: 'Black', isTop: true },
  { name: '5-Gauge 5-in-1 Mug Press', category: 'Mug Press', wholesale: 900, retail: 1000, grossMargin: 10.0, certification: false, patent: false, color: 'Black' },
  { name: 'Crystal Machine 11W', category: 'Crystal Machine', wholesale: 420, retail: 450, grossMargin: 6.67, certification: false, patent: false, color: 'Black' },
  { name: '23*30 Main Unit', category: 'Main Unit', wholesale: 320, retail: 350, grossMargin: 8.57, certification: true, patent: false, color: 'Black' },
  { name: '29*38 Main Unit', category: 'Main Unit', wholesale: 360, retail: 400, grossMargin: 10.0, certification: true, patent: false, color: 'Black' },
  { name: 'Twin Star Mug Press', category: 'Mug Press', wholesale: 450, retail: 500, grossMargin: 10.0, certification: true, patent: false, color: 'Green' },
  { name: 'Joy Mug Press', category: 'Mug Press', wholesale: 270, retail: 300, grossMargin: 10.0, certification: true, patent: 'Design Patent', color: 'Black' },
];

const CATEGORY_DATA_ZH = [
  { name: '组合机', count: 5, ratio: 25.0, avgWholesale: 604, avgRetail: 662, avgGrossMargin: 9.14 },
  { name: '烤杯机', count: 4, ratio: 20.0, avgWholesale: 440, avgRetail: 490, avgGrossMargin: 10.62 },
  { name: '平板机', count: 4, ratio: 20.0, avgWholesale: 545, avgRetail: 600, avgGrossMargin: 9.59 },
  { name: '主机', count: 2, ratio: 10.0, avgWholesale: 340, avgRetail: 375, avgGrossMargin: 9.28 },
  { name: '烤帽机', count: 2, ratio: 10.0, avgWholesale: 380, avgRetail: 415, avgGrossMargin: 8.60 },
  { name: '便携式设备', count: 1, ratio: 5.0, avgWholesale: 268, avgRetail: 330, avgGrossMargin: 18.79 },
  { name: '水晶机', count: 1, ratio: 5.0, avgWholesale: 420, avgRetail: 450, avgGrossMargin: 6.67 },
  { name: '迷你设备', count: 1, ratio: 5.0, avgWholesale: 80, avgRetail: 120, avgGrossMargin: 33.33 },
];

const CATEGORY_DATA_EN = [
  { name: 'Combo Machine', count: 5, ratio: 25.0, avgWholesale: 604, avgRetail: 662, avgGrossMargin: 9.14 },
  { name: 'Mug Press', count: 4, ratio: 20.0, avgWholesale: 440, avgRetail: 490, avgGrossMargin: 10.62 },
  { name: 'Flat Press', count: 4, ratio: 20.0, avgWholesale: 545, avgRetail: 600, avgGrossMargin: 9.59 },
  { name: 'Main Unit', count: 2, ratio: 10.0, avgWholesale: 340, avgRetail: 375, avgGrossMargin: 9.28 },
  { name: 'Cap Press', count: 2, ratio: 10.0, avgWholesale: 380, avgRetail: 415, avgGrossMargin: 8.60 },
  { name: 'Portable Device', count: 1, ratio: 5.0, avgWholesale: 268, avgRetail: 330, avgGrossMargin: 18.79 },
  { name: 'Crystal Machine', count: 1, ratio: 5.0, avgWholesale: 420, avgRetail: 450, avgGrossMargin: 6.67 },
  { name: 'Mini Device', count: 1, ratio: 5.0, avgWholesale: 80, avgRetail: 120, avgGrossMargin: 33.33 },
];

const MAX_COUNT = 5;

export default function ProductPricingSystem() {
  const { language } = useLanguage();
  
  const PRODUCT_DATA = language === 'zh' ? PRODUCT_DATA_ZH : PRODUCT_DATA_EN;
  const CATEGORY_DATA = language === 'zh' ? CATEGORY_DATA_ZH : CATEGORY_DATA_EN;
  
  const TOP_5_PRODUCTS = useMemo(() => {
    return PRODUCT_DATA
      .filter(p => p.isTop)
      .sort((a, b) => b.grossMargin - a.grossMargin)
      .slice(0, 5);
  }, [PRODUCT_DATA]);

  const stats = language === 'zh' ? [
    { label: '平均毛利率', value: '10.2%', sub: '中位数 9.7%', color: 'text-emerald-500', icon: TrendingUp },
    { label: '价格区间', value: '￥80 - 1000', sub: '梯度分布合理', color: 'text-blue-500', icon: DollarSign },
    { label: '合规水平', value: '85%', sub: '17款已获认证', color: 'text-indigo-500', icon: ShieldCheck },
    { label: '核心盘位', value: '中高端 60%', sub: '400元以上产品为主', color: 'text-purple-500', icon: Target },
  ] : [
    { label: 'Avg Gross Margin', value: '10.2%', sub: 'Median 9.7%', color: 'text-emerald-500', icon: TrendingUp },
    { label: 'Price Range', value: '￥80 - 1000', sub: 'Well distributed', color: 'text-blue-500', icon: DollarSign },
    { label: 'Compliance', value: '85%', sub: '17 products certified', color: 'text-indigo-500', icon: ShieldCheck },
    { label: 'Core Position', value: 'Mid-high 60%', sub: 'Products above ¥400', color: 'text-purple-500', icon: Target },
  ];

  const strategyItems = language === 'zh' ? [
    { icon: TrendingUp, title: '重点推广', desc: 'mini摩天轮、便携式设备', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
    { icon: AlertTriangle, title: '风险规避', desc: '补齐 3 款无认证产品的证书', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
    { icon: Zap, title: '视觉优化', desc: '85% 黑色，建议增加个性化配色', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  ] : [
    { icon: TrendingUp, title: 'Focus Promotion', desc: 'Mini Ferris Wheel, Portable Devices', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
    { icon: AlertTriangle, title: 'Risk Avoidance', desc: 'Certify 3 uncertified products', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
    { icon: Zap, title: 'Visual Optimization', desc: '85% black, suggest personalized colors', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  ];

  return (
    <section id="pricing-system" className="py-16 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-zinc-800 text-zinc-400 text-sm font-medium mb-4 border border-zinc-700">
            {language === 'zh' ? '0416版产品分析报告' : 'Product Analysis Report v0416'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {language === 'zh' ? '赚钱模型验证' : 'Profit Model Verification'}
          </h2>
          <p className="text-zinc-500 text-lg">
            {language === 'zh' ? '一套已经验证的产品结构，支撑稳定盈利' : 'A verified product structure supporting stable profits'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 rounded-xl p-5 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className={`w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-white font-medium mb-1">{stat.label}</div>
              <div className="text-zinc-500 text-xs">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 bg-zinc-900 rounded-xl p-6 border border-zinc-800"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-white font-semibold text-lg">{language === 'zh' ? '毛利率 Top 5' : 'Top 5 Gross Margin'}</h3>
                <p className="text-zinc-500 text-sm">{language === 'zh' ? '明星产品 · 利润担当' : 'Star Products · Profit Leaders'}</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <div className="space-y-4">
              {TOP_5_PRODUCTS.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${index === 0 ? 'bg-amber-500 text-zinc-950' : index === 1 ? 'bg-zinc-400 text-zinc-950' : index === 2 ? 'bg-amber-700 text-white' : 'bg-zinc-700 text-zinc-300'}`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium">{product.name}</div>
                    <div className="text-zinc-500 text-sm">{product.category}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xl font-bold ${product.grossMargin > 15 ? 'text-emerald-400' : product.grossMargin > 10 ? 'text-blue-400' : 'text-zinc-400'}`}>
                      {product.grossMargin}%
                    </div>
                    <div className="text-zinc-500 text-sm">{language === 'zh' ? '毛利率' : 'Gross Margin'}</div>
                  </div>
                  <HiddenPrice price={product.wholesale} language={language} />
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-emerald-500/10 to-green-600/10 border border-emerald-500/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400">33.33%</div>
                  <div className="text-white font-medium">{language === 'zh' ? 'mini摩天轮 · 最高毛利率' : 'Mini Ferris Wheel · Highest Margin'}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900 rounded-xl p-6 border border-zinc-800"
          >
            <h3 className="text-white font-semibold text-lg mb-6">{language === 'zh' ? '专利健康度' : 'Patent Health'}</h3>
            
            <div className="relative w-48 h-48 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#27272a" strokeWidth="12" />
                <motion.circle
                  cx="50" cy="50" r="40"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="12"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 0.35 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-emerald-400">35%</div>
                <div className="text-zinc-500 text-sm">{language === 'zh' ? '专利覆盖率' : 'Patent Coverage'}</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <div>
                  <div className="text-amber-400 font-medium">{language === 'zh' ? '13项专利待布局' : '13 Patents Pending'}</div>
                  <div className="text-zinc-500 text-xs">{language === 'zh' ? '存在知识产权风险' : 'IP risk exists'}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="text-white text-sm">{language === 'zh' ? '7项已有专利' : '7 Existing Patents'}</div>
                  <div className="text-zinc-500 text-xs">{language === 'zh' ? '4个外观 · 2个发明 · 1个混合' : '4 Design · 2 Invention · 1 Mixed'}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 mb-8"
        >
          <h3 className="text-white font-semibold text-lg mb-6">{language === 'zh' ? '产品分类分布' : 'Category Distribution'}</h3>
          <div className="space-y-3">
            {CATEGORY_DATA.map((cat, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">{cat.name}</span>
                    <span className="text-zinc-500">{cat.count}{language === 'zh' ? '款' : ' products'}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`font-medium ${cat.avgGrossMargin > 12 ? 'text-emerald-400' : cat.avgGrossMargin > 8 ? 'text-blue-400' : 'text-zinc-400'}`}>
                      {cat.avgGrossMargin.toFixed(2)}%
                    </span>
                    <span className="text-zinc-500">¥{cat.avgWholesale}</span>
                  </div>
                </div>
                <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(cat.count / MAX_COUNT) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className={`h-full rounded-full ${cat.avgGrossMargin > 12 ? 'bg-emerald-500' : cat.avgGrossMargin > 8 ? 'bg-blue-500' : 'bg-zinc-600'}`}
                    style={{ opacity: 0.4 + (cat.avgGrossMargin / 40) }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 mb-8"
        >
          <h3 className="text-white font-semibold text-lg mb-6">{language === 'zh' ? '策略看板' : 'Strategy Board'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {strategyItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`p-5 rounded-xl border transition-all cursor-pointer ${item.color}`}
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="text-white font-semibold mb-2">{item.title}</div>
                <div className="text-zinc-400 text-sm">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden"
        >
          <div className="p-6 border-b border-zinc-800">
            <h3 className="text-white font-semibold text-lg">{language === 'zh' ? '产品详情表' : 'Product Details'}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-800/50">
                <tr>
                  <th className="text-left text-zinc-400 text-xs font-medium px-6 py-4 uppercase tracking-wider">{language === 'zh' ? '产品名称' : 'Product Name'}</th>
                  <th className="text-left text-zinc-400 text-xs font-medium px-6 py-4 uppercase tracking-wider">{language === 'zh' ? '分类' : 'Category'}</th>
                  <th className="text-right text-zinc-400 text-xs font-medium px-6 py-4 uppercase tracking-wider">{language === 'zh' ? '零售价' : 'Retail Price'}</th>
                  <th className="text-right text-zinc-400 text-xs font-medium px-6 py-4 uppercase tracking-wider">{language === 'zh' ? '毛利率' : 'Gross Margin'}</th>
                  <th className="text-center text-zinc-400 text-xs font-medium px-6 py-4 uppercase tracking-wider">{language === 'zh' ? '认证' : 'Certification'}</th>
                  <th className="text-center text-zinc-400 text-xs font-medium px-6 py-4 uppercase tracking-wider">{language === 'zh' ? '专利' : 'Patent'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {PRODUCT_DATA.map((product, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55 + index * 0.02 }}
                    className={`hover:bg-zinc-800/50 transition-colors ${product.isTop ? 'bg-emerald-500/5' : ''}`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {product.isTop && <TrendingUp className="w-4 h-4 text-emerald-400" />}
                        <span className="text-white font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-zinc-400">{product.category}</td>
                    <td className="px-6 py-4 text-right">
                      <PricePopup retail={product.retail} wholesale={product.wholesale} language={language} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className={`font-semibold ${product.grossMargin > 15 ? 'text-emerald-400' : product.grossMargin > 10 ? 'text-blue-400' : product.grossMargin > 6 ? 'text-zinc-300' : 'text-zinc-500'}`}>
                        {product.grossMargin}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {product.certification ? (
                        <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-amber-500 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {product.patent ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          {language === 'zh' ? '有' : 'Yes'}
                        </span>
                      ) : (
                        <span className="text-zinc-600 text-sm">—</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 p-6 rounded-xl bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {language === 'zh' ? '这不是产品，而是一套已经验证的赚钱模型' : 'This is not just products, but a verified profit model'}
              </h3>
              <p className="text-zinc-400">{language === 'zh' ? '基于20个产品的完整数据分析报告 · 2024年04月16日' : 'Complete data analysis report based on 20 products · April 16, 2024'}</p>
            </div>
            <div className="flex items-center gap-3">
              <ChevronRight className="w-6 h-6 text-zinc-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
