# Risk management

Both the ISO-15189 and the IVDR ask for risk management. The ISO-15189 requires risk management of the bioinformatics processes, e.g. SDLC, use of github, compute cluster, storage. The IVDR requires risk management of the in-house IVDs, hence all in-house developed software, e.g. analysis software. 

The bioinformatics risk assessment should integrate with the laboratory risk management procedure, which can use the existing method described in the laboratories QMS, such as SAFER (Stop, Assess, Formulate, Execute, and Review) or FMEA (Failure Modes and Effects Analysis). 

The risk management of bioinformatics processes and developed software should mention how often the risk analysis should be updated. While the bioinformatics processes could follow the medical laboratories revision period, it is recommended to revise the risk analysis for each release of software. Consequently, the risk analysis of developed software needs more frequent revision compared to that of tests in the medical laboratory. Maintaining two distinct documents — one for the laboratory test and another for bioinformatics software — could optimize the risk management process. As bioinformatics software is a part of the laboratory test, it should be clear which part of the laboratory test is covered by the bioinformatics risk analysis. For instance, for sequencing the bioinformatics risk analysis starts with the initial sequencer output and ends with the storage of results.

## Risk Management in Software Development Life Cycle

Risk management is part of the SDLC and is required for every (standalone) pipeline/workflow or software tool validated for diagnostics use. Risk management can be broken down into 6 steps, where step 2 and 3 should be part of the laboratories QMS. 

1. Risk Identification involves a comprehensive analysis of risk factors such as project scope, requirements, technology stack, resource availability, and external dependencies.
   Typically, bioinformatics risks involve topics like:
    - Software goal
    - Software installation (and dependencies)
    - Running software tools
    - Interactions / connections with databases / other software / other hardware
    - Data storage
    - User errors
    - Compute environment is down / not reachable
    - Technical challenges
    - Resource constraints
2. Risk Assessment: Once risks are identified, they need to be evaluated to determine their potential impact and likelihood. This assessment allows prioritization, focusing on high-impact and high-probability risks. Risk assessment involves quantitative or qualitative analysis, aiding in the allocation of resources and attention to the most critical areas.
3. Risk Mitigation and Planning: Based on the risks assessment, risks must be mitigated. Risk can be mitigated by applying different strategies:

    - Completely remove risk by adding software functionality, for example check user input before use.
    - Decrease impact by adding software functionality, for example detect when a compute environment is down and email relevant users.
    - Decrease impact by having backup system in place, for example a temporary compute environment.
    - Decrease likelihood by providing clear instruction to end users.

4. Monitoring and Control: Throughout the SDLC, continuous monitoring of identified risks and the effectiveness of mitigation strategies is crucial. Often risks are already identified and discussed during development, whether these are all documented depends on the risks.
5. Communication and Documentation: Clear communication of risks, mitigation strategies, and their progress is vital among team members, stakeholders. Comprehensive documentation of identified risks, their assessment, and the implemented mitigation measures aids in transparency and knowledge transfer, ensuring a cohesive approach.
6. Adaptation to Change: Risks and their measures may evolve over time. Risks can be reassessed, and new ones may emerge. It is imperative that risk assessments maintain their relevance throughout the software life cycle. Therefore, risk management strategies should be flexible to accommodate changes and updates, and should contain a specific update interval. It is recommended to set this reevaluation interval to every major-minor software version and/or two times per year.

In conclusion, risk management within the SDLC is an iterative and proactive approach to ensure the successful release of software projects while minimizing the impact of potential uncertainties.

## More documentation

-   ISO-14971, Annex C Questions that can be used to identify medical device characteristics that could impact on safety
-   ISO-22367, Annex D Identification of characteristics related to safety
-   IEC-62304 Medical device software – software life cycle processes
-   IMDRF/SaMD WG/N12FINAL:2014 "Software as a Medical Device": Possible Framework for Risk Categorization and Corresponding Consideration
