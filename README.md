# PideTuCoche.eu

Plataforma B2C española de vehículos de ocasión bajo pedido.

> Tu próximo coche, bajo pedido.  
> Lo buscamos · Lo revisamos · Te lo entregamos.

## Estado

Repositorio de producto, negocio y desarrollo. Las decisiones provisionales de **Gate 0** ya permiten iniciar el núcleo técnico, aunque requieren validación jurídica, fiscal y contractual antes de operar comercialmente. Todavía no existe una aplicación desplegada ni una operativa comercial activa.

## Modelo

PideTuCoche.eu conecta una demanda validada con vehículos disponibles en fuentes profesionales autorizadas. La sociedad compra profesionalmente y vende al consumidor después de una reserva condicionada, control de margen y cobertura de caja. El vehículo se transporta, inspecciona, prepara y entrega desde Ourense o mediante partners homologados.

Principios:

- Sin inventario especulativo durante el MVP.
- Una oportunidad no se presenta como stock propio.
- Pujas y compras manuales en la primera versión.
- Sin scraping ni republicación de fuentes sin autorización.
- Precio, pagos, estados y evidencias trazables.
- Privacidad, seguridad y accesibilidad desde el diseño.

## Fuentes de verdad

1. [Guía de implementación desde cero](docs/implementation/guia-implementacion-desde-cero.md)
2. [Pliego de implantación digital](docs/implementation/pliego-implantacion-digital.md)
3. [Decisiones fundacionales de Gate 0](project/GATE_0_DECISIONES_FUNDACIONALES.md)
4. [Resumen del modelo de negocio](docs/business/resumen-contexto-modelo-negocio.md)
5. [Guía de marca Naranja Performance](docs/brand/guia-marca-naranja-performance.md)
6. [Informe para potencial inversor](docs/investor/informe-potencial-inversor.md), cuyas cifras son hipótesis de planificación
7. [Política de repositorio y respaldo](docs/REPOSITORIO-Y-BACKUP.md)

Especificaciones activas de desarrollo:

- [PRD del MVP](docs/product/PRD-MVP.md)
- [Recorridos de usuario](docs/product/RECORRIDOS-DE-USUARIO.md)
- [Máquina de estados](docs/product/MAQUINA-DE-ESTADOS.md)
- [Modelo de dominio](docs/architecture/MODELO-DE-DOMINIO.md)
- [Stack técnico propuesto](docs/architecture/ADR-002-stack-tecnico.md)

Las instrucciones recientes del propietario y el estado real del código, datos y contratos prevalecen sobre los documentos históricos. Las discrepancias críticas deben registrarse; nunca se resuelven silenciosamente.

## Organización del repositorio

```text
assets/                  Activos conceptuales de marca
docs/                    Negocio, implantación, marca e inversión
project/                 Roadmap, backlog, decisiones y riesgos
skills/                  Director multiagente PideTuCoche Creator
.github/                 Plantillas y verificación continua
packages/domain/         Reglas puras de dinero, pricing y estados
apps/web/                Landing y configurador inicial del MVP
apps/web/app/backoffice/ Centro de operaciones sin datos hasta protegerlo
packages/db/             Migración y adaptador PostgreSQL para leads
```

La aplicación sigue inicialmente un enfoque de **monolito modular**. El paquete de dominio mantiene las reglas críticas separadas de interfaces, bases de datos y proveedores; `apps/web` contiene ya el primer prototipo navegable de captación.

## Próximo hito

Convertir el PRD en un recorrido demostrable: landing, configurador de solicitud y backoffice mínimo, mientras se validan legalmente la contratación B2C, la garantía, la fiscalidad y los derechos de uso de AUTO1.

Consulta el [roadmap](project/ROADMAP.md) y el [backlog inicial](project/BACKLOG_MVP.md).

## Desarrollo

Requisitos locales: Node.js 24 y pnpm 11.

```bash
pnpm install
pnpm check
pnpm test
pnpm build
```

La integración continua ejecuta los mismos controles en cada cambio propuesto y al actualizar `main`.

Antes de implementar una funcionalidad:

1. Vincularla a un requisito del pliego.
2. Identificar reglas económicas, legales y de permisos.
3. Definir criterios de aceptación y pruebas.
4. Registrar las decisiones arquitectónicas relevantes.
5. Trabajar mediante pull request y completar la plantilla de verificación.

Las normas completas están en [CONTRIBUTING.md](CONTRIBUTING.md) y las instrucciones para agentes en [AGENTS.md](AGENTS.md).

## Aviso

Este repositorio contiene especificaciones de trabajo. No sustituye asesoramiento jurídico, fiscal, financiero, de consumo o protección de datos. No deben añadirse secretos, credenciales, datos reales de clientes ni información privada de fuentes profesionales.
