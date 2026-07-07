export function parallax(node, { speed = 0.05 } = {}) {
  // Use native CSS scroll-driven animations if supported (as per modern web guidance)
  if (typeof CSS !== 'undefined' && CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
    node.style.animation = 'parallax linear both';
    node.style.animationTimeline = 'view()';
    node.style.animationRange = 'entry -20% exit 120%';
    return {};
  }

  // Fallback for browsers that don't support scroll-driven animations
  let observer;
  
  function onScroll() {
    const scrollY = window.scrollY;
    const rect = node.getBoundingClientRect();
    const nodeTop = rect.top + scrollY;
    
    // distance from center of viewport
    const windowCenter = scrollY + window.innerHeight / 2;
    const nodeCenter = nodeTop + rect.height / 2;
    const distance = nodeCenter - windowCenter;
    
    node.style.transform = `translateY(${distance * speed}px)`;
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // initial setup
      } else {
        window.removeEventListener('scroll', onScroll);
      }
    });
  }, { threshold: 0 });

  observer.observe(node);

  return {
    update(newParams) {
      speed = newParams.speed ?? 0.05;
      onScroll();
    },
    destroy() {
      if (observer) observer.disconnect();
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', onScroll);
      }
    }
  };
}
