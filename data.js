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
