import { NavItem, Office, StatItem, ServiceItem } from "../types";

export const headerNavigation: NavItem[] = [
  {
    title: "Solutions",
    url: "/services",
    columns: [
      {
        title: "Renewable Energy Technologies",
        links: [
          {
            title: "Biogas & Anaerobic Digestion",
            url: "/services#biogas",
            description: "Turnkey EPC construction and management of biological digesters for agricultural, food, and municipal organic waste."
          },
          {
            title: "Bio-Methane & Bio-CNG Upgrading",
            url: "/services#biomethane",
            description: "High-efficiency gas membrane purification yielding 98%+ pure biomethane for direct grid injection and clean vehicle fuel."
          },
          {
            title: "Bio-Hydrogen Production",
            url: "/services#biohydrogen",
            description: "Decentralized thermal conversion breaking down organic matter to yield 50kg clean H₂ per ton biomass with zero tar."
          },
          {
            title: "Bio-Methanol & Marine Fuels",
            url: "/services#biomethanol",
            description: "Lifecycle carbon-neutral green methanol supplying commercial shipping fleets, hybrid vehicles, and chemical manufacturing."
          }
        ]
      },
      {
        title: "Environmental & Infrastructure",
        links: [
          {
            title: "Cogeneration & CHP Systems",
            url: "/services#cogeneration",
            description: "Combined heat and power systems transforming fermentation gas into baseload electricity and industrial thermal energy."
          },
          {
            title: "Eco-Pavements & Dust Suppression",
            url: "/services#pavements",
            description: "Patented eco-friendly binders eliminating up to 100% of water usage in architectural and industrial soil stabilization."
          },
          {
            title: "Micro-Implants & Modular Plants",
            url: "/services#micro-implants",
            description: "Scalable decentralized treatment facilities designed for rapid deployment across remote agricultural and industrial hubs."
          }
        ]
      }
    ]
  },
  {
    title: "Technologies & Insights",
    url: "/research-insights",
    columns: [
      {
        title: "Technical Whitepapers",
        links: [
          {
            title: "Waste-to-Hydrogen Systems",
            url: "/research-insights?tab=Bio-Hydrogen",
            description: "Self-sustainable thermal conversion economics, decentralized energy grids, and fuel-cell fleet applications."
          },
          {
            title: "Biomethane Grid Injection Standards",
            url: "/research-insights?tab=Biomethane",
            description: "Purification parameters, membrane separation efficiency, and replacing fossil methane in national pipelines."
          },
          {
            title: "Circular Economy in Arid Climates",
            url: "/research-insights?tab=Circular%20Economy",
            description: "Soil stabilization, zero-water dust control, and converting food waste into high-grade organic fertilizer."
          },
          {
            title: "Maritime Decarbonization & Methanol",
            url: "/research-insights?tab=Green%20Methanol",
            description: "Regulatory IMO compliance, dual-fuel vessel adoption, and lifecycle CO2 mitigation trajectories."
          }
        ]
      }
    ]
  },
  {
    title: "About",
    url: "/about",
    columns: [
      {
        title: "Company",
        links: [
          {
            title: "Who We Are",
            url: "/about#who-we-are",
            description: "European engineering heritage combined with on-the-ground operational capability in the Kingdom of Saudi Arabia."
          },
          {
            title: "Mission & Values",
            url: "/about#mission",
            description: "Advancing circular economy infrastructure and cutting-edge recycling standards for organic and industrial waste streams."
          },
          {
            title: "Circular Economy Vision",
            url: "/about#circular-economy",
            description: "Eliminating waste by keeping valuable molecules productive in the economic cycle across their full lifecycle."
          }
        ]
      }
    ]
  }
];

export const headerSideNavigation: NavItem[] = [
  { title: "Team", url: "/people" },
  { title: "Careers", url: "/careers" },
  { title: "Contact", url: "/contact" }
];

