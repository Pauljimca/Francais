# Français: guía del proyecto para Claude

App personal de Paul para aprender francés, con su podcast *Le petit café de Providencia*. Es una página web que se instala en la pantalla de inicio (iPhone, iPad, Mac) y funciona **sin conexión**. Se publica con GitHub Pages en `https://pauljimca.github.io/Francais/`.

Este archivo explica cómo está hecha la app y cómo publicar cambios. Léelo antes de tocar cualquier cosa.

## Quién es el estudiante

- Paul vive en Providencia (Colombia). Es profesor de inglés y músico; estudia francés de lunes a viernes, unos 30 minutos al día, sobre todo en el **iPhone**.
- Objetivo: francés estándar conversacional, con el DELF como referencia (A2, luego B1). Presupuesto cero: nada de servicios pagos.
- **Las instrucciones de la app van en español.** El francés usa *vous* por defecto, con versión *tu* cuando aplica.
- Método: escuchar, imitar y repetir; gramática corta y en español; temas de su vida (turistas en la isla, cocina, música, viajes).
- Se publica **un módulo a la vez**, cuando Paul llega a él. No adelantar contenido.

## Archivos

| Archivo | Qué contiene |
| --- | --- |
| `index.html` | Las pantallas. La página de **Gramática** está escrita aquí directamente (ver "Limitación actual"). |
| `data.js` | Todo el contenido del curso en `window.CURSO`: módulos y lista del podcast. |
| `app.js` | El funcionamiento: audio, grabación, repaso espaciado, plan semanal, check-in. La constante `VERSION` está arriba. |
| `sw.js` | Modo sin conexión. `CACHE` (nombre de la versión) y `FILES` (lista de todo lo que se guarda en el dispositivo, **incluido cada mp3**). |
| `styles.css` | Apariencia, con modo oscuro. |
| `manifest.webmanifest`, `icons/` | Instalación como app. |
| `audio/mN-dialogo/NN.mp3` | El diálogo del módulo N, una línea por archivo, en el orden de `dialogue.lines`. Ya están los módulos 1 a 8. |
| `audio/m1-frases/{amelie,paul}/<id>.mp3` | Las frases del Módulo 1 en dos voces. `<id>` es el id de la frase (`m1-04`, o `m1-04-tu` para la versión con *tu*), más `anchor.mp3` para el texto ancla. |
| `podcast/epNN-*.mp3`, `podcast/feed.xml`, `podcast/cover.jpg` | Episodios y feed del podcast. |
| `contenido/episodios-02-08.json` | Guiones de los episodios 2 a 8: diálogo (quién habla, en orden), frases para repetir, preguntas con respuesta modelo. |
| `contenido/LEEME.md` | Qué está grabado pero sin publicar. |

## Cómo está organizado un módulo en `data.js`

Cada módulo de `CURSO.modules` tiene:

- `id` (`'m1'`), `num`, `title`, `subtitle`, `anchor` (texto ancla para la grabación de "Mi voz").
- `phraseAudio`: carpeta de las frases grabadas (`'audio/m1-frases/'`). Si falta, la app usa la voz francesa del dispositivo.
- `dialogue`: `title`, `scene`, `audioDir` (`'audio/mN-dialogo/'`), `lines` (`{who: 'Paul'|'Claire', fr, es}`) y `questions` (opción múltiple en español: `{q, options, answer}` con `answer` = índice de la opción correcta).
- `week`: el plan del lunes al viernes y el fin de semana. Cada tarea es `{text}` más `go` (pantalla a la que lleva: `dialogo`, `frases`, `repaso`, `gramatica`, `voz`, `conversacion`) o `copy` (`roleplay`, `writing` o `checkin`).
- `conversation`: guía para hablar con su amigo, con *tu*: `questions`, `aboutMe`, `rescue` (cada una `{fr, es}`).
- `prompts`: textos que la app copia para pegar en Claude (`roleplay`, `writing`).
- `blocks`: grupos de frases. Cada frase es `{id, fr, es, note?, tu?: {fr, es}}`. Los `id` no se cambian nunca: el progreso del repaso y las grabaciones de Paul se guardan con ese id.

