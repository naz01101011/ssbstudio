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
        title: 'Type and Position',
        name: 'positionSet',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          list: [
            {title: 'Mid Lat', value: 'mid-leaderboard'},
            {title: 'Mid Inalt', value: 'tall'},
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
  