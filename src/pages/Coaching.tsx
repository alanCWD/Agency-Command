import { motion } from 'motion/react';
import { Lightbulb, ExternalLink } from 'lucide-react';

export function Coaching() {
  return (
    <div className="space-y-6 w-full max-w-7xl mx-auto h-[calc(100vh-4rem)] flex flex-col pb-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-white w-fit px-2 py-1 rounded inline-block -mx-2">GSO Coach</h1>
            <p className="text-sm text-slate-500">Google Search Optimization coaching & training module.</p>
          </div>
          <a 
            href="https://gso-coach.replit.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-lg transition-colors border border-indigo-100"
          >
            Open in new tab <ExternalLink size={14} />
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.1 }}
        className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col"
      >
        <div className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white p-4 shrink-0 flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-lg">
            <Lightbulb size={20} className="text-yellow-400" />
          </div>
          <div>
            <h2 className="font-bold text-sm">Interactive Coaching Session Active</h2>
            <p className="text-[11px] text-indigo-200 mt-0.5">Interact with the module directly to improve ranking strategies.</p>
          </div>
        </div>
        
        <div className="flex-1 w-full bg-slate-50 relative">
          <iframe 
            src="https://gso-coach.replit.app" 
            className="absolute inset-0 w-full h-full border-0"
            title="GSO Coach"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </motion.div>
    </div>
  );
}
