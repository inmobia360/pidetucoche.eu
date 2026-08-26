"use client";

import { FormEvent, useState } from "react";

const steps = [
  ["⌕", "Lo buscamos", "Convertimos lo que necesitas en una búsqueda precisa."],
  ["✓", "Lo revisamos", "Comprobamos documentación, estado y coste antes de avanzar."],
  ["↗", "Te lo entregamos", "Coordinamos preparación, transporte y entrega contigo."],
];

function BrandMark() { return <span className="brand-mark" aria-hidden="true"><span>✓</span></span>; }

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [leadReference, setLeadReference] = useState("");
  const [form, setForm] = useState({ vehicle: "", budget: "", fuel: "" });
  const [contact, setContact] = useState({ name: "", email: "", phone: "", province: "", detail: "", serviceConsent: false, marketingConsent: false });
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }
  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, ...contact }) });
    if (response.ok) {
      const result = await response.json() as { id?: string };
      setLeadReference(result.id ?? "");
      setContactSubmitted(true);
    } else if (response.status === 503) {
      setSubmitError("La solicitud es válida, pero el almacenamiento todavía no está conectado. No se ha guardado ningún dato.");
    } else {
      setSubmitError("Revisa los datos e inténtalo de nuevo.");
    }
    setIsSubmitting(false);
  }
  return <main>
    <header className="site-header shell">
      <a className="wordmark" href="#inicio" aria-label="PideTuCoche.eu, inicio"><BrandMark /><span>PideTuCoche<span className="orange">.eu</span></span></a>
      <nav aria-label="Navegación principal"><a href="#proceso">Cómo funciona</a><a href="#confianza">Confianza</a><a href="#preguntas">Preguntas</a></nav>
      <a className="button button-small" href="#solicitud">Pedir mi coche <span>↗</span></a>
    </header>

    <section className="hero" id="inicio"><div className="hero-grid shell">
      <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line" /> Vehículos de ocasión bajo pedido</p><h1>Tu próximo coche,<br /><span>bajo pedido.</span></h1><p className="hero-lede">El coche que quieres existe. Nosotros lo buscamos, lo revisamos y lo llevamos hasta ti.</p><div className="hero-proof"><span className="proof-dot" /> Sin stock especulativo <span className="proof-divider" /> Precio claro antes de decidir</div></div>
      <div className="hero-art" aria-label="Ilustración de un vehículo en proceso de búsqueda" role="img"><div className="sun-ring" /><div className="road-line" /><div className="car-illustration"><div className="car-roof" /><div className="car-body"><i /><i /><b /><b /></div><div className="wheel wheel-left" /><div className="wheel wheel-right" /></div><div className="art-note"><span className="note-icon">✓</span><span><strong>Tu búsqueda</strong><small>en buenas manos</small></span></div></div>
    </div>
    <div className="search-card shell" id="solicitud"><div className="search-card-heading"><span className="card-kicker">01 — Empezamos por ti</span><h2>Dinos qué coche buscas</h2><p>Solo necesitamos tres datos para empezar a orientarte.</p></div>
      {!submitted ? <form className="search-form" onSubmit={submit}>
        <label>Marca o tipo de coche<select required value={form.vehicle} onChange={e => setForm({ ...form, vehicle: e.target.value })}><option value="">Elige una opción</option><option>Compacto</option><option>SUV</option><option>Familiar</option><option>Eléctrico</option><option>Ya sé la marca y modelo</option></select></label>
        <label>Presupuesto máximo<select required value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}><option value="">Hasta cuánto quieres invertir</option><option>Hasta 15.000 €</option><option>15.000 – 25.000 €</option><option>25.000 – 35.000 €</option><option>Más de 35.000 €</option></select></label>
        <label>Combustible<select required value={form.fuel} onChange={e => setForm({ ...form, fuel: e.target.value })}><option value="">Qué prefieres</option><option>Gasolina</option><option>Diésel</option><option>Híbrido</option><option>Eléctrico</option><option>Me da igual</option></select></label>
        <button className="button button-primary" type="submit">Continuar <span>↗</span></button>
      </form> : !contactSubmitted ? <form className="contact-form" onSubmit={submitContact}>
        <div className="contact-heading"><span className="card-kicker">02 — Un último paso</span><h2>¿Cómo te contactamos?</h2><p>Usaremos estos datos solo para hablar de tu búsqueda.</p></div>
        <div className="contact-fields"><label>Nombre<input required value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })} placeholder="Tu nombre" /></label><label>Email<input required type="email" value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} placeholder="tu@email.com" /></label><label>Teléfono<input required type="tel" value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })} placeholder="600 000 000" /></label><label>Provincia<select required value={contact.province} onChange={e => setContact({ ...contact, province: e.target.value })}><option value="">Elige provincia</option><option>Ourense</option><option>Pontevedra</option><option>A Coruña</option><option>Lugo</option><option>Otra provincia</option></select></label></div>
        <label className="detail-field">Cuéntanos algo más (opcional)<textarea value={contact.detail} onChange={e => setContact({ ...contact, detail: e.target.value })} placeholder="Por ejemplo: necesito espacio para una familia de cuatro." maxLength={1000} /></label>
        <label className="consent"><input required type="checkbox" checked={contact.serviceConsent} onChange={e => setContact({ ...contact, serviceConsent: e.target.checked })} /><span>Acepto que PideTuCoche.eu use mis datos para gestionar esta solicitud. <u>Ver privacidad</u></span></label><label className="consent"><input type="checkbox" checked={contact.marketingConsent} onChange={e => setContact({ ...contact, marketingConsent: e.target.checked })} /><span>Quiero recibir novedades y oportunidades por email. (Opcional)</span></label>
        <div className="contact-actions"><button className="text-button" type="button" onClick={() => setSubmitted(false)}>Atrás</button><button className="button button-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? "Enviando…" : "Enviar solicitud"} <span>↗</span></button></div>
        {submitError && <p className="form-error" role="alert">{submitError}</p>}
      </form> : <div className="form-success" role="status"><span className="success-icon">✓</span><div><strong>Solicitud recibida.</strong><p>La referencia {leadReference ? `${leadReference.slice(0, 8)}…` : "está preparada"} queda lista para que nuestro equipo la revise.</p></div><button className="text-button" onClick={() => setContactSubmitted(false)}>Revisar datos</button></div>}
    </div></section>

    <section className="process shell" id="proceso"><div className="section-intro"><p className="eyebrow"><span className="eyebrow-line" /> El proceso PideTuCoche</p><h2>Del “no lo encuentro”<br /><em>al “ya es mío”.</em></h2></div><div className="steps">{steps.map(([icon, title, text], index) => <article className={`step step-${index + 1}`} key={title}><span className="step-number">0{index + 1}</span><span className="step-icon">{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="trust-section" id="confianza"><div className="shell trust-grid"><div><p className="eyebrow light"><span className="eyebrow-line" /> Una forma más tranquila de comprar</p><h2>Decides con<br /><span>toda la información.</span></h2></div><div className="trust-list"><div><span>01</span><p><strong>Precio final estimado</strong><br />Con los costes importantes sobre la mesa antes de reservar.</p></div><div><span>02</span><p><strong>Revisión documentada</strong><br />El estado del vehículo se comprueba y se explica con claridad.</p></div><div><span>03</span><p><strong>Acompañamiento real</strong><br />Una persona coordina tu expediente de principio a fin.</p></div></div></div></section>

    <section className="faq shell" id="preguntas"><div><p className="eyebrow"><span className="eyebrow-line" /> Antes de empezar</p><h2>Preguntas<br /><em>normales.</em></h2></div><div className="faq-items"><details open><summary>¿Compráis coches antes de que los solicite?</summary><p>No. El modelo inicial trabaja bajo pedido para evitar stock especulativo. Primero entendemos tu necesidad y después valoramos candidatos de fuentes profesionales autorizadas.</p></details><details><summary>¿Cuánto cuesta iniciar una búsqueda?</summary><p>La propuesta de Gate 0 contempla un encargo de búsqueda de 199 €, con condiciones de activación y reembolso que deben quedar recogidas en el contrato.</p></details><details><summary>¿Puedo decidir antes de reservar?</summary><p>Sí. Recibirás la información del candidato y el precio estimado para aceptar o rechazar antes de avanzar.</p></details></div></section>
    <footer className="site-footer"><div className="shell footer-row"><a className="wordmark" href="#inicio"><BrandMark /><span>PideTuCoche<span className="orange">.eu</span></span></a><span className="footer-copy">Tu próximo coche, bajo pedido.</span><span className="footer-legal">Pide Tu Coche, S.L. · Galicia, España</span></div></footer>
  </main>;
}
