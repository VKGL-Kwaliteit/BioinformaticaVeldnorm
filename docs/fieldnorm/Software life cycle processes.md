# 1. Software life cycle processes

## 1.1 General
One of the main responsibilities of bioinformaticians within a diagnostic setting involves the development and maintenance of software used in diagnostic processes. Because ISO-15189 does not cover software development, it is essential that in-house software is created and maintained in accordance with recognized harmonized standards, such as IEC-62304. The IEC-62304 description of the software development life cycle (SDLC) is consistent with the practices of most software-centric entities. 

## 1.2 Software Development Life Cycle
SDLC processes that are commonly used include planning, requirements, architectural design, development, testing, deployment, and maintenance. Laboratories should establish documented guidelines that cover all SDLC stages.

## 1.2.1 Planning
Planning entails developing a comprehensive software development plan. This includes brainstorming the initial ideas, ideation of the final goal, determining the necessary resources, creating a schedule, and establishing achievable milestones. Bioinformaticians should establish a clear communication path with stakeholders during this stage to ensure that the plan meets the goal.
Within a laboratory, software development often occurs in the background of laboratory tests. The laboratory therefore needs to develop a solid strategy for change management for its tests that emphasizes all these features, and software development should be an integral part of this strategy.
Smaller-scale software development and maintenance cycles that might not affect other areas of a laboratory should maintain a similar strategy on a smaller scale and be less laborious, and they might use tooling that is more effective for software development, such as code based documentation, an online documentation system that is more suitable for software development planning (like Confluence, or wiki pages), an issue management system (like issue manager or Jira) or combinations thereof.
Guidelines should cover and define both large-scale and small-scale strategies.

_Note: Examples of small scale & large scale projects could be:_\
_-  Small-scale: the adaptation of a new component to existing software_\
_-  Large-scale: developing entirely new software or big refactors of existing software_

## 1.2.2 Requirements
This process involves gathering, documenting, and analyzing the software requirements. It includes capturing both functional and non-functional requirements that the software must fulfill to meet the intended use and comply with regulatory standards. One example strategy for capturing this, which is also well suited for medical laboratories, is to use user stories because stakeholders within a medical laboratory have very specific needs but are often not able to translate those into well-defined technical requirements.

Guidelines should support the following processes to gather, convert, track, and update the requirements during a project:

  a.   Collaboration between end users and developers when defining software requirements.

  b.  Convertion of users' requirements into small individual development tasks.

  c.  The option to manage tasks using a task management system integrated with your Git development system.

  d.  A plan for keeping in touch with end users throughout the different stages of the development process to avoid unexpected adjustments to requirements later on.

_NOTE: A widely adopted software development strategy involves dividing a development project over several periods. It is advised to use an approach that enables the release of partial deliverables to users each period, which enables user feedback upon each deliverable during the entire lifetime of the project, and provides ample opportunities for clarification of requirements or adapt their priorities._

A more thorough explanation of what requirements might include can be found in section (_link to "Requirements in software development"_) of this document.

## 1.2.3 Design
Here the software architecture is defined, describing the high-level structure, components, interfaces, and interactions of the software system. The architectural design lays the groundwork for the detailed design and implementation phases. 

The following processes should be covered by the design phase:

  a.  A coding policy that covers which language is used, how the language is formatted, do’s and don'ts, and the use of inline documentation. This policy is not to be strictly enforced but it will open discussions on how the team likes its code and lead to a more concise and unified coding strategy.

  b.  Laboratories will have to document the architecture when the software is classified as class B or C according to IEC-62304.

## 1.2.4 Development
The development stage will be the bulk of a project; here, code is created that will eventually define the software. The following processes are not required, as smaller bioinformatics teams might find them too difficult to incorporate. Nonetheless, it is strongly recommended that your guidelines include:

  a.  The usage of a decentralized code management system, such as git, together with a centralized repository, such as Github, Gitlab, or Bitbucket, that is seamlessly integrated with a task management system.

  b.  Writing code with unit and integration tests. Moreover, conducting regular code reviews is highly recommended. These methods will be invaluable during software maintenance, testing, and release. It enables a wider understanding of parts of the code, as unit tests often embody general usage as well as very specific exceptions, and code reviews enforce colleagues to have a look and understand what your code is doing.

  c.  Establishing a well-defined development & release cycle with set time periods for preparation, development, testing, & releasing. This allows multiple developers to work cohesively on the project and creates structured testing and release moments during the implementation and maintenance processes. It also enables ample opportunities for user reflection on the deliverables during the lifetime of projects.

## 1.2.5 Testing
Before implementation, software should be extensively tested, verified, and validated. While ISO 15189 does not provide specific guidelines on how to conduct software validation, it emphasizes the importance of ensuring that software is validated and verified following recognized industry standards. Software validation and verification should be performed in accordance with this document (_link to verification_validation_).

## 1.2.6 Implementation
Once everything is ready, there are a few key processes that should be included in guidelines to facilitate the release of the software:

  a.  The process for establishing a release. The exact time point at which software is released could be determined by a Development & Release cycle or be released in an independent manner. 
  
  b.  The process for performing a release should be well defined. 
  
  c.  The software functionality and release date should be clearly communicated to end users. 

## 1.2.7 Maintenance
Maintenance primarily centers around fixing bugs, monitoring the software, introducing new features, and upgrading to newer versions with new requirements. The process follows the same procedures as the development, testing, and implementation phases. Only certain maintenance processes that could possibly deviate from the normal procedures for development, testing, and implementation should be documented (hotfixes, for example).
