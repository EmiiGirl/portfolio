export function reveal(node, { delay = 0, duration = 1400, distance = '40px', origin = 'bottom', threshold = 0.15, blur = true } = {}) {
  node.style.opacity = '0';
  if (blur) node.style.filter = 'blur(8px)';
  node.style.transition = `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`;
  
  if (origin === 'bottom') node.style.transform = `translateY(${distance})`;
  if (origin === 'top') node.style.transform = `translateY(-${distance})`;
  if (origin === 'left') node.style.transform = `translateX(-${distance})`;
  if (origin === 'right') node.style.transform = `translateX(${distance})`;
  if (origin === 'scale') node.style.transform = `scale(0.95)`;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.style.opacity = '1';
          if (blur) node.style.filter = 'blur(0px)';
          node.style.transform = origin === 'scale' ? 'scale(1)' : 'translate(0, 0)';
          observer.unobserve(node);
        }
      });
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
