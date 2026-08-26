# PideTuCoche.eu — Guía de identidad «Naranja Performance»

**Versión:** 1.0  
**Fecha:** 26 de agosto de 2026  
**Ámbito:** identidad gráfica, producto digital, publicidad y red de puntos de entrega  
**Estado:** dirección creativa aprobada para desarrollo

---

## 1. Objetivo del documento

Este documento define las instrucciones de ejecución para convertir la dirección visual **Naranja Performance** en un sistema de marca profesional, coherente y escalable para **PideTuCoche.eu**.

Debe utilizarse como briefing común por:

- Agencia de branding e identidad gráfica.
- Equipo UX/UI y diseño de producto.
- Desarrollo frontend.
- Marketing, contenidos y paid media.
- Proveedores de impresión, rotulación y señalética.
- Partners responsables de revisión y entrega de vehículos.

La referencia visual entregada es un **mockup conceptual**. No debe emplearse como arte final ni trazarse automáticamente. El equipo gráfico deberá reconstruir el logotipo, los iconos y las aplicaciones en formato vectorial; el equipo digital deberá reconstruir las pantallas mediante componentes, texto HTML y estilos accesibles.

---

## 2. Decisión de marca

### 2.1 Denominación visible

**PideTuCoche.eu**

Reglas:

- Escribir siempre `PideTuCoche.eu`, sin espacios y respetando las mayúsculas internas.
- `PideTuCoche` será el bloque principal del nombre.
- `.eu` se representará en naranja cuando el fondo y el contraste lo permitan.
- En URL, correo y texto técnico se admite `pidetucoche.eu` en minúsculas.
- No abreviar como `PTC` en comunicación externa durante el lanzamiento.

### 2.2 Descriptor

> Vehículos de ocasión bajo pedido

### 2.3 Propuesta principal

> Tu próximo coche, bajo pedido.

### 2.4 Secuencia comercial

> Lo buscamos · Lo revisamos · Te lo entregamos

### 2.5 Llamada a la acción principal

> PEDIR MI COCHE

### 2.6 Personalidad

La marca debe percibirse como:

- Segura, transparente y profesional.
- Digital, ágil y fácil de utilizar.
- Cercana, sin parecer informal.
- Especialista en automoción, sin estética de competición.
- Apta para vehículos económicos, familiares, SUV, eléctricos y premium.
- Europea y escalable, sin perder claridad para el mercado español.

No debe percibirse como una casa de subastas, un compraventa de saldo, un taller mecánico ni una marca exclusiva de vehículos eléctricos.

---

## 3. Concepto visual

El sistema combina cuatro ideas:

1. **Coche frontal:** producto y reconocimiento inmediato del sector.
2. **Confirmación:** vehículo seleccionado, revisado o reservado.
3. **Cursor:** proceso digital y acción del usuario.
4. **Naranja:** movimiento, oportunidad y conversión.

El azul noche aporta la confianza necesaria para un modelo en el que el cliente solicita o reserva un vehículo antes de su entrega física. El naranja debe conducir la atención, no dominar toda la interfaz.

---

## 4. Logotipo

### 4.1 Composición principal

El identificador principal estará formado por:

- Símbolo de coche frontal simplificado.
- Círculo de confirmación naranja superpuesto en la parte inferior.
- Check blanco dentro del círculo.
- Cursor asociado a la confirmación, sin invadir la legibilidad del coche.
- Wordmark `PideTuCoche.eu`.

El símbolo debe reducirse correctamente a favicon. Se evitarán detalles mecánicos, líneas finas o volúmenes 3D.

### 4.2 Versiones obligatorias

La agencia entregará:

1. Principal horizontal sobre fondo claro.
2. Principal horizontal sobre fondo oscuro.
3. Versión vertical o compacta.
4. Isotipo sin wordmark.
5. Versión monocroma negra.
6. Versión monocroma blanca.
7. Favicon simplificado.
8. App icon para iOS y Android.

### 4.3 Área de seguridad

Definir como `x` el diámetro del círculo naranja del check. Mantener alrededor del logotipo un área libre mínima igual a `1x`. Ningún texto, borde, fotografía o elemento gráfico podrá entrar en esa zona.

