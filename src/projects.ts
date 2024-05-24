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
    tags: ["React", "TypeScript", "TailwindCSS", "Vite"],
  },
  {
    title: "Android: Quiz App",
    description: "A simple quiz app for Android",
    link: "https://github.com/JasperLefever/MyTrivia-android",
    tags: ["Kotlin", "Android Compose"],
  },
  {
    title: "iOS: Quiz App",
    description: "A simple quiz app for iOS",
    link: "https://github.com/JasperLefever/QuizGame-iOS",
    tags: ["Swift", "SwiftUI", "IOS17"],
  },
  {
    title: "Quiz App API",
    description: "The API that gets used by the Quiz Apps",
    link: "https://github.com/JasperLefever/QuizApi-vapor",
    tags: ["Vapor", "Swift", "SQLite"],
  },
  {
    title: "Simple library application",
    description:
      "My first spring boot application to manage books in a library",
    link: "https://github.com/JasperLefever/OpdrachtEWDJ_Bibliotheek",
    tags: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
  },
];

export default projects;
