"use client";

import React from "react";
// Removed lucide-react imports for simpler design
import CTASection from "@/components/custom-components/CtaSection";
import AnimatedSection from "@/components/custom-components/AnimatedSection";

// Product categories data with all 22 categories
const productCategories = [
  {
    id: 1,
    name: {
      az: "Polad Materiallar",
      en: "Steel Materials",
      tr: "Çelik Malzemeler",
    },
    icon: "⚒️",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "Armatur Çubuqları",
        "INP, UNP",
        "HEA, HEB, IPE, UPE",
        "İsti və Soyuq Haddan Keçirilmiş Rulonlar, Levhalar",
        "Simsiz və ERW Borular",
        "Bərabər və Bərabərsiz Buçaqlar",
        "Kvadrat, Dairəvi və Yastı Çubuqlar",
      ],
      en: [
        "Rebar",
        "INP, UNP",
        "HEA, HEB, IPE, UPE",
        "Hot and Cold Rolled Coils, Sheets",
        "Seamless and ERW Pipes",
        "Equal and Unequal Angles",
        "Square, Round, and Flat Bars",
      ],
      tr: [
        "Donatı Çubukları",
        "INP, UNP",
        "HEA, HEB, IPE, UPE",
        "Sıcak ve Soğuk Haddelenmiş Rulolar, Levhalar",
        "Dikişsiz ve ERW Borular",
        "Eşit ve Eşit Olmayan Köşebentler",
        "Kare, Yuvarlak ve Lama Çubuklar",
      ],
    },
  },
  {
    id: 2,
    name: {
      az: "Qaynaq Avadanlıqları",
      en: "Welding Equipment",
      tr: "Kaynak Ekipmanları",
    },
    icon: "🔥",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "TIG, Stick, MIG Qaynaq Cihazları",
        "Mühərriklə işləyən qaynaq aparatları",
        "Daldırma qövs və avtomatik sistemlər",
        "Robotlaşdırılmış və avtomatik qaynaq sistemləri",
        "Orbital qaynaq sistemləri",
        "Plazma və CNC kəsici cihazlar",
        "Robotlaşdırılmış enerji mənbələri",
        "Qaynaq materialları (Elektrodlar, Flux, Tel)",
        "Qaynaq təhlükəsizlik avadanlıqları",
        "Paslanmayan və nikel ərintiləri",
      ],
      en: [
        "TIG, Stick, MIG Welding Machines",
        "Engine-driven welders",
        "Submerged arc and automatic systems",
        "Robotic and automatic welding systems",
        "Orbital welding systems",
        "Plasma and CNC cutting machines",
        "Robotic power sources",
        "Welding consumables (Electrodes, Flux, Wire)",
        "Welding safety equipment",
        "Stainless steel and nickel alloys",
      ],
      tr: [
        "TIG, Stick, MIG Kaynak Makineleri",
        "Motor tahrikli kaynak makineleri",
        "Toz altı ve otomatik sistemler",
        "Robotik ve otomatik kaynak sistemleri",
        "Orbital kaynak sistemleri",
        "Plazma ve CNC kesim makineleri",
        "Robotik güç kaynakları",
        "Kaynak sarf malzemeleri (Elektrotlar, Flux, Tel)",
        "Kaynak güvenlik ekipmanları",
        "Paslanmaz ve nikel alaşımları",
      ],
    },
  },
  {
    id: 3,
    name: {
      az: "Aşındırıcılar",
      en: "Abrasives",
      tr: "Aşındırıcılar",
    },
    icon: "⚙️",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "Kəsici disklər",
        "Zımpara kağızları",
        "Qeyri-toxunmuş disklər",
        "Almaz disklər",
        "Kəsmə və daşlama təkərləri",
        "Flap təkərləri",
        "Səth təmizləmə təkərləri",
      ],
      en: [
        "Cutting discs",
        "Sanding papers",
        "Non-woven discs",
        "Diamond discs",
        "Cutting and grinding wheels",
        "Flap wheels",
        "Surface conditioning wheels",
      ],
      tr: [
        "Kesici diskler",
        "Zımpara kağıtları",
        "Dokumasız diskler",
        "Elmas diskler",
        "Kesme ve taşlama taşları",
        "Flap diskler",
        "Yüzey temizleme tekerlekleri",
      ],
    },
  },
  {
    id: 4,
    name: {
      az: "Boya və Yanğına Davamlı Materiallar",
      en: "Paint and Fire-Resistant Materials",
      tr: "Boya ve Yangına Dayanıklı Malzemeler",
    },
    icon: "🎨",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop",
    subcategories: {
      az: ["Yalnız Jotun məhsulları"],
      en: ["Jotun products only"],
      tr: ["Sadece Jotun ürünleri"],
    },
  },
  {
    id: 5,
    name: {
      az: "İstilik və Səs İzolyasiya Materialları",
      en: "Thermal and Sound Insulation Materials",
      tr: "Isı ve Ses Yalıtım Malzemeleri",
    },
    icon: "🏠",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "Səs və vibrasiya nəzarəti",
        "Sənaye üçün fərdi həllər",
        "Akustik tavan və divar sistemləri",
        "Xarici örtük sistemləri",
      ],
      en: [
        "Sound and vibration control",
        "Custom solutions for industry",
        "Acoustic ceiling and wall systems",
        "External cladding systems",
      ],
      tr: [
        "Ses ve titreşim kontrolü",
        "Endüstri için özel çözümler",
        "Akustik tavan ve duvar sistemleri",
        "Dış cephe kaplama sistemleri",
      ],
    },
  },
  {
    id: 6,
    name: {
      az: "Kimyəvi Məhsullar",
      en: "Chemical Products",
      tr: "Kimyasal Ürünler",
    },
    icon: "⚗️",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "PU Köpükləri",
        "Aerozollar",
        "Yağlayıcılar",
        "Möhkəmləndiricilər",
        "Yapışdırıcılar",
        "Təmizləyicilər",
      ],
      en: [
        "PU Foams",
        "Aerosols",
        "Lubricants",
        "Hardeners",
        "Adhesives",
        "Cleaners",
      ],
      tr: [
        "PU Köpükleri",
        "Aerosoller",
        "Yağlayıcılar",
        "Sertleştiriciler",
        "Yapıştırıcılar",
        "Temizleyiciler",
      ],
    },
  },
  {
    id: 7,
    name: {
      az: "Anbar və Qaldırıcı Avadanlıqlar",
      en: "Warehouse and Lifting Equipment",
      tr: "Depo ve Kaldırma Ekipmanları",
    },
    icon: "🏗️",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "Forkliftlər, Stackerlər, Qaldırıcılar",
        "Əl transpaletləri",
        "Barel daşıma avadanlığı",
        "Halqalı və lentli slinglər",
        "Xilas və təxliyə qurğuları",
        "Kasnaqlar",
        "Polad tel ipləri",
        "Lanyardlar",
        "Qarmaqlar",
        "Zəncirli qaldırıcılar",
        "Üçayaqlar",
      ],
      en: [
        "Forklifts, Stackers, Hoists",
        "Hand pallet trucks",
        "Drum handling equipment",
        "Round and webbing slings",
        "Rescue and evacuation devices",
        "Pulleys",
        "Steel wire ropes",
        "Lanyards",
        "Hooks",
        "Chain hoists",
        "Tripods",
      ],
      tr: [
        "Forkliftler, İstifleyiciler, Vinçler",
        "El transpaletleri",
        "Varil taşıma ekipmanları",
        "Yuvarlak ve şerit sapanlar",
        "Kurtarma ve tahliye cihazları",
        "Makara",
        "Çelik tel halatlar",
        "Bağlantı ipleri",
        "Kancalar",
        "Zincirli vinçler",
        "Tripodlar",
      ],
    },
  },
  {
    id: 8,
    name: {
      az: "Elektrik Materialları",
      en: "Electrical Materials",
      tr: "Elektrik Malzemeleri",
    },
    icon: "⚡",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "Elektrik birləşmə sistemləri",
        "İstilik izləmə sistemləri",
        "Kabel və idarəetmə sistemləri",
        "Avtomatika",
        "Səsli və vizual siqnallar",
        "Sənaye fişləri və rozetkalar",
        "Uzunlamasına torpaq sistemi",
        "Partlayışa davamlı məhsullar",
        "Qutular",
        "Keçid blokları və çərçivələr",
        "Kabel kanalları",
      ],
      en: [
        "Electrical jointing systems",
        "Heat tracing systems",
        "Cable and control systems",
        "Automation",
        "Audible and visual signals",
        "Industrial plugs and sockets",
        "Longitudinal earthing system",
        "Explosion-proof products",
        "Boxes",
        "Terminal blocks and frames",
        "Cable trays",
      ],
      tr: [
        "Elektrik ekleme sistemleri",
        "Isıtma izleme sistemleri",
        "Kablo ve kontrol sistemleri",
        "Otomasyon",
        "Sesli ve görsel sinyaller",
        "Endüstriyel fişler ve prizler",
        "Boyuna topraklama sistemi",
        "Patlamaya dayanıklı ürünler",
        "Kutular",
        "Klemensler ve çerçeveler",
        "Kablo kanalları",
      ],
    },
  },
  {
    id: 9,
    name: {
      az: "Fərdi Qoruyucu Vasitələr (PPE)",
      en: "Personal Protective Equipment (PPE)",
      tr: "Kişisel Koruyucu Donanımlar (KKD)",
    },
    icon: "🛡️",
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
    subcategories: {
      az: ["Ayrı-ayrılıqda göstəriləcək"],
      en: ["To be shown separately"],
      tr: ["Ayrı ayrı gösterilecektir"],
    },
  },
  {
    id: 10,
    name: {
      az: "Generatorlar və Kompressorlar",
      en: "Generators and Compressors",
      tr: "Jeneratörler ve Kompresörler",
    },
    icon: "🔋",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "Sənaye / Dəniz / Mobil generatorlar",
        "İşıq qüllələri",
        "Mühərriklə işləyən qaynaq aparatları",
        "Piston / Vint / Yağsız / Dizel / Dəniz kompressorları",
        "Hava çənləri",
        "Qurutma qurğuları",
      ],
      en: [
        "Industrial / Marine / Mobile generators",
        "Light towers",
        "Engine-driven welders",
        "Piston / Screw / Oil-free / Diesel / Marine compressors",
        "Air tanks",
        "Drying units",
      ],
      tr: [
        "Endüstriyel / Denizcilik / Mobil jeneratörler",
        "Işık kuleleri",
        "Motor tahrikli kaynak makineleri",
        "Pistonlu / Vidalı / Yağsız / Dizel / Deniz kompresörleri",
        "Hava tankları",
        "Kurutma üniteleri",
      ],
    },
  },
  {
    id: 11,
    name: {
      az: "Əl Alətləri və Elektrik Alətləri",
      en: "Hand Tools and Power Tools",
      tr: "El Aletleri ve Elektrikli Aletler",
    },
    icon: "🔧",
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "Əl alətləri: Açarlar, Ucluqlar, Tornavidalar, Çəkiclər və s.",
        "Elektrik alətləri: Matkaplar, Daşlayanlar, Kəsicilər və s.",
      ],
      en: [
        "Hand tools: Wrenches, Sockets, Screwdrivers, Hammers, etc.",
        "Power tools: Drills, Grinders, Cutters, etc.",
      ],
      tr: [
        "El aletleri: Anahtarlar, Uçlar, Tornavidalar, Çekiçler vb.",
        "Elektrikli aletler: Matkaplar, Taşlayıcılar, Kesiciler vb.",
      ],
    },
  },
  {
    id: 12,
    name: {
      az: "Klapanlar və Boru Bağlantıları",
      en: "Valves and Pipe Fittings",
      tr: "Valfler ve Boru Bağlantıları",
    },
    icon: "🔩",
    image:
      "https://images.unsplash.com/photo-1581092335878-0d0398b0d11e?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "Pnevmatik və elektromexaniki aktuatorlar",
        "Servo-pnevmatik sistemlər",
        "Gripperlər, İynələr",
        "Bağlayıcı / Təzyiq / Axın klapanları",
        "Sürüşdürmə və birləşdirmə elementləri",
        "Pup və fırlanan birləşmələr, manifoldlar",
        "Fleksibil borular, Regulyatorlar",
        "Manometrlər, Sensorlar, Termoqüvvələr",
      ],
      en: [
        "Pneumatic and electromechanical actuators",
        "Servo-pneumatic systems",
        "Grippers, Needles",
        "Control / Pressure / Flow valves",
        "Sliding and connection elements",
        "Pup and rotary joints, manifolds",
        "Flexible hoses, Regulators",
        "Manometers, Sensors, Thermocouples",
      ],
      tr: [
        "Pnömatik ve elektromekanik aktüatörler",
        "Servo-pnömatik sistemler",
        "Tutucular, İğneler",
        "Kontrol / Basınç / Akış valfleri",
        "Kayar ve bağlantı elemanları",
        "Döner rakorlar ve manifoldlar",
        "Esnek borular, Regülatörler",
        "Manometreler, Sensörler, Termokuplar",
      ],
    },
  },
  {
    id: 13,
    name: {
      az: "PVC Materiallar",
      en: "PVC Materials",
      tr: "PVC Malzemeler",
    },
    icon: "🔗",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "Yüksək və aşağı təzyiqli PVC birləşmələri",
        "Nipel, T, Çarpaz, Qapaq, Tıxac",
        "Bucaq, Mufta",
      ],
      en: [
        "High and low pressure PVC fittings",
        "Nipple, Tee, Cross, Cap, Plug",
        "Elbow, Coupler",
      ],
      tr: [
        "Yüksek ve düşük basınçlı PVC bağlantı elemanları",
        "Nipel, Te, Çapraz, Kapak, Tıpa",
        "Köşebent, Manşon",
      ],
    },
  },
  {
    id: 14,
    name: {
      az: "Proses və Alət Avadanlığı",
      en: "Process and Instrumentation Equipment",
      tr: "Proses ve Enstrüman Ekipmanları",
    },
    icon: "📊",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "Təzyiq və temperatur ötürücüləri",
        "Axın ölçənlər",
        "Səviyyə sensorları və açarları",
        "Nəzarət klapanları və aktuatorlar",
        "Gözlük şüşələri",
        "Alov tormozlayıcılar",
        "Nümunə götürmə sistemləri",
        "İnstrument manifoldları",
      ],
      en: [
        "Pressure and temperature transmitters",
        "Flow meters",
        "Level sensors and switches",
        "Control valves and actuators",
        "Sight glasses",
        "Flame arresters",
        "Sampling systems",
        "Instrument manifolds",
      ],
      tr: [
        "Basınç ve sıcaklık transmiterleri",
        "Akış ölçerler",
        "Seviye sensörleri ve anahtarları",
        "Kontrol valfleri ve aktüatörler",
        "Gözlük camları",
        "Alev tutucular",
        "Örnekleme sistemleri",
        "Enstrüman manifoldları",
      ],
    },
  },
  {
    id: 15,
    name: {
      az: "Yanğın və Qaz Təhlükəsizlik Sistemləri",
      en: "Fire and Gas Safety Systems",
      tr: "Yangın ve Gaz Güvenlik Sistemleri",
    },
    icon: "🚨",
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "Alov / Qaz / Tüstü detektorları",
        "Yanğın siqnal panelləri",
        "Söndürmə sistemləri (FM200, CO₂, Quru toz)",
        "Yanğın hortumları, Şlanqlar, Dolablar",
      ],
      en: [
        "Flame / Gas / Smoke detectors",
        "Fire alarm panels",
        "Suppression systems (FM200, CO₂, Dry powder)",
        "Fire hoses, Hoses, Cabinets",
      ],
      tr: [
        "Alev / Gaz / Duman dedektörleri",
        "Yangın alarm panelleri",
        "Söndürme sistemleri (FM200, CO₂, Kuru toz)",
        "Yangın hortumları, Hortumlar, Dolaplar",
      ],
    },
  },
  {
    id: 16,
    name: {
      az: "Tikinti və Mülki Materiallar",
      en: "Construction and Civil Materials",
      tr: "İnşaat ve Sivil Malzemeler",
    },
    icon: "🏗️",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "Beton qatqıları",
        "Kalıp sistemləri",
        "Lesa sistemləri",
        "Geotekstil, Tor şəbəkələr",
        "Su izolyasiya materialları",
      ],
      en: [
        "Concrete admixtures",
        "Formwork systems",
        "Scaffolding systems",
        "Geotextiles, Mesh nets",
        "Waterproofing materials",
      ],
      tr: [
        "Beton katkıları",
        "Kalıp sistemleri",
        "İskele sistemleri",
        "Geotekstil, Hasır ağlar",
        "Su yalıtım malzemeleri",
      ],
    },
  },
  {
    id: 17,
    name: {
      az: "Mexaniki Avadanlıq və Ehtiyat Hissələri",
      en: "Mechanical Equipment and Spare Parts",
      tr: "Mekanik Ekipman ve Yedek Parçalar",
    },
    icon: "⚙️",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "Reduktorlar, Podşipniklər, Nasoslar",
        "Ventilyatorlar, Sızdırmazlıq halqaları",
        "Hidravlik güc blokları, Silindrlər",
        "Aktuatorlar, Muftalar",
      ],
      en: [
        "Reducers, Bearings, Pumps",
        "Fans, Sealing rings",
        "Hydraulic power packs, Cylinders",
        "Actuators, Couplings",
      ],
      tr: [
        "Redüktörler, Rulmanlar, Pompalar",
        "Fanlar, Sızdırmazlık halkaları",
        "Hidrolik güç üniteleri, Silindirler",
        "Aktüatörler, Kaplinler",
      ],
    },
  },
  {
    id: 18,
    name: {
      az: "Baxım, Təmir və İstismar (MRO)",
      en: "Maintenance, Repair and Operations (MRO)",
      tr: "Bakım, Onarım ve İşletme (MRO)",
    },
    icon: "🔧",
    image:
      "https://images.unsplash.com/photo-1581092918484-8313a22c5d2d?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "Təmizlik alətləri, Yağlama sistemləri",
        "Emalatxana avadanlıqları",
        "Sızma aşkarlama dəstləri",
        "Lentlər, Qablaşdırma",
        "Boya alətləri",
      ],
      en: [
        "Cleaning tools, Lubrication systems",
        "Workshop equipment",
        "Leak detection kits",
        "Tapes, Packaging",
        "Painting tools",
      ],
      tr: [
        "Temizlik aletleri, Yağlama sistemleri",
        "Atölye ekipmanları",
        "Sızıntı tespit kitleri",
        "Bantlar, Ambalaj",
        "Boya aletleri",
      ],
    },
  },
  {
    id: 19,
    name: {
      az: "HSE və Fövqəladə Hallara Hazırlıq",
      en: "HSE and Emergency Preparedness",
      tr: "HSE ve Acil Durum Hazırlığı",
    },
    icon: "🛡️",
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "Sızma dəstləri, Absorbentlər",
        "İlk yardım dəstləri",
        "Qaz maskaları, Təhlükəsizlik duşları",
        "Fövqəladə işıqlandırma",
        "Xilasetmə xərəkləri",
      ],
      en: [
        "Spill kits, Absorbents",
        "First aid kits",
        "Gas masks, Safety showers",
        "Emergency lighting",
        "Rescue stretchers",
      ],
      tr: [
        "Döküntü kitleri, Emiciler",
        "İlk yardım kitleri",
        "Gaz maskeleri, Güvenlik duşları",
        "Acil durum aydınlatması",
        "Kurtarma sedyeleri",
      ],
    },
  },
  {
    id: 20,
    name: {
      az: "Rabitə və Şəbəkə Avadanlıqları",
      en: "Communication and Network Equipment",
      tr: "İletişim ve Ağ Ekipmanları",
    },
    icon: "📡",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "Sənaye radioları",
        "Optik kabellər",
        "Şəbəkə avadanlıqları",
        "SCADA, Konsollar",
      ],
      en: [
        "Industrial radios",
        "Fiber optic cables",
        "Network equipment",
        "SCADA, Consoles",
      ],
      tr: [
        "Endüstriyel radyolar",
        "Fiber optik kablolar",
        "Ağ ekipmanları",
        "SCADA, Konsollar",
      ],
    },
  },
  {
    id: 21,
    name: {
      az: "İstilik və Havalandırma Sistemləri (HVAC)",
      en: "Heating, Ventilation, and Air Conditioning (HVAC) Systems",
      tr: "Isıtma, Havalandırma ve İklimlendirme (HVAC) Sistemleri",
    },
    icon: "🌡️",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "Hava emal qurğuları, Borular",
        "Partlayışa davamlı HVAC",
        "Filtrlər, Amortizatorlar",
      ],
      en: [
        "Air handling units, Ducts",
        "Explosion-proof HVAC",
        "Filters, Dampers",
      ],
      tr: [
        "Hava işleme üniteleri, Kanallar",
        "Patlamaya dayanıklı HVAC",
        "Filtreler, Amortisörler",
      ],
    },
  },
  {
    id: 22,
    name: {
      az: "Təhlükəsizlik və Müşahidə Sistemləri",
      en: "Security and Surveillance Systems",
      tr: "Güvenlik ve Gözetim Sistemleri",
    },
    icon: "📹",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
    subcategories: {
      az: [
        "Videomüşahidə sistemləri",
        "Girişə nəzarət",
        "İzinsiz daxilolma aşkarlama",
        "Partlayışa davamlı kameralar",
      ],
      en: [
        "Video surveillance systems",
        "Access control",
        "Intrusion detection",
        "Explosion-proof cameras",
      ],
      tr: [
        "Video gözetim sistemleri",
        "Erişim kontrolü",
        "İzinsiz giriş tespiti",
        "Patlamaya dayanıklı kameralar",
      ],
    },
  },
];

