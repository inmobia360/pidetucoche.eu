# PideTuCoche.eu — Pliego de implantación digital

> **Plataforma B2C de vehículos de ocasión bajo pedido**  
> **Marca:** PideTuCoche.eu · **Identidad:** Naranja Performance  
> **Base operativa:** Ourense, Galicia, España  
> **Versión:** 2.0 — 26 de agosto de 2026  
> **Finalidad:** especificación funcional, técnica y operativa para solicitar propuesta, presupuesto y ejecución del MVP

## Mensaje de marca

> **Tu próximo coche, bajo pedido.**  
> Lo buscamos · Lo revisamos · Te lo entregamos

## Nota de uso

Este Markdown es la versión técnica para repositorios, Notion o herramientas de documentación. El DOCX sigue siendo el documento maquetado de presentación. La imagen de marca incluida en el informe Word es una referencia conceptual: el equipo debe reconstruir logotipo, iconos y pantallas como originales vectoriales y componentes reales.

---

# 0. Cómo utilizar este pliego

Este documento es la fuente funcional de referencia para producto, UX/UI, desarrollo, QA, DevOps, operaciones, legal y proveedores. La empresa desarrolladora deberá identificar expresamente cualquier desviación, supuesto o funcionalidad no incluida en su oferta.

| Regla | Aplicación |
| --- | --- |
| Prioridad | Los requisitos Must forman el MVP contractual. Los Should/Could se estiman por separado. |
| Trazabilidad | Cada requisito numerado debe vincularse a diseño, tarea técnica y prueba de aceptación. |
| Cambios | Después de congelar el alcance, todo cambio requiere impacto en coste, plazo y riesgo. |
| Legal | Las reglas configurables se implementan técnicamente; los textos y criterios definitivos los valida asesoría española. |
| Datos de terceros | No se realizará scraping ni republicación sin autorización expresa. |
| Operación | Cuando una automatización no sea segura o viable en cuatro semanas, el MVP debe ofrecer una tarea manual trazable. |

## 0.1 Decisiones ya aprobadas

- Marca: PideTuCoche.eu. Descriptor: “Vehículos de ocasión bajo pedido”.
- Identidad: Naranja Performance; azul noche #0B132B, naranja #FF5A1F y blanco cálido #F8F7F3.
- Base de operaciones: Ourense, con partners provinciales homologados para recepción, revisión y entrega.
- AUTO1.com es la primera fuente profesional de referencia, pero el producto debe admitir otras fuentes.
- Las pujas y compras serán manuales en el MVP; no existe dependencia de API para lanzar.
- La empresa española compra profesionalmente y vende al consumidor; el partner no es vendedor salvo contrato futuro específico.
- Lanzamiento piloto: Galicia y un partner adicional; expansión después de validar proceso y calidad.
## 0.2 Glosario operativo

| Término | Definición |
| --- | --- |
| Oportunidad | Vehículo candidato sujeto a disponibilidad/adjudicación; no equivale a stock propio. |
| Solicitud | Necesidad registrada por un visitante, todavía sin cualificación. |
| Encargo | Mandato temporal para buscar vehículos que cumplen criterios acordados. |
| Reserva condicionada | Importe y aceptación que habilitan la operación bajo condiciones definidas; no garantiza adjudicación. |
| Precio final autorizado | Máximo aceptado por el comprador, con conceptos y supuestos documentados. |
| Puja máxima | Límite interno calculado para preservar costes, impuestos, riesgo y margen. |
| Partner | Proveedor homologado que recibe, revisa, prepara o entrega por cuenta de la sociedad vendedora. |
| Expediente | Registro único que agrupa comprador, criterios, candidatos, contratos, pagos, vehículo y eventos. |

# 1. Resumen ejecutivo

PideTuCoche.eu será una plataforma B2C española para solicitar y adquirir vehículos de ocasión bajo pedido. El cliente no queda limitado al stock físico de un concesionario: define su necesidad, recibe oportunidades procedentes de canales profesionales autorizados, acepta un candidato y un precio máximo, formaliza una reserva condicionada y sigue digitalmente la compra, transporte, revisión, preparación y entrega.

DECISIÓN DE PRODUCTO La experiencia debe sentirse digital y transparente para el comprador, aunque la compra en la subasta, la revisión económica y varias decisiones de riesgo sean manuales en el MVP. Cada intervención manual tendrá responsable, fecha, evidencia y resultado.

## 1.1 Objetivos de negocio

- Reducir capital inmovilizado y riesgo de inventario retenido.
- Comprar solamente unidades respaldadas por demanda cualificada y precio aceptado.
- Obtener margen de compraventa y contribución de financiación, garantía, transporte o servicios permitidos.
- Centralizar control, documentación y calidad en Ourense sin obligar a que todo vehículo pase físicamente por el hub.
- Construir una red nacional de partners con SLA, evidencias y liquidaciones controladas.
- Validar como referencia cinco ventas mensuales y más de 10.000 € de contribución bruta en el tercer mes; no es garantía financiera.
## 1.2 Indicadores de éxito del MVP

| Dimensión | Indicador | Meta inicial/criterio |
| --- | --- | --- |
| Conversión | Solicitud cualificada / lead | Medir por canal; línea base en primeras 4 semanas. |
| Comercial | Reserva / solicitud cualificada | Objetivo inicial a validar: 10–20 %. |
| Compra | Adjudicación / candidato aprobado | Registrar por fuente, marca y rango de precio. |
| Margen | Contribución prevista vs. real | Desviación visible por operación y concepto. |
| Operación | Días reserva → entrega | Rango comunicado y SLA por etapa. |
| Calidad | Incidencias postentrega | Tipología, coste, responsable y tiempo de resolución. |
| Experiencia | NPS/CSAT tras entrega | Recoger solo después de operación completada. |
| Caja | Capital comprometido y cobrado | Panel diario; ninguna compra sin cobertura aprobada. |

# 2. Modelo de negocio y contractual

## 2.1 Actores

