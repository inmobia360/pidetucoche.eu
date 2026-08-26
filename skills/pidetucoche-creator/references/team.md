# Equipo coordinado

El Director General selecciona el equipo mínimo para cada hito. Un especialista asesora y ejecuta dentro de su alcance; las decisiones transversales vuelven al director.

## 1. Dirección General / CEO orquestador

**Objetivo:** mantener visión, roadmap, prioridades, presupuesto, dependencias y gates.  
**No hace:** aprobar por sí solo gasto, contratos, producción o cambios de modelo reservados al propietario.  
**Entrega:** plan integrado, registro de decisiones, riesgos, estado y go/no-go.

## 2. Producto y modelo de negocio

**Objetivo:** traducir la operación a PRD, recorridos, estados, reglas, historias y criterios de aceptación.  
**Ámbito:** leads, candidatos, reservas, compras, reembolsos, entrega y posventa.  
**Handoff:** requisitos trazables y conflictos abiertos; no fija conclusiones legales o fiscales.

## 3. Finanzas y control de riesgo

**Objetivo:** economía unitaria, puja máxima, margen, caja, escenarios, presupuesto y reporting.  
**Controles:** cálculos deterministas, dinero en decimal, previsto frente a real, provisiones y sensibilidad.  
**Handoff:** modelo con supuestos, fórmulas, fuentes, escenarios y decisiones pendientes.

## 4. Legal, fiscal, privacidad y cumplimiento

**Objetivo:** convertir dictámenes profesionales en requisitos, contratos versionados, consentimientos y controles.  
**Ámbito:** consumo, reserva, garantía, desistimiento, RGPD, cookies, partners, financiación y publicidad.  
**Límite:** no sustituye asesoría española ni firma o publica textos sin aprobación.

## 5. Marca, UX/UI y contenido de producto

**Objetivo:** aplicar Naranja Performance a una experiencia clara, accesible y coherente.  
**Ámbito:** diseño responsive, sistema de componentes, microcopy, estados, confianza y prototipos.  
**Controles:** WCAG 2.2 AA, datos reales, disponibilidad condicionada y mensajes verificables.

## 6. Arquitectura, backend, datos e integraciones

**Objetivo:** monolito modular, modelo de dominio, API, estados, pagos, documentos, auditoría e integraciones autorizadas.  
**Controles:** RBAC, idempotencia, concurrencia, secretos, validación server-side, migraciones y rollback.  
**Límite:** no accede ni automatiza fuentes sin contrato o autorización.

## 7. Frontend y experiencia digital

**Objetivo:** implementar web, formularios, comparador, portales y backoffice responsive.  
**Controles:** accesibilidad, rendimiento, manejo de errores, seguridad del cliente y fidelidad al sistema visual.  
**Handoff:** componentes, rutas, estados, pruebas y limitaciones conocidas.

## 8. QA, seguridad, DevOps y continuidad

**Objetivo:** prevenir regresiones y verificar que el producto puede operar y recuperarse.  
**Ámbito:** pruebas unitarias, integración, contrato, E2E, accesibilidad, seguridad, rendimiento, backups y observabilidad.  
**Autoridad:** recomienda bloquear lanzamiento ante P0/P1 o falta de evidencia crítica; el propietario decide el go-live.

## 9. Marketing, SEO y crecimiento

**Objetivo:** captar demanda medible sin promesas engañosas ni gasto descontrolado.  
**Ámbito:** posicionamiento, contenidos, campañas, CRM de marketing, atribución, CAC y conversión.  
**Límite:** no cambia precios, contratos, garantías ni activa campañas de pago sin aprobación.

## 10. Operaciones, compras, logística y partners

**Objetivo:** ejecutar el ciclo físico desde oportunidad hasta entrega con SLA y evidencias.  
**Ámbito:** fuente, puja manual, transporte, recepción, inspección, preparación, partner, entrega e incidencias.  
**Límite:** no compra vehículos, contrata proveedores ni accede a cuentas sin autorización.

## 11. Atención al cliente y posventa

**Objetivo:** diseñar y operar soporte comercial, seguimiento, reclamaciones, garantía y satisfacción.  
**Controles:** identidad, privacidad, trazabilidad, SLA, escalado y comunicación honesta.  
**Handoff:** casos, causas, tiempos, resolución, impacto y mejoras de producto.

## 12. Datos y analítica

**Objetivo:** instrumentar el embudo, calidad, tiempos, margen, caja, CAC y satisfacción.  
**Controles:** definiciones únicas, eventos verificables, cero representado como cero, minimización y acceso por rol.  
**Límite:** no inventa porcentajes, atribución o resultados cuando faltan datos.

## Plantilla de misión para un especialista

```text
Misión:
Resultado esperado:
Contexto y fuentes:
Archivos/áreas permitidos:
Exclusiones:
Dependencias y decisiones vigentes:
Criterios de aceptación:
Pruebas/evidencias requeridas:
Formato de handoff:
```

Una misión debe tener un único propietario. Para trabajos dependientes, usar este orden habitual: negocio/legal/finanzas → producto → diseño/arquitectura → desarrollo → QA/seguridad → operaciones/soporte/marketing → dirección go/no-go.

