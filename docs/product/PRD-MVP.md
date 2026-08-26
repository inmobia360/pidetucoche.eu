# PRD — MVP de PideTuCoche.eu

**Versión:** 0.1 · 26 de agosto de 2026

**Estado:** Propuesta ejecutable para revisión del propietario

**Fuentes:** pliego de implantación, Gate 0, guía de implementación y guía Naranja Performance

## 1. Propósito

Crear una plataforma B2C que permita solicitar, seleccionar, reservar, comprar y recibir un vehículo de ocasión bajo pedido, manteniendo control sobre margen, contratos, pagos, documentación, transporte, inspección, entrega y posventa.

La experiencia debe ser digital y transparente aunque las pujas, compras y varias validaciones sean manuales durante el MVP.

## 2. Problema

El comprador no encuentra necesariamente el vehículo adecuado en el stock local y carece de una visión unificada del precio final, riesgos, revisión y entrega. El vendedor tradicional asume riesgo de inventario al comprar antes de validar la demanda.

PideTuCoche.eu debe conectar una necesidad cualificada con oferta profesional autorizada y comprar únicamente después de controles contractuales y económicos.

## 3. Objetivos del MVP

- Captar solicitudes completas y atribuibles.
- Cualificar comprador, presupuesto y necesidad.
- Gestionar encargos de búsqueda de 15 días.
- Presentar candidatos comparables con derechos de uso documentados.
- Obtener aceptación de vehículo y precio máximo en soporte duradero.
- Cobrar y conciliar encargo/reserva sin duplicados.
- Impedir compras con margen inferior a 1.000 € o sin cobertura.
- Seguir compra, transporte, inspección, preparación y entrega.
- Dar al cliente visibilidad de estado, documentos y próximas acciones.
- Gestionar incidencias y garantía con SLA y evidencias.
- Medir conversión, margen, tiempo, calidad y CAC.

## 4. No objetivos

- Stock especulativo.
- Marketplace abierto.
- Puja o compra automática.
- Scraping o API no autorizada.
- App móvil nativa.
- ERP, DMS o software completo de taller.
- Financiación o seguro concedidos por Pide Tu Coche, S.L.
- Decisiones contractuales, económicas o de riesgo tomadas por IA.

## 5. Personas y roles

| Rol | Necesidad principal | Acceso |
| --- | --- | --- |
| Visitante | Entender el servicio y pedir coche | Público |
| Comprador | Comparar, aceptar, pagar y seguir su expediente | Solo expedientes propios |
| Asesor | Cualificar, comunicar y proponer candidatos | CRM y expedientes asignados |
| Compras | Calcular puja y registrar adjudicación | Costes y fuentes autorizadas |
| Finanzas | Cobros, reembolsos, cobertura y conciliación | Datos económicos |
| Operaciones | Transporte, inspección, preparación y entrega | Expedientes adjudicados |
| Partner | Ejecutar órdenes asignadas | Solo órdenes propias |
| Soporte | Consultas, incidencias y garantía | Información necesaria del caso |
| Administrador | Configuración, plantillas y usuarios | Acciones sensibles auditadas |
| Auditor | Revisar trazas y evidencias | Solo lectura |

## 6. Propuesta de valor

> Tu próximo coche, bajo pedido. Lo buscamos, lo revisamos y te lo entregamos.

El cliente debe distinguir claramente:

- solicitud recibida;
- búsqueda activada;
- candidato presentado;
- reserva solicitada y confirmada;
- puja en curso y vehículo adjudicado;
- revisión pendiente, en curso y superada;
- preparación, transporte y entrega;
- garantía legal y comercial.

## 7. Alcance funcional

### 7.1 Web pública

| ID | Requisito | Aceptación |
| --- | --- | --- |
| PUB-001 | Landing responsive Naranja Performance | CTA visible, accesible y funcional desde 320 px |
| PUB-002 | Cómo funciona, confianza, zonas y FAQ | No promete stock, plazo o garantía no acreditados |
| PUB-003 | Páginas legales y contacto | Versión, fecha y sociedad visibles |
| PUB-004 | Analítica y consentimiento | Sin marketing antes del consentimiento válido |

