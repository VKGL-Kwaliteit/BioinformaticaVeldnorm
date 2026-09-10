# SOUP - Software of Unknown Provenance

Software of unknown provenance (SOUP) is a software item that is already developed, generally available and not developed for the purpose of being incorporated into the bioinformatic workflow, or a software item for which adequate records of its development proecess are not available.

SOUPs are not mentioned in ISO 15189, the term originates from IEC-62304. Please note that, as mentioned in the [Introduction](index.md#introduction), this field standard for SOUPs limits itself to IEC-62304 Software Class A.

## A policy for working with SOUPs

When developing software in-house for the purpose of diagnostics, A procedure should be documented about how and where SOUPs are registered. The following scaffolding can be used for defining a policy for SOUP. We divide this into two sections, one determining how to choose which software items should be treated as SOUP, and one section on how to deal with those SOUPs.

### 1 - Is it a SOUP?

A software item is considers a SOUP if either:

- the software is developed outside of the medical laboratory, and it is not specifically developed for the purpose of being used in medical laboratories, or
- the software is developed inside the medical laboratory, but the development process has not been sufficiently documented.

#### Granularity

Not every single software item that is classified as a SOUP according to the definition above needs to be treated as a SOUP individually. Various SOUPs may be grouped as a single item and treated as a single SOUP. Some examples:

- _Closely related software_ - When using various libraries that are closely related and function as a whole, they may be grouped as a single SOUP and treated as such.
    - Example 1: React, Redux and Axios can be grouped as a "Frontend runtime bundle" used for an in-house LIMS system. Other supporting libraries such as MUI and RTK may be included as well.
    - Example 2: Numpy, Pandas, Polars, SciPy, Scikit-learn, Matplotlib and Seaborn may all be grouped together as a "computing and data science stack" used for data augmentation and visualization.
- _Transitive dependencies_ - When using a SOUP that in turn has its own dependencies, those dependencies can be treated as part of the same SOUP. 
    - Example 1: Snakemake depends on pyyaml. If the use of Snakemake in the software item has been documented as a SOUP including the expected requirements, then there is no need to document the use of pyyaml separately.
    - Example 2: If Numpy is only included as dependency of Scikit-learn, only Scikit-learn has to be treated as a SOUP.

Note that a prerequisite for grouping SOUPs is that dependencies are pinned. See [Version pinning](#i-version-pinning) below.

### 2 - Working with SOUP

What to document about a SOUP depends on the role of the SOUP in the medical laboratory and in the diagnostic process. We distinguish between three types of SOUPs. Each subsequent type of SOUP requires increasing levels of SOUP management efforts.

- _Supporting SOUP_: a software item that does not interact with diagnostic data directly. Examples include linters, CI-runners, pytest, mkdocs. Software that uses supporting SOUPs should apply version pinning (I).
- _Infrastructural SOUP_: a software item that does not determine results, but that carries or transports diagnostic data or that assists the diagnostic process. Examples include Nextflow, Snakemake, Docker, Slurm and backend or frontend stacks. Software that uses infrastructural SOUPs should apply version pinning and registration (I + II).
- _Outcome-determining SOUP_: a software item that directly influences diagnostic results. It directly modifies data, or it is used to make decisions that influences diagnostic outcomes. Examples include samtools, BWA, WisecondorX, reference genomes, annotation databases. Be sure to also consider old in-house developed tools with lacking documentation. Software using outcome-determining SOUPs should apply version pinning, registration and risk assessment (I + II + III).

If the SOUP is used as a standalone infrastructural or outcome-determining tool, then separate validation is required following [Software Verification & Software Validation](verification_validation.md#software-verification--software-validation). Any other SOUP does not have to be validated individually. Instead, validation is deferred to the validation process of the workflow / software release that encorporates the SOUP.

Note that grouping (see [Granularity](#granularity)) an outcome-determining SOUP into a group of lower level SOUPs changes the whole group into Outcome-determining SOUP.

#### I - Version pinning

Version pinning means that the software explicitly defines which versions are part of its build or deployment. The list of dependencies and versions should be stored so that a build or deployment can be accurately reproduced. A range of suitable version pinning tools is readily available across various ecosystems. Some examples include:

- `pip-tools` with a `requirements.txt` or `pyproject.toml`
- `uv` with a `uv.lock`
- `conda` environments with a `.pin.txt`
- `pixi` with a `pixi.lock`
- `npm` with a `package-lock.json`
- `yarn` with a `yarn.lock`

Note that these tools don't enforce exact version pinning by default, so this has to be managed by the developer. Also note that storing integrity hashes in lockfiles (e.g. using pip's `--require-hashes` parameter) provides extra protection against malformed or replaced packages.

For a specific release, build or deployment it should be traceable what pinned lockfile was used. To this end, tracking lockfiles using git is recommended.

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

For SOUPs that require risk assessment, follow the best practises as outlined in [Risk Management](risk_management.md#risk-management). The verification and validation process of the software using these SOUPs should cover the risks that are identified. See also [Software Verification & Software Validation](verification_validation.md#software-verification--software-validation).

#### Other recommendations

- Before adopting new SOUPs in a workflow, check whether the software is maintained, tested, whether it uses versioning, and check the license.
- Use lockfiles for CVE monitoring for network-accessible software.
