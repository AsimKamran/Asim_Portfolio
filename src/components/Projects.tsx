"use client";
import { motion } from "framer-motion";
import { Github, SolarPanel , Plane, Search, Bot, BugPlay, ShieldUser, GamepadDirectional } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Terrasmart PeakYield",
      subtitle: "Cloud based Solar Tracker App",
      description:
        "Terrasmart PeakYield is a cloud-based solar tracker optimization platform designed to maximize energy output and protect assets through automated weather stowing.",
      duties: [
        "I architected the fault-detection backend onto a lower-cost, high-speed database while optimizing high-latency modules. Additionally, I automated release notes to update in lockstep with equipment software releases, eliminating manual release management.",
        "Led production monitoring and incident investigation using Amazon CloudWatch, application logs, and metrics; identified database locking, query bottlenecks, Lambda issues, and service-level failures through root-cause analysis and implemented targeted reliability improvements",
        "Re-architected a high-volume IoT processing workflow handling 3–4 million messages daily by replacing a monolithic Lambda with four purpose-built, event-driven Lambda services using Amazon SQS, separating telemetry processing, configuration updates, and other workloads to improve scalability, fault isolation, and operational reliability."
      ],
      icon: <SolarPanel size={24} className="text-[#00e5c8]" />,
      tags: ["React", "Node", "RAG", "Postgres", "AWS", "ElasticSearch", "GraphQL", "TanStack", "Docker", "Redis"],
      live: "https://control.terratrak.com/",
      github: null,
      badge: "Live ↗",
      featured: true,
      glow: "hover:shadow-[0_0_40px_rgba(0,229,200,0.2)]",
      border: "hover:border-[#00e5c8]/50",
      accentColor: "text-[#00e5c8]",
      accentBg: "bg-[#00e5c8]/10",
    },
    {
      title: "MySentry",
      subtitle: "AI-powered health-monitoring and workplace accountability platform",
      description:
        "An end-to-end safety and emergency response platform built to safeguard mobile, remote, and on-site workforces through continuous 24/7 monitoring. The system integrates real-time device telemetry, automated vehicle crash detection, instant panic alarm triggers, and encrypted route tracking to connect users with emergency responders without delay.",
      duties: [
        "Developed full-stack features across Next.js, React.js, Node.js, databases, cloud storage, and third-party integrations, contributing to end-to-end product development from frontend through backend and deployment.",
        "Integrated external property listing APIs, transformed and persisted listing data in PostgreSQL, ensuring efficient synchronization and data integrity.",
        "Secure property listing, search, and management features while integrating Stripe payment processing for premium property listings and subscription workflows."
      ],
      icon: <Bot size={24} className="text-[#f5a623]" />,
      tags: ["React.js", "Node.js", "PostgreSQL", "Next.js", "Stripe"],
      live: "https://mysentry.ai/",
      badge: "Live ↗",
      featured: false,
      glow: "hover:shadow-[0_0_40px_rgba(245,166,35,0.15)]",
      border: "hover:border-[#f5a623]/40",
      accentColor: "text-[#00e5c8]",
      accentBg: "bg-[#f5a623]/10",
    },
    {
      title: "AR based Table Tennis Game (FYP)",
      subtitle: "AR Game with Unity, OpenCV & Cloud Anchors",
      description: "An interactive Augmented Reality (AR) Table Tennis game built in Unity and Google ARCore, bringing realistic 3D table tennis physics and gameplay into physical spaces. The application features an adaptive AI opponent for single-player matches alongside a real-time, cross-platform Multiplayer Mode powered by ARCore Cloud Anchors and Photon Networking to synchronize spatial coordinates and game states across two devices.",
      duties: [
        "Integrated 3D table tennis models, plane detection, and spatial anchoring in Unity using Google ARCore, tuning rigid-body physics and collision detection for realistic paddle-ball interactions.",
        "Engineered an adaptive AI opponent using machine learning and trajectory prediction to dynamically adjust shot angles and difficulty for engaging single-player gameplay.",
        "Architected a cross-platform Multiplayer Mode leveraging ARCore Cloud Anchors for shared spatial alignment and Photon Networking (PUN) for low-latency synchronization of ball physics and player movements.",
        "Implemented C# game state management, room matchmaking, and network interpolation to prevent desynchronization across devices during fast-paced rallies."
      ],
      icon: <GamepadDirectional size={24} className="text-purple-400" />,
      tags: ["Python", "C#", "Firebase", "ML ToolKit", "Unity", "ARCore", "OpenCV", "Cloud Anchors"],
      github: "https://github.com/AsimKamran/FYP-ARTT",
      badge: "Live ↗",
      featured: false,
      glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]",
      border: "hover:border-purple-500/40",
      accentColor: "text-[#00e5c8]",
      accentBg: "bg-purple-500/10",
    },
    {
      title: "Iylus",
      subtitle: "Complete smart home and business security solution",
      description:
        "Iylus is an all-in-one smart home and business security platform that combines Artificial Intelligence and IoT hardware into a single unified ecosystem. Engineered to protect residential and commercial properties, the platform seamlessly integrates three core pillars: AI-powered Smart Surveillance for real-time threat detection, continuous 24/7 Alarm Monitoring, and automated Instant Response workflows to keep users and assets safe around the clock.",
      duties: [
        "Designed and Built an IoT 24/7 live monitoring system using AWS IoT Core and Node with PostgreSQL database with aReact dashboard, implementing Firebase Authentication and secure APIs for monitoring and rapid response.",
        "Led cross-functional participation in code reviews, using SQL database queries and Wireshark for deep-level network and database troubleshooting production issues and maintain system performance.",
        "Strengthened application security by implementing JWT-based authentication, role-based access control (RBAC), API authorization, audit logging, input validation, and secure service-to-service communication across backend."
      ],
      icon: <ShieldUser size={24} className="text-emerald-400" />,
      tags: ["React", "Python", "AWS IoT", "Firebase", "Postgresql", "TailwindCSS", "Wireshark"],
      github: null,
      live: "https://linktr.ee/iylusofficial",
      badge: "Live ↗",
      featured: false,
      glow: "hover:shadow-[0_0_40px_rgba(52,211,153,0.15)]",
      border: "hover:border-emerald-500/40",
      accentColor: "text-[#00e5c8]",
      accentBg: "bg-emerald-500/10",
    },
    {
      title: "NestJS-SQS-Transporter",
      subtitle: "Serverless NestJS SQS Message Processor",
      description:
        "A production-ready AWS Lambda worker built on NestJS with a custom SQS transport, processing message batches with partial-failure retries, DynamoDB idempotency, and CloudWatch metrics. It classifies retryable and non-retryable errors, preserves FIFO ordering, and protects downstream services with backoff and circuit breaking. A custom esbuild and SWC pipeline plus a local SQS emulator allow full development and testing without Docker or AWS.",
      duties: [
        "Designed and built a serverless NestJS microservice on AWS Lambda with a custom SQS transport strategy, handling batch processing with partial-failure responses, FIFO ordering and bounded concurrency.",
        "Implemented production-grade reliability features: DynamoDB-backed idempotency, retryable vs non-retryable error classification, jittered retries, a circuit breaker, and structured logging with CloudWatch EMF metrics via AWS Lambda Powertools.",
        "Engineered the build and local-development tooling: an esbuild + SWC bundling pipeline for Nest decorators and ESM-only dependencies, plus an in-memory SQS emulator with visibility timeout, redelivery and DLQ simulation, so developers need no Docker or AWS account."
      ],
      icon: <Bot size={24} className="text-blue-400" />,
      tags: ["NestJS", "TypeScript", "AWS Lambda", "SQS", "DynamoDB", "CloudWatch", "Serverless"],
      github: "https://github.com/AsimKamran/nestjs-sqs-transporter",
      live: "",
      badge: null,
      featured: false,
      glow: "hover:shadow-[0_0_40px_rgba(96,165,250,0.15)]",
      border: "hover:border-blue-500/40",
      accentColor: "text-[#00e5c8]",
      accentBg: "bg-blue-500/10",
    },
    {
      title: "SurvivalCore",
      subtitle: "Test-driven Unity gameplay systems toolkit",
      description:
        "SurvivalCore is a small Unity 2022.3 project built around testable architecture. Core game logic lives in engine-independent C# modules, with thin MonoBehaviour adapters on top. Health, stackable inventory and JSON save/load systems are covered by NUnit EditMode and PlayMode tests. A GitHub Actions pipeline runs the full test suite on every push to keep each change reliable.",
      duties: [
        "Designed and implemented gameplay systems (health, stackable inventory, JSON save/load) as pure C# classes, separated from MonoBehaviours with assembly definitions.",
        "Wrote NUnit EditMode and PlayMode tests covering edge cases, events and validation, 26 tests in all.",
        "Set up a GitHub Actions CI pipeline with GameCI to run both test suites on every push, and managed incremental delivery through a clean git history."
      ],
      icon: <BugPlay size={24} className="text-rose-400" />,
      tags: ["Unity", "C#", "NUnit", "GitHub Actions", "Unity JsonUtility", "GameCI"],
      github: "https://github.com/AsimKamran/SurvivalCore",
      live: "",
      badge: null,
      featured: false,
      glow: "hover:shadow-[0_0_40px_rgba(251,113,133,0.15)]",
      border: "hover:border-rose-500/40",
      accentColor: "text-[#00e5c8]",
      accentBg: "bg-rose-500/10",
    },
  ];

  return (
    <section id="projects" className="py-24 relative z-10 bg-gradient-to-b from-transparent via-[#050c12]/50 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-right mb-16 flex flex-col items-end"
        >
          <p className="text-xs font-mono text-[#00e5c8]/60 uppercase tracking-[0.4em] mb-3">05 / Projects</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)" }}>
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5c8] to-[#f5a623]">PROJECTS</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-[#00e5c8] to-[#f5a623] rounded-full" />
        </motion.div>

        {/* Featured project — full width row */}
        {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className={`glass rounded-2xl p-7 border border-white/8 transition-all duration-500 flex flex-col bg-[#050c12]/40 mb-8 ${project.border} ${project.glow}`}
        >
          <div className="flex justify-between items-start mb-6">
            <div className={`p-3 ${project.accentBg} glass rounded-xl inline-block border border-white/10`}>
              {project.icon}
            </div>
            <div className="flex gap-3 items-center">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  className={`text-xs font-mono ${project.accentColor} border border-current/30 px-3 py-1.5 rounded-full hover:bg-current/10 transition-colors`}>
                  {project.badge}
                </a>
              )}
              {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              )}
              {/* {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className={`${project.accentColor} hover:opacity-70 transition-opacity`}>
                  <ExternalLink size={20} />
                </a>
              )} */}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>{project.title}</h3>
            <p className={`text-xs font-mono ${project.accentColor}/70 uppercase tracking-widest`}>{project.subtitle}</p>
          </div>
          <p className="text-gray-400 mb-6 leading-relaxed text-sm font-mono">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-white/5">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-xs font-mono text-gray-400 bg-white/4 px-2.5 py-1 rounded-md border border-white/8 mb-6 mt-auto">{tag}</span>
            ))}
            <ul className="list-disc pl-5 space-y-2 mb-6 mt-auto">
              <p className={`text-s font-mono ${project.accentColor}/70 uppercase tracking-widest `}>What I Did</p>
          {project.duties.map((duty, index) => (
            <li 
              key={index} 
              className="text-gray-400 leading-relaxed text-sm font-mono"
            >
              {duty}
            </li>
          ))}
        </ul>
          </div>
        </motion.div>
        ))}
        

        

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/AsimKamran"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#00e5c8]/30 text-[#00e5c8] rounded-full hover:bg-[#00e5c8]/10 transition-all glass font-mono text-sm uppercase tracking-widest"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
