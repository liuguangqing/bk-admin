const major = [
  { value: '01', label: '哲学', children: [
    { value: '0101', label: '哲学类', children: [
      { value: '010101', label: '哲学' },
      { value: '010102', label: '逻辑学' },
      { value: '010103K', label: '宗教学' },
      { value: '010104T', label: '伦理学', type:1 }
    ]}
  ]},

  { value: '02', label: '经济学', children: [
    { value: '0201', label: '经济学类', children: [
      { value: '020101', label: '经济学' },
      { value: '020102', label: '经济统计学' },
      { value: '020103T', label: '国民经济管理', type:1 },
      { value: '020104T', label: '资源与环境经济学', type:1 },
      { value: '020105T', label: '商务经济学', type:1 },
      { value: '020106T', label: '能源经济', type:1 },
    ]},
    { value: '0202', label: '财政学类', children: [
      { value: '020201K', label: '财政学' },
      { value: '020202', label: '税收学' }
    ]},
    { value: '0203', label: '金融学类', children: [
      { value: '020201K', label: '金融学' },
      { value: '020302', label: '金融工程' },
      { value: '020303', label: '保险学' },
      { value: '020304', label: '投资学' },
      { value: '020305T', label: '金融数学', type:1 },
      { value: '020306T', label: '信用管理', tip:'可授经济学或管理学学士学位', type:1 },
      { value: '020307T', label: '经济与金融', type:1 }
    ]},
    { value: '0204', label: '经济与贸易类', children: [
      { value: '020401', label: '国际经济与贸易' },
      { value: '020402', label: '贸易经济' }
    ]},
  ]},

  { value: '03', label: '法学', children: [
    { value: '0301', label: '法学类', children: [
      { value: '030101K', label: '法学' },
      { value: '030102T', label: '知识产权', type:1 },
      { value: '030103T', label: '监狱学', type:1 },
    ]},
    { value: '0302', label: '政治学类', children: [
      { value: '030201', label: '政治学与行政学' },
      { value: '030202', label: '国际政治' },
      { value: '030203', label: '外交学' },
      { value: '030204T', label: '国际事务与国际关系', type:1 },
      { value: '030205T', label: '政治学、经济学与哲学', type:1 }
    ]},
    { value: '0303', label: '社会学类', children: [
      { value: '030301', label: '社会学' },
      { value: '030302', label: '社会工作' },
      { value: '030303T', label: '人类学', type:1 },
      { value: '030304T', label: '女性学', type:1 },
      { value: '030305T', label: '家政学', type:1 },

    ]},
    { value: '0304', label: '民族学类', children: [
      { value: '030401', label: '民族学' }
    ]},
    { value: '0305', label: '马克思主义理论类', children: [
      { value: '030501', label: '科学社会主义' },
      { value: '030502', label: '中国共产党历史' },
      { value: '030503', label: '思想政治教育' }
    ]},
    { value: '0306', label: '公安学类', children: [
      { value: '030601K', label: '治安学' },
      { value: '030602K', label: '侦查学' },
      { value: '030603K', label: '边防管理' },
      { value: '030604TK', label: '禁毒学', type:1 },
      { value: '030605TK', label: '警犬技术', type:1 },
      { value: '030606TK', label: '经济犯罪侦查', type:1 },
      { value: '030607TK', label: '边防指挥', type:1 },
      { value: '030608TK', label: '消防指挥', type:1 },
      { value: '030609TK', label: '警卫学', type:1 },
      { value: '030610TK', label: '公安情报学', type:1 },
      { value: '030611TK', label: '犯罪学', type:1 },
      { value: '030612TK', label: '公安管理学', type:1 },
      { value: '030613TK', label: '涉外警务', type:1 },
      { value: '030614TK', label: '国内安全保卫', type:1 },
      { value: '030615TK', label: '警务指挥与战术', type:1 }
    ]},
  ]},

  { value: '04', label: '教育学', children: [
    { value: '0401', label: '教育学类', children: [
      { value: '040101', label: '教育学' },
      { value: '040102', label: '科学教育' },
      { value: '040103', label: '人文教育' },
      { value: '040104', label: '教育技术学', tip:'可授教育学或理学或工学学士学位' },
      { value: '040105', label: '艺术教育', tip:'可授教育学或艺术学学士学位' },
      { value: '040106', label: '学前教育' },
      { value: '040107', label: '小学教育' },
      { value: '040108', label: '特殊教育' },
      { value: '040109T', label: '华文教育', type:1 }
    ]},
    { value: '0402', label: '体育学类', children: [
      { value: '040201', label: '体育教育' },
      { value: '040202', label: '运动训练' },
      { value: '040303', label: '社会体育指导与管理' },
      { value: '040404', label: '武术与民族传统体育' },
      { value: '040505', label: '运动人体科学' },
      { value: '040506T', label: '运动康复', tip:'可授教育学或理学学士学位', type:1 },
      { value: '040507T', label: '休闲体育', type:1 }
    ]},
  ]},
  
  { value: '05', label: '文学', children: [
    { value: '0501', label: '中国语言文学类', children: [
      { value: '050101', label: '汉语言文学' },
      { value: '050102', label: '汉语言' },
      { value: '050103', label: '汉语国际教育' },
      { value: '050104', label: '中国少数民族语言文学' },
      { value: '050105', label: '古典文献学' },
      { value: '050106T', label: '应用语言学', type:1 },
      { value: '050107T', label: '秘书学', type:1 }
    ]},
    { value: '0502', label: '外国语言文学类', children: [
      { value: '050201', label: '英语' },
      { value: '050202', label: '俄语' },
      { value: '050203', label: '德语' },
      { value: '050204', label: '法语' },
      { value: '050205', label: '西班牙语' },
      { value: '050206', label: '阿拉伯语' },
      { value: '050207', label: '日语' },
      { value: '050208', label: '波斯语' },
      { value: '050209', label: '朝鲜语' },
      { value: '050210', label: '菲律宾语' },
      { value: '050211', label: '梵语巴利语' },
      { value: '050212', label: '印度尼西亚语' },
      { value: '050213', label: '印地语' },
      { value: '050214', label: '柬埔寨语' },
      { value: '050215', label: '老挝语' },
      { value: '050216', label: '缅甸语' },
      { value: '050217', label: '马来语' },
      { value: '050218', label: '蒙古语' },
      { value: '050219', label: '僧伽罗语' },
      { value: '050220', label: '泰语' },
      { value: '050221', label: '乌尔都语' },
      { value: '050222', label: '希伯来语' },
      { value: '050223', label: '越南语' },
      { value: '050224', label: '豪萨语' },
      { value: '050225', label: '斯瓦希里语' },
      { value: '050226', label: '阿尔巴尼亚语' },
      { value: '050227', label: '保加利亚语' },
      { value: '050228', label: '波兰语' },
      { value: '050229', label: '捷克语' },
      { value: '050230', label: '斯洛伐克语' },
      { value: '050231', label: '罗马尼亚语' },
      { value: '050232', label: '葡萄牙语' },
      { value: '050233', label: '瑞典语' },
      { value: '050234', label: '塞尔维亚语' },
      { value: '050235', label: '土耳其语' },
      { value: '050236', label: '希腊语' },
      { value: '050237', label: '匈牙利语' },
      { value: '050238', label: '意大利语' },
      { value: '050239', label: '泰米尔语' },
      { value: '050240', label: '普什图语' },
      { value: '050241', label: '世界语' },
      { value: '050242', label: '孟加拉语' },
      { value: '050243', label: '尼泊尔语' },
      { value: '050244', label: '克罗地亚语' },
      { value: '050245', label: '荷兰语' },
      { value: '050246', label: '芬兰语' },
      { value: '050247', label: '乌克兰语' },
      { value: '050248', label: '挪威语' },
      { value: '050249', label: '丹麦语' },
      { value: '050250', label: '冰岛语' },
      { value: '050251', label: '爱尔兰语' },
      { value: '050252', label: '拉脱维亚语' },
      { value: '050253', label: '立陶宛语' },
      { value: '050254', label: '斯洛文尼亚语' },
      { value: '050255', label: '爱沙尼亚语' },
      { value: '050256', label: '马耳他语' },
      { value: '050257', label: '哈萨克语' },
      { value: '050258', label: '乌兹别克语' },
      { value: '050259', label: '祖鲁语' },
      { value: '050260', label: '拉丁语' },
      { value: '050261', label: '翻译' },
      { value: '050262', label: '商务英语' }
    ]},
    { value: '0503', label: '新闻传播学类', children: [
      { value: '050301', label: '新闻学' },
      { value: '050302', label: '广播电视学' },
      { value: '050303', label: '广告学' },
      { value: '050304', label: '传播学' },
      { value: '050305', label: '编辑出版学' },
      { value: '050306T', label: '网络与新媒体', type:1 },
      { value: '050307T', label: '数字出版', type:1 }
    ]}
  ]},

  { value: '06', label: '历史学', children: [
    { value: '0601', label: '历史学类', children: [
      { value: '060101', label: '历史学' },
      { value: '060102', label: '世界史' },
      { value: '060103', label: '考古学' },
      { value: '060104', label: '文物与博物馆学' },
      { value: '060105T', label: '文物保护技术', type:1 },
      { value: '060106T', label: '外国语言与外国历史', tip:'可授历史学或文学学士学位', type:1 }
    ]},
  ]},

  { value: '07', label: '理学', children: [
    { value: '0701', label: '数学类', children: [
      { value: '070101', label: '数学与应用数学' },
      { value: '070102', label: '信息与计算科学' },
      { value: '070103T', label: '数理基础科学', type:1 }
    ]},
    { value: '0702', label: '物理学类', children: [
      { value: '070201', label: '物理学' },
      { value: '070202', label: '应用物理学' },
      { value: '070203', label: '核物理' },
      { value: '070104T', label: '声学', type:1 }
    ]},
    { value: '0703', label: '化学类', children: [
      { value: '070301', label: '化学' },
      { value: '070302', label: '应用化学', tip:'可授理学或工学学士学位' },
      { value: '070303T', label: '化学生物学', type:1 },
      { value: '070304T', label: '分子科学与工程', type:1 }
    ]},
    { value: '0704', label: '天文学类', children: [
      { value: '070401', label: '天文学' }
    ]},
    { value: '0705', label: '地理科学类', children: [
      { value: '070501', label: '地理科学' },
      { value: '070502', label: '自然地理与资源环境', tip:'可授理学或管理学学士学位' },
      { value: '070503', label: '人文地理与城乡规划', tip:'可授理学或管理学学士学位' },
      { value: '070504', label: '地理信息科学' }
    ]},
    { value: '0706', label: '大气科学类', children: [
      { value: '070601', label: '大气科学' },
      { value: '070602', label: '应用气象学' }
    ]},
    { value: '0707', label: '海洋科学类', children: [
      { value: '070701', label: '海洋科学' },
      { value: '070702', label: '海洋技术', tip:'可授理学或工学学士学位' },
      { value: '070703T', label: '海洋资源与环境', type:1 },
      { value: '070704T', label: '军事海洋学', type:1 }

    ]},
    { value: '0708', label: '地球物理学类', children: [
      { value: '070801', label: '地球物理学' },
      { value: '070802', label: '空间科学与技术', tip:'可授理学或工学学士学位' }
    ]},
    { value: '0709', label: '地质学类', children: [
      { value: '070901', label: '地质学' },
      { value: '070902', label: '地球化学' },
      { value: '070903T', label: '地球信息科学与技术', tip:'可授理学或工学学士学位', type:1 },
      { value: '070904T', label: '古生物学', type:1 }
    ]},
    { value: '0710', label: '生物科学类', children: [
      { value: '071001', label: '生物科学' },
      { value: '071002', label: '生物技术', tip:'可授理学或工学学士学位' },
      { value: '071003', label: '生物信息学', tip:'可授理学或工学学士学位`' },
      { value: '071004', label: '生态学' }
    ]},
    { value: '0711', label: '心理学类', children: [
      { value: '071101', label: '心理学', tip:'可授理学或教育学学士学位' },
      { value: '071102', label: ' 应用心理学', tip:'可授理学或教育学学士学位' }
    ]},
    { value: '0712', label: '统计学类', children: [
      { value: '071201', label: '统计学' },
      { value: '071202', label: '应用统计学' }
    ]},
  ]},

  { value: '08', label: '工学', children: [
    { value: '0801', label: '力学类', children: [
      { value: '080101', label: '理论与应用力学', tip:'可授工学或理学学士学位' },
      { value: '080102', label: '工程力学' }
    ]},
    { value: '0802', label: '机械类', children: [
      { value: '080201', label: '机械工程' },
      { value: '080202', label: '机械设计制造及其自动化' },
      { value: '080203', label: '材料成型及控制工程' },
      { value: '080204', label: '机械电子工程' },
      { value: '080205', label: '工业设计' },
      { value: '080206', label: '过程装备与控制工程' },
      { value: '080207', label: '车辆工程' },
      { value: '080208', label: '汽车服务工程' },
      { value: '080209T', label: '机械工艺技术', type:1 },
      { value: '080210T', label: '微机电系统工程', type:1 },
      { value: '080211T', label: '机电技术教育', type:1 },
      { value: '080212T', label: '汽车维修工程教育', type:1 }
    ]},
    { value: '0803', label: '仪器类', children: [
      { value: '080301', label: '测控技术与仪器' }
    ]},
    { value: '0804', label: '材料类', children: [
      { value: '080401', label: '材料科学与工程' },
      { value: '080402', label: '材料物理', tip:'可授工学或理学学士学位' },
      { value: '080403', label: '材料化学', tip:'可授工学或理学学士学位' },
      { value: '080404', label: '冶金工程' },
      { value: '080405', label: '金属材料工程' },
      { value: '080406', label: '无机非金属材料工程' },
      { value: '080407', label: '高分子材料与工程' },
      { value: '080408', label: '复合材料与工程' },
      { value: '080409T', label: '粉体材料科学与工程', type:1 },
      { value: '080410T', label: '宝石及材料工艺学', type:1 },
      { value: '080411T', label: '焊接技术与工程', type:1},
      { value: '080412T', label: '功能材料', type:1 },
      { value: '080413T', label: '纳米材料与技术', type:1 },
      { value: '080414T', label: '新能源材料与器件', type:1 }
    ]},
    { value: '0805', label: '能源动力类', children: [
      { value: '080501', label: '能源与动力工程' },
      { value: '080502T', label: '能源与环境系统工程', type:1 },
      { value: '080503T', label: '新能源科学与工程', type:1 }
    ]},
    { value: '0806', label: '电气类', children: [
      { value: '080601', label: '电气工程及其自动化' },
      { value: '080602T', label: '智能电网信息工程', type:1 },
      { value: '080603T', label: '光源与照明', type:1 },
      { value: '080604T', label: '电气工程与智能控制', type:1 }
    ]},
    { value: '0807', label: '电子信息类', children: [
      { value: '080701', label: '电子信息工程', tip:'可授工学或理学学士学位' },
      { value: '080702', label: '电子科学与技术', tip:'可授工学或理学学士学位' },
      { value: '080703', label: '通信工程' },
      { value: '080704', label: '微电子科学与工程', tip:'可授工学或理学学士学位' },
      { value: '080705', label: '光电信息科学与工程', tip:'可授工学或理学学士学位' },
      { value: '080706', label: '信息工程' },

      { value: '080707T', label: '广播电视工程', type:1 },
      { value: '080708T', label: '水声工程', type:1 },
      { value: '080709T', label: '电子封装技术', type:1},
      { value: '080710T', label: '集成电路设计与集成系统', type:1 },
      { value: '080711T', label: '医学信息工程', type:1 },
      { value: '080712T', label: '电磁场与无线技术', type:1 },
      { value: '080713T', label: '电波传播与天线', type:1 },
      { value: '080714T', label: '电子信息科学与技术', tip:'可授工学或理学学士学位', type:1 },
      { value: '080715T', label: '电信工程及管理', type:1 },
      { value: '080716T', label: '应用电子技术教育', type:1 },
    ]},
    { value: '0808', label: '自动化类', children: [
      { value: '080801', label: '自动化' },
      { value: '080802T', label: '轨道交通信号与控制', type:1 }
    ]},
    { value: '0809', label: '计算机类', children: [
      { value: '080901', label: '计算机科学与技术', tip:'可授工学或理学学士学位' },
      { value: '080902', label: '软件工程' },
      { value: '080903', label: '网络工程' },
      { value: '080904K', label: '信息安全', tip:'可授工学或理学或管理学学士学位' },
      { value: '080905', label: '物联网工程' },
      { value: '080906', label: '数字媒体技术' },
      { value: '080907T', label: '智能科学与技术', type:1 },
      { value: '080908T', label: '空间信息与数字技术', type:1 },
      { value: '080909T', label: '电子与计算机工程', type:1 },
    ]},
    { value: '0810', label: '土木类', children: [
      { value: '081001', label: '软件工程' },
      { value: '081002', label: '建筑环境与能源应用工程' },
      { value: '081003', label: '给排水科学与工程' },
      { value: '081004', label: '建筑电气与智能化' },
      { value: '081005T', label: '城市地下空间工程', type:1 },
      { value: '081006T', label: '道路桥梁与渡河工程', type:1 }
    ]},
    { value: '0811', label: '水利类', children: [
      { value: '081101', label: '水利水电工程' },
      { value: '081102', label: '水文与水资源工程' },
      { value: '081103', label: '港口航道与海岸工程' },
      { value: '081104T', label: '水务工程', type:1 }
    ]},
    { value: '0812', label: '测绘类', children: [
      { value: '081201', label: '测绘工程' },
      { value: '081202', label: '遥感科学与技术' },
      { value: '081203T', label: '导航工程', type:1 },
      { value: '081204T', label: '地理国情监测', type:1 }
    ]},
    { value: '0813', label: '化工与制药类', children: [
      { value: '081301', label: '化学工程与工艺' },
      { value: '081302', label: '制药工程' },
      { value: '081303T', label: '资源循环科学与工程', type:1 },
      { value: '081304T', label: '能源化学工程', type:1 },
      { value: '081305T', label: '化学工程与工业生物工程', type:1 }
    ]},
    { value: '0814', label: '地质类', children: [
      { value: '081401', label: '地质工程' },
      { value: '081402', label: '勘查技术与工程' },
      { value: '081403', label: '资源勘查工程' },
      { value: '081404T', label: '地下水科学与工程', type:1 }
    ]},
    { value: '0815', label: '矿业类', children: [
      { value: '081501', label: '采矿工程' },
      { value: '081502', label: '石油工程' },
      { value: '081503', label: '矿物加工工程' },
      { value: '081504', label: '油气储运工程' },
      { value: '081505T', label: '矿物资源工程', type:1 },
      { value: '081506T', label: '海洋油气工程', type:1 }
    ]},
    { value: '0816', label: '纺织类', children: [
      { value: '081601', label: '纺织工程' },
      { value: '081602', label: '服装设计与工程', tip:'可授工学或艺术学学士学位' },
      { value: '081603T', label: '非织造材料与工程', type:1 },
      { value: '081604T', label: '服装设计与工艺教育', type:1 }
    ]},
    { value: '0817', label: '轻工类', children: [
      { value: '081701', label: '轻化工程' },
      { value: '081702', label: '包装工程' },
      { value: '081703', label: '印刷工程' },
    ]},
    { value: '0818', label: '交通运输类', children: [
      { value: '081801', label: '交通运输' },
      { value: '081802', label: '交通工程' },
      { value: '081803K', label: '航海技术' },
      { value: '081804K', label: '轮机工程' },
      { value: '081805K', label: '飞行技术' },
      { value: '081806T', label: '交通设备与控制工程', type:1 },
      { value: '081807T', label: '救助与打捞工程', type:1 },
      { value: '081808TK', label: '船舶电子电气工程', type:1 }
    ]},
    { value: '0819', label: '海洋工程类', children: [
      { value: '081901', label: '船舶与海洋工程' },
      { value: '081902T', label: '海洋工程与技术', type:1 },
      { value: '081903T', label: '海洋资源开发技术', type:1 },
    ]},
    { value: '0820', label: '航空航天类', children: [
      { value: '082001', label: '航空航天工程' },
      { value: '082002', label: '飞行器设计与工程' },
      { value: '082003', label: '飞行器制造工程' },
      { value: '082004', label: '飞行器动力工程' },
      { value: '082005', label: '飞行器环境与生命保障工程' },
      { value: '082006T', label: '飞行器质量与可靠性', type:1 },
      { value: '082007T', label: '飞行器适航技术', type:1 }
    ]},
    { value: '0821', label: '兵器类', children: [
      { value: '082101', label: '武器系统与工程' },
      { value: '082102', label: '武器发射工程' },
      { value: '082103', label: '探测制导与控制技术' },
      { value: '082104', label: '弹药工程与爆炸技术' },
      { value: '082105', label: '特种能源技术与工程' },
      { value: '082106', label: '装甲车辆工程' },
      { value: '082107', label: '信息对抗技术' }
    ]},
    { value: '0822', label: '核工程类', children: [
      { value: '082201', label: '核工程与核技术' },
      { value: '082202', label: '辐射防护与核安全' },
      { value: '082203', label: '工程物理' },
      { value: '082204', label: '核化工与核燃料工程' }
    ]},
    { value: '0823', label: '农业工程类', children: [
      { value: '082301', label: '农业工程' },
      { value: '082302', label: '农业机械化及其自动化' },
      { value: '082303', label: '农业电气化' },
      { value: '082304', label: '农业建筑环境与能源工程' },
      { value: '082305', label: '农业水利工程' }
    ]},
    { value: '0824', label: '林业工程类', children: [
      { value: '082401', label: '森林工程' },
      { value: '082402', label: '木材科学与工程' },
      { value: '082403', label: '林产化工' }
    ]},
    { value: '0825', label: '环境科学与工程类', children: [
      { value: '082501', label: '环境科学与工程' },
      { value: '082502', label: '环境工程' },
      { value: '082503', label: '环境科学', tip:'可授工学或理学学士学位' },
      { value: '082504', label: '环境生态工程' },
      { value: '082505T', label: '环保设备工程', type:1 },
      { value: '082506T', label: '资源环境科学', tip:'可授工学或理学学士学位', type:1 },
      { value: '082507T', label: '水质科学与技术', type:1 }
    ]},
    { value: '0826', label: '生物医学工程类', children: [
      { value: '082601', label: '生物医学工程', tip:'可授工学或理学学士学位' },
      { value: '082602T', label: '假肢矫形工程', type:1 }
    ]},
    { value: '0827', label: '食品科学与工程类', children: [
      { value: '082701', label: '食品科学与工程', tip:'可授工学或农学学士学位' },
      { value: '082702', label: '食品质量与安全' },
      { value: '082703', label: '粮食工程' },
      { value: '082704', label: '乳品工程' },
      { value: '082705', label: '酿酒工程' },
      { value: '082706T', label: '葡萄与葡萄酒工程', type:1 },
      { value: '082707T', label: '食品营养与检验教育', type:1 },
      { value: '082708T', label: '烹饪与营养教育', type:1 }
    ]},
    { value: '0828', label: '建筑类', children: [
      { value: '082801', label: '建筑学' },
      { value: '082802', label: '城乡规划' },
      { value: '082803', label: '风景园林', tip:'可授工学或艺术学学士学位' },
      { value: '082804T', label: '历史建筑保护工程', type:1 }
    ]},
    { value: '0829', label: '安全科学与工程类', children: [
      { value: '082901', label: '安全工程' }
    ]},
    { value: '0830', label: '生物工程类', children: [
      { value: '083001', label: '生物工程' },
      { value: '083002T', label: '生物制药', type:1 }
    ]},
    { value: '0831', label: '公安技术类', children: [
      { value: '083101K', label: '刑事科学技术' },
      { value: '083102K', label: '消防工程' },

      { value: '083103TK', label: '交通管理工程', type:1 },
      { value: '083104TK', label: '安全防范工程', type:1 },
      { value: '083105TK', label: '公安视听技术', type:1},
      { value: '083106TK', label: '抢险救援指挥与技术', type:1 },
      { value: '083107TK', label: '火灾勘查', type:1 },
      { value: '083108TK', label: '网络安全与执法', type:1 },
      { value: '083109TK', label: '核生化消防', type:1 }
    ]}
  ]},

  { value: '09', label: '农学', children: [
    { value: '0901', label: '植物生产类', children: [
      { value: '090101', label: '农学' },
      { value: '090102', label: '园艺' },
      { value: '090103', label: '植物保护' },
      { value: '090104', label: '植物科学与技术' },
      { value: '090105', label: '种子科学与工程' },
      { value: '090106', label: '设施农业科学与工程', tip:'可授农学或工学学士学位'},
      { value: '090107T', label: '茶学', type:1 },
      { value: '090108T', label: '烟草', type:1 },
      { value: '090109T', label: '应用生物科学', tip:'可授农学或理学学士学位', type:1 },
      { value: '090110T', label: '农艺教育', type:1 },
      { value: '090111T', label: '园艺教育', type:1 }
    ]},
    { value: '0902', label: '自然保护与环境生态类', children: [
      { value: '090201', label: '农业资源与环境' },
      { value: '090202', label: '野生动物与自然保护区管理' },
      { value: '090203', label: '水土保持与荒漠化防治' }
    ]},
    { value: '0903', label: '动物生产类', children: [
      { value: '090301', label: '动物科学' },
      { value: '090302T', label: '蚕学', type:1 },
      { value: '090303T', label: '蜂学', type:1 }
    ]},
    { value: '0904', label: '动物医学类', children: [
      { value: '090401', label: '动物医学' },
      { value: '090402', label: '动物药学' },
      { value: '090403T', label: '动植物检疫', tip:'可授农学或理学学士学位', type:1 }
    ]},
    { value: '0905', label: '林学类', children: [
      { value: '090501', label: '林学' },
      { value: '090502', label: '园林' },
      { value: '090503', label: '森林保护' }
    ]},
    { value: '0906', label: '水产类', children: [
      { value: '090601', label: '水产养殖学' },
      { value: '090602', label: '海洋渔业科学与技术' },
      { value: '090603T', label: '水族科学与技术', type:1 }
    ]},
    { value: '0907', label: '草学类', children: [
      { value: '090701', label: '草业科学' }
    ]},
  ]},

  { value: '10', label: '医学', children: [
    { value: '1001', label: '基础医学类', children: [
      { value: '100101K', label: '基础医学' }
    ]},
    { value: '1001', label: '基础医学类', children: [
      { value: '100101K', label: '基础医学' }
    ]},
    { value: '1002', label: '临床医学类', children: [
      { value: '100201K', label: '临床医学' },
      { value: '100202TK', label: '麻醉学', type:1 },
      { value: '100203TK', label: '医学影像学', type:1 },
      { value: '100204TK', label: '眼视光医学', type:1 },
      { value: '100205TK', label: '精神医学', type:1 },
      { value: '100206TK', label: '放射医学', type:1 }
    ]},
    { value: '1003', label: '口腔医学类', children: [
      { value: '100301K', label: '口腔医学' }
    ]},
    { value: '1004', label: '公共卫生与预防医学类', children: [
      { value: '100401K', label: '预防医学' },
      { value: '100402', label: '食品卫生与营养学', tip:'授予理学学士学位' },
      { value: '100403TK', label: '妇幼保健医学', type:1 },
      { value: '100404TK', label: '卫生监督', type:1  },
      { value: '100405TK', label: '全球健康学', tip:'授予理学学士学位', type:1 }
    ]},
    { value: '1005', label: '中医学类', children: [
      { value: '100501K', label: '中医学' },
      { value: '100502K', label: '针灸推拿学' },
      { value: '100503K', label: '藏医学' },
      { value: '100504K', label: '蒙医学' },
      { value: '100505K', label: '维医学' },
      { value: '100506K', label: '壮医学' },
      { value: '100507K', label: ' 哈医学' }
    ]},
    { value: '1006', label: '中西医结合类', children: [
      { value: '100601K', label: '中西医临床医学' }
    ]},
    { value: '1007', label: '药学类', children: [
      { value: '100701', label: '药学', tip:'授予理学学士学位' },
      { value: '100702', label: '药物制剂', tip:'授予理学学士学位' },
      { value: '100703TK', label: '临床药学', tip:'授予理学学士学位', type:1 },
      { value: '100704T', label: '药事管理', tip:'授予理学学士学位', type:1 },
      { value: '100705T', label: '药物分析', tip:'授予理学学士学位', type:1 },
      { value: '100706T', label: '药物化学', tip:'授予理学学士学位', type:1 },
      { value: '100707T', label: '海洋药学', tip:'授予理学学士学位', type:1 }
    ]},
    { value: '1008', label: '中药学类', children: [
      { value: '100801', label: '中药学', tip:'授予理学学士学位' },
      { value: '100802', label: '中药资源与开发', tip:'授予理学学士学位' },
      { value: '100803T', label: '藏药学', tip:'授予理学学士学位', type:1 },
      { value: '100804T', label: '蒙药学', tip:'授予理学学士学位', type:1 },
      { value: '100805T', label: '中药制药', tip:'可授理学或工学学士学位', type:1 },
      { value: '100806T', label: '中草药栽培与鉴定', tip:'授予理学学士学位', type:1 }
    ]},
    { value: '1009', label: '法医学类', children: [
      { value: '100901K', label: '法医学' }
    ]},
    { value: '1010', label: '医学技术类', children: [
      { value: '101001', label: '医学检验技术', tip:'授予理学学士学位' },
      { value: '101002', label: '医学实验技术', tip:'授予理学学士学位' },
      { value: '101003', label: '医学影像技术', tip:'授予理学学士学位' },
      { value: '101004', label: '眼视光学', tip:'授予理学学士学位' },
      { value: '101005', label: '康复治疗学', tip:'授予理学学士学位' },
      { value: '101006', label: '口腔医学技术', tip:'授予理学学士学位' },
      { value: '101007', label: '卫生检验与检疫', tip:'授予理学学士学位' },
      { value: '101008T', label: '听力与言语康复学', type:1 }
    ]},
    { value: '1011', label: '护理学类', children: [
      { value: '101101', label: '护理学', tip:'授予理学学士学位' }
    ]},
  ]},
  { value: '12', label: '管理学', children: [
    { value: '1201', label: '管理科学与工程类', children: [
      { value: '120101', label: '管理科学', tip:'可授管理学或理学学士学位' },
      { value: '120102', label: '信息管理与信息系统', tip:'可授管理学或工学学士学位' },
      { value: '120103', label: '工程管理', tip:'可授管理学或工学学士学位' },
      { value: '120104', label: '房地产开发与管理' },
      { value: '120105', label: '工程造价', tip:'可授管理学或工学学士学位' },
      { value: '120106TK', label: '保密管理', type:1 }
    ]},
    { value: '1202', label: '工商管理类', children: [
      { value: '120201K', label: '工商管理' },
      { value: '120202', label: '市场营销' },
      { value: '120203K', label: '会计学' },
      { value: '120204', label: '财务管理' },
      { value: '120205', label: '国际商务' },
      { value: '120206', label: '人力资源管理' },
      { value: '120207', label: '审计学' },
      { value: '120208', label: '资产评估' },
      { value: '120209', label: '物业管理' },
      { value: '120210', label: '文化产业管理', tip:'可授管理学或艺术学学士学位' },
      { value: '120211T', label: '劳动关系', type:1 },
      { value: '120212T', label: '体育经济与管理', type:1 },
      { value: '120213T', label: ' 财务会计教育', type:1 },
      { value: '120214T', label: '市场营销教育', type:1 }
    ]},
    { value: '1203', label: '农业经济管理类', children: [
      { value: '120301', label: '农林经济管理' },
      { value: '120302', label: '农村区域发展', tip:'可授管理学或农学学士学位' },
    ]},
    { value: '1204', label: '公共管理类', children: [
      { value: '120401', label: '公共事业管理' },
      { value: '120402', label: '行政管理' },
      { value: '120403', label: '劳动与社会保障' },
      { value: '120404', label: '土地资源管理', tip:'可授管理学或工学学士学位' },
      { value: '120405', label: '城市管理' },
      { value: '120406TK', label: '海关管理', type:1 },
      { value: '120407T', label: '交通管理', tip:'可授管理学或工学学士学位', type:1 },
      { value: '120408T', label: ' 海事管理', type:1 },
      { value: '120409T', label: '公共关系学', type:1 }
    ]},
    { value: '1205', label: '图书情报与档案管理类', children: [
      { value: '120501', label: '图书馆学' },
      { value: '120502', label: '档案学' },
      { value: '120503', label: '信息资源管理' }
    ]},
    { value: '1206', label: '物流管理与工程类', children: [
      { value: '120601', label: '物流管理' },
      { value: '120602', label: '物流工程', tip:'可授管理学或工学学士学位' },
      { value: '120603T', label: '采购管理', type:1 }
    ]},
    { value: '1207', label: '工业工程类', children: [
      { value: '120701', label: '工业工程', tip:'可授管理学或工学学士学位' },
      { value: '120702T', label: '标准化工程', type:1 },
      { value: '120703T', label: '质量管理工程', type:1 }
    ]},
    { value: '1208', label: '电子商务类', children: [
      { value: '120801', label: '电子商务', tip:'可授管理学或经济学或工学学士学位' },
      { value: '120802T', label: '电子商务及法律', type:1 }
    ]},
    { value: '1209', label: '旅游管理类', children: [
      { value: '120901K', label: '旅游管理' },
      { value: '120902', label: '酒店管理' },
      { value: '120903', label: '会展经济与管理' },
      { value: '120904T', label: '旅游管理与服务教育', type:1 }
    ]},
  ]},
  { value: '13', label: '艺术学', children: [
    { value: '1301', label: '艺术学理论类', children: [
      { value: '130101', label: '艺术史论' }
    ]},
    { value: '1302', label: '音乐与舞蹈学类', children: [
      { value: '130201', label: '音乐表演' },
      { value: '130202', label: '音乐学' },
      { value: '130203', label: '作曲与作曲技术理论' },
      { value: '130204', label: '舞蹈表演' },
      { value: '130205', label: '舞蹈学' },
      { value: '130206', label: '舞蹈编导' }
    ]},
    { value: '1303', label: '戏剧与影视学类', children: [
      { value: '130301', label: '表演' },
      { value: '130302', label: '戏剧学' },
      { value: '130303', label: '电影学' },
      { value: '130304', label: '戏剧影视文学' },
      { value: '130305', label: '广播电视编导' },
      { value: '130306', label: '戏剧影视导演' },
      { value: '130307', label: '戏剧影视美术设计' },
      { value: '130308', label: '录音艺术' },
      { value: '130309', label: '播音与主持艺术' },
      { value: '130310', label: '动画' },
      { value: '130311T', label: '影视摄影与制作', type:1 }
    ]},
    { value: '1304', label: '美术学类', children: [
      { value: '130401', label: '美术学' },
      { value: '130402', label: '绘画' },
      { value: '130403', label: '雕塑' },
      { value: '130404', label: '摄影' },
      { value: '130405T', label: '书法学', type:1 },
      { value: '130406T', label: '中国画', type:1 }
    ]},
    { value: '1305', label: '设计学类', children: [
      { value: '130501', label: '艺术设计学' },
      { value: '130502', label: '视觉传达设计' },
      { value: '130503', label: '环境设计' },
      { value: '130504', label: '产品设计' },
      { value: '130505', label: '服装与服饰设计' },
      { value: '130506', label: '公共艺术' },
      { value: '130507', label: '工艺美术' },
      { value: '130508', label: '数字媒体艺术' },
      { value: '130509T', label: '艺术与科技', type:1 }
    ]},
  ]},
  { value: '11', label: '军事学', tip:'军事专业:此专业不再作为普通高等学校本科专业项目', children: [
    { value: '1101', label: '军事思想及军事历史', children: [
      { value: '110101', label: '军事思想' },
      { value: '110102', label: '军事历史' }
    ]},
    { value: '1102', label: '战略学', children: [
      { value: '110201', label: '军事战略学' },
      { value: '110202', label: '战争动员学' }
    ]},
    { value: '1103', label: '战役学', children: [
      { value: '110301', label: '联合战役学' },
      { value: '110302', label: '军种战役学(含：第二炮兵战役学)' }
    ]},
    { value: '1104', label: '战术学', children: [
      { value: '110401', label: '合同战术学' },
      { value: '110402', label: '兵种战术学' }
    ]},
    { value: '1105', label: '军队指挥学', children: [
      { value: '110501', label: '作战指挥学' },
      { value: '110502', label: '军事运筹学' },
      { value: '110503', label: '军事通信学' },
      { value: '110504', label: '军事情报学' },
      { value: '110505', label: '密码学' },
      { value: '110506', label: '军事教育训练学(含：军事体育学)' },
    ]},
    { value: '1106', label: '军制学', children: [
      { value: '110601', label: '军事组织编制学' },
      { value: '110602', label: '军队管理学' }
    ]},
    { value: '1107', tip:'本一级学科不分设二级学科', label: '军制学', children: [
      
    ]},
    { value: '1108', label: '军事后勤学与军事装备学', children: [
      { value: '110801', label: '军事后勤学' },
      { value: '110802', label: '后方专业勤务' },
      { value: '110803', label: '军事装备学' }
    ]},
  ]},
]
// https://baike.baidu.com/item/%E5%A4%A7%E5%AD%A6%E4%B8%93%E4%B8%9A
export default major