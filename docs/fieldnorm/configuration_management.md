# Configuration management

Configuration management is essential when keeping track of different versions of software that may exhibit different capabilities and dependencies. Therefore, a concise regulation of development versioning should be in place. Each release of a new version of software should be identifiable by a specific version number for reference purposes. These version releases may be related to updates of different sizes (e.g. they may concern a major change in structure and capability, or they may just entail a small bugfix). A standardized versioning scheme should be implemented for software components. The version number should follow the format `major.minor.patch`, adhering to the Semantic Versioning principles (see [https://semver.org](https://semver.org)). This number may be extended if necessary (e.g. `major.minor.patch.build`), so long as it at least contains the major, minor and patch numbers and it is documented clearly.

-   **Major changes:** In general, major version updates indicate significant changes that are not backward compatible. They may include structural changes or changed dependencies.
-   **Minor changes:** Minor version updates usually represent the addition of new features or functionality without breaking compatibility with the existing system.
-   **Patches:** Patches address critical bugs and issues that require immediate attention. They do not introduce new features and can be used to quickly restore errors in code that were not detected during testing. They may also include small updates with little change to the software.

The exact definitions of these kinds of updates may differ between workplaces and should be discussed and documented clearly.
