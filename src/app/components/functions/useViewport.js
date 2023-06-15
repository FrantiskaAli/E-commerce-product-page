import React from 'react';

const useViewport = () => {
  const [width, setWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleWindowResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  }, []);

  // Return the width so we can use it in our components
  return { width };
};

export { useViewport };