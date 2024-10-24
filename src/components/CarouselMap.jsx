import { useEffect } from "react";

const Carousel = () => {
  useEffect(() => {
    const carousel = document.querySelector('.overflow-x-scroll');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');

    if (nextBtn && prevBtn && carousel) {
      nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: 200, behavior: 'smooth' });
      });

      prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -200, behavior: 'smooth' });
      });
    }
  }, []);

  return null; // No se renderiza nada, ya que solo maneja el comportamiento
};

export default Carousel;
