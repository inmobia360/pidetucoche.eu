# Contrato provisional de leads

**Estado:** Captura y validación implementadas; persistencia y acceso administrativo pendientes de configuración segura.

## Entrada

`POST /api/leads` acepta JSON con:

| Campo | Tipo | Regla |
| --- | --- | --- |
| `vehicle` | string | Tipo, marca o modelo solicitado |
| `budget` | string | Tramo de presupuesto |
| `fuel` | string | Preferencia de combustible |
| `name` | string | Nombre del contacto, máximo 120 caracteres |
| `email` | string | Email válido |
| `phone` | string | Teléfono válido |
| `province` | string | Provincia de contacto |
| `detail` | string | Opcional, máximo 1.000 caracteres |
| `serviceConsent` | boolean | Obligatorio y debe ser `true` |
| `marketingConsent` | boolean | Opcional; separado del servicio |

La validación normaliza el email a minúsculas y nunca devuelve el contenido completo del lead en la respuesta.

## Respuestas

- `400 INVALID_JSON`: cuerpo no interpretable.
- `400 INVALID_LEAD`: campos inválidos o consentimiento de servicio ausente.
- `503 LEAD_STORAGE_NOT_CONFIGURED`: el lead es válido, pero no se persiste mientras falte `DATABASE_URL` o `LEAD_STORAGE_ENABLED=true`.
- `503 LEAD_STORAGE_UNAVAILABLE`: el adaptador existe, pero PostgreSQL no está disponible.
- `201 LEAD_CREATED`: lead persistido; devuelve únicamente referencia y estado.

## Acceso administrativo

`GET /api/admin/leads` devuelve `401 ADMIN_AUTH_REQUIRED` hasta integrar OIDC con MFA y autorización por rol. La ruta no devuelve leads ni métricas sin una sesión administrativa validada.

## Decisiones de seguridad

- No se escriben datos personales en logs desde este endpoint.
- El endpoint no se considera operativo para producción hasta configurar almacenamiento en región UE, retención, derechos de acceso, borrado y auditoría.
- La pantalla envía los datos únicamente al endpoint propio después de que la persona complete el formulario y acepte el consentimiento de servicio; si el almacenamiento está desactivado, la API responde `503` y no persiste el lead.