### 4.4 Tamaños mínimos

| Aplicación | Tamaño mínimo recomendado |
|---|---:|
| Logotipo horizontal digital | 140 px de ancho |
| Logotipo horizontal impreso | 32 mm de ancho |
| Isotipo digital | 24 × 24 px |
| Favicon simplificado | 16 × 16 px |
| Avatar social | 320 × 320 px de original |

En 16 px se utilizará una versión específica simplificada; no reducir directamente el símbolo completo si pierde definición.

### 4.5 Usos prohibidos

- No estirar, inclinar o rotar el logotipo.
- No cambiar el naranja por colores de campañas.
- No aplicar sombras, biseles, cromados ni efectos 3D.
- No situarlo sobre fotografías sin una zona de contraste controlada.
- No separar `.eu` del wordmark.
- No sustituir el cursor por una mano, flecha genérica u otro pictograma.
- No incorporar marcas, símbolos o denominaciones de plataformas proveedoras.

---

## 5. Paleta cromática

### 5.1 Colores principales

| Token | Nombre | HEX | RGB | Uso |
|---|---|---|---|---|
| `brand.navy` | Azul noche | `#0B132B` | 11, 19, 43 | Fondos oscuros, cabeceras y texto principal |
| `brand.orange` | Naranja Performance | `#FF5A1F` | 255, 90, 31 | CTA, selección, precio y acentos |
| `brand.warmWhite` | Blanco cálido | `#F8F7F3` | 248, 247, 243 | Fondos claros y texto sobre azul |
| `brand.graphite` | Grafito | `#20242A` | 32, 36, 42 | Texto, tarjetas y elementos técnicos |
| `brand.silver` | Plata fría | `#C7CED6` | 199, 206, 214 | Bordes, divisores y estados neutros |

### 5.2 Color funcional

| Token | Nombre | HEX | Uso exclusivo |
|---|---|---|---|
| `status.success` | Verde verificación | `#22C55E` | Revisión superada, operación completada o documentación validada |

El verde no forma parte de la expresión principal de marca y no debe competir con el naranja.

### 5.3 Proporción orientativa

- 60 % blanco cálido o superficies claras.
- 30 % azul noche y grafito.
- 10 % naranja.
- Verde únicamente en estados funcionales.

### 5.4 Estados digitales recomendados

| Estado | Fondo | Texto/borde |
|---|---|---|
| CTA principal | `#FF5A1F` | `#0B132B` |
| CTA hover | `#E94B10` | `#FFFFFF` |
| CTA pressed | `#C93F0C` | `#FFFFFF` |
| Foco visible | transparente | anillo `#FFB199`, 3 px |
| Enlace sobre blanco | transparente | `#0B4FB3` o azul accesible validado |
| Éxito | `#DCFCE7` | `#166534` |
| Error | `#FEE2E2` | `#991B1B` |

Todos los pares de color deberán validarse según **WCAG 2.2 AA**: contraste mínimo 4,5:1 para texto normal y 3:1 para texto grande y controles gráficos. No utilizar blanco sobre el naranja principal en texto pequeño sin validación; se prefiere azul noche sobre naranja.

---

## 6. Tipografía

### 6.1 Familias recomendadas

- **Titulares y wordmark de referencia:** Manrope 700/800.
- **Interfaz, párrafos y datos:** Inter 400/500/600/700.
- Alternativa corporativa única si se desea simplificar: Inter en todos los usos.

Las fuentes deben alojarse de forma eficiente y con licencias compatibles. Limitar la carga web a los pesos realmente utilizados.

### 6.2 Escala digital base

| Estilo | Escritorio | Móvil | Peso | Interlineado |
|---|---:|---:|---:|---:|
| Display hero | 64 px | 40 px | 800 | 1,05 |
| H1 | 48 px | 36 px | 800 | 1,10 |
| H2 | 36 px | 28 px | 700 | 1,15 |
| H3 | 24 px | 22 px | 700 | 1,25 |
| Body large | 18 px | 18 px | 400 | 1,55 |
| Body | 16 px | 16 px | 400 | 1,55 |
| Small | 14 px | 14 px | 500 | 1,45 |
| Button | 16 px | 16 px | 700 | 1,00 |

