# Contenido preparado, aún sin publicar

Los episodios 2 a 8 del podcast, el audio de sus diálogos y las frases de cada módulo (voz de Amélie) ya están grabados, pero se publican **uno por módulo**:

| Módulo | Episodio | Audio del episodio | Audio del diálogo, línea por línea | Frases (Amélie) |
| --- | --- | --- | --- | --- |
| 2 | Bienvenue sur l'île | `podcast/ep02-bienvenue.mp3` | `audio/m2-dialogo/` | `audio/m2-frases/amelie/` |
| 3 | En cuisine | `podcast/ep03-en-cuisine.mp3` | `audio/m3-dialogo/` | `audio/m3-frases/amelie/` |
| 4 | J'adore cette chanson | `podcast/ep04-chanson.mp3` | `audio/m4-dialogo/` | `audio/m4-frases/amelie/` |
| 5 | En voyage | `podcast/ep05-en-voyage.mp3` | `audio/m5-dialogo/` | `audio/m5-frases/amelie/` |
| 6 | Ma vie sur l'île | `podcast/ep06-ma-vie.mp3` | `audio/m6-dialogo/` | `audio/m6-frases/amelie/` |
| 7 | Les nouvelles | `podcast/ep07-les-nouvelles.mp3` | `audio/m7-dialogo/` | `audio/m7-frases/amelie/` |
| 8 | Mes projets | `podcast/ep08-mes-projets.mp3` | `audio/m8-dialogo/` | `audio/m8-frases/amelie/` |

`frases-02-08.json` tiene las frases (con `id`, traducción, notas y versión *tu*) y el texto ancla de cada módulo; `noAudio` lista las grabaciones que no sirven.

`episodios-02-08.json` tiene el texto de cada diálogo (en orden, con quién habla), las frases para repetir y las preguntas con su respuesta modelo. Al publicar un módulo: agregarlo a `data.js` (diálogo con `audioDir`, frases, plan semanal), sumar el episodio a `CURSO.podcast` y a `podcast/feed.xml`, y listar sus mp3 en `sw.js`.

Voces: Claire = Amélie (ElevenLabs), Paul = voz clonada de Paul, narradora = Lina (acento colombiano).
