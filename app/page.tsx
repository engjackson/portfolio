"use client";

import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {
  BrainCircuit,
  Sparkles,
  Rocket,
  LineChart,
  Globe2,
  HeartPulse,
  Building2,
  Cpu,
} from "lucide-react";

const experience = [
  {
    company: "Jaarky (Consulting)",
    role: "Product & AI Consultant",
    period: "Jan 2025 – Present",
    summary:
      "Providing product, AI, and technical consulting across learning platforms, hospitality, and real estate — helping teams ship cleaner experiences, improve engagement, and modernize digital presence.",
    bullets: [
      "Led product delivery for AI-powered learning experiences for the Microsoft Teams AI Learning Community, shaping gamified modules and improving engagement.",
      "Designed and shipped modern web experiences such as Ping’s NYC using Next.js, improving navigation, SEO, mobile performance, and analytics instrumentation.",
      "Advised real estate clients on digital workflows, website templates, analytics, and technical integrations to improve lead capture and usability.",
      "Provided fractional product consulting including discovery, roadmapping, UX improvements, and platform optimization."
    ],
    tags: ["AI", "Consulting", "Web Platforms"],
  },

  {
    company: "Acquired Taste",
    role: "Founder & Product Lead",
    period: "Aug 2025 – Present",
    summary:
      "Building a gamified food journey app that helps people expand their palate, capture meaningful food memories, and learn global culture through cuisine.",
    bullets: [
      "Leading end-to-end product strategy, UX, engineering direction, and experimentation.",
      "Developing AI-assisted prompts, cultural storytelling, and personalized challenges.",
      "Designing mobile and web experiences that blend journaling, gamification, and discovery.",
    ],
    tags: ["Founder", "0→1", "AI", "Gamification"],
  },
  {
    company: "DVORA",
    role: "Senior Product Manager",
    period: "Sep 2023 – May 2024",
    summary:
      "Led product strategy for a multi-sided real estate SaaS platform and mobile apps serving landlords, residents, and service providers.",
    bullets: [
      "Designed Power BI dashboards surfacing property performance and engagement, boosting adoption by 35%.",
      "Used data-driven prioritization to improve in-app support and raise CSAT from 3.14 to 4.93.",
      "Mentored junior PMs on user research and agile practices, fostering a product-led culture.",
    ],
    tags: ["SaaS", "Real Estate", "Analytics"],
  },
  {
    company: "FocusCalm (BrainCo)",
    role: "Head of Product",
    period: "May 2022 – Feb 2023",
    summary:
      "Led product and engineering for a B2C wearable wellness platform leveraging EEG and behavioral analytics.",
    bullets: [
      "Defined vision and roadmap for a new SaaS + mobile platform that doubled revenue.",
      "Launched AI-driven coaching and experiences, boosting retention by 63% in three months.",
      "Introduced experimentation and OKRs, enabling faster, user-centric decisions.",
    ],
    tags: ["Wearables", "Wellness", "AI"],
  },
  {
    company: "Breethe",
    role: "Director of Product",
    period: "Jul 2020 – Jun 2022",
    summary:
      "Directed global product strategy for a top-ranked wellness app with 10M+ downloads.",
    bullets: [
      "Scaled a subscription-based platform to 10M+ downloads, increasing retention by 18%.",
      "Drove personalization across the funnel, lifting new user conversions by 22%.",
      "Launched an AI-powered recommendation engine that increased engagement by 35%.",
    ],
    tags: ["Mobile", "Wellness", "Personalization"],
  },
  {
    company: "Piñata",
    role: "Founding Product Manager",
    period: "Feb 2019 – Jan 2020",
    summary:
      "Built and launched a B2B2C mobile rent payment platform that rewards renters for on-time payments.",
    bullets: [
      "Translated concept into a functional SaaS and mobile platform within 6 months.",
      "Led end-to-end product lifecycle from discovery to GTM and early partnerships.",
      "Hired and managed the initial product team, instilling a rapid-iteration culture.",
    ],
    tags: ["Fintech", "B2B2C", "0→1"],
  },
  {
    company: "Unified (iHeartMedia Company)",
    role: "Technical Product Manager",
    period: "Sep 2017 – Dec 2018",
    summary:
      "Led a cross-functional team to build a B2B SaaS platform for audience intelligence used by Fortune 500 clients.",
    bullets: [
      "Defined strategy and execution of a new revenue-generating product using 1st and 3rd party data.",
      "Built real-time KPI dashboards integrating multiple data sources, improving efficiency by 45%.",
    ],
    tags: ["B2B SaaS", "AdTech", "Data Platforms"],
  },
];

