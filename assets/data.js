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
