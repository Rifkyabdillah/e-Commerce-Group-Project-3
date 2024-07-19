import React, { useEffect } from 'react';

export default function Carausel() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-carousel-item]');
    const indicators = document.querySelectorAll('[data-carousel-slide-to]');
    const prevButton = document.querySelector('[data-carousel-prev]');
    const nextButton = document.querySelector('[data-carousel-next]');
    let currentIndex = 0;

    function updateCarousel(index) {
      items.forEach((item, i) => {
        item.classList.toggle('hidden', i !== index);
      });
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('bg-gray-800', i === index);
        indicator.classList.toggle('bg-white', i !== index);
      });
    }

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel(currentIndex);
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel(currentIndex);
    });

    indicators.forEach((indicator, i) => {
      indicator.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel(currentIndex);
      });
    });

    updateCarousel(currentIndex);
  }, []);
  
  return (
    <>
      <div id="default-carousel" className="relative w-full " data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_1280.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 1" />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_1280.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 2" />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_1280.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 3" />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_1280.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 4" />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_1280.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 5" />
          </div>
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          <button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          <button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>

        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
}
