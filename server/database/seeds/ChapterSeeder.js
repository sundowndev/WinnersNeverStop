'use strict'

/*
|--------------------------------------------------------------------------
| ChapterSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ChapterSeeder {
  async run() {
    const chapter1 = await Factory
      .model('App/Models/Chapter')
      .create({
        title: 'Introduction à l\'esport en France',
        description: 'Quelle place prend l’esport en France ? Les matchs et événements sont énormément relayés et une grande partie des spectateurs se trouvent sur les diffusions en direct. Découvrez comment cette discipline a évolué au fil du temps, son écosystème et les métiers qu’elle a permis de créer.',
        thumbUrl: 'chap01.png',
        videoUrl: 'https://peertube.social/videos/watch/43c97e8b-5762-4bcd-b6eb-3686b98e2e0c',
        content: [
          {
            title: 'L’esport doit-il être considéré comme un sport à part entière ?',
            text: '“L’esport est “associé” aux sports traditionnels par comparaison, c’est un biais pratique pour expliquer la nature de l’esport. Le sport traditionnel, dans son aspect compétitif, lui est semblable en bien des points. Il y a évidemment des différences (objet virtuel, propriété intellectuelle du jeu, …). Le débat sport/esport m’a toujours apparu comme absurde, je ne comprends pas où il mène et ce qu’il apporte à part des lapalissades. Il est peut être soulevé par l’ambiguïté du mot en lui-même, c’est pourquoi de nombreux médias spécialisés tendent désormais à utiliser l’expression de “jeu vidéo compétitif”. Elle permet d’évacuer cette question d’une aberrante vacuité.” -pmleek, coach & commentateur esport',
            thumbUrl: 'chap01.png',
          }, {
            title: 'L’esport doit-il être considéré comme un sport à part entière ?',
            text: '“L’esport est “associé” aux sports traditionnels par comparaison, c’est un biais pratique pour expliquer la nature de l’esport. Le sport traditionnel, dans son aspect compétitif, lui est semblable en bien des points. Il y a évidemment des différences (objet virtuel, propriété intellectuelle du jeu, …). Le débat sport/esport m’a toujours apparu comme absurde, je ne comprends pas où il mène et ce qu’il apporte à part des lapalissades. Il est peut être soulevé par l’ambiguïté du mot en lui-même, c’est pourquoi de nombreux médias spécialisés tendent désormais à utiliser l’expression de “jeu vidéo compétitif”. Elle permet d’évacuer cette question d’une aberrante vacuité.” -pmleek, coach & commentateur esport',
            thumbUrl: 'chap01.png',
          }
        ],
      })

    const chapter2 = await Factory
      .model('App/Models/Chapter')
      .create({
        title: 'Le monde de l\'esport et sa professionnalisation',
        description: 'Qu’y-a-t-il dans l’envers du décors de la scène amateur ? Faut-il venir en compétition pour s’amuser ou pour gagner ? Quatre joueurs amateurs et semi-pro reviennent sur leur rapport à la discipline et quelle place prend celle-ci dans leur quotidien.',
        thumbUrl: 'chap02.png',
        videoUrl: 'https://peertube.social/videos/watch/820449cf-2efa-47e4-9a4e-5444a4bc2f9c',
        content: [
          {
            title: 'Quels sont les erreurs les plus fréquentes chez les joueurs amateurs ?',
            text: '“Ces amateurs qui veulent devenir pro sont bien souvent très jeunes et font donc des erreurs liées à un certain manque de maturité. Leur comportement est probablement le premier obstacle : respect des autres, investissement constant au travail, autocritique, humilité, acceptation de l’autre et de sa critique, sang-froid dans l’action, engagement sur le long terme et hygiène de vie. Si la personne est mécaniquement très pointue, et ça n’est pas une condition acquise facilement, alors on trouvera sûrement à redire d’elle dans cette liste. Malheureusement, parce qu’un joueur est très bon, il sera parfois propulsé très vite à haut niveau sans avoir été forgé par un réel engagement professionnel. Une scène compétitive est par essence difficile d’accès et élitiste. Les premiers arrivés auront peut-être l’avantage d’être déjà là et d’accumuler de l’expérience depuis le début. Mais il y a désormais quantité d’exemples qui montrent un renouvellement des scènes esportives. Celles-ci se professionnalisent et je dirais que si le niveau augmente, les processus de repérages et les opportunités aussi. L’ampleur de la tâche n’arrête pas un vrai compétiteur, elle le mobilise.” -pmleek, coach & commentateur esport',
            thumbUrl: 'chap01.png',
          }, {
            title: 'Quels sont les erreurs les plus fréquentes chez les joueurs amateurs ?',
            text: '“Ces amateurs qui veulent devenir pro sont bien souvent très jeunes et font donc des erreurs liées à un certain manque de maturité. Leur comportement est probablement le premier obstacle : respect des autres, investissement constant au travail, autocritique, humilité, acceptation de l’autre et de sa critique, sang-froid dans l’action, engagement sur le long terme et hygiène de vie. Si la personne est mécaniquement très pointue, et ça n’est pas une condition acquise facilement, alors on trouvera sûrement à redire d’elle dans cette liste. Malheureusement, parce qu’un joueur est très bon, il sera parfois propulsé très vite à haut niveau sans avoir été forgé par un réel engagement professionnel. Une scène compétitive est par essence difficile d’accès et élitiste. Les premiers arrivés auront peut-être l’avantage d’être déjà là et d’accumuler de l’expérience depuis le début. Mais il y a désormais quantité d’exemples qui montrent un renouvellement des scènes esportives. Celles-ci se professionnalisent et je dirais que si le niveau augmente, les processus de repérages et les opportunités aussi. L’ampleur de la tâche n’arrête pas un vrai compétiteur, elle le mobilise.” -pmleek, coach & commentateur esport',
            thumbUrl: '',
          }
        ],
      })

    const chapter3 = await Factory
      .model('App/Models/Chapter')
      .create({
        title: 'Éducation e-sportive',
        description: 'Qu’est-ce qu’une école formant aux métiers de l’e-sport ? Cet épisode traite du rapport de l’éducation à cette discipline par les différentes formations existantes . Chaque année des centaines de joueurs intègrent ces écoles dans l’espoir de devenir joueur professionnel. Mais qu’est-ce que ces formations proposent-elles réellement ?',
        thumbUrl: 'chap03.png',
        videoUrl: 'https://peertube.social/videos/watch/43c97e8b-5762-4bcd-b6eb-3686b98e2e0c',
        content: [
          {
            title: 'Quels métiers retrouve-t-on dans l’esport ?',
            text: '“L’esport a besoin des métiers qu’on connait déjà et peut être qu’une option ou, au plus, une spécialisation dans l’esport au travers des formations de ces métiers est sensée. La valeur de ces écoles mériterait d’être étudiée au cas par cas. Il faut distinguer métiers classiques dans le secteur de l’esport et métiers propres à l’esport. Je ne pense pas qu’il y ait une école pour ces derniers, au mieux des incubateurs de talent [que l’on retrouve notamment en Corée]. Et encore.” -pmleek, coach & commentateur esport',
            thumbUrl: 'chap01.png',
          }, {
            title: 'Quels métiers retrouve-t-on dans l’esport ?',
            text: '“L’esport a besoin des métiers qu’on connait déjà et peut être qu’une option ou, au plus, une spécialisation dans l’esport au travers des formations de ces métiers est sensée. La valeur de ces écoles mériterait d’être étudiée au cas par cas. Il faut distinguer métiers classiques dans le secteur de l’esport et métiers propres à l’esport. Je ne pense pas qu’il y ait une école pour ces derniers, au mieux des incubateurs de talent [que l’on retrouve notamment en Corée]. Et encore.” -pmleek, coach & commentateur esport',
            thumbUrl: 'chap01.png',
          }
        ],
      })
  }
}

module.exports = ChapterSeeder
