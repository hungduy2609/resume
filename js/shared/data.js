/**
 * Shared Data - Centralized CV Data
 * All CV data is stored here and shared across sections
 */

const CVData = {
    personalInfo: {
        name: 'Le Hung Duy',
        title: 'Automation Test Engineer',
        phone: '0339846786',
        email: 'lehungduy8@gmail.com',
        linkedin: 'linkedin.com/in/duyle2609',
        linkedinUrl: 'https://linkedin.com/in/duyle2609',
        avatar: 'resource/avatar.jpg',
    },
    profile: {
        description:
            'Passionate automation tester with 4+ years of experience in manual and automated testing. Skilled in designing robust automation frameworks, optimizing test strategies, and ensuring high-quality software solutions. A proactive problem-solver with a keen eye for efficiency and detail.',
        highlights: [
            {
                icon: 'quality',
                title: 'Quality Focus',
                description: 'Ensuring high-quality software solutions',
            },
            {
                icon: 'efficiency',
                title: 'Efficiency',
                description: 'Optimizing test strategies and frameworks',
            },
            {
                icon: 'problem-solving',
                title: 'Problem Solving',
                description: 'Proactive approach to challenges',
            },
        ],
    },
    workExperience: [
        {
            title: 'Middle Automation Test Engineer',
            company: 'Vietnam Silicon',
            period: 'July 2025 – Present',
            responsibilities: [
                'Design and implement advanced automation frameworks to improve test coverage and efficiency.',
                'Collaborate with cross-functional teams to define testing strategies and best practices.',
                'Develop and maintain comprehensive test automation suites using modern tools and technologies.',
                'Analyze test results, identify trends, and provide actionable insights for quality improvement.',
                'Contribute to continuous improvement of testing processes and methodologies.',
            ],
        },
        {
            title: 'Automation Test Engineer',
            company: 'NashTech',
            period: '2022 – June 2025',
            responsibilities: [
                'Designed, developed, and maintained robust automation test scripts to optimize testing efficiency and coverage using Cypress, Rest Assured, and .NET framework.',
                'Wrote and executed comprehensive manual test cases to ensure software quality.',
                'Refined and implemented test strategies, proactively tracked quality metrics, and mitigated risks to enhance overall test effectiveness.',
                'Collaborated closely with teams to define test strategies, improve automation coverage, and streamline testing efforts.',
                'Investigated and analyzed test results, identified critical defects, and ensured timely resolution through effective defect tracking.',
                'Contributed to risk and issue management, providing insights to improve test planning and execution.',
            ],
        },
    ],
    skills: {
        programming: ['JavaScript', 'Java', 'C#', 'Python', 'SQL'],
        automationTools: ['Cypress', 'Playwright', 'Robot Framework', 'Rest Assured', 'Selenium'],
        cicd: ['Git', 'GitLab', 'Azure DevOps', 'Github Actions'],
        testingFrameworks: ['JUnit', 'TestNG', 'Cucumber', 'Postman', 'Jira', 'Azure DevOps', 'Grafana'],
        messaging: ['ActiveMQ', 'Service Bus'],
        methodologies: ['Agile Scrum', 'BDD', 'TDD', 'Manual Testing'],
    },
    projects: [
        {
            name: 'DT',
            isCurrent: true,
            duration: 'July 2025 - Present',
            teamSize: 40,
            description: 'Durian traceability system for tracking and managing durian products throughout the supply chain.',
            technologies: ['Playwright', 'Cucumber', 'Github Actions', 'Jira', 'Axios'],
            position: 'Middle Automation Tester',
            responsibilities: [
                'Design and implement test automation frameworks using Playwright and Cucumber',
                'Set up CI/CD pipelines with Github Actions for automated testing',
                'Collaborate with development teams to ensure test coverage and quality',
                'Manage test execution and reporting using Jira',
                'Develop API testing solutions using Axios',
            ],
        },
        {
            name: 'Pivotal ODC',
            isCurrent: false,
            duration: 'July 2024 - June 2025',
            teamSize: 10,
            description:
                "Pivotal is Jaguar Land Rover's monthly car subscription service that gives clients access to a range of Jaguar and Land Rover vehicles. Pivotal can take care of everything for clients including insurance, tax, and servicing. They offer services for hybrid car subscriptions, as well as petrol and diesel car subscriptions.",
            technologies: ['Java SpringBoot', 'ReactJS', 'Google Cloud Platform', 'GitLab', 'Salesforce', 'Cypress', 'Rest Assured', 'Jira'],
            position: 'Automation Tester',
            responsibilities: [
                'Provide input for estimating the automation testing for particular functional requirement areas',
                'Participate in building the automated testing tools',
                'Develop, maintain, and enhance the automation test scripts',
                'Participate in the review of project requirements to understand test objectives',
                'Build automated testing tools and scripts for driving application tests',
                'Define, develop, implement, and maintain the automation test scripts',
                'Record and maintain source control of automation scripts',
                'Do manual testing when needed',
                'Support developers to replicate issues when required',
                'Collect relevant quality metrics for project team',
                'Contribute to risk and issue management for team',
            ],
        },
        {
            name: 'NHS Professionals',
            isCurrent: false,
            duration: 'April 2023 - June 2024',
            teamSize: 15,
            description: 'NHS Professionals (NHSP) is the leading provider of flexible workforce solutions to the NHS, with over 180,000 members. NHSP runs the largest NHS flexible staff bank, placing temporary workers in NHS Trusts to meet their needs.',
            technologies: ['.NET', 'Angular', 'Azure DevOps', 'SQL Server', 'CosmosDB', 'Postman', 'Grafana', 'Service Bus'],
            position: 'Manual Tester',
            responsibilities: [
                'Participated in reviewing and analyzing project requirements to understand testing objectives',
                'Collaborated with team members to develop effective strategies and test plans',
                'Developed manual test cases and prioritized testing activities',
                'Executed all manual test cases, reported defects, and defined severity and priority',
                'Prepared reports related to the software testing conducted',
                'Ensured all testing activities were carried out in accordance with defined standards',
                'Supported developers in replicating issues when required',
                'Collected relevant quality metrics for the project team',
                'Contributed to risk and issue management for the team',
            ],
        },
        {
            name: 'ToS ODC',
            isCurrent: false,
            duration: 'Jan 2022 - Jan 2023',
            teamSize: 10,
            description: 'TBA is a leading company providing integrated software solutions to simplify the operations of ports, terminals and warehouses.',
            technologies: ['.NET Core', 'Angular', 'Entity Framework', 'Azure DevOps', 'SQL Server', 'Cypress', '.NET', 'Grafana', 'ActiveMQ'],
            position: 'Automation Tester',
            responsibilities: [
                'Reviewed and analyzed project requirements to understand testing objectives',
                'Logged and documented bugs in detail to facilitate resolution',
                'Created and executed test scripts to validate system functionality and performance',
                'Provided support to team members to ensure smooth collaboration',
                'Actively participated in all project-related meetings',
                'Reproduced bugs and analyzed defects to identify root causes',
                'Rotated as the host of daily meetings to facilitate team discussions',
            ],
        },
    ],
    education: [
        {
            icon: 'education',
            title: "Bachelor's Degree, Computer Science",
            institution: 'Ton Duc Thang University',
            period: '2018 – 2022',
        },
        {
            icon: 'certification',
            title: 'ISTQB – CTFL',
            institution: 'Foundation Level',
            period: '2018',
        },
        {
            icon: 'award',
            title: 'Test Engineer of the Year 2024',
            institution: 'Awarded by NashTech',
            period: '2024',
            isHighlight: true,
        },
    ],
};
