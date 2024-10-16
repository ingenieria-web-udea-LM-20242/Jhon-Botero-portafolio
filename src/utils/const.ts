const Knowledges = [
    {
        imagen: `<svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24"><g fill="none" stroke="#FFB400" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M15.175 22v-1.009A1.007 1.007 0 0 1 16.18 20h.075c1.432-.012 2.662-1.006 2.954-2.388l.01-.052l.52-2.56l.94-.464c.505-.248.756-.373.81-.6c.055-.228-.114-.45-.451-.895l-1.908-2.508c-.19-.25-.285-.374-.335-.506s-.067-.32-.098-.693C18.353 5.227 14.865 2 10.612 2C6.132 2 2.5 5.582 2.5 10c0 2.75 1.407 5.175 3.55 6.615m0 0V22m0-5.385a8 8 0 0 0 2.027.987"/><path d="m14 9l.92.793c.387.333.58.5.58.707s-.193.374-.58.707L14 12M7 9l-.92.793c-.387.333-.58.5-.58.707s.193.374.58.707L7 12m4.5-4l-2 5"/></g></svg>`, 
        titulo: 'Desarrollo Web', 
        texto: ' HTML, CSS, JavaScript y TypeScript en el frontend, y Node.js.',
    },
    {
        imagen: `<svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 16 16"><path fill="none" stroke="#FFB400" stroke-linejoin="round" d="M9 13.5h2m-2 0v-3m0 3H7m2-3h5.5v-8h-13v8H7m2 0H7m-2 3h2m0 0v-3M8 4v3m0 1.495h.005V8.5H8zm.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0Z"/></svg>`, 
        titulo: 'Reparación de Computadores', 
        texto: 'SoftWare y hardware.',
    },
    {
        imagen: `<svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24"><path fill="none" stroke="#FFB400" d="M6 2.75a.75.75 0 0 0-1.219-.586c-1.31 1.049-2.023 1.968-2.398 2.768A3.96 3.96 0 0 0 2 6.75c0 .946.477 1.78 1.204 2.275a2.4 2.4 0 0 0-.506.593c-.476.77-.698 1.947-.698 3.637c0 1.712.23 3.768.605 5.41c.186.816.417 1.569.692 2.134c.137.281.304.555.51.77c.206.211.523.436.943.436s.737-.225.942-.436a3 3 0 0 0 .51-.77c.276-.566.507-1.318.693-2.135a26 26 0 0 0 .605-5.41c0-1.69-.222-2.866-.698-3.636a2.4 2.4 0 0 0-.506-.593A2.75 2.75 0 0 0 7.5 6.75c0-.927-.436-1.574-.768-2.068l-.029-.043C6.313 4.058 6 3.58 6 2.75m-2.5 4v-.001c0-.298 0-.665.242-1.18c.168-.361.469-.819 1.012-1.371c.193.517.463.92.692 1.26l.012.018c.357.531.542.835.542 1.274a1.25 1.25 0 0 1-2.5 0m0 6.505c0-1.623.226-2.447.474-2.849a.8.8 0 0 1 .325-.317a1 1 0 0 1 .451-.084c.2 0 .343.031.451.084c.1.048.212.135.325.317c.248.402.474 1.226.474 2.849c0 1.601-.218 3.545-.567 5.076c-.176.77-.376 1.395-.579 1.811a3 3 0 0 1-.104.195a3 3 0 0 1-.104-.195c-.203-.416-.403-1.042-.579-1.811a24.6 24.6 0 0 1-.567-5.076m4.984.822a5 5 0 0 0 1.516.398V12.25A3.25 3.25 0 0 1 13.25 9h2.225a5 5 0 0 0-7.344-3.904a6.4 6.4 0 0 0-.548-.94l-.05-.074l-.179-.272A6.5 6.5 0 0 1 16.981 9h1.769A3.25 3.25 0 0 1 22 12.25v5.5A3.25 3.25 0 0 1 18.75 21h-5.5A3.25 3.25 0 0 1 10 17.75v-1.769a6.5 6.5 0 0 1-1.621-.335c.05-.53.086-1.058.105-1.569M18.75 10.5h-1.826a6.505 6.505 0 0 1-5.424 5.424v1.826c0 .966.784 1.75 1.75 1.75h5.5a1.75 1.75 0 0 0 1.75-1.75v-5.5a1.75 1.75 0 0 0-1.75-1.75m-7.25 3.9a5.01 5.01 0 0 0 3.9-3.9h-2.15a1.75 1.75 0 0 0-1.75 1.75z"/></svg>`, 
        titulo: 'diseño detallado', 
        texto: 'Un diseño minucioso con la usabilidad, accesibilidad, y la experiencia del usuario.',
    },
];

