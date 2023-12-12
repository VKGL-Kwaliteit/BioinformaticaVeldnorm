# Software Verification & Software Validation

_Software verification_ and _Software validation_ is necessary to ensure clinical accuracy of the analysis performed.

The following citation is taken from IMDRF/SaMD WG/N23 FINAL:2015 "Software as a Medical Device (SaMD): Application of Quality Management System "

> Verification and Validation
> The verification and validation (V&V) activities should be targeted towards the criticality and impact to patient safety of the SaMD, as discussed in IMDRF/SaMD WG/N12.Typically, verification (providing assurance that the design and development activity at each development stage conforms to the requirements) and validation (providing reasonable confidence that the software meets its intended use/user needs and operational requirements) activities ensure that all elements from the SaMD design and development—including any changes made during maintenance/upgrades—have been implemented correctly and that objective evidence of this implementation is recorded.

In short, Barry Boehm expressed the difference between the software verification and software validation as follows:

> Verification: Are we building the product right?
> Validation: Are we building the right product?

Often these definitions do not match with the definitions used in the medical laboratory. However, in terms of software development and thus bioinformatics, following software verification and software validation definitions make more sense. Noteworthy, the ISO-15189 states that validation is needed for laboratory designed or developed methods and for validated methods subsequently modified. Both are true for software development.

The IEC-62304 mentiones different aspects of verifation; i.e. software unit verification and software integration testing, and validation; i.e. software system test.

## Software verification

Testing whether the code is correctly developed can be done on different levels, for example through:

- Code reviews
- Unit testing
- Integration testing

## Software validation

In order to support the repeatability of the validation, the following must be registered:

- The person executing the test
- The person evaluating the test
- Date of the test
- The software tested, including its version number
- If applicable: configuration, hardware, testing tools
- The test, including steps to take the test, expected results and acceptance criteria
- The results, including samples used
- The evaluation of the test
- Conclusion of the test

The person executing the test should be independent from the person who developed the software and wrote the validation. Software validation is preferably executed by an end user. For example, someone from the laboratory when the end result is mostly used by the laboratory.

ISO-15189 states that the validation shall be as extensive as is necessary and confirm, through the provision of objective evidence in the form of performance specifications, that the specific requirements for the intended use of the examination have been fulfilled. This indicates that depending on the amount of changes of the new release, the validation could be any length. Sometimes a single note could be enough. For example, for a hotfix where the paths are now correctly stated, a note saying "tested in the first production run, the result files are now saved in the corrected path". Or “Only an integration test has been performed due to a change of a parameter. There were no issues with the first analysis”. There should always be a record of the validation.

Depending on the changes in the software, and in particular for the first version of the software a performance evaluation is needed. MDCG 2020-1
(Guidance on Clinical Evaluation (MDR) / Performance Evaluation (IVDR) of Medical Device Software) could help in determining the extend of the validation and/or the number of samples needed.
In particular:

> Sufficient amount
>
> - Does the data support the intended use, indications, target groups, clinical claims and
>   contraindications?
> - Have the clinical risks and analytical performance/ clinical performance been investigated?
> - Have relevant MDSW’s characteristics, such as the data input and output, the applied algorithms
>   or type of interconnection been considered when generating the data to support the performance of
>   the device?
> - What is the grade of innovation/ history on the market (how big is the body of scientific evidence)?
> - Other, as applicable.
>   Sufficient quality
> - Were the type and the design of the study/ test appropriate to meet the research objectives?
> - Was the data set appropriate and actual (state of the art)?
> - Was the statistical approach appropriate to reach a valid conclusion?
> - Were all ethical, legal and regulatory considerations/ requirements taken into account?
> - Is there any conflict of interest?

For Human Genetics, specific GIAB samples are used for performance evaluation. In general, depending on the intended purpose of the software, several specific samples can be selected to validate the software. For updated tools, one could use the previously validated results for comparison. For new tools, one could choose to validate the outcome by eye, for example in IGV.

## Choice of tools and/or settings

A subject missing in _software verification_ and _software validation_ is how specific tools and/or settings have been selected. One could add a section to the _software validation_ document with an introduction into the issue, the choices made, the results, and the conclusions.
