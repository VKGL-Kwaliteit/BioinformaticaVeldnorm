# SOUP - Software of Unknown Provenance

Software of unknown provenance (SOUP) is a software item that is already developed, generally available and not developed for the purpose of being incorporated into your bioinformatic workflow, or a software item for which documentation of the development process is not available.

ISO-15189 does not include any mention of SOUPs. The term originates from IEC-62304. Please note that, as mentioned in the [Introduction](index.md#introduction), this field standard for SOUPs limits itself to IEC-62304 Software Class A.

## A policy for working with SOUPs

When developing software in-house for the purpose of diagnostics, A procedure should be documented about how and where SOUPs are registered. Here we provide a scaffolding for defining a policy for SOUPs. We discuss how to determine which software items should be treated as SOUPs, and we present a procedure for working with those SOUPs.

### 1 - Is it a SOUP?

A software item is considers a SOUP if either:

- the software is developed outside of the medical laboratory and generally available, and was not developed for the purpose of being incorporated into your bioinformatic workflow, or
- the software is developed inside the medical laboratory and adequate records of its development process are not available.

#### Granularity

Not every single software item that is classified as a SOUP according to the definition above needs to be treated as a SOUP individually. Various SOUPs may be grouped as a single item and treated as a single SOUP. Some examples:

- _Closely related software_ - When using various software items that are closely related and function as a whole, they may be grouped as a single SOUP and treated as such.
    - Example 1: React, Redux and Axios can be grouped as a "Frontend runtime bundle" used for an in-house LIMS system. Other supporting libraries such as MUI and RTK may be included as well.
    - Example 2: Numpy, Pandas, Polars, SciPy, Scikit-learn, Matplotlib and Seaborn may all be grouped together as a "computing and data science stack" used for data augmentation and visualization.
- _Transitive dependencies_ - When using a SOUP that in turn has its own dependencies, those dependencies can be treated as part of the same SOUP.
    - Example 1: Snakemake depends on pyyaml. If the use of Snakemake in the software item has been documented as a SOUP including the expected requirements, then there is no need to document the use of pyyaml separately.
    - Example 2: If Numpy is only included as dependency of Scikit-learn, only Scikit-learn has to be treated as a SOUP.

Note that a prerequisite for grouping SOUPs is that dependencies are pinned. See [Version pinning](#i-version-pinning) below.

### 2 - Working with SOUP

What to document about a SOUP depends on the role of the SOUP in the bioinformatic workflow and the diagnostic process. We distinguish between three types of SOUPs. Each subsequent type of SOUP requires an increasing level of SOUP management efforts.

- _Supporting SOUP_: a software item that does not interact with diagnostic data directly. Examples include linters, CI-runners, pytest, mkdocs. For such SOUPs, no additional documentation is required, though including them in version pinning (I) is recommended.
- _Infrastructural SOUP_: a software item that does not determine results, but that carries or transports diagnostic data or that assists the diagnostic process. Examples include Nextflow, Snakemake, Docker, Slurm, backend or frontend stacks, and data visualization tools. Software that uses infrastructural SOUPs should apply version pinning and registration (I + II).
- _Outcome-determining SOUP_: a software item that directly influences diagnostic results. It directly modifies data, or it is used to make decisions that influences diagnostic outcomes. Examples include samtools, BWA, WisecondorX, reference genomes, annotation databases. Software using outcome-determining SOUPs should apply version pinning, registration and risk assessment (I + II + III).

If the SOUP is used as a standalone infrastructural or outcome-determining tool, then separate validation is required following [Software Verification & Software Validation](verification_validation.md#software-verification--software-validation). Any other SOUP does not have to be validated individually. Instead, validation is deferred to the validation process of the workflow / software release that encorporates the SOUP.

Note that grouping, for example, an outcome-determining SOUP into a group of lower level SOUPs (see [Granularity](#granularity)) changes the whole group into an outcome-determining SOUP.

#### I - Version pinning

Version pinning means that the software explicitly locks the versions of software items that are part of its build or deployment. This is necessary to be able to accurately reproduce a build or deployment.

A range tools that are suitable for version pinning is readily available across various ecosystems. Some examples include `pip`, `poetry`, `uv`, `conda`, `pixi`, `npm`, `yarn`. Note that these tools don't enforce exact version pinning by default, so this has to be managed by the developer (e.g. by using `uv lock`). Also note that storing integrity hashes in lockfiles (e.g. using pip's `--require-hashes` parameter) provides extra protection against malformed or replaced packages.

For a specific release, build or deployment, the pinned lockfile that was used needs to be available. Tracking lockfiles using git is recommended.

For some SOUPs some manual effort is required for version pinning, for example when using annotation databases and reference genomes. In these cases it is necessary to record the release identifiers, and, where possible, to checksum and archive relevant files.

#### II - Registration

The registration of SOUP comprises the documentation of the following items:

- Name: Name of SOUP.
- Origin: Link (URL) to source repository or publication.
- Intended purpose: Description of the original purpose of the SOUP.
- Used according to the intended purpose: yes/no, if no, document for which purpose the SOUP is used.
- Function: what this SOUP does within our software item, in one sentence.

Because this field standard is scoped to IEC-62304 software safety class A (see [Introduction](index.md#introduction)), we do not specify functional, performance or system requirements per SOUP item.

#### III - Risk assessment

For SOUPs that require risk assessment, follow the best practises as outlined in [Risk Management](risk_management.md#risk-management). The verification and validation process of the software using these SOUPs should explicitly cover the risks that are identified. See also [Software Verification & Software Validation](verification_validation.md#software-verification--software-validation).

#### Other recommendations

- Before adopting new SOUPs in a workflow, check whether the software is maintained, tested, whether it uses versioning, and check the license.
- Use lockfiles for CVE monitoring for network-accessible software.
