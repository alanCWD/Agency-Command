import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, Clock, MapPin, CheckCircle2 } from 'lucide-react';

const mockLeads = [
  { id: 1, name: 'Sarah Jenkins', type: 'Form Submit', source: 'acmeplumbing.com', time: '10 mins ago', msg: 'Need a quote for a new water heater installation.', read: false },
  { id: 2, name: 'Mike Ross', type: 'Call', source: 'Google Business Profile', time: '1 hr ago', msg: 'Missed call. Voicemail left: "Hi, I have a leak..."', read: true },
  { id: 3, name: 'Elena Gilbert', type: 'Chat', source: 'acmeplumbing.com', time: '3 hrs ago', msg: 'Are you available this weekend?', read: true },
  { id: 4, name: 'David Kim', type: 'Form Submit', source: 'acmeplumbing.com', time: '1 day ago', msg: 'General inquiry about commercial rates.', read: true },
];

export function Leads() {
  return (
    <div className="space-y-6 w-full max-w-7xl mx-auto pb-24 h-full flex flex-col">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 mb-2">
        <h1 className="text-2xl font-bold bg-white w-fit px-2 py-1 rounded inline-block -mx-2">Leads & Interactions</h1>
        <p className="text-sm text-slate-500">Real-time alerts from your websites and GBP integrations.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.1 }}
        className="bg-white border border-slate-200 rounded-2xl shadow-sm flex-1 overflow-hidden flex flex-col"
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex gap-2">
            <button className="px-4 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-bold text-slate-900 shadow-sm uppercase tracking-wider">All</button>
            <button className="px-4 py-1.5 bg-transparent text-slate-600 hover:bg-slate-100 rounded-md text-xs font-bold transition-colors uppercase tracking-wider">Unread (1)</button>
          </div>
          <button className="text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
            <CheckCircle2 size={14} /> Mark all read
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-0">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-100 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                <th className="p-4">Contact</th>
                <th className="p-4">Type</th>
                <th className="p-4">Message Snapshot</th>
                <th className="p-4 text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {mockLeads.map((lead, i) => (
                <motion.tr 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                  key={lead.id} 
                  className={`group hover:bg-slate-50 transition-colors cursor-pointer ${!lead.read ? 'bg-indigo-50/30' : ''}`}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${!lead.read ? 'bg-indigo-600' : 'bg-transparent'}`} />
                      <div>
                        <div className={`text-xs ${!lead.read ? 'font-bold text-slate-900' : 'font-semibold text-slate-700'}`}>{lead.name}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{lead.source}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                      {lead.type === 'Form Submit' && <Mail size={14} className="text-blue-500" />}
                      {lead.type === 'Call' && <Phone size={14} className="text-emerald-500" />}
                      {lead.type === 'Chat' && <MessageSquare size={14} className="text-purple-500" />}
                      {lead.type}
                    </div>
                  </td>
                  <td className="p-4 text-xs text-slate-600 max-w-xs truncate font-medium">
                    {lead.msg}
                  </td>
                  <td className="p-4 text-right text-[10px] uppercase font-bold tracking-wider text-slate-400 flex justify-end items-center gap-1.5">
                    <Clock size={12} />
                    {lead.time}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
