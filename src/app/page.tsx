"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectsGrid from "@/components/ProjectsGrid";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";

// component now imported from components/ProjectsGrid

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = ['/Backv1.mp4', '/backv2.mp4', '/backv3.mp4', '/backv4.mp4'];

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach((video, index) => {
      if (index === currentVideo) {
        video.currentTime = 0;
        video.play();
      }
    });
  }, [currentVideo]);

  return (
    <div className="space-y-24">
      <section
        id="hero"
        className="scroll-mt-24 relative overflow-hidden min-h-[100vh] w-full"
      >
        {videos.map((video, index) => (
          <video
            key={`${video}-${index}`}
            muted
            playsInline
            onEnded={handleVideoEnd}
            className={`absolute inset-0 w-full h-vh280 object-cover transition-opacity duration-1000 ${
              index === currentVideo ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ filter: 'blur(0px)' }}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
        <div className="relative z-10 px-6 py-10 sm:py-14 bg-black/00 text-white">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Pir Abbas Shah — Data Scientist & AI Engineer
            </h1>
            <p className="mt-4 text-base sm:text-lg max-w-2xl">
              Data Scientist & AI Engineer specializing in data analytics, machine learning,
              and AI applications that turn complex data into actionable insights.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" aria-hidden />
      </section>

      <motion.section 
        id="about" 
        className="scroll-mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold">About</h2>
        <p className="mt-3 opacity-80 max-w-3xl">
          Data Scientist & AI Engineer specializing in data analytics, machine learning, and
          AI applications that turn complex data into actionable insights.
        </p>
      </motion.section>

      <motion.section 
        id="skills" 
        className="scroll-mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold">Skills</h2>
        <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
          {['Python', 'TensorFlow / PyTorch', 'LLMs & RAG', 'SQL', 'Power BI', 'Tableau', 'OpenAI - Workflows Automation', 'Data Wrangling', 'Data Visualization & Dashboards', 'Big Data Analytics & Predictive Modeling'].map((skill, index) => (
            <motion.li
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.section 
        id="experience" 
        className="scroll-mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold">Experience</h2>
        <div className="mt-3 space-y-4 text-sm">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="font-medium">AI/ML Intern @ Veevo Tech</p>
            <p className="opacity-80">August 2025 - Present </p>
            <p className="opacity-80">• At Veevo Tech, I contribute to the Innovation & Research department by developing AI-driven solutions that enhance automation, data analytics, and intelligent decision-making for real-world business applications.</p>
          </motion.div>
        </div>
      </motion.section>

      <section id="education" className="scroll-mt-24">
        <h2 className="text-xl sm:text-2xl font-semibold">Education</h2>
        <div className="mt-4 space-y-4">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="rounded-lg border p-4 flex items-start gap-4"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'rgba(128,128,128,0.2)'
              }}
            >
              {edu.logo && (
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className="w-12 h-12 object-contain flex-shrink-0"
                />
              )}
              <div className="flex-1">
                <h3 className="font-medium">{edu.degree}</h3>
                <p className="text-sm opacity-80 mt-1">{edu.institution}</p>
                <p className="text-sm opacity-60 mt-1">{edu.location} • {edu.startYear} - {edu.endYear}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <motion.section 
        id="certifications" 
        className="scroll-mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold">Certifications</h2>
        {certifications.length > 0 ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="rounded-lg border p-4 relative"
                style={{
                  backgroundColor: 'var(--background)',
                  borderColor: 'rgba(128,128,128,0.2)'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {cert.logo && (
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="absolute top-3 right-3 w-12 h-12 object-contain"
                  />
                )}
                <h3 className="font-medium pr-12">{cert.title}</h3>
                <p className="text-sm opacity-80 mt-1">{cert.issuer}</p>
                <p className="text-sm opacity-60 mt-1">{cert.date}</p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm underline hover:no-underline"
                  >
                    Verify
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="mt-3 opacity-80 text-sm">Certifications will be displayed here.</p>
        )}
      </motion.section>

      <motion.section 
        id="projects" 
        className="scroll-mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold">Projects</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ProjectsGrid />
        </motion.div>
      </motion.section>

      <motion.section 
        id="contact" 
        className="scroll-mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold">Contact</h2>
        <motion.p 
          className="mt-3 opacity-80 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Reach out via email at <a href="mailto:abbashahpir@gmail.com" className="underline">abbashahpir@gmail.com</a>
        </motion.p>
      </motion.section>
    </div>
  );
}
