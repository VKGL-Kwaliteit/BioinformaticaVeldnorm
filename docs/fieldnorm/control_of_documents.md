# Control of documents

## Introduction 

Bioinformaticians work in a fairly different environement than biologists. The workflows they create, and the documentation that describe them, are all stored in files on a computer, and sometimes worked on by several person at the same time. So to follow the changes on both workflow and documentation, a more fitting system than the classic Quality Management System (QMS) offered for the biologists must be used. As specified in the ISO-15189, "Software procedures and related documentation needs to be controlled". This can be in any form or type of medium, as long as we achieve a certain set of requirements. In this document, we offer guidelines on how to comply with the norms while having a bioinformatician friendly QMS.

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

## Why do Bioinformaticians need a different QMS

Bioinformaticians create workflows collaboratively on a computer within a git environment. Git is a distributed version control system that tracks changes in any set of computer files. This can be used to track the changes of the code itself, but also in its documentation, which can describe the Standard Operating Procedures to use it. Git comes in with a set of features allowing to track issues and their resolution, new release of a workflow and its newest features. As the workflow often get upgraded and updated, their documentation, as well, is susceptible to change. Which is why many Bioinforaticians have turned their back from a standard QMS to have their own documentation system, often linked to git. Such system also offer possibilities to copy-paste code blocks while performing the SOP for a given flow, making it so much easier and less prone to errors. Examples of those documentations systems are:

1. Github pages
2. Gitlab pages
3. Confluence

Many of those tools, if used in a specific way, can allow Bioinformaticians to work in a comfortable environement, while complying to the ISO norms requirements. They are of course multiple ways to implement such a system, and as long as it is documented how your system complies to the ISO requirements, all is well. If you are looking for some inspirations, in the next paragraph we will describe an example on how to use one this tool to follow the ISO requirements for both controlling the workflows/software you develop, and their associated documentation/SOP.

## Example case : The usage of GitLab

### Central gathering of all SOP on Gitlab pages
_I wanted to add images to illustrates but I did not found out how_ :(

Using gitlab pages and mkdocs, you can easily create a beautiful hub to store all your SOP. If using the following guidelines, then you will comply with each of the ISO requirements mentionned above : 

1. Each SOP will become a markdown file. It's name will include a number for easy and unique identification of the document. The numbering can also be used to classify each SOP into categories. Example :
- 10 - Data Access
    - 11 - GenomeScan -> 11_genomescan.md
    - 12 - InternalSequencers -> 12_internalsequencers.md
- 20 - Data Processing
    - 21 - WES -> 21_wes_flow.md
    - 22 - RNAseq -> 22_rnaseq_analysis.md

2. The repository is set such only restricted people who manages the documentation approves new entries to be added into the main document (dev -> main). And rules are set so each new feature or entry is approved by the competent person before being accepted (feature -> dev)

3. The repository is set such as anyone who see something out to date can work on updating the document and make a request to the documentation managers so they can accept the update.  Besides, at the footer of each page, you can see the date of last modification.

4. The documentation is always available on gitlab by members of the Bioinformatic team. They can access only the production release to use as documentation material.

5. On the gitlab repository of the documentation, it would be a convention to create a tag and a release for every production version released. Going to this tag directory, you can see what changed for each released and what has been changed in which document. Everything can be traced back using commits.

6. No one else that the documentation managers can remove or modify the production documentation. Each modification (which includes deletion) must be reviewed twice before being actually effective in production. So there is a protectiob against accidental removals.

7. Only members of the gitlab team can access the documentation.

8. For each tag, you can access the version of the documentation at a certain timee. So all is archived by default in an organized way.


### Control of workflows

_Same here... I made beautifull images to explain and I can't include them here_ :(


