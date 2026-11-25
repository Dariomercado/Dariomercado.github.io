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
| T1 | Higiene de GitHub: descripción y topics en los dos repos | S5 | inline (gh CLI) | — (metadata remota, no versionada) |
| T2 | Reescribir home y "sobre mí" | S1 | inline | `89a0fd8` |
| T3 | Reordenar tarjetas y agregar caja-inventario + altoke-pos | S2, S3 | inline | `89a0fd8` |
| T4 | Borrar las imágenes sin uso | S4 | inline | `89a0fd8` |
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

**L6** — T1 a T4 completadas. Evidencia:
- T1: `gh repo edit` sobre `caja-inventario` y `altoke-pos`; verificado con `gh repo list` que ambos tienen descripción y 7 y 9 topics respectivamente. `ecomerce-futbol` sigue con descripción vacía a propósito: fuera de alcance hasta su auditoría (T7).
- T2: reescritos el `<p>` del home, el `<p>` de "sobre mí" y la grilla de tres columnas (`perfil:Desarrollador full stack`, `stack principal`, `enfoque:Sistemas de gestión, datos y transacciones`). Agregados `meta description` y `og:type/title/description/url` que no existían, para que el link pegado en Workana muestre resumen. Título cambiado a `Dario Mercado | Desarrollador full stack`.
- T3: dos `article.box` nuevas al inicio de `.box-container`. caja-inventario con dos acciones (demo en Vercel + código); altoke-pos con una (código). Agregada regla `.box .text a + a{ margin-left:.8rem }` porque `.text a` es `inline-block` sin separación entre botones.
- T4: **14** imágenes sin uso, no 15 (el conteo inicial falló por los nombres con espacios). 3,1 MB. Verificado con `git ls-files -z` para no romper con `Captura de pantalla (7).png`.
- Verificación: `<article>` 7/7, `<div>` 17/17, `<section>` 4/4; 7 tarjetas; ninguna referencia rota a los archivos borrados; las únicas dos imágenes faltantes son las dos capturas pendientes.
- Commit `89a0fd8` en rama `feat/portfolio-refresh`, no en `main`, para no publicar las dos imágenes rotas.

**L7** — Resuelto el login de `altoke-pos` (prerrequisito de la captura). Diagnóstico: el front corría en 5173 y el proxy de Vite apuntaba a `localhost:3001`, pero **la API no estaba corriendo y el contenedor `altoke-db` no existía**, así que el proxy no tenía a dónde ir y el navegador mostraba "no se pudo hablar con el servidor". Secuencia aplicada, idéntica a la documentada en `apps/api/README.md`:
1. `docker compose up -d db --wait` → `altoke-db` sana en `127.0.0.1:5435`.
2. Migraciones con el rol dueño: `DATABASE_URL=postgres://altoke:altoke@localhost:5435/altoke pnpm db:migrate` → las 8 ya estaban aplicadas.
3. API con el rol sin ownership: `DATABASE_URL=postgres://altoke_app:altoke_app@localhost:5435/altoke pnpm --filter @altoke/api dev` → escucha en 3001.

Verificación: `GET /salud` 200 y `POST /auth/sesion` 400 (validación) tanto directo en 3001 como por el proxy en `:5173/api/...`. Las rutas reales son `GET /salud`, `POST /auth/sesion`, `DELETE /auth/sesion`, `GET /auth/yo`, `POST /auth/registro`, `GET /sync/eventos`.

**Segunda causa, la que el error tapaba**: no existía ninguna cuenta. El README dice explícitamente "there is no seed"; los 58 usuarios de la base los generaron los tests de integración con emails sintéticos. Hay pantalla de registro (`apps/web/src/components/sesion/PantallaRegistro.tsx`). Se creó una cuenta de demo vía `POST /api/auth/registro` por el proxy: **`dario@altoke.local` / `altoke1234`**, tenant `kiosco-demo`, sucursal `Principal`, rol owner. Login verificado con HTTP 200 y token emitido.

**Nota operativa**: la API quedó corriendo en un job en segundo plano de esta sesión; muere con la sesión. Para levantarla de forma permanente hace falta un terminal propio con los dos comandos de arriba.

**L8** — Capturas integradas (commit `ef09699`).
- Se recibieron 6 archivos en `/mnt/c/Users/DARIO-PC/Downloads`, copiados y normalizados a `img/proyectos/`.
- **Todas las capturas son 1359×767 (16:9)**, incluidos los 5 archivos ya publicados (1.77–1.85). El CSS anterior (`height: 22rem` sobre tarjetas de 34rem) forzaba 1.55, así que `object-fit: cover` **recortaba ~12% del ancho en las cinco tarjetas ya publicadas**. Corregido a `aspect-ratio: 16 / 9`, que además hace que las nuevas entren sin recorte.
- Héroe de caja-inventario: pantalla "Registrar venta", que ilustra literalmente la afirmación de la descripción (stock por línea, total calculado en servidor) y trae la garantía transaccional impresa en la propia UI.
- Héroe de altoke-pos: POS con venta armada, 4 ítems, TOTAL $ 100,10 con IVA incluido. Se **descartó** `altoke-pos-abrir-caja.png`: traía la barra del navegador y estaba casi vacía.
- Sin referenciar, preparadas para galería: `caja-inventario-2.png` (reportes), `caja-inventario-3.png` (asistente con las tool calls `listar_ventas`/`ver_venta` visibles), `altoke-pos-2.png` (modal de cobro con vuelto).
- Dato de diseño que habilita la galería sin romper simetría: caja-inventario y altoke-pos son las tarjetas 1 y 2, o sea **la misma fila** del grid de 2 columnas. Una tira de miniaturas en ambas queda pareja; las filas 2 a 4 no la llevan.

**L9** — Decisión del usuario: **una imagen por tarjeta**, sin galería (ni modal ni miniaturas). Las tres capturas extra (`caja-inventario-2.png`, `caja-inventario-3.png`, `altoke-pos-2.png`) **quedan en el repo sin referenciar** a propósito, como material listo para una galería futura. Es una excepción deliberada a S4: no son peso muerto, son assets en espera. Si en algún momento se decide que no se van a usar, se borran y se actualiza esta línea.

**L10** — Pendiente para cerrar T5: el usuario verifica en el navegador antes del push, porque hay un **cambio visual en las cinco tarjetas ya publicadas** (dejan de estar recortadas al 12%). No se hace merge ni push sin esa verificación y sin su decisión explícita, porque publicar no es una acción que el agente tome por su cuenta.