| Actor | Responsabilidad | No debe asumir |
| --- | --- | --- |
| Sociedad PideTuCoche | Compra profesional, venta B2C, precio, contratos, garantía y atención. | No atribuir disponibilidad que no controla. |
| Comprador | Define necesidad, aporta documentación, acepta condiciones, reserva y paga. | No accede a datos internos o credenciales de subasta. |
| Fuente profesional | Ofrece unidades y documentación bajo sus condiciones. | No se presenta como vendedor B2C de PideTuCoche. |
| Transportista | Recogida, custodia y entrega logística. | No valida mecánica ni precio. |
| Partner provincial | Recepción, inspección, trabajos aprobados y entrega. | No se presenta como vendedor salvo acuerdo específico. |
| Financiador/garantía | Presta servicios regulados o cobertura contractual. | PideTuCoche no suplanta autorizaciones regulatorias. |

## 2.2 Modalidad A — oportunidad concreta

1. Operador crea una oportunidad autorizada con caducidad.
1. Cliente consulta condiciones y solicita reserva.
1. Equipo valida identidad, capacidad económica, disponibilidad y margen.
1. Cliente acepta contrato, precio máximo y reserva condicionada.
1. Comprador profesional ejecuta la puja manual.
1. Adjudicada: se crea compra y logística. No adjudicada: reembolso, alternativa o continuidad conforme al contrato.
## 2.3 Modalidad B — búsqueda por encargo

1. Cliente configura presupuesto, modelos, antigüedad, km, combustible, uso y tolerancias.
1. Asesor valida viabilidad y propone rango realista.
1. Cliente acepta orden de búsqueda de 7–15 días y tarifa/reserva deducible.
1. Operador propone candidatos comparables con diferencias visibles.
1. Cliente aprueba por soporte duradero un candidato y precio máximo.
1. Se ejecuta compra manual y continúa el expediente hasta entrega.
## 2.4 Fuentes de ingresos y control

| Fuente | Tratamiento en sistema | Regla |
| --- | --- | --- |
| Margen de compraventa | Previsto y real, separado de impuestos y provisiones. | Mínimo configurable y bloqueo de puja. |
| Tarifa de búsqueda | Pedido, factura y condición de deducción/reembolso. | Contrato y comunicación previa. |
| Financiación | Comisión registrada cuando sea legal y liquidada. | Consentimiento y proveedor autorizado. |
| Garantía ampliada | Producto, cobertura, coste y comisión separados. | No confundir con garantía legal. |
| Transporte/entrega | Coste repercutido o incluido, siempre visible. | No doble contabilización. |
| Servicios adicionales | Gestoría, preparación, accesorios o entrega premium. | Opt-in y precio antes de contratar. |

# 3. Alcance del MVP y exclusiones

## 3.1 Incluido — Must

- Web pública responsive y orientada a conversión con identidad PideTuCoche.eu.
- Configurador de vehículo bajo pedido y captación de leads.
- Gestión manual/CSV de oportunidades autorizadas, con caducidad.
- Comparación de candidatos y desglose de precio final.
- Reserva condicionada, contrato versionado, cobro y reembolso.
- Portal cliente con timeline, documentos, pagos, incidencias y entrega.
- Backoffice con CRM, pipeline, cálculo económico, compras y auditoría.
- Portal partner con recepción, inspección, fotos, presupuestos y entrega.
- Notificaciones transaccionales por email y enlaces WhatsApp controlados.
- Analítica, dashboard, exportaciones, consentimientos, RGPD y cookies.
- Staging, producción, monitorización, backups y documentación de traspaso.
## 3.2 Fuera del MVP

- Scraping o copia masiva de AUTO1 u otra fuente.
- API AUTO1 no documentada/autorizada.
- Puja o compra automática.
- Marketplace abierto multi-vendedor.
- Aplicaciones móviles nativas.
- Concesión propia de crédito o seguro.
- ERP, contabilidad o DMS de taller completo.
- Escrow complejo, franquicias o liquidación automática de comisiones.
- Importación extracomunitaria y homologaciones complejas.
- IA que apruebe riesgos o decisiones contractuales sin supervisión.
## 3.3 Estrategia de datos de catálogo

REGLA CRÍTICA Solo se publicarán imágenes, descripciones y datos para los que PideTuCoche disponga de derecho de uso. Si la fuente no autoriza republicación, el MVP utilizará fichas representativas propias, datos introducidos manualmente y propuestas privadas al cliente.

# 4. Usuarios, roles y permisos

| Rol | Funciones | Restricciones clave |
| --- | --- | --- |
| Visitante | Contenido, simulación, solicitud y contacto. | Sin datos privados ni internos de fuente. |
| Comprador | Expediente, candidatos, reserva, documentos, pagos y seguimiento. | Solo sus expedientes. |
| Asesor | Leads, cualificación, propuestas y comunicación. | No altera coste base ni autoriza compras. |
| Comprador profesional | Costes, puja máxima, adjudicación y fuente. | Doble aprobación sobre umbral. |
| Operaciones | Transporte, partner, inspección, preparación y entrega. | No modifica contratos firmados. |
| Finanzas | Cobros, reembolsos, conciliación, facturas y margen real. | Sin borrado de transacciones. |
| Partner | Órdenes asignadas, checklist, evidencias y entrega. | Sin margen, datos de fuente o clientes ajenos. |
| Administrador | Usuarios, configuración y plantillas. | Acciones sensibles auditadas y MFA. |
| Auditor/lectura | Consulta de trazas y documentos. | Sin modificación. |

## 4.1 Matriz mínima de autorización

| Acción | Asesor | Compras | Operaciones | Finanzas | Admin |
| --- | --- | --- | --- | --- | --- |
| Cambiar margen mínimo | — | Solicita | — | Aprueba | Configura |
| Autorizar puja | — | Sí | — | Confirma cobertura | Sí |
| Reembolsar | Solicita | — | — | Ejecuta | Aprueba umbral |
| Aprobar reparación | — | — | Sí | Confirma presupuesto | Sí |
| Cambiar contrato | — | — | — | — | Nueva versión |
| Exportar datos personales | — | — | — | Limitado | Sí + auditoría |

# 5. Experiencia del comprador y estados

## 5.1 Recorrido principal

