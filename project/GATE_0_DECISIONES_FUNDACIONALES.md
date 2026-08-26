# Gate 0 — Decisiones fundacionales de PideTuCoche.eu

**Versión:** 0.1 · 26 de agosto de 2026

**Estado:** Base provisional aprobada para diseño; pendiente de validación jurídica, fiscal, mercantil y contractual

**Propietario:** Promotor de PideTuCoche.eu

Este documento completa la base inicial del negocio para comenzar producto, arquitectura y validación operativa. Sus importes, plazos y proveedores podrán ajustarse con evidencia real. Ninguna propuesta jurídica o fiscal se utilizará en producción sin revisión profesional española.

## 1. Identidad empresarial

| Elemento | Decisión inicial |
| --- | --- |
| Sociedad vendedora | `Pide Tu Coche, S.L.` |
| Marca | `PideTuCoche.eu` |
| Mercado piloto | Galicia |
| Base operativa | Ourense |
| Modelo | Compraventa B2C de vehículos de ocasión bajo pedido |
| Inventario MVP | Sin inventario especulativo |

### Acciones mercantiles

1. Solicitar certificación negativa de denominación en el Registro Mercantil Central.
2. Presentar denominaciones alternativas si `Pide Tu Coche, S.L.` no está disponible.
3. Comprobar y solicitar marca y nombre comercial en la OEPM.
4. Constituir la sociedad mediante CIRCE/PAE o asesoría.
5. Definir objeto social suficiente para compraventa, intermediación permitida, transporte, preparación, tecnología, marketing y servicios auxiliares.
6. Confirmar CNAE, IAE, licencias, seguros y obligaciones de establecimiento con asesoría.
7. Solicitar, si corresponde, ROI/VIES para adquisiciones intracomunitarias.

