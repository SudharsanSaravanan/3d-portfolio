import { personal } from "../assets/images";
import {
    github,
    linkedin,
    leaf,
    hospital,
    moltov,
    mail
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
        title: "React Web Application Developer",
        company_name: "Personal",
        icon: personal,
        iconBg: "#accbe1",
        date: "Dec 2024 - Jan 2025",
        points: [
            "Led the development of multiple React applications and mentored junior developers.",
            "Built 'Leaf Link', a real-time messaging app using React.js and Firestore, implementing responsive UI with Bootstrap 5 and Material UI.",
            "Developed 'Moltov', a movie trailer streaming app that fetches real-time data from TMDB API, showcasing expertise in API integration and state management.",
            "Focused on creating seamless user experiences by efficiently handling application state and optimizing performance.",
        ],
    }
];


export const socialLinks = [
    {
        name: 'Mail',
        iconUrl: mail,
        link: 'mailto:sudharsansaravanan2623@gmail.com',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/SudharsanSaravanan',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sudharsan-saravanan-456544299/',
    }
];

export const projects = [
    {
        iconUrl: moltov,  // Replace with actual image URL or asset
        theme: 'btn-back-red',
        name: 'Moltov - Movie Trailer Streaming App',
        description: 'A React.js-based movie streaming app that fetches real-time movie data from TMDB API. The app features an intuitive UI, efficient state management, and smooth API integrations.',
        technologies: ["React.js", "Node.js", "Axios", "Firebase"],
        link: 'https://github.com/SudharsanSaravanan/MOLTOV-StreamingApp',
    },
    {
        iconUrl: leaf,  // Replace with actual image URL or asset
        theme: 'btn-back-green',
        name: 'Leaf-Link - Real-Time Messaging App',
        description: 'Developed a messaging application using React.js and Firestore, with responsive UI implemented using Bootstrap 5 and Material UI. Ensured smooth real-time data synchronization for instant communication.',
        technologies: ["React.js", "Firestore", "Material UI"],
        link: 'https://github.com/SudharsanSaravanan/Leaf-Link-MessagingApp',
    },
    {
        iconUrl: hospital,  // Replace with actual image URL or asset
        theme: 'btn-back-blue',
        name: 'Hospital Management System',
        description: 'A DSA-based project utilizing Min-Heap Priority Queue, Graph (Adjacency List), and Binary Search Tree (BST) to prioritize patient care. Implemented Dijkstra’s algorithm for efficient room allocation, streamlining hospital operations.',
        technologies: ["Python", "Heap", "Graph Algorithms", "Dijkstra’s Algorithm"],
        link: 'https://github.com/SudharsanSaravanan/Hospital_Mangement_System',
    }
];