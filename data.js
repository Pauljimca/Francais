// Contenido del curso. Cada módulo nuevo se agrega a la lista "modules".
window.CURSO = {
  podcast: [
    { num: 1, title: 'Episodio 1: Bonjour !', file: 'podcast/ep01-bonjour.mp3', minutes: 4.5,
      desc: 'Paul conoce a Claire después de un concierto: saludar, presentarte, tu trabajo y tu música.' },
    { num: 2, title: "Episodio 2: Bienvenue sur l'île", file: 'podcast/ep02-bienvenue.mp3', minutes: 4.3,
      desc: 'Claire le pide consejos a Paul para conocer la isla: qué visitar, cómo llegar a la playa y dónde bucear.' }
  ],
  modules: [
    {
      id: 'm1',
      phraseAudio: 'audio/m1-frases/',
      voices: ['amelie', 'paul'],
      grammar: "<h2>Módulo 1: lo esencial</h2>\n\n<h3>Tu o vous</h3>\n<p><b>Vous</b> = usted (y también ustedes). Úsalo con turistas, clientes y desconocidos.\n<b>Tu</b> = tú: con amigos, gente joven o quien te tutee primero.\nSi alguien te dice <i>« On peut se tutoyer ? »</i>, te propone pasar a <b>tu</b>.</p>\n\n<h3>Être (ser / estar)</h3>\n<table class=\"conj\">\n<tr><td>je suis</td><td>nous sommes</td></tr>\n<tr><td>tu es</td><td>vous êtes</td></tr>\n<tr><td>il / elle est</td><td>ils / elles sont</td></tr>\n</table>\n\n<h3>Avoir (tener)</h3>\n<table class=\"conj\">\n<tr><td>j'ai</td><td>nous avons</td></tr>\n<tr><td>tu as</td><td>vous avez</td></tr>\n<tr><td>il / elle a</td><td>ils / elles ont</td></tr>\n</table>\n\n<h3>Verbos en -er: parler (hablar)</h3>\n<table class=\"conj\">\n<tr><td>je parl<b>e</b></td><td>nous parl<b>ons</b></td></tr>\n<tr><td>tu parl<b>es</b></td><td>vous parl<b>ez</b></td></tr>\n<tr><td>il / elle parl<b>e</b></td><td>ils / elles parl<b>ent</b></td></tr>\n</table>\n<p><b>Ojo:</b> <i>parle, parles</i> y <i>parlent</i> suenan igual. Solo <i>nous</i> y <i>vous</i> cambian el sonido.\nLo mismo con <i>aimer, habiter, travailler, jouer, chanter</i>.</p>\n\n<h3>Tres reglas que ya viste</h3>\n<ul>\n<li>Profesiones sin artículo: <i>Je suis professeur</i>, no <i>un professeur</i>.</li>\n<li><i>jouer de</i> + instrumento (<i>de la guitare</i>); <i>jouer à</i> + juego o deporte.</li>\n<li>Delante de vocal, <i>je</i> se vuelve <i>j'</i>: <i>j'aime, j'habite, j'apprends</i>.</li>\n</ul>\n\n<h3>Falsos amigos</h3>\n<ul>\n<li><i>entendre</i> = oír · <i>comprendre</i> = entender</li>\n<li><i>les légumes</i> = las verduras · las legumbres = <i>les légumineuses</i></li>\n</ul>",
      num: 1,
      title: 'Bonjour !',
      subtitle: 'Saludar, presentarte, tu trabajo y tu música',
      anchor:
        "Bonjour ! Je m'appelle Paul. Je suis colombien et j'habite à Providencia, sur une île des Caraïbes. " +
        "Je suis professeur d'anglais et je suis musicien. Je joue de la guitare et je chante. " +
        "J'aime cuisiner. J'apprends le français.",
      dialogue: {
        title: 'Après le concert',
        audioDir: 'audio/m1-dialogo/',
        scene: 'Después de tocar en un restaurante de Providencia, Claire, una turista francesa, habla con Paul.',
        lines: [
          { who: 'Claire', fr: 'Bonsoir !', es: '¡Buenas noches!' },
          { who: 'Paul', fr: 'Bonsoir ! Bienvenue ! Vous aimez la musique ?', es: '¡Buenas noches! ¡Bienvenida! ¿Le gusta la música?' },
          { who: 'Claire', fr: "Oui, j'adore ! C'est très joli. Vous êtes le chanteur ?", es: '¡Sí, me encanta! Es muy bonita. ¿Usted es el cantante?' },
          { who: 'Paul', fr: "Oui. Je m'appelle Paul. Et vous, comment vous appelez-vous ?", es: 'Sí. Me llamo Paul. ¿Y usted, cómo se llama?' },
          { who: 'Claire', fr: "Je m'appelle Claire. Enchantée.", es: 'Me llamo Claire. Mucho gusto.' },
          { who: 'Paul', fr: "Enchanté. Vous venez d'où ?", es: 'Mucho gusto. ¿De dónde viene?' },
          { who: 'Claire', fr: "Je viens de France, de Lyon. Et vous, vous êtes d'ici ?", es: 'Vengo de Francia, de Lyon. ¿Y usted es de aquí?' },
          { who: 'Paul', fr: "Je suis colombien. J'habite ici, à Providencia.", es: 'Soy colombiano. Vivo aquí, en Providencia.' },
          { who: 'Claire', fr: 'Vous êtes musicien professionnel ?', es: '¿Es músico profesional?' },
          { who: 'Paul', fr: "Non, je suis professeur d'anglais. Je joue de la guitare et je chante le week-end.", es: 'No, soy profesor de inglés. Toco la guitarra y canto los fines de semana.' },
          { who: 'Claire', fr: 'Vous parlez très bien français !', es: '¡Habla muy bien francés!' },
          { who: 'Paul', fr: "Merci ! J'apprends le français.", es: '¡Gracias! Estoy aprendiendo francés.' },
          { who: 'Claire', fr: "Votre groupe s'appelle comment ?", es: '¿Cómo se llama su banda?' },
          { who: 'Paul', fr: "Mon groupe s'appelle Providence Beats.", es: 'Mi banda se llama Providence Beats.' },
          { who: 'Claire', fr: 'Super ! Je veux écouter vos chansons.', es: '¡Genial! Quiero escuchar sus canciones.' },
          { who: 'Paul', fr: 'Merci beaucoup ! Bonne soirée, Claire.', es: '¡Muchas gracias! Buena noche, Claire.' },
          { who: 'Claire', fr: 'Bonne soirée ! À bientôt !', es: '¡Buena noche! ¡Hasta pronto!' }
        ],
        questions: [
          { q: '¿De dónde es Claire?', options: ['De París', 'De Lyon', 'De Montreal'], answer: 1 },
          { q: '¿Qué le gusta a Claire?', options: ['La comida', 'La playa', 'La música'], answer: 2 },
          { q: '¿Cuál es el trabajo principal de Paul?', options: ['Músico profesional', 'Profesor de inglés', 'Cocinero'], answer: 1 },
          { q: '¿Cuándo canta Paul?', options: ['Todos los días', 'Los lunes', 'Los fines de semana'], answer: 2 },
          { q: '¿Qué quiere hacer Claire?', options: ['Escuchar las canciones de la banda', 'Aprender a tocar guitarra', 'Visitar Colombia'], answer: 0 },
          { q: '¿Qué se desean al final?', options: ['Buen viaje', 'Una buena noche', 'Un buen día'], answer: 1 }
        ]
      },
      week: [
        { day: 'Lunes', focus: 'Escuchar el diálogo', tasks: [
          { text: 'Escucha el diálogo 3 veces, sin texto.', go: 'dialogo' },
          { text: 'Responde las preguntas, todavía sin texto.', go: 'dialogo' },
          { text: 'Escúchalo con texto y traducción, y repite cada línea en voz alta.', go: 'dialogo' },
          { text: '5 minutos de Repaso.', go: 'repaso' }
        ] },
        { day: 'Martes', focus: 'Frases y gramática', tasks: [
          { text: 'Frases de los bloques A, B y C: escucha, repite, grábate y compara.', go: 'frases' },
          { text: 'Lee la gramática: tu o vous, être y avoir.', go: 'gramatica' },
          { text: 'Repaso del día.', go: 'repaso' }
        ] },
        { day: 'Miércoles', focus: 'Hablar', tasks: [
          { text: 'Frases de los bloques D, E y F: escucha, repite, grábate.', go: 'frases' },
          { text: 'Juego de roles con Claude en modo voz, 10 minutos. Copia la indicación y pégala en un chat nuevo.', copy: 'roleplay' },
          { text: 'Repaso del día.', go: 'repaso' }
        ] },
        { day: 'Jueves', focus: 'Comprender y escribir', tasks: [
          { text: 'Escucha el diálogo en lento y habla al mismo tiempo (sombra).', go: 'dialogo' },
          { text: 'Escribe 5 frases sobre ti y pide corrección a Claude.', copy: 'writing' },
          { text: 'Repaso del día.', go: 'repaso' }
        ] },
        { day: 'Viernes', focus: 'Medir', tasks: [
          { text: 'Graba el texto ancla en Mi voz.', go: 'voz' },
          { text: 'Responde otra vez las preguntas del diálogo.', go: 'dialogo' },
          { text: 'Check-in con Claude: copia el resumen de tu semana y pégalo en el chat del curso.', copy: 'checkin' }
        ] },
        { day: 'Fin de semana', focus: 'Opcional', tasks: [
          { text: 'Mientras cocinas, di en francés lo que puedas, aunque sean palabras sueltas.' },
          { text: 'Conversa con tu amigo en francés usando la guía, y anota los minutos y las palabras nuevas.', go: 'conversacion' },
          { text: 'Escucha música en francés.' }
        ] }
      ],
      conversation: {
        questions: [
          { fr: "Comment tu t'appelles ?", es: '¿Cómo te llamas?' },
          { fr: "Tu viens d'où ?", es: '¿De dónde vienes?' },
          { fr: 'Tu habites où ?', es: '¿Dónde vives?' },
          { fr: "Qu'est-ce que tu fais dans la vie ?", es: '¿A qué te dedicas?' },
          { fr: 'Tu parles quelles langues ?', es: '¿Qué idiomas hablas?' },
          { fr: "Tu aimes la musique ? Qu'est-ce que tu écoutes ?", es: '¿Te gusta la música? ¿Qué escuchas?' },
          { fr: 'Tu aimes cuisiner ?', es: '¿Te gusta cocinar?' }
        ],
        aboutMe: [
          { fr: "Je suis professeur d'anglais au SENA.", es: 'Soy profesor de inglés en el SENA.' },
          { fr: 'Je suis musicien : je joue de la guitare et je chante.', es: 'Soy músico: toco la guitarra y canto.' },
          { fr: "Mon groupe s'appelle Providence Beats.", es: 'Mi banda se llama Providence Beats.' },
          { fr: "J'habite à Providencia.", es: 'Vivo en Providencia.' },
          { fr: "J'aime cuisiner.", es: 'Me gusta cocinar.' },
          { fr: "J'apprends le français.", es: 'Estoy aprendiendo francés.' }
        ],
        rescue: [
          { fr: "Tu peux répéter plus lentement, s'il te plaît ?", es: '¿Puedes repetir más despacio, por favor?' },
          { fr: 'Je ne comprends pas.', es: 'No entiendo.' },
          { fr: 'Comment dit-on « playa » en français ?', es: '¿Cómo se dice "playa" en francés?' },
          { fr: "Qu'est-ce que ça veut dire ?", es: '¿Qué significa eso?' },
          { fr: "Tu peux l'écrire ?", es: '¿Puedes escribirlo?' },
          { fr: 'Attends, je cherche le mot.', es: 'Espera, busco la palabra.' }
        ]
      },
      prompts: {
        roleplay:
          'Juego de roles del Módulo 1 de mi curso de francés (nivel A1). Tú eres una turista francesa que llega al restaurante ' +
          'en Providencia donde toco con mi banda. Habla solo en francés, con frases cortas y despacio, y trátame de vous. ' +
          'Hazme preguntas sobre mí, mi trabajo y mi música, una a la vez. Si cometo un error, corrígelo brevemente en español ' +
          'al final de tu respuesta. Duración: unos 10 minutos.',
        writing:
          'Corrige estas 5 frases en francés (nivel A1, Módulo 1 de mi curso). Explícame cada error en español, en una línea, ' +
          'y dame la versión correcta:\n1. \n2. \n3. \n4. \n5. '
      },
      blocks: [
        {
          title: 'A. Saludar y despedirse',
          phrases: [
            { id: 'm1-01', fr: 'Bonjour !', es: 'Buenos días / Hola', note: 'Nasal en -on-' },
            { id: 'm1-02', fr: 'Bonsoir !', es: 'Buenas noches (al llegar)' },
            { id: 'm1-03', fr: 'Salut !', es: 'Hola (informal)', note: 'La t final no suena' },
            { id: 'm1-04', fr: 'Comment allez-vous ?', es: '¿Cómo está usted?', note: 'Enlace: comment‿allez',
              tu: { fr: 'Comment ça va ?', es: '¿Cómo te va?' } },
            { id: 'm1-05', fr: 'Ça va bien, merci. Et vous ?', es: 'Bien, gracias. ¿Y usted?',
              tu: { fr: 'Ça va bien, merci. Et toi ?', es: 'Bien, gracias. ¿Y tú?' } },
            { id: 'm1-06', fr: 'Au revoir, bonne journée !', es: 'Adiós, ¡que tenga buen día!' },
            { id: 'm1-07', fr: 'À bientôt ! À demain !', es: '¡Hasta pronto! ¡Hasta mañana!' }
          ]
        },
        {
          title: 'B. Presentarse',
          phrases: [
            { id: 'm1-08', fr: "Je m'appelle Paul.", es: 'Me llamo Paul.' },
            { id: 'm1-09', fr: 'Et vous, comment vous appelez-vous ?', es: '¿Y usted, cómo se llama?',
              tu: { fr: "Et toi, comment tu t'appelles ?", es: '¿Y tú, cómo te llamas?' } },
            { id: 'm1-10', fr: 'Enchanté.', es: 'Mucho gusto.' },
            { id: 'm1-11', fr: 'Je suis colombien. Je viens de Colombie.', es: 'Soy colombiano. Vengo de Colombia.', note: 'La u de suis no es ou' },
            { id: 'm1-12', fr: "J'habite à Providencia, sur une île des Caraïbes.", es: 'Vivo en Providencia, en una isla del Caribe.' },
            { id: 'm1-13', fr: "Vous venez d'où ?", es: '¿De dónde viene usted?',
              tu: { fr: "Tu viens d'où ?", es: '¿De dónde vienes?' } },
            { id: 'm1-14', fr: 'Vous êtes français ?', es: '¿Usted es francés?', note: 'Enlace: vous‿êtes',
              tu: { fr: 'Tu es français ?', es: '¿Eres francés?' } }
          ]
        },
        {
          title: 'C. Trabajo e idiomas',
          phrases: [
            { id: 'm1-15', fr: "Je suis professeur d'anglais.", es: 'Soy profesor de inglés.', note: 'Sin "un" antes de la profesión' },
            { id: 'm1-16', fr: 'Je travaille au SENA, un institut public de formation.', es: 'Trabajo en el SENA, una institución pública de formación.' },
            { id: 'm1-17', fr: "J'enseigne l'anglais en ligne.", es: 'Enseño inglés en línea.' },
            { id: 'm1-18', fr: 'Je travaille aussi pour une entreprise américaine.', es: 'También trabajo para una empresa estadounidense.' },
            { id: 'm1-19', fr: "Qu'est-ce que vous faites dans la vie ?", es: '¿A qué se dedica?',
              tu: { fr: "Qu'est-ce que tu fais dans la vie ?", es: '¿A qué te dedicas?' } },
            { id: 'm1-20', fr: 'Je parle espagnol, anglais et un peu français.', es: 'Hablo español, inglés y un poco de francés.' }
          ]
        },
        {
          title: 'D. Música y gustos',
          phrases: [
            { id: 'm1-21', fr: 'Je suis musicien.', es: 'Soy músico.' },
            { id: 'm1-22', fr: 'Je joue de la guitare et je chante.', es: 'Toco la guitarra y canto.', note: 'jouer de + instrumento' },
            { id: 'm1-23', fr: "J'écris mes chansons.", es: 'Escribo mis canciones.' },
            { id: 'm1-24', fr: "Mon groupe s'appelle Providence Beats.", es: 'Mi banda se llama Providence Beats.' },
            { id: 'm1-25', fr: 'Nous jouons dans un restaurant le week-end.', es: 'Tocamos en un restaurante los fines de semana.' },
            { id: 'm1-26', fr: "J'aime cuisiner et jouer de la guitare.", es: 'Me gusta cocinar y tocar la guitarra.' },
            { id: 'm1-27', fr: "J'adore le zouk et le kompa.", es: 'Me encantan el zouk y el kompa.' },
            { id: 'm1-28', fr: 'Vous aimez la musique ?', es: '¿Le gusta la música?', note: 'Enlace: vous‿aimez',
              tu: { fr: 'Tu aimes la musique ?', es: '¿Te gusta la música?' } }
          ]
        },
        {
          title: 'E. Sobrevivir en una conversación',
          phrases: [
            { id: 'm1-29', fr: 'Pardon, je ne comprends pas.', es: 'Perdón, no entiendo.', note: 'Nasal en comprends' },
            { id: 'm1-30', fr: "Vous pouvez répéter plus lentement, s'il vous plaît ?", es: '¿Puede repetir más despacio, por favor?',
              tu: { fr: "Tu peux répéter plus lentement, s'il te plaît ?", es: '¿Puedes repetir más despacio, por favor?' } },
            { id: 'm1-31', fr: 'Comment dit-on « playa » en français ?', es: '¿Cómo se dice "playa" en francés?' },
            { id: 'm1-32', fr: "J'apprends le français.", es: 'Estoy aprendiendo francés.' },
            { id: 'm1-33', fr: 'Merci beaucoup ! De rien.', es: '¡Muchas gracias! De nada.' }
          ]
        },
        {
          title: 'F. Falsos amigos de tu diagnóstico',
          phrases: [
            { id: 'm1-34', fr: "J'entends la musique, mais je ne comprends pas les paroles.", es: 'Oigo la música, pero no entiendo la letra.', note: 'entendre = oír; comprendre = entender' },
            { id: 'm1-35', fr: 'Je mange des légumes.', es: 'Como verduras.', note: 'légumes = verduras, no legumbres' },
            { id: 'm1-36', fr: "J'ai une valise.", es: 'Tengo una maleta.' }
          ]
        }
      ]
    },
    {
      "id": "m2",
      "num": 2,
      "title": "Bienvenue sur l'île",
      "subtitle": "Recibir turistas, recomendar lugares y dar direcciones",
      "phraseAudio": "audio/m2-frases/",
      "voices": [
        "amelie"
      ],
      "grammar": "<h2>Módulo 2: lo esencial</h2>\n<h3>Il y a = hay</h3>\n<p><i>Il y a une plage. Il y a des plages magnifiques.</i> Sirve para singular y plural.</p>\n<p>En negativo, el artículo se vuelve <b>de</b>: <i>Il n'y a <b>pas de</b> bus. Il n'y a <b>pas d'</b>hôtel.</i></p>\n<h3>Où est… ? / Où sont… ?</h3>\n<p><i>Où <b>est</b> la plage ?</i> (una cosa) · <i>Où <b>sont</b> les toilettes ?</i> (varias)</p>\n<h3>¿Dónde está? Preposiciones de lugar</h3>\n<table class=\"conj\">\n<tr><td>près de</td><td>cerca de</td></tr>\n<tr><td>loin de</td><td>lejos de</td></tr>\n<tr><td>à côté de</td><td>al lado de</td></tr>\n<tr><td>en face de</td><td>frente a</td></tr>\n<tr><td>entre… et…</td><td>entre… y…</td></tr>\n</table>\n<p><b>Ojo con las contracciones:</b> de + le = <b>du</b> (<i>à côté du restaurant</i>), de + les = <b>des</b>, à + le = <b>au</b> (<i>au restaurant</i>), à + les = <b>aux</b>. Con <i>la</i> y <i>l'</i> no cambia: <i>à côté de la plage</i>, <i>à l'école</i>.</p>\n<h3>Dar direcciones: el imperativo</h3>\n<table class=\"conj\">\n<tr><td><b>vous</b></td><td><b>tu</b></td></tr>\n<tr><td>Prenez la route principale.</td><td>Prends la route principale.</td></tr>\n<tr><td>Tournez à gauche.</td><td>Tourne à gauche.</td></tr>\n<tr><td>Allez tout droit.</td><td>Va tout droit.</td></tr>\n</table>\n<p>Es el verbo sin el sujeto. Con <i>tu</i>, los verbos en <i>-er</i> pierden la <i>s</i>: <i>tu tournes → Tourne !</i>, <i>tu vas → Va !</i> (pero <i>Vas-y !</i>).</p>\n<h3>Distancias</h3>\n<p><i>C'est à dix minutes <b>à pied</b></i> (a pie) · <i>en moto-taxi</i> · <i>en voiture</i> (en carro).</p>\n<h3>Trampas</h3>\n<ul>\n<li><i>à droite</i> = a la derecha · <i>tout droit</i> = derecho.</li>\n<li><i>la carte</i> = el mapa (y la carta del restaurante). Una carta que se envía es <i>une lettre</i>.</li>\n<li><i>Je vous recommande…</i>: el pronombre va antes del verbo (le recomiendo…). Con amigos: <i>Je te recommande…</i></li>\n</ul>",
      "anchor": "Bienvenue à Providencia ! L'île est petite et très calme. Il y a des plages magnifiques et la mer a sept couleurs. Je vous recommande Manzanillo. Pour y aller, prenez la route principale, puis tournez à gauche. Ce n'est pas loin.",
      "dialogue": {
        "title": "Les conseils de Paul",
        "audioDir": "audio/m2-dialogo/",
        "scene": "Al día siguiente, Claire quiere conocer la isla y le pide consejos a Paul.",
        "lines": [
          {
            "who": "Claire",
            "fr": "Bonjour Paul ! Vous avez une minute ?",
            "es": "¡Hola, Paul! ¿Tiene un minuto?"
          },
          {
            "who": "Paul",
            "fr": "Bien sûr ! Comment ça va ?",
            "es": "¡Claro! ¿Cómo está?"
          },
          {
            "who": "Claire",
            "fr": "Très bien, merci. Je voudrais visiter l'île. Qu'est-ce qu'il y a à voir ?",
            "es": "Muy bien, gracias. Quisiera visitar la isla. ¿Qué hay para ver?"
          },
          {
            "who": "Paul",
            "fr": "Il y a beaucoup de choses ! Il y a des plages magnifiques et le pont des Amoureux.",
            "es": "¡Hay muchas cosas! Hay playas magníficas y el puente de los Enamorados."
          },
          {
            "who": "Claire",
            "fr": "Le pont des Amoureux ? Où est-ce ?",
            "es": "¿El puente de los Enamorados? ¿Dónde queda?"
          },
          {
            "who": "Paul",
            "fr": "Il est entre Providencia et Santa Catalina. Ce n'est pas loin d'ici.",
            "es": "Está entre Providencia y Santa Catalina. No está lejos de aquí."
          },
          {
            "who": "Claire",
            "fr": "Et pour aller à la plage, c'est loin ?",
            "es": "¿Y para ir a la playa, es lejos?"
          },
          {
            "who": "Paul",
            "fr": "Non. Prenez la route principale, puis tournez à gauche.",
            "es": "No. Tome la carretera principal y luego gire a la izquierda."
          },
          {
            "who": "Claire",
            "fr": "Il y a un bus ?",
            "es": "¿Hay un bus?"
          },
          {
            "who": "Paul",
            "fr": "Oui, mais c'est plus facile en moto-taxi.",
            "es": "Sí, pero es más fácil en mototaxi."
          },
          {
            "who": "Claire",
            "fr": "Et pour faire de la plongée ?",
            "es": "¿Y para bucear?"
          },
          {
            "who": "Paul",
            "fr": "Il y a un centre de plongée à côté de la plage. La mer est magnifique.",
            "es": "Hay un centro de buceo al lado de la playa. El mar es magnífico."
          },
          {
            "who": "Claire",
            "fr": "Quelle plage vous recommandez ?",
            "es": "¿Qué playa me recomienda?"
          },
          {
            "who": "Paul",
            "fr": "Je vous recommande Manzanillo. Il y a un petit bar avec de la musique reggae.",
            "es": "Le recomiendo Manzanillo. Hay un barcito con música reggae."
          },
          {
            "who": "Claire",
            "fr": "Merci beaucoup pour les conseils !",
            "es": "¡Muchas gracias por los consejos!"
          },
          {
            "who": "Paul",
            "fr": "Avec plaisir. Bonne journée !",
            "es": "Con gusto. ¡Que tenga un buen día!"
          }
        ],
        "questions": [
          {
            "q": "¿Qué quiere hacer Claire?",
            "options": [
              "Comer en un restaurante",
              "Visitar la isla",
              "Tomar un bus"
            ],
            "answer": 1
          },
          {
            "q": "¿Dónde está el puente de los Enamorados?",
            "options": [
              "Entre Providencia y Santa Catalina",
              "Al lado de la playa",
              "En Manzanillo"
            ],
            "answer": 0
          },
          {
            "q": "¿Cómo se llega a la playa?",
            "options": [
              "Girando a la derecha",
              "Por la carretera principal y luego a la izquierda",
              "Siguiendo derecho"
            ],
            "answer": 1
          },
          {
            "q": "Según Paul, ¿cuál es la forma más fácil de moverse?",
            "options": [
              "En bus",
              "A pie",
              "En mototaxi"
            ],
            "answer": 2
          },
          {
            "q": "¿Qué hay al lado de la playa?",
            "options": [
              "Un centro de buceo",
              "Un hotel grande",
              "Una escuela"
            ],
            "answer": 0
          },
          {
            "q": "¿Qué playa recomienda Paul?",
            "options": [
              "Santa Catalina",
              "Manzanillo",
              "Ninguna en especial"
            ],
            "answer": 1
          }
        ]
      },
      "week": [
        {
          "day": "Lunes",
          "focus": "Escuchar el diálogo",
          "tasks": [
            {
              "text": "Escucha el diálogo nuevo 3 veces, sin texto.",
              "go": "dialogo"
            },
            {
              "text": "Responde las preguntas, todavía sin texto.",
              "go": "dialogo"
            },
            {
              "text": "Escúchalo con texto y traducción, y repite cada línea en voz alta.",
              "go": "dialogo"
            },
            {
              "text": "5 minutos de Repaso (incluye las frases del Módulo 1).",
              "go": "repaso"
            }
          ]
        },
        {
          "day": "Martes",
          "focus": "Frases y gramática",
          "tasks": [
            {
              "text": "Frases de los bloques A, B y C: escucha, repite, grábate y compara.",
              "go": "frases"
            },
            {
              "text": "Lee la gramática: il y a, où est / où sont y las preposiciones de lugar.",
              "go": "gramatica"
            },
            {
              "text": "Repaso del día.",
              "go": "repaso"
            }
          ]
        },
        {
          "day": "Miércoles",
          "focus": "Hablar",
          "tasks": [
            {
              "text": "Frases de los bloques D, E y F: escucha, repite, grábate.",
              "go": "frases"
            },
            {
              "text": "Lee la gramática: dar direcciones con el imperativo (vous y tu).",
              "go": "gramatica"
            },
            {
              "text": "Juego de roles con Claude en modo voz, 10 minutos. Copia la indicación y pégala en un chat nuevo.",
              "copy": "roleplay"
            }
          ]
        },
        {
          "day": "Jueves",
          "focus": "Comprender y escribir",
          "tasks": [
            {
              "text": "Escucha el diálogo en lento y habla al mismo tiempo (sombra).",
              "go": "dialogo"
            },
            {
              "text": "Escribe 5 frases recomendando lugares de la isla y pide corrección a Claude.",
              "copy": "writing"
            },
            {
              "text": "Repaso del día.",
              "go": "repaso"
            }
          ]
        },
        {
          "day": "Viernes",
          "focus": "Medir",
          "tasks": [
            {
              "text": "Graba el texto ancla del Módulo 2 en Mi voz.",
              "go": "voz"
            },
            {
              "text": "Responde otra vez las preguntas del diálogo.",
              "go": "dialogo"
            },
            {
              "text": "Check-in con Claude: copia el resumen de tu semana y pégalo en el chat del curso.",
              "copy": "checkin"
            }
          ]
        },
        {
          "day": "Fin de semana",
          "focus": "Opcional",
          "tasks": [
            {
              "text": "Conversa con Cedric usando la guía: pregúntale por sus lugares favoritos de la isla. Anota los minutos y las palabras nuevas.",
              "go": "conversacion"
            },
            {
              "text": "Escucha el episodio 2 del podcast mientras caminas o entrenas.",
              "go": "podcast"
            },
            {
              "text": "Cuando salgas, nombra en francés lo que ves: la plage, la route, l'église, la banque…"
            }
          ]
        }
      ],
      "conversation": {
        "questions": [
          {
            "fr": "Tu habites où sur l'île ?",
            "es": "¿Dónde vives en la isla?"
          },
          {
            "fr": "Tu viens souvent à Providencia ?",
            "es": "¿Vienes seguido a Providencia?"
          },
          {
            "fr": "Quelle est ta plage préférée ?",
            "es": "¿Cuál es tu playa favorita?"
          },
          {
            "fr": "Qu'est-ce que tu recommandes aux touristes ?",
            "es": "¿Qué les recomiendas a los turistas?"
          },
          {
            "fr": "Il y a des choses que tu n'aimes pas ici ?",
            "es": "¿Hay cosas que no te gustan aquí?"
          },
          {
            "fr": "Comment on dit « mototaxi » en France ?",
            "es": "¿Cómo se dice \"mototaxi\" en Francia?"
          }
        ],
        "aboutMe": [
          {
            "fr": "Je te recommande Manzanillo.",
            "es": "Te recomiendo Manzanillo."
          },
          {
            "fr": "Le coucher de soleil est magnifique ici.",
            "es": "El atardecer es magnífico aquí."
          },
          {
            "fr": "Il y a un pont entre Providencia et Santa Catalina.",
            "es": "Hay un puente entre Providencia y Santa Catalina."
          },
          {
            "fr": "C'est à dix minutes à pied.",
            "es": "Está a diez minutos a pie."
          },
          {
            "fr": "Le restaurant où je joue est près de la plage.",
            "es": "El restaurante donde toco está cerca de la playa."
          }
        ],
        "rescue": [
          {
            "fr": "Tu peux répéter plus lentement, s'il te plaît ?",
            "es": "¿Puedes repetir más despacio, por favor?"
          },
          {
            "fr": "Comment dit-on « derecha » en français ?",
            "es": "¿Cómo se dice \"derecha\" en francés?"
          },
          {
            "fr": "Qu'est-ce que ça veut dire ?",
            "es": "¿Qué significa eso?"
          },
          {
            "fr": "Tu peux me montrer sur la carte ?",
            "es": "¿Me puedes mostrar en el mapa?"
          },
          {
            "fr": "Attends, je cherche le mot.",
            "es": "Espera, busco la palabra."
          }
        ]
      },
      "prompts": {
        "roleplay": "Juego de roles del Módulo 2 de mi curso de francés (nivel A1). Tú eres un turista francés que acaba de llegar a Providencia y me pide consejos: qué visitar, cómo llegar a la playa, dónde bucear, dónde comer. Habla solo en francés, con frases cortas y despacio, y trátame de vous. Yo te recomiendo lugares y te doy direcciones (il y a, près de, à côté de, tournez à gauche, allez tout droit…). Haz una pregunta a la vez. Si cometo un error, corrígelo brevemente en español al final de tu respuesta. Duración: unos 10 minutos.",
        "writing": "Corrige estas 5 frases en francés (nivel A1, Módulo 2 de mi curso: recomendar lugares y dar direcciones). Explícame cada error en español, en una línea, y dame la versión correcta:\n1. \n2. \n3. \n4. \n5. "
      },
      "blocks": [
        {
          "title": "A. Recibir",
          "phrases": [
            {
              "id": "m2-01",
              "fr": "Bienvenue à Providencia !",
              "es": "¡Bienvenido a Providencia!"
            },
            {
              "id": "m2-02",
              "fr": "C'est votre première fois sur l'île ?",
              "es": "¿Es su primera vez en la isla?",
              "tu": {
                "fr": "C'est ta première fois sur l'île ?",
                "es": "¿Es tu primera vez en la isla?"
              }
            },
            {
              "id": "m2-03",
              "fr": "Vous restez combien de jours ?",
              "es": "¿Cuántos días se queda?",
              "tu": {
                "fr": "Tu restes combien de jours ?",
                "es": "¿Cuántos días te quedas?"
              }
            },
            {
              "id": "m2-04",
              "fr": "Vous avez besoin d'aide ?",
              "es": "¿Necesita ayuda?",
              "tu": {
                "fr": "Tu as besoin d'aide ?",
                "es": "¿Necesitas ayuda?"
              }
            }
          ]
        },
        {
          "title": "B. Qué hay en la isla",
          "phrases": [
            {
              "id": "m2-05",
              "fr": "Qu'est-ce qu'il y a à voir ?",
              "es": "¿Qué hay para ver?"
            },
            {
              "id": "m2-06",
              "fr": "Il y a des plages magnifiques.",
              "es": "Hay playas magníficas.",
              "note": "il y a = hay"
            },
            {
              "id": "m2-07",
              "fr": "Il y a un pont entre Providencia et Santa Catalina.",
              "es": "Hay un puente entre Providencia y Santa Catalina."
            },
            {
              "id": "m2-08",
              "fr": "Il n'y a pas de grands hôtels ici.",
              "es": "Aquí no hay grandes hoteles.",
              "note": "Negación: il n'y a pas de"
            },
            {
              "id": "m2-09",
              "fr": "L'île est petite et très calme.",
              "es": "La isla es pequeña y muy tranquila."
            },
            {
              "id": "m2-10",
              "fr": "La mer a sept couleurs.",
              "es": "El mar tiene siete colores."
            }
          ]
        },
        {
          "title": "C. Recomendar",
          "phrases": [
            {
              "id": "m2-11",
              "fr": "Je vous recommande Manzanillo.",
              "es": "Le recomiendo Manzanillo.",
              "tu": {
                "fr": "Je te recommande Manzanillo.",
                "es": "Te recomiendo Manzanillo."
              }
            },
            {
              "id": "m2-12",
              "fr": "Vous devez goûter le crabe.",
              "es": "Tiene que probar el cangrejo.",
              "tu": {
                "fr": "Tu dois goûter le crabe.",
                "es": "Tienes que probar el cangrejo."
              }
            },
            {
              "id": "m2-13",
              "fr": "C'est le meilleur endroit pour plonger.",
              "es": "Es el mejor lugar para bucear."
            },
            {
              "id": "m2-14",
              "fr": "Le coucher de soleil est magnifique ici.",
              "es": "El atardecer es magnífico aquí."
            },
            {
              "id": "m2-15",
              "fr": "Allez-y le matin, il y a moins de monde.",
              "es": "Vaya en la mañana, hay menos gente.",
              "note": "y = allá",
              "tu": {
                "fr": "Vas-y le matin, il y a moins de monde.",
                "es": "Ve en la mañana, hay menos gente."
              }
            }
          ]
        },
        {
          "title": "D. ¿Dónde está?",
          "phrases": [
            {
              "id": "m2-16",
              "fr": "Où est la plage ?",
              "es": "¿Dónde está la playa?"
            },
            {
              "id": "m2-17",
              "fr": "Où sont les toilettes ?",
              "es": "¿Dónde están los baños?"
            },
            {
              "id": "m2-18",
              "fr": "C'est près d'ici.",
              "es": "Es cerca de aquí."
            },
            {
              "id": "m2-19",
              "fr": "C'est loin d'ici.",
              "es": "Es lejos de aquí."
            },
            {
              "id": "m2-20",
              "fr": "C'est à côté du restaurant.",
              "es": "Está al lado del restaurante.",
              "note": "de + le = du"
            },
            {
              "id": "m2-21",
              "fr": "C'est en face de la banque.",
              "es": "Está frente al banco."
            },
            {
              "id": "m2-22",
              "fr": "C'est entre l'église et l'école.",
              "es": "Está entre la iglesia y la escuela."
            }
          ]
        },
        {
          "title": "E. Dar direcciones",
          "phrases": [
            {
              "id": "m2-23",
              "fr": "Allez tout droit.",
              "es": "Siga derecho.",
              "tu": {
                "fr": "Va tout droit.",
                "es": "Sigue derecho."
              }
            },
            {
              "id": "m2-24",
              "fr": "Tournez à gauche.",
              "es": "Gire a la izquierda.",
              "tu": {
                "fr": "Tourne à gauche.",
                "es": "Gira a la izquierda."
              }
            },
            {
              "id": "m2-25",
              "fr": "Tournez à droite.",
              "es": "Gire a la derecha.",
              "note": "droite (derecha) ≠ tout droit (derecho)",
              "tu": {
                "fr": "Tourne à droite.",
                "es": "Gira a la derecha."
              }
            },
            {
              "id": "m2-26",
              "fr": "Prenez la route principale.",
              "es": "Tome la carretera principal."
            },
            {
              "id": "m2-27",
              "fr": "C'est à dix minutes à pied.",
              "es": "Está a diez minutos a pie."
            },
            {
              "id": "m2-28",
              "fr": "C'est plus facile en moto-taxi.",
              "es": "Es más fácil en mototaxi."
            }
          ]
        },
        {
          "title": "F. Preguntas útiles",
          "phrases": [
            {
              "id": "m2-29",
              "fr": "Le bus passe à quelle heure ?",
              "es": "¿A qué hora pasa el bus?"
            },
            {
              "id": "m2-30",
              "fr": "Combien ça coûte ?",
              "es": "¿Cuánto cuesta?"
            },
            {
              "id": "m2-31",
              "fr": "C'est ouvert le dimanche ?",
              "es": "¿Está abierto el domingo?"
            },
            {
              "id": "m2-32",
              "fr": "Je peux vous montrer sur la carte.",
              "es": "Le puedo mostrar en el mapa.",
              "tu": {
                "fr": "Je peux te montrer sur la carte.",
                "es": "Te puedo mostrar en el mapa."
              }
            }
          ]
        }
      ]
    }
  ]
};

