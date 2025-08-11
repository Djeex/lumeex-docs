// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  css: ['~/assets/css/extra.css'],
  colorMode: { 
    preference: 'dark',
    fallback:'dark',
    },
  content: {
     highlight: {
      langs: [
        'console',
        'nginx',
      ]
    }
  },

   mdc: {
     highlight: {
       theme: 'github-dark',
       langs: ['ts','console','nginx'],
       wrapperStyle: true
    }
   },
  
  docus: {
    title: 'Lumeex',
    description: 'A minimalist, lightweight photo gallery static site generator.',
    url: 'http://lumeex.djeex.fr',
    image: '/img/social.png',
    socials: {
      github:'',
      Gitea: {
        label: 'Gitea',
        icon: 'cib:gitea',
        href: 'https://git.djeex.fr/Djeex/lumeex',
      },
      Github: {
        label: 'Github',
        icon:'cib:github', 
        href: 'https://github.com/Djeex/lumeex',
      }
    },
    github: {
      baseUrl:'https://git.djeex.fr',
      dir: 'content',
      branch: 'src/branch/master',
      repo: 'lumeex',
      owner: 'Djeex',
      edit: false
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: false
    },

    footer: {
      credits: {
        icon: '',
        text: '',
        href: '',
        }
    }

  },
})
