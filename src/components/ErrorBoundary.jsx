import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error?.message || 'Unknown runtime exception' };
  }

  componentDidCatch(error, errorInfo) {
    console.error('System Fault Caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-dvh w-full bg-[#050505] text-[#F4F4F0] flex flex-col justify-between p-6 md:p-12 border border-[#FF2A2A]/40">
          <div className="flex justify-between items-center border-b border-white/10 pb-6 font-mono text-xs uppercase tracking-widest">
            <span className="flex items-center gap-3 text-[#FF2A2A]">
              <span className="w-2 h-2 rounded-full bg-[#FF2A2A] animate-ping" />
              ERR // SYSTEM_FAULT
            </span>
            <span className="text-neutral-500">RUNTIME_EXCEPTION</span>
          </div>

          <div className="py-12">
            <h1 className="text-[14vw] md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter text-[#FF2A2A] glitch-hover select-none">
              FATAL_ERR
            </h1>
            <p className="mt-8 font-mono text-sm md:text-base text-neutral-400 max-w-2xl border-l-2 border-[#FF2A2A] pl-4">
              {this.state.errorMessage}
            </p>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="w-full md:w-max px-10 py-5 bg-[#FF2A2A] text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#D4FF00] transition-colors cursor-pointer"
          >
            [ Reboot Interface ↻ ]
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;