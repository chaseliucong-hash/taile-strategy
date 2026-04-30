export const STRATEGIC_MANIFESTO = {
  title: '泰乐机械：从设备制造商到全球定制创业生态平台',
  slogan: '色彩搬运工',
  mission: {
    title: '企业使命',
    main: '让每一个普通人，都能低门槛进入个性化定制生意',
    sub: '以自研技术、供应链能力与数字化系统为基础，为全球客户提供稳定、高效、可复制的一站式定制创业解决方案。'
  },
  vision: {
    title: '企业愿景',
    main: '成为全球轻量级个性化定制赛道的规则制定者与生态引领者',
    sub: '我们希望把设备、耗材、工具和创业方法整合在一起，让普通人也能轻松做个性化定制生意。最终，让整个行业围绕我们的产品体系、技术标准和商业模式来运转，形成一个长期可持续的创业生态。'
  },
  strategicStages: [
    { period: '过去', title: '单一设备制造商', stage: '工具化阶段' },
    { period: '现在', title: '完整定制化解决方案商', stage: '方案化阶段' },
    { period: '未来', title: '全球定制创业基础设施平台', stage: '平台化阶段' }
  ],
  ultimateVision: '打造千亿级"场景+方案+服务+生态"产业互联网平台'
};

export const BRANDS_DATA = [
  {
    name: 'Cricut',
    origin: '🇺🇸 美国本土',
    color: '#185FA5',
    strength: ['生态第一', '雕刻切割龙头', '家用DIY主场']
  },
  {
    name: '乐立克 LOKLiK',
    origin: '🇨🇳 中国湖南',
    color: '#0F6E56',
    strength: ['便携智能家用', '国货生态最强', '全品类小设备']
  },
  {
    name: '尚美特',
    origin: '🇨🇳 中国义乌',
    color: '#BA7517',
    strength: ['3D真空垄断', '异形曲面专家', '细分赛道龙头']
  },
  {
    name: '画王 COLOR KING',
    origin: '🇨🇳 中国福建',
    color: '#A32D2D',
    strength: ['工业老牌厂商', '全尺寸重型机', '出口认证齐全']
  },
  {
    name: '泰乐',
    origin: '🇨🇳 中国义乌',
    color: '#534AB7',
    strength: ['柔性板专利', '多合一组合机', 'DTF抖粉独家']
  }
];

export const PRODUCT_PRICING_DATA = [
  { name: '组合机', ratio: '25%', avgWholesale: 604, avgRetail: 662, grossMargin: 9.14 },
  { name: '烤杯机', ratio: '20%', avgWholesale: 440, avgRetail: 490, grossMargin: 10.62 },
  { name: '平板机', ratio: '20%', avgWholesale: 545, avgRetail: 600, grossMargin: 9.59 },
  { name: '主机', ratio: '10%', avgWholesale: 340, avgRetail: 375, grossMargin: 9.28 },
  { name: '烤帽机', ratio: '10%', avgWholesale: 380, avgRetail: 415, grossMargin: 8.60 },
  { name: '便携式设备', ratio: '5%', avgWholesale: 268, avgRetail: 330, grossMargin: 18.79 },
  { name: '水晶机', ratio: '5%', avgWholesale: 420, avgRetail: 450, grossMargin: 6.67 },
  { name: '迷你设备', ratio: '5%', avgWholesale: 80, avgRetail: 120, grossMargin: 33.33 }
];

export const CATEGORIES = [
  { id: 'all', name: '全部' },
  { id: 'DTF', name: 'DTF抖粉' },
  { id: '手持', name: '手持便携' },
  { id: '桌面', name: '桌面入门' },
  { id: '商用', name: '商用摇头' },
  { id: '半自动', name: '半自动/全自动' },
  { id: '工业', name: '工业大幅面' },
  { id: '滚筒', name: '滚筒连续' },
  { id: '3D', name: '3D真空' },
  { id: '雕刻', name: '雕刻激光' },
  { id: '组合', name: '多合一组合' },
  { id: '生态', name: '软件生态' }
];

