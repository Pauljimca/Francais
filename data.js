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
