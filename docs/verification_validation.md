# Software Verification & Software Validation

_Software verification_ and _Software validation_ is necessary to ensure clinical accuracy of the analysis performed.

The following citation is taken from IMDRF/SaMD WG/N23 FINAL:2015 "Software as a Medical Device (SaMD): Application of Quality Management System "

!!! quote "Verification and Validation"

    The verification and validation (V&V) activities should be targeted towards the criticality and impact to patient safety of the SaMD, as discussed in IMDRF/SaMD WG/N12.
    Typically, verification (providing assurance that the design and development activity at each development stage conforms to the requirements) and validation
    (providing reasonable confidence that the software meets its intended use/user needs and operational requirements) activities ensure that all elements from the SaMD design
    and development—including any changes made during maintenance/upgrades—have been implemented correctly and that objective evidence of this implementation is recorded.

In short, Barry Boehm expressed the difference between the software verification and software validation as follows:

> **Verification**: Are we building the product right?          
> **Validation**: Are we building the right product?

Hence, for each release _Software verification_ **and** _Software validation_ is required.

## Software verification

The IEC-62304 mentions different aspects of verification; i.e. software unit verification and software integration testing, and validation; i.e. software system test.

Testing whether the code is correctly developed should be done on different levels, such as:

-   Code reviews
-   Unit testing
-   Integration testing
-   End to end workflow tests

In case of automated testing, there must be a procedure of how the results are checked. I.e. a merge request is not possible when automated testing fails, or registering the passing of all automated testing among other verification results. The extent of software verification performed by the Bioinformaticians will differ in each team, it should be clear from the procedure which software verification should be performed.

## Software validation

In order to support the repeatability of the validation, the following must be registered:

-   The person executing the test
-   The person evaluating the test
-   Date of the test
-   The software tested, including its version or commit number
-   If applicable: configuration, hardware, testing tools
-   The test, including steps to take the test, expected results and acceptance criteria
-   The results, including samples used
-   The evaluation of the test
-   Conclusion of the test

Software validation tests should be executed by an end user and preferably independent from the person who developed and wrote the software. For example, someone from the laboratory when the end result is mostly used by the laboratory, or a bioinformatician when bioinformatics expertise is needed for performing the validation.

ISO-15189 states that the validation shall be as extensive as is necessary and confirm, through the provision of objective evidence in the form of performance specifications, that the specific requirements for the intended use of the examination have been fulfilled. This indicates that depending on the amount of changes of the new release, the validation could be any length. Sometimes a single note could be enough. For example, for a hotfix where the paths are now correctly stated, a note saying "tested in the first production run, the result files are now saved in the corrected path". Or “Only an integration test has been performed due to a change of a parameter. There were no issues with the first analysis”. There should always be a record of the validation.

Depending on the changes in the software, and in particular for the first version of the software a performance evaluation is needed. MDCG 2020-1 (Guidance on Clinical Evaluation (MDR) / Performance Evaluation (IVDR) of Medical Device Software) could help in determining the extend of the validation and/or the number of samples needed. Note that, this guidance helps with Chapter VI of the IVDR, which is not mentioned in article 5.5 for in house developed tests, but could give guidance to define the extend of your validation. For example the following points taken from MDCG 2020-1.

!!! quote

    ### Sufficient amount

    -   Does the data support the intended use, indications, target groups, clinical claims and
        contraindications?
    -   Have the clinical risks and analytical performance/clinical performance been investigated?
    -   Have relevant MDSW’s characteristics, such as the data input and output, the applied algorithms
        or type of interconnection been considered when generating the data to support the performance of
        the device?
    -   What is the grade of innovation/history on the market (how big is the body of scientific evidence)?
    -   Other, as applicable.

    ### Sufficient quality

    -   Were the type and the design of the study/test appropriate to meet the research objectives?
    -   Was the data set appropriate and actual (state of the art)?
    -   Was the statistical approach appropriate to reach a valid conclusion?
    -   Were all ethical, legal and regulatory considerations/requirements taken into account?
    -   Is there any conflict of interest?

For Human Genetics, specific GIAB samples are used for performance evaluation. In general, depending on the intended purpose of the software, several specific samples can be selected to validate the software. For updated tools, one could use the previously validated results for comparison. For new tools, one could choose to validate the outcome by eye, for example in IGV.

## Choice of tools and/or settings

A subject missing in _software verification_ and _software validation_ is how specific tools and/or settings have been selected. One could add a section to the _software validation_ document with an introduction into the issue, the choices made, the results, and the conclusions.

## Builds, databases, reference sets etc.

Bioinformatic workflows often use (external) databases, reference sets, or specific genome builds. The link to them could be hardcoded, hence, updating them should follow software verification and validation as described above. The clinical validation of new database/reference set/genome build could be done either with the medical laboratories validation procedures or the software validation. Choose the kind of validation that works best for this particular update. Note that, linking to external databases for which changes and updates cannot be foreseen is a risk. Validate these databases with each release, this could be a simple check whether the functionality is still present. Make sure you have a risk assessments on these external databases.