No emplear texto de interfaz inferior a 14 px. Evitar párrafos en mayúsculas. Las mayúsculas se reservarán para CTA cortos y etiquetas.

---

## 7. Sistema gráfico e iconografía

- Iconos lineales geométricos con grosor visual constante de 2 px a 24 px.
- Terminaciones redondeadas y formas sencillas.
- Círculo naranja para pasos activos y acciones destacadas.
- Círculo blanco o contorno plata para estados neutros.
- Verde únicamente después de una validación real.
- Evitar escudos genéricos como símbolo central de la marca; pueden utilizarse de forma secundaria para garantías o protección.

Iconos mínimos del sistema:

- Buscar vehículo.
- Comparar.
- Reservar.
- Revisión/inspección.
- Documentación.
- Transporte.
- Entrega.
- Garantía.
- Financiación.
- Vehículo eléctrico.
- Atención/WhatsApp.
- Partner o punto de entrega.

---

## 8. Dirección fotográfica

### 8.1 Vehículos

- Fotografías limpias, realistas y con perspectiva consistente.
- Preferencia por ángulos tres cuartos delanteros.
- Fondo neutro, concesionario moderno o entorno urbano español/europeo.
- Matrículas y marcas de terceros anonimizadas cuando sea necesario.
- No exagerar reflejos, velocidad, humo o conducción deportiva.
- Mostrar variedad real: compacto, familiar, SUV, eléctrico y vehículo premium.

### 8.2 Confianza operativa

Además del vehículo, la biblioteca visual deberá incluir:

- Revisión técnica real.
- Fotografías de daños o estado documentado.
- Preparación y limpieza.
- Transporte protegido.
- Entrega al cliente.
- Puntos asociados identificados correctamente.

No mostrar una inspección o garantía como completada si todavía no existe evidencia operativa.

---

## 9. Diseño de la web

### 9.1 Objetivo de la landing inicial

Conseguir que el visitante complete una solicitud de vehículo o inicie una conversación comercial cualificada.

### 9.2 Hero aprobado

**Titular:**

> Tu próximo coche, bajo pedido.

**Subtítulo:**

> Lo buscamos · Lo revisamos · Te lo entregamos

**Formulario inicial:**

- Marca/modelo o tipo de vehículo.
- Presupuesto máximo.
- Combustible.
- CTA: `PEDIR MI COCHE`.

El primer formulario debe ser breve. Los datos personales y requisitos detallados se solicitarán en un segundo paso.

### 9.3 Estructura recomendada

1. Cabecera con navegación y CTA.
2. Hero con formulario de búsqueda.
3. Explicación del proceso en tres pasos.
4. Vehículos u oportunidades destacadas.
5. Comparador de coste total y precio final.
6. Confianza: revisión, documentación, garantía y entrega.
7. Cómo funciona la reserva.
8. Red de puntos de entrega.
9. Preguntas frecuentes.
10. CTA final y pie legal.

### 9.4 Grid y espaciado

- Contenedor máximo: 1.280 px.
- Grid escritorio: 12 columnas.
- Tablet: 8 columnas.
- Móvil: 4 columnas.
- Margen lateral: 24 px móvil, 32 px tablet y mínimo 64 px escritorio.
- Escala de espaciado: 4, 8, 12, 16, 24, 32, 48, 64, 96 px.
- Radio de tarjetas: 12 px.
- Radio de botones y campos: 8 px.
- Altura mínima de controles táctiles: 44 px; preferencia 48–52 px.

### 9.5 Breakpoints operativos

| Nombre | Anchura |
|---|---:|
| Móvil | 320–767 px |
| Tablet | 768–1.023 px |
| Escritorio | 1.024–1.439 px |
| Escritorio amplio | ≥1.440 px |

Diseñar primero las versiones de referencia en 390 px, 768 px y 1.440 px. El frontend deberá ser fluido entre puntos de ruptura.

---

## 10. Componentes digitales mínimos

El diseño en Figma y la implementación deberán compartir estos componentes:

