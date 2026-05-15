import React from 'react';
import { ProviderType } from '../context/providerContext';
import { useProvider } from '../context/useProvider';
import { LayoutDashboard, Cloud, ShieldCheck, Settings, Bell } from 'lucide-react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { activeProvider, setActiveProvider } = useProvider();

  const providers: ProviderType[] = ['ALL', 'AWS', 'Azure', 'GCP', 'Salesforce'];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Glass Navigation */}
      <nav className="glass-nav sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Cloud className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">MultiCloud <span className="text-blue-400">Manager</span></span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
            {providers.map((p) => (
              <button
                key={p}
                onClick={() => setActiveProvider(p)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeProvider === p
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <Bell className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
            <Settings className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border border-white/20" />
          </div>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/5 p-6 flex flex-col gap-2">
          <SidebarItem icon={<LayoutDashboard size={20} />} label="Overview" active />
          <SidebarItem icon={<ShieldCheck size={20} />} label="Security" />
          <SidebarItem icon={<Cloud size={20} />} label="Resources" />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-black/40 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
    active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'
  }`}>
    {icon}
    <span className="font-medium">{label}</span>
  </div>
);
