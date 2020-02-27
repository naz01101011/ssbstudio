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
                  buildHookId: '5e37eb70cf4258182bde0022',
                  title: 'Sanity Studio',
                  name: 'SSB-v4-studio',
                  apiId: '8a902293-7374-4d4d-b1f8-4df2949c402a'
                },
                {
                  buildHookId: '5e37eb701c77181b42d40fbe',
                  title: 'Blog Website',
                  name: 'SSB-v4',
                  apiId: '099fbaf9-443d-431f-9764-d61681ee57e3'
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