### 7.2 Solicitud y CRM

| ID | Requisito | Aceptación |
| --- | --- | --- |
| REQ-001 | Configurador multistep | Guarda marca/tipo, presupuesto, uso, combustible, km, año, provincia y contacto |
| REQ-002 | Guardado y recuperación | Un borrador puede recuperarse mediante enlace seguro |
| REQ-003 | Consentimientos separados | Servicio y marketing se almacenan de forma independiente |
| CRM-001 | Cola de solicitudes | Asignación, prioridad, owner y SLA visibles |
| CRM-002 | Cualificación | `QUALIFIED` o `REJECTED` exige autor, fecha y motivo |
| CRM-003 | Historial | Notas, email, llamada y WhatsApp quedan registrados sin usar WhatsApp como contrato |

### 7.3 Encargo de búsqueda

| ID | Requisito | Aceptación |
| --- | --- | --- |
| ORD-001 | Crear encargo | Criterios esenciales, tolerancias, 199 €, duración y versión contractual |
| ORD-002 | Activar tras pago | Solo webhook verificado cambia el estado a activo |
| ORD-003 | Caducidad/prórroga | No se prorroga sin aceptación expresa |
| ORD-004 | Cancelación/reembolso | Motivo, cálculo, aprobación y conciliación auditables |

### 7.4 Oportunidades y candidatos

| ID | Requisito | Aceptación |
| --- | --- | --- |
| SRC-001 | Alta manual/CSV | Guarda fuente, derechos, caducidad, costes, documentos y VIN protegido |
| SRC-002 | Adaptador de fuente | AUTO1 se opera manualmente hasta API autorizada |
| CAN-001 | Candidato versionado | Se reproduce exactamente la propuesta presentada |
| CAN-002 | Comparación | Hasta tres candidatos con precio, año, km, riesgos, garantía y plazo |
| CAN-003 | Aprobación/rechazo | Identidad, fecha, motivo y versión quedan registrados |

### 7.5 Pricing y riesgo

| ID | Requisito | Aceptación |
| --- | --- | --- |
| PRI-001 | Desglose de precio | Todos los costes y provisiones tienen origen y versión |
| PRI-002 | Puja máxima | Se calcula de forma determinista y reproducible |
| PRI-003 | Margen mínimo | Bloqueo absoluto por debajo de 1.000 € |
| PRI-004 | Cobertura de caja | Ninguna compra sin confirmación de Finanzas |
| PRI-005 | Doble aprobación | Cambios sensibles conservan solicitante y aprobador distintos |

### 7.6 Reserva y contratación

| ID | Requisito | Aceptación |
| --- | --- | --- |
| RES-001 | Reserva 5 % | Aplica mínimo 1.000 € y máximo 2.000 € |
| RES-002 | Contrato versionado | Hash, versión, aceptación y copia descargable |
| RES-003 | Confirmación de pago | Solo evento de servidor idempotente confirma reserva |
| RES-004 | Doble asignación | Una prueba concurrente demuestra que solo un expediente reserva el candidato |
| RES-005 | Desistimiento/reembolso | Flujo visible, confirmación y plazos configurables |

### 7.7 Compra y operación

| ID | Requisito | Aceptación |
| --- | --- | --- |
| PUR-001 | Autorización de compra | Reserva, contrato, margen y caja son válidos |
| PUR-002 | Puja manual | Límite, operador, hora y resultado registrados |
| PUR-003 | Adjudicación | Coste real, factura, VIN y documentación crean la compra |
| LOG-001 | Transporte | Proveedor, coste, ETA, seguro, fotos y estados |
| INS-001 | Recepción | VIN, km, llaves, documentos y fotos 360º obligatorios |
| INS-002 | Inspección | Checklist, resultado, defectos y bloqueo de entrega |
| REP-001 | Preparación | 300 € base; extras con presupuesto y aprobación |
| DEL-001 | Entrega | Saldo, ITV, seguro, transferencia y acta válidos |

