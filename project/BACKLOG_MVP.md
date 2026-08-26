# Backlog MVP

Estados: `PENDIENTE`, `EN CURSO`, `BLOQUEADO`, `HECHO`.

| ID | Área | Entregable | Prioridad | Dependencia | Estado |
| --- | --- | --- | --- | --- | --- |
| GOV-001 | Dirección | Registro de decisiones y propietarios | Must | — | EN CURSO |
| MER-001 | Mercantil | Certificación RMC, marca OEPM y constitución | Must | GOV-001 | PENDIENTE |
| LEG-001 | Legal | Dictamen de sociedad vendedora y contratación B2C | Must | GOV-001 | BLOQUEADO |
| LEG-002 | Legal | Reserva, encargo, reembolso, desistimiento y garantía | Must | LEG-001 | BLOQUEADO |
| FIS-001 | Fiscal | Matriz IVA general, intracomunitario y REBU | Must | MER-001 | BLOQUEADO |
| FIN-001 | Finanzas | Modelo económico por operación y puja máxima | Must | GOV-001 | EN CURSO |
| FIN-002 | Finanzas | Umbrales de margen, caja y doble aprobación | Must | FIN-001 | BLOQUEADO |
| AUTO1-001 | Proveedor | Alta profesional, contrato, API, derechos y tarifas | Must | MER-001 | BLOQUEADO |
| OPS-001 | Operaciones | SOP Ourense: recepción a entrega | Must | GOV-001 | EN CURSO |
| OPS-002 | Operaciones | Homologación de partner piloto y transportista | Must | OPS-001 | BLOQUEADO |
| PRD-001 | Producto | PRD, recorridos y criterios de aceptación | Must | LEG-002, FIN-002 | HECHO |
| ARC-001 | Arquitectura | ADR del monolito modular y stack | Must | PRD-001 | EN CURSO |
| DAT-001 | Datos | Modelo de dominio, estados, permisos y auditoría | Must | PRD-001, ARC-001 | EN CURSO |
| DEV-001 | Desarrollo | Núcleo de dinero, pricing, estados y pruebas unitarias | Must | FIN-001, DAT-001 | HECHO |
| UX-001 | Diseño | Sistema visual y prototipo responsive accesible | Must | PRD-001 | BLOQUEADO |
| WEB-001 | Desarrollo | Landing y configurador de solicitud | Must | UX-001, DAT-001 | BLOQUEADO |
| CRM-001 | Desarrollo | CRM y cualificación de leads | Must | DAT-001 | BLOQUEADO |
| CAT-001 | Desarrollo | Oportunidades manuales/CSV con derechos y caducidad | Must | DAT-001 | BLOQUEADO |
| RES-001 | Desarrollo | Reserva, contrato versionado, pago y reembolso | Must | LEG-002, DAT-001 | BLOQUEADO |
| CLI-001 | Desarrollo | Portal del cliente y documentos | Must | RES-001, UX-001 | BLOQUEADO |
| OPS-003 | Desarrollo | Backoffice y portal partner | Must | DAT-001, OPS-002 | BLOQUEADO |
| QA-001 | QA | Estrategia de pruebas y UAT | Must | PRD-001 | BLOQUEADO |
| SEC-001 | Seguridad | RBAC, secretos, privacidad, backups y respuesta | Must | ARC-001 | BLOQUEADO |
| ANA-001 | Datos | Plan de eventos y definiciones KPI | Must | PRD-001 | BLOQUEADO |
| MKT-001 | Marketing | Plan piloto, mensajes y límite de CAC | Should | FIN-002, LEG-002 | BLOQUEADO |
| SUP-001 | Soporte | SLA, canales, reclamaciones y posventa | Must | OPS-001, LEG-002 | BLOQUEADO |

El backlog debe migrarse a incidencias cuando se aprueben responsables y alcance. `PRD-001` queda respaldado por `docs/product/`; `DEV-001`, por `packages/domain/` y la ejecución de CI. No marcar una tarea como `HECHO` sin evidencia y pruebas.