const otherTexts = {
  productType: {
    az: "Məhsul növü",
    en: "Product type",
    tr: "Ürün türü",
  },
  available: {
    az: "Mövcud",
    en: "Available",
    tr: "Mevcut",
  },
};

const ProductsClient = ({ locale }: { locale: "az" | "en" | "tr" }) => {
  return (
    <AnimatedSection id="section-products" className=" bg-white">
      {/* Products Section */}
      <section className="container mx-auto py-20">
        <div className="">
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={category.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Card Header with Image and Icon */}
                {/* Top Image Section */}
                <div className="relative h-48 overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={
                        category.image ||
                        `https://images.unsplash.com/photo-${
                          1500000000000 + index * 123456
                        }?w=400&h=300&fit=crop`
                      }
                      alt={category.name[locale]}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>

                  {/* Bottom left: Icon & Category */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3 z-10">
                    <div className="text-3xl bg-[#ffe500]/20 p-2 rounded-full shadow-lg">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-montserrat drop-shadow-lg">
                        {category.name[locale]}
                      </h3>
                    </div>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-[#ffe500] rounded-full opacity-80"></div>
                </div>

                {/* Body with subcategories tags */}
                <div className="p-5 bg-white">
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories[locale].map(
                      (subcategory, subIndex) => (
                        <span
                          key={subIndex}
                          className="inline-block px-3 py-1.5  text-[#4d4d4d] text-xs font-medium rounded-lg border border-[#ffe500]/20 hover:border-[#ffe500] hover:bg-[#ffe500] hover:text-[#040404] transition-all duration-300 cursor-pointer shadow-sm"
                        >
                          {subcategory}
                        </span>
                      )
                    )}
                  </div>

                  {/* Category info */}
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>
                        {category.subcategories[locale].length} {otherTexts.productType[locale]}
                      </span>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-[#ffe500] rounded-full"></div>
                        <span>{otherTexts.available[locale]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040404]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
    </AnimatedSection>
  );
};

export default ProductsClient;