export const officesList: Office[] = [
  {
    id: "jubail",
    city: "Al Jubail (Headquarters)",
    addressLines: [
      "3242 Makkah Al Moukarrama",
      "Al Dana District",
      "Al Jubail 35514",
      "Kingdom of Saudi Arabia"
    ],
    phone: "+966 13 766 4909",
    email: "info@greengulfindustry.com",
    coordinates: { lat: 27.0046, lng: 49.6601 }
  },
  {
    id: "europe",
    city: "European Engineering Center",
    addressLines: [
      "Technology Development & R&D Hub",
      "Corso Industriale",
      "Northern Italy / European Union"
    ],
    phone: "+39 045 800 1234",
    email: "europe@greengulfindustry.com",
    coordinates: { lat: 45.4384, lng: 10.9916 }
  }
];

export const heroSlides = [
  {
    id: "hero-1",
    title: "Beyond Construction.\nSustainable Energy Solutions.",
    subTitle: "Industrial EPC & Green Technology",
    description: "Bringing world-class European engineering experience and advanced green technology into the Kingdom of Saudi Arabia. We build and manage industrial biogas, bio-hydrogen, and waste-to-energy infrastructure.",
    imageUrl: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1920&q=80",
    ctaLabel: "Explore Technologies",
    ctaUrl: "/services",
    badge: "Industrial EPC Solutions"
  },
  {
    id: "hero-2",
    title: "Transforming Waste\nInto High-Yield Clean Power.",
    subTitle: "Anaerobic Digestion & Biomethane",
    description: "Closed-loop anaerobic digestion converting agricultural residues, livestock manure, and municipal sludge into renewable electricity, industrial heat, and pipeline-grade Bio-CNG.",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80",
    ctaLabel: "Discover Biogas Plants",
    ctaUrl: "/services",
    badge: "Circular Economy"
  },
  {
    id: "hero-3",
    title: "Bio-Hydrogen & Green Methanol\nFor Industrial Decarbonization.",
    subTitle: "Clean Mobility & Shipping Fuels",
    description: "Self-sustaining thermal conversion delivering 50 kg of clean hydrogen per ton of biomass with zero tar. Powering fuel-cell fleets and producing green methanol for maritime transport.",
    imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80",
    ctaLabel: "Consult Our Engineers",
    ctaUrl: "/contact",
    badge: "Next-Gen Bio-Fuels"
  }
];

export const keyStatistics: StatItem[] = [
  {
    value: "100%",
    label: "Water Usage Eliminated",
    detail: "Proprietary eco-friendly dust suppression and natural pavement technology reducing water consumption to absolute zero."
  },
  {
    value: "50 kg",
    suffix: "H₂ / ton",
    label: "Clean Bio-Hydrogen Yield",
    detail: "Daily high-purity hydrogen output per ton of biomass feedstock through zero-tar thermal conversion."
  },
  {
    value: "98%+",
    label: "Biomethane Gas Purity",
    detail: "Advanced membrane upgrading producing Bio-CNG ready for national grid injection or fleet transport."
  },
  {
    value: "100%",
    label: "Organic Waste Diversion",
    detail: "Complete biological recycling of agricultural, agro-industrial, and municipal organic waste into energy and organic soil enhancers."
  }
];