const projects = [
  {
    name: "DVORA – Real Estate SaaS & Resident App",
    role: "Senior Product Manager",
    impact: [
      "35% increase in platform adoption via new analytics and in-app insights.",
      "CSAT improved from 3.14 to 4.93 through support and UX improvements.",
    ],
    description:
      "Multi-sided real estate platform connecting landlords, residents, and service providers through web and mobile.",
    theme: "Real Estate · SaaS · Analytics",
  },
  {
    name: "FocusCalm – EEG Wearable Wellness Platform",
    role: "Head of Product",
    impact: [
      "2× revenue growth after launching new SaaS + mobile experience.",
      "63% retention lift driven by AI-powered coaching and better onboarding.",
    ],
    description:
      "Wearable EEG headband and mobile app that helps people train calm and focus through games, exercises, and meditations.",
    theme: "Wearables · AI · Wellness",
  },
  {
    name: "Breethe – Global Meditation App",
    role: "Director of Product",
    impact: [
      "Scaled platform to 10M+ downloads.",
      "18% retention increase and 22% lift in new user conversions.",
      "35% engagement increase via AI-powered personalization engine.",
    ],
    description:
      "Subscription-based wellness app with sleep, meditation, and mindfulness content personalized to user goals.",
    theme: "Mobile · Subscription · Personalization",
  },
  {
    name: "Piñata – Rent Rewards Platform",
    role: "Founding Product Manager",
    impact: [
      "MVP designed, built, and launched in 6 months.",
      "Established early product-market fit and partnerships.",
    ],
    description:
      "B2B2C rent payment platform that rewards renters for on-time payments and boosts their credit.",
    theme: "Fintech · Marketplace · 0→1",
  },
];

const statStrip = [
  { label: "Years in Product & Tech", value: "18+" },
  { label: "End-to-End Products Shipped", value: "50+" },
  { label: "Users Impacted Across Platforms", value: "10M+" },
  { label: "Industries", value: "SaaS • Wellness • Fintech" },
];

