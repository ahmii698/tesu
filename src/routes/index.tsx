import { createFileRoute } from "@tanstack/react-router";
import {
  Send,
  MessageCircle,
  Globe,
  Music2,
  BookOpen,
  MessagesSquare,
  Dumbbell,
  Apple,
  HeartPulse,
  Newspaper,
  Users,
  Microscope,
  Flame,
  Lock,
  Copy,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import heroImg from "../assets/hero-bodybuilder.jpg";
import logoImg from "../assets/logo.jpeg";
import TransformationSection from "../components/TransformationSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MR ANABOLIC — Underground Research & Performance Community" },
      {
        name: "description",
        content:
          "Private community for bodybuilding research, performance, training, recovery, and supplement discussions. Join MR ANABOLIC on Telegram.",
      },
    ],
  }),
});

const TELEGRAM_URL = "https://t.me/mranabolic";

function Nav() {
  const links = [
    ["About", "#about"],
    ["What You'll Find", "#find"],
    ["Why Join", "#why"],
    ["Rules", "#rules"],
    ["Transformations", "#transformations"],
    ["Contact", "#contact"],
  ];
  return (
    <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 py-5">
      <a href="#" className="flex items-center">
        {/* CHANGE: Logo size double - h-10 se h-20 */}
        <img src={logoImg} alt="MR ANABOLIC" className="h-20 w-auto" />
      </a>
      <ul className="hidden md:flex items-center gap-8 text-sm text-white/90">
        {links.map(([l, h]) => (
          <li key={l}>
            <a href={h} className="hover:text-primary transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
      <a
        href={TELEGRAM_URL}
        className="inline-flex items-center gap-2 rounded-md border-2 border-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary transition-colors"
      >
        <Send className="h-4 w-4" /> JOIN TELEGRAM
      </a>
    </nav>
  );
}

function Hero() {
  const features = [
    { icon: BookOpen, label: "Research", sub: "Content" },
    { icon: MessagesSquare, label: "Community", sub: "Discussions" },
    { icon: Dumbbell, label: "Transformation", sub: "Motivation" },
    { icon: HeartPulse, label: "Training &", sub: "Nutrition Advice" },
    { icon: Newspaper, label: "Industry News", sub: "& Updates" },
    { icon: Send, label: "Telegram", sub: "Community Access" },
  ];
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <Nav />
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Bodybuilder back pose in dark gym"
          className="absolute right-0 top-0 h-full w-full md:w-3/5 object-cover object-center"
          width={1280}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 md:via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 px-6 md:px-12 pt-32 pb-16 max-w-7xl mx-auto">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs tracking-wide text-white/90">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          WELCOME TO MR ANABOLIC
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white">
          THE UNDERGROUND
          <br />
          <span className="text-primary">RESEARCH & PERFORMANCE</span>
          <br />
          COMMUNITY
        </h1>
        <p className="mt-6 text-lg text-white/90 font-medium">
          Real discussions. Research-based content. Community support.
        </p>
        <p className="mt-6 max-w-xl text-sm md:text-base text-white/70 leading-relaxed">
          MR ANABOLIC is a private community built for people interested in
          performance enhancement, bodybuilding research, training optimisation,
          recovery strategies, and supplement discussions.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl">
          {features.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-start gap-2">
              <div className="rounded border border-primary/40 p-1.5">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="text-xs leading-tight text-white/90">
                <div className="font-semibold">{label}</div>
                <div className="text-white/60">{sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-xs font-bold tracking-widest text-primary mb-4">
            JOIN THE COMMUNITY TODAY
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={TELEGRAM_URL}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-white shadow-[0_0_30px_-5px] shadow-primary/60 hover:bg-primary/90 transition"
            >
              <Send className="h-4 w-4" /> JOIN TELEGRAM
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-bold text-white hover:border-primary hover:text-primary transition"
            >
              <MessageCircle className="h-4 w-4" /> CONTACT ON ZANGI
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-bold text-white hover:border-primary hover:text-primary transition"
            >
              <Globe className="h-4 w-4" /> REDDIT COMMUNITY
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-bold text-white hover:border-primary hover:text-primary transition"
            >
              <Music2 className="h-4 w-4" /> FOLLOW ON TIKTOK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const points = [
    "Learn from shared experiences",
    "Discuss training and nutrition",
    "Stay updated with industry trends",
    "Explore educational research content",
    "Connect with others in the fitness community",
    "Access exclusive updates and discussions",
  ];
  return (
    <section id="about" className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative rounded-lg overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/20 to-background aspect-square md:aspect-auto md:h-80 flex items-center justify-center">
          {/* CHANGE: About section logo bhi bada - max-w-[80%] se max-w-full kiya */}
          <img src={logoImg} alt="MR ANABOLIC logo" className="max-w-full h-auto w-48" loading="lazy" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
            ABOUT <span className="text-primary">MR ANABOLIC</span>
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            MR ANABOLIC was created for individuals who are passionate about
            bodybuilding, performance, training progression, and research-based
            discussions.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            Our community is designed to bring together like-minded people who want to:
          </p>
          <ul className="mt-5 grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-white/85">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-white/70 leading-relaxed text-sm">
            Whether you're experienced in the fitness industry or just starting your
            journey, MR ANABOLIC gives you a place to learn, interact, and grow with
            the community.
          </p>
        </div>
      </div>
    </section>
  );
}

function Find() {
  const cards = [
    {
      icon: BookOpen,
      title: "Research & Educational Content",
      body: "In-depth educational discussions on training methods, recovery, supplements, and bodybuilding science.",
    },
    {
      icon: MessagesSquare,
      title: "Community Discussions",
      body: "Connect and share with a growing community passionate about fitness and performance.",
    },
    {
      icon: Dumbbell,
      title: "Training & Performance Optimisation",
      body: "Explore training techniques, program design, periodization and performance improvement.",
    },
    {
      icon: Apple,
      title: "Nutrition Strategies",
      body: "Learn about nutrition principles, meal planning, diet phases and optimal fueling strategies.",
    },
    {
      icon: HeartPulse,
      title: "Recovery & Health",
      body: "Recovery protocols, sleep, stress management and overall health optimization.",
    },
    {
      icon: Newspaper,
      title: "Industry News & Updates",
      body: "Stay updated with the latest news, research and trends in the fitness and supplement industry.",
    },
  ];
  return (
    <section id="find" className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
          WHAT YOU'LL <span className="text-primary">FIND INSIDE</span>
        </h2>
        <div className="mt-3 mx-auto h-1 w-16 bg-primary rounded" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {cards.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="rounded-lg border border-white/10 bg-card p-5 hover:border-primary/60 hover:shadow-[0_0_25px_-5px] hover:shadow-primary/40 transition"
          >
            <div className="inline-flex rounded-md bg-primary/15 p-3 mb-4">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-white text-sm mb-2">{title}</h3>
            <p className="text-xs text-white/60 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Why() {
  const items = [
    {
      icon: Users,
      title: "COMMUNITY DRIVEN",
      body: "Built around real conversations and shared experiences from people who are on the same fitness journey.",
    },
    {
      icon: Microscope,
      title: "RESEARCH FOCUSED",
      body: "Educational and discussion-based content for people interested in fitness and performance optimisation.",
    },
    {
      icon: Flame,
      title: "MOTIVATION & ACCOUNTABILITY",
      body: "Stay motivated with a community of like-minded individuals pushing toward their goals.",
    },
    {
      icon: Lock,
      title: "PRIVATE TELEGRAM ACCESS",
      body: "Join a fast-growing private community and stay connected with exclusive content and discussions.",
    },
  ];
  return (
    <section id="why" className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
          WHY JOIN <span className="text-primary">MR ANABOLIC?</span>
        </h2>
        <div className="mt-3 mx-auto h-1 w-16 bg-primary rounded" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="rounded-lg border border-white/10 bg-card p-6 text-center hover:border-primary/60 transition"
          >
            <div className="inline-flex rounded-full border border-primary/40 p-4 mb-4">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-bold text-white text-sm mb-3 tracking-wide">{title}</h3>
            <p className="text-xs text-white/60 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TransformationWrapper() {
  return (
    <section id="transformations" className="py-20">
      <TransformationSection />
    </section>
  );
}

function Rules() {
  const rules = [
    "Respect all members",
    "No spam or external promotions",
    "No harassment or abuse",
    "Keep discussions constructive",
    "Follow all platform guidelines",
    "Educational and discussion purposes only",
  ];
  return (
    <section id="rules" className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
          COMMUNITY <span className="text-primary">RULES</span>
        </h2>
        <div className="mt-3 mx-auto h-1 w-16 bg-primary rounded" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {rules.map((r) => (
          <div key={r} className="flex flex-col items-center text-center gap-2">
            <div className="rounded-full border border-primary/40 p-3">
              <XCircle className="h-5 w-5 text-primary" />
            </div>
            <p className="text-xs text-white/80 leading-snug">{r}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="px-6 md:px-12 py-10 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/30 via-background to-background p-10 md:p-16">
        <img
          src={heroImg}
          alt=""
          className="absolute left-0 top-0 h-full w-1/2 object-cover opacity-30 pointer-events-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-background/0" />
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            READY TO JOIN
            <br />
            <span className="text-primary">THE COMMUNITY?</span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-sm md:text-base text-white/75">
            Join MR ANABOLIC today and become part of a growing research and fitness
            community focused on education, discussions, and motivation.
          </p>
          <a
            href={TELEGRAM_URL}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-sm font-bold text-white shadow-[0_0_40px_-5px] shadow-primary/70 hover:bg-primary/90 transition"
          >
            <Send className="h-4 w-4" /> JOIN THE TELEGRAM COMMUNITY
          </a>
          <div className="mt-5 inline-flex items-center gap-2 text-xs text-white/70">
            Telegram Link: <span className="font-mono text-white">t.me/mranabolic</span>
            <Copy className="h-3.5 w-3.5 cursor-pointer hover:text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
        <div>
          {/* CHANGE: Footer logo size double - h-12 se h-24 */}
          <img src={logoImg} alt="MR ANABOLIC" className="h-24 w-auto" loading="lazy" />
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">QUICK LINKS</h4>
          <ul className="space-y-2 text-white/70">
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#find" className="hover:text-primary">What You'll Find</a></li>
            <li><a href="#why" className="hover:text-primary">Why Join</a></li>
            <li><a href="#transformations" className="hover:text-primary">Transformations</a></li>
            <li><a href="#rules" className="hover:text-primary">Rules</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">COMMUNITY</h4>
          <ul className="space-y-2">
            <li><a href={TELEGRAM_URL} className="inline-flex items-center gap-2 text-white/80 hover:text-primary"><Send className="h-4 w-4" /> JOIN TELEGRAM</a></li>
            <li><a href="#" className="inline-flex items-center gap-2 text-white/80 hover:text-primary"><MessageCircle className="h-4 w-4" /> CONTACT ON ZANGI</a></li>
            <li><a href="#" className="inline-flex items-center gap-2 text-white/80 hover:text-primary"><Globe className="h-4 w-4" /> REDDIT COMMUNITY</a></li>
            <li><a href="#" className="inline-flex items-center gap-2 text-white/80 hover:text-primary"><Music2 className="h-4 w-4" /> FOLLOW ON TIKTOK</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">DISCLAIMER</h4>
          <p className="text-white/60 text-xs leading-relaxed">
            MR ANABOLIC is intended for educational, informational, and community discussion
            purposes only. Content shared within the community does not constitute medical
            advice. Always consult a qualified healthcare professional before making decisions
            relating to health, training, supplementation, or lifestyle changes.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © 2024 MR ANABOLIC. All Rights Reserved.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Hero />
      <About />
      <Find />
      <CTA />
      <Why />
      <TransformationWrapper />
      <Rules />
      <Footer />
    </main>
  );
}