export const COMPETITOR_DATA = [
  {
    category: '① 手持 / 超便携热压机',
    catId: '手持',
    rows: [
      {
        label: '代表机型',
        data: [
          'EasyPress Mini<br><span class="model">2008326</span><br>手持热压头<span class="model">2008327</span>',
          'ImPress Mini 3 方形手持<br>Easy Heat Press 迷你熨斗<br>ImPress Hat 补烫机',
          '<span class="none">✕ 无布局</span>',
          'CK-Handy 补烫机<br>CK-Spot 点烫设备',
          'TL-Handy 手持机<br>TL-Spot 补烫压头'
        ]
      },
      {
        label: '核心参数',
        data: [
          '3×3英寸 / 3档固定温度 / 0.5kg / 无绳',
          'ImPress Mini 3: 2.8kg / 0–50kg压力 / 100–210℃<br>Easy Heat Press: 0.6kg / 9.3×8cm / 100–200℃',
          '—',
          '8×10cm / 100–200℃ / 机械调压',
          '1.5kg / 8×8cm弧形板 / 100–210℃ / 15分钟自动断电'
        ]
      },
      {
        label: '优势',
        data: [
          '<span class="badge b-blue">颜值高</span><span class="badge b-blue">品牌强</span><span class="badge b-blue">恒温精准</span>',
          '<span class="badge b-teal">高压手持</span><span class="badge b-teal">型号丰富</span><span class="badge b-teal">安全断电</span>',
          '—',
          '<span class="badge b-gray">皮实耐用</span><span class="badge b-gray">价格极低</span>',
          '<span class="badge b-purple">弧形贴合曲面</span><span class="badge b-purple">性价比高</span>'
        ]
      },
      {
        label: '短板',
        data: [
          '<span class="badge b-red">单价高</span><span class="badge b-red">压力弱</span>',
          '<span class="badge b-red">S1自重大</span><span class="badge b-red">溢价高</span>',
          '<span class="badge b-red">完全空白</span>',
          '<span class="badge b-red">无智能控温</span><span class="badge b-red">外观老旧</span>',
          '<span class="badge b-amber">品牌曝光弱</span><span class="badge b-amber">无APP联动</span>'
        ]
      }
    ]
  },
  {
    category: '② 桌面小型平板烫画机（新手 / 摆摊 / 入门）',
    catId: '桌面',
    rows: [
      {
        label: '代表机型',
        data: [
          'EasyPress 3（9×9）<br>EasyPress 3（12×10）<br><span class="model">2008324/2008322</span>',
          'ImPress Auto 2 桌面便携机<br>ImPress Tumbler 烤杯机<br>ImPress Label 标签打印机',
          'ST1520 Mini<br>ST2030 笑笑盒<br><span class="model">ST-1520 / ST-2030</span>',
          'CK480-3 基础直压机<br>CK-Mini 单功能台式机',
          'TL-380 桌面直压机<br>TL-Ferris 多工位摩天轮<br>TL-Stall 摆摊专用机（内置电池）'
        ]
      },
      {
        label: '核心参数',
        data: [
          '±1℃精准控温 / 100–205℃ / 约2.8kg',
          'ImPress Auto 2: 38×38cm / 80kg压力 / 数字显示',
          '3D真空 / 0–220℃ / 0.1PA真空 / 约12–15kg',
          '38×38cm / 25kg / 直压机械式 / 100–220℃',
          '38×38cm / 28kg / 加厚铝板 / 全域调压<br>TL-Stall续航4小时（内置电池，行业少见）'
        ]
      },
      {
        label: '差异化亮点',
        data: [
          '<span class="badge b-blue">操作极简</span><span class="badge b-blue">颜值高</span><span class="badge b-blue">DIY生态</span>',
          '<span class="badge b-teal">一键触控</span><span class="badge b-teal">配套烤杯/标签</span>',
          '<span class="badge b-amber">桌面3D异形</span><span class="badge b-amber">手机壳/礼品</span><span class="badge b-amber">赛道独家</span>',
          '<span class="badge b-gray">结构简单</span><span class="badge b-gray">故障率低</span><span class="badge b-gray">价格极低</span>',
          '<span class="badge b-purple">加厚发热板</span><span class="badge b-purple">内置电池摆摊款</span><span class="badge b-purple">供应链成本优</span>'
        ]
      },
      {
        label: '短板',
        data: [
          '<span class="badge b-red">无高压</span><span class="badge b-red">商用承载力不足</span>',
          '<span class="badge b-red">长期连续使用稳定性一般</span>',
          '<span class="badge b-red">不能做T恤平板烫</span><span class="badge b-red">场景单一</span>',
          '<span class="badge b-red">做工粗糙</span><span class="badge b-red">压力不均</span>',
          '<span class="badge b-amber">外观大众化</span><span class="badge b-amber">无年轻化设计</span>'
        ]
      }
    ]
  },
  {
    category: '③ 商用摇头高压机（工作室主力 / 核心主战场）',
    catId: '商用',
    rows: [
      {
        label: '代表机型',
        data: [
          'EasyPress Pro（16×20）<br><span class="none">无高压摇头机</span>',
          'ImPress Auto 2 全自动旗舰<br>ImPress Home 入门智能机<br>ImPress Pro 商用单工位',
          '<span class="none">✕ 无平板烫画机</span>',
          'CH1804 手动摇头<br>CK3804D 磁性高压款<br>CK-Basic 基础恒温款',
          'TL-380R 韩式高压摇头 <span class="star">★主力爆款</span><br>TL-400R Pro 商用升级款<br>TL-500 中小批量稳定机'
        ]
      },
      {
        label: '核心参数',
        data: [
          '±1℃控温 / 100–205℃ / 约5kg（轻压）',
          'ImPress Auto 2: 40×50cm / ±1℃ / 80kg多级压力 / 1分钟达200℃',
          '—',
          'CH1804: 38×38cm / 360°摇头 / 铸铝发热板<br>CK3804D: 磁吸 / 2000W / 48kg',
          '38×38~40×60cm全尺寸 / 0–80kg可调 / <strong>柔性发热板专利</strong> / 2000W'
        ]
      },
      {
        label: '核心优势',
        data: [
          '<span class="badge b-blue">EasyPress系列简单易用</span>',
          '<span class="badge b-teal">智能数控</span><span class="badge b-teal">999秒定时</span><span class="badge b-teal">认证齐全</span>',
          '—',
          '<span class="badge b-gray">市场保有量大</span><span class="badge b-gray">配件通用</span><span class="badge b-gray">维修方便</span>',
          '<span class="badge b-purple">柔性板温度均匀</span><span class="badge b-purple">全尺寸覆盖</span><span class="badge b-purple">比乐立克便宜20–30%</span>'
        ]
      },
      {
        label: '短板',
        data: [
          '<span class="badge b-red">完全无高压摇头机</span><span class="badge b-red">服装工作室淘汰</span>',
          '<span class="badge b-red">工业连续生产耐力差</span><span class="badge b-red">机架单薄</span>',
          '<span class="badge b-red">完全空白</span>',
          '<span class="badge b-red">控温误差大</span><span class="badge b-red">无智能数显</span><span class="badge b-red">款式十年未更新</span>',
          '<span class="badge b-amber">软件智能化弱</span><span class="badge b-amber">品牌溢价低</span>'
        ]
      }
    ]
  },
  {
    category: '④ 半自动 / 全自动双工位机（电商小批量量产）',
    catId: '半自动',
    rows: [
      {
        label: '代表机型',
        data: [
          '<span class="none">✕ 无该品类</span>',
          'ImPress Semi 半自动单工位<br>ImPress Dual 双工位自动机',
          '<span class="none">✕ 无该品类</span>',
          'CK3804C-2 抽拉式半自动<br>CK3805D 双工位手动摇头',
          'TL-600D 气动双工位自动机'
        ]
      },
      {
        label: '核心参数',
        data: [
          '—',
          'ImPress Semi: 40×60cm / 气动辅助 / 一键合盖<br>ImPress Dual: 双工位交替 / 80kg / 约80kg机重',
          '—',
          'C-2: 抽拉底座 / 半自动合盖 / 38×38cm<br>3805D: 双工位 / 48kg / 1200W',
          '40×60cm / 双工位交替 / 气动自动开合 / 循环定时 / 约85kg'
        ]
      },
      {
        label: '核心优势',
        data: [
          '—',
          '<span class="badge b-teal">操作高效</span><span class="badge b-teal">新手友好</span>',
          '—',
          '<span class="badge b-gray">抽拉放料安全</span><span class="badge b-gray">效率提升</span>',
          '<span class="badge b-purple">双工位效率翻倍</span><span class="badge b-purple">国产气动件稳定</span><span class="badge b-purple">故障率低</span>'
        ]
      },
      {
        label: '短板',
        data: [
          '<span class="badge b-red">完全空白</span>',
          '<span class="badge b-red">气动配置简配</span><span class="badge b-red">无法高强度量产</span>',
          '<span class="badge b-red">完全空白</span>',
          '<span class="badge b-red">抽拉结构易卡顿</span><span class="badge b-red">精度一般</span>',
          '<span class="badge b-amber">体积偏大</span><span class="badge b-amber">线下渠道铺货少</span>'
        ]
      }
    ]
  },
  {
    category: '⑤ 工业级大幅面 / 液压 / 重型机（大厂批量）',
    catId: '工业',
    rows: [
      {
        label: '代表机型',
        data: [
          '<span class="none">✕ 无工业设备</span>',
          'ImPress Pro Max 大幅面工业机',
          'ST3042 Pro / ST4050（3D方向）',
          'CKB5-1 液压双工位全自动 <span class="star">★工业旗舰</span><br>CK-B4 气动大幅面<br>CK-Hydraulic 超大面积',
          'TL-600R 大尺寸高压摇头<br>TL-Custom 定制超大台面<br>（60×100/80×120cm非标定制）'
        ]
      },
      {
        label: '核心参数',
        data: [
          '—',
          'ImPress Pro Max: 60×80cm / 100kg高压 / 简易液压 / 约150kg',
          '400×500mm / 0.05PA高真空 / 250℃（仅3D方向）',
          'CKB5-1: 100×120cm / 液压 / 14000W / 约930kg<br>CK-B4: 100×150cm / 气动 / 约180kg',
          'TL-600R: 60×80cm / 0–100kg高压 / 加厚机架 / 约60kg'
        ]
      },
      {
        label: '核心优势',
        data: [
          '—',
          '<span class="badge b-teal">家用品牌里唯一涉足大工业款</span>',
          '<span class="badge b-amber">3D异形工业量产独家</span>',
          '<span class="badge b-gray">液压成熟</span><span class="badge b-gray">出口认证齐全</span><span class="badge b-gray">大厂标配</span><span class="badge b-gray">幅面行业最大</span>',
          '<span class="badge b-purple">大版面+高压兼顾</span><span class="badge b-purple">支持非标定制</span><span class="badge b-purple">性价比远超画王</span>'
        ]
      },
      {
        label: '短板',
        data: [
          '<span class="badge b-red">完全空白</span>',
          '<span class="badge b-red">液压非专业工业级</span><span class="badge b-red">满载易故障</span>',
          '<span class="badge b-red">场景极窄</span><span class="badge b-red">仅限3D曲面</span>',
          '<span class="badge b-red">价格极高</span><span class="badge b-red">能耗大</span><span class="badge b-red">笨重无法移动</span><span class="badge b-red">款式老旧</span>',
          '<span class="badge b-amber">定制交期略长</span><span class="badge b-amber">海外品牌认知弱</span>'
        ]
      }
    ]
  },
  {
    category: '⑥ 连续式滚筒热转印机（整卷面料 / 成衣批量）',
    catId: '滚筒',
    rows: [
      {
        label: '代表机型',
        data: [
          '<span class="none">✕ 完全空白</span>',
          '<span class="none">✕ 完全空白</span>',
          '<span class="none">✕ 完全空白</span>',
          '油温滚筒机（款式老旧，无明确型号）',
          'TL-900-3200 毯带脱离式油温滚筒机 <span class="star">★</span>'
        ]
      },
      {
        label: '核心参数',
        data: [
          '—',
          '—',
          '—',
          '常规油温滚筒，中规中矩',
          '周边循环发热 / 变频调速 / 杜邦耐温毯带 / 约200kg'
        ]
      },
      {
        label: '差异化',
        data: [
          '—',
          '—',
          '—',
          '<span class="badge b-gray">有产品</span><span class="badge b-red">能耗高</span><span class="badge b-red">款式老旧</span>',
          '<span class="badge b-purple">毯带脱离式</span><span class="badge b-purple">变频调速</span><span class="badge b-purple">损耗低</span><span class="badge b-purple">义乌成本优势</span>'
        ]
      },
      {
        label: '⚠️ 补全说明',
        isNote: true,
        data: ['滚筒连续机为重型工业设备，Cricut/乐立克/尚美特三家完全无布局。泰乐为该品类主要竞争者，可走项目单/工厂改造路线。']
      }
    ]
  },
  {
    category: '⑦ 3D真空异形转印机（手机壳 / 杯子 / 曲面礼品）',
    catId: '3D',
    rows: [
      {
        label: '代表机型',
        data: [
          '<span class="none">✕ 仅简易配件</span>',
          'ImPress Tumbler 小型烤杯机（非整机3D）',
          'ST1520 → ST2030 → ST3042 → ST4050 全系列 <span class="star">★绝对垄断</span>',
          'AHP01 3D简易热转印（3D水晶烫画）',
          '简易3D辅助配件（不做整机，错位竞争）'
        ]
      },
      {
        label: '核心参数',
        data: [
          '—',
          '适配300–500ml杯型 / 自动旋转 / 100–220℃',
          '真空度0.05–0.1PA / 0–250℃ / 全尺寸覆盖 / 压铸铝发热',
          '3D水晶烫画 / 异形转印 / 无详细参数',
          '搭配配件做异形（无整机）'
        ]
      },
      {
        label: '核心优势',
        data: [
          '—',
          '<span class="badge b-teal">配套完善</span>',
          '<span class="badge b-amber">全尺寸覆盖</span><span class="badge b-amber">细分赛道龙头</span><span class="badge b-amber">配件生态完整</span><span class="badge b-amber">模具体系完整</span>',
          '<span class="badge b-gray">价格低</span>',
          '<span class="badge b-purple">平板+异形配件组合方案</span><span class="badge b-purple">降低客户风险</span>'
        ]
      },
      {
        label: '短板',
        data: [
          '<span class="badge b-red">无整机</span>',
          '<span class="badge b-red">无真空3D整机</span>',
          '<span class="badge b-red">只能做异形</span><span class="badge b-red">客户池狭窄</span><span class="badge b-red">淡旺季明显</span>',
          '<span class="badge b-red">性能弱</span><span class="badge b-red">仅低端入门</span>',
          '<span class="badge b-amber">无独立整机</span>'
        ]
      }
    ]
  },
  {
    category: '⑧ 雕刻 / 激光 / 巡边切割设备（文创DIY配套）',
    catId: '雕刻',
    rows: [
      {
        label: '代表机型',
        data: [
          'Joy Xtra / Explore 4 / Maker 4 <span class="star">★赛道龙头</span><br><span class="model">2007745/2008323/2011084</span>',
          'ImPress Laser 01/ImPress Laser 02 激光雕刻机<br>ImPress Cut I1 巡边刻字机',
          '<span class="none">✕ 无整机</span>',
          '<span class="none">✕ 无整机</span>',
          '<span class="none">✕ 无整机（外采合作供货）</span>'
        ]
      },
      {
        label: '核心参数',
        data: [
          '切割幅宽5.5–12英寸 / 切割压力4kg / 300+种材料 / 兼容13种工具 / 14.1IPS速度',
          'ImPress Laser 01: 10W / 切割8mm椴木 / 免安装<br>ImPress Cut I1: 精度<0.5mm / 连续进料 / 12英寸幅宽',
          '—',
          '—',
          '—'
        ]
      },
      {
        label: '核心优势',
        data: [
          '<span class="badge b-blue">AI设计+百万素材</span><span class="badge b-blue">生态闭环</span><span class="badge b-blue">工具系统完整</span>',
          '<span class="badge b-teal">设备小巧</span><span class="badge b-teal">入门价格低</span><span class="badge b-teal">配套文创DIY</span>',
          '—',
          '—',
          '—'
        ]
      },
      {
        label: '短板',
        data: [
          '<span class="badge b-red">价格昂贵</span><span class="badge b-red">无热转印工业优势</span>',
          '<span class="badge b-red">功率低</span><span class="badge b-red">仅适合轻加工</span>',
          '<span class="badge b-red">完全空白</span>',
          '<span class="badge b-red">完全空白</span>',
          '<span class="badge b-amber">依赖外采合作</span>'
        ]
      }
    ]
  },
  {
    category: '⑨ 多合一组合机 + 异形专项一体机（烤杯/烤帽/烤盘）',
    catId: '组合',
    rows: [
      {
        label: '代表机型',
        data: [
          '<span class="none">✕ 无组合机</span>',
          '分体式烤杯/烤帽（单品销售）',
          'ST专用杯类模具（非独立组合机）',
          'CK-Mug / CK-Cap / CK-Plate 分体专项机',
          'TL-Combo4 4合一 / TL-Combo8 8合一 <span class="star">★核心优势品类</span><br>TL-Accessory 烤杯/烤帽/烤盘'
        ]
      },
      {
        label: '核心参数',
        data: [
          '—',
          '单品，无集成',
          '真空专用模具配套',
          '分体采购 / 单品各自精专',
          '平板+烤杯+烤帽+烤盘一体集成 / 约50kg'
        ]
      },
      {
        label: '核心优势',
        data: [
          '—',
          '<span class="badge b-teal">单品配套完善</span>',
          '<span class="badge b-amber">异形模具齐全</span>',
          '<span class="badge b-gray">品类齐全</span><span class="badge b-gray">配件通用</span>',
          '<span class="badge b-purple">一机多用</span><span class="badge b-purple">开店成本低</span><span class="badge b-purple">同行无同级竞品</span>'
        ]
      },
      {
        label: '短板',
        data: [
          '<span class="badge b-red">完全空白</span>',
          '<span class="badge b-red">分体采购成本高</span>',
          '<span class="badge b-red">无独立热转印组合机</span>',
          '<span class="badge b-red">分体占地大</span><span class="badge b-red">售后麻烦</span>',
          '<span class="badge b-amber">组合机单功能略低于单机</span>'
        ]
      }
    ]
  },
  {
    category: '⑩ DTF配套设备（自动抖粉机）— 当下增量爆款',
    catId: 'DTF',
    rows: [
      {
        label: '代表机型',
        data: [
          '<span class="none">✕ 完全空白</span>',
          '<span class="none">✕ 完全空白</span>',
          '<span class="none">✕ 完全空白</span>',
          '<span class="none">✕ 完全空白</span>',
          'TL-Powder 专利自动抖粉机 <span class="star">★行业独家</span>'
        ]
      },
      {
        label: '核心参数',
        data: [
          '—',
          '—',
          '—',
          '—',
          '全自动撒粉+回收一体 / 均匀度提升50% / 适配所有烫画/转印工艺'
        ]
      },
      {
        label: '战略价值',
        isSpecial: true,
        data: [
          '四家同行均无布局，完全空白',
          '四家同行均无布局，完全空白',
          '四家同行均无布局，完全空白',
          '四家同行均无布局，完全空白',
          '<span class="badge b-purple">风口赛道独家</span><span class="badge b-purple">成套绑定销售拉高客单</span><span class="badge b-purple">自有专利壁垒</span><span class="badge b-purple">降低人工成本</span>'
        ]
      },
      {
        label: '⚠️ 补全说明',
        isNote: true,
        data: ['DTF（直喷膜转印）工艺近年快速渗透服装定制市场，抖粉机为必备配套设备。泰乐持有该设备专利，具备先发优势；建议强化市场教育，与烫画机成套捆绑销售。']
      }
    ]
  },
  {
    category: '⑪ 控制系统 / 软件 / 耗材 / 生态',
    catId: '生态',
    rows: [
      {
        label: '软件系统',
        data: [
          '<span class="badge b-blue">Design Space</span><span class="badge b-blue">Create AI</span><br>百万级素材库 / AI生成切割矢量图',
          '<span class="badge b-teal">LOKLiK IdeaStudio</span><br>18,000+免费设计 / 30+字体 / 无订阅费 / APP控制',
          '<span class="none">无自研软件</span><br>纯硬件模式',
          '<span class="none">无自研软件</span><br>纯硬件制造',
          '<span class="badge b-purple">自研设备中控系统</span><br>支持远程升级 / 适配C2M平台 / API接口'
        ]
      },
      {
        label: '耗材体系',
        data: [
          'Smart Vinyl / 烫印膜 / 卡纸 / 布料 / 皮革等300+种（原装高价）',
          '全套自有膜类 / 烫画材料 / 转印纸',
          '转印膜 / 涂层液 / 定制模具（3D专用）',
          '转印纸 / 墨水 / 烫画膜（通用型）',
          '全品牌通用耗材（不锁定原装，兼容性强）'
        ]
      },
      {
        label: '社区/内容',
        data: [
          '<span class="badge b-blue">全球最强DIY社区</span><span class="badge b-blue">官方教程完善</span>',
          '<span class="badge b-teal">国内DIY社区活跃</span><span class="badge b-teal">创意模板库</span>',
          '<span class="none">无社区运营</span>',
          '<span class="none">无内容生态</span>',
          '机器实操视频 / C2M定制供应链接入（建设中）'
        ]
      },
      {
        label: '生态综合评级',
        data: [
          '<span class="badge b-blue">★★★★★ 全球第一</span>',
          '<span class="badge b-teal">★★★★ 国货最强</span>',
          '<span class="badge b-amber">★★ 封闭配套</span>',
          '<span class="badge b-gray">★ 纯硬件</span>',
          '<span class="badge b-purple">★★★ 补齐中</span>'
        ]
      }
    ]
  }
];