export const coreServices: ServiceItem[] = [
  {
    id: "biogas",
    slug: "biogas",
    title: "Biogas & Anaerobic Digestion",
    shortDesc: "Turnkey EPC construction and management of high-yield biological fermentation digesters.",
    fullDesc: "Biogas is a clean natural gaseous fuel produced via anaerobic digestion by specialized bacterial consortia operating in oxygen-free digesters. BIOLYTE provides full EPC delivery for processing agricultural residues (manure, slurry, crop waste), food industry by-products (fruit, vegetable, dairy, and brewery remnants), and municipal wastewater sludge. The resulting gas powers cogeneration units or undergoes purification into vehicle-ready biomethane.",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80",
    capabilities: [
      "Turnkey EPC Engineering & Digester Construction",
      "Biological Process Modeling & Substrate Optimization",
      "Agro-Industrial Waste-Stream Characterization",
      "Automated Feeding, Mixing & Heat Recovery Systems",
      "High-Value Digestate Processing for Organic Fertilizer"
    ],
    keyDeals: [
      { title: "Dairy Farm Agro-Biogas Facility", location: "Eastern Province, KSA", size: "1,200 m³/day Biogas", value: "Turnkey EPC" },
      { title: "Agro-Industrial Food Processing Digester", location: "Riyadh Industrial City", size: "850 kW Electrical", value: "Commissioned" },
      { title: "Municipal Sludge Digestion & Energy Plant", location: "Al Jubail Cluster", size: "2.4 MW Cogeneration", value: "EPC & Management" }
    ]
  },
  {
    id: "biomethane",
    slug: "biomethane",
    title: "Bio-Methane & Bio-CNG Upgrading",
    shortDesc: "Purifying raw biogas to 98%+ methane purity for pipeline grid injection and vehicle fleet fueling.",
    fullDesc: "Biomethane is a direct renewable substitute for fossil natural gas. Derived from the upgrading and purification of raw biogas, it removes CO2, H2S, and moisture to achieve pipeline-standard calorific values. BIOLYTE delivers integrated gas upgrading systems enabling either high-pressure injection into national gas networks or compression into Bio-CNG for heavy truck, bus, and industrial vehicle fleets.",
    imageUrl: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1920&q=80",
    capabilities: [
      "Multi-Stage Polymer Membrane Separation",
      "Chemical & Water-Scrubbing Gas Sweetening",
      "High-Pressure Compression for Grid-Injection",
      "Bio-CNG Fleet Refueling Station Infrastructure",
      "Virtual Pipeline Tube-Trailer Logistics Setup"
    ],
    keyDeals: [
      { title: "Commercial Grid-Injection Biomethane Unit", location: "Al Jubail Energy Corridor", size: "1,500 Nm³/h Bio-CH4", value: "98.5% Purity" },
      { title: "Industrial Fleet Bio-CNG Refueling Hub", location: "Dammam Logistics Zone", size: "40 Trucks / Day", value: "Fast-Fill System" }
    ]
  },
  {
    id: "biohydrogen",
    slug: "biohydrogen",
    title: "Bio-Hydrogen Production",
    shortDesc: "Self-sustainable thermal conversion of biomass into clean hydrogen with zero tar and zero toxic emissions.",
    fullDesc: "Our decentralized waste-to-hydrogen thermal conversion system breaks down organic matter and extracted biomass to generate clean, green hydrogen. Because the process is non-incinerative, it generates zero hazardous chemical by-products and no tar. A standard 1 ton/day biomass feedstock yields 50 kg of pure hydrogen daily—sufficient to fuel 12 fuel-cell commercial vehicles or power a 40 kW solid oxide fuel cell system.",
    imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80",
    capabilities: [
      "Self-Sustainable Thermal Decomposition",
      "Zero-Tar Biomass Gasification Technology",
      "Proton Exchange Membrane (PEM) Purification",
      "Decentralized Clean Energy Smart Grid Integration",
      "Clean Mobility & Industrial Hydrogen Supply"
    ],
    keyDeals: [
      { title: "Waste-to-Hydrogen Pilot Station", location: "Al Jubail Innovation Hub", size: "50 kg H₂/day per ton", value: "Zero Tar" },
      { title: "Integrated Solid Oxide Fuel Cell Array", location: "Eastern Province Demo", size: "40 kW Continuous", value: "Smart Grid" }
    ]
  },
  {
    id: "biomethanol",
    slug: "biomethanol",
    title: "Bio-Methanol & Synthetic Fuels",
    shortDesc: "Carbon-neutral liquid fuels powering global maritime shipping, hybrid transport, and green chemistry.",
    fullDesc: "Methanol is one of the world's most essential industrial chemicals and liquid energy carriers. BIOLYTE delivers bio-methanol synthesis from biomass syngas and e-methanol from green hydrogen and captured CO2. Green methanol is taking the lead in maritime shipping decarbonization, with global shipping carriers (Maersk, CMA CGM, COSCO) adopting methanol-powered container vessels, while automotive leaders deploy hybrid alcohol-electric powertrains.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80",
    capabilities: [
      "Syngas Catalytic Methanol Synthesis",
      "Biomass & E-Fuel Lifecycle Carbon Neutrality",
      "Marine Bunker Port Feasibility & Storage Solutions",
      "Chemical Feedstock Quality for Green Plastics & Paints",
      "Dual-Fuel Commercial Powertrain Compatibility"
    ],
    keyDeals: [
      { title: "Marine Green Methanol Synthesis Design", location: "Arabian Gulf Port Facility", size: "25,000 MT / Year", value: "IMO Tier III" },
      { title: "Industrial By-Product Syngas Conversion", location: "Yanbu Industrial Complex", size: "12,000 MT / Year", value: "Circular Chem" }
    ]
  },
  {
    id: "pavements",
    slug: "pavements",
    title: "Natural Pavements & Dust Suppression",
    shortDesc: "Eco-friendly architectural binders and dust-control solutions eliminating up to 100% of water consumption.",
    fullDesc: "In arid environments, conventional dust control relies on constant, unsustainable water spraying. BIOLYTE supplies specialized eco-friendly binders for natural architectural pavements, unpaved industrial access roads, and soil stabilization. Our proprietary formulation bonds dust particles permanently, withstanding heavy industrial vehicle loads while eliminating water consumption by up to 100%.",
    imageUrl: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1920&q=80",
    capabilities: [
      "100% Water Elimination for Dust Suppression",
      "Natural Architectural Pavements for Landscaping",
      "Heavy-Haul Industrial Road Soil Stabilization",
      "Non-Toxic, Biodegradable & Environmentally Inert",
      "Extreme High-Temperature & UV Resistance"
    ],
    keyDeals: [
      { title: "Industrial Haul Road Dust Suppression", location: "Al Jubail Heavy Industry Corridor", size: "45 km Road Network", value: "100% Water Saved" },
      { title: "Heritage Architectural Natural Pavement", location: "Al-Ahsa Oasis Cultural Center", size: "28,000 m² Pavement", value: "Natural Eco-Bind" }
    ]
  }
];

