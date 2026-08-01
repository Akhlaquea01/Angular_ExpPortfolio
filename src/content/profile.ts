import { Profile } from './types';
import { experience } from './experience';

const calculateExperience = (startDateString: string): string => {
  const startDate = new Date(startDateString);
  const currentDate = new Date();
  const diffInMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());
  return (Math.floor(diffInMonths / 6) * 0.5).toFixed(1).replace('.0', '');
};

const experienceStartDate = '2021-02-14';
const experienceYears = calculateExperience(experienceStartDate);
const latestRoleTitle = experience[0]?.roles[0]?.title || 'Software Engineer';

export const profile: Profile = {
  name: 'Akhlaque Ahmad',
  firstName: 'Akhlaque',
  role: 'AI Full Stack Engineer',
  tagline: 'Angular & Node.js Architecture · AI/Agentic Systems',
  location: 'Bengaluru, India',
  email: 'akhlaquea01@gmail.com',
  phone: '+91-8797247279',
  github: 'https://github.com/Akhlaquea01',
  linkedin: 'https://www.linkedin.com/in/iam-atts/',
  photo: '/images/akhlaque-01.jpg',
  experienceStartDate,
  summary: `${latestRoleTitle} with ${experienceYears}+ years of experience developing enterprise B2B SaaS applications using Angular, TypeScript, JavaScript, Node.js, Express.js, MongoDB, and REST APIs. Specialized in scalable frontend architecture, reusable component development, Node.js BFF services, and AI-enabled enterprise applications. Hands-on experience integrating LiteLLM/OpenAI models, Server-Sent Events (SSE), MCP, and Web Components to build intelligent sourcing solutions. Experienced in performance optimization, production support, code reviews, feature ownership, and delivering high-quality software in Agile environments.`,
  hobby:
    "When I'm not coding, I'm usually diving into the latest tech trends—podcasts, GitHub, documentation rabbit holes. I'm a casual gamer (mobile games mostly), love hanging out with friends, and I travel whenever I can to soak up new cultures and perspectives. I think the best engineers are curious about the world, not just the code.",
};
