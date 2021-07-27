import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);
const messages = {
    es: {
        home: {
            copete: 'Oportunidades nuevas para tus negocios',
            historia: 'Somos una empresa de servicios especializada en el desarrollo de soluciones de software.',
            more: 'Saber más',
            video: 'Video institucional',
            cart1: 'Diseño limpio',
            cart11: "Diseño simple y moderno.",
            cart2: "Datos Seguros",
            cart22: "Contamos con las medidas de seguridad que ustede necesita",
            cart3: "Código seguro",
            cart33: "Trabajamos con seguridad para su sistema",
        },
        navigate: {
            title: 'Good Job',
            home: 'Inicio',
            team: 'Nosotros',
            projec: 'Proyectos',
            contact: 'Contácto',

        },
        about: {
            copete: 'Consultoría de negocios.',
            copete1: 'Desde entonces ofrecemos servicios a empresas del país y el exterior, basándonos en nuestra amplia experiencia en el liderazgo de proyectos de software, diseño y desarrollo de aplicaciones, animación y tecnología aplicada a mejorar la gestión de nuestros clientes.',
            copete2: 'Desde entonces ofrecemos servicios a empresas del país y el exterior, basándonos en nuestra amplia experiencia en el liderazgo de proyectos de software, diseño y desarrollo de aplicaciones, animación y tecnología aplicada a mejorar la gestión de nuestros clientes.',
            copete3: 'Resolvemos necesidades para diversos tipos de clientes y mercados.Brindamos la información necesaria para evaluar, planificar y tomar decisiones.Diseñamos, implementamos y brindamos soluciones globales, para diversos tipos de negocio.',
        },
        contact: {
            copete: ' Complete el formulario y responderemos a la brevedad.',
            name: 'Nombre',
            email: 'E-mail',
            message: 'Mensaje',
            send: 'Enviar',
        },
        footer: {
            copete: ' Comenzamos nuestras actividades en el año 2018.',
        },
        spanish: 'Español',
        english: 'Inglés',
        portuguese: 'Portuguez'
    },
    en: {
        home: {
            copete: 'New opportunities for your businesses',
            historia: 'We are a service company specialized in the development of software solutions.',
            more: 'More',
            video: 'Institutional video',
            cart1: 'Clean design',
            cart11: "Simple and modern design.",
            cart2: "Secure Data",
            cart22: "We have the security measures you need",
            cart3: "Secure code",
            cart33: "We work safely for your system",
        },
        navigate: {
            title: 'Good Job',
            home: 'Home',
            team: 'Team',
            projec: 'Projects',
            contact: 'Contact',

        },
        about: {
            copete: 'Business consulting.',
            copete1: 'Since then we offer services to companies in the country and abroad, based on our extensive experience in leading software projects, design and development of applications, animation and applied technology to improve the management of our clients.',
            copete2: 'Since then we offer services to companies in the country and abroad, based on our extensive experience in leading software projects, design and development of applications, animation and applied technology to improve the management of our clients.',
            copete3: 'We solve needs for various types of customers and markets. We provide the necessary information to evaluate, plan and make decisions. We design, implement and provide global solutions for various types of business.',
        },
        contact: {
            copete: 'Complete the form and we will respond as soon as possible.',
            name: 'Name',
            email: 'E-mail',
            message: 'Message',
            send: 'Send',
        },
        footer: {
            copete: 'We started our activities in 2018.',
        },
        spanish: 'Spanish',
        english: 'English',
        portuguese: 'Portuguese'
    },
    br: {
        home: {
            copete: 'Novas oportunidades para seus negócios',
            historia: 'Somos uma empresa de prestação de serviços especializada no desenvolvimento de soluções de software.',
            more: 'Saber mais',
            video: 'Vídeo institucional',
            cart1: 'Design limpo',
            cart11: "Design simples e moderno.",
            cart2: "Dados Seguros",
            cart22: "Temos as medidas de segurança de que você precisa",
            cart3: "Código de segurança",
            cart33: "Trabalhamos com segurança para o seu sistema",
        },
        navigate: {
            title: 'Good Job',
            home: 'Começar',
            team: 'Nós',
            projec: 'Projetos',
            contact: 'Contato',

        },
        about: {
            copete: 'Consultoria de negócios.',
            copete1: 'Desde então prestamos serviços a empresas no país e no exterior, com base em nossa larga experiência na liderança de projetos de software, desenho e desenvolvimento de aplicações, animação e tecnologia aplicada para melhorar a gestão de nossos clientes.',
            copete2: 'Desde então prestamos serviços a empresas no país e no exterior, com base em nossa larga experiência na liderança de projetos de software, desenho e desenvolvimento de aplicações, animação e tecnologia aplicada para melhorar a gestão de nossos clientes.',
            copete3: 'Resolvemos necessidades de vários tipos de clientes e mercados, damos a informação necessária para avaliar, planear e tomar decisões, desenhamos, implementamos e fornecemos soluções globais para vários tipos de negócio.',
        },
        contact: {
            copete: ' Preencha o formulário e responderemos o mais breve possível.',
            name: 'Nome',
            email: 'E-mail',
            message: 'Mensagem',
            send: 'Mandar',
        },
        footer: {
            copete: ' Iniciamos nossas atividades em 2018.',
        },
        spanish: 'espanhol',
        english: 'inglês',
        portuguese: 'Português'
    },
    // fr: {
    //     hello: {
    //         world: 'Hello World!'
    //     },
    //     spanish: 'Spanish',
    //     english: 'English',
    //     portuguese: 'Portuguez'
    // },
    // it: {
    //     hello: {
    //         world: 'Hello World!'
    //     },
    //     spanish: 'Spanish',
    //     english: 'English',
    //     portuguese: 'Portuguez'
    // }

}

export const i18n = new VueI18n({
    locale: 'es',
    fallbackLocale: 'en',
    messages
})