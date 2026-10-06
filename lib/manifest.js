(function () {
  "use strict";

  window.__BRAND__ = {
    name: "Pini & Cancian",
    fullName: "Pini & Cancian Estudio Jurídico",
    tagline: "Asesoramiento legal con criterio, cercanía y estrategia.",
    year: new Date().getFullYear(),

    contact: {
      whatsapp: "5493777732029",
      whatsappMessage: "Hola, quisiera hacer una consulta con el estudio.",
      whatsappMessage_en: "Hi, I'd like to make an inquiry with the firm.",
      whatsappMessage_pt: "Olá, gostaria de fazer uma consulta com o escritório.",
      whatsappMessage_zh: "您好，我想向律所咨询。",
      // TODO: reemplazar por el email real
      email: "contacto@pinicancian.com.ar",
      addressLine: "José Gómez 1468",
      cityLine: "Goya, Corrientes",
      mapQuery: "Jose Gomez 1468, Goya, Corrientes, Argentina"
    },

    practiceAreas: [
      {
        id: "laboral",
        kicker: "01",
        name: "Derecho Laboral",
        name_en: "Labor Law",
        name_pt: "Direito do Trabalho",
        name_zh: "劳动法",
        summary: "Defensa de trabajadores y asesoramiento a empresas frente a despidos, indemnizaciones y conflictos laborales.",
        summary_en: "Defending workers and advising companies on dismissals, severance pay and labor disputes.",
        summary_pt: "Defesa de trabalhadores e assessoria a empresas em demissões, indenizações e conflitos trabalhistas.",
        summary_zh: "为劳动者提供辩护，并就解雇、赔偿和劳动纠纷向企业提供咨询。",
        detail: "Acompañamos cada etapa del reclamo laboral: liquidaciones, telegramas, acuerdos y juicios, con una estrategia clara desde la primera consulta.",
        detail_en: "We support every stage of a labor claim: settlements, formal notices, agreements and lawsuits, with a clear strategy from the first consultation.",
        detail_pt: "Acompanhamos cada etapa da reclamação trabalhista: acordos, notificações, conciliações e processos judiciais, com uma estratégia clara desde a primeira consulta.",
        detail_zh: "我们在劳动索赔的每个阶段提供支持：结算、通知、协议和诉讼，从第一次咨询开始就制定清晰的策略。"
      },
      {
        id: "familia",
        kicker: "02",
        name: "Derecho de Familia",
        name_en: "Family Law",
        name_pt: "Direito de Família",
        name_zh: "家庭法",
        summary: "Divorcios, alimentos, cuidado personal y régimen de comunicación, con un trato humano en cada proceso.",
        summary_en: "Divorce, child support, custody and visitation arrangements, with a human approach to every process.",
        summary_pt: "Divórcio, pensão alimentícia, guarda e regime de convivência, com um tratamento humano em cada processo.",
        summary_zh: "离婚、赡养费、监护权和探视安排，在每个过程中都给予人性化的关怀。",
        detail: "Cada familia es distinta. Buscamos acuerdos cuando es posible y litigamos con firmeza cuando es necesario.",
        detail_en: "Every family is different. We pursue agreements whenever possible, and litigate firmly when necessary.",
        detail_pt: "Cada família é diferente. Buscamos acordos quando possível e litigamos com firmeza quando necessário.",
        detail_zh: "每个家庭都不同。我们尽可能寻求协议，必要时坚定地进行诉讼。"
      },
      {
        id: "sucesiones",
        kicker: "03",
        name: "Sucesiones",
        name_en: "Probate & Inheritance",
        name_pt: "Sucessões",
        name_zh: "继承法",
        summary: "Tramitamos sucesiones de inicio a fin, ordenando la herencia y evitando conflictos entre herederos.",
        summary_en: "We handle probate proceedings from start to finish, organizing the estate and preventing disputes among heirs.",
        summary_pt: "Conduzimos processos de inventário do início ao fim, organizando a herança e evitando conflitos entre herdeiros.",
        summary_zh: "我们全程办理继承手续，整理遗产并避免继承人之间发生纠纷。",
        detail: "Desde la declaratoria de herederos hasta la partición de bienes, con los tiempos y la información clara en todo momento.",
        detail_en: "From the declaration of heirs to the division of assets, with clear timelines and information at every step.",
        detail_pt: "Da declaração de herdeiros até a partilha de bens, com prazos e informações claras em todos os momentos.",
        detail_zh: "从继承人声明到财产分割，全程提供清晰的时间安排和信息。"
      },
      {
        id: "civil",
        kicker: "04",
        name: "Derecho Civil",
        name_en: "Civil Law",
        name_pt: "Direito Civil",
        name_zh: "民法",
        summary: "Contratos, daños y perjuicios, y otros asuntos civiles que requieren precisión técnica y respaldo jurídico.",
        summary_en: "Contracts, damages claims and other civil matters that require technical precision and legal backing.",
        summary_pt: "Contratos, indenizações por danos e outras questões civis que exigem precisão técnica e respaldo jurídico.",
        summary_zh: "合同、损害赔偿及其他需要专业技术和法律支持的民事事务。",
        detail: "Revisamos, redactamos y defendemos: contratos, reclamos por daños y todo asunto civil que necesite una mirada estratégica.",
        detail_en: "We review, draft and defend: contracts, damages claims and any civil matter that needs a strategic approach.",
        detail_pt: "Revisamos, redigimos e defendemos: contratos, reclamações por danos e qualquer questão civil que precise de uma abordagem estratégica.",
        detail_zh: "我们审查、起草并辩护：合同、损害赔偿索赔以及任何需要策略性处理的民事事务。"
      }
    ],

    team: [
      {
        id: "damian-pini",
        name: "Dr. Damián Pini",
        initials: "DAM",
        role: "Socio · Derecho Laboral y Asesoramiento de Empresas",
        role_en: "Partner · Labor Law & Corporate Advisory",
        role_pt: "Sócio · Direito do Trabalho e Assessoria Empresarial",
        role_zh: "合伙人 · 劳动法与企业咨询",
        photo: "assets/img/damian-pini.webp",
        bio: "Especialista en derecho laboral y en asesoramiento preventivo a empresas, acompañando la gestión legal de sus relaciones laborales.",
        bio_en: "A specialist in labor law and preventive advisory for companies, supporting the legal management of their labor relations.",
        bio_pt: "Especialista em direito do trabalho e em assessoria preventiva a empresas, acompanhando a gestão jurídica das relações trabalhistas.",
        bio_zh: "劳动法专家，专门为企业提供预防性咨询，协助管理其劳动关系的法律事务。"
      },
      {
        id: "walter-cancian",
        name: "Dr. Walter Cancian",
        initials: "WAL",
        role: "Socio · Derecho Laboral y Asesoramiento de Empresas",
        role_en: "Partner · Labor Law & Corporate Advisory",
        role_pt: "Sócio · Direito do Trabalho e Assessoria Empresarial",
        role_zh: "合伙人 · 劳动法与企业咨询",
        photo: "assets/img/walter-cancian.jpg",
        bio: "Junto a Damián Pini, lidera el área laboral y de asesoramiento preventivo a empresas del estudio.",
        bio_en: "Alongside Damián Pini, he leads the firm's labor law and preventive corporate advisory practice.",
        bio_pt: "Junto com Damián Pini, lidera a área trabalhista e de assessoria preventiva a empresas do escritório.",
        bio_zh: "与Damián Pini共同领导律所的劳动法及企业预防性咨询业务。"
      },
      {
        id: "daiana-pini",
        name: "Dra. Daiana Pini",
        initials: "DAI",
        role: "Asociada · Familia, Sucesiones y Daños y Perjuicios",
        role_en: "Associate · Family, Probate & Damages",
        role_pt: "Associada · Família, Sucessões e Indenizações por Danos",
        role_zh: "律师 · 家庭法、继承与损害赔偿",
        photo: "assets/img/daiana-pini.jpg",
        bio: "A cargo de los asuntos de familia, sucesiones y reclamos por daños y perjuicios, con un trato cercano en cada proceso.",
        bio_en: "In charge of family, probate and damages matters, with a close, personal approach in every process.",
        bio_pt: "Responsável pelos assuntos de família, sucessões e reclamações por danos, com um atendimento próximo em cada processo.",
        bio_zh: "负责家庭、继承及损害赔偿事务，在每个过程中都提供贴心的服务。"
      },
      {
        id: "gustavo-tomasella",
        name: "Dr. Gustavo Tomasella",
        initials: "GUS",
        role: "Asociado · Asesoramiento Jurídico General",
        role_en: "Associate · General Legal Advisory",
        role_pt: "Associado · Assessoria Jurídica Geral",
        role_zh: "律师 · 综合法律咨询",
        photo: "assets/img/gustavo-tomasella.jpg",
        bio: "Brinda asesoramiento legal integral en las distintas áreas del estudio, con respuestas claras ante cada consulta.",
        bio_en: "Provides comprehensive legal advice across the firm's practice areas, with clear answers to every inquiry.",
        bio_pt: "Presta assessoria jurídica integral nas diferentes áreas do escritório, com respostas claras a cada consulta.",
        bio_zh: "在律所各业务领域提供全面的法律咨询，针对每个咨询给予清晰的答复。"
      }
    ],

    // Galería/collage + video institucional — placeholders editables.
    // Subí las fotos reales a assets/img/ con estos mismos nombres, y el video a assets/video/institucional.mp4
    mediaCollage: {
      images: [
        {
          photo: "assets/img/collage-1.jpg",
          alt: "Fachada del estudio (foto de referencia)", alt_en: "Firm's façade (reference photo)",
          alt_pt: "Fachada do escritório (foto de referência)", alt_zh: "事务所外观（参考图片）"
        },
        {
          photo: "assets/img/collage-2.jpg",
          alt: "Sala de reuniones (foto de referencia)", alt_en: "Meeting room (reference photo)",
          alt_pt: "Sala de reuniões (foto de referência)", alt_zh: "会议室（参考图片）"
        },
        {
          photo: "assets/img/collage-3.jpg",
          alt: "El equipo trabajando (foto de referencia)", alt_en: "The team at work (reference photo)",
          alt_pt: "A equipe trabalhando (foto de referência)", alt_zh: "团队工作场景（参考图片）"
        },
        {
          photo: "assets/img/collage-4.jpg",
          alt: "Detalle de la oficina (foto de referencia)", alt_en: "Office detail (reference photo)",
          alt_pt: "Detalhe do escritório (foto de referência)", alt_zh: "办公室细节（参考图片）"
        }
      ],
      // TODO: agregar assets/video/institucional.mp4 cuando esté disponible.
      video: {
        src: "assets/video/institucional.mp4"
      }
    },

    // TODO: reemplazar por el @usuario y el link reales cuando abran la cuenta de Instagram.
    instagram: {
      handle: "@pinicancian",
      url: "https://instagram.com/"
    },

    // Fotos de referencia — reemplazar por las fotos reales del frente y el interior
    // del estudio en cuanto estén disponibles (mismo nombre de archivo o actualizando "photo").
    officePhotos: [
      {
        photo: "assets/img/oficina-frente.jpg",
        alt: "Frente del estudio (foto de referencia)",
        alt_en: "Office front (reference photo)",
        alt_pt: "Frente do escritório (foto de referência)",
        alt_zh: "事务所正面（参考图片）"
      },
      {
        photo: "assets/img/oficina-interior.jpg",
        alt: "Interior del estudio (foto de referencia)",
        alt_en: "Office interior (reference photo)",
        alt_pt: "Interior do escritório (foto de referência)",
        alt_zh: "事务所内部（参考图片）"
      }
    ],

    process: [
      {
        n: "01",
        title: "Consulta inicial", title_en: "Initial consultation", title_pt: "Consulta inicial", title_zh: "初步咨询",
        text: "Escuchamos tu situación y evaluamos el caso sin vueltas, con honestidad sobre lo que es posible.",
        text_en: "We listen to your situation and assess the case straight up, with honesty about what's actually possible.",
        text_pt: "Escutamos sua situação e avaliamos o caso sem rodeios, com honestidade sobre o que é possível.",
        text_zh: "我们倾听您的情况，直接评估案件，诚实地告知哪些是可行的。"
      },
      {
        n: "02",
        title: "Estrategia", title_en: "Strategy", title_pt: "Estratégia", title_zh: "策略制定",
        text: "Definimos el camino más conveniente: acuerdo, reclamo administrativo o vía judicial.",
        text_en: "We define the best path forward: a settlement, an administrative claim, or legal action.",
        text_pt: "Definimos o caminho mais conveniente: acordo, reclamação administrativa ou via judicial.",
        text_zh: "我们确定最合适的方案：协议、行政申诉或司法途径。"
      },
      {
        n: "03",
        title: "Acompañamiento", title_en: "Ongoing support", title_pt: "Acompanhamento", title_zh: "全程陪同",
        text: "Te mantenemos informado en cada etapa, en un lenguaje claro, hasta la resolución del caso.",
        text_en: "We keep you informed at every stage, in clear language, until the case is resolved.",
        text_pt: "Mantemos você informado em cada etapa, em linguagem clara, até a resolução do caso.",
        text_zh: "我们会用清晰的语言，在案件解决之前的每个阶段持续告知您进展。"
      }
    ],

    // Árbol de decisiones del asistente de consulta (2 pasos).
    // Cada área tiene "groups": preguntas que se muestran en orden. Un group puede depender
    // de la respuesta de otro (dependsOn + optionsFor) — así evitamos que Empresas y Laboral se solapen.
    wizard: {
      areas: [
        {
          id: "empresas",
          icon: "🏢",
          label: "Empresas / Comercial", label_en: "Business / Corporate", label_pt: "Empresas / Comercial", label_zh: "企业 / 商事",
          desc: "Contratos comerciales, prevención de riesgos y asesoramiento integral para tu negocio.",
          desc_en: "Commercial contracts, risk prevention and full-service advisory for your business.",
          desc_pt: "Contratos comerciais, prevenção de riscos e assessoria integral para o seu negócio.",
          desc_zh: "商业合同、风险防范以及企业全面法律咨询。",
          groups: [
            {
              id: "motivo",
              question: "¿Qué necesitás?", question_en: "What do you need?", question_pt: "O que você precisa?", question_zh: "您需要什么帮助？",
              options: [
                {
                  id: "integral",
                  label: "Asesoramiento legal integral / Prevención de riesgos",
                  label_en: "Comprehensive legal advisory / Risk prevention",
                  label_pt: "Assessoria jurídica integral / Prevenção de riscos",
                  label_zh: "全面法律咨询 / 风险防范"
                },
                {
                  id: "contratos",
                  label: "Contratos comerciales y societarios",
                  label_en: "Commercial and corporate contracts",
                  label_pt: "Contratos comerciais e societários",
                  label_zh: "商业及公司合同"
                },
                {
                  id: "constitucion",
                  label: "Constitución de sociedades",
                  label_en: "Company formation",
                  label_pt: "Constituição de sociedades",
                  label_zh: "公司设立"
                }
              ]
            }
          ]
        },
        {
          id: "laboral",
          icon: "🛠️",
          label: "Derecho Laboral", label_en: "Labor Law", label_pt: "Direito do Trabalho", label_zh: "劳动法",
          desc: "Reclamos de trabajadores o resolución de situaciones patronales y despidos puntuales.",
          desc_en: "Claims from workers, or resolving specific employer situations and dismissals.",
          desc_pt: "Reclamações de trabalhadores ou resolução de situações patronais e demissões pontuais.",
          desc_zh: "劳动者的索赔，或雇主一方具体的解雇及用工纠纷处理。",
          groups: [
            {
              id: "rol",
              question: "¿Cuál es tu situación?", question_en: "What's your situation?", question_pt: "Qual é a sua situação?", question_zh: "您的身份是？",
              options: [
                { id: "trabajador", label: "Soy Trabajador", label_en: "I'm an employee", label_pt: "Sou Trabalhador", label_zh: "我是员工" },
                { id: "empleador", label: "Soy Empleador", label_en: "I'm an employer", label_pt: "Sou Empregador", label_zh: "我是雇主" }
              ]
            },
            {
              id: "motivo",
              question: "Contanos más", question_en: "Tell us more", question_pt: "Nos conte mais", question_zh: "请告诉我们更多信息",
              dependsOn: "rol",
              optionsFor: {
                trabajador: [
                  {
                    id: "art",
                    label: "Accidente laboral / Reclamo ante la ART (incapacidad, rechazo o diferencias)",
                    label_en: "Workplace accident / Claim against the ART (disability, rejection or disputed amounts)",
                    label_pt: "Acidente de trabalho / Reclamação junto à seguradora (incapacidade, recusa ou diferenças)",
                    label_zh: "工伤事故 / 工伤保险理赔（伤残、拒赔或金额争议）"
                  },
                  {
                    id: "despido",
                    label: "Despido reciente / Suspensión",
                    label_en: "Recent dismissal / Suspension",
                    label_pt: "Demissão recente / Suspensão",
                    label_zh: "近期被解雇 / 停职"
                  },
                  {
                    id: "no-registrado",
                    label: "Trabajo en negro o mal registrado (falta de aportes/recibo)",
                    label_en: "Undeclared or improperly registered work (missing contributions/payslip)",
                    label_pt: "Trabalho informal ou mal registrado (falta de contribuições/recibo)",
                    label_zh: "黑工或登记不规范（缺少社保缴纳/工资单）"
                  },
                  {
                    id: "diferencias",
                    label: "Diferencias salariales u otro reclamo",
                    label_en: "Wage disputes or another claim",
                    label_pt: "Diferenças salariais ou outra reclamação",
                    label_zh: "工资差额或其他劳动争议"
                  }
                ],
                empleador: [
                  {
                    id: "conflicto",
                    label: "Necesito resolver un conflicto laboral puntual, despido o acuerdo con un empleado",
                    label_en: "I need to resolve a specific labor conflict, dismissal or agreement with an employee",
                    label_pt: "Preciso resolver um conflito trabalhista pontual, demissão ou acordo com um funcionário",
                    label_zh: "需要处理具体的劳动纠纷、解雇或与员工达成协议"
                  }
                ]
              }
            },
            {
              id: "estado",
              question: "¿En qué instancia estás?", question_en: "What stage are you at?", question_pt: "Em que instância você está?", question_zh: "目前处于哪个阶段？",
              options: [
                { id: "iniciar", label: "Iniciar reclamo", label_en: "Starting a claim", label_pt: "Iniciar reclamação", label_zh: "准备提起索赔" },
                {
                  id: "en-curso",
                  label: "Instancia previa o expediente en curso",
                  label_en: "Prior proceedings or an ongoing case",
                  label_pt: "Instância prévia ou processo em andamento",
                  label_zh: "已在先行程序中或案件正在进行中"
                }
              ]
            }
          ]
        },
        {
          id: "civil",
          icon: "⚖️",
          label: "Civil y Daños / Inmuebles", label_en: "Civil, Damages & Real Estate", label_pt: "Civil e Danos / Imóveis", label_zh: "民事、损害赔偿及不动产",
          desc: "Daños y perjuicios, posesión veinteañal / usucapión y contratos civiles.",
          desc_en: "Damages claims, adverse possession / usucaption and civil contracts.",
          desc_pt: "Danos e prejuízos, usucapião e contratos civis.",
          desc_zh: "损害赔偿、二十年取得时效（占有取得）以及民事合同。",
          groups: [
            {
              id: "motivo",
              question: "¿Qué necesitás?", question_en: "What do you need?", question_pt: "O que você precisa?", question_zh: "您需要什么帮助？",
              options: [
                {
                  id: "danos",
                  label: "Daños y perjuicios (accidentes/indemnizaciones fuera del ámbito laboral)",
                  label_en: "Damages claim (accidents/compensation outside the workplace)",
                  label_pt: "Danos e prejuízos (acidentes/indenizações fora do âmbito trabalhista)",
                  label_zh: "损害赔偿（非劳动关系下的事故/赔偿）"
                },
                {
                  id: "usucapion",
                  label: "Posesión veinteañal / Usucapión",
                  label_en: "Adverse possession (20-year prescription)",
                  label_pt: "Usucapião (posse de vinte anos)",
                  label_zh: "二十年取得时效（占有取得所有权）"
                },
                { id: "contratos", label: "Contratos civiles", label_en: "Civil contracts", label_pt: "Contratos civis", label_zh: "民事合同" }
              ]
            }
          ]
        },
        {
          id: "sucesiones",
          icon: "🏛️",
          label: "Sucesiones", label_en: "Probate & Inheritance", label_pt: "Sucessões", label_zh: "继承",
          desc: "Herencias y trámites de bienes.",
          desc_en: "Inheritance matters and estate proceedings.",
          desc_pt: "Heranças e trâmites de bens.",
          desc_zh: "遗产继承及财产手续办理。",
          groups: [
            {
              id: "estado",
              question: "¿En qué etapa está la sucesión?", question_en: "What stage is the probate at?", question_pt: "Em que etapa está a sucessão?", question_zh: "继承手续目前处于哪个阶段？",
              options: [
                { id: "iniciar", label: "Iniciar de cero", label_en: "Starting from scratch", label_pt: "Iniciar do zero", label_zh: "尚未开始，需要启动" },
                { id: "trabada", label: "Expediente trabado", label_en: "Case is stalled", label_pt: "Processo travado", label_zh: "案件陷入停滞" },
                { id: "preventiva", label: "Preventiva", label_en: "Preventive (while still alive)", label_pt: "Preventiva", label_zh: "预防性继承规划" }
              ]
            }
          ]
        },
        {
          id: "familia",
          icon: "👨‍👩‍👧",
          label: "Familia", label_en: "Family", label_pt: "Família", label_zh: "家庭",
          desc: "Divorcios, filiación, derecho de comunicación y alimentos.",
          desc_en: "Divorce, filiation, visitation rights and child support.",
          desc_pt: "Divórcios, filiação, direito de convivência e pensão alimentícia.",
          desc_zh: "离婚、亲子关系确认、探视权与赡养费。",
          groups: [
            {
              id: "tema",
              question: "¿Qué tema te trae?", question_en: "What brings you here?", question_pt: "Qual assunto te traz aqui?", question_zh: "您想咨询哪方面的问题？",
              options: [
                { id: "divorcio", label: "Divorcios", label_en: "Divorce", label_pt: "Divórcios", label_zh: "离婚" },
                { id: "filiacion", label: "Filiación", label_en: "Filiation", label_pt: "Filiação", label_zh: "亲子关系确认" },
                { id: "comunicacion", label: "Derecho de comunicación", label_en: "Visitation rights", label_pt: "Direito de convivência", label_zh: "探视权" },
                { id: "alimentos", label: "Alimentos", label_en: "Child / spousal support", label_pt: "Pensão alimentícia", label_zh: "赡养费" }
              ]
            },
            {
              id: "estado",
              question: "¿En qué instancia estás?", question_en: "What stage are you at?", question_pt: "Em que instância você está?", question_zh: "目前处于哪个阶段？",
              options: [
                { id: "iniciar", label: "Iniciar", label_en: "Starting", label_pt: "Iniciar", label_zh: "尚未开始" },
                { id: "en-curso", label: "En curso", label_en: "Already underway", label_pt: "Em andamento", label_zh: "正在进行中" }
              ]
            }
          ]
        },
        {
          id: "notificacion",
          icon: "✉️",
          label: "Recibí una notificación legal", label_en: "I received a legal notice", label_pt: "Recebi uma notificação legal", label_zh: "我收到了法律通知",
          desc: "Carta documento, cédula u otra notificación judicial.",
          desc_en: "A formal notice, a court summons or another judicial notification.",
          desc_pt: "Carta registrada, citação ou outra notificação judicial.",
          desc_zh: "挂号信函、法院传票或其他司法通知。",
          groups: [
            {
              id: "tipo",
              question: "¿Qué tipo de notificación recibiste?", question_en: "What type of notice did you receive?", question_pt: "Que tipo de notificação você recebeu?", question_zh: "您收到的是哪种通知？",
              options: [
                { id: "carta-documento", label: "Carta documento", label_en: "Formal notice letter", label_pt: "Carta registrada com AR", label_zh: "正式挂号函件" },
                { id: "cedula", label: "Cédula judicial", label_en: "Court summons", label_pt: "Citação judicial", label_zh: "法院传票" },
                { id: "otra", label: "Otra notificación", label_en: "Another type of notice", label_pt: "Outra notificação", label_zh: "其他类型通知" }
              ]
            },
            {
              id: "urgencia",
              question: "¿Es urgente?", question_en: "Is it urgent?", question_pt: "É urgente?", question_zh: "是否紧急？",
              options: [
                {
                  id: "urgente",
                  label: "Sí, tiene un vencimiento próximo",
                  label_en: "Yes, it has a near deadline",
                  label_pt: "Sim, tem um prazo próximo",
                  label_zh: "是，快到截止日期了"
                },
                {
                  id: "no-urgente",
                  label: "No, puedo esperar unos días",
                  label_en: "No, it can wait a few days",
                  label_pt: "Não, posso esperar alguns dias",
                  label_zh: "不紧急，可以等几天"
                }
              ]
            }
          ]
        }
      ]
    },

    /* Notas informativas generales. Fechas y textos son un borrador editable por el estudio. */
    insights: [
      {
        id: "contratos-pyme", date: "2026-09-29",
        category: "Empresas y PyMEs", category_en: "Business & SMEs", category_pt: "Empresas e PMEs", category_zh: "企业与中小企业",
        title: "Contratos por escrito: la mejor defensa de una PyME",
        title_en: "Written contracts: an SME's best defense",
        title_pt: "Contratos por escrito: a melhor defesa de uma PME",
        title_zh: "书面合同：中小企业最好的保障",
        excerpt: "Un acuerdo verbal funciona hasta que surge el primer desacuerdo. Dejar plazos, precios y obligaciones por escrito evita conflictos y facilita cualquier reclamo.",
        excerpt_en: "A verbal agreement works until the first disagreement. Putting deadlines, prices and obligations in writing prevents disputes and makes any claim easier.",
        excerpt_pt: "Um acordo verbal funciona até o primeiro desacordo. Deixar prazos, preços e obrigações por escrito evita conflitos e facilita qualquer reclamação.",
        excerpt_zh: "口头协议只在出现第一次分歧前有效。把期限、价格和义务写成书面形式，可避免纠纷并方便日后维权。",
        body: "Un contrato claro define qué se entrega, en qué plazo, a qué precio y qué ocurre si alguna de las partes incumple. Para una PyME, esa claridad ordena la relación con proveedores y clientes, reduce la posibilidad de litigios y, si el conflicto igual llega, permite probar con facilidad lo acordado. Antes de firmar o renovar un contrato importante, conviene que lo revise un profesional.",
        body_en: "A clear contract defines what is delivered, by when, at what price and what happens if a party fails to comply. For an SME, that clarity organizes the relationship with suppliers and clients, reduces the chance of litigation and, if a dispute still arises, makes it easy to prove what was agreed. Before signing or renewing an important contract, it is wise to have a professional review it.",
        body_pt: "Um contrato claro define o que é entregue, em que prazo, a que preço e o que acontece se uma das partes descumprir. Para uma PME, essa clareza organiza a relação com fornecedores e clientes, reduz a possibilidade de litígios e, se o conflito chegar mesmo assim, permite provar facilmente o que foi combinado. Antes de assinar ou renovar um contrato importante, convém que um profissional o revise.",
        body_zh: "一份清晰的合同会明确交付内容、期限、价格，以及一方违约时的后果。对中小企业而言，这种清晰度能理顺与供应商和客户的关系，减少诉讼可能；即使仍发生争议，也便于证明双方约定。在签署或续签重要合同之前，建议请专业人士审阅。"
      },
      {
        id: "telegrama-laboral", date: "2026-09-15",
        category: "Derecho laboral", category_en: "Labor law", category_pt: "Direito do trabalho", category_zh: "劳动法",
        title: "Recibí un telegrama laboral: ¿qué hago?",
        title_en: "I received a labor telegram: what now?",
        title_pt: "Recebi um telegrama trabalhista: o que fazer?",
        title_zh: "收到劳动电报，该怎么办？",
        excerpt: "Tanto trabajadores como empleadores reciben comunicaciones formales con plazos muy cortos. Responder a tiempo y de forma correcta puede cambiar el resultado.",
        excerpt_en: "Both employees and employers receive formal notices with very short deadlines. Replying on time and correctly can change the outcome.",
        excerpt_pt: "Tanto trabalhadores quanto empregadores recebem comunicações formais com prazos muito curtos. Responder a tempo e da forma correta pode mudar o resultado.",
        excerpt_zh: "劳动者和雇主都会收到期限很短的正式通知。及时、正确地回复可能改变结果。",
        body: "El telegrama o carta documento es una comunicación formal con valor probatorio. Si no se responde o se hace de manera incorrecta, el silencio puede interpretarse en tu contra. No firmes ni contestes de apuro: conservá el original, anotá la fecha en que lo recibiste y consultá cuanto antes para evaluar la respuesta más conveniente.",
        body_en: "A telegram or formal notice letter is a formal communication with evidentiary value. If it is ignored or answered incorrectly, silence may be held against you. Do not sign or reply in a rush: keep the original, note the date you received it and get advice as soon as possible to assess the most suitable response.",
        body_pt: "O telegrama ou carta registrada é uma comunicação formal com valor probatório. Se não for respondido, ou for respondido de forma incorreta, o silêncio pode ser interpretado contra você. Não assine nem responda às pressas: guarde o original, anote a data de recebimento e consulte o quanto antes para avaliar a resposta mais conveniente.",
        body_zh: "电报或正式挂号函件是具有证据效力的正式通知。若不回复或回复不当，沉默可能对您不利。不要匆忙签字或回复：请保留原件，记下收到日期，并尽快咨询，以评估最合适的回应方式。"
      },
      {
        id: "accidente-transito", date: "2026-09-01",
        category: "Derecho civil", category_en: "Civil law", category_pt: "Direito civil", category_zh: "民法",
        title: "Accidentes de tránsito: primeros pasos",
        title_en: "Traffic accidents: first steps",
        title_pt: "Acidentes de trânsito: primeiros passos",
        title_zh: "交通事故：最初的几步",
        excerpt: "Lo que se hace en las primeras horas después de un siniestro suele ser decisivo para un eventual reclamo.",
        excerpt_en: "What you do in the first hours after a collision is often decisive for a possible claim.",
        excerpt_pt: "O que se faz nas primeiras horas após um sinistro costuma ser decisivo para uma eventual reclamação.",
        excerpt_zh: "事故发生后最初几小时的处理，往往对日后索赔起决定性作用。",
        body: "Si es posible, tomá fotos del lugar y de los vehículos, reuní los datos de los involucrados y de testigos, y conservá la documentación médica y de la aseguradora. Evitá firmar acuerdos o recibir pagos sin asesoramiento: puede tener consecuencias sobre tu derecho a reclamar el resto de los daños.",
        body_en: "If possible, take photos of the scene and the vehicles, gather the details of those involved and of witnesses, and keep medical and insurance paperwork. Avoid signing agreements or accepting payments without advice: it may affect your right to claim the rest of the damages.",
        body_pt: "Se possível, tire fotos do local e dos veículos, reúna os dados dos envolvidos e das testemunhas, e guarde a documentação médica e da seguradora. Evite assinar acordos ou receber pagamentos sem assessoria: isso pode afetar seu direito de reclamar os demais danos.",
        body_zh: "如有可能，请拍摄现场和车辆照片，收集当事人和证人的信息，并保存医疗和保险文件。未经咨询，请避免签署协议或接受付款：这可能影响您就其余损失提出索赔的权利。"
      },
      {
        id: "cuota-alimentaria", date: "2026-08-18",
        category: "Derecho de familia", category_en: "Family law", category_pt: "Direito de família", category_zh: "家庭法",
        title: "Cuota alimentaria: qué incluye realmente",
        title_en: "Child support: what it really includes",
        title_pt: "Pensão alimentícia: o que ela realmente inclui",
        title_zh: "抚养费：究竟包含哪些内容",
        excerpt: "Los alimentos no se limitan a la comida: abarcan varios aspectos de la vida diaria de hijos e hijas.",
        excerpt_en: "Support is not limited to food: it covers several aspects of children's daily lives.",
        excerpt_pt: "Os alimentos não se limitam à comida: abrangem vários aspectos da vida diária dos filhos.",
        excerpt_zh: "抚养费不仅仅是伙食：它涵盖子女日常生活的多个方面。",
        body: "En general comprenden alimentación, vivienda, vestimenta, salud, educación y esparcimiento, entre otros gastos necesarios. El monto se fija según las necesidades de quien lo recibe y las posibilidades de quien debe pagarlo, y puede revisarse si las circunstancias cambian.",
        body_en: "It generally includes food, housing, clothing, health, education and recreation, among other necessary expenses. The amount is set according to the needs of the recipient and the means of the person who must pay, and it can be reviewed if circumstances change.",
        body_pt: "Em geral compreendem alimentação, moradia, vestuário, saúde, educação e lazer, entre outras despesas necessárias. O valor é fixado conforme as necessidades de quem recebe e as possibilidades de quem deve pagar, e pode ser revisto se as circunstâncias mudarem.",
        body_zh: "通常包括饮食、住房、衣物、医疗、教育和娱乐等必要开支。金额根据受领方的需要和支付方的能力确定，情况变化时可以重新审查。"
      }
    ],

    trust: [
      {
        title: "Goya, Corrientes", title_en: "Goya, Corrientes", title_pt: "Goya, Corrientes", title_zh: "科连特斯省戈亚",
        text: "Atención presencial en José Gómez 1468 y consultas a distancia por WhatsApp.",
        text_en: "In-person service at José Gómez 1468 and remote consultations via WhatsApp.",
        text_pt: "Atendimento presencial na José Gómez 1468 e consultas a distância pelo WhatsApp.",
        text_zh: "在José Gómez 1468提供线下接待，并可通过WhatsApp远程咨询。"
      },
      {
        title: "Un equipo de cuatro", title_en: "A team of four", title_pt: "Uma equipe de quatro", title_zh: "四人团队",
        text: "Dos socios y dos asociados con especialidades que se complementan.",
        text_en: "Two partners and two associates with complementary specialties.",
        text_pt: "Dois sócios e dois associados com especialidades que se complementam.",
        text_zh: "两位合伙人和两位合作律师，专业领域相辅相成。"
      },
      {
        title: "Lenguaje claro", title_en: "Plain language", title_pt: "Linguagem clara", title_zh: "通俗易懂",
        text: "Te explicamos cada paso sin tecnicismos innecesarios.",
        text_en: "We explain every step without unnecessary jargon.",
        text_pt: "Explicamos cada passo sem tecnicismos desnecessários.",
        text_zh: "我们用不带多余术语的语言为您解释每一步。"
      },
      {
        title: "Honestidad", title_en: "Honesty", title_pt: "Honestidade", title_zh: "坦诚",
        text: "Te decimos con franqueza qué es realmente posible en tu caso.",
        text_en: "We tell you frankly what is really possible in your case.",
        text_pt: "Dizemos com franqueza o que é realmente possível no seu caso.",
        text_zh: "我们会坦率告诉您，您的案件究竟有哪些可能。"
      }
    ],

    /* Agregar solo testimonios reales y con autorización de la persona.
       Formato: { quote, quote_en, quote_pt, quote_zh, name: "Nombre, localidad", role, role_en, role_pt, role_zh }.
       Mientras esté vacío, no se muestra ningún bloque de testimonios. */
    testimonials: []
  };
})();