export const clientLogosRow1 = [
  { name: "BST Biogas Technology", url: "https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/1.1-1.png" },
  { name: "Geneo Cogeneration", url: "https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/1.2.png" },
  { name: "Saudi Vision 2030 Sustainability", url: "https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/1.3.png" },
  { name: "Circular Economy Alliance", url: "https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/3 Railpen-2.png" },
  { name: "European Biogas Association", url: "https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/1.5.png" },
  { name: "Clean Hydrogen Partnership", url: "https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/1.1-1.png" }
];

export const clientLogosRow2 = [
  { name: "Green Ways Eco-Pavements", url: "https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/3 Ares.png" },
  { name: "Al Jubail Industrial Cluster", url: "https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/8 Kadans.png" },
  { name: "Bio-CNG Transport Network", url: "https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/8 Panattoni.png" },
  { name: "Maritime Methanol Consortium", url: "https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/6 Pfizer-1.png" },
  { name: "BioEnergy Europe Standards", url: "https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/2.6.png" },
  { name: "ISO 14001 Environmental EPC", url: "https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/3 Ares.png" }
];

export const footerAccreditations = [
  { name: "ISO 14001 Environmental Management", url: "https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/DTRE_Website_Footer_Icons_RICS.png" },
  { name: "European Biogas & Bio-Hydrogen Standards", url: "https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/DTRE_Website_Footer_Icons_BPF.png" },
  { name: "Saudi Council of Engineers Certified", url: "https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/DTRE_Website_Footer_Icons_CyberEssentials.png" }
];