| Etapa | Pantalla/acción | Salida verificable |
| --- | --- | --- |
| Descubrir | Landing, oportunidades, comparador y contenidos. | Consentimiento y fuente de campaña. |
| Definir | Configurador en pasos y guardado de borrador. | Solicitud con criterios normalizados. |
| Cualificar | Contacto, identidad y capacidad económica. | Lead qualified/rejected con motivo. |
| Proponer | Candidatos y diferencias. | Aprobación o rechazo individual. |
| Reservar | Condiciones, contrato y pago. | Reserva confirmada y evidencia. |
| Comprar | Disponibilidad, puja y adjudicación. | Won/lost; coste y VIN. |
| Preparar | Transporte, recepción, inspección y trabajos. | Checklist, fotos, aprobación. |
| Entregar | Cita, saldo, firma y evidencias. | Entrega completada. |
| Posventa | Garantía, incidencia y satisfacción. | Caso con SLA y resolución. |

## 5.2 Máquina de estados del expediente

| Código | Significado | Siguiente control |
| --- | --- | --- |
| LEAD | Solicitud recibida | Cualificar o descartar |
| QUALIFIED | Comprador viable | Crear encargo/proponer |
| SEARCHING | Búsqueda activa | Presentar candidatos |
| CANDIDATE_APPROVED | Candidato aceptado | Formalizar reserva |
| RESERVED | Contrato y reserva válidos | Autorizar compra |
| BIDDING | Puja en curso | Won/Lost |
| WON | Unidad adjudicada | Crear compra/transporte |
| IN_TRANSIT | En transporte | Registrar recepción |
| RECEIVED | Vehículo recibido | Inspeccionar |
| INSPECTION | Revisión en curso | Pass/Repair/Reject |
| PREPARATION | Trabajos aprobados | Ready |
| READY | Listo para entrega | Programar |
| DELIVERED | Entrega firmada | Abrir posventa |
| CLOSED | Operación cerrada | Solo lectura |
| CANCELLED | Cancelado | Reembolso/liquidación |

## 5.3 Reglas de transición

- Ningún estado se cambia sin usuario, fecha y motivo.
- Una transición sensible conserva evidencia y versión de datos.
- No se salta de RESERVED a IN_TRANSIT sin adjudicación y compra.
- No se marca READY sin inspección resuelta y documentación mínima.
- No se marca DELIVERED sin saldo confirmado y acta de entrega.
- La cancelación no elimina el expediente ni sus documentos.
# 6. Requisitos funcionales

## 6.1 Web pública y captación

| ID | Requisito | Prioridad | Aceptación |
| --- | --- | --- | --- |
| WEB-01 | Landing Naranja Performance con CTA “PEDIR MI COCHE”. | Must | LCP móvil objetivo ≤2,5 s en condiciones acordadas. |
| WEB-02 | Configurador multistep con autosave. | Must | Crea lead/expediente y recupera borrador. |
| WEB-03 | Oportunidades autorizadas con filtros y caducidad. | Must | Una ficha vencida no permite reservar. |
| WEB-04 | Ficha con disponibilidad condicionada y precio transparente. | Must | No usa “en stock” si no se posee. |
| WEB-05 | Comparador de hasta 3 candidatos. | Should | Diferencias de coste, km, año, consumo y riesgos. |
| WEB-06 | Calculadora comparativa eléctrico/convencional. | Could | Supuestos editables y aviso metodológico. |
| WEB-07 | SEO técnico, datos estructurados y sitemap. | Must | Páginas indexables controladas y sin contenido duplicado. |
| WEB-08 | FAQ y páginas legales configurables. | Must | CMS básico y registro de publicación. |

## 6.2 Solicitudes y CRM

| ID | Requisito | Prioridad | Aceptación |
| --- | --- | --- | --- |
| CRM-01 | Lead con canal, UTM, criterios y consentimiento. | Must | No pierde atribución durante el flujo. |
| CRM-02 | Asignación manual/automática y SLA. | Must | Cola visible y alertas de vencimiento. |
| CRM-03 | Scoring configurable, no decisor automático. | Should | Factores explicables y override registrado. |
| CRM-04 | Historial omnicanal básico. | Must | Email, llamada y nota con autor/fecha. |
| CRM-05 | Duplicados por email/teléfono y merge controlado. | Should | No fusiona expedientes sin confirmación. |

## 6.3 Candidatos, reserva y contratación

| ID | Requisito | Prioridad | Aceptación |
| --- | --- | --- | --- |
| CAT-01 | Candidato con fuente, caducidad, derechos y VIN protegido. | Must | Campos sensibles solo para roles autorizados. |
| CAT-02 | Versión de propuesta y desglose económico. | Must | Se reproduce lo aceptado por el cliente. |
| RES-01 | Reserva configurable por modalidad. | Must | Pago genera recibo y estado único. |
| RES-02 | Contrato/versionado y aceptación reforzada. | Must | Hash, versión, fecha, IP/contexto permitido y copia. |
| RES-03 | Reembolso total/parcial con motivo y aprobación. | Must | Registro inmutable y conciliable. |
| RES-04 | Bloqueo lógico de doble asignación. | Must | Prueba concurrente impide doble reserva. |
| RES-05 | Caducidad y recordatorios. | Must | Libera candidato conforme a reglas. |

## 6.4 Portal del comprador

- Dashboard con estado, próxima acción y asesor.
- Candidatos propuestos, comparación y aprobación/rechazo.
- Desglose de precio y cambios aceptados.
- Contratos, recibos, facturas y documentos descargables.
- Timeline con rangos de fecha y eventos reales.
- Cita de entrega, ubicación y requisitos.
- Incidencias y garantía con archivos.
- Preferencias, consentimientos y derechos de datos.
## 6.5 Backoffice

- Pipeline por estado, asesor, provincia, fuente y SLA.
- Calculadora de precio/puja con escenario y auditoría.
- Compras, adjudicaciones, facturas y VIN.
- Órdenes de transporte y tracking manual/integrado.
- Asignación de partner y capacidad.
- Inspecciones, presupuestos y aprobaciones.
- Cobros, reembolsos, conciliación y contribución real.
- Plantillas, configuración, permisos, logs y exportación.
## 6.6 Portal del partner

| ID | Función | Criterio |
| --- | --- | --- |
| PAR-01 | Aceptar/rechazar orden según capacidad. | Motivo y SLA registrados. |
| PAR-02 | Recepción con VIN, km, hora y daños de transporte. | Fotos obligatorias antes de continuar. |
| PAR-03 | Checklist mecánico/estético versionado. | No completar sin campos críticos. |
| PAR-04 | Presupuesto adicional y autorización. | No iniciar trabajo sin aprobación. |
| PAR-05 | Preparación y control final. | Evidencias y responsable. |
| PAR-06 | Entrega con firma, DNI verificado y fotos. | Acta en soporte duradero. |
| PAR-07 | Incidencia y garantía. | SLA, categoría y coste. |