`CURSO.podcast` es la lista de episodios publicados: `{num, title, file, minutes, desc}`.

## Limitación actual (primera tarea al publicar el Módulo 2)

La app hoy solo maneja un módulo:

- `app.js` usa `const MOD = window.CURSO.modules[0]`.
- La gramática del Módulo 1 está escrita a mano dentro de `index.html`.

Antes de publicar el Módulo 2 hay que:

1. Hacer que la app muestre el **módulo actual** (por ejemplo, el último de la lista, o uno elegido en Ajustes) y permita volver a los anteriores.
2. Que el **Repaso** incluya las frases de todos los módulos publicados, no solo del actual.
3. Pasar la gramática a `data.js` (por módulo) y que `index.html` la muestre desde ahí.
4. No perder nada guardado en el iPhone de Paul: progreso, estrellas, grabaciones y tareas marcadas usan `localStorage` (claves que empiezan con `fr.`) e IndexedDB (`francais`).

## Cómo publicar un módulo nuevo

1. **Contenido** en `data.js`: el diálogo sale de `contenido/episodios-02-08.json` (mismo texto y mismo orden que el audio, porque `audio/mN-dialogo/NN.mp3` sigue ese orden). Faltan por escribir, para cada módulo: traducción al español de cada línea, preguntas de comprensión, unas 30 a 40 frases con su versión *tu* cuando aplique, gramática corta en español, plan semanal, guía de conversación y texto ancla. Seguir el estilo del Módulo 1.
2. **Podcast**: agregar el episodio a `CURSO.podcast` y un `<item>` a `podcast/feed.xml` (con `length` = tamaño exacto del mp3 en bytes y `itunes:duration` en segundos).
3. **Sin conexión**: listar en `FILES` de `sw.js` todos los mp3 nuevos (diálogo y episodio).
4. **Versión**: subir `VERSION` en `app.js` y `CACHE` en `sw.js` al mismo número. Si no se cambia `CACHE`, el iPhone no se actualiza.
5. **Probar** antes de subir (ver abajo).
6. **Subir** con un commit que diga la versión y qué cambió.
7. Actualizar `contenido/LEEME.md` (quitar el módulo publicado de "sin publicar").

## Audio

- Voces: **Claire** = Amélie (voz francesa de ElevenLabs), **Paul** = clon de la voz de Paul, **narradora** = Lina (acento colombiano).
- Paul planeaba cancelar ElevenLabs antes del 15 de noviembre de 2026. Sin esa suscripción **no se puede grabar audio nuevo**: confirmar con él antes de contar con ElevenLabs. Las frases de los módulos 2 a 8 se escuchan con la voz francesa del dispositivo (la app lo hace sola cuando el módulo no tiene `phraseAudio`). No proponer servicios pagos.
- Velocidad lenta: el audio grabado se reproduce a menor velocidad sin cambiar el tono (`playbackRate` con `preservesPitch`).

## Probar antes de subir

- `node --check app.js sw.js data.js`.
- Servir la carpeta (`python3 -m http.server`) y abrir la app con Playwright a tamaño de iPhone (390×844): recorrer Hoy, Diálogo, Frases, Repaso y Más, sin errores en la consola.
- Comprobar que cada mp3 listado en `sw.js` existe (si falta uno, el modo sin conexión falla al instalarse).
- Safari pide el audio por partes: el `sw.js` ya responde con 206 a las peticiones con `Range`. No quitar eso.

## Lo que vive fuera de este repositorio

- **Tracker de progreso** (dashboard en los artifacts de Claude de Paul) y la hoja **"Progreso de francés.xlsx"** en su carpeta *French course project* de la Mac. Se actualizan cada viernes con el resumen que copia la app (pantalla Hoy › Viernes).
- Archivos originales de audio de ElevenLabs: carpeta *French course project/audio* en la Mac de Paul.
