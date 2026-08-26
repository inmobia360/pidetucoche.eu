# ADR-002 — Stack técnico del MVP

**Estado:** Propuesta

**Fecha:** 26 de agosto de 2026

## Contexto

El producto combina web pública, portales, CRM, cálculos económicos, pagos, documentos, archivos y operación interna. Necesita velocidad de entrega sin perder separación de dominio, trazabilidad ni capacidad de migrar de proveedor.

## Decisión propuesta

### Repositorio

- Monorepo `pnpm`.
- TypeScript estricto compartido.
- Apps separadas por ejecución, no por microservicio.

```text
apps/web        Next.js: web pública y portales
apps/api        API modular y workers
packages/domain Reglas puras, estados y dinero
packages/db     Esquema, migraciones y repositorios
packages/ui     Componentes Naranja Performance
packages/config Configuración compartida
```

### Aplicación

- Web: Next.js con renderizado apropiado para SEO y áreas autenticadas.
- API: Node.js/TypeScript con estructura modular y OpenAPI.
- Dominio independiente de frameworks para pricing, estados y permisos.
- PostgreSQL gestionado en región UE.
- Outbox transaccional y worker para email, documentos, webhooks y reintentos.
- Sin Redis inicial; se añadirá solo por necesidad demostrada.

### Integraciones

- Identidad mediante OIDC y MFA para roles sensibles.
- Stripe/PSP para encargo y reserva; transferencia conciliada para saldo.
- Firma eIDAS mediante adaptador de proveedor.
- Almacenamiento S3 compatible en UE, privado y con URLs firmadas.
- Email transaccional mediante adaptador.
- AUTO1 mediante operación manual y adaptador; API solo tras autorización.

### Plataforma

- Contenedores reproducibles.
- GitHub Actions para lint, tipos, unitarias, integración y build.
- Entornos local, CI, staging y producción.
- Infraestructura/configuración versionada sin secretos.
- Logs estructurados, trazas, métricas y alertas.
- Backups automáticos y restauración ensayada.

## Principios

- Dinero y estados primero en el dominio.
- Validación server-side.
- Idempotencia en toda entrada externa.
- Permisos denegados por defecto.
- Efectos externos después del commit mediante outbox.
- Proveedores detrás de interfaces.
- Ninguna dependencia técnica obtiene autoridad de negocio.

## Alternativas descartadas

### Microservicios

Mayor coste operativo, pruebas distribuidas y consistencia innecesaria para el volumen MVP.

### Backend completo dentro de componentes de interfaz

Reduce archivos al inicio, pero dificulta separar permisos, workers, OpenAPI y reglas económicas.

### Low-code como núcleo transaccional

Útil para prototipos, pero arriesga trazabilidad, concurrencia y salida de proveedor en reservas/pagos.

## Pendiente para aceptar

- Framework exacto de API y ORM mediante spike corto.
- Proveedores y región contractual.
- Presupuesto de cada servicio.
- Política de retención y antivirus de archivos.
- Prueba de restauración y plan de salida.

## Resultado del spike inicial

Se ha validado la base de trabajo con Node.js 24, pnpm 11, TypeScript estricto y Vitest. El paquete `packages/domain` compila y prueba sin dependencias de framework:

- representación monetaria exacta en céntimos mediante `bigint`;
- contribución mínima obligatoria de 1.000 €;
- cálculo determinista de precio y puja máxima;
- transiciones explícitas del expediente;
- verificación automática en GitHub Actions.

Este resultado no resuelve todavía la elección del framework de API, ORM, identidad ni proveedores externos.

## Criterio de aceptación

Un prototipo técnico debe demostrar:

1. cálculo de puja determinista;
2. reserva concurrente única;
3. webhook duplicado procesado una vez;
4. auditoría de transición;
5. acceso denegado entre expedientes;
6. documento privado mediante URL temporal;
7. migración y restauración de base de datos.
