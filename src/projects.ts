interface Project {
    title: string;
    description: string;
    link?: string;
    images?: string[];
    tags: string[];
}

const projects: Project[] = [
    {
        title: "Portfolio website",
        description: "This very website!",
        link: "https://jasperlefever.com",
        tags: [ "React", "TypeScript", "TailwindCSS", "Vite" ],
    },
    {
        title: "Rebella - Natural beauty salon in Ghent",
        description: "Rebella Web is a modern single-page application for a high-end beauty salon in Ghent, Belgium, specializing in natural treatments. The website features a multi-page experience with service showcases, an image gallery, contact information with interactive maps, and integrated booking functionality.",
        link: "https://rebella.gent",
        tags: [ "React", "TypeScript", "TailwindCSS", "Vite", "Reponseive Design" ],
    },
    {
        title: "Android: Quiz App",
        description: "A simple quiz app for Android",
        link: "https://github.com/JasperLefever/MyTrivia-android",
        tags: [ "Kotlin", "Android Compose" ],
    },
    {
        title: "iOS: Quiz App",
        description: "A simple quiz app for iOS",
        link: "https://github.com/JasperLefever/QuizGame-iOS",
        tags: [ "Swift", "SwiftUI", "IOS17" ],
    },
    {
        title: "Quiz App API",
        description: "The API that gets used by the Quiz Apps",
        link: "https://github.com/JasperLefever/QuizApi-vapor",
        tags: [ "Vapor", "Swift", "SQLite" ],
    },
    {
        title: "Simple library application",
        description:
            "My first spring boot application to manage books in a library",
        link: "https://github.com/JasperLefever/OpdrachtEWDJ_Bibliotheek",
        tags: [ "Java", "Spring Boot", "Thymeleaf", "MySQL" ],
    },
    {
        title: "Zatre",
        description:
            "A first java project where we had to make the Zatre board game in JavaFX",
        tags: [ "Java", "JavaFX", "MySQL" ],
    },
    {
        title: "SVK delivery control information system",
        description:
            "A school project(group) where we had to make a system that could store images of a specific order. That later could be used to check if damage was done during transport and who was responsible for it. This included an android app to take pictures, a web app for data retrieval and a shared backend",
        tags: [
            ".NET",
            "C#",
            "Blazor",
            "Android",
            "Kotlin",
            "MsSQL",
            "Android compose",
        ],
    },
    {
        title: "Delaware B2B webshop",
        description:
            "A school project where we had to make a B2B webshop for delaware. It included a react frontend and a node.js backend with a JavaFX spring boot admin panel",
        tags: [
            "React",
            "JavaScript",
            "Node.js",
            "TypeScript",
            "Koa",
            "Zod",
            "MySql",
            "JavaFX",
            "Spring Boot",
        ],
    },
    {
        title: "Backend: Video sharing platform like YouTube",
        description:
            "A school project where i made a lite version of YouTube where people can like, comment and upload videos",
        tags: [ "Node.js", "Koajs", "MySQL", "Prisma", "Joi validation" ],
    },
    {
        title: "Frontend: Video sharing platform like YouTube",
        description:
            "A school project where i made a lite version of YouTube where people can like, comment and upload videos",
        tags: [ "React", "JavaScript", "Bootstrap" ],
    },
    {
        title: "Bachelor thesis: A study on AI frontend slicing tools (Dutch)",
        description:
            "A study on AI frontend slicing tools and how they can be used to improve the frontend development process.",
        tags: [ "React", "Typescript", "TailwindCSS", "Builder.io", "GPT4V", "AI" ],
    },
];

export default projects;
