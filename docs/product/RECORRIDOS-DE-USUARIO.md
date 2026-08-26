# Recorridos de usuario del MVP

## 1. Solicitud gratuita

```text
Landing
→ Configurador
→ Resumen y privacidad
→ Solicitud recibida
→ Asignación de asesor
→ Cualificación
```

El usuario conoce antes de enviar qué datos se usan, que todavía no reserva ni compra y cuándo recibirá respuesta.

### Excepciones

- Borrador abandonado: recuperación segura y marketing solo con consentimiento.
- Solicitud duplicada: sugerir continuar expediente; no fusionar automáticamente.
- Presupuesto inviable: explicación y alternativas, sin promesa falsa.

## 2. Encargo de búsqueda

```text
Comprador cualificado
→ Criterios esenciales y tolerancias
→ Contrato/versionado
→ Solicitud expresa de inicio cuando corresponda
→ Pago de 199 €
→ Webhook confirmado
→ Búsqueda activa por 15 días
```

### Salidas

- Candidato conforme presentado.
- Prórroga aceptada.
- Sin candidato: reembolso.
- Cancelación/desistimiento: flujo contractual y conciliación.

## 3. Selección de candidato

```text
Búsqueda activa
→ Candidato versionado
→ Comparación
→ Riesgos y precio total
→ Aceptar o rechazar
→ Registrar decisión
```

La aprobación identifica exactamente vehículo, versión, precio máximo y caducidad. Un cambio relevante genera una nueva versión.

## 4. Reserva condicionada

```text
Candidato aprobado
→ Verificación económica
→ Contrato de reserva
→ Pago 5 % (1.000–2.000 €)
→ Confirmación por servidor
→ Reserva confirmada
→ Autorización de compra
```

### Bloqueos

- Candidato caducado o asignado.
- Pago no confirmado.
- Margen inferior a 1.000 €.
- Caja insuficiente.
- Contrato o identidad incompletos.

## 5. Compra manual

```text
Reserva válida
→ Compras revisa puja máxima
→ Finanzas confirma cobertura
→ Operador puja manualmente
→ WON / LOST
```

Si `LOST`, el cliente elige reembolso o un nuevo candidato. Si `WON`, se registra factura, coste real, VIN y documentación.

## 6. Transporte y recepción

```text
Vehículo adjudicado
→ Orden de transporte AUTO1
→ Recogida con evidencias
→ En tránsito
→ Recepción
→ Verificación VIN/km/documentos
→ Inspección
```

Un daño de transporte abre incidencia y bloquea manipulación/reparación hasta conservar evidencias.

## 7. Preparación y entrega

```text
Inspección superada o reparación aprobada
→ Preparación base
→ Control final
→ Documentación/ITV/transferencia
→ Saldo confirmado
→ Cita
→ Acta de entrega
→ DELIVERED
```

No se entrega sin saldo, acta, identidad y documentación mínima.

## 8. Posventa y garantía

```text
Incidencia
→ Triage y SLA
→ Diagnóstico
→ Cobertura
→ Autorización
→ Reparación o medida correctora
→ Evidencia
→ Cierre y satisfacción
```

La póliza externa no deriva al cliente fuera del canal ni elimina la responsabilidad de Pide Tu Coche, S.L.

## 9. Recorrido interno diario

### Dirección

- Riesgos, decisiones, caja comprometida y gates.

### Asesor

- Cola SLA, cualificación, candidatos y comunicaciones.

### Compras/Finanzas

- Reservas confirmadas, pujas máximas, cobertura, adjudicaciones y desviaciones.

### Operaciones

- Transportes, recepciones, inspecciones, reparaciones y entregas bloqueadas.

### Soporte

- Casos nuevos, SLA, garantía y reclamaciones.

