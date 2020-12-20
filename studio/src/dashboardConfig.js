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
                  buildHookId: '5fdf83771f184a15b18e992d',
                  title: 'Sanity Studio',
                  name: 'thfc-gatsby-sanity-studio',
                  apiId: 'f2b212c0-5486-46d1-a889-ed75f5853f16'
                },
                {
                  buildHookId: '5fdf8377714dafa07d2c588f',
                  title: 'Blog Website',
                  name: 'thfc-gatsby-sanity',
                  apiId: '5c2f1c7b-1c79-4e5b-b927-bc655f45f0e6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mbrien12/thfc-gatsby-sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://thfc-gatsby-sanity.netlify.app', category: 'apps' }
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
