# Control of documents

## Bioinformaticians can benefit from a different QMS

Bioinformaticians work in a fairly different environment than other disciplines of the medical laboratory, and the classic Quality Management System (QMS) used by the medical laboratory is often impractical for Bioinformaticians' needs. ISO-15189 specifies: "Software procedures and related documentation need to be controlled". This can be in any form or type of medium, as long as a certain set of requirements is achieved. Software is normally developed and distributed using version control systems, such as [git](https://git-scm.com/). Platforms that provide repositories for these version control systems, like for example GitLab or GitHub, often offer extra functionalities related to code management by integrating the version control with other documentation or task management systems (for example to link a new release to a set of solved issues). Such integration possibilities makes them good candidates to provide a Bioinformatics QMS system. In this document, we offer guidelines on how to comply to ISO-15189 while implementing a Bioinformatics friendly QMS.

!!! note ""

    Note that, documentation outside of the medical laboratories QMS should be traceable, i.e. references need to be made to the Bioinformatics QMS where applicable. 

## ISO-15189 requirements

To allow for a Bioinformatics friendly QMS while complying to the ISO-15189:2022 requirements, the following aspects need to be considered and documented:

1. Documents are uniquely identified.
2. Documents are approved for adequacy before issued by authorized personnel who have the expertise and competence to determine adequacy.
3. Documents are periodically reviewed and updated as necessary.
4. Relevant versions of applicable documents are available at points of use and, where necessary, their distribution is controlled.
5. Changes and the current revision status of documents are identified.
6. Documents are protected from unauthorized changes and any deletion or removal.
7. Documents are protected from unauthorized access.
8. The unintended use of obsolete documents is prevented, and suitable identification is applied to them if they are retained for any purpose.
9. One paper or electronic copy of each obsolete controlled document is retained for a specified time period or in accordance with applicable specified requirements.

## Candidates for a Bioinformatics QMS

Bioinformaticians create workflows collaboratively on a computer using version control software. Git is a distributed version control system that tracks changes in any set of computer files. This can be used to track the changes of the code itself, but also of its usage in Standard Operating Procedures (SOPs).
Git provides unique identifiers to each change which can be used to integrate with documentation and issue management systems that allows to track issues and their resolution in detail. These integrations can also be used to identify each new release of a workflow and its newest features. As workflows often get upgraded and updated, the corresponding SOPs are subject to frequent changes as well.  

Examples of git based systems are:

1. GitHub pages
2. GitLab pages
3. Confluence

Many of these tools, if used in a specific way, can allow Bioinformaticians to work in a comfortable environment, while complying to the ISO-15189 requirements. There are multiple ways to implement such a system, and as long as it is documented how your system complies to the ISO-15189 requirements, all is well. 

## Example: The usage of [GitLab](https://about.gitlab.com/) as QMS

### Central gathering of all SOP on GitLab pages

Using GitLab pages and MkDocs, all SOPs can be stored in well structured documentation. Here we illustrate how GitLab complies to the ISO-15189:

1. Each SOP is a separate markdown file. Its name will include a number for easy and unique identification of the document. The numbering can also be used to classify each SOP into categories. Example:

-   10 - Data Access
    -   11 - ExternalSequencers -> 11_externalsequencers.md
    -   12 - InternalSequencers -> 12_internalsequencers.md
-   20 - Data Processing
    -   21 - WES -> 21_wes_flow.md
    -   22 - RNAseq -> 22_rnaseq_flow.md
-   30 - Data sharing
    -   31 - Cluster -> 31_share_cluster_user.md
    -   32 - External -> 32_share_external_user.md

 In this example, categories are used to seperate 3 flows: accessing data, processing data and sharing data, allowing intuitive navigation within the documentation depending on the action you are trying to perform.

2. The repository is set with special users type permissions and structure:

    - In a Git way, a **"main"** branch corresponds to the **"production"** documentation, and a **"develop"** branch mirrors the main branch at first, and will then accumulate modifications that need to appear in the upcoming release of the documentation.
    - **Members** can create issues to report inaccuracies or deficiencies within a specific document, or the need to create a new document.
    - From any issue, a branch can be created by a **Member** from the **"develop"** branch to work on fixing the issue.
    - Once the changes are ready, **Members** can submit their modification for review by a **Documentation manager** and if needed by an other additional **Members**.
    - **Members** and **Documentation managers** may go into one or several review processes to further edit and revise the document.
    - Once the document received its final modification, the **Document manager** can accept the merge request from **"feature"** to **"develop"**.
    - **Documentation managers** create new documentation releases by merging the **"develop"** branch into the **"main"** branch.
    - **Documentation managers** create a new tag corresponding to the new version of the documentation and document the new features added in this new tag.

3. At the footer of each page, you can see the date of last modification, which facilitates identification of outdated documents. However, a system must be put in place in order to ensure that each document is being periodically reviewed. This can be done in the format of a markdown table on the index page of the documentation, containing for each document its date of last modification and its status:

| Document                  | Date Last Modified | Up to date |
| ------------------------- | ------------------ | ---------- |
| 11_externalsequencers.md  | 23/10/2023         | yes        |
| 12_internalsequencers.md  | 23/10/2023         | yes        |
| 21_wes_flow.md            | 05/11/2022         | no         |
| 22_rnaseq_flow.md         | 25/12/2023         | yes        |
| 31_share_cluster_user.md  | 13/09/2023         | yes        |
| 32_share_external_user.md | 13/09/2023         | yes        |

This table should be edited by the **Documentation managers** when releasing a new version of the documentation, and can be reviewed periodically to check the status of each document.

4. The documentation is always available on GitLab to members of the Bioinformatics team. They can access only the production release.

5. On the GitLab repository of the documentation, it would be a convention to create a tag and a release for every production version released. Going to this tag directory, you can see what changed for each release and hence for each document. Everything can be traced back using commits. On the documentation itself, you can also show which version you are currently browsing with the tag number, to be certain of what you are looking at.

6. Only **Documentation managers** can remove or modify the production documentation. Each modification (which includes deletion) must be reviewed twice before being actually effectuated in production. First, a review is made from a **"feature"** to the **"develop"**, and then an other review will be made from **"develop"** to the **"main"**.

7. Only members of the GitLab team can access the documentation.

8. For each tag, you can access the release version of the documentation corresponding to the tag. So all is archived by default in an organized way.
