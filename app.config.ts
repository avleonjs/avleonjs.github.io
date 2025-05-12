export default defineAppConfig({
  shadcnDocs: {
    site: {
      title: 'AvleonJs',
      description: 'A powerful TypeScript-based web framework built on Fastify.',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'AvleonJs',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/av-logo.png',
        dark: '/av-logo.png',
      },
      nav: [],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/avleonjs/avleon-core',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2024',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/avleonjs',
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
    }
  }
});