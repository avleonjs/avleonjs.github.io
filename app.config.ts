export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'AvleonJs',
      title: 'AvleonJs',
      description: 'A powerful TypeScript-based web framework built on Fastify.',
    },
    theme: {
      customizable: false,
      color: 'rose',
      radius: 0.5,
    },
    languageSwitcher: {
      enable: true,
      triggerType: 'icon',
      dropdownType: 'select',
    },
    header: {
      title: 'AVLEON',
      showTitle: true,

      darkModeToggle: true,
      logo: {
        light: '/tareq.svg',
        dark: '/tareq.svg',
      },

      nav: [
        {
        title: 'Docs',
        links: [{
          title: 'Getting Started',
          to: '/getting-started',
          description: 'Start building your document with shadcn-docs-nuxt',
          icon: 'lucide:rocket',
        }, {
          title: 'Core concepts',
          to: '/components/prose',
          description: 'Explore available UI components and usage examples.',
          icon: 'lucide:box',
        }, 
        {
          title: 'API',
          to: '/api/configuration/shadcn-docs',
          description: 'Discover the configurations and exposed APIs.',
          target: '_self',
          icon: 'lucide:code',
        }],
      },
      {
        title: 'Credits',
        links: [{
          title: 'Fastify',
          to: '/getting-started',
          description: 'Fast and low overhead web framework, for Node.js',
         
        }, {
          title: 'Core concepts',
          to: '/components/prose',
          description: 'Explore available UI components and usage examples.',
        }, 
        {
          title: 'API',
          to: '/api/configuration/shadcn-docs',
          description: 'Discover the configurations and exposed APIs.',
          target: '_self',
        }],
      },
      {
        title: 'Playground',
        to: '/getting-started',
        description: 'Start building your document with shadcn-docs-nuxt',
        icon: 'lucide:rocket',
 
      },

      {
        title: 'v0.0.32 (Latest)',
        links: [{
          title: 'v0.0.32',
          to: '/',
          description: 'Fast and low overhead web framework, for Node.js',
           icon: 'lucide:box',
        }],
      },
    
    ],
    },
    aside: {
      useLevel: false,
      collapse: false,
      collapseLevel: 3,
      folderStyle: 'default',
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      pm: ['npm', 'pnpm', 'yarn']
    },
    footer: {
      credits: 'Copyright © 2024',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/xtareq',
        target: '_blank',
      },{
        icon: 'lucide:twitter',
        to: 'https://github.com/xtareq',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/avleonjs/avleon-core',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/avleonjs/avleon-core/issues',
        target: '_blank',
      }],
    },
    banner: {
      enable: true,
      content: '🚧 AvleonJs is in active development and not ready for production use.',
      
    },
    search: {
      enable: true,
      inAside: false,
      style: 'input'
    }, 
    data:{}
  }
});