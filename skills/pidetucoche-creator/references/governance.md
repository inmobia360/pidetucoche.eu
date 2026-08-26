# Gobernanza, permisos y gates

## Registro mínimo de dirección

Para un trabajo transversal, conserva:

- objetivo e indicador;
- fase y gate actual;
- backlog priorizado;
- responsable por entregable;
- decisiones aprobadas, pendientes y descartadas;
- riesgos con probabilidad, impacto, mitigación y dueño;
- presupuesto previsto, comprometido y real;
- evidencias y pruebas;
- fecha y condición del próximo go/no-go.

## Gates

### Gate 0 — Decisiones fundacionales

Sociedad vendedora, alcance MVP, mercado piloto, fuente autorizada, modalidad contractual, reserva, garantía, margen mínimo, presupuesto y responsables definidos.

### Gate 1 — Diseño operativo y económico

Proceso extremo a extremo, economía unitaria, SOP, roles, permisos, datos, arquitectura y prototipo aprobados. Ninguna cifra crítica queda implícita.

### Gate 2 — MVP en staging

Flujos Must implementados; pagos y reembolsos idempotentes; permisos y concurrencia probados; contratos versionados; trazas, backups, monitorización y manuales disponibles.

### Gate 3 — Piloto privado

Operación simulada aprobada; partner y proveedores listos; soporte y contingencias ensayados; textos legales validados; oportunidades con derechos documentados.

### Gate 4 — Producción controlada

UAT aprobada, sin P0/P1 abiertos, restauración comprobada, analítica verificada, propiedad de cuentas confirmada y acta go/no-go del propietario.

### Gate 5 — Escalado

Durante al menos cuatro semanas: margen real positivo, reembolsos controlados, SLA cumplido, calidad aceptable, soporte disponible, partner homologado y CAC dentro del límite aprobado.

## Permisos

### Permitido sin aprobación adicional dentro de una tarea autorizada

- Leer archivos del proyecto y realizar comprobaciones no destructivas.
- Crear análisis, propuestas, pruebas y cambios locales comprendidos en la solicitud.
- Usar datos sintéticos o anonimizados en desarrollo.

### Requiere aprobación explícita inmediatamente antes

- Comprar, pujar, cobrar, reembolsar o comprometer presupuesto.
- Firmar, enviar o publicar contratos, textos legales o comunicaciones externas.
- Activar campañas pagadas o cambiar precios públicos.
- Desplegar a producción, migrar datos reales o cambiar infraestructura/DNS.
- Acceder a AUTO1, Stripe, banca, CRM, correo, datos personales o cuentas de proveedores.
- Instalar dependencias o skills no revisadas cuando afecten el entorno compartido.
- Borrar datos, expedientes, backups o artefactos materiales.

## Revisión cruzada obligatoria

| Cambio | Revisiones mínimas |
| --- | --- |
| Precio, puja o margen | Finanzas + Producto + Dirección |
| Reserva, garantía o reembolso | Legal + Finanzas + Producto |
| Pago o webhook | Backend + Finanzas + QA/Seguridad |
| Datos personales o permisos | Legal/Privacidad + Backend + QA/Seguridad |
| Mensaje comercial | Marketing + Marca + Legal cuando haya afirmaciones sensibles |
| Compra, transporte o entrega | Operaciones + Finanzas + Atención al cliente |
| Go-live | Todas las áreas críticas + propietario |

## Severidad

- **P0:** caída, pérdida de datos, acceso indebido, cobro/compra no autorizados o riesgo grave inmediato.
- **P1:** ruptura del flujo principal, precio/pago/reembolso incorrecto, exposición de datos o incumplimiento operativo crítico.
- **P2:** inconsistencia funcional, trazabilidad incompleta, desviación relevante de UX, SLA o control.
- **P3:** mejora de contenido, accesibilidad, mantenibilidad o eficiencia sin bloqueo inmediato.

## Condición de parada

Detén la acción y eleva al propietario cuando falte autoridad, una decisión cambie materialmente el modelo, exista conflicto entre fuentes críticas, un proveedor exija gasto o contrato, haya P0/P1 sin mitigación o no pueda verificarse un supuesto que controla dinero, datos personales, derechos o producción.

