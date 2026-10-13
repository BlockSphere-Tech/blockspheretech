import type { Locale } from "@/i18n/types";
import type { FaqItem } from "@/data/faq";

export const siteCopy = {
  en: {
    tagline: "Enterprise blockchain infrastructure",
    headline: "The infrastructure layer for crypto",
    description:
      "Production RPC, indexed data, compliance APIs, and payment rails for institutions that cannot afford downtime. One platform. One contract. 130+ networks.",
    positioning:
      "BlockSphere Tech provides institutional-grade blockchain access for wallets, exchanges, banks, and payment processors — with SLA-backed uptime, regional residency, and audit-ready controls.",
    stats: [
      { label: "blockchains", value: "130+" },
      { label: "requests a month", value: "50B" },
      { label: "Singapore HQ", value: "2019" },
      { label: "uptime", value: "99.99%" },
    ],
    supportChannels: ["Live chat", "Telegram", "Discord"],
  },
  zh: {
    tagline: "企业级区块链基础设施",
    headline: "加密货币的基础设施层",
    description:
      "为无法承受停机的机构提供生产级 RPC、索引数据、合规 API 与支付通道。一个平台，一份合同，130+ 条区块链。",
    positioning:
      "BlockSphere Tech 为钱包、交易所、银行与支付机构提供机构级区块链接入——SLA 保障可用性、区域驻留与可审计控制。",
    stats: [
      { label: "条区块链", value: "130+" },
      { label: "每月请求量", value: "50B" },
      { label: "新加坡总部", value: "2019" },
      { label: "可用性", value: "99.99%" },
    ],
    supportChannels: ["在线客服", "Telegram", "Discord"],
  },
  es: {
    tagline: "Infraestructura blockchain empresarial",
    headline: "La capa de infraestructura para crypto",
    description:
      "RPC de producción, datos indexados, APIs de cumplimiento y rieles de pago para instituciones que no pueden permitirse caídas. Una plataforma. Un contrato. Más de 130 blockchains.",
    positioning:
      "BlockSphere Tech ofrece acceso blockchain de grado institucional para wallets, exchanges, bancos y procesadores de pago — con disponibilidad bajo SLA, residencia regional y controles auditables.",
    stats: [
      { label: "blockchains", value: "130+" },
      { label: "solicitudes al mes", value: "50B" },
      { label: "Sede Singapur", value: "2019" },
      { label: "disponibilidad", value: "99.99%" },
    ],
    supportChannels: ["Chat en vivo", "Telegram", "Discord"],
  },
} as const;

export const categoriesCopy = {
  en: {
    infrastructure: {
      title: "RPC Infrastructure",
      description:
        "Managed endpoints and single-tenant nodes, from a free key to a dedicated cluster.",
    },
    data: {
      title: "Data",
      description:
        "Streams, webhooks and indexed history, already shaped for your product.",
    },
    risk: {
      title: "Risk & Compliance",
      description:
        "Screening, wallet audits and risk APIs, on our own models and our own nodes.",
    },
    payments: {
      title: "Payment Solutions",
      description: "Cheaper transfers today, agentic payment rails next.",
    },
    staking: {
      title: "Staking",
      description:
        "Our own validators, and validator operation for anyone who would rather not run one.",
    },
  },
  zh: {
    infrastructure: {
      title: "RPC 基础设施",
      description: "托管节点与单租户节点，从免费密钥到专用集群。",
    },
    data: {
      title: "数据",
      description: "实时流、Webhook 与索引历史，按产品需求就绪交付。",
    },
    risk: {
      title: "风险与合规",
      description: "基于自有模型与节点的筛查、钱包审计与风险 API。",
    },
    payments: {
      title: "支付方案",
      description: "当下更低成本的转账，下一步是智能体支付通道。",
    },
    staking: {
      title: "质押",
      description: "自有验证者，以及为不愿自建者提供的验证者运维服务。",
    },
  },
  es: {
    infrastructure: {
      title: "Infraestructura RPC",
      description:
        "Endpoints gestionados y nodos de un solo inquilino, desde una clave gratuita hasta un clúster dedicado.",
    },
    data: {
      title: "Datos",
      description:
        "Streams, webhooks e historial indexado, ya preparados para su producto.",
    },
    risk: {
      title: "Riesgo y cumplimiento",
      description:
        "Cribado, auditorías de wallet y APIs de riesgo sobre nuestros propios modelos y nodos.",
    },
    payments: {
      title: "Soluciones de pago",
      description: "Transferencias más baratas hoy; rieles de pago agenticos después.",
    },
    staking: {
      title: "Staking",
      description:
        "Nuestros propios validadores, y operación de validadores para quien no quiera gestionarlos.",
    },
  },
} as const;

