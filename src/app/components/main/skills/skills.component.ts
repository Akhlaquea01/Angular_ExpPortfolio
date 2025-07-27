import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-skills',
    imports: [CommonModule],
    templateUrl: './skills.component.html'
})
export class SkillsComponent {
  skills = [
    { svgPath: 'assets/images/logo/html.svg', name: 'HTML5', description: 'HTML5' },
    { svgPath: 'assets/images/logo/javascript.svg', name: 'JavaScript', description: 'JavaScript' },
    { svgPath: 'assets/images/logo/css.svg', name: 'CSS3', description: 'CSS3' },
    { svgPath: 'assets/images/logo/typescript.svg', name: 'TypeScript', description: 'TypeScript' },
    { svgPath: 'assets/images/logo/angular.svg', name: 'Angular', description: 'Angular Framework' },
    { svgPath: 'assets/images/logo/sass.svg', name: 'SCSS', description: 'Sass/SCSS' },
    { svgPath: 'assets/images/logo/nodejs.svg', name: 'Node.js', description: 'Node.js' },
    { svgPath: 'assets/images/logo/express.svg', name: 'Express', description: 'Express.js' },
    { svgPath: 'assets/images/logo/bootstrap.svg', name: 'Bootstrap', description: 'Bootstrap' },
    { svgPath: 'assets/images/logo/tailwind-css.svg', name: 'Tailwind CSS', description: 'Tailwind CSS' },
    { svgPath: 'assets/images/logo/mongodb.svg', name: 'MongoDB', description: 'MongoDB' },
    { svgPath: 'assets/images/logo/my-sql.svg', name: 'MySQL', description: 'MySQL' },
    { svgPath: 'assets/images/logo/redis.svg', name: 'Redis', description: 'Redis' },
    { svgPath: 'assets/images/logo/swagger.svg', name: 'Swagger', description: 'Swagger (API Docs)' },
    { svgPath: 'assets/images/logo/sonarqube.svg', name: 'SonarQube', description: 'SonarQube' },
    { svgPath: 'assets/images/logo/backstage.svg', name: 'Backstage', description: 'Backstage' },
    { svgPath: 'assets/images/logo/rookout.svg', name: 'Rookout', description: 'Rookout' },
    { svgPath: 'assets/images/logo/git.svg', name: 'Git', description: 'Git' },
    { svgPath: 'assets/images/logo/jira.svg', name: 'JIRA', description: 'JIRA' },
    { svgPath: 'assets/images/logo/datadog.svg', name: 'Datadog', description: 'Datadog (Monitoring & Debugging)' },
    { svgPath: 'assets/images/logo/bitbucket.svg', name: 'Bitbucket', description: 'Bitbucket (Version Control)' },
    { svgPath: 'assets/images/logo/gitlab.svg', name: 'GitLab', description: 'GitLab (Version Control)' },
    { svgPath: 'assets/images/logo/gocd.svg', name: 'GoCD', description: 'GoCD (CI/CD)' },
    { svgPath: 'assets/images/logo/Argo.webp', name: 'Argo CD', description: 'Argo CD (GitOps/CD)' },
    { svgPath: 'assets/images/logo/docker.webp', name: 'Docker', description: 'Docker (Containerization)' },
    { svgPath: 'assets/images/logo/kubernetes.png', name: 'Kubernetes', description: 'Kubernetes (Orchestration)' },
    { svgPath: 'assets/images/logo/rancher.svg', name: 'Rancher', description: 'Rancher (K8s Management)' },
    { svgPath: 'assets/images/logo/aws-color.png', name: 'AWS (EC2, S3)', description: 'Amazon Web Services (EC2, S3)' },
    { svgPath: 'assets/images/logo/postman.svg', name: 'Postman', description: 'Postman (API Testing)' },
    { svgPath: 'assets/images/logo/vs-code.png', name: 'Visual Studio Code', description: 'Visual Studio Code (Editor)' },
    { svgPath: 'assets/images/logo/cursor.png', name: 'Cursor', description: 'Cursor (Editor)' },
    { svgPath: 'assets/images/logo/ollama.png', name: 'Ollama', description: 'Ollama (AI Tool)' },
    { svgPath: 'assets/images/logo/openai.webp', name: 'OpenAI', description: 'OpenAI (AI Platform)' },
    { svgPath: 'assets/images/logo/openrouter.png', name: 'Open Router', description: 'Open Router (AI Tool)' },
    { svgPath: 'assets/images/logo/mcp.png', name: 'MCP servers', description: 'MCP servers (Infrastructure)' },
    // Add more skills as needed, but do not change svgPath values
  ];
}
