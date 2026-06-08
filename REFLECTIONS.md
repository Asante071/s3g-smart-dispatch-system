# Reflection

One of the main challenges in developing the S³G Smart Dispatch System was balancing the needs of multiple stakeholders. For example, IT managers required detailed analytics, while engineers preferred simple task views. Additionally, improving system performance while maintaining real-time updates required careful design decisions.

Another challenge was ensuring that the system remains scalable while still being feasible as an individual project. Trade-offs had to be made between complexity and implementation time.

Overall, this process improved understanding of requirement engineering and the importance of aligning system features with stakeholder needs.

# Reflection – Assignment 5

This assignment required translating stakeholder requirements into use case models and test cases, which proved to be both challenging and insightful. One of the main challenges was ensuring that all stakeholder concerns identified in Assignment 4 were accurately represented in the use cases. This required careful mapping between user roles and system interactions.

Another challenge was defining clear relationships between use cases, particularly identifying where inclusion relationships should be applied. For example, logging a ticket must always include SLA calculation, which then triggers engineer recommendation. Ensuring these relationships were logically structured required a deeper understanding of UML modeling.

Developing test cases also presented challenges, particularly in aligning them with functional requirements. It was important to ensure that each requirement had a corresponding test case to validate system behavior. Additionally, defining non-functional tests such as performance and security required thinking beyond functionality into system quality attributes.

Balancing simplicity and completeness was another key challenge. While the system is a prototype, it was necessary to ensure that documentation reflects real-world software engineering practices. This included maintaining consistency across assignments and ensuring traceability between requirements, use cases, and test cases.

Overall, this assignment significantly improved my understanding of requirements engineering, system modeling, and validation. It highlighted the importance of structured documentation and the role it plays in developing reliable and scalable systems.

# Reflection – Assignment 6

One of the main challenges in this assignment was prioritizing user stories effectively. As a single developer acting as both stakeholder and scrum team, it was difficult to balance technical complexity with user value.

Estimating effort using story points also required careful consideration, as some features appeared simple but involved complex logic, such as SLA calculation and engineer recommendation.

Another challenge was maintaining alignment with previous assignments while adapting to Agile methodology. Ensuring traceability between requirements, use cases, and user stories required structured thinking.

This assignment improved my understanding of Agile planning, backlog prioritization, and sprint structuring, highlighting the importance of iterative development and delivering value early through an MVP.

# Reflection – Assignment 7

One of the main challenges in this assignment was selecting the most appropriate GitHub template for Agile development.

Customizing the Kanban board required careful thinking about workflow stages. Adding "Testing" and "Blocked" improved visibility and task tracking.

Another challenge was ensuring that tasks from previous assignments aligned with the Kanban workflow.

Comparing GitHub Projects with tools like Trello and Jira showed that GitHub provides strong integration with code management, although it has fewer advanced features.

Overall, this assignment improved my understanding of Agile workflows and Kanban boards.

# Reflection – Assignment 8

One of the main challenges in this assignment was determining the appropriate level of detail for both state and activity diagrams. Including too many states or actions made the diagrams complex, while too little detail reduced clarity.

Another challenge was aligning the diagrams with previously defined functional requirements and user stories. This required careful mapping to ensure consistency across all assignments.

State diagrams focus on how individual system objects behave over time, showing transitions between states. In contrast, activity diagrams focus on workflows and processes, showing how tasks are performed step by step.

Understanding this distinction helped improve the design and modeling of the system.

Overall, this assignment enhanced my ability to model system behavior and strengthened my understanding of UML diagrams and their role in software design.

# Reflection – Assignment 9

One of the main challenges in this assignment was identifying the correct level of abstraction for domain entities. Deciding which components should be modeled as classes required careful consideration of system responsibilities and interactions.

Another challenge was defining relationships between entities. For example, determining whether relationships should be modeled as associations or compositions required understanding how tightly coupled components are within the system.

Aligning the class diagram with previous assignments was also important. The Ticket entity, for instance, directly reflects functional requirements such as SLA monitoring and dispatching, while the DispatchEngine aligns with use cases related to engineer recommendation.

Trade-offs were made between simplicity and completeness. While inheritance could have been introduced, the design prioritizes clarity and maintainability by focusing on associations and responsibilities.

This assignment enhanced my understanding of object-oriented design principles, particularly encapsulation, modularity, and separation of concerns. It also highlighted the importance of aligning system structure with behavior and requirements.

# Reflection on Open-Source Collaboration

Working on the S³G Smart Dispatch System project provided valuable experience in preparing a software engineering project for open-source collaboration. Throughout this assignment, I learned how important documentation, onboarding, and repository structure are when allowing external contributors to participate in a project.

One of the major improvements made to the repository was the addition of contributor-focused documentation. I created a CONTRIBUTING.md file to guide contributors through project setup, testing, coding standards, and pull request processes. This significantly improved the accessibility of the project for new contributors. I also added a ROADMAP.md document to communicate the future vision of the project and identify areas where contributors could participate.

Another improvement involved configuring GitHub collaboration features such as issue labels, pull request workflows, branch protection, and CI/CD automation using GitHub Actions. Creating labeled issues such as “good-first-issue” and “feature-request” made the repository more welcoming to new contributors. It also demonstrated how real-world software teams organize development tasks and onboarding opportunities.

One of the challenges encountered during the assignment was ensuring compatibility between local development environments and GitHub Actions on Linux runners. There were multiple debugging sessions involving folder naming, package imports, and workflow configuration. Resolving these issues improved my understanding of CI/CD pipelines, Linux path sensitivity, and automated testing environments.

Another challenge involved designing documentation that would be understandable for contributors with different levels of technical experience. Writing clear setup instructions and maintaining consistent repository organization required careful attention to detail.

This assignment also taught me the importance of community engagement in open-source projects. Features such as repository stars, forks, pull requests, issue tracking, and peer collaboration help improve software quality and encourage teamwork. Open-source collaboration is not only about writing code but also about communication, documentation, testing, and project management.

Overall, this assignment helped me develop practical software engineering and DevOps skills while exposing me to real-world GitHub collaboration practices. I gained valuable experience in repository management, contributor onboarding, CI/CD automation, issue tracking, and collaborative development workflows.


## Last Open Source Contributions

For this task, I contributed to three open-source software engineering projects by submitting documentation-focused pull requests.

The first contribution was made to the Access-Learn project, where I improved the README file by adding project badges. This enhancement improves the presentation of the repository and makes important project information visible at a glance.

The second contribution was made to the Finance-Management-System project. I improved the contributor documentation by adding branch naming conventions, contribution workflow guidance, and best practices for contributors. These additions help standardize collaboration and improve onboarding for future contributors.

The third contribution was made to the AI-Adaptive-Learning-System project. I enhanced the roadmap documentation by proposing future development goals related to personalized learning dashboards, AI-powered recommendations, student progress tracking, and real-time performance insights.

Through these contributions, I gained practical experience with:

* Forking repositories
* Creating feature branches
* Making documentation improvements
* Creating commits with meaningful messages
* Pushing changes to GitHub
* Creating pull requests
* Collaborating within open-source workflows

This assignment reinforced the importance of documentation, collaboration, version control, and contribution workflows in modern software engineering projects.
