import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'c0498a44-6c34-4249-a3f2-87641cba15aa',
          email: email,
          subject: 'New Contact from Portfolio',
          message: `Please reach out to this email: ${email}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error('Transmission rejected');
      }
    } catch (err) {
      console.error(err);
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#050505] text-[#F4F4F0] border-b border-white/10 grid grid-cols-1 lg:grid-cols-12">
      {/* Left Copy Block */}
      <div className="lg:col-span-6 p-6 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#D4FF00] block mb-2">
            (05) — Transmission
          </span>
          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none glitch-hover"
            >
              Initiate <br /> Contact.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-neutral-400 text-base md:text-lg max-w-md leading-relaxed"
          >
            Currently engineering intelligent web platforms and open to new opportunities. Drop your email and I will reach out.
          </motion.p>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex gap-8 font-mono text-xs uppercase tracking-widest">
          <a
            href="https://github.com/vishalsinha2004"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-400 hover:text-[#D4FF00] transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/vishal-sinha2004"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-400 hover:text-[#D4FF00] transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* Right Animated Brutalist Form */}
      <form onSubmit={handleSubmit} className="lg:col-span-6 flex flex-col justify-between">
        <div className="p-6 md:p-12 lg:p-16 flex-1 flex flex-col justify-center">
          <label
            htmlFor="email"
            className={`font-mono text-xs uppercase tracking-widest mb-4 block transition-colors ${
              error ? 'text-[#FF2A2A]' : 'text-neutral-500'
            }`}
          >
            {error ? 'ERR // Connection Fault — Retry' : 'Direct Comm Link // Enter Email'}
          </label>

          <div className={`relative ${error ? 'animate-error-shake' : ''}`}>
            <input
              type="email"
              id="email"
              required
              value={email}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className={`w-full bg-transparent border-b py-4 text-2xl md:text-3xl font-bold text-[#F4F4F0] placeholder-neutral-700 focus:outline-none transition-colors ${
                error ? 'border-[#FF2A2A]' : 'border-white/20'
              }`}
            />
            {/* Expanding Focus Line */}
            <motion.div
              initial={false}
              animate={{ scaleX: isFocused || error ? 1 : 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`absolute bottom-0 left-0 right-0 h-[2px] origin-left pointer-events-none ${
                error ? 'bg-[#FF2A2A]' : 'bg-[#D4FF00]'
              }`}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`relative overflow-hidden group w-full p-6 md:p-8 font-mono text-sm uppercase tracking-widest font-bold flex items-center justify-between cursor-pointer border-t border-white/10 transition-colors ${
            error
              ? 'bg-[#FF2A2A] text-black'
              : submitted
                ? 'bg-[#F4F4F0] text-black'
                : 'bg-[#D4FF00] text-black'
          }`}
        >
          <span className="absolute inset-0 bg-[#F4F4F0] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          <span className="relative z-10">
            {isSubmitting
              ? 'Transmitting...'
              : error
                ? 'ERR // Transmission Failed'
                : submitted
                  ? 'Email Received ✓'
                  : 'Submit Email'}
          </span>
          <span className="relative z-10 text-xl group-hover:translate-x-2 transition-transform">
            {error ? '!' : '→'}
          </span>
        </button>
      </form>
    </section>
  );
};

export default Contact;