export const productsCopy = {
  en: {
    "shared-nodes": {
      name: "Shared Nodes",
      tagline: "Endpoints on every network, billed by compute units.",
    },
    "limitless-nodes": {
      name: "Limitless Nodes",
      tagline: "Fixed RPS capacity, no compute unit caps.",
    },
    "dedicated-nodes": {
      name: "Dedicated Nodes",
      tagline: "Single-tenant nodes for regulated workloads at scale.",
    },
    "archival-nodes": {
      name: "Full & Archival Nodes",
      tagline: "Live chain state or complete history, back to genesis.",
    },
    "solana-shreds": {
      name: "Solana Shreds",
      tagline: "Transactions ahead of block confirmation.",
    },
    "realtime-streams": {
      name: "Real-Time Streams",
      tagline: "Blocks, transactions, and logs streamed as they land.",
    },
    webhooks: {
      name: "Webhooks",
      tagline: "Chain events delivered to your endpoint, no polling.",
    },
    "market-data": {
      name: "Market Data",
      tagline: "Normalized trades from DEXs and prediction markets.",
    },
    "crypto-aml": {
      name: "Crypto AML Check",
      tagline: "Sanctions and risk screening for any address.",
    },
    "wallet-audit": {
      name: "Full Wallet Audit",
      tagline: "Complete counterparty profile: history, exposure, entities.",
    },
    "rug-pull": {
      name: "Rug Pull Scanner",
      tagline: "Contract and liquidity risk before capital is committed.",
    },
    "tron-energy": {
      name: "TRON Energy Rental",
      tagline: "TRC-20 USDT transfers at significantly lower cost.",
    },
    "near-staking": {
      name: "NEAR Staking",
      tagline: "Delegation at competitive rates on operated infrastructure.",
    },
  },
  zh: {
    "shared-nodes": {
      name: "共享节点",
      tagline: "覆盖各网络的节点，按计算单元计费。",
    },
    "limitless-nodes": {
      name: "无限节点",
      tagline: "固定 RPS 容量，无计算单元上限。",
    },
    "dedicated-nodes": {
      name: "专用节点",
      tagline: "面向大规模受监管负载的单租户节点。",
    },
    "archival-nodes": {
      name: "全量与归档节点",
      tagline: "实时链状态或完整历史，回溯至创世块。",
    },
    "solana-shreds": {
      name: "Solana Shreds",
      tagline: "在区块确认前获取交易。",
    },
    "realtime-streams": {
      name: "实时数据流",
      tagline: "区块、交易与日志落地即推送。",
    },
    webhooks: {
      name: "Webhooks",
      tagline: "链上事件直达您的接口，无需轮询。",
    },
    "market-data": {
      name: "市场数据",
      tagline: "来自 DEX 与预测市场的标准化成交数据。",
    },
    "crypto-aml": {
      name: "加密货币 AML 检查",
      tagline: "对任意地址进行制裁与风险筛查。",
    },
    "wallet-audit": {
      name: "完整钱包审计",
      tagline: "完整对手方画像：历史、敞口与关联实体。",
    },
    "rug-pull": {
      name: "Rug Pull 扫描",
      tagline: "在投入资金前检查合约与流动性风险。",
    },
    "tron-energy": {
      name: "TRON 能量租赁",
      tagline: "显著降低 TRC-20 USDT 转账成本。",
    },
    "near-staking": {
      name: "NEAR 质押",
      tagline: "在托管基础设施上以有竞争力的费率委托。",
    },
  },
  es: {
    "shared-nodes": {
      name: "Nodos compartidos",
      tagline: "Endpoints en cada red, facturados por unidades de cómputo.",
    },
    "limitless-nodes": {
      name: "Nodos Limitless",
      tagline: "Capacidad RPS fija, sin topes de unidades de cómputo.",
    },
    "dedicated-nodes": {
      name: "Nodos dedicados",
      tagline: "Nodos de un solo inquilino para cargas reguladas a escala.",
    },
    "archival-nodes": {
      name: "Nodos completos y de archivo",
      tagline: "Estado en vivo o historial completo desde el génesis.",
    },
    "solana-shreds": {
      name: "Solana Shreds",
      tagline: "Transacciones antes de la confirmación del bloque.",
    },
    "realtime-streams": {
      name: "Streams en tiempo real",
      tagline: "Bloques, transacciones y logs transmitidos al llegar.",
    },
    webhooks: {
      name: "Webhooks",
      tagline: "Eventos de cadena a su endpoint, sin polling.",
    },
    "market-data": {
      name: "Datos de mercado",
      tagline: "Operaciones normalizadas de DEX y mercados de predicción.",
    },
    "crypto-aml": {
      name: "Chequeo AML crypto",
      tagline: "Cribado de sanciones y riesgo para cualquier dirección.",
    },
    "wallet-audit": {
      name: "Auditoría completa de wallet",
      tagline: "Perfil completo de contraparte: historial, exposición y entidades.",
    },
    "rug-pull": {
      name: "Escáner Rug Pull",
      tagline: "Riesgo de contrato y liquidez antes de comprometer capital.",
    },
    "tron-energy": {
      name: "Alquiler de energía TRON",
      tagline: "Transferencias TRC-20 USDT a un coste significativamente menor.",
    },
    "near-staking": {
      name: "Staking NEAR",
      tagline: "Delegación a tasas competitivas sobre infraestructura operada.",
    },
  },
} as const;

