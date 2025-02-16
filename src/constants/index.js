import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: "https://skillicons.dev/icons?i=html",
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=css",
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=js",
        name: "JavaScript",
        type: "Programming Language",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=py",
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=java",
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=cpp",
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=react",
        name: "React",
        type: "Frontend Framework",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=nodejs",
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=mysql",
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=firebase",
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=materialui",
        name: "Material UI",
        type: "Frontend Framework",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=electron",
        name: "Electron",
        type: "Desktop Development",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=vercel",
        name: "Vercel",
        type: "Deployment",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=git",
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=github",
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=linux",
        name: "Linux",
        type: "Operating System",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=ubuntu",
        name: "Ubuntu",
        type: "Operating System",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=eclipse",
        name: "Eclipse",
        type: "IDE",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=vscode",
        name: "VS Code",
        type: "IDE",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=netlify",
        name: "Netlify",
        type: "Deployment",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=threejs",
        name: "Three.js",
        type: "3D Graphics",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=tailwind",
        name: "Tailwind CSS",
        type: "Frontend Framework",
    },
    {
        imageUrl: "https://skillicons.dev/icons?i=vite",
        name: "Vite",
        type: "Build Tool",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];