const site = {
    year: "2022-2025",
    repoURL: "https://github.com/hit-webinar/hit-webinar.github.io",
    siteURL: "https://hit-webinar.github.io/",
    creator: "Jiancheng Yang",
    creatorURL: "https://jiancheng-yang.com/",
    showPageviews: false,
};

const about = `
HIT Webinar是一个聚焦健康医疗 <b>Healthcare</b>，人工智能 <b>Intelligence</b> 以及前沿科技 <b>Technology</b>的中文网络研讨会。
<br>
HIT网络研讨会主要由几位学术界的小伙伴基于兴趣发起，属于<b>完全开放的非营利性活动</b>，致力于打造<b>轻松友好的交流氛围</b>。
<br>
我们欢迎各种形式的关注和参与。如果您愿意来 HIT Webinar 分享，请联系<a href="https://jiancheng-yang.com/">杨健程</a>或其他组织者。
`;

const reports = [
    {
        id: "talk250627",
        // poster: "talk250627.jpg",
        date: "2025/06/27",
        title: "医疗多模态数据下的生成式人工智能应用与优化",
        speaker: "乔梦云 Imperial",
        host: "杨健程 EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://mengyunq.github.io/"
            },
            {
                tag: "视频回放",
                // href: "https://www.bilibili.com/video/#TODO"
            }
        ],
        link: {
            tag: "#腾讯会议：857-792-491",
            href: "https://meeting.tencent.com/dm/IQqbGaE1eEm5"
        },
        info: {
            abstract: `
        在当前医疗多模态数据分析领域，生成式人工智能技术展现了其在解读医疗大数据深度分布中的独特价值。心脏医疗学科尤其可以从生成网络的深入研究中受益，不仅能够洞察心脏的四维结构和动态活动，还能够探究其与非成像类临床因素的复杂关系。本项研究创新地提出了一款条件生成模型，旨在详细描绘心脏在时空中的四维解剖特性，及其与性别、年龄、疾病等临床因素的相互作用。本模型的突出之处在于它将临床因素作为生成过程的先决条件，为我们如何深入理解这些临床因素对心脏解剖结构的影响提供了新的视角和分析手段。
        `,
            bio: `
        乔梦云博士是伦敦帝国学院数据科学研究所和脑科学系的博士后研究员。她的主要研究领域是开发人工智能算法，用于医学图像分析和临床应用。目前，她专注于研发新颖的深度生成模型，这些模型能够学习心脏解剖学的时空变化，并探索这些生成模型在临床应用中的潜在应用。她的研究兴趣包括医学图像分析、深度学习、生成模型、数据增强以及因果关系等方面。
        `
        },
        topics: [
            "Healthcare",
            "Intelligence"
        ]
    },
    {
        id: "talk250622",
        poster: "talk250622.jpg",
        date: "2025/06/22",
        daytime: "周日 21:00",
        title: "医疗人工智能关键技术探索：影像诊断与手术介入",
        speaker: "陈阵 Yale",
        host: "黄典业 TUM",
        materials: [
            {
                tag: "讲者主页",
                href: "https://scholar.google.com/citations?user=oVG2zEkAAAAJ&hl=zh-CN"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1V8KpzXEoe/"
            }
        ],
        link: {
            tag: "#腾讯会议：788-303-863",
            href: "https://meeting.tencent.com/dm/I4FALevQEx3R"
        },
        info: {
            abstract: `
            人工智能正在革新医疗健康领域，为增强临床决策、改善患者预后和提高医疗可及性带来突破性机遇。本报告将介绍在临床路径中探索医疗人工智能的研究成果。在诊断方面，关注人工智能在数据和标注层面的临床挑战，通过提升医学图像质量并保留诊断信息，以及实现对复杂医学数据的弱监督分析，减轻标注需求。基于诊断研究，将人工智能支持扩展到手术领域，研发了智能手术辅助系统，与临床工作流程集成，通过手术视觉理解、意图识别和具身智能减轻医生认知负担。展望未来应用，探索模拟手术室的多智能体系统，旨在通过解决实际医疗环境的挑战，推动医疗人工智能在临床实践的探索。
            `,
            bio: `
            陈阵，耶鲁大学生物医学信息学与数据科学系高级博士后研究员。此前于中国科学院香港创新研究院人工智能与机器人中心担任助理教授。于香港城市大学获得博士学位，于中国科学技术大学、西安交通大学分别取得硕士及学士学位。研究聚焦于医疗人工智能、医学影像分析、手术介入和多模态大模型。发表期刊与会议论文60余篇，其中IEEE TMI和MedIA 15篇。凭借在人工智能辅助诊断和手术领域的研究成果，陈博士荣获2023年香港青年科学家奖。陈博士担任MICCAI 2024和2025领域主席，并组织了一系列关于医学大模型的研讨会，包括MICCAI 2024 EARTH、ICRA 2024 C4SR+和IJCAI 2023医学大模型研讨会等。
            `
        },
        topics: [
            "Healthcare",
            "Intelligence"
        ]
    },
    {
        id: "talk250530",
        poster: "talk250530.jpg",
        date: "2025/05/30",
        title: "迈向用于行为分析的自适应智能体",
        speaker: "叶绍凯 EPFL",
        host: "杨健程 EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://yeshaokai.github.io/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1pN7pzFEEN/"
            }
        ],
        link: {
            tag: "#腾讯会议：710-218-205",
            href: "https://meeting.tencent.com/dm/tLXMkcWuQplD"
        },
        info: {
            abstract: `
            动物行为分析需要处理大量视频数据，提取多模态信息，并运行复杂的分析流程——这是一项既耗时又计算密集的工作。我们能否构建多模态的智能体系统来简化这一过程？
    
            在本次报告中，我将介绍一种自底向上的构建方法，基于我博士期间的研究工作。我将分享第一个用于动物姿态估计的计算机视觉基础模型的开发过程，第一个用于动物行为分析的基于大语言模型的智能体系统，以及向用于人类动作识别的多模态大语言模型的转变。
    
            通过这一系列研究，我将探讨在跨物种行为理解中应用AI所面临的挑战、取得的突破以及未来的发展方向。
            `,
            bio: `
            叶绍凯是洛桑联邦理工学院（EPFL）的博士候选人，研究人工智能在计算机视觉与动物行为分析交叉领域的应用。他的研究涵盖多模态大语言模型、基于LLM的智能体系统、用于动物姿态估计的基础模型，以及对抗鲁棒性等方向。
    
            在攻读博士期间，他还是两个由 Chan Zuckerberg Initiative（CZI）资助的开源软件的主要代码贡献者。
    
            在此之前，他曾任职于阿里巴巴担任高级算法工程师，并在清华大学从事AI芯片设计工作。他拥有雪城大学的硕士学位和圣路易斯大学的学士学位。
    
            叶绍凯的研究成果发表在 NeurIPS、CVPR、ICCV、ECCV 和《自然通讯》等会议和期刊上，研究重点包括鲁棒AI系统、领域自适应以及高效神经网络架构。
            `
        },
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "talk250521",
        poster: "talk250521.jpg",
        date: "2025/05/21",
        daytime: "周三 20:00",
        title: "将人工智能与科学计算整合应用于心血管疾病的个性化医疗",
        speaker: "尹明朗 JHU",
        host: "杨健程 EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://minglangyin.github.io/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1niJ6zSEeb/"
            }
        ],
        link: {
            tag: "#腾讯会议：424-987-210",
            href: "https://meeting.tencent.com/dm/Dm31C5D1KO4i"
        },
        info: {
            abstract: `
            个性化医疗旨在通过能够反映患者特异性病理生理特征的工具，为临床护理提供指导。然而，由于现有评估工具在临床评估与管理中的表现有限，该领域迄今进展较为缓慢。在本次演讲中，我将探讨人工智能（AI）与科学计算等新兴工具如何变革心血管疾病个性化医疗的格局。
    
            首先，我将介绍一种全新的人工智能方法，该方法能够预测偏微分方程在不同几何形状下的解，其速度甚至超过超级计算机。该人工智能方法已被应用于超过1000个个体化心脏模型的电信号传播预测，为数字化试验、治疗规划以及预测心律药物响应者开辟了新路径。
    
            其次，我将展示一个通用的人工智能框架，用于临床预后预测。该框架通过学习个体化的多模态数据，在预测心脏骤停方面优于现有临床指南。
    
            第三，我将讨论人工智能与科学计算之间的协同作用如何提供一个定量化框架，依据心脏形态识别高卒中风险患者，并加深我们对心脏形态与心源性栓塞性卒中之间关联的机制理解。
            `,
            bio: `
            尹明朗是约翰斯·霍普金斯大学生物医学工程系及ADVANCE中心的高级博士后研究员。他的研究聚焦于开发新型人工智能和计算方法，推动个性化医疗的发展，并揭示疾病机制。
    
            他的研究成果受到了广泛媒体关注（例如 JHU Hub、美国国家科学基金会新闻、麻省理工科技评论、《ACM通讯》等）。他曾荣获由心律协会颁发的 Kenneth M. Rosen 奖学金、生物医学工程最佳博士论文奖（《国际生物医学工程数值方法期刊》）、中国国家优秀自费留学生奖学金（全球仅600名获得者之一）等多项奖项。
    
            他本科毕业于中国西北工业大学航空工程专业，随后在布朗大学获得流体与热科学硕士学位及生物医学工程博士学位。
            `
        },
        topics: [
            "Healthcare",
            "Intelligence",
            "Technology"
        ]
    },
    {
        id: "talk250510",
        poster: "talk250510.jpg",
        date: "2025/05/10",
        daytime: "周六 20:00",
        title: "植入式声学超构凝胶传感器",
        speaker: "田野 CWRU",
        host: "罗虎 复旦",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1ZU5FzSEpP/"
            }
        ],
        link: {
            tag: "#腾讯会议：154-644-600",
            href: "https://meeting.tencent.com/dm/aXGUGWqGgjyr"
        },
        info: {
            abstract: `
            近年来，由不健康的生活习惯引起的组织损伤、心血管疾病等健康问题高发。在疾病康复的过程中，亟需实现对体内生理状态的实时、精准监测。然而，传统的CT，MRI等诊断方法需要专业的医护人员进行操作，且设备价格高昂，无法实现连续监测。植入式传感器能够实现直接、准确、连续的生理参数监测，但传感器中的核心半导体和金属材料存在刚性、难以降解、与MRI和CT等院内诊断技术不兼容等诸多限制。
            
            为此，我们开发了一种全新的超构凝胶（Metagel）传感器，其完全由柔软可降解的水凝胶构成，通过引入空气微孔结构构成二维声子晶体，就像一台可植入的“水凝胶风琴”，实现了对组织应变的无源、无线、实时感知。使用体外超声探头即可捕捉“水凝胶风琴”的共鸣频率变化，从而判断体内组织状态。超构凝胶传感器无需任何电池、芯片或金属元件，即可实现无线、连续的组织监测，真正实现“植入即忘”。
            `,
            bio: `
            田野，于华中科技大学获得电子科学与技术博士学位，师从集成电路学院臧剑锋教授，现为美国凯斯西储大学博士后研究员。他的博士研究方向为用于人体健康管理的柔性智能材料与器件，包括基于声学超构凝胶的植入式应变传感器与压力传感器，基于光学超材料的精确色盲矫正眼镜等，可穿戴超声成像设备等。
            
            担任Sensors期刊“用于人类健康管理的先进传感器”专题的客座编辑，MRS可穿戴能源系统分会主席，Science Advances、EML、Small Science等期刊审稿人。相关研究成果在Nature, Nature Biomedical Engineering, Nano Letters等期刊上发表。
            `
        },
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "routine40",
        poster: "routine40.jpg",
        date: "2025/05/02",
        title: "[ICLR‘25 Spotlight] LeFusion - 可控合成医学数据的病灶聚焦扩散模型",
        speakerPaper: "张翰韬 中科大/EPFL",
        host: "杨健程 EPFL",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1gwVLz5E5P/"
            },
            {
                tag: "论文",
                href: "https://openreview.net/forum?id=3b9SKkRAKw"
            },
            {
                tag: "代码",
                href: "https://github.com/M3DV/LeFusion"
            }
        ],
        link: {
            tag: "#腾讯会议：775-213-548",
            href: "https://meeting.tencent.com/dm/Tw3ONpnJPeJC"
        },
        info: {
            abstract: `
            在真实临床实践中，患者数据常因样本稀缺和长尾分布不均而导致模型输出产生偏差，甚至引发算法公平性问题。为了解决这一挑战，本研究提出了一种全新的方法，通过从无病灶图像中合成含病灶的图像-分割对，从根本上缓解数据稀缺问题。
    
            LeFusion 是一种以病灶为核心的扩散模型，通过重新设计扩散学习目标，使模型专注于病灶区域，从而在保证背景高保真的前提下，提升对合成结果的可控性。具体来说，LeFusion 在反向扩散过程中融合正向扩散产生的背景上下文，并引入基于直方图的纹理控制与多通道分解方法，解决多峰值结构与多类别病灶生成问题。同时，设计了病灶掩膜扩散机制，实现对病灶大小、位置及边界的精准调控，提升多样性与真实感。
    
            实验结果显示，该方法在多个真实医学数据集（如 3D 心脏 MRI、肺结节 CT）上生成数据可显著提升主流分割模型的性能。

            代码和模型均已开源：<a href="https://github.com/M3DV/LeFusion">https://github.com/M3DV/LeFusion</a> 。  
            `,
            bio: `
            张瀚韬是中国科学技术大学计算机专业的硕士三年级学生，目前作为交换访问硕士在瑞士洛桑联邦理工学院（EPFL）学习，由 Pascal Fua 教授与杨健程博士联合指导，研究方向为医学图像分析。
    
            他本科毕业于东北大学，多次获得国家奖学金。硕士期间主要研究扩散模型在医学三维视觉中的应用，已以第一作者或共同一作身份在 ICLR、Communications Medicine（Nature 旗下期刊）、AAAI、ICME、BIBM 等会议与期刊发表论文，同时也担任 ICCV 和 IEEE TIP 等会议与期刊的审稿人。
            `
        },
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "talk250418",
        poster: "talk250418.jpg",
        date: "2025/04/18",
        title: "机器人辅助的超声，光声及OCT成像",
        speaker: "马曦晗 @WPI",
        host: "黄典业 @TUM",
        materials: [
            {
                tag: "讲者主页",
                href: "https://scholar.google.com/citations?user=4brJi0QAAAAJ&hl=en"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1Wb5EzjEzJ/"
            }
        ],
        link: {
            tag: "#腾讯会议：985-367-117",
            href: "https://meeting.tencent.com/dm/K4s7GAnod7ip"
        },
        info: {
            abstract: `
            医学成像在现代医疗中扮演着核心角色，贯穿临床诊断、治疗监测与手术导航等关键环节。传统成像流程依赖大量人工操作，导致患者间及患者个体内扫描结果的可重复性受限。近十年来，机器人辅助医学成像概念（Robot-Assisted Medical Imaging）受到广泛关注。RAMI系统通过机器人精准控制成像轨迹，实现可重复的影像采集，从而提升医学成像的自主性、一致性与全球可及性。本次报告将展示RAMI系统如何赋能超声（US）、光声（PA）及光学相干断层扫描（OCT）等常见成像技术；聚焦算法驱动的机器人自主扫描策略，精准组织三维重建以及具体的临床应用。
            `,
            bio: `
            马曦晗，美国伍斯特理工学院（WPI）机器人工程专业四年级博士生。师从张海崇（Haichong K. Zhang）教授。此前于伍斯特理工学院获得机器人工程硕士学位，于北京化工大学获得机械设计制造及其自动化学士学位。他的研究方向为医学超声图像的处理和机器人辅助的医学成像，包括机器人辅助的超声，光声及OCT成像。曾任飞利浦北美研究院软件研发工程师实习生，从事造影增强超声的算法研发与落地工作。相关研究成果在IEEE RA-L，IEEE T-ASE，IEEE TBME，Biomedical Optics Express，Communications Engineering等期刊上发表。
            `
        },
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "talk250404",
        poster: "talk250404.jpg",
        date: "2025/04/04",
        title: "语言与视觉协同的医学影像智能分析",
        speaker: "谢雨彤 @MBZUAI",
        host: "黄典业 @TUM",
        materials: [
            {
                tag: "讲者主页",
                href: "https://scholar.google.com/citations?user=ddDL9HMAAAAJ&hl=zh-CN"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1vAZZYgEsD/"
            },
        ],
        link: {
            tag: "#腾讯会议：668-186-306",
            href: "https://meeting.tencent.com/dm/6B992BpKCsNg"
        },
        info: {
            abstract: `
            多模态技术的发展为医学影像智能分析开辟了全新的方向，尤其是语言与视觉的结合，为解决数据稀缺、任务复杂和标注昂贵等挑战提供了新的可能。本报告聚焦语言驱动的多模态方法，通过文本提示与视觉信息的协同，探讨如何提升医学影像分析的理解、推理与生成能力。内容涵盖弱监督分割、医学视觉问答、医学报告生成、多模态预训练等关键任务。通过对相关技术的研究与实践，揭示语言在医学影像智能分析中的驱动作用，并展望未来的发展方向。
            `,
            bio: `
            谢雨彤，MBZUAI 计算机视觉系助理教授。2022-2024 年在澳大利亚阿德莱德大学机器学习研究所任博士后研究员。研究方向为医学影像智能计算，重点关注有限标注下医学数据的高效分析和解读、多模态医学数据分析。  
            迄今为止，在 IEEE-TPAMI、IJCV、CVPR、MICCAI 等中科院一区顶级期刊和领域顶级会议发表 50 余篇论文，4 篇入选 ESI 高被引，谷歌学术总引用 5500 余次，授权专利 4 项。曾获中国图象图形学学会优秀博士学位论文奖、陕西省自然科学优秀学术论文奖等，并连续三年入选斯坦福大学全球前 2% 顶尖科学家榜单。  
            作为主要组织者举办 MICCAI 2024 和 ACM MM 2024 国际挑战赛，2023-2025 连续三年担任 MICCAI 领域主席，并担任 VALSE 2025 Tutorial 主席、VALSE 2024 & 2025 执行领域主席及医学影像青年论坛（MICS）委员会委员。长期担任多个顶级期刊和会议的审稿人。
            `,
        },
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "talk250316",
        poster: "talk250316.jpg",
        date: "2025/03/16",
        daytime: "周日 13:00",
        title: "从假设到证据：大语言模型在医学科学发现中的应用",
        speaker: "王子丰 UIUC",
        host: "杨健程 EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://zifengwang.xyz/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1pWQtYQEjQ/"
            }
        ],
        link: {
            tag: "#腾讯会议：576-594-210",
            href: "https://meeting.tencent.com/dm/y6BdpikPrmhs"
        },
        info: {
            abstract: `
            大语言模型（LLMs）在加速科学发现方面具有巨大潜力，但仍需优化以适应医学研究任务，并高效融入专家工作流程。本次演讲聚焦于医学科学发现的三个核心环节：假设生成、实验执行和假设验证，重点探讨 LLM 在文献研究、临床研究和数据科学研究中的应用。我将首先介绍 LEADS 和 TrialMind，两种专为文献挖掘设计的 LLM 方法，促进医学文献的搜索、筛选和数据抽取。随后，我将介绍 TrialGPT，一个用于优化临床试验患者招募的 LLM 管道。最后，我将探讨 LLM 在代码生成和医学及生物医学数据分析中的应用，以加速假设验证并推动新的医学发现。
            `,
            bio: `
            王子丰是伊利诺伊大学香槟分校（UIUC）计算机科学系博士生，师从 Jimeng Sun 教授，致力于使用人工智能 (AI) 加速医学科学发现。他的研究涵盖 AI 驱动的文献研究、数据科学研究和临床研究，重点改进文献检索、筛选和数据提取，自动化临床试验和真实世界数据的分析建模，并优化临床试验的设计、招募和结果分析。他的研究成果曾被《自然》、美国国立卫生研究院（NIH）、NIH 主任博客、《政客》等多家媒体报道。自 2023 年起，他联合创办了 Keiji.AI，推出了临床试验 AI 平台 TrialMind，已被多家药企应用。在加入 UIUC 之前，他从同济大学和清华大学分别获得了本科和硕士学位。
            `,
        },
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "routine39",
        poster: "routine39.jpg",
        date: "2025/03/09",
        daytime: "周日 20:00",
        title: "通过模拟数据构建泛癌影像基础模型",
        speakerPaper: "雷文辉 上海交大",
        host: "杨健程 EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://lwhyc.github.io/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1XRRaYoEfo/"
            }
        ],
        link: {
            tag: "#腾讯会议：754-810-987",
            href: "https://meeting.tencent.com/dm/zuQYoT0Y01Z3"
        },
        info: {
            abstract: `
            人工智能影像分析技术在肿瘤筛查、疗效监测及预后评估领域取得显著进展，但受限于隐私保护政策与精准标注的高昂成本，高质量公开数据集的匮乏严重制约了该领域发展。为解决这一关键瓶颈，我们提出PASTA-Gen 合成肿瘤生成框架，构建包含 10 种恶性肿瘤和 5 类良性病变的 30,000 例 CT 数据集，并提供精准病灶掩膜及结构化报告。基于此高质量合成数据，我们开发了PASTA 泛癌 CT 基础模型，在病灶分割、平扫 CT 肿瘤检测、分期诊断、生存预测、结构化报告生成及跨模态迁移学习等 46 项代表性肿瘤学任务中，其中 45 项达到最优性能，并在 35 项任务上显著超越次优模型。特别值得注意的是，PASTA 展现出强大的数据效率，仅需少量真实数据即可显著提升多类任务性能。我们公开了合成数据集及泛癌基础模型 PASTA，有效缓解肿瘤影像分析领域的数据不足问题，为肿瘤学研究和临床应用提供了新的支持。
            `,
            bio: `
            雷文辉 是上海交通大学计算机系的第四年博士生，由 张少霆 和 张晓凡 教授指导，此前于电子科技大学获得硕士及学士学位。他的研究聚焦于医学基础模型、小样本学习、自监督学习等。在 MedIA、IEEE TMI、ICLR、MICCAI 等期刊及会议上发表多篇论文，并担任多个顶级期刊和会议的审稿人。
            `
        },
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "talk250228",
        poster: "talk250228.jpg",
        date: "2025/02/28",
        title: "用于上气道软组织力学监测的导管式柔性压力传感阵列研究",
        speaker: "尚将 北航",
        host: "刘帅 西交",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1ZN95Y5EqA/"
            }
        ],
        link: {
            tag: "#腾讯会议：375-539-623",
            href: "https://meeting.tencent.com/dw/375-539-623"
        },
        info: {
            abstract: `
            阻塞性睡眠呼吸暂停综合征（OSAS）是一种常见的睡眠呼吸障碍，因上呼吸道塌陷或阻塞导致睡眠中反复出现呼吸暂停和低通气事件，常伴随低氧血症和睡眠结构紊乱，严重影响睡眠质量和健康。准确检测和定位气道阻塞对于 OSAS 的诊断和治疗计划制定至关重要，但这对于传统的睡眠监测方法来说仍然是一个挑战。
    
            研究团队开发了一种新型导管式柔性压力传感器阵列，能够连续、精确地监测上气道软组织压力分布，并以毫米级精度定位阻塞部位。这是一种使用临床介入导管实现传感功能的方法，可以为 OSAS 的诊断和治疗提供患者气道塌陷位点原位数据，实时监测上呼吸道软组织接触压力分布。该成果对于临床环境中 OSAS 的诊断和治疗方案的制定，尤其是在确定手术干预的部位和范围方面具有重要意义和价值。此外，此种传感器加工设计方案还可扩展至其它常规导管型医疗装备，用于测量人体内其他腔道压力分布。
            `,
            bio: `
            尚将，北京航空航天大学生物与医学工程学院博士研究生。2016 年取得口腔医学硕士学位，具有 6 年三甲医院口腔颌面外科工作经历，2022 年考入北京航空航天大学生物与医学工程学院攻读博士学位，研究方向为激光在口腔软硬组织愈合中的应用研究和柔性可穿戴传感技术在医疗健康监测领域中的应用研究。目前已发表论文十余篇，在上气道软组织力学监测方面的最新研究成果发表在 Nature Communications 上。
            `
        },
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "talk250213",
        poster: "talk250213.jpg",
        date: "2025/02/13",
        daytime: "周四 20:00",
        title: "基础模型在医学图像的迁移应用",
        speaker: "陈城 HKU",
        host: "杨健程 EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://cchen-cc.github.io/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1A3KWeLEb1/"
            },
        ],
        link: {
            tag: "#腾讯会议：391-178-947",
            href: "https://meeting.tencent.com/dm/WzdwFFjWri4e"
        },
        info: {
            abstract: `
            医学图像分析在真实场景中面临数据获取难、标注成本高、设备异质性大及多模态信息融合困难等多重挑战。基础模型因其在跨模态和跨任务中的强泛化能力，正在医学图像领域展现出重要价值。本报告聚焦于基础模型在医学图像分割、检测及表征学习中的迁移应用，讨论如何通过提示学习、跨模态一致性建模以及对比学习等方法，充分发挥基础模型的潜能。我们将探讨这些技术在提升医学图像分析效率、降低标注需求及增强模型泛化性方面的成效。同时，本报告还将分析当前面临的技术挑战，并展望基础模型在医学分析任务中的未来应用前景。
            `,
            bio: `
            陈城，香港大学电机电子工程系助理教授。此前于哈佛医学院担任博士后研究员。于香港中文大学获得博士学位，于约翰霍普金斯大学、浙江大学分别取得硕士及学士学位。研究聚焦于医学图像分析、多模态数据融合、模型的泛化性、鲁棒性研究等。发表期刊/会议论文 30 余篇，包括 Nature Communications、IEEE TMI、MedIA、NeurIPS、CVPR、ICCV 等。入选斯坦福大学 2024 全球前 2% 顶尖科学家榜单。获 2023 年全球前 80 名人工智能中国青年女性学者称号。担任 MICCAI 2024 领域主席，以及领域内顶级期刊和会议的审稿人。
            `,
        },
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "talk250207",
        poster: "talk250207.jpg",
        date: "2025/02/07",
        // daytime: "周五 20:00",
        title: "基于生物MEMS技术的病原体核酸检测方法及小型化仪器",
        speaker: "张浩卿 西安交通大学",
        host: "王树彤",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV151N5eTEPk/"
            }
        ],
        link: {
            tag: "#腾讯会议：407-782-091",
            href: "https://meeting.tencent.com/dm/kfmCCZ72RZIY"
        },
        info: {
            abstract: `
            我国“十四五”规划明确指出，要攻关新发、突发传染病和生物安全风险防控领域的关键核心技术。相较于传统的大型核酸检测仪器，便携式核酸检测设备凭借速度快、操作简便、集成化的优势，可实现即时检测（POCT），有助于病毒核酸引起的传染病快速筛查，并具有广泛的应用前景。
            
            本报告将围绕核酸检测的“金标准”——反转录荧光定量PCR（RT-qPCR）和新一代数字PCR技术，针对现有便携式核酸检测仪器的不足及技术挑战，展示基于这两种核酸检测技术的小型化核酸检测仪器的开发过程及创新思路。
            `,
            bio: `
            张浩卿，博士后，现为西安交通大学生命学院仿生工程与生物力学研究所（BEBC）团队助理教授，博士毕业于西北工业大学微机电系统及纳米技术专业。他围绕国家生命健康领域的重大需求，从事高灵敏核酸快速检测技术及仪器的研究，遵循“理论分析-技术开发-设备研制-临床验证”的学术思路，致力于生物传感技术在疾病检测中的应用。
            
            迄今为止，张博士在 Sensors and Actuators B: Chemical、Lab on a Chip 等知名期刊发表论文 20 余篇，拥有国家发明专利5项（授权3项）。其团队研发的手持式荧光定量PCR仪器受邀参加科技部“十三五”科技创新成就展，所提出的 闭环温度反馈控制的快速热循环技术 已成功转化至三诺生物传感股份有限公司，并应用于新冠病毒检测。同时，他开发的高灵敏集成化核酸检测仪器荣获 第三届陕西省博士后创新创业大赛银奖。
            
            研究工作期间，张博士主持了国家自然科学基金青年项目、中国博士后科学基金特别资助项目、博士后面上项目及陕西省自然科学基金青年项目，在核酸检测技术及仪器研发领域取得了重要成果。
            `
        },
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "talk250131",
        poster: "talk250131.jpg",
        date: "2025/01/31",
        daytime: "周五 21:00",
        title: "形变环境下手术机器人的同步定位与地图创建（SLAM）技术",
        speaker: "赵亮 爱丁堡大学",
        host: "黄典业 TUM",
        materials: [
            {
                tag: "讲者主页",
                href: "https://scholar.google.com.au/citations?user=1OagsSYAAAAJ&hl=en"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV14KFXeSEvp/"
            }
        ],
        link: {
            tag: "#腾讯会议：131-756-493",
            href: "https://meeting.tencent.com/dm/p5KxAO7nLjTb"
        },
        info: {
            abstract: `
            自主机器人研究的核心问题之一是同步定位与建图（SLAM）技术。作为一项研究已有30多年的技术，其主要任务是帮助机器人在未知环境中同时构建地图并确定自身位置，从而实现自主导航。然而，在手术机器人领域，由于体内环境的可变形性和复杂性，SLAM问题变得更加困难且充满挑战。本次报告将介绍我们在图像引导机器人手术中的SLAM技术研究进展，包括其在血管内介入手术、腹腔镜手术、结肠镜检查、经食管超声心动图以及全膝关节置换术等医疗应用中的创新方法与成果。
            `,
            bio: `
            赵亮教授，现为英国爱丁堡大学信息学院博士生导师，曾在英国帝国理工学院哈姆林手术机器人中心从事博士后研究。此前，他曾担任悉尼科技大学机器人研究院医疗机器人实验室主任，主要研究方向包括移动机器人和手术机器人的SLAM技术。在国际顶级期刊及会议（如T-RO、IJRR、RA-L、T-MRB、RSS、MICCAI、ICRA、IROS）上，以核心作者身份发表论文80余篇。迄今主持或参与各类科研基金项目20余项，总资助金额达400万澳元。赵亮教授还担任机器人领域顶级期刊 IEEE Transactions on Robotics（T-RO）副主编，以及国际顶级机器人学术会议ICRA和IROS的副主编。
            `
        },
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "talk250124",
        poster: "talk250124.jpg",
        date: "2025/01/24",
        title: "面向医学图像处理的可变性探索：标签与数据",
        speaker: "吴轶成 Monash",
        host: "黄典业 TUM",
        materials: [
            {
                tag: "讲者主页",
                href: "https://scholar.google.com.hk/citations?hl=zh-CN&user=_h1y48MAAAAJ&view_op=list_works&sortby=pubdate"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1ZVf6YaEqx/"
            },
        ],
        link: {
            tag: "#腾讯会议：916-603-061",
            href: "https://meeting.tencent.com/dm/I5D92ClBeFD7"
        },
        info: {
            abstract: `
            随着通用基础模型的兴起，医学图像处理也迈入了全新的发展阶段。然而，临床应用中的可变性为医疗通用基础模型的开发和部署带来了巨大挑战。本次报告将从两个核心方面探讨可变性问题：标签和数据。
            首先，在病变与肿瘤等目标的分割任务中，由于专家标注之间存在显著差异，我们提出了一种方法，能够同时提供多样化和个性化的分割结果，以满足不同临床需求。其次，针对多种医疗数据缺失场景，我们开发了一种统一模型，用于序列补全和对齐，从而实现全模态数据的高效学习，以期望提升临床应用准确性。
            最后，报告还将展望未来研究方向，探讨如何进一步解决医学图像处理中的可变性问题，为临床提供可靠的技术支持。
            `,
            bio: `
            吴轶成，现任 Monash 大学信息技术学院博士后研究员，博士毕业于 Monash 大学，导师为蔡剑飞教授，本硕毕业于西北工业大学，导师为夏勇教授。他的研究方向涵盖医学图像处理与计算机视觉，在国际顶级会议与期刊（如 IJCV、Medical Image Analysis、CVPR、MICCAI 等）发表论文 18 篇，其中第一作者 10 篇，包含一篇 ESI 高被引论文及一篇 Highlight 论文，Google Scholar 总引用次数超 1400 次。他担任MICCAI 2025领域主席，主办过ACM MM MMIS 2024挑战赛，并曾获Monash FIT研究生优秀奖，MBH-Seg 2024挑战赛亚军等。
            `,
        },
        topics: [
            "Healthcare",
            "Technology",
            "Intelligence"
        ]
    },
    {
        id: "talk250112",
        poster: "talk250112.jpg",
        date: "2025/01/12",
        daytime: "周日 20:00",
        title: "深度几何学习在工业设计优化中的应用",
        speaker: "魏震 EPFL",
        host: "杨健程 EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://scholar.google.com/citations?user=CYHddJMAAAAJ"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1brcVejEp8/"
            },
        ],
        link: {
            tag: "#腾讯会议：223-227-447",
            href: "https://meeting.tencent.com/dw/dcQ7dCuBPnfS"
        },
        info: {
            abstract: `
            工业设计优化是计算机辅助设计和工业软件的核心功能之一，其目标是通过调整产品几何形态提升性能、可用性和制造效率。然而，当前的几何处理往往依赖于大量人工操作，导致开发成本高企，普及难度较大。本讲座将重点介绍利用深度几何学习技术在工业设计优化中提升几何处理自动化水平的最新研究进展，并探讨未来的研究方向与挑战。
            `,
            bio: `
            魏震，洛桑联邦理工学院计算机视觉实验室博士研究生。他于2016年和2019年分别毕业于电子科技大学和中国科学院大学，获得学士和硕士学位。他的研究方向涵盖深度学习、三维计算机视觉、工业软件、流体力学及飞行器设计。他曾获美国航空航天学会（AIAA）Aviation Forum最佳学生论文奖及AIAA年度最佳论文奖。
            `
        },
        topics: [
            "Technology",
            "Intelligence"
        ]
    },
    {
        id: "talk250105",
        poster: "talk250105.jpg",
        date: "2025/01/05",
        daytime: "周日 20:00",
        title: "柔性味觉神经界面——用于舌癌患者手术评估与味觉解码",
        speaker: "王馨儿 中科院微系统所",
        host: "史林融 西交",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1A7rNYwEkJ/"
            }
        ],
        link: {
            tag: "#腾讯会议：249-110-366",
            href: "https://meeting.tencent.com/dw/ja8lb654owQR"
        },
        info: {
            abstract: `
            味觉是最重要的生理感觉之一，对人类的生存与进化至关重要。舌癌是全球十大恶性肿瘤之一，年新增病例超过35万例。舌癌病灶直接侵犯舌头的味觉感受区域，同时以游离组织皮瓣修复重建舌癌术后组织缺损会使患者味觉减退甚至完全丧失味觉功能，严重影响其整体生活质量，然而目前对味觉失能缺少有效的临床干预治疗手段。
            
            针对上述的临床问题，我们开发出高通量超柔性味觉神经界面，使皮肤也能感知“味觉”，帮助舌癌患者等舌瓣重建术后味觉失能患者重建味觉功能。
            `,
            bio: `
            王馨儿，中国科学院上海微系统与信息技术研究所博士研究生，本科毕业于中国科学技术大学，博士期间的研究方向为柔性神经界面，曾获研究生国家奖学金、微纳传感器领域国际顶会 IEEE MEMS Best Student Oral Award Finalist 等，在味觉神经界面方面的最新研究成果发表在 Nature Communications 上。
            `
        },
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "routine38",
        poster: "routine38.jpg",
        date: "2024/12/29",
        daytime: "周日 14:00",
        title: "[NeurIPS‘24] GMAI通用多模态医疗大模型的构建与评测",
        speakerPaper: "陈鹏程 华盛顿大学",
        host: "杨健程 EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://scholar.google.com/citations?user=-slpk2kAAAAJ"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1X568YjEzV/"
            },
        ],
        link: {
            tag: "#腾讯会议：874-440-051",
            href: "https://meeting.tencent.com/dw/9LRBEOHhwvwz"
        },
        info: {
            abstract: `
            近年来，多模态大模型在图像、文本等领域取得了巨大突破，但在医疗领域仍然缺乏一款真正可靠的多模态大模型。对此，研究团队整合了数百个专业医学数据集，创建了规模庞大的多模态医疗数据集 GMAI-VL-5.5M，并通过图文配对的策略实现了多元医疗任务和高质量标注的覆盖。
            在数据基础之上，团队提出了采用分阶段训练策略的通用医疗视觉语言模型 GMAI-VL，显著提升了视觉与文本信息的整合和理解能力，从而在多模态医疗场景下更好地支持辅助诊断和临床决策。
            为了全面评估大型视觉语言模型（LVLMs）在医疗领域的实际表现，研究团队进一步提出了通用医疗 AI 基准 GMAI-MMBench。该基准覆盖了 38 种医疗图像模态、18 个临床相关任务、18 个科室和 4 个感知层级，并以视觉问答（VQA）的形式统一了评测框架。整项研究不仅提供了高质量的医疗数据与模型方案，也为后续研究如何构建更高效、更可靠的医疗 AI 奠定了坚实基础。
            `,
            bio: `
            陈鹏程是华盛顿大学的博士生，目前在导师 Eric Seibel 的指导下从事研究工作，并在上海人工智能实验室担任实习生。他本科毕业于南方科技大学，主要研究方向包括手术机器人和多模态医疗大模型。他在通用医疗智能领域具有丰富的研究和实践经验，并多次在国际会议上获得 Best Paper 和 Best Paper Finalist 等荣誉。
            `
        },
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "talk241220",
        poster: "talk241220.jpeg",
        date: "2024/12/20",
        daytime: "周五 20:30",
        title: "量化衰老：从预测到预防",
        speaker: "应可钧 Harvard",
        host: "杨健程 EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://kejunying.com/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV15tCVY5Ecc/"
            },
        ],
        link: {
            tag: "#腾讯会议：684-744-905",
            href: "https://meeting.tencent.com/dw/G0yfd34hUvG6"
        },
        info: {
            abstract: `
            生物衰老是一个复杂的多系统过程，其准确量化对于理解衰老机制和开发抗衰老干预措施至关重要。这里我们介绍了我们在生物年龄量化领域的最新进展，包括基于因果推断的衰老时钟开发、器官特异性衰老时钟的建立，以及在分子通路水平研究高维生物衰老的“Ageome”新概念。随着深度学习技术的发展，我们开发了基于 Transformer 的 methylGPT，作为 DNA 甲基化数据的基础模型，提升了对表观遗传学衰老标志物的理解。研究表明，这种多维度的衰老量化方法在预测疾病风险方面显著优于传统单一时钟。在此基础上，我们开发了 ClockBase 平台用于大规模筛选潜在的抗衰老干预措施。为促进领域发展，我们成立了 Biomarkers of Aging Consortium，发起了总奖金超过20万美元的生物衰老标志物国际竞赛（Biomarkers of Aging Challenge），旨在通过开放竞赛的方式推动多组学衰老生物标志物的研发。这些进展为理解衰老的异质性提供了新的视角，同时也展示了人工智能在模拟复杂生物系统中的应用潜力。未来，这些方法学创新将有助于开发更精确的抗衰老策略，推动个性化干预方案的制定。
            `,
            bio: `
            应可钧，哈佛大学博士在读，同时于 2024年获得哈佛大学计算科学与工程硕士学位。他师从美国科学院院士 Vadim Gladyshev 教授，专攻衰老系统生物学。他的研究重点是解析衰老的潜在原因以及开发基于机器学习的衰老生物标志物。他提出首个基于因果推断的衰老时钟（Nature Aging 2024 封面文章），并建立了 ClockBase 平台，整合了全球超过两百万个样本的衰老时钟数据，该平台曾被 Nature Biotechnology 新闻报道。他领导 Biomarkers of Aging Consortium 的 Biolearn 和衰老生物标志物竞赛项目，在 2024 年被 Science 新闻报道。他的其他研究近年在 Cell，Nature Aging，Nature Medicine 等期刊发表。
            `,
        },
        topics: [
            "Healthcare",
            "Intelligence",
            "Technology",
        ]
    },
    {
        id: "talk241213",
        poster: "talk241213.jpg",
        date: "2024/12/13",
        title: "DNA步行器——用于液体活检的新型分析技术",
        speaker: "柴华 中科院苏州医工所",
        host: "许心愿",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1L5BgYZEfA/"
            },
        ],
        info: {
            abstract: `
            液体活检是一类非侵入式的诊断方法，即通过抽提外周血并进行分析的方式，实时监测和判断身体患病的风险。外周血中包含多种疾病标志物库。针对该样本，我们设计了系列DNA步行器作为信号放大元件，其具有强大的序列可编程性和精确的分子识别能力，进而搭建出快速，易操作，低成本，超灵敏的检测平台，能够为疾病的早期诊断和精准医疗提供有力的工具。
            `,
            bio: `
            柴华，中国科学院苏州生物医学工程技术研究所博士后，主要从事DNA纳米机器的研制及生物传感应用，成功研制了一系列高性能电化学传感器。先后主持国家自然科学基金青年基金、中国科学院特别研究助理资助项目、江苏省自然科学基金青年基金等项目9项。累计发表SCI论文30余篇，其中第一作者/通讯作者20篇，影响因子10分以上论文7篇，H-index 15；申请发明专利8项。
            `,
        },
        topics: [
            "Healthcare",
            "Technology",
        ]
    },
    {
        id: "routine37",
        poster: "routine37.jpg",
        date: "2024/12/06",
        daytime: "周五 20:30",
        title: "[MedIA'25] 基于点图混合表征隐式场的3D肺部树状结构高效分割",
        speakerPaper: "谢康贤 Buffalo",
        host: "杨健程 EPFL",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV19zi6YNEnF/"
            },
            {
                tag: "论文链接",
                href: "https://doi.org/10.1016/j.media.2024.103367"
            },
            {
                tag: "模型代码",
                href: "https://github.com/M3DV/pulmonary-tree-labeling"
            },
            {
                tag: "数据集",
                href: "https://github.com/M3DV/pulmonary-tree-labeling"
            }
        ],
        link: {
            tag: "#腾讯会议：783-427-051",
            href: "https://meeting.tencent.com/dw/iUv0MJKTadBz"
        },
        info: {
            abstract: `
            肺部疾病是全球主要死亡原因之一。治愈这些疾病需要更深入地理解肺部系统中复杂的3D树状结构，如支气管和动静脉。然而，传统方法利用高分辨率图像堆栈和在稠密体素网格上运行的标准卷积神经网络（CNN），在计算效率、分辨率受限、局部上下文及形状拓扑结构的保持上面临挑战。
            我们的方法通过从稠密体素转向稀疏点云表示，改善了内存效率并更好地利用了全局上下文。然而，点云表示的固有稀疏性可能导致树状结构中关键连通性的丢失。为此，我们引入基于骨架结构的图学习方法，结合可微分的特征融合技术，以改进拓扑结构和长距离上下文捕获。更进一步的，我们采用隐式神经表征实现稀疏表示到稠密重建的端到端高效重建。
            相较于以往基于体素、点云或图的方法，我们的方法提升显著（2-13个百分点），并且推理速度在秒级，相比标准方法加速了约10倍。针对该领域的数据稀缺问题，我们还整理了一个全面的数据集用于验证我们的方法。
            `,
            bio: `
            谢康贤是纽约州立大学布法罗分校的一年级博士生，导师是高明辰教授。他的主要研究方向是医学图像分析。他本硕分别毕业于加州大学圣地亚哥分校数学系，以及波士顿大学计算机系。在硕士期间，他与杨健程博士一起进行了隐式神经表征和肺部解剖结构的研究。他曾在生物医学影像会议 ISBI 以及医学影像顶刊 Medical Image Analysis 上以第一作者发表了论文。
            `
        },
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "talk241129",
        poster: "talk241129.jpg",
        date: "2024/11/29",
        title: "从分子进化到基因编辑工具开发的研究",
        speaker: "张寿悦 中科院微生物所",
        host: "史林融 西交",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1eCz6YVEGZ/"
            }
        ],
        link: {
            tag: "#腾讯会议：863-124-191",
            href: "https://meeting.tencent.com/dw/KoQSle7KPVKP"
        },
        info: {
            abstract: `
            基因编辑技术被广泛认为是21世纪生命科学领域最重要的突破之一，使得对遗传信息的精确修改成为可能。我们分别在CRISPR-Cas9系统和HYER研究领域取得了重大突破。并且今年分别在《Nature》和《Science》上发表了我们的研究成果。首先，CRISPR系统是原核生物中发现的一种适应性免疫系统，它保护宿主细胞免受外来DNA的入侵。作为噬菌体与细菌免疫系统之间持续斗争的一部分，CRISPR系统已经演变成各种类型，每种都具有不同的功能。II型Cas9是这些系统中研究最广泛的，并且具有多种亚型。在我们的研究中，揭示了II型-C Cas9的三种结构增长轨迹，进一步发现新的相关基因（NAGs）倾向于出现在较大的II-C Cas9位点内。进一步发现了一种新型的Cas9系统，它与一个名为PcrIIC1的蛋白结合，形成了一个异源四聚体复合物。这个复合物不仅增强了DNA的结合和切割活性，还提高了对PAM序列的兼容性和对错配的容忍度，从而增强了细菌对噬菌体的免疫力。
            另外，我们发现了一种名为HYER的核糖酶，它能够特异性地通过水解作用切割DNA。这种核糖酶在体外实验中显示出对RNA和DNA底物的水解切割活性，并且在细菌和哺乳动物细胞中都能有效地切割质粒DNA。通过冷冻电镜分析，研究人员揭示了HYER的高分辨率结构，为其催化机制提供了结构基础，并为进一步的工程化改造提供了可能。HYER的发现扩展了我们对RNA在基因编辑中作用的认识，并为开发新型基因编辑工具提供了新的思路。
            这两项研究的结合，为我们提供了一个关于基因编辑技术发展的全面视角。CRISPR-Cas9系统的研究不仅增强了我们对细菌免疫机制的理解，而且为提高CRISPR-Cas9系统在基因编辑中的效率和特异性提供了新策略。而HYER的发现则为我们提供了一种全新的RNA基工具，这种工具在基因编辑和治疗中可能具有独特的优势。这些研究成果不仅加深了我们对生命科学的理解，也为未来的医学治疗提供了新的可能性。
            `,
            bio: `
            张寿悦，中国科学院微生物研究所，从事生物信息学和结构生物学技术，研究蛋白与 RNA 的分子进化与工具开发，先后主持国自然科学青年基金、申请专利等项目8 项。在项目资助下，成功创建“结构生长轨迹”分析方法，发现了 CRISPR-Cas9 系统中存在蛋白元件从小到大的生长进化轨迹，并且发现 Cas9 蛋白生长进化后能够与一类 CRISPR增强蛋白（Pro-CRISPR）协作，增强 Cas9 的活性。其中，首次报道了 Pro-CRISPR系统，与 Anti-CRISPR 系统形成对应，展现了细菌与噬菌体的生存竞争。创建“单种属多拷贝法”生物信息学鉴定方法，鉴定出原核基因组中的不含蛋白元件的、完全由 RNA 元件构成的高活性二类内含子核酶。并利用该系统首次开发出具有 DNA 切割活性的 RNA 基因编辑工具 HYER 系统。此外，还鉴定了 Cas 蛋白元件较小，RNA 元件较大的嵌合型 PlmCasX 系统和Casπ 系统用作基因编辑技术开发，先后参与发表 SCI 论文 45 篇，其中第一作者（含共同第一作者）或通讯作者 23 篇，总引用超过 2400 次，H-index为31；曾获清华大学结构生物学高精尖创新中心卓越学者，北京生物结构前沿中心卓越学者。
            `
        },
        topics: [
            "Healthcare",
            "Technology",
        ]
    },
    {
        id: "talk241122",
        poster: "talk241122.jpg",
        date: "2024/11/22",
        title: "三维超声重建：探索隐式表征新方法",
        speaker: "陈宏博 上科大",
        host: "杨健程 EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://chenhbo.github.io/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1XfB6YuEMg/"
            }
        ],
        link: {
            tag: "#腾讯会议：737-808-413",
            href: "https://meeting.tencent.com/dw/Aje6rP3raTYj"
        },
        info: {
            abstract: `
            三维超声成像，特别是自由臂三维超声成像，具有成像范围广、无辐射、操作灵活等优点，是现代医学影像学的重要组成部分。高质量的超声成像与三维重建算法的设计息息相关。本报告将围绕三维重建与可视化算法，展开探讨隐式神经表征在超声成像的应用，包括容积重建和表面重建。其中，容积重建将作为简单过渡，引出他们近期在表面重建的一些最新工作。尤其是在超声手术导航背景下，多视图形状重建算法的设计与研究。这项工作提出一种行列扫描模式下的基于隐式神经符号距离场的多视图形状重建算法，解决了三维超声多视图扫描模式下如何精准重建目标解剖结构的问题。最后，本报告还将分享多视图三维形状重建算法在更加具体的人体腰椎部位的应用和讨论。
            `,
            bio: `
            陈宏博是上海科技大学和中国科学院大学的联合培养博士生，导师是郑锐教授。2022.07-2023.09，他曾赴加拿大阿尔伯塔大学交流访问，期间受到Dr. Lawrence Le和Dr. Edmond Lou的指导。博士期间，他的主要研究方向包括三维超声成像、三维重建、目标检测和手术导航等。他在国际期刊和会议，如MedIA、IEEE-TUFFC、JAP、MICCAI、IEEE-IUS上发表了相关论文。他曾获得MICCAI 2024 最佳论文奖, IEEE-TUFFC 期刊封面（2021）等。
            `
        },
        topics: [
            "Healthcare",
            "Intelligence",
        ]
    },
    {
        id: "talk241115",
        poster: "talk241115.jpg",
        date: "2024/11/15",
        daytime: "周五 19:00",
        title: "磁驱介入机器人研究进展",
        speaker: "杨正馨 中科院苏州医工所",
        host: "杨炳乾 中科大",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1XnU6YhEaB/"
            },
        ],
        link: {
            tag: "#腾讯会议：967-747-841",
            href: "https://meeting.tencent.com/dm/suIKOYCv0bPw?fromDw=1"
        },
        info: {
            abstract: `
            血管介入手术是血管疾病的常用诊疗方法，然而传统的介入治疗仍面临介入器械操控难、具有辐射风险等挑战。为解决上述问题，可操纵导管机器人被提出，其中，磁驱导管机器人可在外部磁场作用下进行主动弯曲，具有前端柔软、尺寸小、灵活性高等优势，成为研究热点。本报告从机器人体设计、磁驱系统、运动控制等层面，围绕磁驱介入机器人展开工作分享。
            `,
            bio: `
            杨正馨，中国科学院苏州医工所博士后，博士毕业于香港中文大学。获批博士后国际交流计划引进、中科院特别研究助理等资助项目，主持国自然青年、博后面上等项目。研究专注于新型磁驱机器人及其控制方法研究，发表领域内高水平学术论文20余篇。
            `
        },
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "talk241110",
        poster: "talk241110.jpg",
        date: "2024/11/10",
        daytime: "周日 14:00",
        title: "超声贴片8年 - 全身，可穿戴，连续成像技术",
        speaker: "王冲和 Sonologi & ex-MIT",
        host: "杨健程 EPFL & 张雅超 苏州医工所",
        materials: [
            {
                tag: "讲者主页",
                href: "https://scholar.google.com/citations?user=4caHOfIAAAAJ"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1tbmpYuE9B/"
            },
        ],
        link: {
            tag: "#腾讯会议：771-263-842",
            href: "https://meeting.tencent.com/dw/hq37QluCOm0K"
        },
        info: {
            abstract: `
            医疗成像技术（如X光、核磁共振、超声等）是现代医学诊断的基石，然而现有设备主要应用于特定时间点的检查（如每年一至两次），无法满足持续监测的需求。王冲和博士团队经过8年的研究，开发出全球首款可用于全身监测的可穿戴超声波贴片，实现了传统医学成像技术向日常化、穿戴化和连续化的重大转变。这项技术将大大拓展医疗影像在日常健康管理中的应用前景，为实现下一代数字医疗提供了新的可能。
            `,
            bio: `
            王冲和博士毕业于美国麻省理工学院（MIT）机械工程系。自2016年以来，他研发了可穿戴超声波技术的研究方向，致力于开发用于人体深层组织生命体征监测的可穿戴设备。他发明了全球首款可用于人体的可穿戴超声波贴片（Nature BME 2018封面）。在长达八年的研究中，他开发并验证了“可穿戴深层组织传感器”（Nature BME 2021封面）、“可穿戴成像”（Science 2022）和“可穿戴全身持续成像”（Nature 2024）等突破性概念。
            王冲和的研究成果曾被《时代周刊》、《国家地理杂志》、《福布斯》、《麻省理工科技评论》、美国国立卫生研究院（NIH）、NIH主任博客、世界经济论坛等数百家知名媒体报道和高度评价。这项技术具有巨大的潜力，将传统体积庞大的临床超声设备转化为下一代数字医疗可穿戴智能设备。2024年，他创立了 Sonologi 公司，专注于超声波贴片技术，并担任联合创始人兼首席技术官（CTO）。公司在种子轮融资中获得了1800万人民币的投资。他的荣誉包括：《福布斯》北美“30位30岁以下精英”（科学类）、美国国家发明者名人堂决赛入围者、2023年度高被引科学家（Clarivate）、巴克斯特青年研究员奖（一等）。
            `
        },
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "talk241101",
        poster: "talk241101.jpg",
        date: "2024/11/01",
        title: "面向软组织与显微手术场景的增强现实手术导航",
        speaker: "涂朴勋 上海交大",
        host: "杨健程 EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://puxuntu.github.io/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1S1SoYGEaf/"
            }
        ],
        link: {
            tag: "#腾讯会议：966-229-133",
            href: "https://meeting.tencent.com/dw/FUeROLf4amYD"
        },
        info: {
            abstract: `
            手术导航系统被誉为手术室中的“GPS系统”，但目前手术导航系统的普及应用受限于手眼不协调、不适用于软组织和显微手术等问题。针对高度动态与细微软组织手术的多源多模术中影像融合与显微增强现实导航这一关键问题，面向精准、微创、智能的软组织手术临床需求，本报告将介绍本人及团队提出的基于深度多点感知原理的虚实融合配准方法、术中稀疏超声图像序列引导的软组织非刚性形变校正方法、显微视频在线时空多任务学习及增强现实导航方法，及研发集成的面向软组织手术的增强现实手术导航软硬件系统。将以头颈、肝胆等软组织手术及眼科等显微手术为应用案例，介绍我们开展的模型、动物、尸体、临床实验研究及结果。
            `,
            bio: `
            涂朴勋，上海交通大学博士研究生，导师为陈晓军研究员，研究领域为图像引导手术。主持首批国家自然科学基金博士生项目，获博士生国家奖学金。发表论文20余篇，其中以第一作者在IEEE Transactions on Biomedical Engineering、Information Fusion、MICCAI等发表论文7篇，获授权国家发明专利4项。曾在德国明斯特大学、英国伦敦大学学院等相关实验室访问。曾两次获中国生物医学工程学会“青年优秀论文”奖，入选MICCAI PhD Thesis Madness Finalist。
            `
        },
        topics: [
            "Healthcare",
            "Intelligence",
            "Technology"
        ]
    },
    {
        id: "talk241025",
        poster: "talk241025.jpg",
        date: "2024/10/25",
        title: "探索与实践：健康管理策略的深思与经验交流",
        speaker: "匡大鹏 上交一附院",
        host: "史林融 西交",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1aNyDYmEQZ/"
            }
        ],
        link: {
            tag: "#腾讯会议：229-864-245",
            href: "https://meeting.tencent.com/dm/R1MWSx6hRXnC"
        },
        info: {
            abstract: `
            随着我国社会的发展，人口年龄结构的变化使得老龄化问题日益严峻，已成为我国未来较长间内必须直面的挑战。为此，积极应对老龄化已上升为国家层面的战略任务。当前，我国老化社会呈现出系列新的发展态势和特征:首先是老年群体规模巨大，目增长速度迅猛:其次是老年人生活数字化程度不断提高，健康意识和人口素质也在不断增强。
            
            随着年龄的增长，老年人群体的身体机能逐渐衰退,慢性病频发，生活能力逐步弱化，这使得他们在日常生活中不得不依赖药品、保健品以及医疗器械的长期辅助。在新时代背景下，银发人群面临的健康管理问题主要包括慢性病的防控、生活能力的维持以及心理健康等;他们对健康管理的需求体现在对智能化、个性化服务的追求上。银发人群的健康消费趋势则表现为对智能化、个性化产品的青睐。整合专业技术、医疗专业技术，尤其是人工智能多模态技术，来为老年人健康管理赋能和加持对应对老龄化挑战具有重要意义。
            `,
            bio: `
            匡大鹏，同济大学硕士/上海交通大学医学院博士;目前上海交通大学医学院附属第一人民医院/上海市第一人民医院急诊危重病科主治医师;上海交通大学医学院附属第一人民医院/上海市第一人民医院/上海市红十字医院医疗救援队副队长。科研经历: 发表SCI和核心期刊相关论文9篇，第一发明人授权发明和实用新型专利8项，参与国自然、市科委等科研基金项目。上海市第32届发明选拔赛优秀创新银奖、全国医学3D打印技术与临床应用全国创新大赛三等奖等。
            `
        },
        topics: [
            "Healthcare"
        ]
    },
    {
        id: "talk241020",
        poster: "talk241020.jpg",
        date: "2024/10/20",
        daytime: "周日 13:00",
        title: "图学习大模型在罕见病的旧药新用",
        speaker: "黄柯鑫 Stanford",
        host: "杨健程 EPFL",
        materials: [
            {
                tag: "讲者主页",
                href: "https://www.kexinhuang.com/"
            },
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1JoyhY3Eiw/"
            }
        ],
        link: {
            tag: "#腾讯会议：885-653-856",
            href: "https://meeting.tencent.com/dw/mVnZCbTxpDdR"
        },
        info: {
            abstract: `
            药物重定位（即为已批准的药物识别新的治疗用途）通常是一种偶然且机会主义的方法，旨在拓展药物在新疾病上的应用。然而，药物重定位人工智能（AI）模型的临床实用性仍然有限，因为这些模型往往聚焦于已有药物的疾病。为此，我们提出了TxGNN，这是一种面向零样本药物重定位的图基础模型，即使针对治疗选择有限或尚无药物的疾病也能识别治疗候选药物。TxGNN基于医学知识图进行训练，利用图神经网络和度量学习模块，为17,080种疾病排名药物作为潜在的适应症和禁忌症。与8种方法进行基准测试后，TxGNN在严格的零样本评估条件下，适应症预测准确性提高了49.2%，禁忌症预测准确性提高了35.1%。为了便于模型解释，TxGNN的解释模块提供了对多跳医学知识路径的透明洞察，形成TxGNN的预测依据。对TxGNN解释模块的人类评估表明，TxGNN的预测和解释在多个性能维度上优于准确性，并表现出令人鼓舞的效果。TxGNN的许多新预测与临床医生在大型医疗系统中此前的非适应症用药处方高度一致。TxGNN的药物重定位预测准确、一致，并可通过多跳可解释路径供专家进行深入分析。
            该研究近期发表于Nature Medicine。
            `,
            bio: `
            黄柯鑫是斯坦福大学计算机科学系的第四年博士生，由Jure Leskovec教授指导，隶属于斯坦福AI实验室。他的研究专注于使AI能够产生新颖、可部署且可解释的生物医学和药物发现。Kexin的研究重点包括跨越大量、多样化、多模态和多尺度的生物实验进行建模，以生成新颖的假设和发现。他致力于确保这些发现的可靠性和可信度，使其与科学家真正重视的事物保持一致。此外，他还探索如何构建一个能够帮助生物学家日常工作的AI，以及建立一个完全自主的AI生物学家所需的条件。在加入斯坦福之前，他曾与Marinka Zitnik教授、Cao Xiao博士、Jimeng Sun教授和Rajesh Ranganath教授合作。他还在Genentech、辉瑞、IQVIA、Dana-Farber、Flatiron Health和洛克菲勒大学有研究经验。他在纽约大学完成了数学、计算机科学和工作室艺术的本科学位，并在哈佛大学获得了健康数据科学的硕士学位。
            `
        },
        topics: [
            "Healthcare",
            "Intelligence"
        ]
    },
    {
        id: "talk241010",
        poster: "talk241010.jpg",
        date: "2024/10/10",
        daytime: "周四 20:00",
        title: "诊疗一体化光纤LSPR细胞传感器的研究",
        speaker: "罗泽伟 四川大学",
        host: "史林融",
        materials: [
            {
                tag: "视频回放",
                href: "https://www.bilibili.com/video/BV1HCm3YFE3E/"
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
            罗泽伟，四川大学机械工程学院副研究员，从事光纤生物传感器研究，先后主持国自然科学青年基金、四川省/陕西省科技厅等项目8项。在项目资助下，成功研制了U形、Ω形和J形等多种形状的光纤探针，并开发系列高灵敏的诊疗一体的光纤LSPR传感器。在Biosensors & Bioelectronics、Analytical Chemistry、Sensors and Actuators B: Chemical、Optics & Laser Technology等杂志发表一作/通讯SCI论文20余篇（中科院一区13篇），累计发表SCI论文50篇，它引1000余次，H-index为22，申请发明专利6项；担任Interdisciplinary Medicine青年编委；长期担任Research、Analytical Chemistry、ACS Sensors、Journal of Lightwave Technology、Photonic Sensors、IEEE Transactions on Instrumentation & Measurement等SCI杂志审稿人；担任中国光学工程学会光谱技术及应用专业委员会青年委员、四川省科技协同创新促进会智能制造专家服务团顾问；指导本科生获得第九届全国大学生基础医学创新大赛国赛银奖，第九届“互联网+”大学生创新创业大赛四川省一等奖。  
            `
        },
        topics: [
            "Healthcare",
            "Technology"
        ]
    },
    {
        id: "talk240922",
        poster: "talk240922.jpg",
        date: "2024/09/22",
        daytime: "周日 13:00",
        title: "GenAI时代的医学影像",
        speaker: "彭伟 Stanford",
        host: "杨健程 EPFL",
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
        speaker: "杨宇喆 MIT",
        host: "杨健程 EPFL",
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
        speaker: "顾运 上海交大",
        host: "杨健程 EPFL",
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
        speaker: "李泽榉 Oxford",
        host: "杨健程 EPFL",
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
        speaker: "张同 EPFL",
        host: "杨健程 EPFL",
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
        speaker: "李夏 ETH Zurich",
        host: "杨健程 EPFL",
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
        speaker: "杨健程 EPFL",
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
        speaker: "高峰 佛山瑞联福",
        host: "邹海达 西安交大",
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
        speaker: "崔雨晨 Stanford",
        host: "杨健程 EPFL",
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
        speaker: "赵伟 湘雅",
        host: "杨健程 EPFL",
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
        "speaker": "李雷 Soton",
        "host": "杨健程 EPFL",
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
        "speaker": "田宇 Harvard",
        "host": "杨健程 EPFL",
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
        "speaker": "张雅超 苏州医工所",
        "host": "杨炳乾 中科大",
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
        "speaker": "刘越江 Stanford",
        "host": "杨健程 EPFL",
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
        speaker: "蒋中亮 TUM",
        host: "杨健程 EPFL",
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
        speaker: "赵波 & 杜雨新 & 白帆 智源研究院",
        host: "杨健程 EPFL",
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
        speaker: "尤晨羽 Yale",
        host: "杨健程 EPFL",
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
        speaker: "谷元杰 复旦",
        host: "罗虎 复旦",
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
        speaker: "赵琛 KAUST",
        host: "杨健程 EPFL",
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
        speaker: "林天成 上海交大",
        host: "杨健程 EPFL",
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
        speaker: "邢小涵 Stanford",
        host: "杨健程 EPFL",
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
        speakerPaper: "吴龙燕 复旦",
        host: "李轶恒 中科大",
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
        speaker: "何军军 上海人工智能实验室",
        host: "杨健程 EPFL",
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
        speakerPaper: "陶宝鑫 上海交大",
        host: "罗虎 复旦",
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
        speaker: "Yingying Zhu UT Arlington",
        host: "张玉冰 北大",
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
        speaker: "杨鑫 深大",
        host: "杨健程 EPFL",
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
        speaker: "褚寒冰 西安交大",
        host: "杨炳乾 中科大",
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
        speakerPaper: "罗虎 复旦",
        host: "张玉冰 北大",
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
        speakerPaper: "邵良靖 复旦",
        speakerNews: "张玉冰 北大",
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
        speakerPaper: "许阳阳 复旦",
        speakerNews: "罗虎 复旦",
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
        speaker: "项磊 深透医疗",
        host: "杨健程 EPFL",
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
        speaker: "汪浩瀚 UIUC",
        host: "景宝宇 UIUC",
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
        speaker: "陈晨 牛津",
        host: "杨健程 EPFL",
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
        speaker: "李国豪 KAUST",
        host: "杨健程 EPFL",
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
        speaker: "陈炫宏 上海交大",
        host: "杨健程 EPFL",
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
        speakerAuthor: "李昱翰 上海交大",
        host: "杨健程 EPFL",
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
        speaker: "黄晓阳 上海交大",
        host: "杨健程 EPFL",
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
        speaker: "郑双佳 中山/星药",
        host: "杨健程 EPFL",
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
        speaker: "马连韬 北大",
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
        speaker: "周纵苇 JHU",
        host: "杨健程 EPFL",
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
        speaker: "徐明皓 Mila",
        host: "杨健程 EPFL",
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
        speaker: "邹征夏 北航",
        host: "杨健程 EPFL",
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
        speaker: "李宏伟 Harvard/TUM",
        host: "杨健程 EPFL",
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
        speaker: "曾以诺 上海交大",
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
        speaker: "金巍娜 Simon Fraser",
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
        speaker: "赵晨 EPFL",
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
        speaker: "Emma Chen Stanford/Harvard",
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
        speaker: "符天凡 Gatech",
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