export const SUMMARY_DATA = [
  {
    label: '主要目标市场',
    data: [
      '欧美家用DIY / 创客 / 文创小企业',
      '国内家用创业 / 电商轻创业 / 跨境C端',
      '国内礼品定制 / 手机壳工厂 / 文创周边',
      '国内外服装工厂 / 广告印刷 / 工业B端',
      '国内外服装定制 / 电商工厂 / 工业B端'
    ]
  },
  {
    label: '产品认证情况',
    data: [
      'FCC / CE / UL / CPSC（北美标准完整）',
      'CE / FCC / RoHS / 国内3C（较齐全）',
      'CE（部分型号）/ 国内标准',
      'CE / EMC / 国内认证（工业出口齐全）',
      'CE / RoHS（部分型号，扩展中）'
    ]
  },
  {
    label: '价格区间（参考）',
    data: [
      'EasyPress: $30–$250<br>雕刻机: $150–$500+',
      '手持: ¥200–500<br>家用机: ¥500–2000<br>工业机: ¥3000+',
      '桌面3D: ¥1500–3000<br>工业3D: ¥5000–15000',
      '基础款: ¥800–2000<br>工业液压: ¥20000–80000+',
      '家用: ¥600–1500<br>商用: ¥1500–5000<br>工业: ¥5000–30000'
    ]
  },
  {
    label: '主要渠道',
    data: [
      '官网直销 / 亚马逊 / Target / Walmart',
      '天猫/京东官旗 / 抖音 / 跨境独立站',
      '1688批发 / 阿里国际 / 展会直销',
      '1688 / 外贸B2B / 展会 / 代理商',
      '1688 / 阿里国际 / 电商平台 / 代理商'
    ]
  },
  {
    label: '核心战略定位',
    data: [
      '软件生态锁定 + 家用DIY全球第一',
      '国货智能家用 + 全品类小设备布局',
      '3D真空异形细分垄断 + 深耕礼品市场',
      '工业制造老牌 + 全尺寸重型机出口',
      '柔性板专利+多合一+DTF三大差异化壁垒'
    ]
  },
  {
    label: '主要空白赛道',
    data: [
      '工业热转印 / 高压摇头机 / DTF',
      '真正工业级 / 3D真空整机 / DTF',
      '平板烫画全线 / 手持 / 雕刻 / DTF',
      '智能化系统 / 雕刻激光 / DTF / 组合机',
      '软件DIY生态 / 3D真空整机（主动放弃）'
    ]
  },
  {
    label: '⚠️ 数据说明',
    data: [
      'Cricut/LOKLiK数据基于官方公开信息',
      '尚美特/画王/泰乐数据参考行业资料，以厂商实际报价/规格为准',
      '价格区间随汇率/渠道浮动较大',
      '泰乐专利声明建议核实专利号后对外使用'
    ]
  }
];