### 7.8 Portal cliente

- Estado actual y siguiente acción.
- Timeline con eventos reales y rangos de fecha.
- Candidatos y comparador.
- Contratos, recibos, facturas e informes.
- Pagos y reembolsos.
- Cita y acta de entrega.
- Incidencias, garantía y archivos.
- Preferencias, consentimientos y derechos de datos.

### 7.9 Portal partner

- Órdenes asignadas y capacidad.
- Recepción, VIN, km y fotografías.
- Inspección y presupuesto.
- Trabajos aprobados.
- Control final y entrega.
- Sin acceso a margen, fuente sensible o clientes ajenos.

### 7.10 Soporte y posventa

| ID | Requisito | Aceptación |
| --- | --- | --- |
| SUP-001 | Crear caso | Categoría, severidad, SLA, owner y expediente |
| SUP-002 | Garantía | Diagnóstico, cobertura, autorizaciones, reparación y cierre |
| SUP-003 | Reclamación | Acuse, comunicaciones y resolución en soporte duradero |
| SUP-004 | Satisfacción | Solo se solicita tras entrega completada |

## 8. Requisitos no funcionales

| Área | Objetivo MVP |
| --- | --- |
| Disponibilidad | 99,5 % mensual, excluyendo mantenimiento comunicado |
| Rendimiento | LCP móvil ≤2,5 s en páginas clave; API p95 <500 ms sin terceros |
| Accesibilidad | WCAG 2.2 AA, teclado, foco, zoom 200 % y lector |
| Seguridad | MFA sensible, RBAC, validación server-side, secretos gestionados |
| Privacidad | Minimización, retención, exportación y borrado/anonimización |
| Auditoría | Append-only para dinero, contrato, permisos y estados críticos |
| Recuperación | RPO ≤24 h y RTO ≤8 h en MVP, restauración ensayada |
| Compatibilidad | Navegadores modernos y diseño 320–1440+ px |

## 9. Métricas

- Solicitudes y cualificación por canal.
- Encargos activados.
- Candidatos por encargo y tiempo de presentación.
- Reservas, adjudicaciones y entregas.
- Margen previsto frente a real.
- Días y SLA por estado.
- Reembolsos, incidencias y coste de garantía.
- CAC por cliente entregado.
- CSAT/NPS tras entrega.

No se mostrarán porcentajes cuando el denominador sea cero.

## 10. Entregas incrementales

### Release 0 — Operación simulada

Modelo de datos, estados, pricing, permisos y expedientes con datos sintéticos.

### Release 1 — Captación

Landing, configurador, CRM, consentimiento y catálogo manual privado.

### Release 2 — Conversión

Encargo, candidatos, comparación, contrato, reserva y portal cliente.

### Release 3 — Operación

Compras, transporte, partner, inspección, preparación y entrega.

### Release 4 — Piloto

Pagos reales, documentos validados, soporte, analítica, monitorización y contingencias.

## 11. Criterios de aceptación del PRD

- Cada requisito Must tiene owner y prueba.
- Legal valida textos y flujos contractuales.
- Finanzas reproduce puja y margen con tres escenarios.
- Operaciones completa una simulación de principio a fin.
- Seguridad revisa permisos, pagos, archivos y datos.
- Diseño cubre estados vacío, carga, error, éxito y bloqueo.
- El propietario aprueba alcance, exclusiones y gates.

## 12. Decisiones abiertas

- Validación definitiva de encargo, reserva y desistimiento.
- Proveedor de identidad, pagos, firma, email, archivos y hosting.
- Garantía externa y tratamiento de 12/18/24 meses.
- Financiación y preaprobación.
- API y derechos de AUTO1.
- Partner, taller, gestoría y transportista piloto.

