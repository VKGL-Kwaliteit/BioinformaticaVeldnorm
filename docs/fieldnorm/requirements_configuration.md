# Requirements and configuration management

The complexity and variety of developments in the field of bio-informatics, comes with a need for clear prerequisites before the start of a project on the one hand and concise regulation of development versioning on the other. Unfortunately, neither is described for application to medical devices by the ISO-15189, unlike the IEC-62304, which does disclose types of requirements that should be documented.

## 1. Requirements in software development
The requirements of software should be clear before starting on a project and describe the prerequisites that the software should meet for it to be considered as completed. The requirements may relate to the performance of the desired software, the physical characteristics, the computing environment, a need for compatibility, input- and output-structures, interfaces to other systems, communication from the software, security requirements, user interfaces to the software, data definitions, installation and acceptance requirements, requirements related to the methods of operation and maintenance, network-related requirements, user maintenance requirements and regulatory requirements.

1.1. Forming requirements: All software development projects should have a standardized approach for gathering requirements. Requirements can come from end-users, bio-informaticians, or other stakeholders. It is essential to document these requirements clearly and track them throughout the development process. It is recommended to write the requirements in a form that is SMART (specific, measurable, attainable, realistic and time-bound), but this may not always apply to the situation.

1.2. Documentation: All requirements should be documented (e.g. JIRA, Confluence, GitHub/GitLab).

1.3. Requirement validation: Requirements should be validated before the release is used in production. 

1.4: Requirement adaptations: Any changes or updates to these requirements should be carefully reviewed and documented.

## 2. Configuration management
The configuration management is essential when keeping track of different versions of software that may exhibit different capabilities and dependencies. Therefore, each release of a new version of a piece of software should be labeled with a version number for reference purposes. These version releases may be related to updates of different sizes (e.g. they may concern a major change in structure and capability, or they may just entail a small bugfix).

2.1. Versioning: Each release of software should be identifiable by a specific version number.

2.2. Versioning scheme: A standardized versioning scheme should be implemented for software components. The version number should follow the format "major.minor.hotfix," adhering to the Semantic Versioning principles.

2.3. Major changes: Major version updates indicate significant changes that are usually not backward compatible. They may include structural changes or changed dependencies. The exact definition may differ between workplaces and should be discussed and documented clearly.

2.4. Minor changes: Minor version updates usually represent the addition of new features or functionality without breaking compatibility with the existing system. The exact definition may differ between workplaces and should be discussed and documented clearly.

2.5. Hotfixes: Hotfixes address critical bugs and issues that require immediate attention. They do not introduce new features and are used to quickly restore errors in code that were not detected during testing.