export const STRATEGIC_ENGINE = {
  upperLayer: [
    {
      id: 'growth1',
      title: '整机方案',
      description: '提供一站式数字印刷设备解决方案',
      icon: 'Layers',
      color: 'primary'
    },
    {
      id: 'growth2',
      title: '核心部件',
      description: '自主研发核心控制与执行系统',
      icon: 'Cpu',
      color: 'accent'
    },
    {
      id: 'growth3',
      title: '耗材增值',
      description: '构建高毛利耗材生态闭环',
      icon: 'Package',
      color: 'teal'
    }
  ],
  lowerLayer: [
    {
      id: 'capability1',
      title: '硬件自研',
      description: '全维度硬件自研能力',
      icon: 'Wrench'
    },
    {
      id: 'capability2',
      title: '供应链',
      description: '全链条供应链管控',
      icon: 'Factory'
    },
    {
      id: 'capability3',
      title: '服务网络',
      description: '覆盖全国的服务体系',
      icon: 'Globe'
    }
  ]
};

export const NINE_SYSTEMS = [
  {
    id: 'ka',
    name: 'KA大客户体系',
    category: '整机方案',
    categoryColor: 'primary',
    details: {
      positioning: '面向年采购额100万以上的大型企业客户，提供定制化整体解决方案',
      customer: '品牌服装企业、大型印花加工厂、连锁快印店、电商头部卖家',
      actions: [
        '成立大客户专项小组，一对一深度服务',
        '定制专属解决方案，提供设备+耗材+培训一体化服务',
        '建立客户成功体系，定期回访确保满意度',
        '提供金融租赁方案，降低客户采购门槛',
        '优先交付保障，确保项目按时落地'
      ],
      sellingPoints: [
        '全品类设备一站式采购',
        '专属客户经理全程服务',
        '灵活的金融付款方案',
        '7x24小时技术支持响应',
        '定制化培训课程'
      ],
      target: '3个月签约5家KA客户，实现销售额突破500万',
      resources: [
        '配备资深技术顾问2名',
        '专项营销预算50万元',
        '优先生产排程支持',
        '定制化合同模板'
      ]
    }
  },
  {
    id: 'agent',
    name: '代理商体系',
    category: '整机方案',
    categoryColor: 'primary',
    details: {
      positioning: '通过区域代理商覆盖二三线城市市场，快速拓展销售网络',
      customer: '区域经销商、设备贸易商、行业从业者',
      actions: [
        '制定代理商招募计划，重点覆盖空白市场',
        '提供完善的代理政策和激励机制',
        '开展代理商培训大会，提升专业能力',
        '建立代理商交流平台，共享市场信息',
        '提供营销支持物料和技术培训'
      ],
      sellingPoints: [
        '高利润空间，最高可达30%',
        '完善的售后支持体系',
        '区域独家代理权保护',
        '丰富的营销资源支持',
        '灵活的退换货政策'
      ],
      target: '3个月新增20家代理商，覆盖15个省市',
      resources: [
        '代理商招募团队3人',
        '培训讲师2名',
        '营销物料制作预算10万元',
        '代理商管理系统开发'
      ]
    }
  },
  {
    id: 'online',
    name: '线上直签体系',
    category: '整机方案',
    categoryColor: 'primary',
    details: {
      positioning: '通过电商平台和官网直接触达终端客户，降低中间环节',
      customer: '中小型创业者、个体工商户、小型加工厂',
      actions: [
        '优化电商店铺运营，提升搜索排名',
        '制作专业产品视频和直播带货',
        '建立线上客服体系，7x12小时在线',
        '推出线上专属优惠套餐',
        '完善物流配送和安装服务'
      ],
      sellingPoints: [
        '线上专属优惠价格',
        '透明的产品信息展示',
        '便捷的在线下单流程',
        '快速的物流配送服务',
        '真实客户评价参考'
      ],
      target: '3个月线上销售额突破200万，新增客户100+',
      resources: [
        '电商运营团队5人',
        '直播设备和场地',
        '线上广告投放预算30万元',
        '客服人员4名'
      ]
    }
  },
  {
    id: 'control',
    name: '控制系统体系',
    category: '核心部件',
    categoryColor: 'accent',
    details: {
      positioning: '自主研发运动控制卡和软件系统，打造核心技术壁垒',
      customer: '设备制造商、自动化集成商、科研机构',
      actions: [
        '持续研发升级控制系统软件',
        '拓展控制系统应用场景',
        '建立技术支持团队，提供定制开发服务',
        '申请技术专利，保护知识产权',
        '开展技术交流活动，提升行业影响力'
      ],
      sellingPoints: [
        '自主知识产权，不受制于人',
        '高性能运动控制算法',
        '完善的技术支持服务',
        '灵活的定制开发能力',
        '持续的软件更新迭代'
      ],
      target: '3个月控制系统销量突破500套，专利申请2项',
      resources: [
        '研发工程师8名',
        '测试设备投入',
        '专利申请费用',
        '技术文档编写'
      ]
    }
  },
  {
    id: 'printhead',
    name: '喷头组件体系',
    category: '核心部件',
    categoryColor: 'accent',
    details: {
      positioning: '整合喷头资源，提供高品质打印核心组件',
      customer: '设备制造商、维修服务商、配件经销商',
      actions: [
        '与国际知名喷头厂商建立战略合作',
        '建立喷头检测和质保体系',
        '提供喷头维修和保养服务',
        '开发喷头适配方案，支持多品牌设备',
        '建立喷头库存，确保供货稳定'
      ],
      sellingPoints: [
        '原装正品保障',
        '完善的质保服务',
        '专业的技术支持',
        '稳定的供货能力',
        '竞争力的价格体系'
      ],
      target: '3个月喷头销售额突破150万，服务客户50+',
      resources: [
        '供应链专员2名',
        '检测设备投入',
        '仓储空间',
        '售后服务团队'
      ]
    }
  },
  {
    id: 'motor',
    name: '电机驱动体系',
    category: '核心部件',
    categoryColor: 'accent',
    details: {
      positioning: '提供高精度电机和驱动系统，满足高端设备需求',
      customer: '自动化设备厂商、机器人制造商、精密机械企业',
      actions: [
        '引进先进电机技术，提升产品性能',
        '建立电机测试实验室，确保品质',
        '开发适配不同设备的驱动方案',
        '提供技术选型支持，帮助客户优化设计',
        '建立快速响应的售后服务体系'
      ],
      sellingPoints: [
        '高精度定位控制',
        '长寿命稳定运行',
        '完善的技术支持',
        '灵活的定制服务',
        '竞争力的价格'
      ],
      target: '3个月电机驱动销量突破300套，新增合作客户30家',
      resources: [
        '电机工程师3名',
        '测试设备投入',
        '技术选型资料库',
        '售后服务团队'
      ]
    }
  },
  {
    id: 'ink',
    name: '墨水耗材体系',
    category: '耗材增值',
    categoryColor: 'teal',
    details: {
      positioning: '提供全系列高品质墨水耗材，构建耗材生态闭环',
      customer: '终端用户、经销商、设备配套商',
      actions: [
        '扩大墨水产品线，覆盖更多应用场景',
        '建立墨水研发实验室，提升产品品质',
        '推出耗材订阅服务，锁定长期客户',
        '开展墨水促销活动，提升复购率',
        '建立区域配送中心，确保快速交付'
      ],
      sellingPoints: [
        '全系列产品覆盖',
        '稳定的产品品质',
        '竞争力的价格',
        '快速的配送服务',
        '专业的技术支持'
      ],
      target: '3个月耗材销售额突破300万，复购率提升至60%',
      resources: [
        '研发工程师4名',
        '生产设备投入',
        '仓储物流体系',
        '营销推广预算'
      ]
    }
  },
  {
    id: 'media',
    name: '介质耗材体系',
    category: '耗材增值',
    categoryColor: 'teal',
    details: {
      positioning: '提供各类打印介质，满足不同应用场景需求',
      customer: '广告公司、图文店、纺织加工厂、标签印刷厂',
      actions: [
        '拓展介质产品线，增加高毛利产品',
        '建立质量检测体系，确保产品稳定性',
        '开展介质应用培训，提升客户使用体验',
        '制定介质促销方案，带动整体销售',
        '建立介质库存管理系统，优化库存'
      ],
      sellingPoints: [
        '丰富的产品种类',
        '稳定的品质保障',
        '专业的应用指导',
        '灵活的供货方案',
        '完善的退换货政策'
      ],
      target: '3个月介质销售额突破150万，新增SKU20+',
      resources: [
        '产品经理2名',
        '质检设备投入',
        '库存管理系统',
        '培训资料制作'
      ]
    }
  },
  {
    id: 'parts',
    name: '配件增值体系',
    category: '耗材增值',
    categoryColor: 'teal',
    details: {
      positioning: '提供全系列设备配件，打造一站式配件采购平台',
      customer: '设备维修商、终端用户、设备制造商',
      actions: [
        '完善配件数据库，确保快速查询',
        '建立配件库存，保障快速发货',
        '提供配件安装指导和技术支持',
        '推出配件优惠套餐，提升客单价',
        '建立配件回收和以旧换新服务'
      ],
      sellingPoints: [
        '全品类配件覆盖',
        '快速的发货速度',
        '专业的技术支持',
        '优惠的套餐价格',
        '贴心的售后服务'
      ],
      target: '3个月配件销售额突破100万，服务客户200+',
      resources: [
        '配件专员3名',
        '仓储管理系统',
        '技术资料库',
        '客服团队'
      ]
    }
  }
];

