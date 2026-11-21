import { useState, useCallback, useEffect } from 'react';

const GLITCH_CHARS = '01X#$%_/@&!?<>';

const scramble = (text, intensity = 0.45) =>
  text
    .split('')
    .map((ch) =>
      ch === ' ' || Math.random() >= intensity
        ? ch
        : GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
    )
    .join('');

const GlitchText = ({ text, className = '', auto = false }) => {
  const [state, setState] = useState({
    active: false,
    display: text,
    top: 20,
    bottom: 55,
    offset: 0,
  });

  const trigger = useCallback(() => {
    let frame = 0;
    const total = 4;

    const step = () => {
      if (frame >= total) {
        setState({ active: false, display: text, top: 20, bottom: 55, offset: 0 });
        return;
      }
      const top = Math.floor(Math.random() * 55);
      const height = 15 + Math.floor(Math.random() * 25);
      setState({
        active: true,
        display: scramble(text, frame === 1 ? 0.6 : 0.3),
        top,
        bottom: Math.max(0, 100 - (top + height)),
        offset: (Math.random() > 0.5 ? 1 : -1) * (4 + Math.floor(Math.random() * 10)),
      });
      frame += 1;
      setTimeout(step, 45 + Math.random() * 40);
    };
    step();
  }, [text]);

  useEffect(() => {
    if (!auto) return;
    let id;
    const loop = () => {
      id = setTimeout(() => {
        trigger();
        loop();
      }, 5000 + Math.random() * 5000);
    };
    loop();
    return () => clearTimeout(id);
  }, [auto, trigger]);

  return (
    <span
      onMouseEnter={trigger}
      className={`relative inline-block ${className}`}
    >
      {state.display}
      {state.active && (
        <>
          <span
            aria-hidden="true"
            style={{
              clipPath: `inset(${state.top}% 0 ${state.bottom}% 0)`,
              transform: `translateX(${state.offset}px)`,
            }}
            className="absolute inset-0 text-[#FF2A2A] pointer-events-none select-none"
          >
            {state.display}
          </span>
          <span
            aria-hidden="true"
            style={{
              clipPath: `inset(${Math.max(0, 100 - state.bottom)}% 0 0% 0)`,
              transform: `translateX(${-state.offset * 0.6}px)`,
            }}
            className="absolute inset-0 text-[#D4FF00] opacity-80 pointer-events-none select-none"
          >
            {state.display}
          </span>
        </>
      )}
    </span>
  );
};

export default GlitchText;