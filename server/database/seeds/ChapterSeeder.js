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
        videoUrl: 'https://peertube.social/videos/embed/43c97e8b-5762-4bcd-b6eb-3686b98e2e0c',
        content: [
          {
            title: 'Qu’est-ce que l’esport ?',
            text: "Contraction du terme anglais “electronic sport”, littéralement “sport électronique”, l’esport désigne la pratique des jeux vidéo compétitifs, c’est-à-dire les jeux où le joueur affronte, seul ou en équipe, d’autres joueurs. La pratique de l’esport se développe réellement au début des années 2000. Les joueurs se rencontrent et s’affrontent lors de tournois tels que l’ESWC (Electronic Sports World Cup), apparu en 2003 et la MLG (Major League Gaming), à partir de 2004.Depuis quelques années, les plus grands événements se déroulent dans des salles de concert ou des stades devant des milliers voire des millions de téléspectateurs. Début septembre 2017, à l’accorHotels Arena de Paris a eu lieu la finale de la compétition League of Legends. Un évènement qui a rassemblé des milliers de personnes. Si l’esport n’a pris cette dimension que dernièrement, c’est grâce à deux acteurs du milieu. Le premier étant Twitch, qui permet de diffuser dans le monde entier les compétitions qui se déroulent chaque jour, touchant un large public. Et le second, Riot Games, l’éditeur du jeu League of Legends, l’un des titres les plus joués au monde. Ce dernier a instauré en 2013 un championnat régulier, similaire aux championnats NBA aux États-Unis.",
            thumbUrl: 'chap01.png',
          }, {
            title: 'Nouveau pan de notre culture et de notre économie',
            text: "Avec 22,4 millions de dollars de recettes pour l'esport en 2016, la France se positionne comme l'un des principaux acteurs sur le marché européen. Historiquement, l'Asie de l'Est est la région du monde où la pratique de l'esport est la plus développée car le nombre d'utilisateurs y est plus élevé, mais aujourd'hui, l'Europe rattrape nettement son retard dans ce secteur. L'industrie de l'esport est en effet en pleine expansion et cette popularité s'explique notamment par un large accès à internet et aux réseaux sociaux. Les analyses réalisées par SuperData pour PayPal indiquent que la taille du marché européen de l'esport pour l'année 2018 représenterait plus de 345 millions de dollars. Après la Suède et la Russie, la France se place comme le troisième marché européen de l'esport générant le plus de chiffre d'affaires.",
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
        videoUrl: 'https://peertube.social/videos/embed/820449cf-2efa-47e4-9a4e-5444a4bc2f9c',
        content: [
          {
            title: 'Vers une reconnaissance',
            text: "Suite à la popularité de l’esport, la France à décidé de faire passer une loi très importante pour l’esport, la Loi Numérique qui donne aujourd’hui un statut officiel aux joueurs. Ceux-ci ont maintenant un contrat à durée déterminée leur permettant d’être reconnu comme personne active. Assimilés par le passé à des jeux d'argent, les tournois esport étaient tolérés mais pas protégés par un cadre légal strict. Grâce au texte de loi, ils seront désormais simplifiés et encouragés. Selon les chiffres communiqués, plus de 200 personnes vivent actuellement du métier de joueur professionnel en France, tandis que l'on recense près de 500 000 participants inscrits aux diverses compétitions organisées chaque année.",
            thumbUrl: 'chap01.png',
          }, {
            title: 'Plus complexe qu’il n’y paraît',
            text: "Imitant les structures sportives, les équipes regroupent des joueurs sur un ou plusieurs jeux, ainsi que des coachs, des analystes stratégiques, et même des commentateurs pour la retransmission des matchs en direct. Elles sont sponsorisées par des marques informatiques, comme Intel ou encore Orange. Si ces structures existent depuis la fin des années 90 en Corée du Sud, nation pionnière de l’esport, la France n’est pas en reste.  Des grandes équipes existent comme Millenium, aAa (Against All Authority), LDLC ou encore plus récemment le club de football Paris Saint-Germain qui a aussi investi dans une équipe professionnelle.",
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
        title: 'Éducation esportive',
        description: 'Qu’est-ce qu’une école formant aux métiers de l’esport ? Cet épisode traite du rapport de l’éducation à cette discipline par les différentes formations existantes . Chaque année des centaines de joueurs intègrent ces écoles dans l’espoir de devenir joueur professionnel. Mais qu’est-ce que ces formations proposent-elles réellement ?',
        thumbUrl: 'chap03.png',
        videoUrl: 'https://peertube.social/videos/embed/eca506fb-4b1a-4127-b8c4-34a0a8b3959a',
        content: [
          {
            title: 'Des cursus spécialisés en France',
            text: 'L’engouement envers cette discipline est devenu si intense en France que l’on a vu apparaitre la première école spécialisée dans l’esport en 2015. Il s’agit de l’esport Academy, située à Bougenais, non loin de Nantes. Depuis une dizaine d’établissements propose une formation en esport ainsi qu’un bachelor « esport et Gaming ». Les écoles ne forment cependant pas uniquement des joueurs. En effet, pour ces étudiants, le but n’est pas nécessairement de faire partie de ces « Pro Gamer » qui gagnent leur vie en concourant sur le devant de la scène. Pour certains, il s’agit également de pouvoir travailler dans les coulisses de ces nombreux évènements et de communiquer sur cet univers en plein essor.',
            thumbUrl: 'chap01.png',
          }, {
            title: 'Le secteur devrait générer 24 millions de dollars de recettes en France en 2019',
            text: 'Et les élèves veulent y croire. Cela explique la popularité de ces écoles qui fleurissent un peu partout en France comme à l’étranger.  Malheureusement la reconnaissance familiale reste la plus longue à obtenir dans ce milieu et peu de compétitions d’envergure ont lieu en France. Mais les événements internationaux commencent à fleurir sur le territoire notamment depuis la finale des championnats d’Europe de League of Legends qui a eu lieu en septembre à Bercy et qui a attiré près de 20 000 spectateurs durant le week-end.',
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
