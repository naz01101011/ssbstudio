export default {
    name: 'banner',
    type: 'document',
    title: 'Banners',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        description: 'Titlul ajuta la organizarea si identificarea bannerelor in Studio.'
      },
      {
        title: 'Tipul bannerului',
        name: 'positionSet',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          list: [
            {title: 'Mare Sus', value: 'large-top-leaderboard'},
            {title: 'Mare Mijloc', value: 'large-mid-leaderboard'},
            {title: 'Mare Jos', value: 'large-bot-leaderboard'},
            {title: 'Mediu Mijloc', value: 'mid-leaderboard'},
            {title: 'Patrat/Inalt', value: 'rectangle'}
          ]
        },
        validation: Rule => Rule.required().max(1).error('Trebuie selectata o pozitie pentru banner!')
      },
      {
        type: 'image',
        name: 'bannerImg',
        title: 'Banner Image',
        // validation: Rule => Rule.error('Trebuie sa imi dai poza bannerului!').required(),
        description: 'Imaginea folosita ca banner.'
      },
      {
        name: 'url',
        type: 'url',
        title: 'Banner Link',
        // validation: Rule => Rule.error('Trebuie sa dai linkul bannerului!').required(),
        description: 'Linkul deschis atunci cand bannerul este click-uit.'
      }
    ]
  }
  