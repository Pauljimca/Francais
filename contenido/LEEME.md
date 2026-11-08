# Contenido preparado, aún sin publicar

Los episodios 2 a 8 del podcast y el audio de sus diálogos ya están grabados, pero se publican **uno por módulo**:

| Módulo | Episodio | Audio del episodio | Audio del diálogo, línea por línea |
| --- | --- | --- | --- |
| 2 | Bienvenue sur l'île | `podcast/ep02-bienvenue.mp3` | `audio/m2-dialogo/` |
| 3 | En cuisine | `podcast/ep03-en-cuisine.mp3` | `audio/m3-dialogo/` |
| 4 | J'adore cette chanson | `podcast/ep04-chanson.mp3` | `audio/m4-dialogo/` |
| 5 | En voyage | `podcast/ep05-en-voyage.mp3` | `audio/m5-dialogo/` |
| 6 | Ma vie sur l'île | `podcast/ep06-ma-vie.mp3` | `audio/m6-dialogo/` |
| 7 | Les nouvelles | `podcast/ep07-les-nouvelles.mp3` | `audio/m7-dialogo/` |
| 8 | Mes projets | `podcast/ep08-mes-projets.mp3` | `audio/m8-dialogo/` |

`episodios-02-08.json` tiene el texto de cada diálogo (en orden, con quién habla), las frases para repetir y las preguntas con su respuesta modelo. Al publicar un módulo: agregarlo a `data.js` (diálogo con `audioDir`, frases, plan semanal), sumar el episodio a `CURSO.podcast` y a `podcast/feed.xml`, y listar sus mp3 en `sw.js`.

Voces: Claire = Amélie (ElevenLabs), Paul = voz clonada de Paul, narradora = Lina (acento colombiano).
