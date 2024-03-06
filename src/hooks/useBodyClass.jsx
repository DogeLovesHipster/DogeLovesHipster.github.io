import { useEffect } from 'react';

function useBodyClass(className) {
  useEffect(() => {
    // Add the class when the component mounts
    document.body.classList.add(className);

    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove(className);
    };
  }, [className]);
}

function HomePage() {
  useBodyClass('home-page');

}

function RedCockadedWoodpecker() {
    useBodyClass('red-cockaded-woodpecker-page');
}

function Index() {
    useBodyClass('index-styles');
}

export default useBodyClass;