const Certificates = [
    {
        titulo1:'Platzi',
        texto1:'Estudiante',
        titulo2:'Curso Básico de Computadores e Informática',
        texto2:'Conocimientos sobre los conseptos basicos de una computadora y como sacarle el mayor rendimiendo',
        fecha:'Marzo - 15 - 2023'
    },
    {
        titulo1:'Platzi',
        texto1:'Estudiante',
        titulo2:'Curso de Java Spring',
        texto2:'Conocimientos en desarrollo backend empresarial, incluyendo el uso del framework Spring para la creación y gestión de endpoints, así como habilidades en el despliegue de aplicaciones.',
        fecha:'Noviembre - 06 - 2023'
    },
];

const Briefcase = [
    {
        imagen: '/logos/mesa-master.png', 
        titulo: 'Mesa Master', 
        texto: 'Mesa Master es una aplicación para gestionar y dar seguimiento a pedidos en negocios de comida rápida, optimizando tiempos y mejorando la atención al cliente.'
    },
    {
        imagen: '/logos/mesa-master.png', 
        titulo: 'Mesa Master', 
        texto: 'Mesa Master es una aplicación para gestionar y dar seguimiento a pedidos en negocios de comida rápida, optimizando tiempos y mejorando la atención al cliente.'
    },
    {
        imagen: '/logos/mesa-master.png', 
        titulo: 'Mesa Master', 
        texto: 'Mesa Master es una aplicación para gestionar y dar seguimiento a pedidos en negocios de comida rápida, optimizando tiempos y mejorando la atención al cliente.'
    },
    {
        imagen: '/logos/mesa-master.png', 
        titulo: 'Mesa Master', 
        texto: 'Mesa Master es una aplicación para gestionar y dar seguimiento a pedidos en negocios de comida rápida, optimizando tiempos y mejorando la atención al cliente.'
    },
    {
        imagen: '/logos/mesa-master.png', 
        titulo: 'Mesa Master', 
        texto: 'Mesa Master es una aplicación para gestionar y dar seguimiento a pedidos en negocios de comida rápida, optimizando tiempos y mejorando la atención al cliente.'
    },
    {
        imagen: '/logos/mesa-master.png', 
        titulo: 'Mesa Master', 
        texto: 'Mesa Master es una aplicación para gestionar y dar seguimiento a pedidos en negocios de comida rápida, optimizando tiempos y mejorando la atención al cliente.'
    },
];

const Languages = [
    {
        texto1:'Español',
        texto2:'80%',
        porcentaje:80
    },
    {
        texto1:'Ingles',
        texto2:'20%',
        porcentaje:20
    }
];

const ProgrammingLanguages = [
    {
        texto1:'JavaScript',
        texto2:'50%',
        porcentaje:50
    },
    {
        texto1:'TypeScript',
        texto2:'50%',
        porcentaje:50
    },
    {
        texto1:'Java',
        texto2:'40%',
        porcentaje:40
    },
    {
        texto1:'Python',
        texto2:'30%',
        porcentaje:30
    }
];

const Skills = [
    {
        texto:'Material UI'
    },
    {
        texto:'Material UI'
    },
];

const IconButtons = [
    {
        icono:'/logos/facebook.png',
        enlace:'https://www.facebook.com/jhonalexander.boterogomez.7/?locale=es_LA'
    },
    {
        icono:'/logos/github.png',
        enlace:'https://github.com/jhonbg'
    },
    {
        icono:'/logos/linkedin.png',
        enlace:'https://www.linkedin.com/in/jhon-alexander-botero-gomez-b6b643305/'
    },
];

export{Knowledges, Certificates, Briefcase, Languages, ProgrammingLanguages, Skills, IconButtons}