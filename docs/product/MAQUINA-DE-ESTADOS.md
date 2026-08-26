# Máquina de estados y transiciones

## 1. Expediente principal

```text
LEAD
→ QUALIFIED
→ SEARCHING
→ CANDIDATE_APPROVED
→ RESERVED
→ BIDDING
→ WON
→ IN_TRANSIT
→ RECEIVED
→ INSPECTION
→ PREPARATION
→ READY
→ DELIVERED
→ CLOSED
```

Estados terminales alternativos: `REJECTED`, `EXPIRED`, `LOST`, `REFUNDED`, `CANCELLED`.

## 2. Reglas globales

- Toda transición tiene actor, fecha, motivo, estado anterior, estado nuevo y correlación.
- Una transición sensible conserva versión y evidencia.
- Solo el servicio de dominio puede cambiar estados; nunca el cliente o la URL directamente.
- Las operaciones repetidas con la misma clave de idempotencia devuelven el resultado anterior.
- Un error externo no revierte silenciosamente una transición financiera confirmada.
- Los estados terminales no se reabren; se crea una nueva revisión o expediente enlazado.

## 3. Guardas principales

| Transición | Guardas |
| --- | --- |
| LEAD → QUALIFIED | Identidad/contacto, necesidad, presupuesto y consentimiento de servicio |
| QUALIFIED → SEARCHING | Encargo válido y pago confirmado cuando aplique |
| SEARCHING → CANDIDATE_APPROVED | Candidato vigente, versión aceptada y derechos válidos |
| CANDIDATE_APPROVED → RESERVED | Contrato, reserva y pago confirmados |
| RESERVED → BIDDING | Margen ≥1.000 €, caja, doble aprobación y puja máxima |
| BIDDING → WON | Confirmación manual y evidencia de adjudicación |
| WON → IN_TRANSIT | Compra registrada y orden de transporte aceptada |
| IN_TRANSIT → RECEIVED | VIN/km/fotos y acta de recepción |
| RECEIVED → INSPECTION | Sin incidencia de transporte bloqueante |
| INSPECTION → PREPARATION | Inspección aprobada o reparación autorizada |
| PREPARATION → READY | Control final, documentación e importes actualizados |
| READY → DELIVERED | Saldo, identidad, ITV/seguro aplicables y acta firmada |
| DELIVERED → CLOSED | Costes reales, documentos, garantía y encuesta emitida |

## 4. Subestados financieros

### Pago

`CREATED → PENDING → CONFIRMED → RECONCILED`

Alternativos: `FAILED`, `EXPIRED`, `REFUND_PENDING`, `REFUNDED`, `DISPUTED`.

Un retorno de Checkout solo muestra `PENDING`; el webhook verificado puede producir `CONFIRMED`.

### Reembolso

`REQUESTED → REVIEWED → APPROVED → SUBMITTED → CONFIRMED → RECONCILED`

Alternativos: `REJECTED`, `FAILED`, `CANCELLED`.

Solicitante y aprobador deben ser distintos por encima del umbral configurado.

## 5. Encargo de búsqueda

`DRAFT → AWAITING_ACCEPTANCE → AWAITING_PAYMENT → ACTIVE → COMPLETED`

Alternativos: `EXPIRED`, `CANCELLED`, `REFUND_PENDING`, `REFUNDED`.

Una prórroga crea una nueva aceptación con fecha final; no altera la versión histórica.

## 6. Candidato

`DRAFT → INTERNAL_REVIEW → PROPOSED → VIEWED → APPROVED`

Alternativos: `REJECTED`, `EXPIRED`, `WITHDRAWN`, `UNAVAILABLE`.

Una modificación de precio, vehículo, kilometraje, defectos, garantía o plazo crea una nueva versión y requiere nueva aprobación.

## 7. Inspección

`SCHEDULED → IN_PROGRESS → REVIEW_REQUIRED → PASSED`

Alternativos: `REPAIR_REQUIRED`, `REJECTED`, `CANCELLED`.

`REPAIR_REQUIRED` exige presupuesto y puede volver a `IN_PROGRESS` tras la reparación.

## 8. Caso de soporte

`OPEN → TRIAGED → IN_PROGRESS → WAITING_CUSTOMER/WAITING_PROVIDER → RESOLVED → CLOSED`

Alternativos: `REOPENED`, `REJECTED`.

Los SLA se pausan únicamente bajo una regla explícita y auditable.

## 9. Eventos de dominio mínimos

- `request.submitted`
- `request.qualified`
- `search_order.activated`
- `candidate.proposed`
- `candidate.approved`
- `reservation.confirmed`
- `purchase.authorized`
- `bid.won` / `bid.lost`
- `transport.started`
- `vehicle.received`
- `inspection.passed` / `inspection.repair_required`
- `vehicle.ready`
- `delivery.completed`
- `refund.confirmed`
- `support_case.opened`
- `warranty_case.resolved`

