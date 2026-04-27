import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Search, TrendingUp } from 'lucide-react';

const searchData = [
  { date: '1', clicks: 120, impressions: 1400 },
  { date: '2', clicks: 132, impressions: 1550 },
  { date: '3', clicks: 101, impressions: 1300 },
  { date: '4', clicks: 145, impressions: 1700 },
  { date: '5', clicks: 160, impressions: 1850 },
  { date: '6', clicks: 210, impressions: 2200 },
  { date: '7', clicks: 190, impressions: 2000 },
];

export function Analytics() {
  return (
    <div className="space-y-6 w-full max-w-7xl mx-auto pb-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold bg-white w-fit px-2 py-1 rounded inline-block -mx-2">Search & Engagement Analytics</h1>
        <p className="text-sm text-slate-500">Google Search Console data imported dynamically.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-sm font-bold text-slate-900">Performance on Search</h3>
            <div className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
              <Search size={12} /> GSC Connected
            </div>
          </div>
          
          <div className="flex gap-8 mb-6 border-b border-slate-100 pb-4">
            <div className="text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Avg. Position</p>
              <p className="text-lg font-black text-slate-900 mt-1">4.2</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Clicks</p>
              <p className="text-lg font-black text-slate-900 mt-1 underline decoration-indigo-300">12.5k</p>
            </div>
          </div>

          <div className="h-72 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={searchData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} dy={10} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)', fontSize: '12px' }} />
                <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#4f46e5" strokeWidth={3} dot={{r: 4, strokeWidth: 2}} activeDot={{r: 6}} />
                <Line yAxisId="right" type="monotone" dataKey="impressions" stroke="#94a3b8" strokeWidth={3} dot={{r: 4, strokeWidth: 2}} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
             <h3 className="text-sm font-bold text-slate-900 mb-4">Top Queries</h3>
             <ul className="space-y-4">
               {[
                 { q: 'plumber near me', c: 342, trend: '+22%' },
                 { q: 'acme plumbing', c: 210, trend: '+5%' },
                 { q: 'emergency leak fix', c: 145, trend: '-2%' },
                 { q: 'water heater installation', c: 98, trend: '+12%' },
               ].map((item, i) => (
                 <li key={i} className="flex items-center justify-between pb-3 border-b border-slate-50 last:border-0 last:pb-0">
                   <span className="text-slate-600 text-[11px] font-semibold truncate pr-4">{item.q}</span>
                   <div className="flex items-center space-x-2">
                     <span className={`text-[10px] font-bold ${item.trend.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>{item.trend}</span>
                     <span className="font-bold text-slate-900 text-sm">{item.c}</span>
                   </div>
                 </li>
               ))}
             </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-2xl text-white shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
               <TrendingUp size={80} />
             </div>
             <h3 className="text-[10px] font-bold uppercase tracking-widest text-indigo-200 mb-1">SEO Health Score</h3>
             <div className="text-3xl font-bold mb-3 flex items-baseline">
               98<span className="text-sm text-indigo-200 ml-1 font-medium">/ 100</span>
             </div>
             <div className="w-full bg-indigo-900/40 h-1.5 rounded-full overflow-hidden mb-4">
               <div className="w-[98%] h-full bg-white"></div>
             </div>
             <p className="text-[11px] text-indigo-100 leading-relaxed">
               Your latest generated <code>llms.txt</code> is being crawled. Core Web Vitals are passing perfectly.
             </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
