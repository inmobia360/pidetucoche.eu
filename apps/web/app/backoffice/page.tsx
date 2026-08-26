import Link from "next/link";

export default function BackofficePage() {
  return <main className="backoffice-page"><div className="backoffice-shell">
    <Link className="wordmark backoffice-brand" href="/"><span className="brand-mark"><span>✓</span></span><span>PideTuCoche<span className="orange">.eu</span></span></Link>
    <div className="backoffice-header"><div><p className="eyebrow"><span className="eyebrow-line" /> Centro de operaciones</p><h1>Tu equipo, al volante.</h1><p>La cola de solicitudes, los expedientes y las tareas aparecerán aquí cuando el acceso esté protegido.</p></div><span className="lock-pill">Acceso restringido</span></div>
    <section className="backoffice-grid" aria-label="Estado del backoffice"><article><span className="metric-label">Solicitudes nuevas</span><strong>—</strong><small>CRM pendiente de conexión</small></article><article><span className="metric-label">En seguimiento</span><strong>—</strong><small>Sin datos operativos</small></article><article><span className="metric-label">SLA de respuesta</span><strong>—</strong><small>Se definirá con el equipo piloto</small></article></section>
    <section className="backoffice-empty"><span className="empty-icon">⌕</span><h2>El centro está preparado.</h2><p>Para mostrar leads reales faltan dos controles: identidad del equipo mediante OIDC/MFA y una base de datos PostgreSQL en región UE.</p><Link className="button button-primary" href="/">Volver a la web <span>↗</span></Link></section>
  </div></main>;
}
