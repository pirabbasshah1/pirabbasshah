export type Project = {
  id: string;
  title: string;
  tech: string[];
  summary: string[];
  image: string; // path in /public e.g. /projects/solar.jpg
  youtube?: string; // optional YouTube URL for demo (use youtube-nocookie when possible)
};

export const projects: Project[] = [
  {
    id: "solar-panel-anomaly-detection",
    title: "Solar Panel Anomaly Detection System",
    tech: ["TensorFlow", "Keras", "MobileNetV3", "Python"],
    summary: [
      "Built a deep learning model to detect anomalies (dust, cracks, bird drops) on solar panels from real-time images.",
      "Achieved ~95% accuracy; model deployable on local servers.",
      "Target users include solar farm operators and maintenance teams.",
    ],
    image: "/solar.png",
    youtube: "https://www.youtube-nocookie.com/embed/jHjCYa89YjM",
  },
  {
    id: "ai-powered-data-preprocessing-assistant",
    title: "AI-Powered Data Preprocessing Assistant",
    tech: ["Python", "Streamlit", "Together AI SDK", "DeepSeek API"],
    summary: [
      "Built a general-purpose AI assistant for automating data cleaning tasks in CSV files.",
      "Integrated DeepSeek API via Together AI SDK to generate preprocessing code based on user prompts.",
      "Users can upload datasets, view AI-suggested code, apply changes, and download the cleaned version.",
    ],
    image: "/preprocess-general.png",
    youtube: "https://www.youtube-nocookie.com/embed/K2xjk56QLb0",
  },
  {
    id: "nlp-focused-preprocessing-assistant",
    title: "NLP-Focused Data Preprocessing AI Assistant",
    tech: ["Python", "Streamlit", "Together AI SDK", "DeepSeek API"],
    summary: [
      "Upgraded the core assistant into a domain-specific AI tool for NLP tasks, tailored for cleaning and transforming text data.",
      "Empowered users to upload datasets and intelligently select a text column for preprocessing using AI-generated Python code.",
      "Implemented features like column selector, editable code preview, in-app result viewer, and one-click dataset download.",
      "Focused on stopword removal, lemmatization, punctuation cleaning, and normalization, driven by conversational prompts.",
      "Showcased LLM integration, Streamlit UI design, and workflow optimization for scalable AI-first pipelines.",
    ],
    image: "/preprocess-nlp.png",
    youtube: "https://www.youtube-nocookie.com/embed/lBIWDzDX6Ls",
  },
];


