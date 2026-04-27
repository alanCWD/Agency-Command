import { Search, BellRing } from 'lucide-react';

export function TopBar() {
  return (
    <header className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center space-x-4 lg:hidden">
        {/* Mobile menu toggle would go here if needed, but keeping layout clean */}
        <span className="font-bold text-lg tracking-tight">SiteGen<span className="text-indigo-600">AI</span></span>
      </div>
      <div className="hidden lg:flex items-center space-x-4">
        <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-sm"></div>
        </div>
        <span className="font-bold text-lg tracking-tight text-slate-900">SiteGen<span className="text-indigo-600">AI</span></span>
        <div className="h-4 w-px bg-slate-200 mx-2"></div>
      </div>
      
      <div className="flex-1 flex max-w-full lg:max-w-md items-center pl-4 lg:pl-0">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-1.5 border border-slate-200 rounded-lg leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm transition-colors text-slate-900 font-medium"
            placeholder="Search projects, leads, or websites..."
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-6 ml-4">
        <div className="hidden md:flex items-center space-x-1 text-emerald-600 text-xs font-bold">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span>GBP SYNC ACTIVE</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-slate-100 rounded-full relative">
            <BellRing size={20} className="text-slate-500" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <div className="flex items-center space-x-2 border-l border-slate-200 pl-4">
            <div className="hidden md:block text-right">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Pro Tier</div>
              <div className="text-sm font-semibold text-slate-900">Admin Studio</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
