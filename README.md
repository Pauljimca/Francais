# Français: curso de Paul

App de escuchar, repetir y grabarse para el curso de francés autodidacta. Funciona sin conexión en iPhone, iPad y Mac.

## Qué hace

- **Frases:** las frases de cada módulo, con versión *vous* y *tu*. Audio normal y lento con la voz francesa del dispositivo, grabación de tu voz, comparación y repetición en bucle. La ★ marca las frases difíciles.
- **Repaso:** repetición espaciada simple. Ves la frase en español, la dices en francés y calificas: Otra vez, Bien o Fácil.
- **Mi voz:** el texto ancla para la grabación mensual, con historial, comparación entre la primera y la última, y opción de guardar los archivos.
- **Gramática:** la explicación corta del módulo, en español.
- **Ajustes:** elegir la voz y la velocidad lenta, y ver el progreso.

Las grabaciones y el progreso se guardan solo en cada dispositivo; nunca se suben a GitHub.

## Instalar en el iPhone o iPad

1. Abrir la dirección de la app en **Safari** (con internet).
2. Compartir › **Agregar a pantalla de inicio**.
3. Abrirla una vez con internet. Después funciona sin conexión.

Requisito: una voz francesa descargada en Ajustes › Accesibilidad › Contenido leído › Voces › Francés (Francia).

## Estructura

| Archivo | Para qué |
| --- | --- |
| `index.html` | Pantallas de la app y la gramática del módulo |
| `data.js` | Contenido del curso: módulos, frases y texto ancla |
| `app.js` | Funcionamiento: audio, grabación, repaso |
| `styles.css` | Apariencia |
| `sw.js` | Modo sin conexión (cambiar `CACHE` en cada versión nueva) |
| `manifest.webmanifest`, `icons/` | Instalación como app |
