/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Capitalist Yard India Private Limited',
    position: 'IT Intern Head',
    url: 'https://capitalistyard.com/',
    startDate: '2023-06-05',
    summary: 'Engaged as an IT-Intern Lead at Capitalist Yard India Limited, where I took a proactive role in driving project reliability and security through the implementation of stringent coding standards. Leveraged cutting-edge technologies like React.js, Webpack, Next.js, Redux, and Code splitting to create forward-thinking solutions. Collaborated seamlessly with cross-functional teams to optimize development workflows, resulting in enhanced productivity and project efficiency.',
    highlights: [
      'Spearheaded initiatives aimed at fortifying project reliability and security by championing the adoption of meticulous coding standards.',
      'Applied expertise in React.js, Webpack, Next.js, Redux, and Code splitting to develop innovative and robust technical solutions.',
      'Collaborated synergistically with team members to streamline development workflows, contributing to a significant increase in overall productivity.',
      'Played a pivotal role in incorporating modern technologies, including React.js and Redux, to elevate project performance and user experience.',
      'Contributed proactively to the adoption of Code splitting, enhancing project efficiency and loading times.',
    ],
  },

];

export default work;
