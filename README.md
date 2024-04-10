# BioinformaticaVeldnorm

# HPC wiki

## Description

Field standard for Bioinformatics within Medical Laboratories

Which procedures need to be documented for the development of pipelines, workflows or tools.

## Badges

[![documentation](https://img.shields.io/badge/Documentation-mkdocs-material--blue)](https://vkgl-kwaliteit.github.io/BioinformaticaVeldnorm/)
[![python](https://img.shields.io/badge/Python-3.10-green?style=flat&link=https://www.python.org/)](https://v2.vuepress.vuejs.org/)
[![poetry](https://img.shields.io/badge/Poetry-latest-green?style=flat&link=https://python-poetry.org/)](https://vuejs.org/)


## Installation

### Prerequisites

- Python 3.10

### Poetry

[Poetry](https://python-poetry.org/) is a tool for dependency management and packaging in Python. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you. Poetry offers a lockfile to ensure repeatable installs.

Install Poetry via:

```bash
curl -sSL https://install.python-poetry.org | python3 -
```

For more information go [to](https://python-poetry.org/docs/#installing-with-the-official-installer).

### Installing dependencies

To install the defined dependencies for your project, navigate to the project folder and execute:

```bash
poetry install
```

## Development

You want to contribute the VKGL Bioinformatics field standard, great!
Strictly speaking the scheme below is not enforced, however strongly recommended to keep your changes grouped together
in your git history. Commit your changes, do not hesitate to do that often, however make understandable commit messages.
What is enforced in the end is a code review process to keep information accurate.

### Git flow

Using the [git flow](https://jeffkreeftmeijer.com/git-flow/) scheme is strongly
encouraged to keep the history of the project orderly and concise.
From a practical point of view using the git flow plugin is the easiest way (but not strictly necessary).

1. Install the [plugin](https://github.com/nvie/gitflow).
2. Init the plugin:

```bash
git flow init
# production:  main
# development: develop
# feature:     feature/
# bugfix:      not used (keep default)
# release:     release/
# hotfix:      not used (keep default)
# support:     not used (keep default)
# version tag prefix: []
```

#### Start your addition

Additions to our field standard should be handed in via a feature branch. The feature branch should have a clear name
that shortly describes your addition. Feature branches are located under feature/ in our repository.
After initialization of the plugin starting a feature branch to write your addition to the field standard is easy:

```bash
git flow feature start "GREAT ADDITION"
```

Pages are written using the [markup language markdown](https://www.markdownguide.org/).
Some handies (feel free to add if you like more):

| Syntax                                         | Description                                                         |                              Example                              |
| :--------------------------------------------- | :------------------------------------------------------------------ | :---------------------------------------------------------------: |
| # H1                                           | Header line                                                         |                              _table_                              |
| - bullet                                       | Bullet points                                                       |                              _table_                              |
| \*\*bold\*\*                                   | Bold                                                                |                             **bold**                              |
| \*italic                                       | Italic                                                              |                             _italic_                              |
| \`command`                                     | Code                                                                |                             `command`                             |
| \```bash commands ```                          | Code block (can use syntax highlighting by indicating the language) |                      `this is a code block `                      |
| \[text](link)                                  | Hyperlink                                                           | [extended syntax](https://www.markdownguide.org/extended-syntax/) |
| \![alt text]\(image_file.png "Optional title") | Image                                                               |                ![VKGL logo](docs/img/VKGL-logo.webp 'VKGL')                |

#### Test your additions

To start the development version first navigate to the project folder. Next run the pnpm command:

```bash
poetry run mkdocs serve
```

This starts a local development version that can be viewed in a browser via `localhost:8000` or `127.0.0.1:8000`.

#### Finish your addition

You can push your feature to the [main repository](https://github.com/VKGL-Kwaliteit/BioinformaticaVeldnorm) if you have access or to your own fork.
After you are finished and everything looks decent enough you can hand in your addition by creating a pull
request in [github](https://github.com/VKGL-Kwaliteit/BioinformaticaVeldnorm).
After a code review by one of the team members your additions will be merged to our develop branch.

### Release procedure

Once in a while, the team will revise the current document, and might release a new version of this norm.
A revision of the norm document will include a release review by the team, during which the develop will be
merged with the main branch. An update on the main branch will trigger a new version on the website.

#### Start a release

The release procedure will start branching the main branch and merge the develop into this. This is done using
the git flow plugin, using the following procedure:

```bash
git flow release start "VERSION NORM RELEASE CANDIDATE"
```

#### Create the release request

A pull request for this release candidate onto the main branch will be created by the team, after which a
last round of feedback is initiated.

#### Release

If the team agrees the release candidate is ready for publication the pull request is merged, after which it
will be publicated on the [website](https://vkgl-kwaliteit.github.io/BioinformaticaVeldnorm/).