const skills = [
  {
    category: "Product Leadership",
    items: [
      "Vision & Roadmapping",
      "Outcome-Driven OKRs",
      "Cross-Functional Alignment",
      "Exec & Stakeholder Communication",
    ],
  },
  {
    category: "AI & Data",
    items: [
      "AI-Powered Experiences",
      "Personalization Engines",
      "Experimentation & A/B Testing",
      "SQL & Dashboarding (Power BI, etc.)",
    ],
  },
  {
    category: "Delivery & Execution",
    items: [
      "0→1 MVPs & 1→10 Scaling",
      "Agile & Iterative Delivery",
      "Technical Discovery & Scoping",
      "Platform & Mobile Integration",
    ],
  },
  {
    category: "Domains",
    items: [
      "Wellness & Mental Health",
      "Fintech & Rent Rewards",
      "Real Estate SaaS",
      "Audience Intelligence & AdTech",
    ],
  },
];

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 pt-24 pb-16 lg:px-0">
        {/* HERO */}
        <section className="pt-10">
          <div className="grid gap-10 md:grid-cols-[2fr,1.6fr] md:items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700"
              >
                <Sparkles size={14} />
                Product & AI Leader · Founder of Acquired Taste
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-zinc-900"
              >
                Building data-informed, AI-powered products{" "}
                <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-transparent">
                  that people actually love to use.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 max-w-xl text-sm text-zinc-600 sm:text-base"
              >
                I’m a product and technical leader with 7+ years in
                product management and another decade in software, ops, and
                project delivery. I turn messy, cross-functional problems into
                focused roadmaps, AI-powered experiences, and measurable
                outcomes across wellness, fintech, real estate SaaS, and beyond.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 transition-colors"
                >
                  <Rocket size={16} />
                  View Featured Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-800 hover:border-zinc-500 transition-colors"
                >
                  Open to opportunities
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 grid gap-4 text-xs text-zinc-600 sm:grid-cols-3 sm:text-sm"
              >
                <HeroStat
                  label="AI & Automation at Scale"
                  value="35–63% lifts"
                  detail="From personalization engines to AI coaches and companion apps."
                />
                <HeroStat
                  label="Mobile & Connected Experience"
                  value="10M+ users"
                  detail="Scaled B2C wellness platforms and multi-sided SaaS ecosystems."
                />
                <HeroStat
                  label="Data-Driven Execution"
                  value="20–57% gains"
                  detail="Efficiency, renewal, and engagement improvements across platforms."
                />
              </motion.div>
            </div>

            {/* Right side highlight card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-100 blur-3xl" />
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                  <BrainCircuit size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700">
                    Active Focus
                  </p>
                  <p className="text-sm text-zinc-900">
                    AI Learning · Wellness · Food Culture 
                  </p>
                </div>
              </div>
<div className="mt-4 space-y-2 text-xs text-zinc-600">
  <p>
    Currently consulting through{" "}
    <span className="font-semibold text-zinc-900">Jaarky</span> on 
    AI-powered learning experiences, including work with the Microsoft Teams
    AI Learning Community while also building{" "}
    <span className="font-semibold text-zinc-900">Acquired Taste</span>,
    a gamified food-culture discovery platform.
  </p>

  <p>
    My active focus blends AI, user behavior, and thoughtful product design:
    shaping learning companions, modern web experiences for businesses,
    and a founder-led 0→1 consumer app rooted in global food exploration.
  </p>

  <p>
    I bring a founder mindset, tight feedback loops, fast
    iteration, data-informed decisions, and a bias toward building products
    that feel simple, intuitive, and genuinely helpful.
  </p>
</div>
            </motion.div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="mt-12" aria-label="Career stats">
          <div className="grid gap-4 rounded-3xl border border-zinc-200 bg-zinc-50 p-5 sm:grid-cols-2 lg:grid-cols-4">
            {statStrip.map((item) => (
              <div key={item.label}>
                <div className="text-xl font-semibold text-zinc-900">
                  {item.value}
                </div>
                <div className="mt-1 text-xs text-zinc-600">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" title="About" eyebrow="Story & Context">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4 text-sm text-zinc-700">
              <p>
                I didn&apos;t start in Big Tech. I started in{" "}
                <span className="font-semibold">supply chain & operations</span>{" "}
                in 2006, learning how systems, constraints, and dependencies
                shape what&apos;s possible.
              </p>
              <p>
                That evolved into{" "}
                <span className="font-semibold">
                  business analysis, operations, and customer service
                </span>
                , where I learned to translate real-world problems into systems
                that actually work. Project management came next, leading
                teams, negotiating tradeoffs, and shipping reliably.
              </p>
              <p>
  In 2012, as a{" "}
  <span className="font-semibold">Technical Project Manager at Bluespire</span>, I
  built software and digital experiences for healthcare and financial services.
  I gained deep exposure to privacy, integrations, and patient/member communications —
  the kinds of real-world constraints that shape what a product can or cannot do.
</p>

<p>
  After delivering more than <span className="font-semibold">75+ digital projects</span>,
  I realized something important. As a project manager, I was always handing work off
  right when things were getting interesting. I could launch a project, but I never got
  to stay with it, to learn from users, shape the strategy, iterate, or make it better.
</p>

<p>
  In 2017, I made the transition into{" "}
  <span className="font-semibold">startups and product leadership</span> because I wanted
  to own the full lifecycle: the strategy, the build, the feedback, the rapid learning,
  and the continuous improvements that turn a product from “shipped” into
  <span className="font-semibold">something people actually love</span>.
  Since then, I’ve led 0→1 builds, 1→10 scaling, AI-powered personalization, and
  high-stakes mobile experiences across adtech, fintech, wellness, and AI.
</p>
           <p>
  Today, I blend that history into a consistent approach:{" "}
  <span className="font-semibold">
    build products that feel simple, informed, and surprisingly human
  </span>
   even when everything under the hood is complex. Every role along the way
  sharpened my instincts, my curiosity, and my approach. I lead the way I do
  because of the path that brought me here.
</p>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-xs text-zinc-700">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700">
                  What I believe
                </p>
                <ul className="mt-3 space-y-2">
                  <li>• Products should reduce cognitive load, not add to it.</li>
                  <li>
                    • AI is most powerful when it augments people, not replaces
                    them.
                  </li>
                  <li>
                    • Data is only useful when it changes what you decide to do
                    next.
                  </li>
                  <li>
                    • The best roadmap is the one the team actually understands
                    and believes in.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-700">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-700">
                  Focus areas
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <TagPill icon={<HeartPulse size={12} />} label="Wellness & Mental Health" />
                  <TagPill icon={<Building2 size={12} />} label="Real Estate SaaS" />
                  <TagPill icon={<LineChart size={12} />} label="Fintech & Rent Rewards" />
                  <TagPill icon={<Cpu size={12} />} label="AI-Powered Experiences" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section
          id="experience"
          title="Experience"
          eyebrow="Career Timeline"
      
        >
          <div className="space-y-8">
            {experience.map((item) => (
              <motion.article
                key={item.company + item.role}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45 }}
                className="relative rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 sm:text-base">
                      {item.role}
                    </h3>
                    <p className="text-xs text-zinc-600">{item.company}</p>
                  </div>
                  <p className="text-[11px] text-zinc-500 uppercase tracking-[0.16em]">
                    {item.period}
                  </p>
                </div>

                <p className="mt-3 text-xs text-zinc-700 sm:text-sm">
                  {item.summary}
                </p>

                <ul className="mt-3 space-y-1.5 text-xs text-zinc-700 sm:text-sm">
                  {item.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section
          id="projects"
          title="Featured Work"
          eyebrow="Selected Case Studies"
          description="A sample of platforms I’ve helped shape — from 10M+ user wellness apps to 0→1 fintech and real estate SaaS."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((proj) => (
              <motion.article
                key={proj.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-sm font-semibold text-zinc-900 sm:text-base">
                  {proj.name}
                </h3>
                <p className="mt-1 text-xs text-amber-700">{proj.role}</p>
                <p className="mt-2 text-xs text-zinc-700 sm:text-sm">
                  {proj.description}
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-zinc-700 sm:text-sm">
                  {proj.impact.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
                <div className="mt-3 text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                  {proj.theme}
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        {/* ACQUIRED TASTE */}
        <Section
          id="acquired-taste"
          title="Acquired Taste"
          eyebrow="Founder · 0→1 Product"
          description="A gamified food journey app that helps people stretch their palate, capture meaningful food memories, and learn global culture through cuisine."
        >
          <div className="grid gap-8 md:grid-cols-[1.6fr,1.4fr] md:items-center">
            <div className="space-y-4 text-sm text-zinc-700">
              <p>
                Acquired Taste is my ongoing founder project that is like a{" "}
                <span className="font-semibold">
                  Duolingo-style food exploration and journaling app
                </span>{" "}
                that turns trying new dishes into a playful, trackable, and
                culturally rich experience.
              </p>
              <p>
  Users earn badges and stamps in a digital “food passport,” complete quests around cuisines,
  ingredients, and traditions, and log their reactions over time as their palate evolves.
  The journal also becomes a personal archive, a place to save dishes, recipes,
  restaurants, and food memories they want to return to.
