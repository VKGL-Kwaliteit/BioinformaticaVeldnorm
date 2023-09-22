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
You want to contribute the VKGL Bioinformatics Fieldnorm, great! 
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
Additions to our Fieldnorm should be handed in via a feature branch. The feature branch should have a clear name 
that shortly describes your addition. Feature branches are located under feature/ in our repository.
After initialization of the plugin starting a feature branch to write your addition to the Fieldnorm is easy:
```bash
git flow feature start "GREAT ADDITION"
```

#### Test your additions
To start the development version first navigate to the project folder. Next run the pnpm command:
```bash
pnpm docs:dev
```
This starts a local development version that can be viewed in a browser via `localhost:8080`.

#### Finish your addition
You can push your feature to the [main repository](https://github.com/VKGL-Kwaliteit/BioinformaticaVeldnorm)  if you have access or to your own fork. 
After you are finished and everything looks decent enough you can hand in your addition by creating a pull 
request in [github](https://github.com/VKGL-Kwaliteit/BioinformaticaVeldnorm).
After a code review by one of the team members your additions will be merged to our develop branch.
Once in a while (timing has still to be determined) the team will release an update by merging the develop with
the main. That will trigger a new version on the website..
