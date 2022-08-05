import React from 'react';
import clsx from 'clsx';

const Link: React.FC<{ color: string }> = ({ children, color }) => {
  const colorClass = `bg-capybara-white`;

  return (
    <a
      className={clsx(
        'px-7 h-16 border-2 cursor-pointer flex items-center w-fit font-medium border-capybara-black relative after:transition-transform hover:after:translate-x-0 hover:after:translate-y-0 rounded-lg after:absolute after:h-full after:translate-x-2 after:translate-y-2 after:left-0 after:top-0 after:w-full after:bg-capybara-black after:rounded-lg after:-z-10',
        color === 'primary' ? 'bg-capybara-pink' : 'bg-capybara-white',
      )}
    >
      {children}
    </a>
  );
};

export default Link;
