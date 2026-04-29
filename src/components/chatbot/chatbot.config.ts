/**
 * Chatbot Configuration File
 * ===========================
 * Edit this file to add, remove, or modify predefined questions and answers.
 * You can also configure the bot's name, avatar, and welcome message here.
 *
 * To add a new FAQ entry:
 * 1. Add a new object to the `faqData` array below.
 * 2. Provide a unique `id`, a `question`, and an `answer`.
 * 3. Optionally assign a `category` for grouping.
 *
 * For API / AI integration later:
 * - Set `enableApiMode: true` and provide your `apiEndpoint`.
 * - The widget will POST `{ message: string }` and expect `{ reply: string }`.
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ChatbotConfig {
  botName: string;
  botAvatar: string;
  welcomeMessage: string;
  suggestedQuestionsTitle: string;
  typingDelayMs: number;
  responseDelayMs: number;
  enableLocalStorage: boolean;
  storageKey: string;
  enableApiMode: boolean;
  apiEndpoint: string;
}

// ─── Bot Settings ─────────────────────────────────────────────────────────────
export const chatbotConfig: ChatbotConfig = {
  botName: "Universal Assistant",
  botAvatar: "🤖",
  welcomeMessage:
      "Hello! 👋 Welcome to Universal Group. I'm here to help you. Choose a question below or type your own.",
  suggestedQuestionsTitle: "Frequently Asked Questions",
  typingDelayMs: 400,
  responseDelayMs: 1200,
  enableLocalStorage: true,
  storageKey: "ug_chat_history",
  enableApiMode: true,
  apiEndpoint: "/api/chat",
};

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
export const faqData: FaqItem[] = [
  {
    id: "q1",
    category: "General",
    question: "What does Universal Group do?",
    answer:
        "Universal Group is a leading supply and engineering company founded in 1998. We provide strategic supply solutions for B2B and B2G projects, working with 1,200+ international suppliers across dozens of sectors including oil & gas, construction, and shipping.",
  },
  {
    id: "q2",
    category: "General",
    question: "How many years of experience do you have?",
    answer:
        "Universal Group has over 25 years of experience in the industrial sector. Founded in 1998 as 'Universal Makina', we have grown into one of the leading supply companies in Azerbaijan.",
  },
  {
    id: "q3",
    category: "Services",
    question: "What services do you offer?",
    answer:
        "We offer three core services:\n• Supply Solutions – timely delivery of equipment and materials\n• Multimodal International Forwarding & Customs Clearance\n• Technical Consulting, Commissioning & Startup Services",
  },
  {
    id: "q4",
    category: "Services",
    question: "Do you handle international shipping?",
    answer:
        "Yes! We specialize in Multimodal International Forwarding Services. Whether by air, sea, or land, we guarantee smooth transportation across the globe, including customs clearance for stress-free import and export.",
  },
  {
    id: "q5",
    category: "Products",
    question: "What kind of products do you supply?",
    answer:
        "We supply a wide range of industrial products including pipes, valves, actuators, flanges, cables, welding equipment, anti-corrosion paints, personal protective equipment, lifting platforms, compressors, and much more — sourced from 1,200+ international suppliers.",
  },
  {
    id: "q6",
    category: "Products",
    question: "Do you work with international brands?",
    answer:
        "Absolutely! We are official distributors for prestigious brands such as Bosch, Saint Gobain, Klingspor, Telwin, Jotun, ESAB, Lincoln Electric, and Rockwool, among many others.",
  },
  {
    id: "q7",
    category: "Projects",
    question: "What major projects have you worked on?",
    answer:
        "We have contributed to major projects including:\n• COFOT – Crude Oil Fuel Oil Terminal (Turkey)\n• ACE – Azeri Central East (Azerbaijan)\n• Shah Deniz Phase 2 (Azerbaijan)\n• TANAP – Trans Anatolian Natural Gas Pipeline\n• SCPX – South Caucasus Pipeline Expansion",
  },
  {
    id: "q8",
    category: "Projects",
    question: "How many corporate clients do you serve?",
    answer:
        "Universal Group currently serves 150+ corporate clients across government institutions, oil and gas, construction, and shipping sectors. Our clients include BP Azerbaijan, SOCAR, ASCO, and Tecnicas Reunidas.",
  },
  {
    id: "q9",
    category: "Contact",
    question: "How can I contact Universal Group?",
    answer:
        "You can reach us through:\n📧 Email: info@universalgroup.az\n📞 Phone: +994 12 526 66 55\n📞 Mobile: +994 51 555 05 55\n📍 Location: Baku, Azerbaijan\n\nOr visit our Contact Us page for a direct message form.",
  },
  {
    id: "q10",
    category: "Contact",
    question: "Where are you located?",
    answer:
        "Our headquarters is located in Baku, Azerbaijan. We also have operations in Turkey and Georgia through our subsidiary companies Unisan Sanayi Yapi and AZ Global LLC.",
  },
  {
    id: "q11",
    category: "Careers",
    question: "Are there any job openings?",
    answer:
        "Yes! Universal Group regularly opens positions for talented professionals. Visit our Careers page to see current vacancies and submit your application. We value expertise, innovation, and dedication.",
  },
  {
    id: "q12",
    category: "General",
    question: "What is Azlift?",
    answer:
        "Azlift is a subsidiary of Universal Group, operating since 2012. It specializes in the rental and sale of lifting equipment and aerial working platforms, including scissor lifts, telescopic platforms, articulated lifts, and warehouse equipment.",
  },
];

// ─── Category order for display ──────────────────────────────────────────────
export const categoryOrder = ["General", "Services", "Products", "Projects", "Contact", "Careers"];