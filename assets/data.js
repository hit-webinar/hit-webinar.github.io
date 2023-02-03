const reports = [
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
        ],
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
        ],
    },
    {
        id: "talk230106",
        poster: "talk230106.jpeg",
        date: "2023/01/06",
        title: "北大博士后分享时序电子病历可解释分析",
        speaker: "马连韬",
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
        ],
    },
    {
        id: "routine22",
        poster: "routine22.jpeg",
        date: "2022/12/30",
        title: "[PIEEE'22] 机器人辅助医学成像综述",
        speakerPaper: "杨炳乾",
        speakerNews: "罗虎",
        materials: [
            {
                tag: "论文",
                href: "https://ieeexplore.ieee.org/document/9756910"
            },
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
        ]
    },
    {
        id: "talk221216",
        poster: "talk221216.jpeg",
        date: "2022/12/16",
        title: "约翰霍普金斯博士后分享医学图像分析",
        speaker: "周纵苇",
        host: "杨健程",
        materials: [
            {
                tag: "讲者主页",
                href: "https://www.zongweiz.com/"
            },
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
        ]
    },
    {
        id: "talk221203",
        poster: "talk221203.jpeg",
        date: "2022/12/03",
        title: "Mila博士分享AI制药与蛋白质表征学习",
        speaker: "徐明皓",
        host: "杨健程",
        materials: [
            {
                tag: "讲者主页",
                href: "https://chrisallenming.github.io/"
            },
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
        ]
    },
    {
        id: "routine18",
        poster: "routine18.jpeg",
        date: "2022/11/18",
        title: "[Science TM'22] 挑战与机遇：可穿戴设备的医学转化之旅",
        speakerPaper: "罗虎",
        speakerNews: "刘帅",
        materials: [
            {
                tag: "论文",
                href: "https://www.science.org/doi/10.1126/scitranslmed.abn6036"
            },
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
        ]
    },
    {
        id: "talk221028",
        poster: "talk221028.jpeg",
        date: "2022/10/28",
        title: "北航副教授分享新一代智能感知和混合现实",
        speaker: "邹征夏",
        host: "杨健程",
        materials: [
            {
                tag: "讲者主页",
                href: "https://zhengxiazou.github.io/"
            },
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
        ]
    },
    {
        id: "talk221007",
        poster: "talk221007.jpeg",
        date: "2022/10/07",
        title: "哈佛医学院博士后解读神经图像合成技术及其临床应用",
        speaker: "李宏伟",
        host: "杨健程",
        materials: [
            {
                tag: "讲者主页",
                href: "https://hongweilibran.github.io/"
            },
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
        ]
    },
    {
        id: "talk220918",
        poster: "talk220918.jpeg",
        date: "2022/09/18",
        title: "经颅超声刺激——一种新型的非侵入式神经调控技术",
        speaker: "曾以诺",
        host: "刘帅",
        materials: [
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
        ]
    },
    {
        id: "talk220827",
        poster: "talk220827.jpeg",
        date: "2022/08/27",
        title: "以临床用户为中心的可解释AI在医学图像分析的应用",
        speaker: "金巍娜",
        host: "周介立",
        materials: [
            {
                tag: "讲者主页",
                href: "https://weina.me/"
            },
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
        ]
    },
    {
        id: "routine7",
        poster: "routine7.jpeg",
        date: "2022/08/05",
        title: "[Nature Medicine'22] 人工智能加速败血症检测 ",
        speakerPaper: "周介立",
        speakerNews: "卢鸣轩",
        materials: [
            {
                tag: "论文",
                href: "https://www.nature.com/articles/s41591-022-01894-0"
            },
        ]
    },
    {
        id: "talk220730",
        poster: "talk220730.jpeg",
        date: "2022/07/30",
        title: "ECCV作者分享3D计算机视觉的前沿进展",
        speaker: "赵晨",
        host: "杨健程",
        materials: [
            {
                tag: "讲者主页",
                href: "https://sailor-z.github.io/"
            },
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
        ]
    },
    {
        id: "talk220710",
        poster: "talk220710.jpeg",
        date: "2022/07/10",
        title: "Nature Medicine 作者分享健康和医学领域的人工智能",
        speaker: "Emma Chen",
        host: "周介立",
        materials: [
            {
                tag: "论文",
                href: "https://www.nature.com/articles/s41591-021-01614-0"
            },
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
        ]
    }
];


const site = {
    year: "2022-2023",
    repoURL: "https://github.com/hit-webinar/hit-webinar.github.io",
    siteURL: "https://hit-webinar.com/",
    creator: "Jiancheng Yang",
    creatorURL: "https://jiancheng-yang.com/",
    showPageviews: false,
};


const about = `HIT Webinar是一个聚焦生物医疗，人工智能以及前沿科技的网络研讨会。<br>
HlT意为Healthcare，Intelligence和Technology，关注诸多医疗科技领域的前沿问题，包括医学影像处理、计算机视觉、智慧医疗、生物信息学、新型临床诊疗装备、智能康复机器人、医疗可穿戴设备、人工智能辅助制药等等。<br>
HIT Webinar由点内科技、高校学生学术联盟医工学人、上海交通大学HealthX医疗科技俱乐部、中美生科青年创投俱乐部共同发起和组织，包含常规活动和特邀报告。
常规活动主要包括论文精读分享和产学研用行业新闻分享，特邀报告则将邀请嘉宾分享特定领域的前沿进展。<br>
活动通常于每周五晚上进行。`;

const tests = [
    {
        date: "2022/05/27",
        title: "[Patterns'22] HINT: Hierarchical Interaction Network for Clinical Trial Outcome Prediction",
        speaker: "符天凡",
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
    },
];