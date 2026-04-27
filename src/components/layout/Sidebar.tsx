import { NavLink } from 'react-router-dom';
import { 
  Building2, 
  LayoutTemplate, 
  Store, 
  BarChart3, 
  Bell, 
  GraduationCap, 
  Settings,
  Menu,
  X,
  Utensils
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

const NAV_ITEMS = [
  { name: 'Dashboard', path: '/dashboard', icon: Building2 },
  { name: 'App Builder', path: '/builder', icon: LayoutTemplate },
  { name: 'GBP Integration', path: '/gbp', icon: Store },
  { name: 'Ordering & Menus', path: '/restaurant', icon: Utensils },
  { name: 'Analytics', path: '/analytics', icon: BarChart3 },
  { name: 'Leads & Alerts', path: '/leads', icon: Bell },
  { name: 'GSO Coach', path: '/coaching', icon: GraduationCap },
];

export function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md border border-gray-200 shadow-sm"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-60 border-r border-slate-200 bg-white shadow-sm transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:block flex flex-col shrink-0",
        isMobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-16 flex items-center px-6 border-b border-slate-100 hidden">
          <div className="flex items-center gap-2 text-indigo-600">
            <Building2 size={24} className="stroke-[1.5]" />
            <span className="font-semibold text-lg tracking-tight text-slate-900">AgencyFlow</span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto w-full">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors w-full",
                isActive 
                  ? "bg-indigo-50 text-indigo-700 font-bold" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
              )}
            >
              {({ isActive }) => (
                <>
                  <item.icon size={20} className={isActive ? "text-indigo-600" : "text-slate-400"} />
                  {item.name}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 pb-8 lg:pb-4 space-y-2">
          <div className="p-4 bg-slate-900 rounded-xl text-white">
            <div className="text-xs text-slate-400 mb-1 font-bold tracking-widest uppercase">Lead Velocity</div>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold">+142</span>
              <span className="text-xs text-emerald-400">+12%</span>
            </div>
            <div className="w-full bg-white/20 h-1.5 mt-3 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-indigo-500"></div>
            </div>
            <p className="text-[10px] mt-2 text-slate-400">Next tier: Enterprise Scale</p>
          </div>
          <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
            <Settings size={18} className="text-slate-400" />
            Settings
          </button>
        </div>
      </div>
      
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 z-30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}
