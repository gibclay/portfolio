import { useEffect, useRef } from 'react';
import { Education } from './education';
import { Experience } from './experience';
import { Projects } from './projects';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const listRef = useRef<HTMLUListElement>(null);
  const currNode = listRef.current;

  useEffect(() => {
    // const scrollToElement = () => {
    //   const { current } = listRef;
    //   current?.scrollIntoView({ behavior: 'smooth' });
    // };
    // scrollToElement();
    const getIndex = (): number => {
      switch (location.hash) {
        case '#education':
          return 0;
        case '#experience':
          return 1;
        case '#projects':
          return 2;
      }
      return 0;
    };

    const scrollToIndex = (index: number) => {
      const node = currNode?.querySelectorAll('li > h1')[index];
      node?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      console.log(node);
    };

    scrollToIndex(getIndex());
  }, [location]);

  return (
    <div className="page centered">
      <ul className="flex flex-col" ref={listRef}>
        <li>
          <Education />
        </li>
        <li>
          <Experience />
        </li>
        <li>
          <Projects />
        </li>
      </ul>
    </div>
  );
};

export { HomePage };