# 7. Motor económico y control de riesgo

## 7.1 Fórmulas

PRECIO Precio final = adquisición + comisión de fuente + transporte + legalización + inspección/preparación + garantía + impuestos/tasas + provisión de riesgo + margen objetivo − ingresos/comisiones aplicables correctamente contabilizados.

PUJA MÁXIMA Puja máxima = precio final autorizado − todos los costes, impuestos, provisiones y margen mínimo distintos del importe de adjudicación.

## 7.2 Variables mínimas

| Grupo | Variables |
| --- | --- |
| Adquisición | Puja, comisión, IVA/régimen, divisa, documentación, depósito. |
| Logística | Origen, destino, seguro, recogida, almacenaje, transporte. |
| Legalización | ITV, matriculación, tasas, impuesto, homologación y gestoría. |
| Preparación | Diagnóstico, mecánica, carrocería, neumáticos, limpieza, llaves. |
| Comercial | Garantía, financiación, coste de pago, CAC imputado opcional. |
| Riesgo | Daños no visibles, cambio de divisa, retraso, devolución, garantía. |
| Margen | Mínimo absoluto, porcentaje, objetivo y aprobación excepcional. |

## 7.3 Bloqueos obligatorios

- Bloquear: Sin reserva vigente y precio máximo aceptado.
- Bloquear: Financiación requerida sin preaprobación.
- Bloquear: Margen inferior al mínimo.
- Bloquear: Costes críticos incompletos o caducados.
- Bloquear: Derechos/documentación insuficientes.
- Bloquear: Unidad ya asignada.
- Bloquear: Compra por encima del umbral sin doble aprobación.
- Bloquear: Entrega sin cobro y documentos.
# 8. Arquitectura técnica de referencia

La desarrolladora puede proponer tecnología equivalente, pero debe justificar mantenibilidad, coste, seguridad, contratación de talento y ausencia de dependencia innecesaria. Se recomienda un monolito modular para el MVP, preparado para separar servicios cuando exista volumen real.

| Capa | Referencia | Buenas prácticas |
| --- | --- | --- |
| Frontend | Next.js + TypeScript | SSR/SSG, accesibilidad, componentes, validación compartida. |
| Backend | NestJS/TypeScript o Django | API REST versionada, módulos de dominio y jobs. |
| Datos | PostgreSQL administrado | Migraciones, constraints, cifrado y PITR. |
| Archivos | Object storage UE | URLs firmadas, antivirus, retención y hash. |
| Cache/colas | Redis + worker | Idempotencia, reintentos y dead-letter. |
| Identidad | Proveedor gestionado o módulo robusto | MFA interno, RBAC y sesiones seguras. |
| Infraestructura | Cloud UE + IaC | Staging/prod separados, secretos y mínimo privilegio. |
| Observabilidad | Logs, métricas, trazas y alertas | Correlation ID y datos personales minimizados. |

## 8.1 Dominios del monolito modular

| Dominio | Responsabilidad |
| --- | --- |
| Identity | Usuarios, roles, MFA, sesiones y consentimiento. |
| CRM | Leads, scoring, asignación y comunicaciones. |
| Sourcing | Fuentes, oportunidades, candidatos y derechos. |
| Orders | Encargos, expedientes, reservas y estados. |
| Pricing | Costes, escenarios, margen, puja y aprobaciones. |
| Procurement | Pujas manuales, adjudicación y compras. |
| Logistics | Transporte, tracking, recepción y daños. |
| Inspection | Checklist, evidencias, presupuesto y preparación. |
| Contracts | Plantillas, versiones, aceptación y documentos. |
| Payments | Cobros, reembolsos, conciliación y facturación. |
| Partners | Homologación, capacidad, SLA y liquidaciones. |
| Delivery | Citas, acta, posventa y garantía. |
| Notifications | Email/SMS/WhatsApp y preferencias. |
| Audit | Eventos inmutables y exportación. |

## 8.2 Principios técnicos

- API-first sin forzar microservicios.
- Idempotencia en pagos, webhooks y transiciones.
- Constraints de base de datos para exclusividad y consistencia.
- Outbox/eventos para notificaciones fiables.
- Configuración versionada de márgenes, contratos y checklists.
- Feature flags para integraciones y despliegue gradual.
- Nada de credenciales de subasta almacenadas en texto plano.
- Zona UE para datos personales salvo evaluación y garantías.
# 9. Modelo de datos

| Entidad | Campos esenciales | Relaciones |
| --- | --- | --- |
| User | id, estado, MFA, último acceso | Role, Consent, AuditEvent |
| Customer | contacto, dirección, scoring | User, Lead, Case |
| Lead | UTM, necesidad, etapa, asesor | Customer, SearchRequest |
| SearchRequest | criterios, tolerancias, vigencia | Case, Candidate |
| Opportunity | fuente, caducidad, derechos | Vehicle, Candidate |
| Vehicle | VIN, marca, modelo, km, año | Documents, Inspection |
| Candidate | precio, versión, decisión | Case, Opportunity |
| Case/Order | modalidad, estado, SLA | Customer, Reservation, Vehicle |
| Reservation | importe, estado, expiración | Payment, Contract |
| CostScenario | conceptos, margen, puja máxima | Candidate, Approval |
| Purchase | fuente, lote, adjudicación | Vehicle, Invoice |
| TransportOrder | origen, destino, ETA | Partner, Vehicle |
| Inspection | checklist, resultado, fotos | Vehicle, WorkOrder |
| WorkOrder | concepto, coste, aprobación | Inspection, Partner |
| Contract | tipo, versión, hash, aceptación | Case, Customer |
| Payment | provider id, importe, estado | Reservation, Refund |
| Partner | servicios, zona, SLA, capacidad | User, PartnerOrder |
| Delivery | cita, acta, evidencias | Vehicle, Customer |
| WarrantyCase | categoría, SLA, coste | Delivery, Partner |
| AuditEvent | actor, acción, before/after | Todas las entidades críticas |

