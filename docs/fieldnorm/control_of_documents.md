# Control of documents

Bioinformaticians work in a git environment. Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordination work among programmers collaboratively developing source code during software development. Software procedures and related documentation needs to be controlled, and according to ISO-15189, this can be in any form or type of medium. For software development, there are several reasons to not include all the software documentation within the medical laboratories chosen quality management system.

- Software development is done in a distributed version control system. These systems are used for coordination work among programmers. Often these systems also allow for documentation of procedures. With the following advantages a. Automatically link to i.e. code, issues, releases, and release notes. b. Possibility to include code blocks that allow for copy-paste into the console/terminal. It’s fast and readable for bioinformaticians. For example, code blocks can be used for general procedures to start a pipeline, or for trouble shooting.
- Software development, and hence, corresponding documentation is prone to frequent updates. With the QMS of the laboratory, there are often waiting steps for different members of the laboratory to verify or authorize documentation. Hence, there might be a delay in release of a new version as the documentation of the previous release is not authorized yet.
- add more

To allow for a git-like QMS to be used by bioinformaticians the following aspects need to be considered, and documented within the QMS how compliance is achieved. ISO-15189:2022, 8.3.1

1. documents are uniquely identified;
2. documents are approved for adequacy before issue by authorized personnel who have the =expertise and competence to determine adequacy;
3. documents are periodically reviewed and updated as necessary;
4. relevant versions of applicable documents are available at points of use and, where necessary, their distribution is controlled;
5. changes and the current revision status of documents are identified;
6. documents are protected from unauthorized changes and any deletion or removal;
7. documents are protected from unauthorized access;
8. the unintended use of obsolete documents is prevented, and suitable identification is applied to them if they are retained for any purpose;
9. at least one paper or electronic copy of each obsolete controlled document is retained for a specified time period or in accordance with applicable specified requirements.

Examples are:

1. Github pages
2. Gitlab
3. Confluence