- Header escritorio y móvil.
- Botón primario, secundario, terciario e icon button.
- Campos, selects, autocomplete y validaciones.
- Tarjeta de vehículo.
- Etiquetas: disponible, reservado, en revisión, en transporte y entregado.
- Comparador de vehículos.
- Desglose de precio final.
- Indicador de progreso de reserva y entrega.
- Tarjeta de inspección.
- Tarjeta de partner/punto de entrega.
- Testimonio verificable.
- Acordeón FAQ.
- Modal y banner de consentimiento.
- Estados vacíos, carga, error y confirmación.

Cada componente deberá incluir variantes desktop/mobile y estados `default`, `hover`, `focus`, `active`, `disabled`, `loading`, `success` y `error` cuando correspondan.

---

## 11. Variables para desarrollo

```css
:root {
  --color-brand-navy: #0b132b;
  --color-brand-orange: #ff5a1f;
  --color-brand-warm-white: #f8f7f3;
  --color-brand-graphite: #20242a;
  --color-brand-silver: #c7ced6;
  --color-status-success: #22c55e;

  --color-action-hover: #e94b10;
  --color-action-pressed: #c93f0c;
  --color-focus-ring: #ffb199;

  --font-display: "Manrope", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;

  --radius-control: 8px;
  --radius-card: 12px;
  --shadow-card: 0 12px 32px rgb(11 19 43 / 12%);

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
}
```

Los nombres de variables deberán mantenerse semánticos. No crear componentes con colores HEX aislados si el color ya existe como token.

---

## 12. Publicidad y redes sociales

### 12.1 Plantillas obligatorias

- Post cuadrado: 1.080 × 1.080 px.
- Vertical Instagram/TikTok: 1.080 × 1.920 px, respetando zonas seguras.
- Story: 1.080 × 1.920 px.
- Horizontal: 1.200 × 628 px.
- Display y retargeting en tamaños definidos por la plataforma.

### 12.2 Jerarquía del anuncio

1. Necesidad o vehículo.
2. Beneficio principal.
3. Prueba de confianza.
4. CTA.
5. Marca.

Ejemplo:

> ¿No encuentras el coche que buscas?  
> Lo buscamos, revisamos y entregamos.  
> **PIDE TU COCHE**

No comunicar descuentos, garantías, plazos o estados de inspección que no puedan acreditarse.

---

## 13. Aplicaciones físicas

La agencia deberá diseñar:

- Tarjeta de visita.
- Firma de correo.
- Hoja de presupuesto y dossier de vehículo.
- Placa o vinilo `Punto PideTuCoche`.
- Roll-up y photocall sencillo.
- Rotulación de vehículo de transporte o cortesía.
- Cartel de vehículo reservado.
- Carpeta de entrega y portamatrícula, si procede legalmente.

En un punto asociado, la marca **PideTuCoche.eu** debe ser visible, pero no debe inducir a confusión sobre qué empresa vende, revisa, garantiza o entrega el vehículo. Incluir los datos legales que correspondan en cada soporte contractual.

---

## 14. Microcopy y tono

### Utilizar

- `Precio final estimado` hasta que el importe esté cerrado.
- `Vehículo seleccionado`.
- `Reserva solicitada` y `Reserva confirmada` como estados distintos.
- `Revisión pendiente`, `En revisión` y `Revisión superada`.
- `Fecha estimada de entrega`.
- `Consulta las condiciones de garantía`.

### Evitar

- `Coche garantizado` sin detallar cobertura.
- `Sin riesgo`.
- `Entrega garantizada` cuando dependa de terceros.
- `El mejor precio` sin evidencia comparativa.
- `Procedente de AUTO1` o uso de su marca salvo autorización contractual expresa.
- Presentar un vehículo de subasta como propiedad o stock disponible si todavía no ha sido adquirido.

---

## 15. Entregables exigidos a la agencia gráfica

### Identidad