## 9.1 Reglas de persistencia

- VIN cifrado/mascarado donde proceda y único cuando exista.
- Money con moneda y enteros de unidad mínima; nunca float.
- Fechas en UTC y presentación Europe/Madrid.
- Soft delete únicamente donde sea compatible con conservación legal.
- Contratos y evidencias no se sobrescriben: nuevas versiones.
- AuditEvent append-only y acceso restringido.
- Archivos con hash, tipo, tamaño, propietario, retención y antivirus.
# 10. API e integraciones

| Sistema | MVP | Evolución | Condición |
| --- | --- | --- | --- |
| AUTO1/fuentes | Manual + CSV autorizado | Feed/API oficial | Contrato y derechos. |
| Pagos | Stripe u otra pasarela UE | Conciliación avanzada | No almacenar tarjeta. |
| Firma | Proveedor eIDAS | Firma avanzada/cualificada | Evidencia descargable. |
| Email | Transaccional | Automatización marketing | Separar bases jurídicas. |
| WhatsApp | Deep link/plantillas manuales | Business API | Consentimiento y plantillas. |
| Financiación | Prevalidación manual/enlace | API proveedor | Proveedor autorizado. |
| DGT | Carga/informe manual | Integración permitida | Términos y coste. |
| Logística | Orden y tracking manual | API transportista | Webhooks idempotentes. |
| Garantía | Póliza/documento manual | API proveedor | Cobertura visible. |
| Analítica | Analytics + eventos backend | Warehouse/BI | Consent mode y minimización. |

## 10.1 Estándar de API

- REST JSON versionada bajo /api/v1.
- OpenAPI entregada y actualizada en CI.
- Errores con código estable, mensaje seguro y correlation_id.
- Paginación, filtros y orden explícitos.
- Webhooks firmados, con timestamp, idempotency key y reintentos.
- Rate limiting por rol/endpoint.
- No exponer coste interno, fuente sensible o margen al comprador.
# 11. UX/UI alineada con Naranja Performance

## 11.1 Tokens obligatorios

| Token | Valor | Uso |
| --- | --- | --- |
| brand.navy | #0B132B | Fondos oscuros y texto principal. |
| brand.orange | #FF5A1F | CTA, selección y precio. |
| brand.warmWhite | #F8F7F3 | Fondos claros. |
| brand.graphite | #20242A | Texto/tarjetas. |
| brand.silver | #C7CED6 | Bordes/neutral. |
| status.success | #22C55E | Solo estados validados. |

## 11.2 Principios de experiencia

- Mobile first desde 320 px.
- Naranja limitado a acciones y puntos de atención; no convertirlo en fondo dominante.
- Texto azul noche sobre CTA naranja cuando ofrezca mejor contraste.
- WCAG 2.2 AA, teclado, foco visible, zoom 200 % y lectores de pantalla.
- Nunca “en stock” cuando sea una oportunidad sujeta a adjudicación.
- Precio estimado/máximo y supuestos visibles antes de pagar.
- Reserva explicada antes de solicitar datos de pago.
- Plazos como rangos actualizables, no fechas ficticias.
- Jerga de subasta fuera del recorrido principal.
- Estados reales: no usar verde hasta validación efectiva.
## 11.3 Componentes Figma/frontend

| Familia | Componentes |
| --- | --- |
| Navegación | Header, menú móvil, breadcrumbs, footer. |
| Acciones | Botones primary/secondary/tertiary/icon y estados. |
| Formularios | Input, select, autocomplete, file upload, validation. |
| Vehículo | Card, galería, ficha, badges, comparación. |
| Operación | Timeline, stepper, estado, SLA, task, approval. |
| Finanzas | Desglose, escenario, pago, reembolso, factura. |
| Confianza | Inspección, documento, garantía, partner. |
| Feedback | Toast, alert, modal, empty/error/loading/success. |

## 11.4 Contenido de la landing

1. Hero: “Tu próximo coche, bajo pedido”.
1. Subclaim: “Lo buscamos · Lo revisamos · Te lo entregamos”.
1. Formulario corto: marca/modelo, presupuesto y combustible.
1. Cómo funciona en tres pasos.
1. Oportunidades o ejemplos representativos.
1. Precio transparente y comparador.
1. Revisión, garantía y entrega.
1. Red de puntos de entrega.
1. Preguntas frecuentes y CTA final.
# 12. Operación desde Ourense y red de partners

## 12.1 Modelo logístico

| Modalidad | Uso | Control |
| --- | --- | --- |
| Hub Ourense | Galicia, incidencias o unidades que requieren supervisión. | Control directo y checklist interno. |
| Entrega directa a partner | Resto de España cuando reduce coste/plazo. | Partner homologado, evidencias y auditoría. |
| Entrega a domicilio | Solo cuando operación y documentación lo permitan. | Transportista, acta y protocolo de identidad. |

## 12.2 Homologación del partner

- Identidad societaria, seguro, licencias y solvencia básica.
- Instalaciones, equipamiento, seguridad y capacidad.
- Servicios, tarifas y tiempos aceptados.
- Checklist común y estándar fotográfico.
- Contrato de encargo, confidencialidad y protección de datos.
- SLA, incidencias, penalizaciones y auditoría.
- Formación y operación simulada antes de activación.
- Revisión periódica por calidad, coste, tiempo y NPS.
## 12.3 SOP de recepción a entrega

| Paso | Responsable | Evidencia | Bloqueo |
| --- | --- | --- | --- |
| Preaviso | Operaciones | Orden, VIN parcial, ETA | Partner acepta capacidad. |
| Recepción | Partner | Hora, km, VIN y fotos 360º | Daño transporte escalado. |
| Inspección | Técnico | Checklist y diagnóstico | Campos críticos completos. |
| Presupuesto | Partner | Conceptos, piezas, horas | Aprobación previa. |
| Preparación | Partner | Fotos/partes de trabajo | Dentro de alcance. |
| Control final | Partner + operaciones | Checklist ready | Documentación y pago. |
| Cita | Asesor | Fecha, identidad y requisitos | Comprador confirma. |
| Entrega | Partner | Firma, fotos y acta | Saldo confirmado. |
| Cierre | Operaciones | Costes reales y encuesta | Expediente completo. |

