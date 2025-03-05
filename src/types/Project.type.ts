
/*import Angular from "../components/icons/Angular.astro";
import AstroIcon from "../components/icons/AstroIcon.astro";
import Bootstrap from "../components/icons/Bootstrap.astro";
import Html from "../components/icons/Html.astro";*/

export interface Tag {
    name: string;
    class: string;
    icon: any;
}

/*export const TAGS = {
    CSS3: {
        name: "CSS",
        class: "",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
    },
    HTML: {
        name: "HTML",
        class: "",
        icon: Html
    },
    TAILWIND: {
        name: "Tailwind",
        class: "",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
    },
    JAVASCRIPT: {
        name: "JavaScript",
        class: "",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
    },
    TYPESCRIPT: {
        name: "TypeScript",
        class: "",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
    },
    NODEJS: {
        name: "NodeJS",
        class: "",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
    },
    MONGODB: {
        name: "MongoDB",
        class: "",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
    },
    GIT: {
        name: "Git",
        class: "",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
    },
    GITHUB: {
        name: "GitHub",
        class: "",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
    },
    VUE: {
        name: "Vue",
        class: "",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
    },
    REACT: {
        name: "React",
        class: "",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
    },
    NEXTJS: {
        name: "NextJS",
        class: "",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
    },
    ANGULAR: {
        name: "Angular",
        class: "",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg"
    },
    ASTRO: {
        name: "Astro",
        class: "",
        icon: AstroIcon
    },
    NET6: {
        name: ".NET6",
        class: "",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnet/dotnet-original.svg"
    },
    DOCKER: {
        name: "Docker",
        class: "",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
    },
    AZURE: {
        name: "Azure DevOps",
        class: "",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg"
    },
    SQL: {
        name: "SQL Server",
        class: "",
        icon: Angular
    },
    BOOTSTRAP: {
        name: "Bootstrap",
        class: "",
        icon: Bootstrap
    },
};*/
 
export interface Project extends GitHubData {
    mainCode?: string;
    mainCodeUrl?: string;
    tags?: string[];
}

export interface GitHubData {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  languages_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  description: string | null;
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: string | null;
  open_issues_count: number;
  url: string;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  } | null;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  permissions: {
    admin: boolean;
    push: boolean;
    pull: boolean;
  };
}

/*export const PROYECTS: Proyect[] = [
    {
        title: "URL Shorter",
        description: "Proyecto de prueba para aprender Astro con un curso en Udemy.",
        mainCode: 'Astro',
        mainCodeUrl: 'https://astro.build/',
        url: 'https://astro.build/',
        tags: [TAGS.HTML, TAGS.ASTRO, TAGS.BOOTSTRAP]
    },
    {
        title: "My Portfolio Website",
        description: "Un sitio web personal para mostrar mis habilidades y proyectos.",
        mainCode: 'React',
        mainCodeUrl: 'https://reactjs.org/',
        url: 'https://myportfolio.com',
        tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.JAVASCRIPT] as Tag[]
    },
    {
        title: "E-commerce Platform",
        description: "Una plataforma de comercio electrónico con listados de productos, carrito de compras y pago.",
        mainCode: 'Next.js',
        mainCodeUrl: 'https://nextjs.org/',
        url: 'https://myecommerce.com',
        tags: [TAGS.NEXTJS, TAGS.TYPESCRIPT, TAGS.MONGODB] as Tag[]
    },
    {
        title: "Blog Application",
        description: "Una aplicación de blog donde los usuarios pueden crear, leer, actualizar y eliminar publicaciones.",
        mainCode: 'Vue',
        mainCodeUrl: 'https://vuejs.org/',
        url: 'https://myblog.com',
        tags: [TAGS.VUE, TAGS.JAVASCRIPT, TAGS.HTML] as Tag[]
    },
    {
        title: "Task Management App",
        description: "Una aplicación sencilla para organizar y realizar un seguimiento de las tareas.",
        mainCode: 'Angular',
        mainCodeUrl: 'https://angular.io/',
        url: 'https://mytasks.com',
        tags: [TAGS.ANGULAR, TAGS.TYPESCRIPT] as Tag[]
    },
    {
        title: "Data Visualization Dashboard",
        description: "Un panel para visualizar datos usando gráficos.",
        mainCode: 'D3.js',
        mainCodeUrl: 'https://d3js.org/',
        url: 'https://mydashboard.com',
        tags: [TAGS.REACT, TAGS.TYPESCRIPT] as Tag[]
    },
    {
        title: "REST API",
        description: "Una API REST construida con Node.js y Express.",
        mainCode: 'Node.js',
        mainCodeUrl: 'https://nodejs.org/',
        url: 'https://myapi.com',
        tags: [TAGS.NODEJS, TAGS.TYPESCRIPT, TAGS.MONGODB] as Tag[]
    },
    {
        title: "Mobile App Concept",
        description: "Un concepto para una aplicación móvil usando React Native.",
        mainCode: 'React Native',
        mainCodeUrl: 'https://reactnative.dev/',
        url: '', // No hay URL para un concepto
        tags: [TAGS.REACT, TAGS.JAVASCRIPT] as Tag[]
    },
    {
        title: "Static Website with Bootstrap",
        description: "Un sitio web estático simple construido con Bootstrap para prototipado rápido.",
        mainCode: 'Bootstrap',
        mainCodeUrl: 'https://getbootstrap.com/',
        url: 'https://mybootstrapsite.com',
        tags: [TAGS.BOOTSTRAP, TAGS.HTML, TAGS.CSS3] as Tag[]
    },
];*/
