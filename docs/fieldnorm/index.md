# Introduction

In the past years bioinformatics has become a crucial part of several medical laboratories, such as Genetics, Pathology and Medical Microbiology. In the Netherlands these laboratories are certified according to ISO-15189 and have to follow European and national laws about the use of IT in a medical background and regulations about privacy and data protection. Hence, bioinformaticians need to comply to both the ISO-15189 and the IVDR.

The ISO-15189 does not include specific requirements for bioinformatic or software development processes.
The IEC-62304, however, is a harmonized standard about "Medical device software – Software life cycle processes" and can be used as a basis, as it satisfies the general requirements as described in ISO-15189 ^[Do we want to refer to a article here?].
Whilst the use of this standard remains voluntary, it nonetheless gives good guidance on how to achieve compliance with legal requirements.

We therefore used the IEC-62304 as a guide to create a field standard for bioinformatics, in order to make sure that the software we create is developed and manufactured in accordance with state-of-the-art principles for development life cycles, and risk management, including verification and validation, as required by the IVDR (Annex I, point 16). Note however, that we only focussed on the documentation needed for IEC-62304 Software Class A. ^[Hanneke's note: we need a separate page/subparagraph explaining these... and that whenever results from the pipeline are directly used in the clinic; hence, not seen by laboratory specialists, more documentation is needed, tried something with in/out of scope].

The main goal of this document is to give guidance on what should be documented to comply to the ISO-15189 norm and the IVDR. We tried to make pragmatic choices, and provide clarity on what should be documented.

While we were writing this field standard, it became clear to us that the size of bioinformatics teams varies. As a consequence, in particular when there is only a single bioinformatician working for the medical laboratory, some of the items described in this field standard will be rather difficult to incorporate. For example, reviewing each others code will be difficult when the team is very small. While this field standard does describe the need to comply to the IVDR and the ISO-15189, it might be impossible to comply to this field standard due to the lack of personnel. Make sure choices in such cases are well motivated and documented, and remember to revise these choices once the team has expanded.

## In scope

-   Bioinformatic workflows that generate results that are checked and interpreted under the supervision of trained clinical laboratory specialists.
-   Bioinformatic workflows that are in-house IVDs for which only article 5.5 of the IVDR applies.

## Out of scope

-   Bioinformatic workflows for which the results are used within health care institutions without interpretation under the supervision by trained clinical laboratory specialists. For these workflows more documentation is needed, as they are most likely Class B or C in the IEC-62304. The same holds for workflows that include AI. Personnel (6.2 in ISO-15189:2022), as this should be covered by QMS of the medical Laboratory already.
-   Datamanagement and retention periods of data are mentioned in another field norm ^[reference].