Fuentes: [Registro Mercantil Central](https://www.rmc.es/DenominacionesSociales.aspx?lang=es), [CIRCE/PAE](https://paeelectronico.es/es-es/CreaEmpresaPorTiMismo/Paginas/Home.aspx), [OEPM](https://consultas2.oepm.es/LocalizadorWeb/busquedaDenominacion).

## 2. Modelo contractual propuesto

El proceso separa tres relaciones para no confundir una solicitud, un servicio de búsqueda y una compraventa.

### Etapa A — Solicitud y cualificación

- Gratuita y sin obligación de compra.
- Recoge criterios, presupuesto, provincia, financiación, plazo y consentimiento de privacidad.
- Marketing separado del servicio; no se premarca.
- No autoriza pujas, compras ni cobros.

### Etapa B — Encargo de búsqueda

| Concepto | Propuesta inicial |
| --- | ---: |
| Tarifa | 199 € IVA incluido |
| Duración | 15 días naturales |
| Deducción | 100 % del precio si se compra vehículo |
| Sin candidato conforme | Reembolso completo |
| Prórroga | Solo con aceptación expresa |

Si el servicio comienza durante un plazo legal de desistimiento, deberá existir solicitud expresa en soporte duradero. Ante cancelación, cualquier importe exigible será proporcional al servicio realmente ejecutado y validado jurídicamente; no se aplicará una penalización automática.

### Etapa C — Reserva condicionada de vehículo concreto

| Concepto | Propuesta inicial |
| --- | ---: |
| Importe | 5 % del precio final autorizado |
| Mínimo | 1.000 € |
| Máximo | 2.000 € |
| Aplicación | Deducible íntegramente del precio |

Antes del cobro, el cliente recibirá y aceptará en soporte duradero:

- identidad del vendedor;
- vehículo/VIN protegido, kilometraje y estado conocido;
- informe e imágenes disponibles;
- precio total y precio máximo autorizado;
- desglose de costes incluidos y adicionales;
- disponibilidad condicionada a adjudicación;
- plazo estimado y reglas de retraso;
- reserva, reembolso, desistimiento y devolución;
- garantía legal y comercial;
- versión del contrato y canal de reclamación.

### Matriz de reembolso provisional

| Situación | Tratamiento propuesto |
| --- | --- |
| PideTuCoche no presenta candidato conforme | Devuelve la tarifa de búsqueda |
| Vehículo no adjudicado | Devuelve la reserva o la traslada con autorización expresa |
| Discrepancia material antes de entrega | Cliente acepta, elige alternativa o recibe reembolso |
| PideTuCoche cancela sin incumplimiento del cliente | Reembolso completo y documentado |
| Cliente cancela antes de iniciar búsqueda | Reembolso completo |
| Cliente desiste conforme a la ley | Sin penalización; aplicación de costes legalmente permitidos e informados |
| Cliente incumple fuera del desistimiento | Solo costes reales, proporcionados, documentados y previstos en contrato validado |

No se utilizará el término `arras penitenciales` ni la pérdida automática de la señal sin dictamen jurídico específico. La compraventa B2C no se considerará una subasta pública por el hecho de que Pide Tu Coche, S.L. adquiera previamente el vehículo en una subasta profesional.

Fuentes: [Ley General para la Defensa de los Consumidores y Usuarios](https://boe.es/buscar/act.php?id=BOE-A-2007-20555), [Ley de Servicios de la Sociedad de la Información](https://boe.es/buscar/act.php?id=BOE-A-2002-13758).

## 3. Garantías y protección bilateral

### Protección del comprador

- Precio máximo aceptado antes de comprar.
- Informe de estado, fotografías y documentación disponibles.
- Informe DGT completo cuando el vehículo esté registrado en España.
- Comprobación de titularidad, cargas, ITV, kilometraje y llamadas a revisión.
- Inspección técnica antes de entrega.
- Presupuesto y aprobación ante reparaciones extraordinarias.
- Acta de entrega con VIN, kilómetros, llaves, documentos, defectos conocidos y fotografías.
- Canal de incidencias y reclamaciones con trazabilidad.
- Reembolso por no adjudicación o incumplimiento conforme a contrato.

### Protección de Pide Tu Coche, S.L.

- Identidad y mayoría de edad verificadas.
- Titularidad del medio de pago comprobada proporcionalmente al riesgo.
- Preaprobación financiera antes de pujar cuando exista financiación.
- Aceptación del vehículo concreto y precio máximo.
- Reserva cobrada y confirmada por servidor antes de comprar.
- Evidencia de contrato, versión, fecha, IP/contexto permitido y copia al cliente.
- Cobertura de caja y doble aprobación interna.
- Acta de entrega y devolución con kilómetros y estado.
- Prevención de fraude, chargebacks y suplantación.

### Garantía del vehículo usado

- Propuesta inicial: pactar expresamente **12 meses de responsabilidad legal por falta de conformidad**, mínimo permitido para bienes de segunda mano.
- Ofrecer una garantía mecánica comercial externa de 24 meses como producto opcional o incluido cuando la economía de la operación lo permita.
- La cobertura externa no sustituye la responsabilidad legal de Pide Tu Coche, S.L.
- Mantener expediente de diagnóstico, reparación, piezas, fechas, vehículo de sustitución si se ofrece y cierre de incidencia.
- Las reparaciones de conformidad serán gratuitas para el consumidor cuando legalmente correspondan.

La asesoría deberá validar si comercialmente conviene elevar el estándar incluido a 18 meses después de disponer de siniestralidad y coste real.

Fuentes: [artículos 115–125 de la Ley de Consumidores](https://boe.es/buscar/act.php?id=BOE-A-2007-20555), [informe completo de vehículo de la DGT](https://www.dgt.es/nuestros-servicios/tu-vehiculo/tus-vehiculos/informe-de-un-vehiculo/index.html).

## 4. Economía unitaria y política de compra

### Margen

**Regla aprobada:** ninguna compra se autoriza si la contribución neta prevista es inferior a **1.000 €**.

El mínimo se calcula después de costes variables y provisiones, pero antes de costes fijos generales e Impuesto sobre Sociedades.

### Objetivo recomendado

```text
contribución objetivo = máximo(2.000 €, 8 % del coste total puesto en venta)
contribución mínima = 1.000 €
```

El objetivo no sustituye al mínimo. Permite absorber estructura, crecimiento y desviaciones.

### Fórmula

```text
precio final autorizado
- precio de adjudicación
- comisión de fuente/subasta
- transporte y contingencia
- documentación, gestoría y matriculación/transferencia
- inspección
- preparación estándar
- reparación extraordinaria
- garantía comercial
- costes de pago/financiación
- coste de captación asignado
- impuestos no recuperables
- provisión de garantía e incidencias
= contribución neta prevista
```

### Puja máxima

```text
puja máxima
= precio final autorizado
- todos los costes y provisiones
- contribución mínima exigida
```

### Provisiones iniciales

| Concepto | Regla provisional |
| --- | --- |
| Preparación estándar | 300 € |
| Contingencia de transporte | 10 % del presupuesto, hasta disponer de histórico |
| Garantía/incidencias | máximo entre 600 € y 3 % del coste total |
| Reparación extraordinaria | Presupuesto real antes de autorizar |

La preparación de 300 € comprende como referencia lavado, aspirado, aceite, filtros y líquidos. Neumáticos, frenos, distribución, batería, embrague, carrocería y averías quedan fuera y requieren presupuesto.

### Controles

- Dinero almacenado en decimal; nunca `float`.
- Cálculos versionados y reproducibles.
- Precio y margen previstos frente a reales.
- Ninguna excepción por debajo de 1.000 €.
- Una desviación que rompa el mínimo bloquea entrega económica y exige decisión.
- Conciliación de factura de compra, transporte, taller, garantía, gestoría y cobros.

### Fiscalidad

La asesoría determinará por adquisición si corresponde régimen general, operación intracomunitaria o REBU. El REBU no se aplicará automáticamente. La factura y el cálculo de margen conservarán el régimen fiscal y su evidencia.

Fuente: [Agencia Tributaria — REBU](https://sede.agenciatributaria.gob.es/Sede/iva/regimenes-tributacion-iva/regimen-especial-bienes-usados.html).

## 5. AUTO1 y estrategia de proveedores

### Decisión inicial

- AUTO1 será la primera fuente profesional.
- El transporte inicial será el ofrecido por AUTO1 cuando sea competitivo y cumpla el SLA.
- Pujas y compras manuales durante el MVP.
- La integración se realizará únicamente mediante API oficial y contrato autorizado.

### Condición de API

La API pública anunciada por AUTO1 está orientada principalmente a integrar inventario profesional para venta. No se asumirá que permite consultar catálogo de compra, pujar o comprar hasta recibir documentación contractual específica.

Se solicitará a AUTO1:

- alta y verificación de Pide Tu Coche, S.L.;
- account manager;
- documentación de API y sandbox;
- endpoints y permisos de catálogo, puja, compra, transporte y documentos;
- límites, costes, SLA, cambios y soporte;
- derechos de almacenamiento, imágenes y publicación;
- condiciones de tratamiento y transferencia de datos;
- reglas de cancelación, reclamación y transporte.

Hasta entonces, el backoffice permitirá operación manual y propuestas privadas. No se utilizará scraping ni automatización del navegador para eludir límites.

### Arquitectura de proveedores

Crear una interfaz `VehicleSource` para incorporar posteriormente otras subastas:

- búsqueda/candidato;
- disponibilidad y caducidad;
- desglose de comisiones;
- inspección y documentos;
- puja/compra manual o autorizada;
- transporte;
- incidencias;
- derechos de uso.

Fuentes: [AUTO1 para compradores](https://www.auto1.com/es/home/buy), [AUTO1 integración API](https://www.auto1.com/es/home/sell).

## 6. Logística, taller y documentación

### Transporte

Cada orden registrará:

- origen, destino y ruta;
- proveedor y coste aceptado;
- ETA y SLA;
- seguro y responsabilidad;
- CMR/orden de transporte;
- fotografías de recogida y entrega;
- VIN y kilómetros;
- daños previos y daños de transporte;
- entrega fallida, reclamación y resolución.

No se comunicará una fecha garantizada cuando dependa de terceros. Se mostrará rango estimado y última actualización.

### Recepción

1. Verificar VIN, documentación, llaves y kilometraje.
2. Fotografías 360º y bajos/interior cuando proceda.
3. Comparar contra informe de origen.
4. Abrir incidencia antes de manipular daños de transporte.
5. Bloquear preparación hasta resolver discrepancias críticas.

### Taller

- Taller homologado con identidad, seguro, tarifas, SLA y responsable.
- Checklist común y presupuesto separado por conceptos.
- Preparación estándar de 300 € como hipótesis, ajustada al tipo de vehículo.
- Ningún trabajo extraordinario sin presupuesto y aprobación registrada.
- Factura y evidencia fotográfica en el expediente.

### Documentación y transferencia

- Informe DGT completo cuando aplique.
- Contrato/factura con identificación, precio, fecha y hora.
- ITV vigente antes de circular.
- Seguro antes de entrega/circulación.
- Cambio de titularidad dentro del plazo legal.
- Gestoría administrativa especializada durante el MVP.

La DGT recomienda el informe completo y exige el cambio de titularidad en 30 días desde la firma; un vehículo con determinadas cargas, baja o incumplimientos puede no ser transferible. [DGT — compra de vehículo usado](https://www.dgt.es/nuestros-servicios/tu-vehiculo/vas-a-comprar-o-vender-un-vehiculo-de-segunda-mano/comprar-un-vehiculo-de-segunda-mano/index.html).

## 7. Alcance tecnológico del MVP

### Must

1. Web pública responsive y accesible.
2. Configurador “Pedir mi coche”.
3. CRM de solicitudes, cualificación, notas, consentimiento y SLA.
4. Oportunidades manuales/CSV con derechos y caducidad.
5. Candidatos, comparación y precio desglosado.
6. Encargo de búsqueda y reserva condicionada.
7. Contratos versionados y copia en soporte duradero.
8. Pagos, reembolsos y conciliación.
9. Portal cliente con timeline, documentos, pagos e incidencias.
10. Backoffice con pricing, puja máxima, compra y auditoría.
11. Portal partner con recepción, inspección, presupuesto y entrega.
12. Notificaciones transaccionales.
13. Analítica, consentimientos y derechos RGPD.
14. Staging, producción, monitorización, backups y rollback.

### Fuera del MVP

- Puja o compra automática.
- Scraping.
- Marketplace multi-vendedor.
- Aplicaciones móviles nativas.
- IA que apruebe riesgo, precio o contrato.
- ERP/taller completo.
- Franquicias y liquidaciones automáticas.
- Publicación de catálogo sin derechos.

### Arquitectura propuesta

- Monolito modular, no microservicios.
- Frontend: Next.js + TypeScript.
- Backend: TypeScript modular con API documentada mediante OpenAPI.
- Base de datos: PostgreSQL gestionado en región UE.
- Trabajos asíncronos: cola/outbox con reintentos e idempotencia.
- Archivos: almacenamiento privado en UE con URLs firmadas y análisis.
- Pagos: PSP europeo/Stripe para tarifa y reserva; saldo preferentemente por transferencia conciliada.
- Firma: proveedor eIDAS seleccionado tras comparación.
- Infraestructura reproducible y cuentas a nombre del promotor.
- GitHub, pull requests, CI/CD, staging y producción separados.

Las versiones y proveedores se fijarán en ADR antes de desarrollar. Ningún secreto estará en Git.

## 8. Presupuesto y calendario digital

### Presupuesto provisional

| Partida | Rango recomendado |
| --- | ---: |
| Discovery, producto y arquitectura | 5.000–8.000 € |
| UX/UI y sistema de diseño | 6.000–10.000 € |
| Desarrollo MVP | 30.000–45.000 € |
| QA, seguridad, DevOps y accesibilidad | 6.000–10.000 € |
| Legal/fiscal y contratos | 8.000–15.000 € |
| Contingencia técnica | 10–15 % |

Objetivo de contratación tecnológica: **45.000–65.000 €** para un MVP asistido, con pagos por hitos y propiedad completa del código, repositorios, cuentas, datos e infraestructura.

Coste recurrente inicial estimado:

- nube, base de datos, archivos y monitorización: 200–800 €/mes;
- email, firma, soporte y herramientas: 150–600 €/mes;
- mantenimiento evolutivo/correctivo: 1.500–4.000 €/mes.

### Calendario realista

| Fase | Duración |
| --- | ---: |
| Gate 0 y validación profesional | 2 semanas |
| Producto, arquitectura y prototipo | 2–3 semanas |
| Construcción incremental | 6–8 semanas |
| QA, UAT y operación simulada | 2 semanas |
| Piloto privado | 4 semanas |

Una versión documental o demo puede existir antes; el lanzamiento transaccional no se comprometerá a cuatro semanas sin contratos, proveedores y pruebas.

## 9. Pagos y control financiero

- El frontend inicia el pago, pero nunca confirma por sí solo una reserva.
- Confirmación mediante webhook firmado, cuerpo bruto e idempotencia.
- Referencia única para encargo, reserva, compra, reembolso y factura.
- Reembolso con aprobación, motivo y conciliación.
- Saldo del vehículo preferentemente por transferencia bancaria verificada para reducir costes y fraude.
- Prohibido almacenar tarjetas.
- Separar fondos cobrados, comprometidos, reembolsables y disponibles.
- Cierre diario de caja comprometida y conciliación semanal.

## 10. Privacidad, seguridad y contratación electrónica

- Inventario de tratamientos y base jurídica.
- Privacidad por diseño y por defecto.
- Datos mínimos, acceso mínimo y retención definida.
- Consentimiento de marketing separado.
- RBAC y MFA para administración, compras y finanzas.
- Cifrado en tránsito y reposo.
- Logs sin documentos, teléfonos completos, VIN completos o datos bancarios.
- Exportación, rectificación, supresión y limitación trazables.
- Contratos con encargados y revisión de transferencias internacionales.
- Confirmación del contrato y copia descargable en soporte duradero.
- Función online de desistimiento cuando legalmente corresponda.

Fuentes: [AEPD — protección de datos por defecto](https://www.aepd.es/derechos-y-deberes/cumple-tus-deberes/medidas-de-cumplimiento/proteccion-de-datos-por-defecto), [LSSI — contratación electrónica](https://boe.es/buscar/act.php?id=BOE-A-2002-13758).

## 11. Atención al cliente y posventa

### Canales iniciales

- Teléfono y email.
- WhatsApp como canal de comunicación, no como única evidencia contractual.
- Portal cliente para documentos, estados e incidencias.

### SLA propuesto

| Caso | Objetivo |
| --- | ---: |
| Nueva solicitud | Primer contacto en 4 horas laborables |
| Consulta con operación activa | Respuesta en 1 día laborable |
| Incidencia de transporte/entrega | Acuse en 2 horas laborables |
| Incidencia de garantía | Acuse en 1 día laborable |
| Reclamación formal | Acuse inmediato y responsable asignado |

Las fechas comunicadas serán rangos. Toda promesa de garantía, entrega o devolución debe coincidir con contrato y capacidad operativa.

## 12. Métricas de validación

Medir desde el primer lead:

- lead → cualificado;
- cualificado → encargo;
- encargo → candidato aprobado;
- candidato → reserva;
- reserva → adjudicación;
- adjudicación → entrega;
- margen previsto frente a real;
- días por estado;
- reembolsos y causa;
- incidencias por vehículo y coste;
- CAC por cliente entregado;
- satisfacción posterior a entrega.

### Gate de escalado

No abrir una nueva provincia hasta mantener al menos cuatro semanas:

- contribución real positiva y mínimo respetado;
- reembolsos controlados;
- SLA de entrega cumplido;
- partner homologado;
- soporte disponible;
- CAC dentro del límite aprobado;
- sin P0/P1 abiertos.

## 13. Estado de Gate 0

### Aprobado por el propietario

- Sociedad prevista: Pide Tu Coche, S.L.
- Marca: PideTuCoche.eu.
- Margen mínimo por operación: 1.000 € después de variables y provisiones.
- AUTO1 como primera fuente profesional.
- Transporte inicial ofrecido por AUTO1.
- Preparación estándar presupuestada en 300 €.

### Propuesta aprobada para diseño, ajustable

- Encargo de búsqueda de 199 €.
- Reserva del 5 %, mínimo 1.000 € y máximo 2.000 €.
- Responsabilidad legal pactada inicialmente en 12 meses.
- Garantía mecánica externa ampliable.
- Provisiones, arquitectura, presupuesto, SLA y calendario de este documento.

### Pendiente antes de cobrar o comprar

- Certificación de denominación y constitución.
- Registro/protección de marca.
- Dictamen de consumo, desistimiento, reserva y garantía.
- Modelo fiscal por tipo de adquisición.
- Contrato y acceso profesional/API con AUTO1.
- Tarifas reales de transporte, taller, gestoría y garantía.
- Proveedor de pago, firma y financiación.
- Partner piloto y pólizas.

**Decisión de salida:** Gate 0 queda parcialmente cerrado y habilita PRD, prototipo y ADR. No habilita cobros, compras ni producción.
