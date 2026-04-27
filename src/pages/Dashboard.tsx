import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  ArrowDownRight,
  Globe,
  Users,
  Activity,
  DollarSign,
  TrendingDown,
  Building2,
  CheckCircle2,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', nativeOrders: 4000, doordash: 2400 },
  { name: 'Week 2', nativeOrders: 4300, doordash: 2200 },
  { name: 'Week 3', nativeOrders: 5000, doordash: 1800 },
  { name: 'Week 4', nativeOrders: 5500, doordash: 1600 },
];

const clients = [
  { id: 1, name: "Acme Plumbing Burgers", status: "Live", mrr: "$499", commissionSaved: "$4,250", features: ["GBP Sync", "Bunny CDN"], health: "healthy" },
  { id: 2, name: "Luigi's NY Pizza", status: "Live", mrr: "$499", commissionSaved: "$8,900", features: ["GBP Sync", "Bunny CDN", "Video Engine"], health: "healthy" },
  { id: 3, name: "The Rusty Anchor", status: "Onboarding", mrr: "$299", commissionSaved: "$0", features: ["Pending POS"], health: "warning" },
  { id: 4, name: "Downtown Sushi", status: "Live", mrr: "$799", commissionSaved: "$12,400", features: ["Full Suite", "Multi-loc"], health: "healthy" },
];

export function Dashboard() {
  const stats = [
    { name: 'Agency Monthly Recurring (MRR)', value: '$68,450', change: '+8%', icon: DollarSign, trend: 'up' },
    { name: 'Commission Blocked (YTD)', value: '$1.2M', change: '+42%', icon: TrendingDown, trend: 'up', hint: "Money saved for clients" },
    { name: 'Active Restaurant Sites', value: '142', change: '+12', icon: Building2, trend: 'up' },
    { name: 'Avg. Local SEO Rank (3-Pack)', value: '1.4', change: '+0.4', icon: Globe, trend: 'up' },
  ];

  return (
    <div className="space-y-6 w-full max-w-7xl mx-auto pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Agency Command Center</h1>
          <p className="text-sm text-slate-500 mt-1">Managing 142 clients • Focus: Commision Defense & Local SEO</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold text-[11px] uppercase tracking-wider hover:bg-indigo-700 transition-colors shadow-sm">
            + Deploy New Restaurant
          </button>
        </div>
      </motion.div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group"
          >
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-indigo-50 transition-colors">
                <stat.icon className="text-slate-600 group-hover:text-indigo-600 w-5 h-5 transition-colors" />
              </div>
              <div className="flex items-center space-x-1 bg-slate-50 px-2 py-1 rounded-md">
                {stat.trend === 'up' ? <ArrowUpRight size={14} className="text-emerald-500" /> : <ArrowDownRight size={14} className="text-red-500" />}
                <span className={`text-[11px] font-bold ${stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
              <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{stat.name}</p>
              {stat.hint && <p className="text-[10px] items-center text-emerald-600 mt-1 font-semibold">{stat.hint}</p>}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* Value Prop Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm col-span-2 flex flex-col"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Network Volume: Native vs. Aggregator</h3>
              <p className="text-xs text-slate-500 mt-1">Proof of value: Bleeding volume away from DoorDash into native, zero-commission ordering.</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Native
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                <div className="w-2 h-2 rounded-full bg-red-400"></div> DoorDash
              </div>
            </div>
          </div>
          <div className="w-full flex-1 min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorNative" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorDD" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f87171" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#f87171" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 10, fontWeight: 600, textTransform: 'uppercase'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 11, fontWeight: 600}} width={40} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '12px', fontWeight: 600 }}
                  itemStyle={{ fontSize: '12px', fontWeight: 600 }}
                />
                <Area type="monotone" dataKey="nativeOrders" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorNative)" />
                <Area type="monotone" dataKey="doordash" stroke="#f87171" strokeWidth={3} fillOpacity={1} fill="url(#colorDD)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Agency Activity Feed */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col"
        >
          <div className="p-4 border-b border-slate-100 bg-slate-50">
            <h3 className="text-sm font-bold text-slate-900">Network Activity Stream</h3>
          </div>
          <div className="p-4 flex-1 overflow-y-auto space-y-4">
            {[
              { client: "Acme Burgers", action: "Stitched & published new video review to Bunny.net via GBP webhook.", time: "12m ago", type: "success" },
              { client: "Luigi's Pizza", action: "Intercepted 42 DoorDash searches, mapped to Native Order UI.", time: "1h ago", type: "info" },
              { client: "The Rusty Anchor", action: "Square POS integration dropped.", time: "3h ago", type: "error" },
              { client: "Downtown Sushi", action: "New Event Page auto-generated from GBP Post.", time: "5h ago", type: "success" },
            ].map((feed, i) => (
              <div key={i} className="flex gap-3">
                <div className="mt-0.5 shrink-0">
                  {feed.type === 'success' && <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-200 mt-1" />}
                  {feed.type === 'info' && <div className="w-2 h-2 rounded-full bg-blue-500 shadow-sm shadow-blue-200 mt-1" />}
                  {feed.type === 'error' && <div className="w-2 h-2 rounded-full bg-red-500 shadow-sm shadow-red-200 mt-1 animate-pulse" />}
                </div>
                <div>
                  <div className="text-xs text-slate-800 font-medium leading-relaxed">
                    <span className="font-bold text-slate-900 mr-1">{feed.client}:</span>
                    {feed.action}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">{feed.time}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Client Roster */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
      >
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <h3 className="text-sm font-bold text-slate-900">Client Roster</h3>
          <input 
            type="text" 
            placeholder="Search restaurants..." 
            className="w-64 text-xs px-3 py-1.5 border border-slate-200 rounded-lg outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-[10px] uppercase font-bold tracking-wider border-b border-slate-200 text-slate-500">
              <tr>
                <th className="px-5 py-3">Restaurant Name</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">MRR</th>
                <th className="px-5 py-3">Commissions Blocked</th>
                <th className="px-5 py-3 hidden md:table-cell">Active Modules</th>
                <th className="px-5 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {clients.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-5 py-4 font-bold text-slate-900 flex items-center gap-2 relative">
                    {c.health === 'warning' && <AlertCircle size={14} className="text-amber-500 absolute -left-1" />}
                    {c.health === 'healthy' && <CheckCircle2 size={14} className="text-emerald-500 opacity-50 absolute -left-1" />}
                    <span className="ml-4">{c.name}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`px-2 py-1 rounded inline-flex font-bold text-[10px] uppercase tracking-wider ${
                      c.status === 'Live' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 font-bold text-slate-600">{c.mrr}</td>
                  <td className="px-5 py-4 font-black text-emerald-600">{c.commissionSaved}</td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <div className="flex gap-1.5">
                      {c.features.map(f => (
                        <span key={f} className="bg-slate-100 border border-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider font-bold">
                          {f}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right">
                     <button className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded transition-colors opacity-0 group-hover:opacity-100">
                       Open Hub <ExternalLink size={12} />
                     </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

    </div>
  );
}
