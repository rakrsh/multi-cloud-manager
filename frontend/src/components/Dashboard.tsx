import { useProvider } from '../context/useProvider';
import { Activity, Server, Database, ShieldAlert, CheckCircle2, AlertTriangle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockChartData = [
  { name: '00:00', value: 400 },
  { name: '04:00', value: 300 },
  { name: '08:00', value: 600 },
  { name: '12:00', value: 800 },
  { name: '16:00', value: 500 },
  { name: '20:00', value: 900 },
];

export const Dashboard = () => {
  const { activeProvider } = useProvider();

  // In real implementation, this fetches from Go backend
  // const { data, isLoading } = useQuery({
  //   queryKey: ['dashboard', activeProvider],
  //   queryFn: () => axios.get('/api/dashboard').then(res => res.data)
  // });

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <header>
        <h1 className="text-3xl font-bold text-white mb-2">Cloud Infrastructure Overview</h1>
        <p className="text-slate-400">Monitoring real-time health across {activeProvider === 'ALL' ? 'all providers' : activeProvider}.</p>
      </header>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Active Resources" value="1,284" icon={<Server className="text-blue-400" />} trend="+12%" />
        <MetricCard title="System Health" value="99.9%" icon={<Activity className="text-green-400" />} trend="Stable" />
        <MetricCard title="Storage Used" value="4.2 TB" icon={<Database className="text-purple-400" />} trend="+0.4 TB" />
        <MetricCard title="Security Alerts" value="2" icon={<ShieldAlert className="text-orange-400" />} trend="-3" warning />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Health Chart */}
        <div className="lg:col-span-2 glass-card p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Resource Allocation Trend</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockChartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Provider Status (Scenario D) */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Provider Connectivity</h3>
          <div className="space-y-4">
            <ProviderStatusItem name="AWS" status="Healthy" icon={<CheckCircle2 className="text-green-500 w-5 h-5" />} />
            <ProviderStatusItem name="Azure" status="Healthy" icon={<CheckCircle2 className="text-green-500 w-5 h-5" />} />
            <ProviderStatusItem name="GCP" status="Degraded" icon={<AlertTriangle className="text-orange-500 w-5 h-5" />} warning />
            <ProviderStatusItem name="Salesforce" status="Healthy" icon={<CheckCircle2 className="text-green-500 w-5 h-5" />} />
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, icon, trend, warning = false }: { title: string, value: string, icon: React.ReactNode, trend: string, warning?: boolean }) => (
  <div className="glass-card p-6 relative overflow-hidden group hover:border-white/20 transition-all">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-white/5 rounded-lg">{icon}</div>
      <span className={`text-xs font-medium px-2 py-1 rounded-full ${warning ? 'bg-orange-500/10 text-orange-400' : 'bg-green-500/10 text-green-400'}`}>
        {trend}
      </span>
    </div>
    <div className="text-slate-400 text-sm font-medium mb-1">{title}</div>
    <div className="text-2xl font-bold text-white">{value}</div>
  </div>
);

const ProviderStatusItem = ({ name, status, icon, warning = false }: { name: string, status: string, icon: React.ReactNode, warning?: boolean }) => (
  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
    <div className="flex items-center gap-3">
      {icon}
      <span className="font-medium text-white">{name}</span>
    </div>
    <span className={`text-sm ${warning ? 'text-orange-400' : 'text-green-400'}`}>{status}</span>
  </div>
);
