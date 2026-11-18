import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // 3D Magnetic Hover Physics for the Contact Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { damping: 20, stiffness: 150 });
  const smoothY = useSpring(y, { damping: 20, stiffness: 150 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "c0498a44-6c34-4249-a3f2-87641cba15aa",
          email: email,
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
    <section className="relative py-40 px-6 md:px-24 flex flex-col items-center justify-center overflow-hidden perspective-[1000px]">
      
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#1F2833]/40 backdrop-blur-2xl border border-[#66FCF1]/20 p-10 md:p-16 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        {/* Animated Sweep Lighting */}
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#66FCF1]/5 to-transparent skew-x-12 pointer-events-none"
        />

        <div className="flex flex-col justify-center" style={{ transform: "translateZ(40px)" }}>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66FCF1] to-[#45A29E]">Contact.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
            Currently engineering intelligent web platforms and open to new opportunities. Drop your email below and I will reach out.
          </p>
          
          <a href="https://github.com/vishalsinha2004" target="_blank" rel="noreferrer" className="text-[#66FCF1] font-bold tracking-widest uppercase text-sm flex items-center gap-4 hover:text-white transition-colors cursor-none w-max">
            <span className="w-10 h-[1px] bg-[#66FCF1]"></span>
            GitHub Registry
          </a>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-6" style={{ transform: "translateZ(30px)" }}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-mono text-[#66FCF1] uppercase tracking-widest">Comm Link</label>
            <input 
              type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Leave your email to connect..."
              className="w-full bg-[#0B0C10]/60 border border-white/10 rounded-xl px-6 py-5 text-white placeholder-gray-600 focus:outline-none focus:border-[#66FCF1] transition-colors cursor-none text-lg"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0px 0px 30px rgba(102, 252, 241, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            className={`w-full py-5 rounded-xl font-black tracking-widest uppercase text-sm cursor-none transition-all border ${
              submitted 
                ? 'bg-green-500 border-green-500 text-[#0B0C10]' 
                : 'bg-[#66FCF1]/10 border-[#66FCF1] text-[#66FCF1] hover:bg-[#66FCF1] hover:text-[#0B0C10]'
            }`}
          >
            {isSubmitting ? 'Transmitting...' : submitted ? 'Email Received' : 'Initialize Contact'}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;