# Introduction

In the past years bioinformatics has become a crucial part of several medical laboratories, such as Genetics , Pathology and Medical Microbiology. 
Hence, bioinformaticians need to comply to both the ISO-15189 and the IVDR. 

However, the ISO-15189 does not include bioinformatic or software development processes. 
Fortunately, the IEC-62304 exists, which is a harmonized standard about "Medical device software – Software life cycle processes". 
The use of this standard remains voluntary, however, it gives good guidance to demonstrate compliance with legal requirements. 

We took the IEC-62304 as a guidance to create a field standard for bioinformatics, to make sure that the software we create is developed and manufactured in accordance with the state-of-the-art taking into account the principles of development life cycle, risk management, including verification and validation, as required by the IVDR (Annex I, point 16). Note that, we only focussed on the documentation needed for IEC-62304 Software Class A.  <Hanneke's note: we need a separate page/subparagraph explaining these... and that whenever results from the pipeline are directly used in the clinic; hence, not seen by laboratory specialists, more documentation is needed, tried something with in/out of scope>

The main goal of this document is to give guidance to what should be documented to comply to the ISO-15189 and the IVDR. 
We tried to make pragmatic solutions, and clarity on what should be documented. 

While writing this field standard, it became clear that the size of bioinformatics teams differs. 
In particular, when there is only a single bioinformatician working for the medical laboratory, some of the items described in this field standard will be rather impossible. For example, reviewing each others code will be difficult. 
While the field standard does describe the needs to comply to the IVDR and the ISO-15189, it might be impossible to comply to the field standard due to the lack of personnel. 
Make sure choices about no compliance are reasoned and documented, and revise these choices once the team has expanded. 

## In scope
Bioinformatic workflows that generate results that are checked and interpreted by a trained laboratory specialist. 
Bioinformatic workflows that are in-house IVDs for which only article 5.5 of the IVDR applies. 

## Out of scope
Bioinformatic workflows for which the results are used within health care institutions without interpretation by a laboratory specialist. For these workflows more documentation is needed, as they are most likely Class B or C in the IEC-62304. The same holds for workflows that include AI.  
Personnel (6.2 in ISO-15189:2022), as this should be covered by QMS of the Medical Laboratory already. 
Datamanagement and retention periods of data.