# 13. Seguridad, privacidad y cumplimiento en España

REVISIÓN JURÍDICA Antes de producción, asesoría española debe validar contratación a distancia, desistimiento, garantía, precio, fiscalidad, financiación, publicidad, reutilización de datos, régimen de reservas y operativa transfronteriza. Este pliego no sustituye asesoramiento jurídico o fiscal.

## 13.1 Privacidad y RGPD

- Inventario de tratamientos, finalidades, bases jurídicas y retención.
- Información por capas y consentimientos no premarcados.
- CMP de cookies por categorías y prueba de consentimiento.
- Contratos con encargados y evaluación de transferencias.
- Derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad.
- Privacy by design, minimización y entornos sin datos reales cuando sea posible.
- DPIA si el scoring, financiación o escala lo hacen necesario.
- Borrado/anonimización programada y legal hold configurable.
## 13.2 Seguridad técnica mínima

| Control | Requisito |
| --- | --- |
| Identidad | MFA obligatorio para administración, compras y finanzas. |
| Acceso | RBAC, mínimo privilegio y revisión trimestral. |
| Aplicación | OWASP ASVS proporcional; validación server-side y CSRF/XSS/SQLi. |
| Secretos | Gestor de secretos; rotación; nunca en Git o logs. |
| Cifrado | TLS vigente y cifrado gestionado en reposo. |
| Archivos | Antivirus, MIME real, límites y URLs firmadas. |
| Logs | Centralizados, alertas y redacción de datos sensibles. |
| Backups | Automáticos, cifrados, retención y restauración probada. |
| Dependencias | SCA, parches y bloqueo de versiones. |
| Incidentes | Plan, responsables, evidencias y notificación evaluada. |

## 13.3 Reglas comerciales y de consumo configurables

- Información precontractual y precio total.
- Versión de términos aceptada y copia en soporte duradero.
- Flujo de desistimiento configurable; no asumir exclusión automática por encargo.
- Garantía legal separada de extensiones comerciales.
- Gestión documentada de reclamaciones.
- Financiación ofrecida por entidad autorizada con disclosures.
- Publicidad verificable: no usar “sin riesgo”, “garantizado” o “mejor precio” sin soporte.
# 14. Analítica, SEO y crecimiento

## 14.1 Eventos mínimos

| Embudo | Eventos |
| --- | --- |
| Captación | landing_viewed, search_started, search_completed, lead_submitted |
| Cualificación | lead_assigned, qualified, rejected, finance_requested/preapproved |
| Candidato | candidate_proposed/viewed/approved/rejected |
| Reserva | reservation_started, contract_accepted, paid, expired, refunded |
| Compra | bid_started, won, lost, purchase_recorded |
| Operación | transport_started, received, inspection_passed/failed, ready |
| Entrega | scheduled, completed, nps_submitted |
| Posventa | warranty_opened, first_response, resolved |

## 14.2 Paneles

- Embudo por canal, campaña, asesor y provincia.
- Tiempo por estado y SLA vencidos.
- Margen previsto vs. real por operación.
- Caja comprometida, cobros, reembolsos y pagos a proveedor.
- Calidad por partner: defectos, retrasos, extras y NPS.
- Fuentes: adjudicación, coste y desviaciones.
- Cohortes y referidos después de volumen suficiente.
## 14.3 SEO y contenido

- Arquitectura indexable limitada a contenido útil y estable.
- Páginas por intención: bajo pedido, comparativas, financiación, eléctricos y guías.
- Datos estructurados solo cuando correspondan y coincidan con contenido visible.
- Canonical, sitemap, robots y control de parámetros.
- Imágenes optimizadas AVIF/WebP y metadatos correctos.
- No indexar fichas efímeras, duplicadas o sin derechos.
- Contenido firmado/revisado para temas financieros, legales y técnicos.
# 15. DevOps, calidad y observabilidad

## 15.1 Entornos y despliegue

- Local, CI, staging y producción separados.
- Infraestructura como código y despliegue repetible.
- Pull request, revisión y checks obligatorios.
- Migraciones forward y plan de rollback.
- Feature flags para funciones incompletas.
- Datos sintéticos/anónimos en no producción.
- Dominio, cloud, repositorio y proveedores a nombre del promotor.
## 15.2 Pirámide de pruebas

| Nivel | Cobertura requerida |
| --- | --- |
| Unitarias | Pricing, puja máxima, permisos, transiciones y validaciones. |
| Integración | DB, pagos, webhooks, documentos, colas y archivos. |
| Contrato API | OpenAPI y consumidores críticos. |
| E2E | Solicitud → reserva; adjudicación → entrega; reembolso; incidencia. |
| Seguridad | SAST, SCA, secretos, cabeceras y pentest proporcional. |
| Accesibilidad | Automática + teclado/lector/zoom manual. |
| Rendimiento | Core Web Vitals, carga de endpoints y jobs. |
| Recuperación | Restauración de backup y rollback ensayados. |

## 15.3 SLO iniciales

| Servicio | Objetivo inicial |
| --- | --- |
| Disponibilidad pública | 99,5 % mensual, excluyendo mantenimiento acordado. |
| API p95 | <500 ms en operaciones estándar sin terceros. |
| Errores 5xx | <1 % de solicitudes estándar. |
| RPO | ≤24 h en MVP; mejorar según operación. |
| RTO | ≤8 h en MVP; documentar proceso. |
| Alerta crítica | Acuse interno ≤30 min en horario pactado. |
| LCP móvil | ≤2,5 s en páginas clave bajo condiciones de prueba. |

# 16. Plan de implantación en cuatro semanas

CONDICIÓN DE PLAZO Cuatro semanas es viable como MVP asistido si el promotor decide diariamente, el alcance se congela al final de la semana 1, los proveedores se contratan a tiempo y no se incorpora una integración no autorizada con AUTO1.

| Semana | Producto y desarrollo | Negocio y operación | Hito |
| --- | --- | --- | --- |
| 1 · Fundamentos | Discovery, arquitectura, UX, datos, auth, CI/CD y entornos. | Contratos, cuenta profesional, pagos, garantía, partners y reglas de margen. | Prototipo y backlog Must aprobados. |
| 2 · Captación | Landing, configurador, CRM, oportunidades y pricing. | 20 oportunidades representativas, guiones y casos de prueba. | Lead → propuesta en staging. |
| 3 · Transacción | Reserva, pago, contrato, portales, logística e inspección. | Operación simulada, formación y partner piloto. | Reserva → entrega validada. |
| 4 · Lanzamiento | QA, seguridad, analítica, contenidos, monitorización y producción. | Campaña piloto, soporte, contingencia y go/no-go. | MVP público controlado. |

