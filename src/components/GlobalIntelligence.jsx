import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRANDS_DATA, CATEGORIES, COMPETITOR_DATA, SUMMARY_DATA } from '../constants';
import { BRANDS_DATA_EN, CATEGORIES_EN, COMPETITOR_DATA_EN, SUMMARY_DATA_EN } from '../constants.en';
import { useLanguage } from '../i18n';

const categoryColors = [
  { header: 'bg-blue-900/40 border-blue-500/50', row: 'bg-blue-900/10', label: 'border-l-blue-500', bar: 'bg-blue-500' },
  { header: 'bg-teal-900/40 border-teal-500/50', row: 'bg-teal-900/10', label: 'border-l-teal-500', bar: 'bg-teal-500' },
  { header: 'bg-amber-900/40 border-amber-500/50', row: 'bg-amber-900/10', label: 'border-l-amber-500', bar: 'bg-amber-500' },
  { header: 'bg-purple-900/40 border-purple-500/50', row: 'bg-purple-900/10', label: 'border-l-purple-500', bar: 'bg-purple-500' },
  { header: 'bg-pink-900/40 border-pink-500/50', row: 'bg-pink-900/10', label: 'border-l-pink-500', bar: 'bg-pink-500' },
  { header: 'bg-cyan-900/40 border-cyan-500/50', row: 'bg-cyan-900/10', label: 'border-l-cyan-500', bar: 'bg-cyan-500' },
  { header: 'bg-orange-900/40 border-orange-500/50', row: 'bg-orange-900/10', label: 'border-l-orange-500', bar: 'bg-orange-500' },
  { header: 'bg-green-900/40 border-green-500/50', row: 'bg-green-900/10', label: 'border-l-green-500', bar: 'bg-green-500' },
  { header: 'bg-red-900/40 border-red-500/50', row: 'bg-red-900/10', label: 'border-l-red-500', bar: 'bg-red-500' },
  { header: 'bg-indigo-900/40 border-indigo-500/50', row: 'bg-indigo-900/10', label: 'border-l-indigo-500', bar: 'bg-indigo-500' },
  { header: 'bg-gray-900/40 border-gray-500/50', row: 'bg-gray-900/10', label: 'border-l-gray-500', bar: 'bg-gray-500' },
];

