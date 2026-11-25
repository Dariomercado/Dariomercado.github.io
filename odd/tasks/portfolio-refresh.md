# portfolio-refresh

Repositorio: `~/projects/portfolio` (GitHub: `Dariomercado/Dariomercado.github.io`, deploy en Netlify, raíz como publish dir).
Objetivo: que el portfolio deje de posicionar a Dario como frontend/maquetado y muestre el trabajo real de backend, datos y sistemas de gestión, antes de que un cliente lea la propuesta de la clínica dental.

## Specs

- **S1** — El sitio no debe describirse como "frontend" ni "maquetado". El home y la sección "sobre mí" deben nombrar sistemas de gestión, bases de datos, transacciones y trabajo con datos. Texto actual a eliminar: `perfil:Desarrollador frontend`, `enfoque:Maquetado, integración y mantenimiento web`, `tecnologías:HTML, CSS, JavaScript, Next.js`.
- **S2** — `caja-inventario` y `altoke-pos` deben ser las dos primeras tarjetas de "mis proyectos", cada una con link al repositorio de GitHub. `caja-inventario` debe enlazar además al demo vivo `https://caja-inventario-sage.vercel.app`.
- **S3** — Cada tarjeta nueva usa una captura en `/img/proyectos/<slug>.png` (convención existente). No se hace push hasta que existan ambos archivos: una imagen rota en producción es peor que no tener la tarjeta.
- **S4** — Se eliminan las 15 imágenes no referenciadas por `index.html`, `CSS/estilos.css` ni `JS/main.js`. Verificado que ninguna se construye dinámicamente desde JS.
- **S5** — Los repos `caja-inventario` y `altoke-pos` deben tener descripción y topics en GitHub: es la primera cosa que ve alguien que llega desde el PDF y `caja-inventario` la tiene vacía.

## Tasks

| ID | Tarea | Specs | Ruta | Commit |
| --- | --- | --- | --- | --- |
| T1 | Higiene de GitHub: descripción y topics en los dos repos | S5 | inline (gh CLI) | — (metadata remota) |
| T2 | Reescribir home y "sobre mí" | S1 | inline | pendiente |
| T3 | Reordenar tarjetas y agregar caja-inventario + altoke-pos | S2, S3 | inline | pendiente |
| T4 | Borrar las 15 imágenes sin uso | S4 | inline | pendiente |
| T5 | Verificar en local y push (bloqueada por capturas) | S3 | inline | pendiente |
| T6 | Auditar `curso-de-bordados` (Windows, Python/Next) | — | inline | pendiente |
| T7 | Auditar `ecomerce-futbol` (Windows, Mercado Pago, bug de categorías) | — | inline | pendiente |
| T8 | Auditar `blog` Django (Windows) | — | inline | pendiente |

## Log

**L1** — Pedido original del usuario, textual:

> bueno voy a enviar la propuesta en unas horas, ahora quiero ajustar mi portfolio como te decia. como lo gestionamos, debo crear un repo del portfolio dentro de /projects? para descargarlo de github pero el repo que esta ahora mismo en github del portfolio es subido desde windows y si se llama Dariomercado.github.io, los repos de caja-inventario y altoke-pos son proyectos que hicimos con gentle-shell desde ubuntu linux, pero los proyectos, ecomerce-futbol, curso-de-bordados y django-rest-framework_auth_blog son repos que subi desde windows. la idea seria auditar los repos de windows y ajustar el codigo que haga falta para que esten funcionando bien porque como te decia son proyectos que tienen algunas cositas que ajustar, luego lo que serian los dos repos que subi hace poco que son los proyectos que hice con vos caja-inventario y altoke-pos estos ya estan bien, pero quizas a uno de estos dos le agregue mercado pago. no tengo una pc como para poder agarrar todos los repos en paralelo y trabajarlos en distintas terminales iniciadas con gentle-shell supongo que voy a tener que atacar de a uno en uno, es decir un proyecto a la vez vamos auditando y ajustando y subiendo al portfolio. el repo de mi portfolio tambien fue subido desde windows

**L2** — Decisión del usuario (orden y alcance): "Portfolio primero, auditorías después". Mercado Pago: **no** se agrega a `caja-inventario` ni a `altoke-pos`, porque `ecomerce-futbol` ya prueba checkout con API y pagos de prueba, y tocar credenciales y webhooks justo antes de una llamada agrega riesgo sin beneficio para la propuesta dental.

**L3** — Hallazgos del estado inicial del repo del portfolio:
- Estático: `index.html`, `CSS/estilos.css`, `JS/main.js` + jQuery. Sin `netlify.toml`, así que el publish dir es la raíz.
- 25 archivos, 6,5 MB de historia + 6,6 MB de trabajo. `img/` pesa 6,5 MB.
- 5 tarjetas: coldflex, bicables, arflex, futbol-scrapper, dermoe-shopify.
- 15 imágenes sin referenciar (3,1 MB), incluidas `img/Captura de pantalla (7|9|10).png` con espacios y paréntesis en el nombre (artefacto de Windows).
- **No hay problema de CRLF**: los 20 archivos marcados `-text` son las imágenes; el código ya está en LF.

**L4** — Advertencia pendiente antes de tocar los repos de Windows: verificar `.env` o credenciales commiteadas en el historial (`ecomerce-futbol` usa Mercado Pago). Si un token quedó en el historial, hay que **rotarlo** en el proveedor, no solo borrar el archivo. No publicar ni enlazar esos repos antes de esa verificación.

**L5** — Bloqueo actual de T5: faltan las capturas `img/proyectos/caja-inventario.png` y `img/proyectos/altoke-pos.png`. Las saca el usuario: `caja-inventario` desde el demo vivo en Vercel con login de demo; `altoke-pos` levantando `pnpm --filter @altoke/web dev`.