## 16.1 Plan día a día orientativo

| Días | Entregas |
| --- | --- |
| 1–2 | Kickoff, procesos, riesgos, repositorios, cuentas y decisiones pendientes. |
| 3–5 | Wireframes, arquitectura, modelo de datos, design tokens y backlog congelado. |
| 6–8 | Landing/configurador, CRM, auth y catálogo manual. |
| 9–10 | Pricing, candidatos, comparador y propuesta. |
| 11–13 | Reserva, pagos, contratos y portal cliente. |
| 14–15 | Backoffice, partner, transporte e inspección. |
| 16–17 | Analítica, notificaciones, legal, accesibilidad y hardening. |
| 18 | UAT con operación simulada y restauración. |
| 19 | Correcciones, formación, carga inicial y go/no-go. |
| 20 | Producción controlada y monitorización intensiva. |

## 16.2 Responsabilidades del promotor

- Responsable con capacidad diaria de decisión.
- Sociedad vendedora y datos fiscales.
- Cuenta profesional de aprovisionamiento.
- Autorización de datos/imágenes.
- Contratos y textos legales.
- Cuenta de pagos/firma/email.
- Tarifas, márgenes y provisiones.
- Partner piloto y transportista.
- Datos representativos y usuarios UAT.
- Aprobación de diseño y contenido.
# 17. Backlog priorizado

| Epic | Must MVP | Should siguiente | Could futuro |
| --- | --- | --- | --- |
| Marca/captación | Landing, CMS legal, configurador. | Comparador y contenidos. | Personalización IA supervisada. |
| CRM | Lead, asignación, SLA, notas. | Scoring explicable. | Automatización omnicanal. |
| Catálogo | Manual/CSV, caducidad, derechos. | Feed oficial. | Múltiples fuentes normalizadas. |
| Pricing | Costes, margen, puja y bloqueo. | Escenarios avanzados. | Predicción con override. |
| Reserva | Contrato, pago, expiración, reembolso. | Firma avanzada. | Escrow si se justifica. |
| Compras | Puja/adjudicación manual. | Importación de facturas. | API oficial. |
| Operación | Transporte, inspección, partner y entrega. | APIs logísticas. | Optimización de rutas. |
| Cliente | Timeline, docs, pagos, soporte. | Notificaciones avanzadas. | App nativa. |
| Datos | KPIs, eventos y exportación. | BI/warehouse. | Modelos de rentabilidad. |
| Plataforma | RBAC, auditoría, CI/CD, backup. | Multiempresa. | White-label/B2B2C. |

# 18. Pruebas de aceptación del negocio

| ID | Escenario | Resultado esperado |
| --- | --- | --- |
| UAT-01 | Usuario completa solicitud desde móvil. | Lead, criterios, UTM y consentimiento persistidos. |
| UAT-02 | Oportunidad expira durante reserva. | Se bloquea y ofrece alternativa; no cobra indebidamente. |
| UAT-03 | Dos usuarios intentan reservar unidad. | Solo una reserva puede confirmarse. |
| UAT-04 | Margen cae bajo mínimo. | Puja bloqueada y aprobación excepcional auditada. |
| UAT-05 | Pago/webhook duplicado. | Una sola reserva/transacción efectiva. |
| UAT-06 | No se adjudica el vehículo. | Flujo contractual de alternativa/reembolso correcto. |
| UAT-07 | Daño de transporte. | Incidencia, fotos, responsable y bloqueo de inspección. |
| UAT-08 | Inspección exige reparación extra. | Presupuesto y aprobación antes del trabajo. |
| UAT-09 | Partner intenta ver otro pedido. | Acceso denegado y evento registrado. |
| UAT-10 | Entrega sin saldo. | Sistema bloquea acta final. |
| UAT-11 | Cliente ejerce derecho RGPD. | Solicitud, identidad, plazo y respuesta trazables. |
| UAT-12 | Restauración de backup. | Servicio recuperado dentro del RTO documentado. |

## 18.1 Definition of Done

- Criterios de aceptación aprobados.
- Código revisado y pruebas en verde.
- Diseño responsive y accesible.
- Logs/errores seguros y monitorizados.
- Migración y rollback documentados.
- Documentación OpenAPI actualizada.
- Sin vulnerabilidades críticas conocidas.
- Desplegado en staging y validado por negocio.
- Manual y formación actualizados.
# 19. Entregables exigidos a la desarrolladora

- Figma editable, sistema de diseño y prototipo.
- Código fuente frontend/backend y repositorio del promotor.
- Esquema, migraciones y diccionario de datos.
- Infraestructura como código y pipeline CI/CD.
- OpenAPI, webhooks y colección de pruebas.
- Matriz de roles/permisos.
- Plan y evidencias de pruebas.
- Manual de administración, operación y partner.
- Inventario de terceros y licencias.
- Plan de backup, restauración e incidentes.
- Informe de accesibilidad, seguridad y privacidad técnica.
- Formación grabada y sesión de traspaso.
- Garantía de corrección y propuesta de soporte.
## 19.1 Propiedad y salida de proveedor

- Dominio, cloud, repositorios y cuentas pertenecen al promotor.
- Código específico, diseños y base de datos se entregan según contrato.
- Componentes open source y licencias inventariados.
- Secretos fuera del repositorio.
- Despliegue y restauración reproducibles.
- Exportación completa de datos/documentos.
- Sin dependencias propietarias no declaradas.
# 20. Presupuesto y evaluación de ofertas

| Opción | Alcance | Banda orientativa |
| --- | --- | --- |
| Low-code asistido | Operación manual, personalización limitada. | 8.000–18.000 € |
| MVP a medida recomendado | Web, portales, pricing, reserva, pagos y operación. | 25.000–50.000 € |
| Plataforma integrada | APIs, automatización y escala nacional. | 70.000–150.000 €+ |

