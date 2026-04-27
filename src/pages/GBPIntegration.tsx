import { motion } from 'motion/react';
import { Store, CheckCircle, RefreshCw, Star, MessageCircle, MapPin, Phone, Globe, ShoppingBag, UtensilsCrossed, Calendar, Tag, FileText } from 'lucide-react';

export function GBPIntegration() {
  return (
    <div className="space-y-6 w-full max-w-5xl mx-auto pb-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold bg-white w-fit px-2 py-1 rounded inline-block -mx-2">Google Business Profile</h1>
        <p className="text-sm text-slate-500">Manage connections and sync status for generated websites.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }} 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-indigo-600 rounded-2xl p-6 lg:p-8 text-white shadow-lg overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Store size={120} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold">Acme Plumbing Services</h2>
            <span className="bg-emerald-500/20 text-emerald-100 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-emerald-400/30">
              <CheckCircle size={12} /> Connected
            </span>
          </div>
          <p className="text-indigo-100 text-sm max-w-lg mb-8 leading-relaxed">
            Your single source of truth. Reviews, posts, menus, products, and business hours are automatically synced to the website in real-time.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-indigo-900 px-5 py-2 rounded-lg font-bold hover:bg-slate-50 transition-colors flex items-center gap-2 text-sm">
              <RefreshCw size={16} /> Sync Now
            </button>
            <button className="bg-indigo-800 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-indigo-700 transition-colors">
              Manage Connection
            </button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mb-4">
            <Star size={20} className="fill-current" />
          </div>
          <h3 className="font-bold text-sm text-slate-900">Reviews & Ratings</h3>
          <p className="text-[11px] text-slate-500 mt-1 border-b border-slate-100 pb-4 leading-relaxed">
            Showing top reviews dynamically on the homepage template.
          </p>
          <div className="mt-4 flex justify-between items-center text-sm">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Avg Rating</span>
            <span className="font-black text-slate-900">4.8 / 5.0</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center mb-4">
            <MapPin size={20} />
          </div>
          <h3 className="font-bold text-sm text-slate-900">NAP Consistency</h3>
          <p className="text-[11px] text-slate-500 mt-1 border-b border-slate-100 pb-4 leading-relaxed">
            Name, Address, Phone schema perfectly aligned with Google.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-slate-600 text-[11px] font-semibold"><Phone size={14}/> (555) 123-4567</div>
            <div className="flex items-center gap-2 text-slate-600 text-[11px] font-semibold"><Globe size={14}/> acmeplumbing.com</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
            <MessageCircle size={20} />
          </div>
          <h3 className="font-bold text-sm text-slate-900">Content Publishing</h3>
          <p className="text-[11px] text-slate-500 mt-1 border-b border-slate-100 pb-4 leading-relaxed">
            Posts, Offers, and Events are intelligently categorized and routed.
          </p>
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-slate-600 text-[11px] font-semibold"><Tag size={12} className="text-emerald-500" /> Active Offers</div>
              <span className="font-bold text-slate-900 text-xs">3</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-slate-600 text-[11px] font-semibold"><Calendar size={12} className="text-purple-500" /> Upcoming Events</div>
              <span className="font-bold text-slate-900 text-xs">1</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-slate-600 text-[11px] font-semibold"><FileText size={12} className="text-blue-500" /> Standard Posts</div>
              <span className="font-bold text-slate-900 text-xs">12</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
            <UtensilsCrossed size={20} />
          </div>
          <h3 className="font-bold text-sm text-slate-900">Restaurant Menus</h3>
          <p className="text-[11px] text-slate-500 mt-1 border-b border-slate-100 pb-4 leading-relaxed">
            Sync food and beverage menus directly from Google to digital dining interfaces.
          </p>
          <div className="mt-4 flex justify-between items-center text-sm">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Sync Status</span>
            <span className="font-bold text-slate-900 text-xs">Live (42 Items)</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
            <ShoppingBag size={20} />
          </div>
          <h3 className="font-bold text-sm text-slate-900">Retail Products</h3>
          <p className="text-[11px] text-slate-500 mt-1 border-b border-slate-100 pb-4 leading-relaxed">
            Automatically display your live retail product catalog and in-store inventory.
          </p>
          <div className="mt-4 flex justify-between items-center text-sm">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Catalog Items</span>
            <span className="font-bold text-slate-900 text-xs">128</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
