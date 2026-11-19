import { ResearchItem, NewsItem } from "../types";

export const researchReports: ResearchItem[] = [
  {
    id: "biogas-biomethane-outlook-2026",
    slug: "biogas-biomethane-outlook-2026",
    title: "Industrial Biomethane & Biogas Outlook: Feedstock Economics and Grid Injection Standards",
    category: "Technical Intelligence",
    publishDate: "July 2026",
    readTime: "8 min read",
    summary: "Comprehensive technical analysis on anaerobic digestion efficiencies, methane membrane separation yields, and the commercial viability of replacing fossil methane with agricultural biomethane across industrial energy corridors.",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1920&q=80",
    pdfUrl: "#",
    keyTakeaways: [
      "Anaerobic digestion of agro-industrial residues achieves up to 98.5% biomethane purity using triple-stage polymer membrane separation.",
      "Grid injection into national high-pressure networks reduces carbon intensity by up to 88% compared to pipeline natural gas.",
      "Bio-CNG vehicle fleet conversion delivers immediate compliance with industrial Scope 1 transport emissions reductions.",
      "Digestate co-products provide pathogen-free, nutrient-rich organic bio-fertilizer, closing the agricultural loop.",
      "Payback periods for integrated EPC biomethane plants continue to compress with carbon offset valuations."
    ]
  },
  {
    id: "waste-to-hydrogen-thermal-conversion",
    slug: "waste-to-hydrogen-thermal-conversion",
    title: "Decentralized Bio-Hydrogen: Thermochemical Waste Conversion for Clean Mobility",
    category: "Technical Intelligence",
    publishDate: "April 2026",
    readTime: "10 min read",
    summary: "An engineering review of self-sustainable thermal decomposition systems. Demonstrates how organic waste streams yield 50 kg of pure, zero-tar hydrogen per ton of feedstock for fuel-cell vehicles and decentralized smart microgrids.",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80",
    keyTakeaways: [
      "Non-incineration thermal conversion prevents tar formation and eliminates hazardous chemical dioxins.",
      "Standard 1 ton/day modular units supply enough clean H₂ to power 12 full-tank commercial fuel-cell vehicles.",
      "Integration with solid oxide fuel cells (SOFC) generates 40 kW of continuous baseload electrical capacity per module.",
      "Thermal self-sufficiency is achieved by utilizing residual process gases, minimizing external energy requirements."
    ]
  },
  {
    id: "circular-economy-arid-climates",
    slug: "circular-economy-arid-climates",
    title: "Circular Economy in Arid Climates: Zero-Water Dust Suppression and Soil Conservation",
    category: "Operational Research",
    publishDate: "August 2026",
    readTime: "6 min read",
    summary: "Evaluating specialized architectural eco-binders in extreme desert and industrial environments. How replacing traditional water spraying with eco-friendly pavement binders eliminates 100% of dust control water waste.",
    image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1920&q=80",
    keyTakeaways: [
      "Traditional water trucks waste millions of liters of potable and desalinated water annually on haul roads.",
      "Bio-stabilized natural pavements achieve permanent particle binding resistant to heavy heavy-haul industrial axle loads.",
      "Formulations remain chemically inert, UV-stable, and fully effective across temperatures exceeding 50°C.",
      "Rapid application allows immediate traffic clearance with zero curing disruption."
    ]
  },
  {
    id: "podcast-clean-energy-dialogue",
    slug: "podcast-clean-energy-dialogue",
    title: "Industrial Clean Energy Dialogue: Green Methanol in Global Maritime Decarbonization",
    category: "Industry Keynotes",
    publishDate: "September 2026",
    readTime: "28 min briefing",
    summary: "Technical discussion detailing how bio-methanol synthesized from biomass syngas and e-methanol from green hydrogen is unlocking rapid maritime IMO Tier III compliance for container shipping.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80",
    podcastEpisode: {
      duration: "28:40",
      hosts: ["BIOLYTE Engineering Team", "Green Gulf Industry EPC Specialists"],
      guest: "Maritime Fleet Energy Advisory"
    }
  },
  {
    id: "databook-biomass-yields",
    slug: "databook-biomass-yields",
    title: "BIOLYTE Feedstock & Biogas Yield Matrix: Substrate Energy Calculators",
    category: "Technical Reference",
    publishDate: "Live Data Feed",
    readTime: "Interactive Matrix",
    summary: "Direct technical reference benchmarking biochemical methane potential (BMP) across dairy manure, poultry litter, agro-food waste, and municipal sludge.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80"
  }
];

export const newsArticles: NewsItem[] = [
  {
    id: "news-jubail-biogas-commissioning",
    slug: "news-jubail-biogas-commissioning",
    title: "BIOLYTE commissions advanced industrial anaerobic digestion plant in the Eastern Province",
    category: "Project Milestone",
    date: "18 June 2026",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80",
    excerpt: "Marking a pivotal step in regional waste-to-value infrastructure, our turnkey EPC team successfully commissioned a commercial biogas plant converting agro-industrial residues into baseload clean energy."
  },
  {
    id: "news-dust-suppression-scale",
    slug: "news-dust-suppression-scale",
    title: "Water-free dust control technology deployed across 45km of industrial corridors in Al Jubail",
    category: "Sustainability",
    date: "24 May 2026",
    image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1920&q=80",
    excerpt: "By eliminating the requirement for water spraying on heavy haul roads, BIOLYTE's eco-friendly natural pavement binder saved an estimated 14 million liters of water in its first month of operation."
  },
  {
    id: "news-hydrogen-pilot-launch",
    slug: "news-hydrogen-pilot-launch",
    title: "BIOLYTE and European partners advance decentralized Bio-Hydrogen demonstration unit",
    category: "Technology Innovation",
    date: "12 August 2026",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80",
    excerpt: "Demonstrating clean thermal conversion with zero tar, the pilot facility produces 50 kg of fuel-cell grade hydrogen daily from organic municipal solid waste fractions."
  }
];
