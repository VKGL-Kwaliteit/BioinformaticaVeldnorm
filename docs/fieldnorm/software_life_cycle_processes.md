<style type="text/css">
    ol { list-style-type: lower-alpha; }
</style>

# Software Development Life Cycle processes
One of the main responsibilities of bioinformaticians within a diagnostic setting involves the development and 
maintenance of software used in diagnostic processes. 
The IEC-62304 description of the software development life cycle (SDLC) is consistent with the practices of most 
software-centric entities. 
SDLC processes that are commonly used include planning, requirements, architectural design, development, testing, 
deployment, and maintenance. Laboratories should establish documented guidelines that cover all SDLC these stages.

## 1. Planning
Planning entails developing a comprehensive software development plan. 
This includes brainstorming the initial ideas, ideation of the final goal, determining the necessary resources, 
creating a schedule, and establishing achievable milestones. 
Bioinformaticians should establish a clear communication path with stakeholders during this stage to ensure 
that the plan meets the goal. 
Within a laboratory, software development often occurs in the background of laboratory tests. 
The laboratory therefore needs to develop a solid strategy for change management for its tests that emphasizes all these 
characteristics, and software development should be an integral part of this strategy. 
Smaller-scale software development and maintenance cycles that might not affect other areas of a laboratory should 
maintain a similar strategy, although on a smaller scale and less demanding.
Guidelines should cover and define both large-scale and small-scale strategies.

> 📝 _Note: Examples of small scale and large scale projects could be:_
> - _Small-scale: the adaptation of a new component to existing software_
> - _Large-scale: developing entirely new software, big refactors of existing software or changes to algorithms_


## 2. Requirements
This process involves gathering, documenting, and analyzing the software requirements. 
It includes capturing both functional and non-functional requirements that the software must fulfill to meet the 
intended use and comply with regulatory standards. 
One example strategy for capturing this, which is also well suited for medical laboratories, is to use user stories, 
as stakeholders in a medical laboratory have very specific needs 
and often find it difficult to translate these into well-defined technical requirements.

Guidelines should support the following processes to gather, convert, track, and update the requirements during a project:
1. Collaboration between end users and developers when defining software requirements. 
2. Conversion of users' requirements into small, individual development tasks.
3. A plan for keeping in touch with end users throughout the different stages of the development process 
   to avoid unexpected adjustments to requirements later on.


> 📝 _Note:  
> A widely adopted software development strategy involves dividing a development project over several periods. 
> It is advised to use an approach that enables the release of partial deliverables to users each period, 
> which enables user feedback upon each deliverable during the entire lifetime of the project, 
> and provides ample opportunities for clarification of requirements or adapt their priorities._

A more thorough explanation of what requirements might include can be found in section [Requirements in software development](requirements.md) of this document.

## 3. Design
Here the software architecture is defined, describing the high-level structure, components, interfaces, 
and interactions of the software system. 
The architectural design lays the groundwork for the detailed design and implementation phases. 

The following processes should be covered by the design phase:
1. A coding policy that covers which language is used, how the language is formatted, dos and don'ts, and the use of inline documentation. 
   This policy is not to be strictly enforced, however it will open discussions on how the team likes its code 
   and lead to a more concise and unified coding strategy.
2. Laboratories will have to document the architecture when the software is classified as class B or C according to 
   IEC-62304.

## 4. Development
The development stage will be the bulk of a project; here, code is created that will eventually define the software. 
Therefore, the laboratories' software development process should include the use of:
1. A decentralized code management system, such as git, together with a centralized repository, 
   such as GitHub, GitLab, or Bitbucket.
2. A task management system seamlessly integrated with your git development system to track and manage development tasks.

The following processes are not required, as small bioinformatics teams might find them too difficult to incorporate. 
Nonetheless, it is strongly recommended that your guidelines should also include:
3. A well-defined development and release cycle with set time periods for preparation, development, testing, and releasing. 
   This allows multiple developers to work cohesively on the project and creates structured testing and release moments during the implementation and maintenance processes. It also enables ample opportunities for user reflection on the deliverables during the lifetime of projects.
4. Writing code with unit and integration tests. Moreover, conducting regular code reviews is highly recommended. These methods will be invaluable during software maintenance, testing, and release. It enables a wider understanding of parts of the code, as unit tests often embody general usage as well as very specific exceptions, and code reviews enforce colleagues to have a look and understand what your code is doing.

## 5. Testing
Before implementation, software should be extensively tested, verified, and validated. 
While ISO 15189 does not provide specific guidelines on how to conduct software validation, 
it emphasizes the importance of ensuring that software is validated and verified following recognized industry standards. 
Software validation and verification should be performed in accordance to this document [Software Verification & Software Validation](verification_validation.md).

## 6. Implementation
Once everything is ready, there are a few key processes that should be included in guidelines to facilitate the release of the software:
1. The process for establishing a release. The exact time point at which software is released could be determined 
   by a Development & Release cycle or be released in an independent manner. 
2. The process for performing a release should be well-defined. 
3. The software functionality and release date should be clearly communicated to end users. 

## 7. Maintenance
Maintenance primarily centers around fixing bugs, monitoring the software, introducing new features, 
and upgrading to newer versions with new requirements. 
The process follows the same procedures as the development, testing, and implementation phases. 
Only certain maintenance processes that deviate from the normal procedures for development, testing, 
and implementation should be documented (hotfixes, for example).

## Hotfixes
Hotfixes are updates which are directly uploaded in to the actual live software without going through the development, 
testing and implementation phases of the SDLC. They are meant as a quick way to fix unforeseen but process breaking bugs. 
In general, having well-defined development, testing and implementation processes would negate the need for hotfixes. However, there is always the possibility for bugs to occur. The laboratory should have clear guidelines on how and when hotfixes are performed. 

> 📝 _Note: hotfixes could be classified as non-conforming work and might need to be followed up through the laboratories QMS, more on this in [user feedback](https://github.com/VKGL-Kwaliteit/BioinformaticaVeldnorm/blob/feature/user_feedback/docs/fieldnorm/user_feedback.md)_
