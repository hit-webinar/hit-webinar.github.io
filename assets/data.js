const site = {
    year: "2022-2024",
    repoURL: "https://github.com/hit-webinar/hit-webinar.github.io",
    siteURL: "https://hit-webinar.github.io/",
    creator: "Jiancheng Yang",
    creatorURL: "https://jiancheng-yang.com/",
    showPageviews: false,
};

const about = `
HIT Webinar是一个聚焦健康医疗 <b>Healthcare</b>，人工智能 <b>Intelligence</b> 以及前沿科技 <b>Technology</b>的中文网络研讨会。
<br>
HIT网络研讨会由多位科学家、工程师和研究生发起，属于<b>完全开放的非营利性活动</b>，致力于打造轻松友好的交流氛围。
<br>
我们欢迎各种形式的关注和参与。如果您愿意来 HIT Webinar 分享，请联系<a href="https://jiancheng-yang.com/">杨健程</a>或其他组织者。
`;

const reports = [
    {
        id: "talk241010",
        poster: "talk241010.jpg",
        date: "2024/10/10",
        daytime: "周四 20:00",
        title: "诊疗一体化光纤LSPR细胞传感器的研究",
        speaker: "罗泽伟 @四川大学",
        host: "史林融",
        materials: [
            {
                tag: "视频回放",
                // href: "https://www.bilibili.com/video/BV16ztSeqEpJ/"
            },
        ],
        link: {
            tag: "#腾讯会议：694-179-234",
            href: "https://meeting.tencent.com/dm/7bTAf0Kc1XRR"
        },
        info: {
            abstract: `
            血液循环系统内的癌细胞既是肿瘤的重要生物标志物，又能诱导肿瘤的发生癌症转移。开发集检测和杀死癌细胞于一体的生物传感器，对临床癌症早期诊断、治疗具有重要的意义。光纤传感器体积小、生物安全性高，能灵活操控光进入深层组织，适合开发诊疗一体化传感器。为提高细胞检测灵敏度，利用弯曲光纤增强折射灵敏度的特性，成功制备了U形、Ω形和J形等形状的新型光纤LSPR；为提高光热转化效率，制备了AuNPs/AuRs、AuNPs团聚体、聚多巴胺/金纳米颗粒/聚多巴胺（PDA/AuNPs/PDA）三明治等涂层，并成功修饰在弯曲光纤传感器区域。由于光纤LSPR产热的局域性、高效性和形状依赖性，Ω形光纤LSPR成功实现细胞传感-光热治疗一体化。为进一步提高治疗效率，通过精确地控制光纤表面温度，Ω形光纤LSPR实现了循环式细胞传感-光热治疗，能有效杀死流动系统中的癌细胞，为癌症诊疗提供了一种新技术。
            `,
            bio: `
            罗泽伟，四川大学机械工程学院副研究员，从事光纤生物传感器研究，先后主持国自然科学青年基金、四川省/陕西省科技厅等项目8 项。在项目资助下，成功研制了U形、Ω形和J形等多种形状的光纤探针，并开发系列高灵敏的诊疗一体的光纤LSPR传感器。在Biosensors & Bioelectronics、Analytical Chemistry、Sensors and Actuators B: Chemical、Optics & Laser Technology等杂志发表一作/通讯SCI论文20余篇（中科院一区13篇），累计发表SCI论文50篇，它引1000余次，H-index为22，申请发明专利6项；担任Interdisciplinary Medicine青年编委；长期担任Research、Analytical Chemistry、ACS Sensors、Journal of Lightwave Technology、Photonic Sensors、IEEE Transactions on Instrumentation & Measurement等SCI杂志审稿人；担任中国光学工程学会光谱技术及应用专业委员会青年委员、四川省科技协同创新促进会智能制造专家服务团顾问；指导本科生获得第九届全国大学生基础医学创新大赛国赛银奖，第九届“互联网+”大学生创新创业大赛四川省一等奖。  
            `
        },
        topics: [
            "Healthcare",
            "Te"
        ]
    },
    {
        id: "talk240922",
        poster: "talk240922.jpg",
        date: "2024/09/22",
        daytime: "周日 13:00",
        title: "GenAI时代的医学影像",
        speaker: "彭伟 @Stanford",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://xiaoiker.github.io/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV16ztSeqEpJ/"
            },
        ],
        link: {
            tag: "#腾讯会议：626-138-901",
            href: "https://meeting.tencent.com/dw/EQt9yAJ3ZpPD"
        },
        info: {
            abstract: `
            图像及视频的生成是当前比较热门的话题。如何使用生成式AI来助力医学影像的理解和分析将变成一个非常有价值的研究主题。在今天的报告中将和大家来探讨如何构建3D医学影像的生成模型。主要从以下三个方面来讨论医学生成模型的构建： Efficency, Controllability, and Anatomy Plausibility。此外，还将探讨在未来的研究中3D影像数据如何能被更好的分析，理解和使用。
            `,
            bio: `
            彭伟，斯坦福大学Staff Scientist。2022年博士毕业于芬兰奥卢大学，博士期间访问哈佛医学院，以及苏黎世联邦理工学院（ETH Zurich）。 研究方向为机器学习及其在医学影像中的应用。在TPAMI, TMI, MeDIA, CVPR, ICCV, MICCAI等会议和期刊上发表论文40余篇。 曾获芬兰人工智能最佳博士论文奖，IEEE Best Conference Paper，ISMRM Magna Cum Laude Merit Award，ECCV人体行为挑战赛亚军，IJCAI动作识别挑战赛冠军等。 长期担任AI和医学图像顶级学术会议程序委员和学术期刊审稿人，包括Nature子刊、TPAMI, IJCV, 机器学习/计算机视觉三大会等。
            `
        },
        topics: [
            "Healthcare",
            "Intelligence"
        ]
    },
    {
        id: "talk240901",
        poster: "talk240901.jpg",
        date: "2024/09/01",
        daytime: "周日 13:00",
        title: "面向医疗发现、服务和公平的机器学习方法",
        speaker: "杨宇喆 @MIT",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://www.mit.edu/~yuzhe/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1cBHYekEYw/"
            },
        ],
        link: {
            tag: "#腾讯会议：940-834-640",
            href: "https://meeting.tencent.com/dw/kDwP22N0EX8p"
        },
        info: {
            abstract: `
            当前的临床系统常常存在诊断延迟、患者就诊频率不稳定以及医疗资源获取不平等等问题。我们能否在慢性疾病尚未临床显现之前，提前识别这些疾病？此外，我们能否将全面的医疗评估带到患者的家中，确保所有人都能获得可及的医疗服务？
            
            在本次演讲中，我将介绍几种用以弥合医疗发现、服务和公平性长期差距的机器学习方法。首先，我将介绍一种基于人工智能的数字生物标记，这种标记可以通过夜间呼吸信号在临床诊断之前多年内检测帕金森病。接着，我将讨论一种简单的自监督框架，该框架利用智能手机实现无接触的人体生命体征测量。最后，我将探讨在现实世界中，如何通过严谨的方法在不同亚群体和分布变化之间，构建实现公平医疗决策的系统。
            `,
            bio: `
            杨宇喆即将加入加州大学洛杉矶分校担任助理教授。他在麻省理工学院获得了计算机科学博士学位。他的研究兴趣包括用于疾病和医疗的机器学习与人工智能。他的研究成果已发表在 Nature Medicine、Science Translational Medicine、NeurIPS、ICML 和 ICLR 等顶级会议和期刊上，并被《华尔街日报》、MIT Tech Review、《福布斯》和 BBC 等媒体报道。
            
            他曾获得 MathWorks、百度和武田制药提供的博士奖学金，并被评为数据科学领域的明日之星，以及福布斯“30 位 30 岁以下杰出人才”之医疗与科学类。他的工作被 Nature Medicine 评为 2022 年十大显著进展之一，并已在医院及患者家中部署，用于无感健康监测。
            `
        },
        topics: [
            "Healthcare",
            "Intelligence"
        ]
    },
    {
        id: "talk240809",
        poster: "talk240809.jpg",
        date: "2024/08/09",
        title: "气管树建模：从体素分类到隐式表达",
        speaker: "顾运 @上海交大",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "http://yungu-imr.github.io/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1qGYueaEQH/"
            }
        ],
        link: {
            tag: "#腾讯会议：282-953-097",
            href: "https://meeting.tencent.com/dw/2COxcJD8SWDV"
        },
        info: {
            abstract: `
            经支气管活检技术（Transbronchial Lung Biopsy, TBLB）是肺部病变的重要诊治方式。在术前阶段，通常基于采集患者CT影像，构建结构化气管树地图，规划气管镜行进路径。因此，对于肺部气管树的三维重建与精细化建模是TBLB术式规划的重要步骤。近年来，随着气管镜介入辅助导航的深入研究与应用，临床实际对于气管树分割任务提出了新的要求：（1）标注精细化：传统的单一前景/背景分割任务无法精确描述气管树的位置结构关系，为复杂手术导航提供可靠依据。（2）数据复杂化：现有的气管树分割框架对于CT图像的层厚要求较高，为了实现远端小气道的精细建模，普遍要求0.625mm/0.5mm以下的薄层CT。但是，薄层CT设备造价高昂，相比于厚层CT的辐射剂量更高。本报告主要探讨如何提高气管树分割算法在低质量数据条件下的可靠性以及针对细粒度语义情况下的特征表达方法。
            `,
            bio: `
            上海交通大学医疗机器人研究院长聘教轨副教授，长期从事基于人工智能的医学影像分析与经自然腔道诊疗一体化机器人技术研发与应用，多次担任计算机辅助手术介入领域国际会议MICCAI/IPCAI领域主席，近五年在IEEE-TMI、IEEE-TBME、MedIA、MICCAI等期刊与会议发表学术论文四十余篇。入选上海市东方英才计划。研究受到国家自然科学基金青年/面上/科技部重点研发课题等支持。
            `
        },
        topics: [
            "Healthcare",
            "Intelligence"
        ]
    },    
    {
        id: "talk240726",
        poster: "talk240726.jpg",
        date: "2024/07/26",
        title: "医学图像分析中的样本不均衡：挑战与改进方法探讨",
        speaker: "李泽榉 @Oxford",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://zerojumpline.github.io/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1Zf421q7cf/"
            }
        ],
        link: {
            tag: "#腾讯会议：143-381-547",
            href: "https://meeting.tencent.com/dw/WXJvmc5H6Z6A"
        },
        info: {
            abstract: `
            机器学习算法在医学图像处理中的应用已经非常广泛，既能辅助诊疗过程，也能帮助理解疾病机理。然而，由于医学图像的自然特性，其样本通常呈现长尾分布，即多数样本属于少数类别。这种分布限制了模型在规模化应用中的性能和安全性。本报告旨在系统探讨这些问题，并以医学图像分割为例，分析样本不均衡对模型拟合和泛化的影响，介绍相应的应对策略。具体内容涵盖损失函数设计、元学习、数据增强策略和模型校准。最后，我将分享我们研发的模型性能评估工具MOVAL的相关情况。
            `,
            bio: `
            李泽榉，牛津大学FMRIB分析组博士后研究员，2023年博士毕业于帝国理工学院计算机系，此前于2018年和2015年分别获得复旦大学电子工程系硕士和学士学位。研究方向为机器学习及其在医学影像分析中的应用，具体侧重于神经网络在实际场景中的泛化性和可靠性，以及利用机器学习分析神经影像和解决临床问题。在MICCAI/TMI等会议和期刊上发表论文30余篇，谷歌学术引用超过3000次，曾获华为AI和MICCAI挑战赛冠军，并担任2024年MICCAI领域主席。
            `,
        },
        topics: [
            "Healthcare",
            "Intelligence"
        ]
    },    
    {
        id: "talk240628",
        poster: "talk240628.jpg",
        date: "2024/06/28",
        title: "自监督视觉学习",
        speaker: "张同 @EPFL",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://sites.google.com/view/tong-zhang"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1e1421r7bY/"
            }
        ],
        link: {
            tag: "#腾讯会议：569-561-558",
            href: "https://meeting.tencent.com/dw/LuKRw9VAfLnM"
        },
        info: {
            abstract: `
            自监督表示学习是许多基础模型（包括LLM）的基石, 但是视觉，与语言不同，由捕捉的自然信号组成，涵盖了如点云和网格等3D结构，以及2D图像和视频。因此，视觉涉及更复杂和冗余的表示，使得在视觉领域内开发基础模型成为一项艰巨的任务。本次研讨会旨在通过自监督表示学习的视角探索视觉系统，在这次讨论中我们将会讨论并评估主流视觉自监督学习方法中的现有挑战，提出可行的解决方案，并探讨进一步研究的有希望方向。
            `,
            bio: `
            张同于2011年和2014年分别获得北京航空航天大学和纽约大学的学士和硕士学位，并于2020年获得澳大利亚国立大学的博士学位。现任瑞士洛桑联邦理工学院（EPFL）图像与视觉表示实验室（IVRL）博士后研究员。他曾获得2016年亚洲计算机视觉会议（ACCV）最佳学生论文荣誉提名奖和2020年计算机视觉与模式识别会议（CVPR）论文奖提名。他的研究兴趣包括子空间聚类、深度几何学习、三维视觉和表征学习。
            `
        },
        topics: [
            "Intelligence"
        ]
    },    
    {
        id: "talk240621",
        poster: "talk240621.jpg",
        date: "2024/06/21",
        title: "质子治疗技术和可变形图像配准",
        speaker: "李夏 @ETH Zurich",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://xialipku.github.io/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/av1605757327/"
            }
        ],
        link: {
            tag: "#腾讯会议：935-853-478",
            href: "https://meeting.tencent.com/dw/ZwzSdvro0JFp"
        },
        info: {
            abstract: `
            质子治疗技术作为一种先进的放射治疗手段，以其高精度、高效能和低副作用的特点，正在全球范围内快速发展。在中国，质子治疗正逐步成为肿瘤治疗的重要选择。根据“十四五”规划，国家正在大力支持高端医疗技术的研发和应用，质子治疗中心在各地的建设如火如荼，未来几年内有望在全国范围内普及。随着技术的不断进步和成本的逐渐降低，质子治疗的临床应用前景广阔，将极大提升肿瘤患者的治疗效果和生活质量。
            
            可变性图像配准在质子治疗中的应用至关重要，它能够显著提升治疗的精准度和有效性。我们团队致力于利用时空连续建模技术，实现高效、精准的图像配准，从而优化质子治疗过程。通过这一技术，能够动态跟踪和调整患者体内的变化，确保质子束准确打击肿瘤部位，最大程度减少对周围健康组织的伤害。本次分享将详细介绍这一技术的原理、应用，展示我们的最新研究成果。
            `,
            bio: `
            李夏，瑞士苏黎世联邦理工学院和保罗谢尔研究所联合培养博士生。主要研究方向为图像引导的质子治疗，目前聚焦于质子治疗中的图像技术，涉及重建、配准、重建，以及质子剂量的优化。在国际顶级期刊和会议发表论文30余篇，谷歌学术引用3000余次。作为CPT-DIR项目的核心成员，受邀进行多次报告，并入选ICCR2024 rising star finalist。荣获COCO2018竞赛全景分割季军。
            `
        },
        topics: [
            "Healthcare",
            "Intelligence",
            "Technology"
        ]
    },    
    {
        id: "talk240602",
        poster: "talk240602.jpg",
        date: "2024/06/02",
        daytime: "周日 20:00",
        title: "3D医学图像分析：基础概念和一些高级主题",
        speaker: "杨健程 @EPFL",
        host: "钰沐菡",
        materials: [
            {
                tag: "讲者主页",
                href: "https://jiancheng-yang.com/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1US411A7EH/"
            },
        ],
        link: {
            tag: "Zoom: 864 3590 3415",
            href: "https://us02web.zoom.us/j/86435903415"
        },
        info: {
            abstract: `
            医疗3D数据（如CT和MRI扫描）在医疗保健中占据着至关重要的地位，可称之为“一等公民”。近年来，医疗3D数据分析已从人工智能的最新进展中获得极大的益处。本次活动将聚焦于3D医学影像分析的技术概念，并包括一些较为高级的话题讨论。我将首先介绍体素的基本概念以及3D卷积神经网络（CNNs），即3D医学影像中的事实标准，讨论其面临的独特技术挑战及解决方案。此外，我还将探讨包括点云和隐式场在内的其他3D视觉技术在医疗图像分析中的进展。
            <br>
            本次活动是HIT Webinar x <a href="https://www.bilibili.com/video/BV1Ti421U7U3/">钰沐菡</a>的联合活动。
            `,
            bio: `
            杨健程，瑞士洛桑联邦理工学院（EPFL）博士后，主要研究医疗AI、医学图像分析和3D计算机视觉。已发表50余篇研究论文，包括Cancer Research / eBioMedicine / TMI / CVPR / MICCAI / NeurIPS等顶刊顶会，谷歌学术累计引用约2500次，H因子20。担任MICCAI 2024 领域主席，并长期担任20余个主流人工智能和医学图像顶级学术会议程序委员和学术期刊审稿人，包括Nature/Cell子刊、机器学习/计算机视觉三大会等。曾两次举办MICCAI挑战赛，并多次夺冠国际AI大赛或名列前茅。曾入选世界人工智能大会（WAIC）云帆奖、胡润U30中国创业领袖和Forbes 30 Under 30 Asia。
            <br>
            作为一项业余活动，杨健程还是 <a href="https://hit-webinar.com/">#HIT-Webinar</a> 的发起人和主要组织者。这是一个关注健康医疗 Healthcare、人工智能 Intelligence以及前沿科技 Technology的中文网络研讨会，属于完全开放的非营利性活动。自2022年4月启动以来已成功举办70余期。
            `,
        },
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "talk240524",
        poster: "talk240524.jpg",
        date: "2024/05/24",
        title: "基于纳米导电材料的柔性医疗传感（电极）产业化进展",
        speaker: "高峰 @佛山瑞联福",
        host: "邹海达 @西安交大",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1Db421v7g4/"
            }
        ],
        link: {
            tag: "#腾讯会议：921-768-154",
            href: "https://meeting.tencent.com/dw/1YxB58hYfDQz"
        },
        info: {
            abstract: `
            纳米导电材料在柔性医疗传感器领域大放异彩，为患者带来全新体验。柔性传感器凭借优异的生物相容性、舒适性和可穿戴性，能够实时监测人体生理参数，为医疗健康领域带来革命性变革。纳米导电材料的产业化进展，将推动柔性医疗电子的快速发展，开启个性化医疗新时代。
            `,
            bio: `
            高峰，佛山市瑞联福电子科技有限公司 (Rally Flex Electronics) 副总经理，中级职称，香港浸会大学工商管理硕士，拥有14 项国内专利和 2 项国际专利。2015年起从事柔性印刷电子行业，致力于将纳米导电材料（银基材料为主）应用到柔性传感器件，并将柔性传感器应用于物联网、通信、医疗器械领域，近年来尤其专注于在医疗器械领域的产业化应用，在可穿戴心电、脑电及介入式神经监护领域落地了近30个项目，长期关注柔性可穿戴医疗电极、IVD电极（电化学传感器）、介入式医疗电极、CGM软针等领域。
            `
        },
        topics: [
            "Healthcare",
            "Technology"
        ]
    },    
    {
        id: "talk240503",
        poster: "talk240503.jpg",
        date: "2024/05/03",
        daytime: "周五 12:00",
        title: "浅谈大语言模型和交互式机器学习在家庭机器人中的应用",
        speaker: "崔雨晨 @Stanford",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://web.stanford.edu/~yuchenc/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1A1421r7ck/"
            },
        ],
        link: {
            tag: "#腾讯会议：841-498-024",
            href: "https://meeting.tencent.com/dw/E9PPpvNCArg5"
        },
        info: {
            abstract: `
            大语言模型的发展为智能机器人带来怎样的变革？通用家庭机器人要实现了吗？家务活有机器人包办了吗？欢迎大家一起来探讨大语言模型和交互式机器学习在家庭机器人中的实际应用！
            `,
            bio: `
            斯坦福大学在职博士后研究员<s>（廉价劳动力）</s>，博士毕业于德克萨斯大学奥斯汀分校（UT Austin）。研究专注于机器学习算法与人机交互理论在智能家用机器人的应用。目标是开发算法和框架使机器人能够有效地从与普通用户的互动中学习辅助用户日常生活所需的技能，并适应用户的个体需求。
            `,
        },
        topics: [
            "Intelligence",
            "Technology",
        ]
    },
    {
        id: "talk240420",
        poster: "talk240420.jpg",
        date: "2024/04/20",
        daytime: "周六 20:00",
        title: "医工交叉研究浅谈：医师的角度",
        speaker: "赵伟 @湘雅",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://scholar.google.com/citations?user=eOjhgb0AAAAJ&hl=zh-CN"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1Fx4y1h7EA/"
            },
        ],
        topics: [
            "Healthcare",
        ]
    },
    {
        "id": "talk240405",
        "poster": "talk240405.jpg",
        "date": "2024/04/05",
        "title": "基于人工智能的心脏数字孪生：迈向个体化心脏疾病治疗",
        "speaker": "李雷 @Soton",
        "host": "杨健程 @EPFL",
        "materials": [
            {
                "tag": "讲者主页",
                "href": "https://lileitech.github.io/"
            },
            {
                "tag": "视频回放",
                "href": "https://www.bilibili.com/video/BV1sZ421B7jN/"
            }
        ],
        "topics": [
            "Healthcare",
            "Intelligence"
        ]
    },
    {
        "id": "talk240322",
        "poster": "talk240322.jpg",
        "date": "2024/03/22",
        "title": "医学图像中的公平性学习",
        "speaker": "田宇 @Harvard",
        "host": "杨健程 @EPFL",
        "materials": [
            {
                "tag": "讲者主页",
                "href": "https://yutianyt.com/"
            },
            {
                "tag": "视频回放",
                "href": "https://www.bilibili.com/video/BV1P6421c7xf/"
            }
        ],
        "topics": [
            "Healthcare",
            "Intelligence"
        ]
    },
    {
        "id": "talk240308",
        "poster": "talk240308.jpg",
        "date": "2024/03/08",
        "title": "高速高分辨超声和光声多模态成像",
        "speaker": "张雅超 @苏州医工所",
        "host": "杨炳乾 @中科大",
        "materials": [
            {
                "tag": "视频回放",
                "href": "https://www.bilibili.com/video/BV1pD421E7bx/"
            }
        ],
        "topics": [
            "Healthcare",
            "Technology"
        ]
    },
    {
        "id": "talk240216",
        "poster": "talk240216.jpg",
        "date": "2024/02/16",
        "daytime": "周五 14:00",
        "title": "迈向多智能体智能：从鲁棒交互到联合对齐",
        "speaker": "刘越江 @Stanford",
        "host": "杨健程 @EPFL",
        "materials": [
            {
                "tag": "讲者主页",
                "href": "https://sites.google.com/view/yuejiangliu/home"
            },
            {
                "tag": "本次活动不提供视频回放",
            }
        ],
        "topics": [
            "Intelligence"
        ]
    },
    {
        id: "talk240203",
        poster: "talk240203.jpg",
        date: "2024/02/03",
        daytime: "周六 20:00",
        title: "智能机器人超声检测：自适应、动态和学习驱动的图像采集",
        speaker: "蒋中亮 @TUM",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://www.cs.cit.tum.de/en/camp/members/zhongliang-jiang/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1KF4m1u7LQ/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence",
            "Technology"
        ]
    },
    {
        id: "talk240112",
        poster: "talk240112.jpg",
        date: "2024/01/12",
        title: "“数据集压缩与合成”和“3D医学图像通用交互分割”双主题分享",
        speaker: "赵波 & 杜雨新 & 白帆 @智源研究院",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://www.bozhao.me/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1gK4y1z7FQ/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "talk240105",
        poster: "talk240105.jpg",
        date: "2024/01/05",
        daytime: "周五 20:30",
        title: "如何提高AI诊断模型的效率与可解释性",
        speaker: "尤晨羽 @Yale",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "http://chenyuyou.me/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1Ji4y1z7bH/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "talk231229",
        poster: "talk231229.jpg",
        date: "2023/12/29",
        title: "面向医学影像的多模态多任务协同学习",
        speaker: "谷元杰 @复旦",
        host: "罗虎 @复旦",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1Bw411g7u2/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "talk231215",
        poster: "talk231215.jpg",
        date: "2023/12/15",
        title: "长视频理解的挑战与创新：算力、算法和数据",
        speaker: "赵琛 @KAUST",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://zhao-chen.com/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1FN411V7tj/"
            },
        ],
        topics: [
            "Intelligence",
        ]
    },
    {
        id: "talk231124",
        poster: "talk231124.jpg",
        date: "2023/11/24",
        title: "基于因果推断的全景病理图像多实例学习",
        speaker: "林天成 @上海交大",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://scholar.google.com/citations?user=-ok791gAAAAJ"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1ZN4y1m7FS/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "talk231112",
        poster: "talk231112.jpg",
        date: "2023/11/12",
        daytime: "周日 14:30",
        title: "针对不完美医学数据的组学图像多模态AI",
        speaker: "邢小涵 @Stanford",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://hathawayxxh.github.io/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1jw411W71q/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "routine36",
        poster: "routine36.jpg",
        date: "2023/10/27",
        title: "足底软组织多维力学特性在体动态表征",
        speakerPaper: "吴龙燕 @复旦",
        host: "李轶恒 @中科大",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1BN4y1k7Ax/"
            },
        ],
        topics: [
            "Healthcare",
            "Technology",
        ]
    },
    {
        id: "talk231006",
        poster: "talk231006.jpg",
        date: "2023/10/06",
        title: "STU-Net: 大规模预训练医学图像分割",
        speaker: "何军军 @上海人工智能实验室",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://scholar.google.com/citations?user=Z4LgebkAAAAJ"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1oB4y1f7qa/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "routine35",
        poster: "routine35.jpg",
        date: "2023/09/22",
        title: "动态导航技术在颧种植手术中的应用",
        speakerPaper: "陶宝鑫 @上海交大",
        host: "罗虎 @复旦",
        materials: [
            {
                tag: "本次活动不提供视频回放",
            }
        ],
        topics: [
            "Healthcare",
            "Technology",
        ]
    },
    {
        id: "talk230901",
        poster: "talk230901.jpg",
        date: "2023/09/01",
        title: "融合临床专业知识的医学视觉语言建模基准",
        speaker: "Yingying Zhu @UT Arlington",
        host: "张玉冰 @北大",
        materials: [
            {
                tag: "讲者主页",
                href: "https://zyy123jy.github.io/My-Web-Sites/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV12u4y1C7rV/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "talk230825",
        poster: "talk230825.jpg",
        date: "2023/08/25",
        title: "智能超声：从智能成像、智能分析、泛化安全到基础软件",
        speaker: "杨鑫 @深大",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://xy0806.github.io/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV11r4y1X7oR/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "talk230818",
        poster: "talk230818.jpg",
        date: "2023/08/18",
        title: "高灵敏度超快超声微泡造影成像研究进展",
        speaker: "褚寒冰 @西安交大",
        host: "杨炳乾 @中科大",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1cX4y147Xv/"
            },
        ],
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "routine34",
        poster: "routine34.png",
        date: "2023/08/11",
        title: "足底多维力检测平台：设计、制造与标定",
        speakerPaper: "罗虎 @复旦",
        host: "张玉冰 @北大",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1R14y1q7os/"
            },
        ],
        topics: [
            "Healthcare",
            "Technology",
        ]
    },
    {
        id: "routine33",
        poster: "routine33.png",
        date: "2023/07/28",
        title: "[Nature BME'23] AI系统解读手术视频",
        speakerPaper: "邵良靖 @复旦",
        speakerNews: "张玉冰 @北大",
        materials: [
            {
                tag: "论文",
                href: "https://doi.org/10.1038/s41551-023-01010-8"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1o94y1Y7JJ/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "routine32",
        poster: "routine32.jpg",
        date: "2023/07/21",
        title: "下肢假肢机械仿生",
        speakerPaper: "许阳阳 @复旦",
        speakerNews: "罗虎 @复旦",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1Eh4y1y7th/"
            },
        ],
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "talk230714",
        poster: "talk230714.jpg",
        date: "2023/07/14",
        title: "AI优化临床影像采集",
        speaker: "项磊 @深透医疗",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://scholar.google.com/citations?user=Dy3NMrwAAAAJ&hl=zh-CN"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1ru41157Ja/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence",
            "Technology"
        ]
    },
    {
        id: "talk230702",
        poster: "talk230702.jpg",
        date: "2023/07/02",
        daytime: "周日 9:00",
        title: "利用鲁棒机器学习深入了解阿尔茨海默病亚型",
        speaker: "汪浩瀚 @UIUC",
        host: "景宝宇 @UIUC",
        materials: [
            {
                tag: "讲者主页",
                href: "https://haohanwang.github.io/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1bs4y1F78d/"
            },
            {
                tag: "slides",
                href: "https://1drv.ms/b/s!AqZcVxAtazRmj8JOegTxi3idlgNpVA?e=3kBT9z" // talk230702.pdf
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "talk230623",
        poster: "talk230623.jpeg",
        date: "2023/06/23",
        title: "智能对抗数据生成在深度医学图像分割的应用",
        speaker: "陈晨 @牛津",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://sites.google.com/view/morningchen-site/home"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1Aj411Q7Ur/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "talk230609",
        poster: "talk230609.jpeg",
        date: "2023/06/09",
        title: "“生理时序数据”与“中文医疗大模型”双主题分享",
        speaker: "张磊 & 张海鹏",
        host: "刘帅 & 张玉冰",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1Hz4y1i7Gp/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence",
            "Technology"
        ]
    },
    {
        id: "routine31",
        poster: "routine31.jpg",
        date: "2023/06/02",
        title: "用于高通量步态参数分析的可穿戴设备“Lab-in-Shoe”系统开发",
        speakerPaper: "黄吉",
        speakerNews: "史林融",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV19V4y1U7wz/"
            },
        ],
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "talk230526",
        poster: "talk230526.jpeg",
        date: "2023/05/26",
        title: "CAMEL：探索大语言模型LLM的多智能体社会",
        speaker: "李国豪 @KAUST",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: " https://ghli.org/"
            },
            {
                tag: "项目主页",
                href: "https://github.com/lightaime/camel"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1Xc411A7iB/"
            },
            {
                tag: "slides",
                href: "https://1drv.ms/b/s!AqZcVxAtazRmj8JNsO8YocPrRy4f4Q?e=oOsHEt" // talk230526.pdf
            },
        ],
        topics: [
            "Intelligence"
        ]
    },
    {
        id: "talk230519",
        poster: "talk230519.jpeg",
        date: "2023/05/19",
        title: "AIGC中的视频/图像生成与编辑研究",
        speaker: "陈炫宏 @上海交大",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: " https://github.com/neuralchen"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1ys4y1z7cN/"
            },
        ],
        topics: [
            "Intelligence"
        ]
    },
    {
        id: "routine30",
        poster: "routine30.jpg",
        date: "2023/05/12",
        title: "[Science TransMed'23] 用于无创监测术后游离皮瓣和再植手指的皮肤生物传感器",
        speakerPaper: "刘帅",
        speakerNews: "杨炳乾",
        materials: [
            {
                tag: "论文",
                href: "https://www.science.org/doi/10.1126/scitranslmed.abq1634"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1eg4y1G7u3/"
            },
        ],
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "routine29",
        poster: "routine29.jpg",
        date: "2023/04/21",
        title: "[CVPR'23 作者精读] 基于Diffusion Models的3D模型生成",
        speakerAuthor: "李昱翰 @上海交大",
        host: "杨健程 @EPFL",
        speakerNews: "徐嘉阳",
        materials: [
            {
                tag: "论文",
                href: "https://arxiv.org/abs/2303.10406"
            },
            {
                tag: "本次活动不提供视频回放",
            }
        ],
        topics: [
            "Intelligence",
        ]
    },
    {
        id: "routine28",
        poster: "routine28.jpg",
        date: "2023/04/07",
        title: "足部多关节运动耦合关键技术分析研究",
        speakerPaper: "黎杰文",
        speakerNews: "刘帅",
        materials: [
            {
                tag: "论文",
                href: "https://www.sciencedirect.com/science/article/pii/S0021929008003709"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1Fk4y1i7Z4/"
            },
        ],
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "talk230324",
        poster: "talk230324.jpeg",
        date: "2023/03/24",
        title: "AR/VR中的神经渲染、编辑交互与基于耳廓重建的声场应用",
        speaker: "黄晓阳 @上海交大",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: " https://github.com/seanywang0408"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1zh411G7cM/"
            },
        ],
        topics: [
            "Intelligence",
            "Technology"
        ]
    },
    {
        id: "routine27",
        poster: "routine27.jpg",
        date: "2023/03/10",
        title: "基于“形压匹配”的糖尿病足分级刚度鞋垫研究综述",
        speakerPaper: "张星语",
        speakerNews: "罗虎",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1xL411y7XB/"
            },
        ],
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "talk230224",
        poster: "talk230224.jpeg",
        date: "2023/02/24",
        title: "智能药物设计方法在难成药靶点上的实践",
        speaker: "郑双佳 @中山/星药",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: " https://prokia.github.io/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1To4y1e75K/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence"
        ]
    },
    {
        id: "routine26",
        poster: "routine26.jpeg",
        date: "2023/02/17",
        title: "[AAAI'23] 基于变分特征融合的少样本目标检测模型",
        speakerPaper: "旷小欢",
        speakerNews: "李璟瑜",
        materials: [
            {
                tag: "论文",
                href: "https://arxiv.org/abs/2301.13411"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1eY411v7rc/"
            },
        ],
        topics: [
            "Intelligence",
        ]
    },
    {
        id: "routine25",
        poster: "routine25.jpeg",
        date: "2023/02/10",
        title: "[Front. Cardiovasc. Med'20] IVUS/OCT的研究进展及新型混合导管系统在冠状动脉成像中的应用前景",
        speakerPaper: "杨炳乾",
        speakerNews: "徐嘉阳",
        materials: [
            {
                tag: "论文",
                href: "https://doi.org/10.3389/fcvm.2020.00119"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1rM411E76f/"
            },
        ],
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "routine24",
        poster: "routine24.jpeg",
        date: "2023/02/03",
        title: "[NeurIPS'22] C-mixup: 提高回归任务的泛化能力",
        speakerPaper: "李璟瑜",
        speakerNews: "俞映红",
        materials: [
            {
                tag: "论文",
                href: "https://arxiv.org/abs/2210.05775"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1Hv4y1W7YU/"
            },
        ],
        topics: [
            "Intelligence",
        ]
    },
    {
        id: "routine23",
        poster: "routine23.jpeg",
        date: "2023/01/13",
        title: "[ECCV'22] 部分距离相关性在深度学习中的应用",
        speakerPaper: "李之豪",
        speakerNews: "旷小欢",
        materials: [
            {
                tag: "论文",
                href: "https://arxiv.org/abs/2207.09684"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1iA411U7ik/"
            },
        ],
        topics: [
            "Intelligence",
        ]
    },
    {
        id: "talk230106",
        poster: "talk230106.jpeg",
        date: "2023/01/06",
        title: "多变量时序电子病历数据深度学习可解释分析",
        speaker: "马连韬 @北大",
        host: "景宝宇",
        materials: [
            {
                tag: "论文1",
                href: "https://arxiv.org/abs/2209.07805"
            },
            {
                tag: "论文2",
                href: "https://ojs.aaai.org//index.php/AAAI/article/view/5427"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1YA411U7yw/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence"
        ]
    },
    {
        id: "routine22",
        poster: "routine22.jpeg",
        date: "2022/12/30",
        title: "[Proc. IEEE'22] 机器人辅助医学成像综述",
        speakerPaper: "杨炳乾",
        speakerNews: "罗虎",
        materials: [
            {
                tag: "论文",
                href: "https://ieeexplore.ieee.org/document/9756910"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1dR4y1q7xv/"
            },
        ],
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "routine21",
        poster: "routine21.jpeg",
        date: "2022/12/23",
        title: "[ECCV'22] 如何基于有限的标注进行高效的半监督学习",
        speakerPaper: "张沥",
        speakerNews: "李之豪",
        materials: [
            {
                tag: "论文",
                href: "https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136900423.pdf"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1nj411T7ov/"
            },
        ],
        topics: [
            "Intelligence"
        ]
    },
    {
        id: "talk221216",
        poster: "talk221216.jpeg",
        date: "2022/12/16",
        title: "如何高效利用已公开的医学影像数据集",
        speaker: "周纵苇 @JHU",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://www.zongweiz.com/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1uj411T7uq/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence"
        ]
    },
    {
        id: "routine20",
        poster: "routine20.jpeg",
        date: "2022/12/09",
        title: "[Science Robotics'20] 助行踝关节外骨骼的研究综述",
        speakerPaper: "朱云超",
        speakerNews: "罗虎",
        materials: [
            {
                tag: "论文",
                href: "https://www.science.org/doi/10.1126/scirobotics.aay9108"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1aM4y1Q7uF/"
            },
        ],
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "talk221203",
        poster: "talk221203.jpeg",
        date: "2022/12/03",
        daytime: "周六 20:00",
        title: "蛋白质表征学习：基准测试与模型设计",
        speaker: "徐明皓 @Mila",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://chrisallenming.github.io/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1ZA411B7AG/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence"
        ]
    },
    {
        id: "routine19",
        poster: "routine19.jpeg",
        date: "2022/11/25",
        title: "[ECCV'22] 快速知识蒸馏的视觉框架",
        speakerPaper: "陈骅桂",
        speakerNews: "张沥",
        materials: [
            {
                tag: "论文",
                href: "https://arxiv.org/abs/2112.01528"
            },
            {
                tag: "本次活动不提供视频回放",
            },
        ],
        topics: [
            "Intelligence"
        ]
    },
    {
        id: "routine18",
        poster: "routine18.jpeg",
        date: "2022/11/18",
        title: "[Science TransMed'22] 挑战与机遇：可穿戴设备的医学转化之旅",
        speakerPaper: "罗虎",
        speakerNews: "刘帅",
        materials: [
            {
                tag: "论文",
                href: "https://www.science.org/doi/10.1126/scitranslmed.abn6036"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1VM411e7EE/"
            },
        ],
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "routine17",
        poster: "routine17.jpeg",
        date: "2022/11/11",
        title: "[ECCV'22] 基于配准的少样本异常检测框架",
        speakerPaper: "袁康",
        speakerNews: "陈骅桂",
        materials: [
            {
                tag: "论文",
                href: "https://arxiv.org/abs/2207.07361"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1L14y1c7Ab/"
            },
        ],
        topics: [
            "Intelligence"
        ]
    },
    {
        id: "routine16",
        poster: "routine16.jpeg",
        date: "2022/11/04",
        title: "[Nature Electronics'22] 一种用于解码生物和环境信号的电子面罩",
        speakerPaper: "刘帅",
        speakerNews: "杨炳乾",
        materials: [
            {
                tag: "论文",
                href: "https://doi.org/10.1038/s41928-022-00851-6"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1ZG4y1U79c/"
            },
        ],
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "talk221028",
        poster: "talk221028.jpeg",
        date: "2022/10/28",
        title: "面向新一代无人系统的智能感知和混合现实技术",
        speaker: "邹征夏 @北航",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://zhengxiazou.github.io/"
            },
            {
                tag: "本次活动不提供视频回放",
            }
        ],
        topics: [
            "Intelligence",
            "Technology"
        ]
    },
    {
        id: "routine15",
        poster: "routine15.jpeg",
        date: "2022/10/21",
        title: "[NeurIPS'22] 将MAE用于视频表达学习",
        speakerPaper: "旷小欢",
        speakerNews: "袁康",
        materials: [
            {
                tag: "论文",
                href: "https://arxiv.org/pdf/2205.09113.pdf"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1Q24y1i74q/"
            },
        ],
        topics: [
            "Intelligence"
        ]
    },
    {
        id: "routine14",
        poster: "routine14.jpeg",
        date: "2022/10/14",
        title: "[Nature BME'21] 患者脑血管的经颅超快超声定位显微镜",
        speakerPaper: "李轶恒",
        speakerNews: "罗虎",
        materials: [
            {
                tag: "论文",
                href: "https://www.nature.com/articles/s41551-021-00697-x"
            },
            {
                tag: "本次活动不提供视频回放",
            }
        ],
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "talk221007",
        poster: "talk221007.jpeg",
        date: "2022/10/07",
        title: "神经图像合成技术及其在多发性硬化症的临床应用",
        speaker: "李宏伟 @Harvard/TUM",
        host: "杨健程 @EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://hongweilibran.github.io/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1hR4y1z7zk/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "routine13",
        poster: "routine13.jpeg",
        date: "2022/09/30",
        title: "[CVPR'22] 剪枝后的预训练模型迁移学习性能探究",
        speakerPaper: "陈嘉骏",
        speakerNews: "旷小欢",
        materials: [
            {
                tag: "论文",
                href: "https://openaccess.thecvf.com/content/CVPR2022/papers/Iofinova_How_Well_Do_Sparse_ImageNet_Models_Transfer_CVPR_2022_paper.pdf"
            },
            {
                tag: "本次活动不提供视频回放",
            }
        ],
        topics: [
            "Intelligence"
        ]
    },
    {
        id: "routine12",
        poster: "routine12.jpeg",
        date: "2022/09/23",
        title: "[MICCAI'22] 在线反思学习用于提高分割模型的鲁棒性",
        speakerPaper: "朱玉飞",
        speakerNews: "陈嘉骏",
        materials: [
            {
                tag: "论文",
                href: "https://arxiv.org/abs/2207.00476"
            },
            {
                tag: "本次活动不提供视频回放",
            }
        ],
        topics: [
            "Intelligence"
        ]
    },
    {
        id: "talk220918",
        poster: "talk220918.jpeg",
        date: "2022/09/18",
        daytime: "周日 20:00",
        title: "经颅超声刺激——一种新型的非侵入式神经调控技术",
        speaker: "曾以诺 @上海交大",
        host: "刘帅",
        materials: [
            {
                tag: "本次活动不提供视频回放",
            }
        ],
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "routine11",
        poster: "routine11.jpeg",
        date: "2022/09/09",
        title: "[ECCV'22] 知识的拆分与解耦",
        speakerPaper: "李璟瑜",
        speakerNews: "朱玉飞",
        materials: [
            {
                tag: "论文",
                href: "https://arxiv.org/abs/2207.03337"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1Zy4y1D7vM/"
            },
        ],
        topics: [
            "Intelligence"
        ]
    },
    {
        id: "routine10",
        poster: "routine10.jpeg",
        date: "2022/09/02",
        title: "[CVPR'22] EPro-PnP：一种用于单目物体姿态估计的泛用端到端PnP",
        speakerPaper: "李之豪",
        speakerNews: "李璟瑜",
        materials: [
            {
                tag: "论文",
                href: "https://arxiv.org/abs/2203.13254"
            },
            {
                tag: "本次活动不提供视频回放",
            }
        ],
        topics: [
            "Intelligence"
        ]
    },
    {
        id: "talk220827",
        poster: "talk220827.jpeg",
        date: "2022/08/27",
        daytime: "周六 20:00",
        title: "以临床用户为中心的可解释AI在医学图像分析的应用",
        speaker: "金巍娜 @Simon Fraser",
        host: "周介立",
        materials: [
            {
                tag: "讲者主页",
                href: "https://weina.me/"
            },
            {
                tag: "本次活动不提供视频回放",
            }
        ],
        topics: [
            "Healthcare",
            "Intelligence"
        ]
    },
    {
        id: "routine9",
        poster: "routine9.jpeg",
        date: "2022/08/19",
        title: "脉冲电场组织消融系统及应用解决方案",
        speakerPaper: "任冯刚&李卓群",
        speakerNews: "杨炳乾",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1h24y1i72n/"
            },
        ],
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "routine8",
        poster: "routine8.jpeg",
        date: "2022/08/12",
        title: "[CVPR'22] 使用神经隐函数的通用形状表征",
        speakerPaper: "匡开铭",
        speakerNews: "李之豪",
        materials: [
            {
                tag: "论文",
                href: "https://jianglongye.com/gifs/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1Gv4y1b7Gk/"
            },
        ],
        topics: [
            "Intelligence"
        ]
    },
    {
        id: "routine7",
        poster: "routine7.jpeg",
        date: "2022/08/05",
        title: "[Nature Medicine'22] 人工智能加速败血症检测",
        speakerPaper: "周介立",
        speakerNews: "卢鸣轩",
        materials: [
            {
                tag: "论文",
                href: "https://www.nature.com/articles/s41591-022-01894-0"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1DM411e7FR/"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence"
        ]
    },
    {
        id: "talk220730",
        poster: "talk220730.jpeg",
        date: "2022/07/30",
        daytime: "周六 20:00",
        title: "ECCV作者分享3D计算机视觉的前沿进展",
        speaker: "赵晨 @EPFL",
        host: "杨健程",
        materials: [
            {
                tag: "讲者主页",
                href: "https://sailor-z.github.io/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV12T411d7oi/"
            },
        ],
        topics: [
            "Intelligence"
        ]
    },
    {
        id: "routine6",
        poster: "routine6.jpeg",
        date: "2022/07/22",
        title: "三维步态分析在临床步态评估中的应用及思考",
        speakerPaper: "王琼",
        speakerNews: "罗虎",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1n84y157Su/"
            },
        ],
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "routine5",
        poster: "routine5.jpeg",
        date: "2022/07/15",
        title: "[CVPR'22] 用于通用图像分割的Mask2Former",
        speakerPaper: "俞映红",
        speakerNews: "匡开铭",
        materials: [
            {
                tag: "论文",
                href: "https://openaccess.thecvf.com/content/CVPR2022/papers/Cheng_Masked-Attention_Mask_Transformer_for_Universal_Image_Segmentation_CVPR_2022_paper.pdf"
            },
        ],
        topics: [
            "Intelligence"
        ]
    },
    {
        id: "talk220710",
        poster: "talk220710.jpeg",
        date: "2022/07/10",
        daytime: "周日 11:00",
        title: "Nature Medicine 作者分享健康和医学领域的人工智能",
        speaker: "Emma Chen @Stanford/Harvard",
        host: "周介立",
        materials: [
            {
                tag: "论文",
                href: "https://www.nature.com/articles/s41591-021-01614-0"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence"
        ]
    },
    {
        id: "routine4",
        poster: "routine4.jpeg",
        date: "2022/07/01",
        title: "[ICML'22] FEDformer-用于长期序列预测的频率增强型分解Transformer",
        speakerPaper: "景宝宇",
        speakerNews: "周介立",
        materials: [
            {
                tag: "论文",
                href: "https://arxiv.org/abs/2201.12740"
            },
        ],
        topics: [
            "Intelligence"
        ]
    },
    {
        id: "routine3",
        poster: "routine3.jpeg",
        date: "2022/06/24",
        title: "[arXiv'22] Understanding Failure Modes of Self-supervised Learning",
        speakerPaper: "张沥",
        speakerNews: "俞映红",
        materials: [
            {
                tag: "论文",
                href: "https://arxiv.org/abs/2203.01881"
            },
        ],
        topics: [
            "Intelligence"
        ]
    },
    {
        id: "routine2",
        poster: "routine2.jpeg",
        date: "2022/06/17",
        title: "[arXiv'22] PIDNet-受PID控制器启发的实时语义分割网络",
        speakerPaper: "王天予",
        speakerNews: "景宝宇",
        materials: [
            {
                tag: "论文",
                href: "https://arxiv.org/abs/2206.02066"
            },
        ],
        topics: [
            "Intelligence"
        ]
    },
    {
        id: "routine1",
        poster: "routine1.jpeg",
        date: "2022/06/10",
        title: "[arXiv'22/ECCV'22] Visual Prompt Tuning",
        speakerPaper: "杨健程",
        speakerNews: "张沥",
        materials: [
            {
                tag: "论文",
                href: "https://arxiv.org/abs/2203.12119"
            },
        ],
        topics: [
            "Intelligence"
        ]
    }
];