// ---------- Bases: fundamentos, aparte de los módulos ----------
// Plantilla para cualquier idioma: las mismas cinco partes y los mismos ejercicios.
// Cada parte: id, num, title, subtitle, sections y phrases (para el Repaso, ids "b-…").
// Cada sección: title, html (explicación corta, opcional), grid (fichas compactas, opcional),
// items: { k (etiqueta: letra, número…), fr, es, say (lo que se lee si no es fr) }
// o, en errores, { wrong, right, es, say }.
// Todo suena con la voz del dispositivo (no hay grabaciones).
window.CURSO.bases = {
  lang: 'fr-FR',
  title: 'Bases',
  intro: 'Los fundamentos: letras, números, fechas y pronunciación. Todo suena con una voz francesa de mujer del dispositivo (la de Claire en Ajustes), normal y lenta.',

  parts: [
    {
      id: 'alfabeto', num: 1,
      title: 'Alfabeto y deletreo',
      subtitle: 'Las letras, los acentos y cómo deletrear un nombre o un correo',
      sections: [
        {
          title: 'Las letras',
          html: '<p>Toca una letra para oírla. <b>Ojo:</b> la <b>E</b> suena «eu» y la <b>I</b> suena «i»; la <b>G</b> suena «yé» y la <b>J</b> suena «yi» (con la <i>y</i> argentina, la de «yo»). Son las que más se confunden al deletrear.</p>',
          grid: true,
          items: [
            { k: 'A', fr: 'a' }, { k: 'B', fr: 'bé' }, { k: 'C', fr: 'cé' }, { k: 'D', fr: 'dé' },
            { k: 'E', fr: 'eu' }, { k: 'F', fr: 'effe' }, { k: 'G', fr: 'gé' }, { k: 'H', fr: 'ache' },
            { k: 'I', fr: 'i' }, { k: 'J', fr: 'ji' }, { k: 'K', fr: 'ka' }, { k: 'L', fr: 'elle' },
            { k: 'M', fr: 'emme' }, { k: 'N', fr: 'enne' }, { k: 'O', fr: 'o' }, { k: 'P', fr: 'pé' },
            { k: 'Q', fr: 'ku' }, { k: 'R', fr: 'erre' }, { k: 'S', fr: 'esse' }, { k: 'T', fr: 'té' },
            { k: 'U', fr: 'u' }, { k: 'V', fr: 'vé' }, { k: 'W', fr: 'double vé' }, { k: 'X', fr: 'ixe' },
            { k: 'Y', fr: 'i grec' }, { k: 'Z', fr: 'zède' }
          ]
        },
        {
          title: 'Las que engañan',
          items: [
            { k: 'E', fr: 'eu', es: 'Como una «e» con los labios redondos, igual que en «le». No es «e» española.' },
            { k: 'G', fr: 'gé', es: 'Suena «yé». G es «gé», J es «ji»: al revés de lo que parece.' },
            { k: 'J', fr: 'ji', es: 'Suena «yi».' },
            { k: 'R', fr: 'erre', es: 'La r va en la garganta, nunca vibrando con la lengua.' },
            { k: 'U', fr: 'u', es: 'Di «i» con los labios en posición de «u».' },
            { k: 'V', fr: 'vé', es: 'Con los dientes de arriba sobre el labio de abajo. No es «be».' },
            { k: 'W', fr: 'double vé', es: '«Doble v»: una v doble, no una u doble como en inglés.' },
            { k: 'Y', fr: 'i grec', es: '«I griega», igual que en español.' }
          ]
        },
        {
          title: 'Los acentos',
          html: '<p>Al deletrear, el acento se dice después de la letra: <i>e accent aigu</i>.</p>',
          items: [
            { k: 'é', fr: 'e accent aigu', es: 'E cerrada, como la e española: café, été.', say: 'e accent aigu. café. été.' },
            { k: 'è', fr: 'e accent grave', es: 'E abierta: mère, très.', say: 'e accent grave. mère. très.' },
            { k: 'ê', fr: 'e accent circonflexe', es: 'E abierta, igual que è: fête, forêt.', say: 'e accent circonflexe. fête. forêt.' },
            { k: 'à', fr: 'a accent grave', es: 'No cambia el sonido. Distingue «à» (a, en) de «a» (tiene).', say: 'a accent grave. voilà.' },
            { k: 'ç', fr: 'c cédille', es: 'Suena «s» delante de a, o, u: français, ça, garçon.', say: 'c cédille. français. garçon.' },
            { k: 'ë', fr: 'e tréma', es: 'La vocal se pronuncia aparte: Noël («no-el»).', say: 'e tréma. Noël.' },
            { k: 'ô', fr: 'o accent circonflexe', es: 'O cerrada: hôtel, côte.', say: 'o accent circonflexe. hôtel.' },
            { k: 'î û', fr: 'i accent circonflexe, u accent circonflexe', es: 'No cambian el sonido: île, sûr.', say: 'i accent circonflexe. île.' }
          ]
        },
        {
          title: 'Deletrear un nombre o un correo',
          html: '<p>Para letras repetidas se dice <i>deux</i>: «Isabelle», <i>deux L</i>. Para las mayúsculas, <i>majuscule</i>.</p>',
          items: [
            { k: '@', fr: 'arobase', es: 'arroba' },
            { k: '.', fr: 'point', es: 'punto' },
            { k: '-', fr: 'tiret', es: 'guion' },
            { k: '_', fr: 'tiret bas', es: 'guion bajo' },
            { k: 'LL', fr: 'deux L', es: 'doble L', say: 'deux elle' },
            { k: 'P', fr: 'P majuscule', es: 'P mayúscula', say: 'pé majuscule' },
            { k: 'Paul', fr: 'P, A, U, L', es: 'Así se deletrea Paul.', say: 'pé, a, u, elle.' },
            { k: '✉', fr: 'paul point musique arobase exemple point fr', es: 'paul.musique@exemple.fr' }
          ]
        }
      ],
      phrases: [
        { id: 'b-alf-01', fr: 'Comment ça s\'écrit ?', es: '¿Cómo se escribe?' },
        { id: 'b-alf-02', fr: 'Vous pouvez épeler, s\'il vous plaît ?', es: '¿Puede deletrearlo, por favor?' },
        { id: 'b-alf-03', fr: 'Ça s\'écrit P, A, U, L.', es: 'Se escribe P, A, U, L.', say: 'Ça s\'écrit pé, a, u, elle.' },
        { id: 'b-alf-04', fr: 'C\'est à quel nom ?', es: '¿A nombre de quién? (reserva)' },
        { id: 'b-alf-05', fr: 'Avec deux L.', es: 'Con doble L.', say: 'Avec deux elle.' },
        { id: 'b-alf-06', fr: 'Quelle est votre adresse e-mail ?', es: '¿Cuál es su correo electrónico?' }
      ]
    },

    {
      id: 'numeros', num: 2,
      title: 'Números, precios y hora',
      subtitle: '0 a 100, hasta 1000, precios en euros y pesos, la hora y el teléfono',
      sections: [
        {
          title: '0 a 20',
          grid: true,
          items: [
            { k: '0', fr: 'zéro' }, { k: '1', fr: 'un' }, { k: '2', fr: 'deux' }, { k: '3', fr: 'trois' },
            { k: '4', fr: 'quatre' }, { k: '5', fr: 'cinq' }, { k: '6', fr: 'six' }, { k: '7', fr: 'sept' },
            { k: '8', fr: 'huit' }, { k: '9', fr: 'neuf' }, { k: '10', fr: 'dix' }, { k: '11', fr: 'onze' },
            { k: '12', fr: 'douze' }, { k: '13', fr: 'treize' }, { k: '14', fr: 'quatorze' }, { k: '15', fr: 'quinze' },
            { k: '16', fr: 'seize' }, { k: '17', fr: 'dix-sept' }, { k: '18', fr: 'dix-huit' }, { k: '19', fr: 'dix-neuf' },
            { k: '20', fr: 'vingt' }
          ]
        },
        {
          title: '20 a 69',
          html: '<p>Igual que en español: decena + unidad con guion (<i>vingt-deux</i>). Con el 1 se dice <b>et</b>: <i>vingt et un, trente et un</i>… hasta <i>soixante et un</i>.</p>',
          grid: true,
          items: [
            { k: '20', fr: 'vingt' }, { k: '21', fr: 'vingt et un' }, { k: '22', fr: 'vingt-deux' },
            { k: '30', fr: 'trente' }, { k: '31', fr: 'trente et un' }, { k: '40', fr: 'quarante' },
            { k: '50', fr: 'cinquante' }, { k: '60', fr: 'soixante' }, { k: '69', fr: 'soixante-neuf' }
          ]
        },
        {
          title: '70, 80 y 90: la lógica',
          html: '<p>En Francia no hay palabra para 70, 80 ni 90: se suma y se multiplica.</p><ul><li><b>70</b> = 60 + 10: <i>soixante-dix</i>. Sigue contando: 71 = 60 + 11 (<i>soixante et onze</i>), 72 = 60 + 12…</li><li><b>80</b> = 4 × 20: <i>quatre-vingts</i>, con <b>s</b>. Si le sigue otro número, pierde la s: <i>quatre-vingt-un</i>.</li><li><b>90</b> = 4 × 20 + 10: <i>quatre-vingt-dix</i>. 91 = <i>quatre-vingt-onze</i>.</li></ul><p>En Bélgica y Suiza dicen <i>septante</i> y <i>nonante</i>, pero en Francia no.</p>',
          items: [
            { k: '70', fr: 'soixante-dix', es: '60 + 10' },
            { k: '71', fr: 'soixante et onze', es: '60 + 11' },
            { k: '75', fr: 'soixante-quinze', es: '60 + 15' },
            { k: '79', fr: 'soixante-dix-neuf', es: '60 + 19' },
            { k: '80', fr: 'quatre-vingts', es: '4 × 20, con s' },
            { k: '81', fr: 'quatre-vingt-un', es: '4 × 20 + 1, sin s y sin et' },
            { k: '88', fr: 'quatre-vingt-huit', es: '4 × 20 + 8' },
            { k: '90', fr: 'quatre-vingt-dix', es: '4 × 20 + 10' },
            { k: '91', fr: 'quatre-vingt-onze', es: '4 × 20 + 11' },
            { k: '99', fr: 'quatre-vingt-dix-neuf', es: '4 × 20 + 19' }
          ]
        },
        {
          title: '100 a 1000',
          html: '<p><i>cent</i> = cien (sin <i>un</i> delante). <i>Deux cents</i> lleva <b>s</b>, pero la pierde si le sigue otro número: <i>deux cent trois</i>. <i>Mille</i> nunca lleva s: <i>deux mille</i>.</p>',
          items: [
            { k: '100', fr: 'cent' },
            { k: '101', fr: 'cent un' },
            { k: '150', fr: 'cent cinquante' },
            { k: '200', fr: 'deux cents', es: 'con s' },
            { k: '250', fr: 'deux cent cinquante', es: 'sin s' },
            { k: '580', fr: 'cinq cent quatre-vingts' },
            { k: '999', fr: 'neuf cent quatre-vingt-dix-neuf' },
            { k: '1000', fr: 'mille' },
            { k: '2026', fr: 'deux mille vingt-six' }
          ]
        },
        {
          title: 'Precios',
          html: '<p>Los decimales van con coma y se leen sin «con»: 2,50 € = <i>deux euros cinquante</i>. Para los pesos, <i>mille</i> sin s: <i>cinquante mille pesos</i>.</p>',
          items: [
            { k: '20 €', fr: 'vingt euros' },
            { k: '2,50 €', fr: 'deux euros cinquante' },
            { k: '15,90 €', fr: 'quinze euros quatre-vingt-dix' },
            { k: '5 000', fr: 'cinq mille pesos' },
            { k: '50 000', fr: 'cinquante mille pesos' },
            { k: '120 000', fr: 'cent vingt mille pesos' },
            { k: '?', fr: 'Ça coûte combien ?', es: '¿Cuánto cuesta?' },
            { k: '=', fr: 'Ça fait trente euros.', es: 'Son treinta euros (al pagar).' }
          ]
        },
        {
          title: 'La hora',
          html: '<p>Siempre <i>il est</i> (nunca <i>ils sont</i>) y siempre <i>heure(s)</i>: <i>il est une heure, il est deux heures</i>. Para horarios (buses, vuelos, tiendas) se usa mucho el reloj de 24 horas.</p>',
          items: [
            { k: '?', fr: 'Quelle heure est-il ?', es: '¿Qué hora es?' },
            { k: '1:00', fr: 'Il est une heure.' },
            { k: '8:00', fr: 'Il est huit heures.' },
            { k: '8:15', fr: 'Il est huit heures et quart.' },
            { k: '8:30', fr: 'Il est huit heures et demie.' },
            { k: '8:45', fr: 'Il est neuf heures moins le quart.', es: 'Las nueve menos cuarto' },
            { k: '12:00', fr: 'Il est midi.', es: 'Mediodía' },
            { k: '0:00', fr: 'Il est minuit.', es: 'Medianoche' },
            { k: '18:30', fr: 'Il est dix-huit heures trente.', es: 'Horario oficial' },
            { k: '?', fr: 'À quelle heure ?', es: '¿A qué hora?' },
            { k: '7:00', fr: 'À sept heures.', es: 'A las siete.' }
          ]
        },
        {
          title: 'Números de teléfono',
          html: '<p>En Francia se dicen <b>de dos en dos</b>: 06 12 34 56 78. El 0 inicial se dice <i>zéro</i>.</p>',
          items: [
            { k: '06 12 34 56 78', fr: 'zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit' },
            { k: '01 45 80 91 07', fr: 'zéro un, quarante-cinq, quatre-vingts, quatre-vingt-onze, zéro sept' },
            { k: '+57', fr: 'plus cinquante-sept', es: 'El código de Colombia' },
            { k: '?', fr: 'Quel est votre numéro de téléphone ?', es: '¿Cuál es su número de teléfono?' }
          ]
        }
      ],
      phrases: [
        { id: 'b-num-01', fr: 'Ça coûte vingt euros.', es: 'Cuesta veinte euros.' },
        { id: 'b-num-02', fr: 'Ça coûte combien ?', es: '¿Cuánto cuesta?' },
        { id: 'b-num-03', fr: 'Ça fait cinquante mille pesos.', es: 'Son cincuenta mil pesos.' },
        { id: 'b-num-04', fr: 'Quelle heure est-il ?', es: '¿Qué hora es?' },
        { id: 'b-num-05', fr: 'Il est huit heures et demie.', es: 'Son las ocho y media.' },
        { id: 'b-num-06', fr: 'Il est neuf heures moins le quart.', es: 'Son las nueve menos cuarto.' },
        { id: 'b-num-07', fr: 'À quelle heure ?', es: '¿A qué hora?' },
        { id: 'b-num-08', fr: 'Le concert commence à vingt heures.', es: 'El concierto empieza a las ocho de la noche.' },
        { id: 'b-num-09', fr: 'Quel est votre numéro de téléphone ?', es: '¿Cuál es su número de teléfono?' }
      ]
    },

    {
      id: 'fechas', num: 3,
      title: 'Días, meses y fechas',
      subtitle: 'La semana, los meses, le 15 novembre, lundi prochain',
      sections: [
        {
          title: 'Los días de la semana',
          html: '<p>Van en minúscula. <i>Lundi</i> = el lunes (este lunes); <i>le lundi</i> = los lunes (cada lunes).</p>',
          grid: true,
          items: [
            { k: 'lun.', fr: 'lundi' }, { k: 'mar.', fr: 'mardi' }, { k: 'mer.', fr: 'mercredi' }, { k: 'jeu.', fr: 'jeudi' },
            { k: 'ven.', fr: 'vendredi' }, { k: 'sam.', fr: 'samedi' }, { k: 'dim.', fr: 'dimanche' }
          ]
        },
        {
          title: 'Los meses',
          html: '<p>También en minúscula. «En noviembre» = <i>en novembre</i>.</p>',
          grid: true,
          items: [
            { k: '1', fr: 'janvier' }, { k: '2', fr: 'février' }, { k: '3', fr: 'mars' }, { k: '4', fr: 'avril' },
            { k: '5', fr: 'mai' }, { k: '6', fr: 'juin' }, { k: '7', fr: 'juillet' }, { k: '8', fr: 'août' },
            { k: '9', fr: 'septembre' }, { k: '10', fr: 'octobre' }, { k: '11', fr: 'novembre' }, { k: '12', fr: 'décembre' }
          ]
        },
        {
          title: 'Las fechas',
          html: '<p><i>le</i> + número + mes, sin «de»: <i>le 15 novembre</i>. El día 1 es <i>le premier</i>. El año se dice como un número: 2026 = <i>deux mille vingt-six</i>.</p>',
          items: [
            { k: '1/5', fr: 'le premier mai', es: 'el 1 de mayo' },
            { k: '15/11', fr: 'le quinze novembre', es: 'el 15 de noviembre' },
            { k: '14/7', fr: 'le quatorze juillet', es: 'fiesta nacional de Francia' },
            { k: '25/12', fr: 'le vingt-cinq décembre', es: 'Navidad' },
            { k: '2026', fr: 'en deux mille vingt-six', es: 'en 2026' },
            { k: '?', fr: 'On est quel jour aujourd\'hui ?', es: '¿Qué día es hoy?' },
            { k: '?', fr: 'On est le combien ?', es: '¿A qué fecha estamos?' }
          ]
        },
        {
          title: 'Antes, ahora, después',
          items: [
            { k: '↺', fr: 'hier', es: 'ayer' },
            { k: '•', fr: 'aujourd\'hui', es: 'hoy' },
            { k: '→', fr: 'demain', es: 'mañana' },
            { k: '→', fr: 'lundi prochain', es: 'el próximo lunes' },
            { k: '↺', fr: 'lundi dernier', es: 'el lunes pasado' },
            { k: '→', fr: 'la semaine prochaine', es: 'la próxima semana' },
            { k: '→', fr: 'le mois prochain', es: 'el próximo mes' },
            { k: '⌂', fr: 'le week-end', es: 'el fin de semana' },
            { k: '⌂', fr: 'ce week-end', es: 'este fin de semana' },
            { k: '↔', fr: 'du lundi au vendredi', es: 'de lunes a viernes' }
          ]
        }
      ],
      phrases: [
        { id: 'b-dat-01', fr: 'On est quel jour aujourd\'hui ?', es: '¿Qué día es hoy?' },
        { id: 'b-dat-02', fr: 'Aujourd\'hui, c\'est vendredi.', es: 'Hoy es viernes.' },
        { id: 'b-dat-03', fr: 'Je travaille du lundi au vendredi.', es: 'Trabajo de lunes a viernes.' },
        { id: 'b-dat-04', fr: 'Le concert, c\'est samedi soir.', es: 'El concierto es el sábado por la noche.' },
        { id: 'b-dat-05', fr: 'À lundi prochain !', es: '¡Hasta el próximo lunes!' },
        { id: 'b-dat-06', fr: 'Bon week-end !', es: '¡Buen fin de semana!' },
        { id: 'b-dat-07', fr: 'Mon anniversaire, c\'est le premier mai.', es: 'Mi cumpleaños es el 1 de mayo.' },
        { id: 'b-dat-08', fr: 'Je suis en vacances en décembre.', es: 'Estoy de vacaciones en diciembre.' }
      ]
    },

    {
      id: 'pronunciacion', num: 4,
      title: 'Reglas de pronunciación',
      subtitle: 'Finales mudas, e muda, nasales, u y ou, la r, la liaison',
      sections: [
        {
          title: 'Las finales que no suenan',
          html: '<p>La consonante final casi nunca suena: <i>peti<s>t</s></i>, <i>beaucou<s>p</s></i>, <i>Pari<s>s</s></i>. La terminación <b>-ent</b> de los verbos tampoco: <i>ils parl<s>ent</s></i> suena igual que <i>il parle</i>.</p><p>Suelen sonar la <b>c, r, f, l</b> (truco: <i>CaReFuL</i>): <i>avec, bonjour, neuf, il</i>.</p>',
          items: [
            { fr: 'petit', es: '«pe-ti», sin t' },
            { fr: 'beaucoup', es: '«bo-cu», sin p' },
            { fr: 'ils parlent', es: 'Igual que «il parle»' },
            { fr: 'trois', es: 'Sin s' },
            { fr: 'avec', es: 'La c sí suena' },
            { fr: 'bonjour', es: 'La r sí suena' }
          ]
        },
        {
          title: 'La e muda',
          html: '<p>La <b>e</b> sin acento al final de palabra no suena: <i>madam<s>e</s></i>, <i>tabl<s>e</s></i>. Pero hace sonar la consonante de antes: <i>petit</i> («pe-ti») / <i>petite</i> («pe-tit»). Dentro de la palabra a veces desaparece: <i>samedi</i> suena «sam-di».</p>',
          items: [
            { fr: 'madame', es: '«ma-dam»' },
            { fr: 'petit, petite', es: 'La e final hace sonar la t' },
            { fr: 'samedi', es: '«sam-di»' },
            { fr: 'Je ne sais pas.', es: 'Hablando rápido: «yen-se-pa»' }
          ]
        },
        {
          title: 'Las vocales nasales',
          html: '<p>Cuando una vocal va seguida de <b>n</b> o <b>m</b> (y después no viene otra vocal), la n no se pronuncia: el aire sale también por la nariz. Hay tres sonidos:</p><ul><li><b>an, en, am, em</b>: <i>temps, enfant, chambre</i></li><li><b>on, om</b>: <i>bonjour, nom</i></li><li><b>in, im, ain, ein, un</b>: <i>vin, pain, plein, lundi</i></li></ul><p>Si después viene vocal o doble n, ya no es nasal: <i>bon</i> (nasal) / <i>bonne</i> («bon» con n).</p>',
          items: [
            { fr: 'enfant', es: 'an/en' },
            { fr: 'bonjour', es: 'on' },
            { fr: 'vin', es: 'in: no digas «vin» español' },
            { fr: 'pain', es: 'ain = in' },
            { fr: 'lundi', es: 'un = in' },
            { fr: 'bon, bonne', es: 'Nasal / no nasal' }
          ]
        },
        {
          title: 'u frente a ou',
          html: '<p><b>ou</b> es la <i>u</i> española: <i>vous, tout</i>. <b>u</b> es otro sonido: di «i» y, sin mover la lengua, redondea los labios como para silbar: <i>tu, vu, rue</i>.</p>',
          items: [
            { fr: 'vous', es: 'ou = u española' },
            { fr: 'tu', es: 'u francesa' },
            { fr: 'tout, tu', es: 'todo / tú' },
            { fr: 'roue, rue', es: 'rueda / calle' }
          ]
        },
        {
          title: 'eu',
          html: '<p><b>eu</b> y <b>œu</b>: di «e» con los labios redondos. Cerrado en <i>deux, bleu</i>; un poco más abierto en <i>peur, sœur</i>.</p>',
          items: [
            { fr: 'deux', es: 'dos' },
            { fr: 'bleu', es: 'azul' },
            { fr: 'sœur', es: 'hermana' },
            { fr: 'heure', es: 'hora' }
          ]
        },
        {
          title: 'La r',
          html: '<p>Se hace en la garganta, cerca de donde haces la <i>j</i> española pero más suave, casi sin ruido. Nunca vibra con la punta de la lengua. Practica con <i>merci, Paris, rouge</i>.</p>',
          items: [
            { fr: 'merci' },
            { fr: 'Paris' },
            { fr: 'rouge' },
            { fr: 'très bien' }
          ]
        },
        {
          title: 'La liaison',
          html: '<p>Una consonante final muda <b>sí suena</b> si la palabra siguiente empieza por vocal o <i>h</i> muda, y se pega a ella. La <b>s</b> y la <b>x</b> suenan <b>z</b>: <i>vous‿êtes</i> («vu-zet»), <i>les‿amis</i> («le-za-mi»).</p><p>Nunca hay liaison después de <i>et</i>: <i>et | un</i>.</p>',
          items: [
            { fr: 'vous‿êtes', es: '«vu-zet»', say: 'vous êtes' },
            { fr: 'les‿amis', es: '«le-za-mi»', say: 'les amis' },
            { fr: 'un‿ami', es: '«en-na-mi»', say: 'un ami' },
            { fr: 'deux‿heures', es: '«de-zeur»', say: 'deux heures' },
            { fr: 'petit‿enfant', es: 'La t suena', say: 'petit enfant' },
            { fr: 'C\'est‿un‿hôtel.', es: '«se-ten-no-tel»', say: 'C\'est un hôtel.' }
          ]
        },
        {
          title: 'El enchaînement',
          html: '<p>Una consonante final que ya suena se une a la vocal siguiente, como si fuera una sola palabra: <i>il‿est</i> («i-le»), <i>elle‿a</i> («e-la»).</p>',
          items: [
            { fr: 'il‿est', es: '«i-le»', say: 'il est' },
            { fr: 'elle‿aime', es: '«e-lem»', say: 'elle aime' },
            { fr: 'une‿amie', es: '«u-na-mi»', say: 'une amie' },
            { fr: 'avec‿elle', es: '«a-ve-kel»', say: 'avec elle' }
          ]
        },
        {
          title: 'La h',
          html: '<p>La <b>h</b> nunca suena. Casi siempre es <b>muda</b>: se comporta como una vocal, así que hay <i>l\'</i> y liaison: <i>l\'hôtel, les‿hôtels</i>. Unas pocas palabras tienen <b>h aspirada</b> (tampoco suena, pero bloquea la liaison): <i>le héros, les | haricots</i>.</p>',
          items: [
            { fr: 'l\'hôtel', es: 'h muda: l\'' },
            { fr: 'les‿hôtels', es: '«le-zo-tel»', say: 'les hôtels' },
            { fr: 'l\'homme', es: 'el hombre' },
            { fr: 'les | haricots', es: 'h aspirada: sin liaison', say: 'les haricots' }
          ]
        },
        {
          title: 'Letras que se juntan',
          items: [
            { k: 'oi', fr: 'moi, trois', es: 'Suena «ua»' },
            { k: 'au', fr: 'au, beau, eau', es: 'au y eau suenan «o»' },
            { k: 'ai', fr: 'j\'aime, mais', es: 'Suena «e» abierta' },
            { k: 'ch', fr: 'chanter, chocolat', es: 'Suena «sh»' },
            { k: 'gn', fr: 'montagne, Espagne', es: 'Suena «ñ»' },
            { k: 'j', fr: 'je, jouer', es: 'Como la «y» argentina de «yo»' },
            { k: 's', fr: 'maison, rose', es: 'Entre vocales suena «z»' }
          ]
        }
      ],
      phrases: [
        { id: 'b-pro-01', fr: 'Vous êtes très gentil.', es: 'Usted es muy amable.' },
        { id: 'b-pro-02', fr: 'C\'est un petit hôtel.', es: 'Es un hotel pequeño.' },
        { id: 'b-pro-03', fr: 'Il y a beaucoup de touristes.', es: 'Hay muchos turistas.' },
        { id: 'b-pro-04', fr: 'Les amis arrivent à deux heures.', es: 'Los amigos llegan a las dos.' },
        { id: 'b-pro-05', fr: 'Tu veux du pain ?', es: '¿Quieres pan?' }
      ]
    },

    {
      id: 'errores', num: 5,
      title: 'Errores frecuentes',
      subtitle: 'Lo que más se nos escapa a los hispanohablantes',
      sections: [
        {
          title: 'En pronunciación',
          items: [
            { wrong: 'pe-TIT, BO-cup', right: 'petit, beaucoup', es: 'La consonante final casi nunca suena.' },
            { wrong: 'ils PAR-lent', right: 'ils parlent', es: '-ent de los verbos es muda: suena igual que «il parle».' },
            { wrong: '«tu» como la u española', right: 'tu', es: 'Con u española dices «tout» (todo). Di «i» con labios de «u».' },
            { wrong: 'vu y vous iguales', right: 'vu, vous', es: 'vu (visto) y vous (usted) son distintos.' },
            { wrong: '«vin» como en español', right: 'vin', es: 'Es nasal: la n no se pronuncia.' },
            { wrong: 'lun-di con n', right: 'lundi', es: 'un es nasal, como in.' },
            { wrong: 'ma-DA-me', right: 'madame', es: 'La e final no suena: «ma-dam».' },
            { wrong: 'r vibrante, como «perro»', right: 'merci, Paris', es: 'La r francesa va en la garganta.' },
            { wrong: 'poi-SON con s', right: 'poison, poisson', es: 'Una s entre vocales suena z: poison (veneno). Con ss suena s: poisson (pescado).' },
            { wrong: '«b» y «v» iguales', right: 'bain, vin', es: 'En francés la v se hace con los dientes en el labio: bain (baño) / vin (vino).' }
          ]
        },
        {
          title: 'En números, hora y fechas',
          items: [
            { wrong: 'sept-dix, septante', right: 'soixante-dix', es: '70 = 60 + 10. Septante solo en Bélgica y Suiza.' },
            { wrong: 'huit-dix, octante', right: 'quatre-vingts', es: '80 = 4 × 20.' },
            { wrong: 'quatre-vingt (80) sin s', right: 'quatre-vingts euros', es: 'Lleva s cuando termina ahí. Con otro número detrás, no: quatre-vingt-trois.' },
            { wrong: 'deux cents trois', right: 'deux cent trois', es: 'Cent pierde la s si le sigue otro número.' },
            { wrong: 'un cent, un mille', right: 'cent, mille', es: 'Sin «un» delante, como «cien» y «mil».' },
            { wrong: 'deux milles', right: 'deux mille', es: 'Mille nunca lleva s.' },
            { wrong: 'vingt-un', right: 'vingt et un', es: 'Con 21, 31… 61 va et. Pero 81 = quatre-vingt-un, sin et.' },
            { wrong: 'ils sont deux heures', right: 'Il est deux heures.', es: 'Para la hora siempre il est, en singular.' },
            { wrong: 'il est une', right: 'Il est une heure.', es: 'La palabra heure no se omite.' },
            { wrong: 'le un mai', right: 'le premier mai', es: 'El día 1 es premier. Los demás, con el número: le deux mai.' },
            { wrong: 'le quinze de novembre', right: 'le quinze novembre', es: 'Sin «de» entre el día y el mes.' },
            { wrong: 'Novembre, Lundi', right: 'novembre, lundi', es: 'Meses y días en minúscula (como en español).' }
          ]
        }
      ],
      phrases: []
    }
  ],

  exercises: {
    // Rangos para "Escribir el número" y "Decir el número".
    numberRanges: [
      { id: '0-20', label: '0 a 20', min: 0, max: 20 },
      { id: '20-69', label: '20 a 69', min: 20, max: 69 },
      { id: '70-99', label: '70 a 99', min: 70, max: 99 },
      { id: '0-100', label: '0 a 100', min: 0, max: 100 },
      { id: '100-1000', label: '100 a 1000', min: 100, max: 1000 },
      { id: 'miles', label: 'Miles (pesos)', min: 1, max: 200, mult: 1000 }
    ],
    // Cómo se dice cada carácter al deletrear.
    spell: {
      a: 'a', b: 'bé', c: 'cé', d: 'dé', e: 'eu', f: 'effe', g: 'gé', h: 'ache', i: 'i', j: 'ji', k: 'ka', l: 'elle', m: 'emme',
      n: 'enne', o: 'o', p: 'pé', q: 'ku', r: 'erre', s: 'esse', t: 'té', u: 'u', v: 'vé', w: 'double vé', x: 'ixe', y: 'i grec', z: 'zède',
      'é': 'e accent aigu', 'è': 'e accent grave', 'ê': 'e accent circonflexe', 'ë': 'e tréma', 'à': 'a accent grave',
      'â': 'a accent circonflexe', 'ç': 'c cédille', 'î': 'i accent circonflexe', 'ï': 'i tréma', 'ô': 'o accent circonflexe',
      'ù': 'u accent grave', 'û': 'u accent circonflexe',
      '@': 'arobase', '.': 'point', '-': 'tiret', '_': 'tiret bas', "'": 'apostrophe', ' ': 'espace',
      '0': 'zéro', '1': 'un', '2': 'deux', '3': 'trois', '4': 'quatre', '5': 'cinq', '6': 'six', '7': 'sept', '8': 'huit', '9': 'neuf'
    },
    // Las letras repetidas se dicen "deux L".
    double: 'deux',
    spellWords: [
      { w: 'Paul', es: 'nombre' }, { w: 'Claire', es: 'nombre' }, { w: 'Hélène', es: 'nombre' },
      { w: 'François', es: 'nombre' }, { w: 'Isabelle', es: 'nombre' }, { w: 'Mathieu', es: 'nombre' },
      { w: 'Joël', es: 'nombre' }, { w: 'Gérard', es: 'nombre' }, { w: 'Providencia', es: 'lugar' },
      { w: 'Lyon', es: 'ciudad' }, { w: 'Bordeaux', es: 'ciudad' }, { w: 'Dubois', es: 'apellido' },
      { w: 'Lefèvre', es: 'apellido' }, { w: 'Garnier', es: 'apellido' }, { w: 'Rousseau', es: 'apellido' },
      { w: 'claire.dubois@exemple.fr', es: 'correo' }, { w: 'paul-musique@exemple.co', es: 'correo' },
      { w: 'hotel_sirena@exemple.com', es: 'correo' }
    ],
    // Pares para distinguir de oído.
    pairs: [
      { a: { fr: 'dessus', es: 'encima' }, b: { fr: 'dessous', es: 'debajo' }, tip: 'u / ou' },
      { a: { fr: 'vu', es: 'visto' }, b: { fr: 'vous', es: 'usted' }, tip: 'u / ou' },
      { a: { fr: 'tu', es: 'tú' }, b: { fr: 'tout', es: 'todo' }, tip: 'u / ou' },
      { a: { fr: 'rue', es: 'calle' }, b: { fr: 'roue', es: 'rueda' }, tip: 'u / ou' },
      { a: { fr: 'le', es: 'el' }, b: { fr: 'les', es: 'los' }, tip: 'e / é' },
      { a: { fr: 'deux', es: 'dos' }, b: { fr: 'des', es: 'unos' }, tip: 'eu / é' },
      { a: { fr: 'poisson', es: 'pescado' }, b: { fr: 'poison', es: 'veneno' }, tip: 's / z' },
      { a: { fr: 'vin', es: 'vino' }, b: { fr: 'vent', es: 'viento' }, tip: 'in / an' },
      { a: { fr: 'bon', es: 'bueno' }, b: { fr: 'banc', es: 'banco (para sentarse)' }, tip: 'on / an' },
      { a: { fr: 'beau', es: 'bonito' }, b: { fr: 'bon', es: 'bueno' }, tip: 'o / on' },
      { a: { fr: 'bain', es: 'baño' }, b: { fr: 'vin', es: 'vino' }, tip: 'b / v' },
      { a: { fr: 'jeune', es: 'joven' }, b: { fr: 'jaune', es: 'amarillo' }, tip: 'eu / o' }
    ],
    // Suenan igual: se distinguen por el contexto (no entran al ejercicio de oído).
    homophones: [
      { words: 'cent / sans / sang', es: 'cien / sin / sangre' },
      { words: 'vin / vingt', es: 'vino / veinte' },
      { words: 'vert / verre / vers', es: 'verde / vaso / hacia' },
      { words: 'mer / mère / maire', es: 'mar / madre / alcalde' },
      { words: 'parle / parles / parlent', es: 'hablo, habla / hablas / hablan' }
    ]
  },

  // Número escrito en letras (francés de Francia, ortografía tradicional).
  numberWords: n => {
    const u = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze',
      'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
    const tens = { 2: 'vingt', 3: 'trente', 4: 'quarante', 5: 'cinquante', 6: 'soixante' };
    const below100 = x => {
      if (x < 20) return u[x];
      if (x < 70) { const t = Math.floor(x / 10), r = x % 10; return tens[t] + (r === 0 ? '' : r === 1 ? ' et un' : '-' + u[r]); }
      if (x < 80) return x === 71 ? 'soixante et onze' : 'soixante-' + u[x - 60];
      return x === 80 ? 'quatre-vingts' : 'quatre-vingt-' + u[x - 80];
    };
    const below1000 = x => {
      if (x < 100) return below100(x);
      const h = Math.floor(x / 100), r = x % 100;
      const head = h === 1 ? 'cent' : u[h] + ' cent' + (r === 0 ? 's' : '');
      return r ? head + ' ' + below100(r) : head;
    };
    if (n < 1000) return below1000(n);
    const th = Math.floor(n / 1000), r = n % 1000;
    const head = th === 1 ? 'mille' : below1000(th).replace(/(cent|vingt)s$/, '$1') + ' mille';
    return r ? head + ' ' + below1000(r) : head;
  }
};