</p>

<p>
  Over time, the platform will evolve into a{" "}
  <span className="font-semibold">personalized food companion</span>: helping users
  rediscover meals they loved, avoid what they didn't, and explore new dishes based on
  their tastes, comfort level, and curiosity. AI will play a role in surfacing context,
  generating challenges, and eventually recommending what to try next, not just showing
  recipes, but guiding a journey.
              </p>
              <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-zinc-700">
                <li>• Digital food passport with stamps, badges, and streaks.</li>
                <li>• Journaling and reflection across dining out, travel, and home cooking.</li>
                <li>• AI-assisted prompts, challenges, and cultural storytelling.</li>
                <li>• Gamified progress for individuals, families, and communities.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                  <Globe2 size={14} />
                  <span>Product Snapshot</span>
                </div>
                <div className="mt-3 grid gap-3 text-xs text-zinc-800">
                  <div>
                    <div className="text-[11px] text-zinc-500">Vision</div>
                    <div>
                      Connect the world through food by turning meals into stories,
memories, and cultural bridges.
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-500">Role</div>
                    <div>
                      Founder & Product Lead – strategy, UX,
                      data, engineering, and development.
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-500">Stack</div>
                    <div>
                      Next.js, React, Tailwind, Firebase, analytics,
                      AI/LLM APIs.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-xs text-zinc-700">
                <p className="font-semibold text-zinc-900">
                  Why this matters in my portfolio
                </p>
                <p className="mt-2">
  Acquired Taste showcases my ability to own a product end to end: research,
  positioning, gamification, UX, technical design, data strategy, and shipping.
  It also keeps me sharp, giving me space to explore emerging technologies,
  experiment with AI and growth ideas, stay close to industry trends, and follow
  my passion for learning and trying new food. You can see the project at{" "}
  <a
    href="https://acquiredtaste.app"
    target="_blank"
    rel="noreferrer"
    className="font-semibold text-amber-700 hover:underline"
  >
    acquiredtaste.app
  </a>.