export default function GlobalIntelligence() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredColumn, setHoveredColumn] = useState(null);
  const { language } = useLanguage();
  
  const brandsData = language === 'zh' ? BRANDS_DATA : BRANDS_DATA_EN;
  const categoriesData = language === 'zh' ? CATEGORIES : CATEGORIES_EN;
  const competitorData = language === 'zh' ? COMPETITOR_DATA : COMPETITOR_DATA_EN;
  const summaryData = language === 'zh' ? SUMMARY_DATA : SUMMARY_DATA_EN;

  return (
    <section className="min-h-screen px-4 py-16" id="competitor">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium mb-4">
            {language === 'zh' ? '全球竞品分析' : 'Global Competitor Analysis'}
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-gradient mb-4">
            {language === 'zh' ? '全球情报' : 'Global Intelligence'}
          </h2>
          <p className="text-gray-400 text-lg">
            {language === 'zh' ? '五大品牌热转印设备全品类对比表' : 'Comprehensive comparison of five major heat transfer equipment brands'}
          </p>
        </motion.div>

        <motion.div
          className="glass-effect rounded-xl p-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <div className="text-lg font-semibold">{language === 'zh' ? '五大热转印品牌全品类对比' : 'Comprehensive Comparison of Five Heat Transfer Brands'}</div>
              <div className="text-sm text-gray-400">
                {language === 'zh' ? 'Cricut · 乐立克 LOKLiK · 尚美特 · 画王 COLOR KING · 泰乐 | 11大产品维度' : 'Cricut · LOKLiK · Shangmeite · COLOR KING · Taile | 11 Product Dimensions'}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {brandsData.map((brand, index) => (
              <motion.div
                key={brand.name}
                className="bg-slate-800/50 rounded-lg p-3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: brand.color }}></span>
                  <span className="font-semibold text-sm">{brand.name}</span>
                </div>
                <div className="text-xs text-gray-400 mb-2">{brand.origin}</div>
                <div className="space-y-1">
                  {brand.strength.map((s, i) => (
                    <div key={i} className="text-xs text-gray-300">{s}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categoriesData.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="glass-effect rounded-xl overflow-hidden border border-slate-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="bg-slate-900">
                <th className="sticky left-0 z-30 bg-gradient-to-r from-slate-800 to-slate-900 px-4 py-4 text-center text-sm font-semibold text-gray-200 border-r-2 border-slate-700 min-w-[140px]">
                  <div className="flex items-center justify-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-primary-500 shadow-lg shadow-primary-500/50"></span>
                    <span>{language === 'zh' ? '维度 / 品类' : 'Dimension / Category'}</span>
                  </div>
                </th>
                {brandsData.map((brand, index) => (
                  <th 
                    key={brand.name} 
                    className="relative px-4 py-4 text-left text-sm font-semibold border-r border-slate-700/50 last:border-r-0"
                    style={{ backgroundColor: `${brand.color}20`, borderLeft: `3px solid ${brand.color}` }}
                  >
                    <div className="flex items-center gap-3">
                      <span 
                        className="w-4 h-4 rounded-full shadow-lg" 
                        style={{ backgroundColor: brand.color, boxShadow: `0 0 10px ${brand.color}60` }}
                      ></span>
                      <span style={{ color: brand.color }}>{brand.name}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: brand.color }}></div>
                  </th>
                ))}
              </tr>
              </thead>
              <tbody>
                {competitorData.map((category, catIndex) => {
                  const isVisible = activeCategory === 'all' || activeCategory === category.catId;
                  if (!isVisible) return null;
                  
                  const colors = categoryColors[catIndex % categoryColors.length];

                  return (
                    <AnimatePresence key={`category-${category.catId}`}>
                      <motion.tr
                        key={`header-${category.catId}`}
                        className={`${colors.header} border-b-2`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <td colSpan={6} className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <span className={`w-2 h-8 rounded-full ${colors.bar} shadow-lg`}></span>
                            <div>
                              <div className="text-sm font-semibold text-white">{category.category}</div>
                            </div>
                          </div>
                        </td>
                      </motion.tr>
                      {category.rows.map((row, rowIndex) => (
                        <motion.tr
                          key={`${category.catId}-${rowIndex}`}
                          className={`${colors.row} border-b border-slate-700/30 transition-colors`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ delay: rowIndex * 0.05 }}
                        >
                          <td className={`sticky left-0 z-10 ${colors.row} ${colors.label} border-r-2 border-slate-600/50 px-4 py-3 text-sm font-medium text-gray-300 min-w-[140px]`}>
                            <span className="flex items-center gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full ${colors.bar}`}></span>
                              {row.label}
                            </span>
                          </td>
                          {row.isNote ? (
                            <td colSpan={5} className="px-4 py-3 text-sm text-gray-400 italic bg-slate-800/30">
                              <span className="flex items-start gap-2">
                                <span className="text-amber-400 mt-0.5">💡</span>
                                {row.data[0]}
                              </span>
                            </td>
                          ) : (
                            row.data.map((cell, cellIndex) => {
                              const brand = BRANDS_DATA[cellIndex];
                              return (
                                <td
                                  key={cellIndex}
                                  className="px-4 py-3 text-sm text-gray-200 border-r border-slate-700/30 last:border-r-0 transition-colors relative"
                                  style={{ 
                                    borderLeft: `2px solid ${brand.color}40`,
                                    backgroundColor: `${brand.color}10`,
                                  }}
                                  onMouseEnter={() => setHoveredColumn(cellIndex)}
                                  onMouseLeave={() => setHoveredColumn(null)}
                                >
                                  <div className="relative z-10" dangerouslySetInnerHTML={{ __html: cell }}></div>
                                  {hoveredColumn === cellIndex && (
                                    <div 
                                      className="absolute inset-0 pointer-events-none rounded"
                                      style={{ backgroundColor: `${brand.color}25` }}
                                    ></div>
                                  )}
                                </td>
                              );
                            })
                          )}
                        </motion.tr>
                      ))}
                      <motion.tr
                        key={`spacer-${category.catId}`}
                        className="bg-slate-900/80"
                      >
                        <td colSpan={6} className="py-2"></td>
                      </motion.tr>
                    </AnimatePresence>
                  );
                })}

                <motion.tr
                  className="bg-gradient-to-r from-primary-900/50 to-accent-900/50 border-t-2 border-primary-500/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <td colSpan={6} className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-8 rounded-full bg-gradient-to-b from-primary-500 to-accent-500 shadow-lg"></span>
                      <div>
                        <div className="text-sm font-semibold text-white">{language === 'zh' ? '综合对比 — 定价 / 认证 / 市场 / 战略定位' : 'Comprehensive Comparison — Pricing / Certification / Market / Strategy'}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{language === 'zh' ? '各品牌核心指标汇总' : 'Core metrics summary for each brand'}</div>
                      </div>
                    </div>
                  </td>
                </motion.tr>
                {summaryData.map((row, rowIndex) => (
                  <motion.tr
                    key={rowIndex}
                    className="bg-slate-800/30 border-b border-slate-700/30 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: rowIndex * 0.05 }}
                  >
                    <td className="sticky left-0 z-10 bg-slate-800/50 border-r-2 border-slate-600/50 px-4 py-3 text-sm font-medium text-gray-300 min-w-[140px]">
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                        {row.label}
                      </span>
                    </td>
                    {row.data.map((cell, cellIndex) => {
                      const brand = brandsData[cellIndex];
                      return (
                        <td
                          key={cellIndex}
                          className="px-4 py-3 text-sm text-gray-200 border-r border-slate-700/30 last:border-r-0 transition-colors"
                          style={{ 
                            borderLeft: `2px solid ${brand.color}40`,
                            backgroundColor: `${brand.color}10`,
                          }}
                          onMouseEnter={() => setHoveredColumn(cellIndex)}
                          onMouseLeave={() => setHoveredColumn(null)}
                          dangerouslySetInnerHTML={{ __html: cell }}
                        />
                      );
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 glass-effect rounded-lg p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-300">{language === 'zh' ? '品牌标识:' : 'Brand Legend:'}</span>
            </div>
            {brandsData.map((brand) => (
              <div key={brand.name} className="flex items-center gap-2">
                <span 
                  className="w-3 h-3 rounded-full shadow-md" 
                  style={{ backgroundColor: brand.color }}
                ></span>
                <span className="text-gray-300">{brand.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-4 text-xs text-gray-500 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="font-medium text-gray-400">{language === 'zh' ? '说明：' : 'Note:'}</span>
          {language === 'zh' ? '★ 标注为该品类核心代表产品 | 价格区间为市场参考价，实际以官方报价为准 | 认证信息以官方公示为准 | 补全项基于公开信息整理' : '★ Marked as core representative products for this category | Price range is market reference, actual price subject to official quote | Certification subject to official announcement | Supplementary items compiled from public information'}
        </motion.div>
      </div>
    </section>
  );
}
