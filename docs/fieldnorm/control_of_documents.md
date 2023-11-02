# Control of documents

## Why do Bioinformaticians need a different QMS

Bioinformaticians work in a fairly different environement than biologists, and the classic QMS offered to biologists are often impractical for Bioinformaticians needs. Here is a list of the most wanted features :

- Code blocks can be copy/pasted safely, as opposed to standard QMS word or pdf format which introduce erroneous changes on some special characters (such as "-")
- Linking versions of the documentation with the corresponding release number of the documented tool
- Let the documentation update process be in the hands of Bioinformatician when changes in software must take place immediately, without getting in a stale review process when involving laboratory members

As specified in the ISO-15189, "Software procedures and related documentation needs to be controlled". This can be in any form or type of medium, as long as a certain set of requirements is achieved. Software are developped and distributed using a version control system, such as git or gitlab. Those often offer extra functionnalities related to code (e.g. : linking a new release with a set of solved issues), which make them good candidate to be a Bioinformatician QMS system. In this document, we offer guidelines on how to comply with the norms while implementing a bioinformatician friendly QMS. 

## ISO norm requirements

To allow for a "Bioinformatician friendly" QMS, the following aspects need to be considered and documented :

1. Documents are uniquely identified
2. Documents are approved for adequacy before issue by authorized personnel who have the expertise and competence to determine adequacy
3. Documents are periodically reviewed and updated as necessary
4. Relevant versions of applicable documents are available at points of use and, where necessary, their distribution is controlled
5. Changes and the current revision status of documents are identified
6. Documents are protected from unauthorized changes and any deletion or removal
7. Documents are protected from unauthorized access
8. The unintended use of obsolete documents is prevented, and suitable identification is applied to them if they are retained for any purpose
9. One paper or electronic copy of each obsolete controlled document is retained for a specified time period or in accordance with applicable specified requirements

## Candidates for a Bioinformatician friendly QMS

Bioinformaticians create workflows collaboratively on a computer within a git environment. Git is a distributed version control system that tracks changes in any set of computer files. This can be used to track the changes of the code itself, but also in its documentation, which can describe the Standard Operating Procedures to use it. Git comes in with a set of features allowing to track issues and their resolution, new release of a workflow and its newest features. As the workflow often get upgraded and updated, their documentation, as well, is susceptible to change. Which is why many Bioinformaticians their own form of QMS. Examples of those documentations systems are:

1. Github pages
2. Gitlab pages
3. Confluence

Many of those tools, if used in a specific way, can allow Bioinformaticians to work in a comfortable environement, while complying to the ISO norms requirements. They are of course multiple ways to implement such a system, and as long as it is documented how your system complies to the ISO requirements, all is well. If you are looking for some inspirations, in the next paragraph we will describe an example on how to use one this tool to follow the ISO requirements for both controlling the workflows/software you develop, and their associated documentation/SOP.

## Example case : The usage of GitLab

### Central gathering of all SOP on Gitlab pages

Using gitlab pages and mkdocs, you can easily create well structured and easy to naviguate hub to store all your SOPs. Here are some guideline to illustrates the point of attention to comply with ISO-15189 :

1. Each SOP becomes a markdown file. Its name will include a number for easy and unique identification of the document. The numbering can also be used to classify each SOP into categories. _Example_ :
   
- 10 - Data Access
    - 11 - ExternalSequencers -> 11_externalsequencers.md
    - 12 - InternalSequencers -> 12_internalsequencers.md
- 20 - Data Processing
    - 21 - WES -> 21_wes_flow.md
    - 22 - RNAseq -> 22_rnaseq_flow.md
- 30 - Data sharing
    - 21 - Cluster -> 31_share_cluster_user.md
    - 22 - External -> 32_share_external_user.md      

 Here we seperate 3 flows in categories : accessing data, processing data and sharing data, ✨ _allowing smoothe and logical navigation within your documentation_ ✨  (sorry guys, I can't help it, I need my _beautiful_ sentences)

2. The repository is set with special users type permissions and structure :
    - In a git way, a __"main"__ branch corresponds to the __"production"__ documentation, and a __dev__ branch mirrors the main branch at first, and will then accumulates modification that needs to appear in the upcoming release of the documentation
    - __Members__ can create issues to report something incorrect with a specific document, or the need to create a new document
    - From any issue, a branch can be created by a __member__ from the __dev__ branch to work on fixing the issue
    - Once the changes are ready, __members__
    - __Documentation managers__ create new documentation releases (dev -> main)And rules are set so each new feature or entry is approved by the competent person before being accepted (feature -> dev)

3. At the footer of each page, you can see the date of last modification, which facilitates identification of outdated documents. However, a system must be put in place in order to check each document is being periodically reviewed. This could be done in the format of a markdown table on the index page of the documentation :

Insert Here fancy table, coming soon

4. The documentation is always available on gitlab by members of the Bioinformatic team. They can access only the production release to use as documentation material.

5. On the gitlab repository of the documentation, it would be a convention to create a tag and a release for every production version released. Going to this tag directory, you can see what changed for each released and what has been changed in which document. Everything can be traced back using commits.

6. No one else that the documentation managers can remove or modify the production documentation. Each modification (which includes deletion) must be reviewed twice before being actually effective in production. So there is a protectiob against accidental removals.

7. Only members of the gitlab team can access the documentation.

8. For each tag, you can access the version of the documentation at a certain timee. So all is archived by default in an organized way.