</p>
              </div>
            </div>
          </div>
        </Section>

        {/* SKILLS */}
        <Section
          id="skills"
          title="Skills & Focus"
          eyebrow="How I Work"
          description="I combine hands-on technical understanding with product strategy, experimentation, and a strong bias toward measurable impact."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-zinc-200 bg-white p-4 text-xs text-zinc-700"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                  {group.category}
                </div>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((skill) => (
                    <li key={skill}>• {skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section
          id="contact"
          title="Let’s Talk"
          eyebrow="Next Chapter"
          description="I’m open to Senior PM, Lead PM, or Director-level roles where AI, data, and thoughtful design are core to the product."
        >
          <div className="grid gap-8 md:grid-cols-[1.6fr,1.4fr] md:items-center">
            <div className="space-y-4 text-sm text-zinc-700">
              <p>
                If you&apos;re building something at the intersection of{" "}
                <span className="font-semibold">
                  AI, wellness, fintech, education, or consumer experience
                </span>
                , I’d love to talk.
              </p>
              <p>
                I bring the ability to move between strategy and execution
                quickly — aligning stakeholders on outcomes, collaborating
                closely with engineering and design, and using data to make bold
                but informed bets.
              </p>
              <p>
                Whether it&apos;s leveling up an existing product, launching a
                new AI-driven initiative, or owning a new business line, I&apos;m
                excited to help shape what&apos;s next.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:jackson.eng@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 transition-colors"
                >
                  Contact me via email
                </a>
                <a
                  href="https://www.linkedin.com/in/jacksoneng/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-800 hover:border-zinc-500 transition-colors"
                >
                  View LinkedIn
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-700">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                Snapshot
              </p>
              <ul className="mt-3 space-y-2">
                <li>• 7+ years in product management plus 7–8 years in technical and ops roles.</li>
                <li>• Experience leading remote, hybrid, and global teams.</li>
                <li>• Comfortable partnering with execs, customers, and hands-on ICs alike.</li>
              </ul>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

function Section({
  id,
  title,
  eyebrow,
  description,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-16 scroll-mt-24">
      <div className="mb-6 space-y-2">
        {eyebrow && (
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-700">
            {eyebrow}
          </p>
        )}
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl text-zinc-900">
          {title}
        </h2>
        {description && (
          <p className="max-w-2xl text-xs text-zinc-600 sm:text-sm">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

function HeroStat({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div>
      <div className="text-sm font-semibold text-zinc-900">{value}</div>
      <div className="mt-1 text-xs text-zinc-700">{label}</div>
      <div className="mt-1 text-[11px] text-zinc-500">{detail}</div>
    </div>
  );
}

function TagPill({
  label,
  icon,
}: {
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] text-zinc-700">
      {icon}
      <span>{label}</span>
    </div>
  );
}