export const FOUR_MOATS = [
  {
    id: 'moat1',
    title: '全维度硬件自研',
    subtitle: '控制系统 / 执行系统',
    description: '自主研发运动控制卡、驱动板、电机系统等核心硬件，拥有完全自主知识产权，不受制于外部供应商，确保产品稳定性和技术领先性。',
    icon: 'Cpu',
    highlights: ['运动控制卡', '驱动板', '电机系统', '自主知识产权']
  },
  {
    id: 'moat2',
    title: '全链条供应链',
    subtitle: '钣金 / 注塑 / 喷漆',
    description: '自建钣金、注塑、喷漆生产线，实现核心部件自主生产，有效控制成本，缩短交期，确保产品品质一致性。',
    icon: 'Factory',
    highlights: ['钣金加工', '注塑成型', '表面喷涂', '品质管控']
  },
  {
    id: 'moat3',
    title: '全场景解决方案',
    subtitle: '设备 / 耗材 / 服务',
    description: '从设备销售到耗材供应，再到技术服务，提供全生命周期解决方案，建立客户粘性，实现长期价值创造。',
    icon: 'Layers',
    highlights: ['设备销售', '耗材供应', '技术服务', '培训支持']
  },
  {
    id: 'moat4',
    title: '全球化服务网络',
    subtitle: '200+ 服务网点',
    description: '建立覆盖全国的服务网络，200+服务网点，7x24小时响应，确保客户问题快速解决，提升客户满意度。',
    icon: 'Globe',
    highlights: ['全国覆盖', '快速响应', '专业团队', '远程支持']
  }
];

export const BUSINESS_LOOP = [
  {
    id: 'lead',
    title: '获客',
    description: '通过线上线下多渠道获取客户线索',
    icon: 'Users'
  },
  {
    id: 'convert',
    title: '转化',
    description: '通过专业咨询和演示完成客户转化',
    icon: 'Target'
  },
  {
    id: 'deliver',
    title: '交付',
    description: '按时交付设备并完成安装调试',
    icon: 'Truck'
  },
  {
    id: 'repurchase',
    title: '复购',
    description: '提供优质耗材和配件促进重复购买',
    icon: 'RefreshCw'
  },
  {
    id: 'upgrade',
    title: '升级',
    description: '引导客户升级设备和拓展产品线',
    icon: 'ArrowUp'
  },
  {
    id: 'platform',
    title: '平台化',
    description: '将客户转化为平台生态合作伙伴',
    icon: 'Network'
  }
];

export const SALES_SCRIPT = `
【泰乐机械 - 销售全员极简口播版】

我们是谁？
泰乐机械，从设备制造商升级为定制创业生态平台，致力于成为"色彩搬运工"！

我们做什么？
提供三大板块：整机方案、核心部件、耗材增值，覆盖九大销售体系。

我们有什么优势？
1. 独家DTF抖粉机、组合机技术
2. 柔性板专利持有者
3. 全维度硬件自研能力
4. 全链条供应链管控

我们的目标？
打造千亿级"设备+耗材+服务"产业互联网平台！

行动号召：
立即咨询，开启您的创业之旅！
`;

