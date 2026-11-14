import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c0498a44-6c34-4249-a3f2-87641cba15aa", // Replace with your Web3Forms key
          email: email, // This is the user's email they typed in
          subject: "New Contact from Portfolio",
          message: `Please reach out to this email: ${email}`,
        }),
      });

      if (response.status === 200) {
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-40 px-6 md:px-24 flex flex-col items-center justify-center overflow-hidden">
      {/* Heavy graphic animated background for the footer */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] rounded-full border-[1px] border-white/5 border-dashed pointer-events-none"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-charcoal/40 backdrop-blur-2xl border border-white/10 p-10 md:p-16 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
      >
        {/* Left Column: Copy & Links */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanAccent to-mutedTeal">Contact.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Currently engineering intelligent web platforms and open to new opportunities. Drop your email below and I will reach out.
          </p>
          
          <div className="flex flex-col gap-4">
            <a href="https://github.com/vishalsinha2004" target="_blank" rel="noreferrer" className="text-white font-bold tracking-widest uppercase text-sm flex items-center gap-4 hover:text-cyanAccent transition-colors cursor-none w-max">
              <span className="w-10 h-1 bg-cyanAccent block"></span>
              GitHub Registry
            </a>
          </div>
        </div>

        {/* Right Column: Ultra-Minimalist Email Form */}
        <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-mono text-cyanAccent uppercase tracking-widest">Comm Link</label>
            <input 
              type="email" 
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Leave your email to connect..."
              className="w-full bg-obsidian/50 border border-white/10 rounded-xl px-6 py-5 text-white placeholder-gray-600 focus:outline-none focus:border-cyanAccent transition-colors cursor-none text-lg"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            className={`w-full py-5 rounded-xl font-black tracking-widest uppercase text-sm cursor-none transition-all ${
              submitted 
                ? 'bg-green-500 text-obsidian' 
                : 'bg-cyanAccent text-obsidian hover:shadow-[0_0_20px_rgba(102,252,241,0.4)]'
            }`}
          >
            {isSubmitting ? 'Transmitting...' : submitted ? 'Email Received' : 'Submit Email'}
          </motion.button>
        </form>
      </motion.div>

      <div className="absolute bottom-8 text-gray-500 font-mono text-xs z-10 tracking-widest">
        <p>© {new Date().getFullYear()} Vishal Sinha. Engineered with React & Three.js.</p>
      </div>
    </section>
  );
};

export default Contact;