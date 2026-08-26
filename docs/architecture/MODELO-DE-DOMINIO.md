# Modelo de dominio inicial

## 1. Agregados

### Customer

Identidad, contacto, direcciones, preferencias, consentimientos y estado de verificación. Los documentos de identidad se almacenan separados y con acceso restringido.

### Request

Necesidad del comprador: presupuesto, marcas/modelos, carrocería, combustible, cambio, km, año, uso, provincia, plazo, financiación y vehículo de entrega.

### Case

Expediente principal que vincula comprador, solicitud, owner, estado, encargo, candidatos, reserva, compra, operación, documentos y soporte.

### SearchOrder

Contrato temporal de búsqueda: criterios esenciales, tolerancias, precio, inicio, fin, estado, versión y pago.

### VehicleOpportunity

Vehículo obtenido de una fuente autorizada: identificadores, disponibilidad, caducidad, datos técnicos, estado, derechos, documentos, costes y referencia externa.

### CandidateProposal

Versión comercial de una oportunidad para un expediente: desglose, riesgos, garantía, plazo, precio máximo y aceptación/rechazo.

### PricingScenario

Cálculo inmutable/versionado con todos los costes, provisiones, impuestos, contribución y puja máxima.

### Reservation

Reserva condicionada: candidato, contrato, importe, caducidad, pago, estado, exclusividad y reembolso.

### Contract

Documento versionado con plantilla, datos renderizados, hash, aceptación, soporte duradero y relaciones complementarias.

### PaymentTransaction

Intento, pago, transferencia, reembolso o disputa con proveedor, referencia, importe decimal, moneda, estado e idempotencia.

### Purchase

Adquisición profesional: fuente, puja, adjudicación, factura, régimen fiscal, coste real, VIN y aprobaciones.

### TransportOrder

Recogida, destino, proveedor, seguro, coste, ETA, estados, evidencias y reclamaciones.

### Inspection

Checklist, hallazgos, severidad, resultado, fotografías, diagnóstico y recomendaciones.

### WorkOrder

Preparación/reparación: taller, presupuesto, autorización, piezas, horas, factura, evidencias y resultado.

### Delivery

Cita, identidad, documentos, saldo, transferencia, acta, kilómetros, llaves y firma.

### SupportCase

Consulta, reclamación, transporte, garantía o posventa con prioridad, SLA, owner, comunicaciones y resolución.

### AuditEvent

Registro append-only de actor, acción, recurso, antes/después permitido, motivo, correlación, IP/contexto permitido y fecha.

## 2. Relaciones principales

```text
Customer 1 ── N Case
Case 1 ── 1 Request
Case 1 ── N SearchOrder
Case 1 ── N CandidateProposal
CandidateProposal N ── 1 VehicleOpportunity
CandidateProposal 1 ── N PricingScenario
Case 1 ── N Reservation
Reservation 1 ── N PaymentTransaction
Reservation N ── 1 Contract
Case 1 ── 0..1 Purchase
Purchase 1 ── N TransportOrder
Purchase 1 ── N Inspection
Inspection 1 ── N WorkOrder
Case 1 ── 0..1 Delivery
Case 1 ── N SupportCase
```

## 3. Invariantes

- Un candidato solo puede tener una reserva activa exclusiva.
- Una reserva confirmada exige contrato y pago confirmados.
- Una compra exige margen ≥1.000 €, caja y autorización.
- El VIN completo no es público.
- Ningún coste aceptado se sobrescribe; se crea una versión.
- Los importes usan decimal y moneda explícita.
- Las fechas se almacenan en UTC y se presentan en zona local.
- Los documentos económicos y contractuales no se eliminan; se revocan/versionan según retención.
- Los eventos de proveedor se procesan una sola vez por clave.
- Un partner solo accede a órdenes asignadas.
- Marketing no es requisito para prestar el servicio.

## 4. Clasificación de datos

| Clase | Ejemplos | Control |
| --- | --- | --- |
| Público | Marca, contenido, FAQ | Cacheable y publicable |
| Interno | SLA, configuración, costes agregados | Personal autorizado |
| Confidencial | Margen, puja, facturas, fuente | RBAC y auditoría |
| Personal | Nombre, email, teléfono, dirección | Minimización y derechos RGPD |
| Altamente sensible | DNI, cuenta bancaria, documentos firmados | Cifrado, acceso restringido, no logs |

## 5. Value objects

- `Money(amount: Decimal, currency: EUR)`
- `Vin`
- `Mileage`
- `DateRange`
- `Percentage`
- `TaxRegime`
- `PriceBreakdown`
- `IdempotencyKey`
- `DocumentHash`
- `ContactConsent`

## 6. Políticas de persistencia

- Claves internas UUID; identificadores públicos no secuenciales.
- Restricciones de unicidad para referencias externas e idempotencia.
- Optimistic locking/version para candidatos, pricing y reserva.
- Transacciones para estado + ledger + outbox.
- Soft delete solo donde sea legal; no sustituye una política de retención.
- Migraciones forward y rollback operativo documentado.
- Datos sintéticos en desarrollo y staging.