export const HEAT_TRANSFER_ECOSYSTEM = {
  center: {
    title: '泰乐热转印',
    subtitle: '个性定制生态',
    description: '一站式热转印解决方案提供商'
  },
  firstLayer: {
    title: '基础支撑圈',
    description: '底层能力底座，为所有业务提供技术与设备支撑',
    processMatrix: [
      '柯式白墨烫画',
      '热升华转印',
      '热烫金/烫银',
      'UV水晶标转印',
      '柔性膜转印',
      '木纹/金属转印'
    ],
    equipmentMatrix: [
      '抖粉机',
      '白墨烫画机',
      '热升华打印机',
      '摇头烫画机',
      '便携式烫画机',
      'UV水晶标机',
      '烤杯/烤盘/烤帽机',
      '高压滚筒印花机'
    ]
  },
  secondLayer: [
    {
      id: 'ka',
      name: 'KA大客户体系',
      tracks: ['企业礼品定制', '婚庆定制'],
      positioning: '头部品牌/企业/机构批量定制服务，提供专属方案'
    },
    {
      id: 'global',
      name: '全球电商体系',
      tracks: ['潮玩手办定制', '电商零售定制'],
      positioning: '跨境/国内电商供货、一件代发、平台爆款定制'
    },
    {
      id: 'solution',
      name: '场景解决方案体系',
      tracks: ['文创景区文旅定制', '鲜花礼品定制'],
      positioning: '景区/校园/商超定制场景落地，提供整体服务包'
    },
    {
      id: 'process',
      name: '工艺耗材体系',
      tracks: ['全赛道耗材供应'],
      positioning: '热转印墨水、转印纸、烫画膜、色带、离型膜等全品类耗材'
    },
    {
      id: 'substrate',
      name: '基材耗材体系',
      tracks: ['全赛道基材供应'],
      positioning: 'T恤面料、陶瓷杯、金属板材、箱包面料、数码外壳等基材'
    },
    {
      id: 'supply',
      name: '模块供应链体系',
      tracks: ['标准化预制件/素材库供应'],
      positioning: '半成品素材库、定制化配件包、柔性供应链服务'
    },
    {
      id: 'franchise',
      name: '加盟扩张体系',
      tracks: ['DIY拼豆手工定制', '校园文创定制'],
      positioning: '线下门店加盟、工作室合作、区域代理、展销中心合作'
    },
    {
      id: 'saas',
      name: 'SaaS工具体系',
      tracks: ['线上定制工具', '订单管理系统'],
      positioning: '定制设计工具、客户管理系统、线上定制小程序'
    },
    {
      id: 'training',
      name: '教育培训体系',
      tracks: ['母婴儿童服饰定制', '家居个性定制'],
      positioning: '设备操作、工艺技术、开店运营、定制设计全维度培训'
    }
  ],
  thirdLayer: [
    {
      id: 'flower',
      name: '鲜花礼品定制赛道',
      slogan: '',
      scenes: ['节日礼品', '伴手礼', '花束周边', '贺卡定制'],
      products: ['定制贺卡', '花束包装', '礼品袋', '伴手礼套装']
    },
    {
      id: 'cultural',
      name: '文创景区文旅赛道',
      slogan: '一个都能做 欢迎定做',
      scenes: ['景区文创', '文旅周边', 'IP衍生', '纪念品定制'],
      products: ['景区纪念币', '文创书签', '帆布袋', '钥匙扣', '纪念T恤']
    },
    {
      id: 'diy',
      name: 'DIY拼豆手工赛道',
      slogan: '',
      scenes: ['亲子DIY', '手工活动', '创意拼豆定制', 'DIY工坊'],
      products: ['拼豆挂件', '拼豆钥匙扣', '拼豆装饰画', 'DIY套装']
    },
    {
      id: 'baby',
      name: '母婴儿童服饰赛道',
      slogan: '',
      scenes: ['童装定制', '亲子装', '宝宝纪念品', '母婴周边'],
      products: ['儿童T恤', '亲子卫衣', '宝宝围兜', '婴儿枕套', '成长纪念册周边']
    },
    {
      id: 'toy',
      name: '潮玩手办赛道',
      slogan: '',
      scenes: ['潮玩周边', '手办配件', 'IP联名定制', '粉丝应援'],
      products: ['手办底座', '潮玩配件', '定制立牌', '徽章', '周边盲盒']
    },
    {
      id: 'home',
      name: '家居个性定制赛道',
      slogan: '',
      scenes: ['家居软装', '家装定制', '生活好物', '空间装饰'],
      products: ['抱枕', '地垫', '窗帘', '餐具', '装饰画', '木纹转印板材']
    },
    {
      id: 'school',
      name: '校园文创赛道',
      slogan: '一个都能做 欢迎定做',
      scenes: ['校园周边', '校服定制', '毕业纪念', '学童用品'],
      products: ['班服', '校服', '毕业纪念册', '校徽', '帆布袋', '学童文具']
    },
    {
      id: 'enterprise',
      name: '企业礼品赛道',
      slogan: '',
      scenes: ['企业福利', '商务伴手礼', '品牌周边', '团建定制'],
      products: ['企业T恤', '保温杯', '笔记本', '帆布袋', '定制礼品套装']
    },
    {
      id: 'wedding',
      name: '婚庆定制赛道',
      slogan: '',
      scenes: ['婚礼周边', '伴手礼', '婚纱写真', '周年纪念'],
      products: ['喜帖', '伴手礼', '婚礼纪念册周边', '情侣T恤', '定制摆件']
    }
  ],
  fourthLayer: {
    title: '终端产品&营销场景',
    categories: [
      {
        name: '穿戴类',
        items: ['T恤', '卫衣', '校服', '工装', '帽子', '围巾', '袜子', '亲子装', '童装']
      },
      {
        name: '日用类',
        items: ['保温杯', '陶瓷器皿', '鼠标垫', '抱枕', '餐具', '文具']
      },
      {
        name: '运动类',
        items: ['篮球', '足球', '球拍', '瑜伽垫', '运动护具', '队服']
      },
      {
        name: '箱包类',
        items: ['帆布袋', '双肩包', '行李箱', '化妆包', '礼品袋']
      },
      {
        name: '数码类',
        items: ['手机壳', '平板壳', '家电外壳', '数码配件', '手办配件']
      },
      {
        name: '纪念类',
        items: ['钥匙扣', '摆件', '纪念牌', '相册周边', '拼豆挂件']
      },
      {
        name: '家装类',
        items: ['木纹转印门板', '金属板材', '装饰墙板', '窗帘', '地垫']
      }
    ]
  }
};

export const CORE_BUSINESS = {
  title: '三大核心业务板块',
  subtitle: '全域商业承载主体',
  sections: [
    {
      id: 'systems',
      name: '整机与方案业务部',
      nameEn: 'Systems & Solutions',
      positioning: '流量入口 · 获客底盘 · 品牌载体',
      task: '占领终端市场、沉淀全域客户基数，打造轻量化场景化创业解决方案领导品牌，为后端耗材、服务、生态业务持续引流。',
      color: 'blue',
      channels: [
        {
          name: 'KA大客户渠道',
          tag: '现金流稳定器',
          target: '司顺、赛维等全球头部客户、大型供应链品牌商、跨境核心分销商',
          strategy: '联合研发打法：依托自研电控、发热模块、结构一体化核心优势，为头部客户提供专属定制机型、耗材参数适配方案，建立季度联合共创机制，深度绑定其全球分销体系，锁定年度长期锁单订单。'
        },
        {
          name: '全球电商渠道',
          tag: '规模放量引擎',
          target: '国际站、1688、京东、天猫、Amazon、Shopee等海内外主流平台',
          strategy: '爆款分层打法：1688主打批量批发分销；国际站主打工厂直供、跨境整单交付；京东/天猫打造高端自营品牌，树立行业价格锚点与品牌标杆。'
        },
        {
          name: '垂直细分场景渠道',
          tag: '高溢价增长极',
          target: '全球小B创业者、线下定制门店、文创工作室、社区轻创业人群',
          strategy: '「帮客户赚钱」方案打法：摒弃传统单机售卖思维，输出标准化轻量化创业包，从卖机器升级为输出整套盈利方案。'
        }
      ],
      scenarios: ['鲜花礼品定制', '文创景区文旅', 'DIY拼豆手工', '母婴儿童服饰', '潮玩手办', '家居个性定制', '校园文创', '企业礼品', '婚庆定制', '公益轻创业', '宠物周边定制', '商场数码快闪'],
      support: {
        product: '全系列热转印机、烫画/印花主机、配套辅助设备、标准化场景创业包',
        operation: '线索获取→需求挖掘→场景方案输出→成交交付→落地陪跑→复购裂变全流程闭环运营',
        marketing: '品牌矩阵建设、全域内容种草、平台活动营销、渠道深度运营、数字化精准获客'
      }
    },
    {
      id: 'components',
      name: '核心部件与工业赋能部',
      nameEn: 'Components & OEM',
      positioning: '技术中枢 · 壁垒底座 · B端增值引擎',
      task: '承载公司全部自研技术与实体产能优势，对内支撑整机业务高品质、低成本量产，对外输出模块化技术与工业加工能力，实现技术壁垒商业化变现。',
      color: 'purple',
      capabilities: [
        { name: '高精度\n发热模块', desc: '自主研发核心发热技术' },
        { name: '压力+结构\n一体化模块', desc: '结构设计自主可控' },
        { name: '执行+控制\n系统模块', desc: '智能控制全自研' }
      ],
      production: ['自有钣金车间', '注塑车间', '专业喷漆产线'],
      business: [
        { 
          type: '对内赋能', 
          desc: '为KA定制机型、标准化整机提供核心模块与结构件自研自产支撑，缩短交付周期、严控产品品质、压缩生产成本。'
        },
        { 
          type: '对外变现', 
          desc: '面向同行设备厂商、跨界定制企业、开放核心模块ODM定制、钣金注塑代工、工业喷漆加工、整机结构方案输出业务。'
        }
      ],
      value: '打破行业"外购核心配件、组装贴牌"的低端模式，实现核心技术不卡脖子、核心产能自主可控。'
    },
    {
      id: 'consumables',
      name: '耗材与增值服务部',
      nameEn: 'Consumables & Value-added Services',
      positioning: '利润引擎 · 复购底盘 · 生态护城河',
      task: '聚焦用户长期刚性消费需求，沉淀私域粘性、驱动持续复购；依托差异化优势打造高毛利产品矩阵；全面搭建数字化闭环服务生态，稳步拉升客户留存与终身价值。',
      color: 'teal',
      modules: [
        {
          name: '工艺耗材',
          tag: '高频复购基础盘',
          products: '烫画纸/膜、墨水、特种粉、离型膜等核心工艺耗材',
          strategy: '生态锁定+参数绑定+自动回购：依托自研电控主板，内置泰乐耗材专属适配参数，打造"原厂耗材=低废品、高稳定"的用户认知。',
          value: '毛利率40%-60%+'
        },
        {
          name: '基材耗材',
          tag: '提升客单价+场景闭环',
          products: '空白T恤、马克杯、拼豆板、定制帽子、配套包装等成品基材',
          strategy: '一站式采购+场景包带入+全域闭环：与场景创业包深度绑定，将客户全部采购需求闭环在泰乐生态内。',
          value: '客单价提升30%-80%'
        },
        {
          name: '数字化增值服务',
          tag: 'SaaS复购放大器',
          products: 'AI智能设计工具、设备远程管理、耗材智能预警、订单管理、经营数据分析系统',
          strategy: '工具赋能+数据驱动+生态绑定：AI设计工具提供智能抠图、海量通用模板，大幅降低客户定制门槛。',
          value: '复购率提升30%-60%'
        },
        {
          name: '客户成功与复购运营',
          tag: '服务闭环',
          products: '设备安装培训、耗材适配指导、工艺效果优化、定期复购提醒、耗材订阅服务',
          strategy: '陪伴式服务+降流失+提LTV：从单次卖货升级为长期伙伴式运营，通过耗材订阅制锁定长期稳定订单。',
          value: 'LTV提升2-5倍'
        }
      ]
    }
  ]
};

