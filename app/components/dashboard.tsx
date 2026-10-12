"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  Download,
  LayoutDashboard,
  Megaphone,
  BarChart3,
  Search,
  Bell,
  ChevronDown,
  TrendingUp,
  MousePointerClick,
  Users,
  Wallet,
  Play,
  Pause,
  Check,
} from "lucide-react";
import { GrowthChart } from "./analytics-preview";

const initialCampaigns = [
  {
    name: "Summer stories",
    channel: "Meta Ads",
    spend: 1240,
    conversions: 324,
    roas: "4.2×",
    active: true,
  },
  {
    name: "Encuentra tu próxima idea",
    channel: "Google Ads",
    spend: 860,
    conversions: 218,
    roas: "3.8×",
    active: true,
  },
  {
    name: "Tu marca, más cerca",
    channel: "Instagram",
    spend: 420,
    conversions: 96,
    roas: "3.1×",
    active: false,
  },
];
export function Dashboard() {
  const [tab, setTab] = useState("overview");
  const [period, setPeriod] = useState("month");
  const [query, setQuery] = useState("");
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [notification, setNotification] = useState(false);
  const [exported, setExported] = useState(false);
  const filtered = campaigns.filter((c) =>
    `${c.name} ${c.channel}`.toLowerCase().includes(query.toLowerCase()),
  );
  const quarterly = period === "quarter";
  function exportReport() {
    const csv =
      "Campaña,Canal,Inversión USD,Conversiones,ROAS,Estado\n" +
      campaigns
        .map(
          (c) =>
            `${c.name},${c.channel},${c.spend},${c.conversions},${c.roas},${c.active ? "Activa" : "Pausada"}`,
        )
        .join("\n");
    const url = URL.createObjectURL(
      new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8;" }),
    );
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "shareitstudio-campanas-demo.csv";
    anchor.click();
    URL.revokeObjectURL(url);
    setExported(true);
  }
  return (
    <div className="dashboard-shell container">
      <aside className="dashboard-sidebar">
        <div className="workspace-avatar">
          B
          <span>
            Botánica<small>Workspace de demostración</small>
          </span>
        </div>
        <nav aria-label="Secciones del dashboard">
          {[
            { id: "overview", label: "Vista general", icon: LayoutDashboard },
            { id: "campaigns", label: "Campañas", icon: Megaphone },
            { id: "reports", label: "Reportes", icon: BarChart3 },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={tab === item.id ? "selected" : ""}
              aria-pressed={tab === item.id}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="dashboard-help">
          <span className="status-dot" /> Modo demo
          <p>
            Explora sin límites. Todos los datos son ficticios y los cambios se
            reinician al recargar.
          </p>
        </div>
      </aside>
      <div className="dashboard-main">
        <div className="dashboard-top">
          <span>
            Workspace <span>/</span>{" "}
            {tab === "overview"
              ? "Vista general"
              : tab === "campaigns"
                ? "Campañas"
                : "Reportes"}
          </span>
          <button
            className="notification-button"
            aria-label="Mostrar notificaciones"
            aria-expanded={notification}
            onClick={() => setNotification(!notification)}
          >
            <Bell size={18} />
            <i />
          </button>
        </div>
        {notification && (
          <div className="notification-popover" role="status">
            <Check size={18} />
            <span>
              Tu reporte de demostración está listo. No hay alertas pendientes.
            </span>
          </div>
        )}
        <div className="dashboard-heading">
          <div>
            <span className="eyebrow">TU MARCA, EN MOVIMIENTO</span>
            <h1>
              {tab === "overview"
                ? "Hola, equipo Botánica 👋"
                : tab === "campaigns"
                  ? "Ideas activas. Impacto realista."
                  : "Los datos cuentan una historia."}
            </h1>
            <p>Una mirada clara a lo que estás construyendo.</p>
          </div>
          <button className="button button-secondary" onClick={exportReport}>
            <Download size={16} />
            {exported ? "Volver a exportar" : "Exportar CSV"}
          </button>
        </div>
        {exported && (
          <p role="status" className="export-status">
            Reporte CSV con datos de ejemplo descargado.
          </p>
        )}
        {tab !== "campaigns" && (
          <>
            <div className="dashboard-controls">
              <span>
                <span className="status-dot" /> Datos simulados · Sin conexión a
                plataformas
              </span>
              <label className="period-control">
                <span className="sr-only">Período del reporte</span>
                <select
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                >
                  <option value="month">Junio 2026</option>
                  <option value="quarter">Abril – junio 2026</option>
                </select>
                <ChevronDown size={14} />
              </label>
            </div>
            <div className="dashboard-kpis">
              {[
                {
                  label: "Conversiones",
                  value: quarterly ? "38,520" : "12,846",
                  delta: "+24.8%",
                  icon: MousePointerClick,
                },
                {
                  label: "Engagement",
                  value: quarterly ? "9.16%" : "8.42%",
                  delta: "+18.6%",
                  icon: Users,
                },
                {
                  label: "Retorno de inversión",
                  value: quarterly ? "4.6×" : "4.2×",
                  delta: "+12.4%",
                  icon: TrendingUp,
                },
                {
                  label: "Inversión en medios",
                  value: quarterly ? "$7,560" : "$2,520",
                  delta: "+8.2%",
                  icon: Wallet,
                },
              ].map((k) => (
                <div key={k.label} className="dashboard-kpi">
                  <div>
                    <span>{k.label}</span>
                    <k.icon size={17} />
                  </div>
                  <strong>{k.value}</strong>
                  <small>
                    <ArrowUpRight size={12} />
                    {k.delta} <span>vs. período anterior</span>
                  </small>
                </div>
              ))}
            </div>
            <div className="dashboard-charts">
              <div className="dashboard-chart">
                <div className="chart-heading">
                  <h3>El crecimiento, en perspectiva</h3>
                  <span className="live-pill">Conversiones</span>
                </div>
                <GrowthChart alternate={quarterly} />
                <div className="chart-months">
                  {(quarterly
                    ? ["Abril", "Mayo", "Junio"]
                    : ["01 jun", "07 jun", "14 jun", "21 jun", "30 jun"]
                  ).map((label) => (
                    <span key={label}>{label}</span>
                  ))}
                </div>
              </div>
              <div className="channel-card">
                <h3>De dónde llega tu comunidad</h3>
                <p>Distribución del tráfico · Demo</p>
                <div className="donut">
                  <span>
                    <strong>{quarterly ? "96.4K" : "32.1K"}</strong>visitas
                  </span>
                </div>
                <div className="channel-legend">
                  {[
                    ["Orgánico", "42%"],
                    ["Social", "35%"],
                    ["Paid media", "23%"],
                  ].map(([label, percent], i) => (
                    <div key={label}>
                      <i className={`channel-${i}`} />
                      <span>{label}</span>
                      <strong>{percent}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
        {tab !== "reports" && (
          <section className="campaign-section">
            <div className="campaign-heading">
              <div>
                <h3>
                  Campañas en movimiento{" "}
                  <span>
                    {campaigns.filter((c) => c.active).length} activas
                  </span>
                </h3>
                <p>Prueba pausar o activar una campaña.</p>
              </div>
              <label className="campaign-search">
                <Search size={16} />
                <input
                  placeholder="Buscar campaña…"
                  aria-label="Buscar campañas"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </label>
            </div>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Campaña</th>
                    <th>Estado</th>
                    <th>Inversión</th>
                    <th>Conversiones</th>
                    <th>ROAS</th>
                    <th>
                      <span className="sr-only">Acciones</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((c) => (
                    <tr key={c.name}>
                      <td>
                        <strong>{c.name}</strong>
                        <small>{c.channel}</small>
                      </td>
                      <td>
                        <span
                          className={`campaign-state ${c.active ? "" : "paused"}`}
                        >
                          <i />
                          {c.active ? "Activa" : "Pausada"}
                        </span>
                      </td>
                      <td>${c.spend.toLocaleString("en-US")}</td>
                      <td>{c.conversions}</td>
                      <td>{c.roas}</td>
                      <td>
                        <button
                          className="campaign-action"
                          aria-label={`${c.active ? "Pausar" : "Activar"} ${c.name}`}
                          onClick={() =>
                            setCampaigns((current) =>
                              current.map((item) =>
                                item.name === c.name
                                  ? { ...item, active: !item.active }
                                  : item,
                              ),
                            )
                          }
                        >
                          {c.active ? <Pause size={16} /> : <Play size={16} />}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filtered.length === 0 && (
                <p className="empty-state">
                  No encontramos campañas para “{query}”. Prueba otra búsqueda.
                </p>
              )}
            </div>
          </section>
        )}
        {tab === "reports" && (
          <div className="report-note">
            <BarChart3 size={24} />
            <div>
              <h3>Tu reporte, listo para compartir.</h3>
              <p>
                Exporta el CSV de campañas para explorar las métricas simuladas.
                Este dashboard no está conectado a servicios publicitarios.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
