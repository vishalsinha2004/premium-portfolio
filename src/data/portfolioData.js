// src/data/portfolioData.js

export const portfolioData = {
  projects: [
    {
      id: 1,
      title: "Parceel (P-Pilot)",
      description: "An on-demand driver and delivery partner application featuring real-time geographic routing and dynamic status toggling.",
      tech: ["React.js", "Django", "Leaflet", "OpenStreetMap"],
      github: "https://github.com/vishalsinha2004", // Replace with actual repo if public
      liveUrl: "https://parceel.onrender.com"
    },
    {
      id: 2,
      title: "Walkvert",
      description: "An outdoor advertising campaign analytics platform providing deep metric visualization and data tracking.",
      tech: ["Django REST", "React.js", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/vishalsinha2004",
      liveUrl: "https://walkvert.netlify.app"
    },
    {
      id: 3,
      title: "Notesroom",
      description: "A full-stack academic note-sharing ecosystem with Brevo OTP email verification and secure cloud storage.",
      tech: ["React.js", "Django", "Supabase S3", "Brevo API"],
      github: "https://github.com/vishalsinha2004",
      liveUrl: "https://notes-room.netlify.app"
    },
    {
      id: 4,
      title: "MyPDF.AI",
      description: "An interactive RAG-based document query system allowing users to chat directly with their PDF files via vector embeddings.",
      tech: ["Python", "Streamlit", "Gemini API", "FAISS"],
      github: "https://github.com/vishalsinha2004",
      liveUrl: "#"
    }
  ]
};