export const VERTICAL_SCENARIOS = {
  title: '垂直场景',
  subtitle: '轻创业项目',
  scenarios: [
    {
      id: 1,
      name: '鲜花礼品定制',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20flower%20shop%20with%20custom%20ribbon%20and%20gift%20packaging%2C%20elegant%20floral%20arrangement%2C%20soft%20pink%20and%20white%20tones%2C%20professional%20product%20photography&image_size=landscape_4_3',
      sellingPoint: '贴合节日情感消费刚需，低成本升级门店服务，直接提升客单价20%+',
      tags: ['高复购', '低成本', '快速回本'],
      channels: '鲜花店、礼品店、花艺工作室、节日伴手礼门店',
      model: '店中店赋能、零面积新增、存量门店升级',
      products: '定制花卡、专属丝带、印花包装纸、花艺吊牌、节日伴手礼、贺卡、花束周边',
      profit: '贴合节日情感消费刚需，低成本升级门店服务，无需新增房租人工，直接提升门店客单价20%以上，复购率极高',
      strategy: '0元设备入驻、利润分成模式，门店仅需采购专属耗材，总部提供设计素材，节日统一营销赋能',
      customers: '鲜花店店主、花艺工作室创业者、礼品店经营者、节日伴手礼商家',
      package: '包含一台自研热转印设备、50套鲜花专属定制耗材（丝带、花卡、印花包装纸）、设计小程序使用权、鲜花礼品场景营销策划案'
    },
    {
      id: 2,
      name: '文创景区文旅',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20cultural%20souvenir%20shop%20in%20scenic%20tourist%20area%2C%20custom%20canvas%20bags%20and%20memorabilia%2C%20Chinese%20cultural%20elements%2C%20warm%20lighting&image_size=landscape_4_3',
      sellingPoint: '独家场景专属定制，解决景区纪念品同质化，溢价空间极高',
      tags: ['高溢价', '政府合作', '标杆案例'],
      channels: '各大景区、文旅商业街、非遗展馆、城市文创馆、政府文旅项目',
      model: '景区移动工作站、文旅项目整店输出、政企合作特许经营',
      products: '城市地标纪念品、非遗纹样印花、景区专属帆布袋、纪念水杯、文创挂件、文旅IP周边、城市伴手礼',
      profit: '独家场景专属定制，立等可取，解决景区纪念品同质化问题，溢价空间极高，可承接政府文创落地、文化出海项目',
      strategy: '搭载本地化素材库，对接文旅局合作，拿下景区设备供应与定制服务经营权，打造文旅标杆案例',
      customers: '景区商户、文旅项目运营商、城市文创馆负责人、地方文旅合作服务商',
      package: '包含一台自研热转印设备、50套文旅文创空白耗材（纪念水杯、帆布袋、文创挂件或地方特色物件）、设计小程序使用权、文旅景区场景营销策划案'
    },
    {
      id: 3,
      name: 'DIY拼豆手工体验',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=colorful%20DIY%20craft%20workshop%20with%20perler%20beads%20art%2C%20parent-child%20activity%2C%20bright%20playful%20colors%2C%20creative%20handmade%20products&image_size=landscape_4_3',
      sellingPoint: '体验经济+亲子互动，现场体验收费+成品售卖双重盈利',
      tags: ['体验经济', '全年龄段', '双重盈利'],
      channels: '亲子手工馆、儿童乐园、文创体验馆、商场手工摊位、社区活动中心',
      model: '线下体验+成品售卖+材料包零售',
      products: '拼豆店赋能定制一体化设备、拼豆钥匙扣、手工装饰画、DIY定制套装、亲子手工纪念周边',
      profit: '主打体验经济、亲子互动，客群覆盖全年龄段，既能做现场体验收费，又能售卖成品和耗材包，双重盈利',
      strategy: '轻量化设备摆摊模式，操作零门槛，搭配标准化DIY材料包，无需专业技术，新手可快速上手',
      customers: '亲子手工馆创业者、儿童乐园经营者、社区手工活动负责人、文创体验馆主理人',
      package: '包含一台自研便携热转印设备、50套不同数块的拼图、设计小程序使用权、手工体验场景营销策划案'
    },
    {
      id: 4,
      name: '母婴儿童服饰',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20baby%20and%20children%20clothing%20store%2C%20custom%20printed%20kids%20t-shirts%20and%20family%20matching%20outfits%2C%20soft%20pastel%20colors%2C%20warm%20cozy%20atmosphere&image_size=landscape_4_3',
      sellingPoint: '母婴群体情感消费极强，主打专属独一无二，溢价远超普通童装',
      tags: ['高粘性', '长复购周期', '情感消费'],
      channels: '母婴店、童装店、亲子馆、儿童摄影店、早教机构',
      model: '门店增值服务、儿童专属定制、亲子套装定制',
      products: '儿童专属T恤、亲子卫衣、宝宝名字印花服饰、婴儿围兜、儿童抱枕、成长纪念周边、校服配饰',
      profit: '母婴群体情感消费极强，主打专属、独一无二，用户粘性高、复购周期长，溢价远超普通童装',
      strategy: '傻瓜式一键定制，搭配儿童专属设计素材库，适配门店日常引流、会员锁客',
      customers: '全职宝妈、母婴店店主、童装店经营者、儿童摄影机构负责人',
      package: '包含一台自研热转印设备、50个精选保温杯、设计小程序使用权、母婴儿童服饰场景营销策划案'
    },
    {
      id: 5,
      name: '潮玩手办盲盒',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=trendy%20art%20toy%20and%20blind%20box%20store%2C%20custom%20figurine%20accessories%20and%20collectibles%2C%20vibrant%20neon%20colors%2C%20modern%20youth%20culture%20aesthetic&image_size=landscape_4_3',
      sellingPoint: 'Z世代圈层消费，付费意愿极强，单客定价高、流量爆发力强',
      tags: ['Z世代', '高利润', '网红赛道'],
      channels: '潮玩店、盲盒门店、二次元商圈、饭圈周边店、文创集合店',
      model: '潮玩改造定制、IP周边衍生、粉丝专属定制',
      products: 'Labubu/棉花娃娃专属衣服、小书包、配饰、手办底座、定制立牌、徽章、饭圈应援周边、盲盒专属配件',
      profit: 'Z世代圈层消费，付费意愿极强，单客定价高、流量爆发力强，是当下网红高利润赛道',
      strategy: '聚焦"给潮玩加个名、做专属穿搭"差异化卖点，主打小众专属，快速收割圈层流量',
      customers: '潮玩店店主、盲盒门店经营者、二次元创业者、饭圈周边商家',
      package: '包含一台自研热转印设备、50套潮玩专属定制耗材（手办底座、配饰、立牌）、小尺寸潮玩服饰组件、设计小程序使用权、潮玩手办场景营销策划案'
    },
    {
      id: 6,
      name: '家居个性定制',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20home%20decor%20store%20with%20custom%20pillows%20and%20wall%20art%2C%20personalized%20home%20textiles%2C%20warm%20neutral%20tones%2C%20interior%20design%20showroom&image_size=landscape_4_3',
      sellingPoint: '主打家庭专属感、家装差异化，适配软装升级、新房装修刚需',
      tags: ['家装刚需', '差异化', '高客单'],
      channels: '家居软装店、建材店、软装工作室、家装配套门店',
      model: '家装配套增值、家居专属软装定制',
      products: '定制抱枕、地垫、窗帘、装饰画、餐具印花、木纹转印板材、家电外壳个性化印花',
      profit: '主打家庭专属感、家装差异化，摆脱成品家居同质化，适配软装升级、新房装修刚需',
      strategy: '对接家装、软装供应链，为门店提供定制增值服务，提升整套家装成交率',
      customers: '家居软装店店主、家装服务商、建材门店经营者、软装工作室创始人',
      package: '包含一台自研热转印设备、50件家居空白定制耗材（抱枕、装饰画、地垫）、设计小程序使用权、家居个性定制场景营销策划案'
    },
    {
      id: 7,
      name: '校园文创',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=university%20campus%20souvenir%20shop%2C%20custom%20class%20t-shirts%20and%20graduation%20memorabilia%2C%20school%20spirit%20merchandise%2C%20youthful%20energetic%20vibe&image_size=landscape_4_3',
      sellingPoint: '学生情感消费、集体刚需，毕业季开学季集中爆发，单量集中回款快',
      tags: ['集中爆发', '快速回款', '轻资产'],
      channels: '高校社团、校园超市、校园文创店、幼儿园、培训机构、毕业季项目',
      model: '校园摆摊、社团合作、毕业季批量定制、校园文创专柜',
      products: '班服、校服、毕业纪念周边、校徽文创、校园帆布袋、文具定制、幼儿园纪念礼品、培训机构伴手礼',
      profit: '学生情感消费、集体刚需，毕业季、开学季、节日集中爆发，单量集中、回款快',
      strategy: '便携电池版设备，支持校园流动摆摊，低成本试错，适配学生、创业者轻资产入局',
      customers: '在校大学生、校园社团负责人、培训机构老师、校园周边创业者',
      package: '包含一台自研便携热转印设备、50套校园文创耗材（班服辅料、文具、帆布袋）、设计小程序使用权、校园文创场景营销策划案'
    },
    {
      id: 8,
      name: '企业礼品定制',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20corporate%20gift%20showroom%2C%20custom%20branded%20merchandise%20and%20company%20uniforms%2C%20business%20gifts%20display%2C%20clean%20modern%20office%20aesthetic&image_size=landscape_4_3',
      sellingPoint: 'B端批量订单稳定、客单价高、复购持续，适配企业品牌宣传全场景',
      tags: ['B端稳定', '高客单价', '持续复购'],
      channels: '广告公司、礼品公司、企业服务商、商会、政企单位',
      model: 'KA大客户批量定制、企业年度礼品外包、团建活动配套',
      products: '企业工装、团建服饰、定制保温杯、商务伴手礼、企业LOGO周边、员工福利礼品、展会宣传物料',
      profit: 'B端批量订单稳定、客单价高、复购持续，适配企业品牌宣传、员工福利、商务接待全场景',
      strategy: '依托KA大客户体系，提供专属企业定制方案、批量代工、一站式落地服务',
      customers: '礼品公司老板、广告传媒商家、企业采购负责人、商会服务商',
      package: '包含一台自研热转印设备、50套商务礼品耗材（定制保温杯、工装辅料）、设计小程序使用权、企业礼品定制场景营销策划案'
    },
    {
      id: 9,
      name: '婚庆纪念定制',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20wedding%20favor%20and%20gift%20display%2C%20custom%20couple%20apparel%20and%20wedding%20souvenirs%2C%20romantic%20floral%20arrangement%2C%20soft%20pink%20and%20gold%20tones&image_size=landscape_4_3',
      sellingPoint: '婚庆场景溢价极高，主打专属纪念仪式感，单单利润空间大',
      tags: ['高溢价', '仪式感', '高利润'],
      channels: '婚庆公司、婚纱影楼、婚礼策划工作室、庆典公司',
      model: '婚礼配套增值服务、纪念日专属定制',
      products: '婚礼伴手礼、情侣服饰、婚纱写真周边、婚礼摆件、喜品印花、周年纪念礼品、婚宴宣传物料',
      profit: '婚庆场景溢价极高，主打专属纪念、仪式感，新人付费意愿强，单单利润空间大',
      strategy: '婚庆店中店合作，绑定婚礼全流程，作为影楼、婚庆公司增值盈利项目',
      customers: '婚庆公司创始人、婚纱影楼店长、婚礼策划师、庆典公司经营者',
      package: '包含一台自研热转印设备、50套婚庆定制耗材（伴手礼、情侣服饰辅料）、设计小程序使用权、婚庆纪念定制场景营销策划案'
    },
    {
      id: 10,
      name: '宠物周边定制',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20pet%20shop%20with%20custom%20pet%20accessories%2C%20personalized%20pet%20bandanas%20and%20leashes%2C%20adorable%20dogs%20and%20cats%2C%20warm%20friendly%20atmosphere&image_size=landscape_4_3',
      sellingPoint: '宠物主情感消费刚需，溢价是普通定制商品的3-5倍，赛道竞争小利润极高',
      tags: ['高溢价', '情感刚需', '蓝海赛道'],
      channels: '宠物店、宠物医院、宠物洗护店、宠物社群',
      model: '门店增值服务、宠物情感定制',
      products: '宠物专属围脖、印花牵引绳、宠物头像垫子、宠物纪念周边、宠物主人情侣服饰',
      profit: '宠物主情感消费刚需，溢价是普通定制商品的3-5倍，赛道竞争小、利润极高',
      strategy: '0元设备入驻、耗材持续复购模式，快速裂变全城宠物门店',
      customers: '宠物店店主、宠物医院经营者、宠物洗护店老板、宠物社群主理人',
      package: '包含一台自研热转印设备、50套宠物专属定制耗材（围脖、牵引绳、宠物垫）、设计小程序使用权、宠物定制场景营销策划案'
    },
    {
      id: 11,
      name: '商场数码快闪',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20shopping%20mall%20pop-up%20kiosk%2C%20custom%20phone%20case%20and%20digital%20accessories%20printing%2C%20young%20crowd%20shopping%2C%20vibrant%20urban%20retail%20scene&image_size=landscape_4_3',
      sellingPoint: '仅需0.5平米占地，适配周末海量年轻流量，即时成交快速变现无库存压力',
      tags: ['极小占地', '即时成交', '无库存'],
      channels: '商场摊位、步行街快闪店、网红街区、大学城商圈',
      model: '极小摊位、立等可取、现场即时定制',
      products: '个性化手机壳、平板壳、数码配件、网红小挂件、随身文创单品',
      profit: '仅需0.5平米占地面积，适配周末海量年轻流量，即时成交、快速变现、无库存压力',
      strategy: '轻量化便携设备，极简操作，无需专人值守，适配个人摆摊、副业创业',
      customers: '青年副业创业者、商圈摆摊人群、商场快闪商户、大学城创业个体',
      package: '包含一台自研便携热转印设备、50套数码空白耗材（手机壳、网红挂件）、设计小程序使用权、商场数码快闪场景营销策划案'
    },
    {
      id: 12,
      name: '公益轻创业',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=community%20support%20center%20for%20entrepreneurship%2C%20simple%20craft%20workshop%20for%20beginners%2C%20inclusive%20and%20accessible%20workspace%2C%20warm%20supportive%20environment&image_size=landscape_4_3',
      sellingPoint: '操作门槛极低傻瓜式一键操作，适配弱势群体轻创业，可对接政府帮扶政策',
      tags: ['低门槛', '政企合作', '批量落地'],
      channels: '残联、妇联、社区就业中心、创业孵化基地、宝妈/残疾人创业社群',
      model: '公益帮扶、批量就业扶持、政企项目合作',
      products: '简易名字贴、日用定制单品、小礼品、社区活动纪念周边、公益宣传物料',
      profit: '操作门槛极低、傻瓜式一键操作，适配弱势群体轻创业，可对接政府帮扶政策，批量落地、批量出货',
      strategy: '挂靠政企创业帮扶库，以"就业扶持、公益赋能"为切入点，实现批量成交、长期合作',
      customers: '残疾创业者、待业宝妈、社区就业帮扶对象、基层轻创业人群',
      package: '包含一台自研轻量化热转印设备、50件日用基础定制耗材、设计小程序使用权、公益就业轻创业场景营销策划案'
    }
  ]
};