Las bandas son orientativas y deben contrastarse con alcance, equipo, propiedad, soporte y coste recurrente. La oferta debe separar discovery, UX/UI, desarrollo, integraciones, QA, DevOps, licencias y mantenimiento.

## 20.1 Preguntas obligatorias al proveedor

1. ¿Qué entrega exactamente en cuatro semanas?
1. ¿Qué arquitectura propone y por qué?
1. ¿Cómo garantiza cálculos y transiciones auditables?
1. ¿Cómo evita dobles reservas y webhooks duplicados?
1. ¿Cómo añadirá nuevas fuentes autorizadas?
1. ¿Cómo versiona contratos y evidencias?
1. ¿Qué experiencia tiene en pagos, marketplace y automoción?
1. ¿Qué equipo y dedicación real asignará?
1. ¿Cómo prueba seguridad, accesibilidad y recuperación?
1. ¿Qué costes mensuales y licencias prevé?
1. ¿Qué SLA ofrece tras lanzamiento?
1. ¿Cómo entrega código, cuentas y documentación?
# 21. Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
| --- | --- | --- |
| Sin derechos de catálogo | Alto | Catálogo propio/representativo y acuerdo antes de integrar. |
| Precio mal calculado | Alto | Motor versionado, provisiones y doble aprobación. |
| Financiación rechazada | Alto | Preaprobación antes de pujar. |
| Daños superiores | Alto | Tolerancias, provisión, checklist y autorización. |
| Retraso de transporte | Medio/alto | Rangos, tracking, SLA y contingencia. |
| Calidad desigual de partner | Alto | Homologación, formación, evidencias y scorecard. |
| Confusión sobre vendedor | Alto | Contratos, facturas, UI y señalética inequívocos. |
| Fraude/identidad | Alto | KYC proporcional, MFA interno y revisión manual. |
| Fuga de datos | Alto | Minimización, acceso, cifrado, logs e incidentes. |
| Scope creep | Alto | Backlog congelado y control de cambios. |
| Dependencia proveedor | Medio/alto | Cuentas propias, código, IaC y exportación. |
| Objetivo comercial no validado | Alto | Piloto, métricas y gasto escalonado. |

# 22. Roadmap de escalado

| Fase | Objetivo | Capacidades |
| --- | --- | --- |
| MVP · 0–3 meses | Validar demanda y operación. | Búsqueda asistida, reservas, backoffice y partners piloto. |
| Fase 2 · 3–6 meses | Reducir coste operativo. | Feeds autorizados, financiación, logística y garantía integradas. |
| Fase 3 · 6–12 meses | Red nacional B2B2C. | Multiempresa, comisiones, territorios, SLA y PideTuCoche Pro. |
| Fase 4 · 12+ meses | Central de aprovisionamiento. | Múltiples fuentes, scoring, pricing avanzado y financiación de stock. |

## 22.1 Criterios para escalar provincia

- Demanda mínima o pipeline suficiente.
- Partner homologado y operación simulada aprobada.
- Transportista y coste conocidos.
- SLA y cobertura de garantía disponibles.
- Economía unitaria positiva después de CAC.
- Capacidad de soporte y caja.
- Calidad de primeras entregas dentro de umbral.
# 23. Checklist go-live

| Área | Comprobación | Estado |
| --- | --- | --- |
| Marca | Logo, favicon, responsive y tokens aprobados. | [ ] |
| Legal | Textos, contratos, cookies y privacidad publicados. | [ ] |
| Proveedores | Pagos, firma, email, garantía y transporte activos. | [ ] |
| Datos | 20 oportunidades representativas y derechos documentados. | [ ] |
| Operación | Ourense y partner piloto formados. | [ ] |
| Producto | UAT Must aprobada. | [ ] |
| Seguridad | MFA, secretos, backups, alertas y vulnerabilidades. | [ ] |
| Analítica | Eventos y paneles verificados. | [ ] |
| Soporte | Canales, horarios, SLA y escalado. | [ ] |
| Contingencia | Reembolso, caída de pago, pérdida de unidad y retraso ensayados. | [ ] |
| Decisión | Acta go/no-go firmada. | [ ] |

# 24. Decisiones pendientes antes del día 3

| Decisión | Responsable | Fecha | Estado |
| --- | --- | --- | --- |
| Sociedad vendedora y datos fiscales | Promotor/asesoría | Día 1 | Pendiente |
| Registro/disponibilidad definitiva de marca | Promotor | Día 1 | Pendiente |
| Contrato de reserva y encargo | Asesoría | Día 2 | Pendiente |
| Derechos de datos de fuentes | Promotor/fuente | Día 2 | Pendiente |
| Importe y tratamiento de reserva | Promotor/asesoría | Día 2 | Pendiente |
| Pasarela y firma | Promotor/desarrollo | Día 2 | Pendiente |
| Margen mínimo y umbrales | Dirección/finanzas | Día 3 | Pendiente |
| Partner piloto y tarifas | Operaciones | Día 3 | Pendiente |
| Garantía y financiación | Dirección/asesoría | Día 3 | Pendiente |
| Canales de lanzamiento | Marketing | Día 3 | Pendiente |

# 25. Anexo — referencia visual de marca

La imagen siguiente fija la dirección creativa Naranja Performance. Es una referencia conceptual: la agencia debe reconstruir el logotipo en vector y el equipo digital debe implementar texto y componentes reales.

Paleta: #0B132B · #FF5A1F · #F8F7F3 · #20242A · #C7CED6

# 26. Solicitud final a la desarrolladora

PROPUESTA REQUERIDA Presentar alcance cerrado del MVP, cronograma, equipo nominal, arquitectura, supuestos, exclusiones, coste inicial, costes recurrentes, riesgos, propiedad, soporte y plan de salida. Cada desviación respecto de este pliego deberá aparecer en una tabla de cumplimiento.

| Requisito de oferta | Respuesta del proveedor |
| --- | --- |
| Alcance Must incluido | [Completar] |
| Exclusiones | [Completar] |
| Equipo y dedicación | [Completar] |
| Calendario e hitos | [Completar] |
| Precio y forma de pago | [Completar] |
| Licencias mensuales | [Completar] |
| Garantía y soporte | [Completar] |
| Propiedad y entrega | [Completar] |
| Riesgos/alternativas | [Completar] |
