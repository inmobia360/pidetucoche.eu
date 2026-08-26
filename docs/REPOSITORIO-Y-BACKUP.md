# Repositorio y respaldo del proyecto

## Propósito

GitHub es el respaldo versionado y auditable del proyecto PideTuCoche.eu. La operación diaria, los secretos, los datos de clientes y los servicios de producción deben permanecer fuera del repositorio.

El repositorio sirve para conservar:

- código fuente, pruebas y configuración no sensible;
- documentación de negocio, producto y arquitectura;
- decisiones, riesgos, backlog y evidencias de entrega;
- historial de cambios y automatizaciones de verificación.

## Prácticas obligatorias

1. Trabajar siempre con cambios pequeños, descriptivos y reversibles.
2. Validar tipos, pruebas, build y revisión de diferencias antes de publicar.
3. Usar ramas y pull requests para cambios relevantes; `main` debe mantenerse desplegable.
4. Mantener activada la integración continua y no ignorar un check fallido.
5. No guardar secretos, tokens, credenciales, datos personales reales, tarjetas, VIN completos ni exportaciones operativas.
6. Mantener `.env.example` sin valores reales y guardar los secretos en el gestor correspondiente.
7. Registrar decisiones importantes en `project/DECISION_LOG.md` y riesgos en `project/RISK_REGISTER.md`.
8. Etiquetar entregas relevantes y conservar una copia local de trabajo independiente cuando proceda.
9. Verificar periódicamente que el repositorio puede clonarse, instalarse, probarse y compilarse desde cero.

## Qué no sustituye GitHub

GitHub no sustituye:

- las copias de seguridad de bases de datos y archivos de producción;
- el gestor de secretos y las claves de recuperación;
- la documentación contractual y legal controlada;
- el plan de continuidad, restauración y salida de proveedores.

La configuración de producción, las copias de datos y los accesos deben tener su propio inventario, responsables, retención y prueba de restauración.

## Criterio de publicación

Un cambio puede publicarse cuando tiene alcance claro, documentación suficiente, pruebas proporcionales al riesgo, revisión de secretos y un siguiente paso identificable. La publicación en GitHub no implica que una funcionalidad esté autorizada para operar comercialmente.
