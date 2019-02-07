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
        thumbUrl: '',
        videoUrl: 'https://peertube.social/videos/watch/43c97e8b-5762-4bcd-b6eb-3686b98e2e0c',
        content: [
          {
            title: 'L’esport doit-il être considéré comme un sport à part entière ?',
            text: '“L’esport est “associé” aux sports traditionnels par comparaison, c’est un biais pratique pour expliquer la nature de l’esport. Le sport traditionnel, dans son aspect compétitif, lui est semblable en bien des points. Il y a évidemment des différences (objet virtuel, propriété intellectuelle du jeu, …). Le débat sport/esport m’a toujours apparu comme absurde, je ne comprends pas où il mène et ce qu’il apporte à part des lapalissades. Il est peut être soulevé par l’ambiguïté du mot en lui-même, c’est pourquoi de nombreux médias spécialisés tendent désormais à utiliser l’expression de “jeu vidéo compétitif”. Elle permet d’évacuer cette question d’une aberrante vacuité.” -pmleek, coach & commentateur esport',
            thumbUrl: '',
          }, {
            title: 'L’esport doit-il être considéré comme un sport à part entière ?',
            text: '“L’esport est “associé” aux sports traditionnels par comparaison, c’est un biais pratique pour expliquer la nature de l’esport. Le sport traditionnel, dans son aspect compétitif, lui est semblable en bien des points. Il y a évidemment des différences (objet virtuel, propriété intellectuelle du jeu, …). Le débat sport/esport m’a toujours apparu comme absurde, je ne comprends pas où il mène et ce qu’il apporte à part des lapalissades. Il est peut être soulevé par l’ambiguïté du mot en lui-même, c’est pourquoi de nombreux médias spécialisés tendent désormais à utiliser l’expression de “jeu vidéo compétitif”. Elle permet d’évacuer cette question d’une aberrante vacuité.” -pmleek, coach & commentateur esport',
            thumbUrl: '',
          }
        ],
      })

    const chapter2 = await Factory
      .model('App/Models/Chapter')
      .create({
        title: 'Introduction à l\'esport en France',
        description: 'Quelle place prend l’esport en France ? Les matchs et événements sont énormément relayés et une grande partie des spectateurs se trouvent sur les diffusions en direct. Découvrez comment cette discipline a évolué au fil du temps, son écosystème et les métiers qu’elle a permis de créer.',
        thumbUrl: '',
        videoUrl: 'https://peertube.social/videos/watch/43c97e8b-5762-4bcd-b6eb-3686b98e2e0c',
        content: [
          {
            title: 'L’esport doit-il être considéré comme un sport à part entière ?',
            text: '“L’esport est “associé” aux sports traditionnels par comparaison, c’est un biais pratique pour expliquer la nature de l’esport. Le sport traditionnel, dans son aspect compétitif, lui est semblable en bien des points. Il y a évidemment des différences (objet virtuel, propriété intellectuelle du jeu, …). Le débat sport/esport m’a toujours apparu comme absurde, je ne comprends pas où il mène et ce qu’il apporte à part des lapalissades. Il est peut être soulevé par l’ambiguïté du mot en lui-même, c’est pourquoi de nombreux médias spécialisés tendent désormais à utiliser l’expression de “jeu vidéo compétitif”. Elle permet d’évacuer cette question d’une aberrante vacuité.” -pmleek, coach & commentateur esport',
            thumbUrl: '',
          }, {
            title: 'L’esport doit-il être considéré comme un sport à part entière ?',
            text: '“L’esport est “associé” aux sports traditionnels par comparaison, c’est un biais pratique pour expliquer la nature de l’esport. Le sport traditionnel, dans son aspect compétitif, lui est semblable en bien des points. Il y a évidemment des différences (objet virtuel, propriété intellectuelle du jeu, …). Le débat sport/esport m’a toujours apparu comme absurde, je ne comprends pas où il mène et ce qu’il apporte à part des lapalissades. Il est peut être soulevé par l’ambiguïté du mot en lui-même, c’est pourquoi de nombreux médias spécialisés tendent désormais à utiliser l’expression de “jeu vidéo compétitif”. Elle permet d’évacuer cette question d’une aberrante vacuité.” -pmleek, coach & commentateur esport',
            thumbUrl: '',
          }
        ],
      })

    const chapter3 = await Factory
      .model('App/Models/Chapter')
      .create({
        title: 'Introduction à l\'esport en France',
        description: 'Quelle place prend l’esport en France ? Les matchs et événements sont énormément relayés et une grande partie des spectateurs se trouvent sur les diffusions en direct. Découvrez comment cette discipline a évolué au fil du temps, son écosystème et les métiers qu’elle a permis de créer.',
        thumbUrl: '',
        videoUrl: 'https://peertube.social/videos/watch/43c97e8b-5762-4bcd-b6eb-3686b98e2e0c',
        content: [
          {
            title: 'L’esport doit-il être considéré comme un sport à part entière ?',
            text: '“L’esport est “associé” aux sports traditionnels par comparaison, c’est un biais pratique pour expliquer la nature de l’esport. Le sport traditionnel, dans son aspect compétitif, lui est semblable en bien des points. Il y a évidemment des différences (objet virtuel, propriété intellectuelle du jeu, …). Le débat sport/esport m’a toujours apparu comme absurde, je ne comprends pas où il mène et ce qu’il apporte à part des lapalissades. Il est peut être soulevé par l’ambiguïté du mot en lui-même, c’est pourquoi de nombreux médias spécialisés tendent désormais à utiliser l’expression de “jeu vidéo compétitif”. Elle permet d’évacuer cette question d’une aberrante vacuité.” -pmleek, coach & commentateur esport',
            thumbUrl: '',
          }, {
            title: 'L’esport doit-il être considéré comme un sport à part entière ?',
            text: '“L’esport est “associé” aux sports traditionnels par comparaison, c’est un biais pratique pour expliquer la nature de l’esport. Le sport traditionnel, dans son aspect compétitif, lui est semblable en bien des points. Il y a évidemment des différences (objet virtuel, propriété intellectuelle du jeu, …). Le débat sport/esport m’a toujours apparu comme absurde, je ne comprends pas où il mène et ce qu’il apporte à part des lapalissades. Il est peut être soulevé par l’ambiguïté du mot en lui-même, c’est pourquoi de nombreux médias spécialisés tendent désormais à utiliser l’expression de “jeu vidéo compétitif”. Elle permet d’évacuer cette question d’une aberrante vacuité.” -pmleek, coach & commentateur esport',
            thumbUrl: '',
          }
        ],
      })
  }
}

module.exports = ChapterSeeder
