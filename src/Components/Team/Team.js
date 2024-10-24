import React, { useEffect, useRef } from 'react';
import './Team.css';
import { gsap } from 'gsap';

function Team() {
  const imageRefs = useRef([]); // Create a ref array for images
  const observerRef = useRef(null); // Store the IntersectionObserver instance

  useEffect(() => {
    // Create an IntersectionObserver instance
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const image = entry.target; // Get the image element that is intersecting
          
          // GSAP animation for the image when it enters the viewport
          gsap.fromTo(
            image,
            { y: 100, opacity: 0 }, // Start from below and fully transparent
            {
              y: 0, // Move to original position
              opacity: 1,
              duration: 1.2,
              ease: 'power3.out',
              delay: index * 0.2, // Stagger the animations
              onComplete: () => {
                observerRef.current.unobserve(image); // Stop observing after animation
              },
            }
          );
        }
      });
    }, { threshold: 0.3 }); // Set threshold for the observer

    // Observe each image in the imageRefs array
    imageRefs.current.forEach((image) => {
      if (image) {
        observerRef.current.observe(image); // Start observing the image
      }
    });

    // Cleanup: disconnect the observer on component unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []); // Empty dependency array ensures this effect runs once

  return (
    <div className='team'>
      <div className='team-header'>
        <p>Our Team</p>
        <h2 data-animation='header'>Meet Our Incredible Team</h2>

        <div className='team-con'>
          {/** Use refs for images */}
          <div ref={el => (imageRefs.current[0] = el)}>
            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729766263/2151202445_qz3aug.jpg' alt='Team Member 1' />
          </div>

          <div ref={el => (imageRefs.current[1] = el)}>
            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729766263/2149203576_tkdufu.jpg' alt='Team Member 2' />
          </div>

          <div ref={el => (imageRefs.current[2] = el)}>
            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729766263/2149328287_ouaadw.jpg' alt='Team Member 3' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
