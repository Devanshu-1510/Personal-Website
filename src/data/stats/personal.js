import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2003-10-09T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'Projects Completed',
    label: 'Projects Completed',
    value: '10+',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Alwar, Rajasthan',
  },
  {
    key: 'Skills',
    label: 'Skills Acquired',
    value: '15+',
  },
  {
    key: 'Languages',
    label: 'Languages',
    value: 'Hindi, English',
  },
];

export default data;
