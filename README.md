# PideTuCoche.eu

Plataforma B2C española de vehículos de ocasión bajo pedido.

> Tu próximo coche, bajo pedido.  
> Lo buscamos · Lo revisamos · Te lo entregamos.

## Estado

Repositorio inicial de producto, negocio y desarrollo. El proyecto se encuentra en **Gate 0 — decisiones fundacionales**. La documentación incluida define el alcance del MVP; todavía no representa una aplicación desplegada ni una operativa comercial activa.

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
3. [Resumen del modelo de negocio](docs/business/resumen-contexto-modelo-negocio.md)
4. [Guía de marca Naranja Performance](docs/brand/guia-marca-naranja-performance.md)
5. [Informe para potencial inversor](docs/investor/informe-potencial-inversor.md), cuyas cifras son hipótesis de planificación

Las instrucciones recientes del propietario y el estado real del código, datos y contratos prevalecen sobre los documentos históricos. Las discrepancias críticas deben registrarse; nunca se resuelven silenciosamente.

## Organización del repositorio

```text
assets/                  Activos conceptuales de marca
docs/                    Negocio, implantación, marca e inversión
project/                 Roadmap, backlog, decisiones y riesgos
skills/                  Director multiagente PideTuCoche Creator
.github/                 Plantillas de colaboración
```

La futura aplicación seguirá inicialmente un enfoque de **monolito modular**. La estructura de código se incorporará cuando se aprueben las decisiones técnicas del [ADR-001](docs/architecture/ADR-001-arquitectura-mvp.md).

## Próximo hito

Cerrar las decisiones de Gate 0:

- sociedad vendedora y revisión legal;
- modalidad de reserva, reembolso y garantía;
- derechos de fuentes y catálogo;
- margen mínimo, puja máxima y cobertura de caja;
- partner piloto y transportista;
- alcance Must y presupuesto por hitos;
- stack, proveedores y propiedad de cuentas.

Consulta el [roadmap](project/ROADMAP.md) y el [backlog inicial](project/BACKLOG_MVP.md).

## Desarrollo

Antes de implementar una funcionalidad:

1. Vincularla a un requisito del pliego.
2. Identificar reglas económicas, legales y de permisos.
3. Definir criterios de aceptación y pruebas.
4. Registrar las decisiones arquitectónicas relevantes.
5. Trabajar mediante pull request y completar la plantilla de verificación.

Las normas completas están en [CONTRIBUTING.md](CONTRIBUTING.md) y las instrucciones para agentes en [AGENTS.md](AGENTS.md).

## Aviso

Este repositorio contiene especificaciones de trabajo. No sustituye asesoramiento jurídico, fiscal, financiero, de consumo o protección de datos. No deben añadirse secretos, credenciales, datos reales de clientes ni información privada de fuentes profesionales.

