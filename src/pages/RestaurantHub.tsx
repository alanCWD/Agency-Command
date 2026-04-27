import { motion } from 'motion/react';
import { 
  UtensilsCrossed, 
  ChefHat, 
  CreditCard, 
  Settings, 
  Globe, 
  GripVertical,
  Plus,
  Power,
  RefreshCw,
  MoreVertical,
  Clock,
  CheckCircle,
  Bell,
  Mail,
  Smartphone,
  Volume2,
  Store,
  Video,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const TABS = ['Live Orders', 'Menu Manager', 'POS Integration', 'Google Sync', 'Notifications'];

export function RestaurantHub() {
  const [activeTab, setActiveTab] = useState('Notifications'); // Defaulting to the new tab for visibility during development

  return (
    <div className="space-y-6 w-full max-w-6xl mx-auto pb-24 h-full flex flex-col">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-white w-fit px-2 py-1 rounded inline-block -mx-2">Native Ordering Engine</h1>
            <p className="text-sm text-slate-500">Universal translating layer between Google Order Flow and Third-Party POS.</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 bg-white shadow-sm border border-slate-200 px-4 py-2 rounded-lg transition-colors">
              <Settings size={14} /> Engine Settings
            </button>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200 pb-px shrink-0">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === tab 
                ? 'border-indigo-600 text-indigo-700' 
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <motion.div 
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex-1"
      >
        {activeTab === 'POS Integration' && <POSView />}
        {activeTab === 'Menu Manager' && <MenuManagerView />}
        {activeTab === 'Live Orders' && <LiveOrdersView />}
        {activeTab === 'Google Sync' && <GoogleSyncView />}
        {activeTab === 'Notifications' && <NotificationsView />}
      </motion.div>
    </div>
  );
}

function POSView() {
  const [integrations, setIntegrations] = useState([
    { id: 'square', name: 'Square POS', desc: 'Seamlessly sync your catalog, inventory, and orders.', abbr: 'SQ', status: 'connected', connId: '884-ACX' },
    { id: 'toast', name: 'Toast', desc: 'Enterprise-grade restaurant management and POS.', abbr: 'TS', status: 'disconnected' },
    { id: 'clover', name: 'Clover', desc: 'Versatile hardware and software suite for dining.', abbr: 'CL', status: 'error' },
    { id: 'deliverect', name: 'Deliverect', desc: 'Omnichannel order management and aggregator hub.', abbr: 'DL', status: 'offline' },
    { id: 'lightspeed', name: 'Lightspeed', desc: 'Cloud-based advanced point of sale for hospitality.', abbr: 'LS', status: 'disconnected' },
    { id: 'touchbistro', name: 'TouchBistro', desc: 'Complete restaurant management system.', abbr: 'TB', status: 'disconnected' },
    { id: 'revel', name: 'Revel Systems', desc: 'Cloud-based iPad POS and unified business platform.', abbr: 'RV', status: 'disconnected' },
    { id: 'olo', name: 'Olo', desc: 'B2B digital ordering and delivery SaaS platform.', abbr: 'OL', status: 'disconnected' }
  ]);
  const [refreshingId, setRefreshingId] = useState<string | null>(null);

  const handleRefresh = (id: string) => {
    setRefreshingId(id);
    setTimeout(() => {
      setIntegrations(prev => prev.map(int => {
        if (int.id === id) {
          return { ...int, status: 'connected', connId: `${Math.floor(Math.random() * 900) + 100}-ACX` };
        }
        return int;
      }));
      setRefreshingId(null);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="bg-indigo-600 rounded-2xl p-6 lg:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <CreditCard size={120} />
        </div>
        <div className="relative z-10 w-full max-w-3xl border-b border-indigo-500/50 pb-6 mb-6">
          <h2 className="text-xl font-bold mb-2">Bring Your Own POS (BYOPOS)</h2>
          <p className="text-indigo-100 text-sm leading-relaxed">
            Our Native Ordering Engine passes digital web orders directly into your client's existing workflow. Map items directly, throttling orders dynamically when the kitchen gets slammed.
          </p>
        </div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {integrations.map(pos => (
            <div key={pos.id} className={`bg-white rounded-xl p-5 border-2 relative flex flex-col shadow-sm transition-all ${
              pos.status === 'connected' ? 'border-emerald-500' :
              pos.status === 'error' ? 'border-red-500' :
              pos.status === 'offline' ? 'border-amber-500' :
              'border-slate-200 border opacity-80 hover:opacity-100 hover:border-indigo-300'
            }`}>
              {pos.status !== 'disconnected' && (
                <div className={`absolute -top-3 -right-3 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full flex gap-1 items-center shadow-sm ${
                  pos.status === 'connected' ? 'bg-emerald-500' :
                  pos.status === 'error' ? 'bg-red-500' :
                  'bg-amber-500'
                }`}>
                  {pos.status === 'connected' ? <CheckCircle size={10} /> : <Power size={10} />}
                  {pos.status}
                </div>
              )}

              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                pos.status === 'connected' ? 'bg-slate-900 text-white' : 
                pos.status === 'error' ? 'bg-red-50 text-red-600' :
                pos.status === 'offline' ? 'bg-amber-50 text-amber-600' :
                'bg-slate-50 text-slate-400 border border-slate-200'
              }`}>
                <span className="font-black tracking-tight text-lg">{pos.abbr}</span>
              </div>
              
              <h3 className="text-slate-900 font-bold text-sm">{pos.name}</h3>
              
              <p className={`text-[10px] uppercase tracking-widest font-bold mt-1 mb-2 transition-colors ${pos.connId ? 'text-slate-500' : 'text-transparent'}`}>
                ID: {pos.connId || 'N/A'}
              </p>

              <p className="text-xs text-slate-600 mb-4 border-b border-slate-100 pb-4 line-clamp-2">{pos.desc}</p>
              
              <div className="mt-auto flex flex-col gap-2">
                {pos.status === 'disconnected' ? (
                  <button className="w-full text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 py-2 rounded hover:bg-indigo-100 transition-colors">
                    Connect
                  </button>
                ) : (
                  <>
                    {pos.status === 'connected' && (
                      <button className="w-full text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 py-2 rounded hover:bg-slate-200 transition-colors">
                        Map Menu Items
                      </button>
                    )}
                    <button 
                      onClick={() => handleRefresh(pos.id)}
                      disabled={refreshingId === pos.id}
                      className={`w-full text-[10px] font-bold uppercase tracking-wider py-2 rounded transition-colors flex items-center justify-center gap-1.5 ${
                        refreshingId === pos.id 
                        ? 'bg-slate-100 text-slate-400'
                        : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                      }`}
                    >
                      <RefreshCw size={12} className={refreshingId === pos.id ? 'animate-spin' : ''} />
                      {refreshingId === pos.id ? 'Refreshing...' : 'Refresh Status'}
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex gap-6">
        <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-sm text-slate-900 mb-4 flex items-center gap-2">
            <Clock size={16} className="text-indigo-500" />
            Kitchen Order Throttling
          </h3>
          <p className="text-[11px] text-slate-500 leading-relaxed mb-6">
            Automatically increase web-order quoted completion times or pause accepting new orders if the POS API indicates the kitchen queue is full.
          </p>
          <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg bg-slate-50">
            <div>
              <div className="text-xs font-bold text-slate-900">Auto-Throttling</div>
              <div className="text-[10px] text-slate-500">Currently observing 4 active tickets</div>
            </div>
            <div className="w-10 h-5 bg-emerald-500 rounded-full relative shadow-inner cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-sm text-slate-900 mb-4 flex items-center gap-2">
            <RefreshCw size={16} className="text-blue-500" />
            Sync Logs & Webhooks
          </h3>
          <div className="space-y-3">
            {[
              { msg: 'Order #1104 injected to Square success', time: '2 mins ago', status: 'success' },
              { msg: 'Menu catalog structure polled', time: '1 hr ago', status: 'success' },
              { msg: 'Modifier out of sync: "Extra Cheese"', time: '3 hrs ago', status: 'error' },
            ].map((log, i) => (
               <div key={i} className="flex items-center justify-between text-xs border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                 <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${log.status === 'success' ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                    <span className="text-slate-600 font-medium">{log.msg}</span>
                 </div>
                 <span className="text-[10px] text-slate-400 font-bold uppercase">{log.time}</span>
               </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuManagerView() {
  const [categories, setCategories] = useState([
    { id: 'c1', name: 'Burgers & Sandwiches' },
    { id: 'c2', name: 'Appetizers' },
    { id: 'c3', name: 'Sides' },
    { id: 'c4', name: 'Drinks' },
    { id: 'c5', name: 'Desserts' }
  ]);
  const [activeCategoryId, setActiveCategoryId] = useState('c1');
  const [items, setItems] = useState([
    { id: 'item-1', name: 'The Classic Smash', price: '$12.50', map: 'SQ-88931', status: 'In Stock', categoryId: 'c1', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&h=200', syncStatus: 'synced' },
    { id: 'item-2', name: 'Double Bacon BBQ', price: '$15.00', map: 'SQ-88932', status: 'In Stock', categoryId: 'c1', image: 'https://images.unsplash.com/photo-1594212202875-8eb4439c3628?auto=format&fit=crop&w=200&h=200', syncStatus: 'synced' },
    { id: 'item-3', name: 'Spicy Chicken Sandwich', price: '$13.50', map: 'SQ-88935', status: '86\'d', categoryId: 'c1', image: null, syncStatus: 'missing' },
    { id: 'item-4', name: 'Loaded Nachos', price: '$14.00', map: 'SQ-88940', status: 'In Stock', categoryId: 'c2', image: null, syncStatus: 'missing' },
    { id: 'item-5', name: 'Truffle Fries', price: '$8.50', map: 'SQ-88942', status: 'In Stock', categoryId: 'c3', image: null, syncStatus: 'missing' },
  ]);

  const activeCategory = categories.find(c => c.id === activeCategoryId);
  const activeItems = items.filter(i => i.categoryId === activeCategoryId);

  const handleAddCategory = () => {
    const name = prompt('Enter new category name:');
    if (name) {
      const newCat = { id: `c${Date.now()}`, name };
      setCategories([...categories, newCat]);
      setActiveCategoryId(newCat.id);
    }
  };

  const handleSimulateUpload = (id: string) => {
    // Simulating uploading an image that is processed via Bunny.net
    setItems(items.map(item => {
      if (item.id === id) {
        return { 
          ...item, 
          image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=200&h=200', 
          syncStatus: 'syncing' 
        };
      }
      return item;
    }));
    
    // Simulate sync completion to Bunny and GBP
    setTimeout(() => {
      setItems(currentItems => currentItems.map(item => 
        item.id === id ? { ...item, syncStatus: 'synced' } : item
      ));
    }, 2500);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm h-full flex overflow-hidden">
      {/* Categories sidebar */}
      <div className="w-72 border-r border-slate-100 bg-slate-50/50 flex flex-col">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Categories</span>
          <button 
            onClick={handleAddCategory}
            className="text-indigo-600 hover:bg-indigo-50 p-1 rounded-md transition-colors"
            title="Add Category"
          >
            <Plus size={18} />
          </button>
        </div>
        <div className="p-2 space-y-1 overflow-y-auto">
          {categories.map((cat, i) => (
             <div 
                key={cat.id} 
                onClick={() => setActiveCategoryId(cat.id)}
                className={`flex items-center justify-between p-2 rounded-lg text-sm font-semibold cursor-pointer group transition-all ${
                  activeCategoryId === cat.id 
                    ? 'bg-white border border-slate-200 shadow-sm text-indigo-700' 
                    : 'text-slate-600 hover:bg-slate-100 border border-transparent'
                }`}
              >
               <div className="flex items-center gap-2">
                 <GripVertical size={14} className="text-slate-300 group-hover:text-slate-400 cursor-grab" />
                 {cat.name}
               </div>
               <div className={`text-[10px] px-1.5 py-0.5 rounded-md ${activeCategoryId === cat.id ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-200 text-slate-500'}`}>
                 {items.filter(item => item.categoryId === cat.id).length}
               </div>
             </div>
          ))}
        </div>
        <div className="p-4 border-t border-slate-100 bg-slate-50 text-xs text-slate-500 font-medium pb-4">
          <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-2">
            <Globe size={12} /> Google Sync Note
          </div>
          Categories map directly to <code>MenuSection</code> in Schema.org and Google Food Ordering. Reordering here changes the live layout.
        </div>
      </div>

      {/* Items list */}
      <div className="flex-1 flex flex-col bg-white">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white z-10 sticky top-0">
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-slate-900 text-lg">{activeCategory?.name}</h2>
            <button className="text-[10px] uppercase tracking-wider font-bold text-slate-400 hover:text-indigo-600 transition-colors">Edit Name</button>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded flex items-center gap-1 shadow-sm transition-colors">
            <Plus size={14} /> Add Item
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {activeItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-3 p-8 border-2 border-dashed border-slate-100 rounded-xl">
              <UtensilsCrossed size={48} className="text-slate-200" />
              <p className="text-sm font-medium">No items in this category.</p>
              <button className="text-indigo-600 font-bold text-xs uppercase tracking-wider">Add the first item</button>
            </div>
          ) : (
            activeItems.map((item) => (
              <div key={item.id} className="group border border-slate-200 rounded-xl p-4 hover:border-indigo-300 transition-colors shadow-sm flex gap-4 bg-white relative overflow-hidden">
                <div className="pt-1 cursor-grab">
                  <GripVertical size={16} className="text-slate-300 group-hover:text-slate-400" />
                </div>
                
                {/* Image Upload Zone */}
                <div 
                  onClick={() => !item.image && handleSimulateUpload(item.id)}
                  className={`w-28 h-28 rounded-lg flex flex-col items-center justify-center shrink-0 border-2 overflow-hidden relative ${
                    item.image 
                      ? 'border-transparent shadow-sm' 
                      : 'border-dashed border-slate-200 hover:border-indigo-400 cursor-pointer bg-slate-50 hover:bg-indigo-50/50 transition-colors group/upload'
                  }`}
                >
                  {item.image ? (
                    <>
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                        <span className="text-white text-[10px] font-bold uppercase tracking-widest">Replace</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <Plus size={20} className="text-slate-300 group-hover/upload:text-indigo-400 mb-1 transition-colors" />
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 group-hover/upload:text-indigo-500 text-center px-2">Drop Media</span>
                    </>
                  )}
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-base">{item.name}</h3>
                    <div className="flex gap-2 items-center">
                      <select 
                        className="text-[10px] font-bold uppercase tracking-wider bg-slate-50 border border-slate-200 text-slate-600 px-2 py-1 rounded-md outline-none cursor-pointer hover:bg-slate-100"
                        value={item.categoryId}
                        onChange={(e) => {
                          setItems(items.map(i => i.id === item.id ? { ...i, categoryId: e.target.value } : i));
                        }}
                      >
                        {categories.map(c => (
                          <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                      </select>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${item.status === 'In Stock' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                        {item.status}
                      </span>
                      <button className="text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 hover:bg-slate-100 p-1.5 rounded-md"><MoreVertical size={16}/></button>
                    </div>
                  </div>
                  <div className="font-black text-slate-900 mt-0.5">{item.price}</div>
                  
                  <div className="mt-auto flex items-center gap-4 text-xs font-semibold text-slate-500 pt-3">
                    <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md text-slate-600">
                      Map: {item.map}
                    </span>
                    
                    {/* Sync Status Badge */}
                    <div className="flex items-center gap-1.5">
                      {item.syncStatus === 'synced' && (
                        <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                          <CheckCircle size={12} /> Bunny + GBP Synced
                        </span>
                      )}
                      {item.syncStatus === 'syncing' && (
                        <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                          <RefreshCw size={12} className="animate-spin" /> Pushing to CDN & Google...
                        </span>
                      )}
                      {item.syncStatus === 'missing' && (
                        <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                          Media Missing
                        </span>
                      )}
                    </div>
                    
                    <button className="text-indigo-600 hover:underline ml-auto">Edit Modifiers (3)</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function LiveOrdersView() {
  const STAGES = ['New & Unconfirmed', 'In Kitchen', 'Ready for Pickup'];
  const [orders, setOrders] = useState([
    {
      id: 'o1',
      number: '#1105',
      customer: 'Sarah J.',
      source: 'Google Pay',
      items: ['1x Double Bacon BBQ', '-- No Onions', '2x Large Fries'],
      total: '$22.50',
      status: 'New & Unconfirmed',
      timeInfo: 'Just now',
      prepTime: ''
    },
    {
      id: 'o2',
      number: '#1103',
      customer: 'Mike D.',
      source: 'Website',
      items: ['3 items'],
      total: '$34.00',
      status: 'In Kitchen',
      timeInfo: '8m ago',
      prepTime: '20m'
    }
  ]);

  const handleAccept = (id: string) => {
    const time = window.prompt('Enter estimated prep time (e.g., 15m, 20m):', '15m');
    if (time !== null) {
      setOrders(orders.map(o => o.id === id ? { ...o, status: 'In Kitchen', prepTime: time, timeInfo: 'Just now' } : o));
    }
  };

  const handleReady = (id: string) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: 'Ready for Pickup', timeInfo: 'Ready' } : o));
  };

  const handleComplete = (id: string) => {
    setOrders(orders.filter(o => o.id !== id));
  };

  return (
    <div className="flex h-full gap-4">
      {STAGES.map((stage) => {
        const stageOrders = orders.filter(o => o.status === stage);
        return (
          <div key={stage} className="flex-1 bg-slate-200/50 rounded-2xl p-4 flex flex-col border border-slate-200/60">
            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="font-bold text-slate-700 text-sm">{stage}</h3>
              <span className="bg-white text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
                {stageOrders.length}
              </span>
            </div>
            
            <div className="space-y-3 flex-1 overflow-y-auto">
              {stageOrders.map(order => (
                <div key={order.id} className={`bg-white p-4 rounded-xl shadow-sm border border-slate-200 ${order.status === 'New & Unconfirmed' ? 'border-l-4 border-l-indigo-500' : ''}`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-slate-900">{order.number} - {order.customer}</span>
                    {order.status === 'New & Unconfirmed' ? (
                      <span className="text-[10px] uppercase font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{order.source}</span>
                    ) : (
                      <span className="text-slate-400 text-xs font-medium flex items-center gap-1"><Clock size={12}/> {order.timeInfo}</span>
                    )}
                  </div>
                  
                  {order.status === 'New & Unconfirmed' ? (
                    <ul className="text-xs text-slate-600 space-y-1 font-medium mb-3">
                      {order.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  ) : (
                    <div className="text-xs text-slate-500 font-medium mb-3">
                      {order.items.length === 1 ? order.items[0] : `${order.items.length} items`}
                      {order.prepTime && <div className="text-indigo-600 mt-1 font-bold bg-indigo-50 w-fit px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">Prep: {order.prepTime}</div>}
                    </div>
                  )}

                  {order.status === 'New & Unconfirmed' && (
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 mt-2">
                      <span className="font-black text-slate-900">{order.total}</span>
                      <button 
                        onClick={() => handleAccept(order.id)}
                        className="bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded hover:bg-indigo-700 transition-colors"
                      >
                        Accept Order
                      </button>
                    </div>
                  )}
                  
                  {order.status === 'In Kitchen' && (
                    <button 
                      onClick={() => handleReady(order.id)}
                      className="w-full text-slate-700 bg-slate-100 border border-slate-200 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded hover:bg-slate-200 shadow-sm mt-1 transition-colors"
                    >
                      Mark Ready
                    </button>
                  )}

                  {order.status === 'Ready for Pickup' && (
                    <button 
                      onClick={() => handleComplete(order.id)}
                      className="w-full text-emerald-700 bg-emerald-100 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded hover:bg-emerald-200 shadow-sm mt-1 transition-colors"
                    >
                      Complete Handoff
                    </button>
                  )}
                </div>
              ))}
              
              {stageOrders.length === 0 && (
                <div className="h-24 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-slate-400 text-xs font-bold uppercase tracking-wider">
                  Empty
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function NotificationsView() {
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [fallbackEnabled, setFallbackEnabled] = useState(true);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col max-w-3xl">
      <div className="p-6 border-b border-slate-100 bg-slate-50">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Bell className="text-indigo-600" size={24} /> Order Routing & Alerts
        </h2>
        <p className="text-sm text-slate-500 mt-2">
          Configure how your kitchen and front-of-house staff are notified of incoming Native Orders when the POS integration is active, or use these as primary alerts.
        </p>
      </div>

      <div className="p-6 space-y-8 divide-y divide-slate-100">
        
        {/* In-App Alerts */}
        <div className="flex flex-col gap-4 pt-0">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                <Volume2 size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Dashboard & Sound Alerts</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-md">
                  Play a loud 'ding' and show a browser notification whenever this dashboard is open and a new order drops.
                </p>
              </div>
            </div>
            <div 
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`w-11 h-6 rounded-full relative cursor-pointer shadow-inner transition-colors duration-200 ${soundEnabled ? 'bg-emerald-500' : 'bg-slate-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow transition-transform duration-200 ${soundEnabled ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
            </div>
          </div>
        </div>

        {/* SMS Routing */}
        <div className="flex flex-col gap-4 pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                <Smartphone size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">SMS Text Routing</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-md">
                  Send an instant text message to the manager or kitchen tablet. Includes a fast-link to accept the order.
                </p>
              </div>
            </div>
            <div 
              onClick={() => setSmsEnabled(!smsEnabled)}
              className={`w-11 h-6 rounded-full relative cursor-pointer shadow-inner transition-colors duration-200 ${smsEnabled ? 'bg-emerald-500' : 'bg-slate-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow transition-transform duration-200 ${smsEnabled ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
            </div>
          </div>
          {smsEnabled && (
            <div className="ml-14 flex items-center gap-3">
              <input 
                type="tel" 
                placeholder="(555) 000-0000" 
                className="flex-1 max-w-xs border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-shadow"
                defaultValue="(555) 123-4567"
              />
              <button className="bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg hover:bg-indigo-100 transition-colors">Test SMS</button>
            </div>
          )}
        </div>

        {/* Email Routing */}
        <div className="flex flex-col gap-4 pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Email Routing</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-md">
                  Send full order manifests, customer details, and modifier receipts to a kitchen printer email outbox.
                </p>
              </div>
            </div>
            <div 
              onClick={() => setEmailEnabled(!emailEnabled)}
              className={`w-11 h-6 rounded-full relative cursor-pointer shadow-inner transition-colors duration-200 ${emailEnabled ? 'bg-emerald-500' : 'bg-slate-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow transition-transform duration-200 ${emailEnabled ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
            </div>
          </div>
          {emailEnabled && (
            <div className="ml-14 flex items-center gap-3">
              <input 
                type="email" 
                placeholder="kitchen@restaurant.com" 
                className="flex-1 max-w-xs border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-shadow"
                defaultValue="orders@acmeplumbing.com"
              />
              <button className="bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors">Add Additional</button>
            </div>
          )}
        </div>

        {/* Fallback & Advanced */}
        <div className="flex flex-col gap-4 pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center shrink-0">
                <Power size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">POS Fallback Alerting</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-md">
                  If your integrated POS system (e.g. Square) goes offline or rejects an order payload, immediately trigger emergency SMS and Email alerts.
                </p>
              </div>
            </div>
            <div 
              onClick={() => setFallbackEnabled(!fallbackEnabled)}
              className={`w-11 h-6 rounded-full relative cursor-pointer shadow-inner transition-colors duration-200 ${fallbackEnabled ? 'bg-rose-500' : 'bg-slate-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow transition-transform duration-200 ${fallbackEnabled ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
            </div>
          </div>
        </div>

      </div>
      
      <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
        <button className="bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
          Save Notification Settings
        </button>
      </div>
    </div>
  );
}

function GoogleSyncView() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col max-w-3xl">
      <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
          <Globe size={24} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">Aggregator Defense & SEO Hub</h2>
          <p className="text-sm text-slate-500 mt-1 leading-relaxed max-w-xl">
            We treat your Google Business Profile (GBP) as the absolute Source of Truth. If you update Google, your website automatically obeys, blocking third-party aggregators (Yelp, DoorDash) from hijacking your native search traffic.
          </p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        
        {/* GBP Driven Events */}
        <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:border-indigo-300 transition-colors">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-100 p-1.5 rounded text-indigo-700">
                <Store size={16} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">GBP-Driven Events & Offers</h3>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full flex items-center gap-1">
              <CheckCircle size={12} /> Live Sync
            </span>
          </div>
          <div className="p-4 bg-white flex gap-6 items-start">
            <div className="flex-1">
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                <strong>How it works:</strong> You never need to log in here to create promotions. Simply create an "Event" or "Offer" Post directly in your Google Maps app. Our backend instantly detects the webhook and automatically generates a high-converting, SEO-optimized landing page on your native website.
              </p>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex justify-between items-center">
                <div>
                  <div className="text-xs font-bold text-slate-900">"$5 Friday IPAs"</div>
                  <div className="text-[10px] text-slate-500">Detected on GBP 2 hours ago</div>
                </div>
                <button className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 hover:underline">View Auto-Page</button>
              </div>
            </div>
            <div className="w-32 shrink-0 bg-slate-100 rounded-lg p-2 border border-slate-200 text-center flex flex-col items-center justify-center">
              <Smartphone size={24} className="text-slate-400 mb-2" />
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Post via Google Maps App</span>
            </div>
          </div>
        </div>

        {/* Action Link Dominance */}
        <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:border-indigo-300 transition-colors">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-100 p-1.5 rounded text-emerald-700">
                <CreditCard size={16} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">First-Party Order Action Link</h3>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full flex items-center gap-1">
              <CheckCircle size={12} /> Preferred Status
            </span>
          </div>
          <div className="p-4 bg-white">
             <p className="text-xs text-slate-600 leading-relaxed mb-3">
               We inject <code>schema.org/OrderAction</code> and utilize the Google Food Ordering API to declare this website as the strictly preferred, first-party provider. This forces Google to render our zero-commission "Order Online" button *above* DoorDash and UberEats links in local search results.
             </p>
             <div className="flex items-center justify-between p-3 border border-slate-200 rounded bg-slate-50">
               <div>
                 <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                   Native Engine Link <span className="bg-indigo-100 text-indigo-700 text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider">Indexed</span>
                 </div>
                 <div className="text-[11px] text-slate-500 mt-0.5">https://acmeplumbing.com/order</div>
               </div>
               <button className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-indigo-600 transition-colors">Verify Rank</button>
             </div>
          </div>
        </div>

        {/* Review Schema Hijacking */}
        <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:border-indigo-300 transition-colors">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <div className="bg-amber-100 p-1.5 rounded text-amber-700">
                <Clock size={16} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Review Schema Bridging</h3>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-600 px-2 py-1 rounded-full flex items-center gap-1">
               Automated
            </span>
          </div>
          <div className="p-4 bg-white">
             <p className="text-xs text-slate-600 leading-relaxed mb-3">
               To prevent Yelp from outranking your native site, we pull 5-star reviews from your GBP via API and inject them into hidden <code>AggregateRating</code> JSON-LD schemas. This forcefully prints the golden review stars natively beneath *your* website link in standard Google searches.
             </p>
             <div className="p-3 bg-slate-800 rounded text-slate-300 font-mono text-[10px] leading-relaxed overflow-x-auto shadow-inner">
               {`"aggregateRating": {`} <br />
               &nbsp;&nbsp;{`"@type": "AggregateRating",`} <br />
               &nbsp;&nbsp;{`"ratingValue": "4.8",`} <br />
               &nbsp;&nbsp;{`"reviewCount": "214",`} <br />
               &nbsp;&nbsp;{`"itemReviewed": { "@type": "Restaurant", "name": "Acme Plumbing Burgers" }`} <br />
               {`}`}
             </div>
          </div>
        </div>

        {/* Branded Video Engine */}
        <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:border-indigo-300 transition-colors">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <div className="bg-rose-100 p-1.5 rounded text-rose-700">
                <Video size={16} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Branded Video Review Pipeline</h3>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-700 px-2 py-1 rounded-full flex items-center gap-1">
              <Zap size={12} /> Bunny Stream
            </span>
          </div>
          <div className="p-4 bg-white flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                <strong>The Workaround:</strong> Google doesn't accept video directly into text reviews via API. When our engine stitches the user's 3 short clips into a branded video, we push that video to <strong>Bunny Stream</strong> for lightning-fast playback on your website, and automatically push it to GBP as a <strong>"Customer Spotlight" Google Post</strong>.
              </p>
              <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                   <CheckCircle size={12} className="text-emerald-500" /> Website: VideoObject Schema Injected
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                   <CheckCircle size={12} className="text-emerald-500" /> GBP: Synced as "Google Update" Post
                 </div>
              </div>
            </div>
            <div className="w-full md:w-40 shrink-0 bg-slate-50 rounded-lg p-2 border border-slate-200">
              <div className="flex items-center justify-center gap-1 mb-2">
                <div className="h-6 w-8 bg-slate-200 border border-slate-300 rounded border-dashed"></div>
                <div className="text-slate-300 text-xs">+</div>
                <div className="h-6 w-8 bg-slate-200 border border-slate-300 rounded border-dashed"></div>
                <div className="text-slate-300 text-xs">+</div>
                <div className="h-6 w-8 bg-slate-200 border border-slate-300 rounded border-dashed"></div>
              </div>
              <div className="bg-rose-600 text-white text-[9px] font-bold uppercase tracking-widest text-center py-1 rounded">
                Stitched Output
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

