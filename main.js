document.addEventListener('DOMContentLoaded', () => {
      const productList = document.getElementById('product-list');
      const testimonialList = document.getElementById('testimonial-list');
      const slider = document.querySelector('.slider');
      const prevBtn = document.querySelector('.prev-btn');
      const nextBtn = document.querySelector('.next-btn');
      let currentIndex = 0;

      const products = [
        { name: 'Hydrating Moisturizer', price: '$20' },
        { name: 'Anti-Aging Serum', price: '$30' },
        { name: 'Exfoliating Scrub', price: '$15' },
      ];

      const testimonials = [
        { name: 'John Doe', review: 'This moisturizer is amazing! My skin feels so soft.' },
        { name: 'Jane Smith', review: 'The anti-aging serum has made a noticeable difference in my skin.' },
        { name: 'Emily Johnson', review: 'The exfoliating scrub is gentle yet effective. Highly recommend!' },
      ];

      products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - ${product.price}`;
        productList.appendChild(li);
      });

      testimonials.forEach(testimonial => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${testimonial.name}:</strong> ${testimonial.review}`;
        testimonialList.appendChild(li);
      });

      function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      }

      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
        updateSlider();
      });

      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % products.length;
        updateSlider();
      });
    });
