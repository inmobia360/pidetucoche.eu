# Contribuir

## Flujo

GitHub se utiliza como respaldo versionado y registro auditable del proyecto; la operación, los secretos y los datos reales se mantienen fuera del repositorio. Consulta la [política de repositorio y respaldo](docs/REPOSITORIO-Y-BACKUP.md).

1. Selecciona un elemento de `project/BACKLOG_MVP.md` o una incidencia enlazada.
2. Crea una rama corta y descriptiva desde la rama principal.
3. Mantén el cambio limitado a un resultado verificable.
4. Añade o actualiza pruebas y documentación.
5. Abre un pull request usando la plantilla del repositorio.
6. No integres cambios con P0/P1 abiertos o checks críticos fallidos.

## Convenciones

- Commits claros y en presente: `docs:`, `feat:`, `fix:`, `test:`, `refactor:`, `chore:`.
- No mezclar decisiones legales, económicas y técnicas no relacionadas en un mismo cambio.
- Cada regla de negocio debe apuntar a un requisito, decisión o criterio de aceptación.
- Las decisiones arquitectónicas duraderas se documentan en `docs/architecture/`.
- Las cifras de negocio deben identificar fuente, fecha y si son reales o hipótesis.

## Definition of Done

- Criterios de aceptación cumplidos.
- Revisión funcional y técnica proporcional al riesgo.
- Pruebas relevantes en verde.
- Responsive, accesibilidad y estados de error revisados cuando aplique.
- Sin secretos ni datos personales en código, logs o fixtures.
- Migración, rollback y observabilidad documentados cuando aplique.
- Handoff con riesgos y limitaciones conocidas.