- Manual de marca PDF.
- Archivo maestro editable AI o equivalente.
- Logotipos en SVG, PDF, EPS, PNG y WebP.
- Versiones RGB, CMYK, Pantone aproximado, positivo, negativo y monocromo.
- Isotipo y favicon en SVG/PNG: 16, 32, 48, 180, 192 y 512 px.
- App icon con zonas seguras para iOS y Android.
- Paleta con equivalencias HEX, RGB, CMYK y Pantone.
- Licencias y archivos de las tipografías utilizadas.

### Aplicaciones

- Plantillas editables para redes.
- Tarjeta, firma de correo y documentación comercial.
- Señalética de punto asociado.
- Artes finales con sangrado, perfiles de color y tipografías trazadas para imprenta.

No se considerará final un logotipo entregado únicamente como JPG o PNG.

---

## 16. Entregables exigidos al equipo UX/UI y digital

- Archivo Figma organizado por páginas y componentes.
- Variables de color, tipografía, espaciado, radios y sombras.
- Librería de componentes con Auto Layout.
- Prototipo navegable móvil y escritorio.
- Pantallas de solicitud, resultados, ficha, reserva, seguimiento y entrega.
- Estados vacíos, carga, error, éxito y falta de disponibilidad.
- Especificación responsive y comportamiento de componentes.
- Exportaciones SVG optimizadas y fotografías en AVIF/WebP.
- Design tokens documentados para frontend.
- Revisión WCAG 2.2 AA y navegación por teclado.
- Pruebas de contraste, zoom al 200 %, foco visible y lectores de pantalla.

---

## 17. Convención de archivos

Utilizar nombres en minúsculas, sin espacios ni acentos:

```text
pidetucoche-logo-horizontal-dark.svg
pidetucoche-logo-horizontal-light.svg
pidetucoche-isotipo.svg
pidetucoche-favicon-32.png
pidetucoche-social-template-square.fig
pidetucoche-partner-signage-print.pdf
```

Estructura sugerida:

```text
/01-brand
/02-logo
/03-icons
/04-digital-ui
/05-social
/06-print
/07-partners
/08-exports
/09-licenses
```

---

## 18. Criterios de aceptación

La identidad se considerará lista para lanzamiento cuando:

- El logotipo sea legible a tamaños mínimos y funcione en claro, oscuro y monocromo.
- El favicon sea reconocible a 16 y 32 px.
- Todos los textos visibles estén reconstruidos y no rasterizados.
- Los CTA y componentes cumplan WCAG 2.2 AA.
- La web funcione correctamente desde 320 px hasta escritorio amplio.
- El naranja mantenga una función de acción y no supere aproximadamente el 15 % de la interfaz.
- Existan estados diferenciados para solicitud, reserva, compra, revisión, transporte y entrega.
- La interfaz no presente como disponible un vehículo todavía no adquirido.
- Los mensajes de garantía, precio y plazo incluyan las condiciones correspondientes.
- Los originales vectoriales, editables, licencias y derechos de uso hayan sido entregados.
- Las piezas hayan sido probadas en pantalla, impresión y señalética real.

---

## 19. Prioridad de implementación

### Semana 1 — Fundamentos

- Refinar y vectorizar logotipo.
- Validar nombre, símbolo y legibilidad.
- Cerrar paleta, tipografías y tokens.
- Crear favicon y versiones principales.

### Semana 2 — Producto digital

- Diseñar landing responsive.
- Diseñar formulario de solicitud.
- Crear tarjeta de vehículo y estados.
- Definir componentes y prototipo.

### Semana 3 — Conversión y operación

- Diseñar reserva y seguimiento.
- Diseñar confianza, inspección y garantía.
- Crear plantillas publicitarias y comerciales.

### Semana 4 — Producción y QA

- Implementar frontend.
- Probar accesibilidad y rendimiento.
- Preparar originales de impresión.
- Validar consistencia antes del lanzamiento.

---

## 20. Aprobación

Antes de publicar, deberán aprobarse conjuntamente:

- Logotipo final y variantes.
- Pantallas responsive principales.
- Textos de precio, reserva, garantía y entrega.
- Señalética para partners.
- Artes finales y derechos de uso.

**Dirección recomendada:** PideTuCoche.eu — Naranja Performance.  
**Mensaje de lanzamiento:** *Tu próximo coche, bajo pedido.*
