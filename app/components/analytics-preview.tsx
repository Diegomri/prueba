"use client";
import { useState, useId } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  MousePointer2,
  MoreHorizontal,
  TrendingUp,
} from "lucide-react";

export function GrowthChart({ alternate = false }: { alternate?: boolean }) {
  const id = useId();
  const path = alternate
    ? "M0 159 C28 167 35 133 66 135 S105 111 134 120 S177 64 207 82 S248 42 276 52 S315 18 350 22"
    : "M0 166 C20 166 27 137 48 145 S71 169 96 138 S115 112 135 120 S153 99 179 112 S200 50 228 63 S261 65 276 45 S320 27 350 13";
  return (
    <svg
      viewBox="0 0 350 205"
      role="img"
      aria-label="Crecimiento ilustrativo de las conversiones"
      className="growth-chart"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff765d" stopOpacity=".2" />
          <stop offset="100%" stopColor="#ff765d" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[20, 65, 110, 155].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="350"
          y2={y}
          stroke="#ecebe7"
          strokeDasharray="3 4"
        />
      ))}
      <path d={`${path} L350 190 L0 190Z`} fill={`url(#${id})`} />
      <path
        d={path}
        fill="none"
        stroke="#f56c53"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="350" cy={alternate ? 22 : 13} r="4" fill="#f56c53" />
    </svg>
  );
}
export function AnalyticsPreview() {
  const [monthly, setMonthly] = useState(true);
  return (
    <div className="hero-visual">
      <div className="visual-grid" />
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="floating-label label-strategy">
        <span>
          <Sparkles size={15} />
        </span>{" "}
        Creatividad que se mide.
      </div>
      <div className="analytics-window">
        <div className="window-toolbar">
          <span className="window-dots">
            <i />
            <i />
            <i />
          </span>
          <span>shareitstudio / tu crecimiento</span>
          <MoreHorizontal size={16} />
        </div>
        <div className="analytics-content">
          <div className="analytics-top">
            <div>
              <span className="mini-eyebrow">VISTA GENERAL</span>
              <h3>
                Tu marca, en movimiento<span>.</span>
              </h3>
            </div>
            <span className="live-pill">
              <i /> Demo
            </span>
          </div>
          <div className="mini-kpis">
            <div>
              <span>Conversiones</span>
              <strong>{monthly ? "12,846" : "38,520"}</strong>
              <small>
                <ArrowUpRight size={12} /> 24.8% <em>vs. período anterior</em>
              </small>
            </div>
            <div>
              <span>Engagement</span>
              <strong>{monthly ? "8.42%" : "9.16%"}</strong>
              <small>
                <ArrowUpRight size={12} /> 18.6% <em>vs. período anterior</em>
              </small>
            </div>
          </div>
          <div className="chart-heading">
            <span>Crecimiento de conversiones</span>
            <button
              onClick={() => setMonthly(!monthly)}
              aria-label="Cambiar período del gráfico"
            >
              {monthly ? "Este mes" : "Este trimestre"}
              <ChevronDown size={12} />
            </button>
          </div>
          <GrowthChart alternate={!monthly} />
          <div className="chart-months">
            {(monthly
              ? ["01 jun", "07 jun", "14 jun", "21 jun", "30 jun"]
              : ["Abr", "Abr–May", "May", "May–Jun", "Jun"]
            ).map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
          <div className="analytics-bottom">
            <span>
              <span className="tiny-coral-dot" /> Conversiones
            </span>
            <span>Datos de demostración</span>
          </div>
        </div>
      </div>
      <div className="floating-result">
        <span className="result-icon">
          <TrendingUp size={22} />
        </span>
        <div>
          <small>El impacto de una buena estrategia</small>
          <strong>
            +128% <span>de crecimiento</span>
          </strong>
        </div>
        <ArrowUpRight size={18} />
      </div>
      <div className="floating-cursor">
        <MousePointer2 size={25} fill="#7161b7" />
        <span>Tu próxima gran idea</span>
      </div>
    </div>
  );
}