const tests = [
    {
        date: "2022/05/27",
        title: "[Patterns'22] HINT: Hierarchical Interaction Network for Clinical Trial Outcome Prediction",
        speaker: "符天凡 @Gatech",
        host: "周介立",
        materials: [
            {
                tag: "讲者主页",
                href: "https://futianfan.github.io/"
            },
            {
                tag: "论文",
                href: "https://www.sciencedirect.com/science/article/pii/S2666389922000186"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence"
        ]
    },
    {
        date: "2022/05/20",
        title: "[arXiv'22/TMLR'22] A Generalist Agent",
        speakerPaper: "卢鸣轩",
        speakerNews: "王天予",
        materials: [
            {
                tag: "论文",
                href: "https://www.deepmind.com/publications/a-generalist-agent"
            },
        ],
        topics: [
            "Intelligence"
        ]
    },
    {
        date: "2022/05/13",
        title: "[CVPR'22] HINT: Hierarchical Interaction Network for Clinical Trial Outcome Prediction",
        speakerPaper: "袁康",
        speakerNews: "杨健程",
        materials: [
            {
                tag: "论文",
                href: "https://arxiv.org/abs/2203.16427"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence"
        ]
    },
    {
        date: "2022/05/06",
        title: "[Nature Medicine'22] Swarm learning for decentralized artificial intelligence in cancer histopathology",
        speakerPaper: "周介立",
        speakerNews: "卢鸣轩",
        materials: [
            {
                tag: "论文",
                href: "https://www.nature.com/articles/s41591-022-01768-5"
            },
        ],
        topics: [
            "Healthcare",
            "Intelligence"
        ]
    },
    {
        date: "2022/04/29",
        title: "[CVPR'22] Joint Distribution Matters: Deep Brownian Distance Covariance for Few-Shot Classification",
        speakerPaper: "旷小欢",
        speakerNews: "袁康",
        materials: [
            {
                tag: "论文",
                href: "https://arxiv.org/abs/2204.04567"
            },
        ],
        topics: [
            "Intelligence"
        ]
    },
];
