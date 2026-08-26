# Contrato provisional de leads

**Estado:** Prototipo validado; persistencia pendiente de aprobación de privacidad y arquitectura.

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
- `503 LEAD_STORAGE_NOT_CONFIGURED`: el lead es válido, pero no se persiste mientras no exista un adaptador aprobado.
- `501 LEAD_STORAGE_ADAPTER_PENDING`: reservado para la fase de integración del repositorio CRM.

## Decisiones de seguridad

- No se escriben datos personales en logs desde este endpoint.
- El endpoint no se considera operativo para producción hasta configurar almacenamiento en región UE, retención, derechos de acceso, borrado y auditoría.
- La pantalla actual prepara el segundo paso localmente y comunica expresamente que todavía no se ha enviado ningún dato.
