# BioinformaticaVeldnorm
# HPC wiki

## Description

Fieldnorm for Bioinformatics within Medical Laboratories

Which procedures need to be documented for the development of pipelines, workflows or tools.

## Badges

[![documentation](https://img.shields.io/badge/documentation-vuepress-material--blue)](https://vkgl-kwaliteit.github.io/BioinformaticaVeldnorm/)
[![vuepress](https://img.shields.io/badge/vuepress-2.0.0--beta.62-green?style=flat&link=https://v2.vuepress.vuejs.org/)](https://v2.vuepress.vuejs.org/)
[![vue](https://img.shields.io/badge/vue-3.3.1-green?style=flat&link=https://vuejs.org/)](https://vuejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-8.5.1-green?style=flat&link=https://pnpm.io/)](https://pnpm.io/)
[![node](https://img.shields.io/badge/node-16.18.0-green?style=flat&link=https://nodejs.org)](https://nodejs.org)

## Installation

### Node

First install Node Version Manager (NVM):

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

To verify if NVM has been installed, do:

```bash
nvm -v
```

This outputs `0.39.3` if the installation was successful. If there is an error try to debug with the [official documentation](https://github.com/nvm-sh/nvm#table-of-contents).

Next install the correct Node version via NVM:

```bash
nvm install 16.18.0
```

### Pnpm

Install the correct version of pnpm via:

```bash
curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=8.5.1 sh -
```

Now navigate to the project folder and run:

```bash
pnpm install
```

## Development

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
After initialization of the plugin starting a branch to write your addition to the Fieldnorm is easy:
```bash
git flow feature start "GREAT ADDITION"
```

#### Finish your addition
Merging your addition into the main development track is done quite similar:
```bash
git flow feature finish
```

#### Test your additions
To start the development version first navigate to the project folder. Next run the pnpm command:
```bash
pnpm docs:dev
```
This starts a local development version that can be viewed in a browser via `localhost:8080`.

#### Pull your additions from develop
If everything looks decent enough create a pull request for the main.
If your additions are in the develop branch on the [VKGL-Kwaliteit repositories](https://github.com/VKGL-Kwaliteit/BioinformaticaVeldnorm) 
you can directly pull the branch into the main by creating a pull request in [github](https://github.com/VKGL-Kwaliteit/BioinformaticaVeldnorm).
After a code review by one of the team members your additions will be merged and almost directly visible on the website.
