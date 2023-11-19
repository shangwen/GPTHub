import { useEffect, useState } from 'react';
import Giscus from '@giscus/react';

export default function Comments() {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    setDark(localStorage.getItem('theme') === 'dracula');
  }, [])

  useEffect(() => {
    const targetNode = document.documentElement;
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          console.log('data-theme attribute changed:', targetNode.getAttribute('data-theme'));
          setDark(!isDark);
        }
      }
    });

    const config = { attributes: true, attributeFilter: ['data-theme'] };
    observer.observe(targetNode, config);
    return () => {
      observer.disconnect();
    };
  }, [isDark]);

  return (
    <Giscus
      repo="shangwen/gpthub"
      repoId="R_kgDOKrn4Tw"
      category="Comments"
      categoryId="DIC_kwDOKrn4T84Ca5ph"
      mapping="og:title"
      term="Welcome to FreeGPTs!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={isDark ? 'dark_dimmed' : 'light_tritanopia'}
      lang="en"
      loading="lazy"
    />
  );
}
