import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const cursorX = useSpring(mouseX, { stiffness: 600, damping: 32, mass: 0.5 });
  const cursorY = useSpring(mouseY, { stiffness: 600, damping: 32, mass: 0.5 });

  useEffect(() => {
    // Only enable on devices with a real mouse/trackpad (disables on tablets/touchscreens)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const moveCursor = (e) => {
      mouseX.set(e.clientX - 8);
      mouseY.set(e.clientY - 8);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const isInteractive =
        target.closest('a, button, input, textarea, select, [role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isFinePointer) return null;

  return (
    <motion.div
      style={{ x: cursorX, y: cursorY }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isClicking ? 0.8 : isHovering ? 3 : 1,
      }}
      transition={{ type: 'spring', stiffness: 450, damping: 28 }}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-[#D4FF00] pointer-events-none z-[9999] mix-blend-difference"
    />
  );
};

export default CustomCursor;