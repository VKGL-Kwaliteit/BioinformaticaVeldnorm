# Control of documents

## Bioinformaticians can benefit from a different QMS

_Bioinformaticians_ work in a fairly different environment than other disciplines of the medical laboratory, and the classic Quality Management System (QMS) offered to biologists is often impractical for _Bioinformaticians_ needs. As specified in the ISO-15189, "Software procedures and related documentation needs to be controlled". This can be in any form or type of medium, as long as a certain set of requirements is achieved. Software is developed and distributed using version control systems, such as Git or GitLab. Those often offer extra functionalities related to code (e.g. linking a new release with a set of solved issues), which makes them good candidates to be a _Bioinformatician_ QMS system. In this document, we offer guidelines on how to comply to ISO-15189 while implementing a _Bioinformatician_ friendly QMS.

## ISO norm requirements

To allow for a _Bioinformatician_ friendly QMS while complying to the ISO-15189:2022 requirements, the following aspects need to be considered and documented:

1. Documents are uniquely identified.
2. Documents are approved for adequacy before issue by authorized personnel who have the expertise and competence to determine adequacy.
3. Documents are periodically reviewed and updated as necessary.
4. Relevant versions of applicable documents are available at points of use and, where necessary, their distribution is controlled.
5. Changes and the current revision status of documents are identified.
6. Documents are protected from unauthorized changes and any deletion or removal.
7. Documents are protected from unauthorized access.
8. The unintended use of obsolete documents is prevented, and suitable identification is applied to them if they are retained for any purpose.
9. One paper or electronic copy of each obsolete controlled document is retained for a specified time period or in accordance with applicable specified requirements.

## Candidates for a Bioinformatician friendly QMS

_Bioinformaticians_ create workflows collaboratively on a computer within a Git environment. Git is a distributed version control system that tracks changes in any set of computer files. This can be used to track the changes of the code itself, but also of its usage in Standard Operating Procedures (SOPs). Git comes in with a set of handy features, allowing to track issues and their resolution, or to identify each new release of a workflow and its newest features for example. As workflows often get upgraded and updated, their usage in SOP is susceptible to frequent changes as well. Examples of those documentations systems are:

1. GitHub pages
2. GitLab pages
3. Confluence

Many of those tools, if used in a specific way, can allow _Bioinformaticians_ to work in a comfortable environment, while complying to the ISO norms requirements. There are of course multiple ways to implement such a system, and as long as it is documented how your system complies to the ISO-15189 requirements, all is well. In order to illustrate how this could be accomplished, in the next paragraph we will give an example of how to use Gitlab in order to follow the ISO requirements for both controlling the workflows/software you develop, and their associated documentation/SOP.

## Example case: The usage of GitLab

### Central gathering of all SOP on GitLab pages

Here we provide an example of how GitLab can be used as a _Bioinformaticians_ QMS. We will show that by using GitLab pages and MkDocs, all SOPs can be stored in a well structured _documentation_. Below are some guideline to illustrate the point of attention to comply with ISO-15189:

1. Each SOP becomes a separate markdown file. Its name will include a number for easy and unique identification of the document. The numbering can also be used to classify each SOP into categories. _Example_:

-   10 - Data Access
    -   11 - ExternalSequencers -> 11_externalsequencers.md
    -   12 - InternalSequencers -> 12_internalsequencers.md
-   20 - Data Processing
    -   21 - WES -> 21_wes_flow.md
    -   22 - RNAseq -> 22_rnaseq_flow.md
-   30 - Data sharing
    -   31 - Cluster -> 31_share_cluster_user.md
    -   32 - External -> 32_share_external_user.md

Here we separate 3 flows in categories: accessing data, processing data and sharing data, allowing intuitive navigation within your documentation depending on the action you are trying to perform.

2. The repository is set with special users type permissions and structure:

    - In a Git way, a **"main"** branch corresponds to the **"production"** _documentation_, and a **"dev"** branch mirrors the main branch at first, and will then accumulate modifications that need to appear in the upcoming release of the _documentation_.
    - **Members** can create issues to report inaccuracies or deficiencies within a specific document, or the need to create a new document.
    - From any issue, a branch can be created by a **Member** from the **dev** branch to work on fixing the issue.
    - Once the changes are ready, **Members** can submit their modification for review by a **Documentation manager** and if needed by an other additional **Members**.
    - **Members** and **Documentation managers** may go into one or several review processes to further edit and revise the document.
    - Once the document received its final modification, the **Document manager** can accept the merge request from **feature** to **dev**.
    - **Documentation managers** create new documentation releases by merging the **dev** branch into the **main** branch.
    - **Documentation managers** create a new tag corresponding to the new version of the _documentation_ and document the new features added in this new tag.

3. At the footer of each page, you can see the date of last modification, which facilitates identification of outdated documents. However, a system must be put in place in order to ensure that each document is being periodically reviewed. This can be done in the format of a markdown table on the index page of the documentation, containing for each document its date of last modification and its status:

| Document                  | Date Last Modified | Up to date |
| ------------------------- | ------------------ | ---------- |
| 11_externalsequencers.md  | 23/10/2023         | yes        |
| 12_internalsequencers.md  | 23/10/2023         | yes        |
| 21_wes_flow.md            | 05/11/2022         | no         |
| 22_rnaseq_flow.md         | 25/12/2023         | yes        |
| 31_share_cluster_user.md  | 13/09/2023         | yes        |
| 32_share_external_user.md | 13/09/2023         | yes        |

This table should be edited by the **Documentation managers** when releasing a new version of the _documentation_, and can be reviewed every month to check the status of each document.

4. The _documentation_ is always available on GitLab to members of the _Bioinformatic team_. They can access only the production release to use as documentation material.

5. On the GitLab repository of the _documentation_, it would be a convention to create a tag and a release for every production version released. Going to this tag directory, you can see what changed for each release and what has been changed in which document. Everything can be traced back using commits. On the _documentation_ itself, you can also show which version you are currently browsing with the tag number, to be certain of what you are looking at.

6. Only **Documentation managers** can remove or modify the production documentation. Each modification (which includes deletion) must be reviewed twice before being actually effectuated in production. First, a review is made from a **feature** to the **dev**, and then an other review will be made from **dev** to the **main**.

7. Only members of the GitLab team can access the documentation.

8. For each tag, you can access the release version of the documentation corresponding to the tag. So all is archived by default in an organized way.
