// Contenido del curso. Cada módulo nuevo se agrega a la lista "modules".
window.CURSO = {
  modules: [
    {
      id: 'm1',
      num: 1,
      title: 'Bonjour !',
      subtitle: 'Saludar, presentarte, tu trabajo y tu música',
      anchor:
        "Bonjour ! Je m'appelle Paul. Je suis colombien et j'habite à Providencia, sur une île des Caraïbes. " +
        "Je suis professeur d'anglais et je suis musicien. Je joue de la guitare et je chante. " +
        "J'aime cuisiner. J'apprends le français.",
      dialogue: {
        title: 'Après le concert',
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
          { text: 'Conversa con tu compañero local en francés, o sigue buscándolo.' },
          { text: 'Escucha música en francés.' }
        ] }
      ],
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
    }
  ]
};