export const useCaseCategories: Record<Locale, Record<string, string>> = {
  en: {
    "trust-wallet": "Non-Custodial Wallets",
    "national-bank": "Banking and Fintech",
    mexc: "Crypto Exchanges",
    tangem: "Hardware Wallets",
    coingate: "Payment Processors",
    blockaid: "Web3 Security",
  },
  zh: {
    "trust-wallet": "非托管钱包",
    "national-bank": "银行与金融科技",
    mexc: "加密货币交易所",
    tangem: "硬件钱包",
    coingate: "支付处理商",
    blockaid: "Web3 安全",
  },
  es: {
    "trust-wallet": "Wallets no custodios",
    "national-bank": "Banca y fintech",
    mexc: "Exchanges crypto",
    tangem: "Wallets hardware",
    coingate: "Procesadores de pago",
    blockaid: "Seguridad Web3",
  },
};

export const faqCopy: Record<Locale, FaqItem[] | null> = {
  en: null,
  zh: [
    {
      id: "what-is-blocksphere",
      question: "什么是 BlockSphere Tech？",
      answer:
        "BlockSphere Tech 是企业级区块链基础设施提供商。我们提供托管与单租户 RPC、索引与流式数据、制裁与风险筛查、支付通道与质押基础设施——同一账户购买，同一合同交付。",
    },
    {
      id: "which-blockchains",
      question: "BlockSphere Tech 支持哪些区块链？",
      answer:
        "BlockSphere Tech 支持 130+ 网络，包括 Ethereum、Solana、Bitcoin、BNB Chain、TRON、XRP Ledger、Base、Polygon、Cardano 与 NEAR，覆盖主网与测试网。",
    },
    {
      id: "pricing",
      question: "BlockSphere Tech 如何定价？",
      answer:
        "共享节点起价每月 $49，Limitless 节点每月 $150，专用节点每月 $1,000。年付分别为每月 $39、$120 与 $800。提供无需信用卡的免费套餐。",
    },
    {
      id: "free-tier",
      question: "BlockSphere Tech 提供免费套餐吗？",
      answer: "是的。免费套餐可访问受支持网络的共享节点，注册时无需信用卡。",
    },
    {
      id: "soc2",
      question: "BlockSphere Tech 是否符合 SOC 2？",
      answer:
        "BlockSphere Tech 持有覆盖共享与专用节点产品的 SOC 2 Type II 认证，可支持企业安全审查与供应商尽职调查。",
    },
    {
      id: "gdpr-dora",
      question: "BlockSphere Tech 是否符合 GDPR 与 DORA？",
      answer:
        "BlockSphere Tech 采用符合 GDPR 的数据处理方式，并维持 DORA 就绪的 ICT 提供商姿态，包括事件报告、韧性测试、分包透明与退出安排。",
    },
    {
      id: "locations",
      question: "BlockSphere Tech 的基础设施位于哪里？",
      answer:
        "BlockSphere Tech 在纽约、法兰克福与新加坡运营基础设施，并为有数据驻留要求的客户提供欧盟优先路由。",
    },
    {
      id: "node-types",
      question: "共享、专用与 Limitless 节点有何区别？",
      answer:
        "共享节点按计算单元计费；Limitless 节点提供固定 RPS 且无计算单元上限；专用节点是面向高吞吐与受监管负载的单租户部署。",
    },
    {
      id: "archive",
      question: "BlockSphere Tech 提供归档节点吗？",
      answer:
        "是的。支持网络提供自创世块起的完整历史状态归档节点，并包含 Solana 与 Sui 的索引归档数据。",
    },
    {
      id: "support",
      question: "BlockSphere Tech 的支持承诺是什么？",
      answer: "首次响应低于五分钟，三小时内完成根因分析，工程团队 7×24 在线。",
    },
  ],
  es: [
    {
      id: "what-is-blocksphere",
      question: "¿Qué es BlockSphere Tech?",
      answer:
        "BlockSphere Tech es un proveedor de infraestructura blockchain empresarial. Ofrecemos endpoints RPC gestionados y de un solo inquilino, datos indexados y en streaming, cribado de sanciones y riesgo, rieles de pago e infraestructura de staking — en una sola cuenta y un solo contrato.",
    },
    {
      id: "which-blockchains",
      question: "¿Qué blockchains admite BlockSphere Tech?",
      answer:
        "BlockSphere Tech admite más de 130 redes, incluidas Ethereum, Solana, Bitcoin, BNB Chain, TRON, XRP Ledger, Base, Polygon, Cardano y NEAR, en mainnet y testnet.",
    },
    {
      id: "pricing",
      question: "¿Cómo se precio BlockSphere Tech?",
      answer:
        "Los nodos compartidos empiezan en 49 $/mes, Limitless en 150 $/mes y dedicados en 1.000 $/mes. Con facturación anual: 39 $, 120 $ y 800 $/mes. Hay un plan gratuito sin tarjeta.",
    },
    {
      id: "free-tier",
      question: "¿BlockSphere Tech ofrece un plan gratuito?",
      answer:
        "Sí. El plan gratuito da acceso a endpoints compartidos en las redes admitidas sin tarjeta en el registro.",
    },
    {
      id: "soc2",
      question: "¿BlockSphere Tech cumple SOC 2?",
      answer:
        "BlockSphere Tech mantiene una atestación SOC 2 Type II que cubre productos de nodos compartidos y dedicados.",
    },
    {
      id: "gdpr-dora",
      question: "¿BlockSphere Tech está alineado con GDPR y DORA?",
      answer:
        "BlockSphere Tech opera un tratamiento de datos alineado con GDPR y una postura de proveedor ICT lista para DORA, incluyendo informe de incidentes, pruebas de resiliencia y planes de salida.",
    },
    {
      id: "locations",
      question: "¿Dónde opera BlockSphere Tech su infraestructura?",
      answer:
        "BlockSphere Tech opera en Nueva York, Fráncfort y Singapur, con enrutado ponderado a la UE para clientes con requisitos de residencia de datos.",
    },
    {
      id: "node-types",
      question: "¿Cuál es la diferencia entre nodos Shared, Dedicated y Limitless?",
      answer:
        "Shared se factura por unidades de cómputo. Limitless ofrece RPS fijo sin topes. Dedicated son despliegues de un solo inquilino para alto rendimiento y cargas reguladas.",
    },
    {
      id: "archive",
      question: "¿BlockSphere Tech ofrece nodos de archivo?",
      answer:
        "Sí. Hay nodos de archivo con estado histórico completo desde el génesis, incluidos datos de archivo indexados para Solana y Sui.",
    },
    {
      id: "support",
      question: "¿Cuáles son los compromisos de soporte de BlockSphere Tech?",
      answer:
        "Primera respuesta en menos de cinco minutos y análisis de causa raíz en tres horas, 24/7 con el equipo de ingeniería.",
    },
  ],
};

export const pricingPlans: Record<
  Locale,
  { starter: string; growth: string; limitless: string; dedicated: string }
> = {
  en: {
    starter: "Shared node · Starter",
    growth: "Shared node · Growth",
    limitless: "Limitless node",
    dedicated: "Dedicated node",
  },
  zh: {
    starter: "共享节点 · 入门",
    growth: "共享节点 · 成长",
    limitless: "无限节点",
    dedicated: "专用节点",
  },
  es: {
    starter: "Nodo compartido · Starter",
    growth: "Nodo compartido · Growth",
    limitless: "Nodo Limitless",
    dedicated: "Nodo dedicado",
  },
};

export const contactThanks: Record<Locale, string> = {
  en: "Thank you. A solutions engineer will respond shortly.",
  zh: "感谢您的留言。解决方案工程师将尽快回复。",
  es: "Gracias. Un ingeniero de soluciones responderá en breve.",
};

export function resolveLang(lang?: string | null): Locale {
  if (lang === "zh" || lang === "es") return lang;
  return "en";
}
