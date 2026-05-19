import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CALMING_QUOTES = [
  {
    text: "You are allowed to be both a masterpiece and a work in progress.",
    author: "Sophia Bush",
  },
  {
    text: "Sometimes the bravest thing is asking for help.",
    author: "Unknown",
  },
  {
    text: "You don't have to be positive all the time. It's perfectly okay to feel sad, angry, and scared.",
    author: "Lori Deschene",
  },
  {
    text: "Healing isn't linear, and that's okay.",
    author: "Unknown",
  },
  {
    text: "You are worthy of the love you give to others.",
    author: "Unknown",
  },
  {
    text: "Breathe. You are exactly where you need to be.",
    author: "Unknown",
  },
  {
    text: "Your feelings are valid. Your pain is real. Your story matters.",
    author: "Unknown",
  },
];

export const LISTENER_RESPONSES = [
  "I hear you. That sounds really heavy to carry. Can you tell me a little more about what's been going on?",
  "Thank you for trusting me with that. You don't have to go through this alone.",
  "That makes complete sense. Anyone would feel that way in your situation.",
  "I'm right here with you. Take all the time you need.",
  "It takes real courage to talk about this. I'm genuinely glad you reached out tonight.",
  "Your feelings are completely valid. This sounds like a lot.",
  "I'm listening. Every word you share matters.",
  "How long have you been feeling this way? I want to understand.",
  "I'm glad you came here tonight. You made the right choice reaching out.",
  "There's no rush here. We can take this at whatever pace feels right for you.",
];

export const FEATURES = [
  {
    icon: "🔒",
    title: "Completely Anonymous",
    description:
      "No account needed. No names. Just show up as you are — nobody will ever know it was you.",
  },
  {
    icon: "💜",
    title: "Real Humans, Not Bots",
    description:
      "Every listener is a real, trained person who genuinely cares. You'll feel the difference immediately.",
  },
  {
    icon: "🌙",
    title: "Available at 3am",
    description:
      "Anxiety doesn't sleep. Neither do we. Listeners are online around the clock, every night of the year.",
  },
  {
    icon: "🕊️",
    title: "No Advice Unless Asked",
    description:
      "Listeners are trained to hold space, not fix. Sometimes you just need to be heard — and that's enough.",
  },
  {
    icon: "🛡️",
    title: "Crisis-Safe",
    description:
      "Every chat is monitored for safety signals. Crisis resources are always one tap away, just in case.",
  },
  {
    icon: "✨",
    title: "Completely Free",
    description:
      "Human connection shouldn't have a price tag. CalmChat is and always will be free for those who need it.",
  },
];

export const TESTIMONIALS = [
  {
    stars: 5,
    text: "I logged on at 2am feeling like the walls were closing in. The listener didn't try to fix me — they just sat with me. I felt so much less alone by the end.",
    initials: "A",
    gradient: "from-purple-600 to-blue-600",
    role: "Late Night User",
  },
  {
    stars: 5,
    text: "I'd been holding so much in for months. Three minutes into the chat I was crying in a good way. This platform is quietly one of the most humane things on the internet.",
    initials: "M",
    gradient: "from-blue-600 to-purple-800",
    role: "Regular User",
  },
  {
    stars: 5,
    text: "As someone who struggles with social anxiety, I can't call a hotline. This was the only way I could reach out. The text format made it safe enough to be honest.",
    initials: "J",
    gradient: "from-pink-600 to-purple-600",
    role: "First Time User",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Is this really anonymous?",
    answer:
      "Yes. We don't collect names, emails, or any identifying information. We use a temporary session ID that expires when your chat ends. Even our team cannot trace a conversation back to you.",
  },
  {
    question: "Are the listeners real people?",
    answer:
      "Every single listener is a real human volunteer. They go through a multi-step application, background check, and 10-hour training before they ever accept their first chat. No bots, ever.",
  },
  {
    question: "What if I'm in crisis?",
    answer:
      "If you're in immediate danger, please reach out to a crisis line directly. We have a one-tap safety panel in every chat. Our listeners are also trained to recognize crisis signals and will offer resources. You're never truly alone here.",
  },
  {
    question: "Is CalmChat free?",
    answer:
      "Completely free, always. We're funded by donations and grants. Human connection at your lowest moment should never be pay-gated. If you'd like to support us, donations are gratefully accepted.",
  },
  {
    question: "Can I become a listener?",
    answer:
      "Yes! We're always looking for compassionate humans to join our listener team. Head to the Listener Dashboard page to start your application. The process takes about a week.",
  },
];

export const CRISIS_LINES = [
  {
    name: "988 Suicide & Crisis Lifeline",
    detail: "Call or text 988 · Available 24/7",
    cta: "Call Now",
    href: "tel:988",
  },
  {
    name: "Crisis Text Line",
    detail: "Text HOME to 741741 · Free & confidential",
    cta: "Text Now",
    href: "sms:741741?body=HOME",
  },
  {
    name: "International Association for Suicide Prevention",
    detail: "iasp.info/resources/Crisis_Centres/ · Global directory",
    cta: "Visit",
    href: "https://www.iasp.info/resources/Crisis_Centres/",
  },
];
