# 1. Software life cycle processes

## 1.1 General
One of the main responsibilities of Bioinformaticians within a diagnostic setting involves the development and maintenance of software used in diagnostic processes. Because ISO-15189 does not cover software development, it is essential that inhouse software is created and maintained in accordance with recognized harmonized standards, such as IEC-62304. The IEC-62304 description of the software development life cycle (SDLC) is consistent with the practices in most software-centric entities. 

## 1.2 Software Development Life Cycle
SDLC processes that are commonly used include planning, requirements, architectural design, development, testing, deployment and maintenance. Laboratories should establish documented guidelines that cover all SDLC stages.

## 1.2.1 Planning
Planning entails developing a comprehensive software development plan. This includes brainstorming the initial ideas, ideation of the final goal, determining the necessary resources, creating a schedule and establishing achievable milestones. 
Within a laboratory software development often occurs within the background of laboratory tests. The laboratory therefore needs to develop a solid strategy for change management for its genetic tests that emphasizes all these features, and software development should be an integral part of this strategy. 
Smaller scale software development and maintenance cycles that might not affect other areas of a genetic lab should maintain a similar strategy on a smaller scale and less laborious, and might use tooling that is more effective for software development, such as code based documentation, an online documentation system that are more suitable for software development planning (like confluence, or wikipages), an issue management system (like issue manager or jira) or combinations thereof.
Guidelines should cover both strategies, large scale and small scale.

## 1.2.2 Requirements
This process involves gathering, documenting, and analysing the software requirements. It includes capturing both functional and non-functional requirements that the software must fulfil to meet the intended use and comply with regulatory standards. One strategy for capturing this, which is also well suited for genetic laboratories is to use user stories, as stakeholders within a genetic laboratory have very specific needs but are often not able to translate those in well defined technical requirements.

Guidelines should support the following processes to gather, convert, track and update the requirements during a project:  

  a.       Collaborate closely with end users of the software when defining requirements.

  b.       Convert end users' requirements into small individual development tasks.

  c.       Utilize a task management system integrated with your Git development system to manage tasks.

  d.       Maintain communication with end users throughout the development life cycle in order to prevent unexpected adjustments to requirements in later stages of development.

NOTE: A widely adopted software development strategy involves dividing a development project over several periods. It is advised to use an approach that enables to release partial deliverables to users each period, which enables user feedback upon each deliverable during the entire lifetime of the project, and provides ample opportunities for clarification of requirements or adapt their priorities.   

## 1.2.3 Design
Here the software architecture is defined, describing the high-level structure, components, interfaces, and interactions of the software system. The architectural design lays the groundwork for the detailed design and implementation phases.

## 1.2.4 Development
The development stage will be the big bulk of a project, here code is created that will eventually define the software.

  a.       Usage of a decentralized code management system, such as git, together with a centralised repository, such as Github, Gitlab or Bitbucket, that is seamlessly integrated with a task management system, is strongly recommended.

  b.       Have a coding policy that covers which language is used, how the language is formatted, do’s and don’ts, the use of inline documentation. This policy is not to be strictly enforced, but will open discussions on how the team likes its code and will lead to a more concise and unified coding strategy.

  c.       Write code with unit and integration tests. Moreover, conducting regular code reviews is highly recommended. These steps are crucial for code verification and will be invaluable during software maintenance, testing, and release phases. It enables a wider understanding of parts of the code as unit tests often embody general usage as well as very specific exceptions and code reviews enforce colleagues to have a look and understand what your code is doing.

  d.       Establish a well-defined development and release cycle with set time periods for preparation, development, testing & releasing. This allows multiple developers to work cohesively on the project and creates structured testing and release moments during the implementation and maintenance processes. It also enables ample opportunities for user reflections on the deliverables during the lifetime of project.

## 1.2.5 Testing
Before implementation, software should be extensively tested, verified and validated. While ISO 15189 does not provide specific guidelines on how to conduct software validation, it emphasizes the importance of ensuring that software is validated and verified following recognized industry standards. Software validation and verification should be performed in accordance with this document (_link to verification_validation_).

## 1.2.6 Implementation
Once everything is ready, a clear time point should be determined to release the software. The exact time point at which a software is released can be determined by the Development & Release cycle or released in an independent matter. The software functionality and release date should be clearly communicated with the end users.

## 1.2.7 Maintenance
Maintenance is primarily centers around fixing bugs, monitoring the software, introducing new features and upgrading to newer versions with new end-users requirements . There should be a clear guideline for how new features, bug fixes and new versions are implemented into the software, preferably using the Development & Release cycle. A systematic approach will streamline the maintenance process and improve overall software quality and reliability.

## 2.1 Development & Release cycle
Bioinformaticians are advised to have a clearly determined Development & Release cycle procedure with set time periods for preparation, development and testing & releasing of features. Having a Development & Release cycle allows multiple developers to work on the same project in an organized manner. It also creates a platform for creating structural testing and release moments for the implementation and maintenance SDLC process steps. An example of a release cycle would be 1 week of preparation, 3 weeks of development followed by 1 week of Testing & releasing which overlaps with the first week (preparation) of the next cycle, resulting in a development & release cycle of 4 weeks.

Preparation. During preparation goals of the release cycle are set. Within this phase requirements should become clear, and converted into tasks. These tasks are tracked in a task management system and are linked to the development cycle and resources are allocated to them. The goal of the cycle should be to finish and release all tasks that are determined in this phase.

Development. During development, Git branches for tasks are created and worked on. Once a branch is finished, it will be merged back into the develop branch. Before merging back into the develop branch, It is crucial to write and perform unit and integration tests, and therefore it is advised to use a test-driven-development strategy during this phase. Finally, documentation that is supplemented to your changes are written and stored in the correct location.

Testing & Releasing. During this phase, release branches will be created from all develop branches that have new features introduced to them. Release branches will be uploaded to a test environment where all unit tests, integration tests and end to end test will be performed to verify that the new features did not induce any unforeseen changes. Once testing is done, the release branch will be merged back to the master branch and released into production. A release should be communicated to the users of the system.
