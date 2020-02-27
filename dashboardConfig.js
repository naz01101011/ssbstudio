export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e578a151448fda181a695a2',
                  title: 'Sanity Studio',
                  name: 'SSB Studio',
                  apiId: '9857e5c0-4089-40d3-8493-1985bf3e7583'
                },
                {
                  buildHookId: '5e5794c8da2f1331aba9764e',
                  title: 'SSB Frontend',
                  name: 'Stiri de Sibiu',
                  apiId: 'b3fc12cb-83c0-4ce4-9361-cf5132493104'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/naz01101011/ssbstudio',
            category: 'Code'
          },
          { title: 'Frontend', value: 'http://ssb-web.s3-website.eu-central-1.amazonaws.com/', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
