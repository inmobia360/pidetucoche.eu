# ADR-001 — Arquitectura inicial del MVP

**Estado:** Aceptada provisionalmente para el MVP
**Fecha:** 26 de agosto de 2026

## Contexto

El MVP debe soportar captación, candidatos, reserva, pagos, documentos, compra manual, logística, inspección, entrega, soporte y auditoría. El volumen inicial no justifica microservicios, pero los dominios necesitan límites claros.

## Decisión propuesta

Construir un monolito modular desplegable como una unidad, con separación interna entre:

- identidad y permisos;
- captación y CRM;
- solicitudes y candidatos;
- pricing y riesgo;
- reservas, contratos y pagos;
- compras y fuentes;
- logística y partners;
- inspección, preparación y entrega;
- documentos y notificaciones;
- soporte y posventa;
- analítica y auditoría.

Usar una base de datos relacional gestionada y una cola/outbox para efectos externos. Mantener API y contratos explícitos entre módulos, migraciones versionadas y auditoría append-only para cambios económicos y legales.

## Consecuencias

- Menor coste y complejidad inicial.
- Transacciones y consistencia más sencillas.
- Los límites modulares deben revisarse para evitar acoplamiento accidental.
- Un módulo solo se separará cuando exista una necesidad demostrada de escala, seguridad o ciclo de despliegue.

## Implementación técnica

El stack, proveedores y prueba de arquitectura se detallan en [ADR-002](ADR-002-stack-tecnico.md). La aceptación definitiva depende del spike técnico y del coste contractual.
