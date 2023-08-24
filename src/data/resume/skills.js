const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 1,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Docker',
    competency: 1,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Numpy',
    competency: 2,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Jupyter',
    competency: 2,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 1,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'C++',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Pandas',
    competency: 2,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 2,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Cisco Packet Tracer',
    competency: 3,
    category: ['Cybersecurity'],
  },
  {
    title: 'SNORT',
    competency: 2,
    category: ['Cybersecurity'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
