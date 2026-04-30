import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles, Target, TrendingUp, Users, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function StartupMatcher({ onViewScenario }) {
  const { language, t } = useLanguage();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [time, setTime] = useState(0);

  const QUESTIONS = [
    {
      id: 1,
      question: t.matcher.question1,
      options: [
        { id: 'a', text: t.matcher.opt1a, value: 'store' },
        { id: 'b', text: t.matcher.opt1b, value: 'online' },
        { id: 'c', text: t.matcher.opt1c, value: 'network' },
        { id: 'd', text: t.matcher.opt1d, value: 'skill' }
      ]
    },
    {
      id: 2,
      question: t.matcher.question2,
      options: [
        { id: 'a', text: t.matcher.opt2a, value: 'low' },
        { id: 'b', text: t.matcher.opt2b, value: 'medium' },
        { id: 'c', text: t.matcher.opt2c, value: 'high' },
        { id: 'd', text: t.matcher.opt2d, value: 'very_high' }
      ]
    },
    {
      id: 3,
      question: t.matcher.question3,
      options: [
        { id: 'a', text: t.matcher.opt3a, value: 'offline' },
        { id: 'b', text: t.matcher.opt3b, value: 'ecommerce' },
        { id: 'c', text: t.matcher.opt3c, value: 'b2b' },
        { id: 'd', text: t.matcher.opt3d, value: 'franchise' }
      ]
    },
    {
      id: 4,
      question: t.matcher.question4,
      options: [
        { id: 'a', text: t.matcher.opt4a, value: 'fast' },
        { id: 'b', text: t.matcher.opt4b, value: 'medium' },
        { id: 'c', text: t.matcher.opt4c, value: 'slow' },
        { id: 'd', text: t.matcher.opt4d, value: 'very_slow' }
      ]
    }
  ];

  const RESULTS = [
    {
      id: 1,
      scenarioId: 1,
      name: t.matcher.flowerGift,
      icon: '🌸',
      color: 'from-pink-500 to-rose-500',
      reasons: language === 'zh' 
        ? ['适合门店/花艺工作室场景', '低投入高复购', '节日刚需爆发']
        : ['Suitable for store/floral studio scenarios', 'Low investment, high repurchase', 'Holiday demand surge'],
      profit: language === 'zh' ? '预计月盈利 8000-20000元' : 'Est. Monthly Profit: 8000-20000 RMB',
      growth: [
        { stage: language === 'zh' ? '起步' : 'Start', desc: language === 'zh' ? '0元设备入驻，店中店模式' : 'Zero-cost equipment entry, in-store model' },
        { stage: language === 'zh' ? '进阶' : 'Advanced', desc: language === 'zh' ? '拓展节日礼品线，增加客单价' : 'Expand holiday gift line, increase order value' },
        { stage: language === 'zh' ? '放大' : 'Scale', desc: language === 'zh' ? '多门店复制，区域代理' : 'Multi-store replication, regional agency' }
      ],
      case: language === 'zh' ? '浙江杭州王女士，3个月回本，月入15000+' : 'Ms. Wang, Hangzhou: 3-month payback, monthly income 15000+'
    },
    {
      id: 2,
      scenarioId: 7,
      name: t.matcher.campusCultural,
      icon: '📚',
      color: 'from-blue-500 to-cyan-500',
      reasons: language === 'zh'
        ? ['学生群体消费力强', '毕业季集中爆发', '便携设备支持流动摆摊']
        : ['Strong student consumption', 'Graduation season surge', 'Portable equipment for street vending'],
      profit: language === 'zh' ? '预计月盈利 5000-15000元' : 'Est. Monthly Profit: 5000-15000 RMB',
      growth: [
        { stage: language === 'zh' ? '起步' : 'Start', desc: language === 'zh' ? '校园摆摊试错' : 'Campus street vending trial' },
        { stage: language === 'zh' ? '进阶' : 'Advanced', desc: language === 'zh' ? '合作社团/毕业季批量订单' : 'Cooperate with student clubs, bulk graduation orders' },
        { stage: language === 'zh' ? '放大' : 'Scale', desc: language === 'zh' ? '多校联动，区域覆盖' : 'Multi-school collaboration, regional coverage' }
      ],
      case: language === 'zh' ? '广东深圳大学生小李，利用课余时间，月赚8000+' : 'Li, Shenzhen University Student: Part-time, monthly income 8000+'
    },
    {
      id: 3,
      scenarioId: 11,
      name: t.matcher.mallDigital,
      icon: '📱',
      color: 'from-purple-500 to-pink-500',
      reasons: language === 'zh'
        ? ['仅需0.5平米，立等可取', '年轻流量集中', '即时成交无库存压力']
        : ['Only 0.5 sqm needed, instant service', 'Young traffic concentration', 'Instant transaction, no inventory pressure'],
      profit: language === 'zh' ? '预计月盈利 6000-18000元' : 'Est. Monthly Profit: 6000-18000 RMB',
      growth: [
        { stage: language === 'zh' ? '起步' : 'Start', desc: language === 'zh' ? '单摊位试水' : 'Single stall trial' },
        { stage: language === 'zh' ? '进阶' : 'Advanced', desc: language === 'zh' ? '多商场布局' : 'Multi-mall expansion' },
        { stage: language === 'zh' ? '放大' : 'Scale', desc: language === 'zh' ? '品牌化连锁快闪' : 'Branded chain flash stores' }
      ],
      case: language === 'zh' ? '上海张先生，周末摆摊，月入12000+' : 'Mr. Zhang, Shanghai: Weekend stalls, monthly income 12000+'
    },
    {
      id: 4,
      scenarioId: 8,
      name: t.matcher.enterpriseGift,
      icon: '💼',
      color: 'from-amber-500 to-orange-500',
      reasons: language === 'zh'
        ? ['B端订单稳定', '客单价高', '复购持续']
        : ['Stable B2B orders', 'High order value', 'Continuous repurchase'],
      profit: language === 'zh' ? '预计月盈利 15000-50000元' : 'Est. Monthly Profit: 15000-50000 RMB',
      growth: [
        { stage: language === 'zh' ? '起步' : 'Start', desc: language === 'zh' ? '对接广告/礼品公司' : 'Partner with advertising/gift companies' },
        { stage: language === 'zh' ? '进阶' : 'Advanced', desc: language === 'zh' ? '签约KA大客户' : 'Sign KA key clients' },
        { stage: language === 'zh' ? '放大' : 'Scale', desc: language === 'zh' ? '年度合同锁定' : 'Annual contract lock-in' }
      ],
      case: language === 'zh' ? '江苏苏州李总，企业礼品单，首月回款20万+' : 'Mr. Li, Suzhou: Corporate gift orders, first month revenue 200000+'
    },
    {
      id: 5,
      scenarioId: 10,
      name: t.matcher.petProducts,
      icon: '🐾',
      color: 'from-green-500 to-emerald-500',
      reasons: language === 'zh'
        ? ['宠物主情感消费强', '溢价高达3-5倍', '赛道竞争小']
        : ['Strong emotional consumption from pet owners', 'Premium 3-5x markup', 'Less competition'],
      profit: language === 'zh' ? '预计月盈利 10000-30000元' : 'Est. Monthly Profit: 10000-30000 RMB',
      growth: [
        { stage: language === 'zh' ? '起步' : 'Start', desc: language === 'zh' ? '宠物店合作入驻' : 'Pet store partnership' },
        { stage: language === 'zh' ? '进阶' : 'Advanced', desc: language === 'zh' ? '线上社群运营' : 'Online community operation' },
        { stage: language === 'zh' ? '放大' : 'Scale', desc: language === 'zh' ? '宠物品牌联名' : 'Pet brand co-branding' }
      ],
      case: language === 'zh' ? '北京刘小姐，宠物定制，月入20000+' : 'Ms. Liu, Beijing: Pet customization, monthly income 20000+'
    },
    {
      id: 6,
      scenarioId: 2,
      name: t.matcher.culturalTourism,
      icon: '🏛️',
      color: 'from-indigo-500 to-purple-500',
      reasons: language === 'zh'
        ? ['独家场景专属定制', '溢价空间极高', '可承接政府项目']
        : ['Exclusive scene customization', 'High premium potential', 'Government project capable'],
      profit: language === 'zh' ? '预计月盈利 10000-30000元' : 'Est. Monthly Profit: 10000-30000 RMB',
      growth: [
        { stage: language === 'zh' ? '起步' : 'Start', desc: language === 'zh' ? '景区移动工作站' : 'Scenic area mobile workstation' },
        { stage: language === 'zh' ? '进阶' : 'Advanced', desc: language === 'zh' ? '文旅项目整店输出' : 'Cultural tourism full-store output' },
        { stage: language === 'zh' ? '放大' : 'Scale', desc: language === 'zh' ? '政企合作特许经营' : 'Government-enterprise cooperation' }
      ],
      case: language === 'zh' ? '成都张先生，景区文创店，月入25000+' : 'Mr. Zhang, Chengdu: Scenic area cultural store, monthly income 25000+'
    },
    {
      id: 7,
      scenarioId: 3,
      name: t.matcher.diyCraft,
      icon: '🎨',
      color: 'from-cyan-500 to-teal-500',
      reasons: language === 'zh'
        ? ['体验经济+亲子互动', '现场体验+成品售卖', '全年龄段客群']
        : ['Experience economy + parent-child interaction', 'On-site experience + product sales', 'All-age customer base'],
      profit: language === 'zh' ? '预计月盈利 8000-20000元' : 'Est. Monthly Profit: 8000-20000 RMB',
      growth: [
        { stage: language === 'zh' ? '起步' : 'Start', desc: language === 'zh' ? '轻量化设备摆摊' : 'Lightweight equipment street vending' },
        { stage: language === 'zh' ? '进阶' : 'Advanced', desc: language === 'zh' ? '亲子手工馆合作' : 'Parent-child craft center partnership' },
        { stage: language === 'zh' ? '放大' : 'Scale', desc: language === 'zh' ? '连锁体验馆' : 'Chain experience stores' }
      ],
      case: language === 'zh' ? '杭州李女士，亲子手工馆，月入18000+' : 'Ms. Li, Hangzhou: Parent-child craft center, monthly income 18000+'
    },
    {
      id: 8,
      scenarioId: 4,
      name: t.matcher.babyClothing,
      icon: '👶',
      color: 'from-pink-400 to-rose-400',
      reasons: language === 'zh'
        ? ['母婴群体情感消费强', '用户粘性高', '复购周期长']
        : ['Strong emotional consumption from maternal and child groups', 'High user stickiness', 'Long repurchase cycle'],
      profit: language === 'zh' ? '预计月盈利 8000-20000元' : 'Est. Monthly Profit: 8000-20000 RMB',
      growth: [
        { stage: language === 'zh' ? '起步' : 'Start', desc: language === 'zh' ? '母婴店增值服务' : 'Maternity store value-added service' },
        { stage: language === 'zh' ? '进阶' : 'Advanced', desc: language === 'zh' ? '儿童专属定制' : 'Children exclusive customization' },
        { stage: language === 'zh' ? '放大' : 'Scale', desc: language === 'zh' ? '亲子套装定制' : 'Parent-child set customization' }
      ],
      case: language === 'zh' ? '广州王女士，母婴店升级，月入15000+' : 'Ms. Wang, Guangzhou: Maternity store upgrade, monthly income 15000+'
    },
    {
      id: 9,
      scenarioId: 5,
      name: t.matcher.trendyToys,
      icon: '🎁',
      color: 'from-fuchsia-500 to-pink-500',
      reasons: language === 'zh'
        ? ['Z世代圈层消费', '付费意愿极强', '网红高利润赛道']
        : ['Gen Z circle consumption', 'Strong payment willingness', 'Internet celebrity high-margin track'],
      profit: language === 'zh' ? '预计月盈利 10000-30000元' : 'Est. Monthly Profit: 10000-30000 RMB',
      growth: [
        { stage: language === 'zh' ? '起步' : 'Start', desc: language === 'zh' ? '潮玩改造定制' : 'Trendy toy customization' },
        { stage: language === 'zh' ? '进阶' : 'Advanced', desc: language === 'zh' ? 'IP周边衍生' : 'IP peripheral development' },
        { stage: language === 'zh' ? '放大' : 'Scale', desc: language === 'zh' ? '粉丝专属定制' : 'Fan exclusive customization' }
      ],
      case: language === 'zh' ? '上海小陈，潮玩店，月入25000+' : 'Chen, Shanghai: Trendy toy store, monthly income 25000+'
    },
    {
      id: 10,
      scenarioId: 6,
      name: t.matcher.homeCustom,
      icon: '🏠',
      color: 'from-amber-400 to-orange-400',
      reasons: language === 'zh'
        ? ['家装刚需', '差异化竞争', '高客单价']
        : ['Home decoration necessity', 'Differentiated competition', 'High order value'],
      profit: language === 'zh' ? '预计月盈利 10000-25000元' : 'Est. Monthly Profit: 10000-25000 RMB',
      growth: [
        { stage: language === 'zh' ? '起步' : 'Start', desc: language === 'zh' ? '家装配套增值' : 'Home decoration supporting value-added' },
        { stage: language === 'zh' ? '进阶' : 'Advanced', desc: language === 'zh' ? '家居专属软装定制' : 'Home exclusive soft decoration' },
        { stage: language === 'zh' ? '放大' : 'Scale', desc: language === 'zh' ? '整装配套服务' : 'Full decoration supporting service' }
      ],
      case: language === 'zh' ? '深圳李总，家居软装店，月入20000+' : 'Mr. Li, Shenzhen: Home decoration store, monthly income 20000+'
    },
    {
      id: 11,
      scenarioId: 9,
      name: t.matcher.weddingCustom,
      icon: '💒',
      color: 'from-rose-400 to-pink-400',
      reasons: language === 'zh'
        ? ['婚庆场景溢价极高', '仪式感消费', '单单利润空间大']
        : ['High wedding scene premium', 'Ceremony consumption', 'Large profit per order'],
      profit: language === 'zh' ? '预计月盈利 15000-40000元' : 'Est. Monthly Profit: 15000-40000 RMB',
      growth: [
        { stage: language === 'zh' ? '起步' : 'Start', desc: language === 'zh' ? '婚礼配套增值服务' : 'Wedding supporting value-added service' },
        { stage: language === 'zh' ? '进阶' : 'Advanced', desc: language === 'zh' ? '纪念日专属定制' : 'Anniversary exclusive customization' },
        { stage: language === 'zh' ? '放大' : 'Scale', desc: language === 'zh' ? '婚庆公司深度合作' : 'Wedding company deep cooperation' }
      ],
      case: language === 'zh' ? '杭州张女士，婚庆定制，月入30000+' : 'Ms. Zhang, Hangzhou: Wedding customization, monthly income 30000+'
    },
    {
      id: 12,
      scenarioId: 12,
      name: t.matcher.publicWelfare,
      icon: '❤️',
      color: 'from-teal-500 to-cyan-500',
      reasons: language === 'zh'
        ? ['操作门槛极低', '傻瓜式一键操作', '可对接政府帮扶']
        : ['Very low operation threshold', 'One-click operation', 'Government support available'],
      profit: language === 'zh' ? '预计月盈利 3000-8000元' : 'Est. Monthly Profit: 3000-8000 RMB',
      growth: [
        { stage: language === 'zh' ? '起步' : 'Start', desc: language === 'zh' ? '社区服务点' : 'Community service point' },
        { stage: language === 'zh' ? '进阶' : 'Advanced', desc: language === 'zh' ? '批量复制落地' : 'Bulk replication' },
        { stage: language === 'zh' ? '放大' : 'Scale', desc: language === 'zh' ? '政企合作项目' : 'Government-enterprise cooperation project' }
      ],
      case: language === 'zh' ? '成都王阿姨，社区创业，月入5000+' : 'Aunt Wang, Chengdu: Community entrepreneurship, monthly income 5000+'
    }
  ];

  const matchResult = (answers) => {
    const score = {};
    RESULTS.forEach(r => {
      score[r.id] = 0;
    });

    if (answers[1] === 'store') {
      score[1] += 3;
      score[5] += 2;
      score[8] += 2;
    } else if (answers[1] === 'online') {
      score[3] += 2;
      score[4] += 2;
      score[9] += 2;
    } else if (answers[1] === 'network') {
      score[4] += 3;
      score[6] += 2;
    } else {
      score[2] += 3;
      score[3] += 2;
      score[7] += 2;
      score[12] += 2;
    }

    if (answers[2] === 'low') {
      score[2] += 3;
      score[3] += 2;
      score[7] += 2;
      score[12] += 2;
    } else if (answers[2] === 'medium') {
      score[1] += 2;
      score[5] += 2;
      score[8] += 2;
      score[9] += 2;
    } else {
      score[4] += 3;
      score[6] += 2;
      score[10] += 2;
      score[11] += 2;
    }

    if (answers[3] === 'offline') {
      score[2] += 3;
      score[3] += 2;
      score[7] += 2;
    } else if (answers[3] === 'b2b') {
      score[4] += 3;
      score[6] += 2;
    } else if (answers[3] === 'ecommerce') {
      score[5] += 2;
      score[3] += 2;
      score[9] += 2;
    } else {
      score[1] += 2;
      score[10] += 2;
      score[11] += 2;
    }

    if (answers[4] === 'fast') {
      score[3] += 3;
      score[2] += 2;
    } else if (answers[4] === 'medium') {
      score[1] += 2;
      score[5] += 2;
      score[7] += 2;
      score[8] += 2;
      score[9] += 2;
    } else {
      score[4] += 2;
      score[6] += 2;
      score[10] += 2;
      score[11] += 2;
    }

    const maxScore = Math.max(...Object.values(score));
    const resultId = Object.keys(score).find(key => score[key] === maxScore);
    return RESULTS.find(r => r.id === Number(resultId)) || RESULTS[0];
  };

  useEffect(() => {
    let timer;
    if (step > 0 && !result) {
      timer = setInterval(() => setTime(t => t + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [step, result]);

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    if (step < QUESTIONS.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => {
        setResult(matchResult({ ...answers, [questionId]: value }));
      }, 500);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
    setTime(0);
    const matcherElement = document.getElementById('startup-matcher');
    if (matcherElement) {
      matcherElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleViewScenario = () => {
    if (result && onViewScenario) {
      onViewScenario(result.scenarioId);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!result ? (
          step === 0 ? (
            <motion.div
              key="start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t.matcher.title}
              </h3>
              <p className="text-gray-400 mb-2">{t.matcher.subtitle}</p>
              <div className="relative mt-6 flex items-center justify-center">
                <motion.div
                  className="absolute w-48 h-16 bg-gradient-to-r from-primary-500/30 to-purple-500/30 rounded-xl blur-3xl"
                  animate={{ 
                    scale: [1, 4, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
                <motion.div
                  className="absolute w-40 h-14 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-xl blur-2xl"
                  animate={{ 
                    scale: [1, 3, 1],
                    opacity: [0.4, 0, 0.4],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                <motion.div
                  className="absolute w-32 h-12 bg-gradient-to-r from-white/10 to-purple-300/10 rounded-xl blur-xl"
                  animate={{ 
                    scale: [1, 2.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ 
                    duration: 1.8, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.button
                  onClick={() => { setStep(1); setTime(0); }}
                  className="relative px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.matcher.start}
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`question-${step}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="relative"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-gray-400 text-sm">
                  {language === 'zh' ? '第' : 'Step'} {step}/{QUESTIONS.length} {language === 'zh' ? '步' : ''}
                </span>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{formatTime(time)}</span>
                </div>
              </div>

              <div className="w-full bg-slate-700/50 rounded-full h-2 mb-8">
                <motion.div
                  className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((step) / QUESTIONS.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                {QUESTIONS[step - 1].question}
              </h3>

              <div className="space-y-3">
                {QUESTIONS[step - 1].options.map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => handleAnswer(QUESTIONS[step - 1].id, option.value)}
                    className="w-full text-left p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-primary-500/50 hover:bg-slate-800 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white">{option.text}</span>
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="text-center mb-8"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${result.color} mb-4`}>
                <span className="text-3xl">{result.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {t.matcher.resultTitle}
              </h3>
              <p className={`text-3xl font-bold bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}>
                {result.name}
              </p>
            </motion.div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary-400" />
                {t.matcher.reasons}
              </h4>
              <ul className="space-y-3">
                {result.reasons.map((reason, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-xl p-6 border border-primary-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  <span className="text-gray-400">{t.matcher.profit}</span>
                </div>
                <span className="text-xl font-bold text-green-400">{result.profit}</span>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-primary-400" />
                {t.matcher.growthPath}
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {result.growth.map((stage, i) => (
                  <div key={i} className="text-center p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-primary-400 font-semibold mb-1">{stage.stage}</div>
                    <div className="text-gray-400 text-xs">{stage.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-amber-500/20">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 font-semibold">{t.matcher.caseTitle}</span>
              </div>
              <p className="text-gray-300">{result.case}</p>
            </div>

            <div className="flex gap-4">
              <motion.button
                className="flex-1 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleViewScenario}
              >
                {t.matcher.viewPlan}
              </motion.button>
              <motion.button
                className="flex-1 py-4 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.matcher.consult}
              </motion.button>
            </div>

            <button
              onClick={reset}
              className="w-full py-3 text-gray-400 hover:text-white transition-colors text-sm"
            >
              {t.matcher.retest}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
