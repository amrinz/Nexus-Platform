import { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Settings, 
  Bell, 
  Search, 
  ChevronRight, 
  ArrowRight, 
  Zap, 
  Shield, 
  Globe,
  Menu,
  X,
  Plus,
  TrendingUp,
  Activity,
  CreditCard
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = ({ onDashboardClick }: { onDashboardClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
            <Zap className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">Nexus</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-brand-600 transition-colors">Product</a>
          <a href="#" className="hover:text-brand-600 transition-colors">Features</a>
          <a href="#" className="hover:text-brand-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-brand-600 transition-colors">Resources</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Log in</button>
          <button 
            onClick={onDashboardClick}
            className="bg-brand-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onDashboardClick }: { onDashboardClick: () => void }) => {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            New: AI-Powered Insights v2.0
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            Scale your data <br />
            <span className="text-brand-600">without limits.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Nexus provides the infrastructure you need to build, deploy, and scale data-intensive applications in minutes, not months.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onDashboardClick}
              className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
              Book a Demo
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-slate-400">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  className="w-10 h-10 rounded-full border-2 border-white"
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm font-medium">Trusted by 2,000+ teams worldwide</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-400 rounded-full blur-3xl opacity-20"></div>
          
          <div className="relative glass rounded-3xl p-4 shadow-2xl border border-white/40 overflow-hidden">
            <img 
              src="https://picsum.photos/seed/dashboard/1200/800" 
              className="rounded-2xl w-full shadow-inner"
              alt="Dashboard Preview"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-brand-600/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-110 transition-transform">
                <Plus className="w-8 h-8 rotate-45" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Dashboard = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-right border-slate-200 hidden lg:flex flex-col">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
            <Zap className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">Nexus</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Main Menu</div>
          {[
            { icon: LayoutDashboard, label: 'Overview', active: true },
            { icon: BarChart3, label: 'Analytics' },
            { icon: Users, label: 'Team' },
            { icon: Activity, label: 'Reports' },
          ].map((item, i) => (
            <a 
              key={i} 
              href="#" 
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${item.active ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </a>
          ))}

          <div className="pt-8 px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">System</div>
          {[
            { icon: Settings, label: 'Settings' },
            { icon: Shield, label: 'Security' },
            { icon: Bell, label: 'Notifications' },
          ].map((item, i) => (
            <a 
              key={i} 
              href="#" 
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button 
            onClick={onBack}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Back to Landing
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search analytics..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-brand-500 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold">Alex Rivera</p>
                <p className="text-xs text-slate-500">Admin</p>
              </div>
              <img 
                src="https://picsum.photos/seed/alex/100/100" 
                className="w-10 h-10 rounded-full border border-slate-200"
                alt="Avatar"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Dashboard Overview</h2>
              <p className="text-slate-500">Welcome back, Alex. Here's what's happening today.</p>
            </div>
            <button className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-700 transition-all flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Create Report
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Revenue', value: '$128,430', change: '+12.5%', icon: CreditCard, color: 'text-blue-600', bg: 'bg-blue-50' },
              { label: 'Active Users', value: '43,201', change: '+18.2%', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
              { label: 'Conversion Rate', value: '3.42%', change: '-2.4%', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { label: 'Avg. Session', value: '12m 45s', change: '+5.1%', icon: Activity, color: 'text-orange-600', bg: 'bg-orange-50' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
              </motion.div>
            ))}
          </div>

          {/* Main Chart Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-900">Revenue Growth</h3>
                <select className="text-sm bg-slate-50 border-none rounded-lg px-3 py-1 focus:ring-2 focus:ring-brand-500">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 12 months</option>
                </select>
              </div>
              <div className="h-64 flex items-end gap-2">
                {[40, 60, 45, 80, 95, 70, 85, 60, 75, 90, 100, 80].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                    className="flex-1 bg-brand-500/20 hover:bg-brand-500 transition-colors rounded-t-sm relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      ${h}k
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-6">Recent Activity</h3>
              <div className="space-y-6">
                {[
                  { user: 'Sarah J.', action: 'created a new project', time: '2m ago', img: 'https://picsum.photos/seed/sarah/100/100' },
                  { user: 'Mike D.', action: 'updated billing info', time: '15m ago', img: 'https://picsum.photos/seed/mike/100/100' },
                  { user: 'Emma W.', action: 'invited 3 members', time: '1h ago', img: 'https://picsum.photos/seed/emma/100/100' },
                  { user: 'David K.', action: 'published a report', time: '3h ago', img: 'https://picsum.photos/seed/david/100/100' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <img src={item.img} className="w-8 h-8 rounded-full" alt="" referrerPolicy="no-referrer" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-bold">{item.user}</span> {item.action}
                      </p>
                      <p className="text-xs text-slate-400">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-2 text-sm font-semibold text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">
                View all activity
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<'landing' | 'dashboard'>('landing');

  return (
    <div className="min-h-screen font-sans selection:bg-brand-100 selection:text-brand-700">
      <AnimatePresence mode="wait">
        {view === 'landing' ? (
          <motion.div 
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Navbar onDashboardClick={() => setView('dashboard')} />
            <Hero onDashboardClick={() => setView('dashboard')} />
            
            {/* Features Section */}
            <section className="py-24 bg-white px-6">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                  <h2 className="text-4xl font-bold mb-4 tracking-tight">Everything you need to grow.</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    Nexus combines powerful analytics, team collaboration, and automated workflows into a single, seamless platform.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: Zap, title: 'Lightning Fast', desc: 'Optimized for performance with sub-second response times across the globe.' },
                    { icon: Shield, title: 'Enterprise Secure', desc: 'Bank-grade encryption and compliance standards built into every layer.' },
                    { icon: Globe, title: 'Global Scale', desc: 'Deploy your infrastructure across 20+ regions with a single click.' },
                  ].map((feature, i) => (
                    <div key={i} className="p-8 rounded-3xl border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all group">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-slate-100 px-6">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-brand-600 rounded flex items-center justify-center">
                    <Zap className="text-white w-4 h-4" />
                  </div>
                  <span className="font-bold text-lg tracking-tight">Nexus</span>
                </div>
                <div className="flex gap-8 text-sm text-slate-500">
                  <a href="#" className="hover:text-brand-600">Privacy</a>
                  <a href="#" className="hover:text-brand-600">Terms</a>
                  <a href="#" className="hover:text-brand-600">Contact</a>
                </div>
                <p className="text-sm text-slate-400">© 2026 Nexus Platform Inc. All rights reserved.</p>
              </div>
            </footer>
          </motion.div>
        ) : (
          <motion.div 
            key="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Dashboard onBack={() => setView('landing')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
