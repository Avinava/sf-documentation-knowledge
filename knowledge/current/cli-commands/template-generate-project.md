---
title: "template generate project"
domain: cli-commands
topic: template-generate-project
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:05.031Z
keywords: [template, generate, project, Generate, Salesforce, project., Description, Examples, Flags, Aliases]
---

# template generate project

> Generate a Salesforce DX project.

## template generate project

Generate a Salesforce DX project.

### Description for template generate project

A Salesforce DX project has a specific structure and a configuration file (sfdx-project.json) that identifies the directory as a Salesforce DX project. This command generates the necessary configuration files and directories to get you started.

By default, the generated sfdx-project.json file sets the sourceApiVersion property to the default API version currently used by Salesforce CLI. To specify a different version, set the apiVersion configuration variable. For example: "sf config set apiVersion=57.0 --global".

### Examples for template generate project

Generate a project called "mywork":

```

```

Similar to previous example, but generate the files in a directory called "myapp":

```

```

Similar to prevoius example, but also generate a default package.xml manifest file:

```

```

Generate a project with the minimum files and directories:

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-n | \--name NAME

Required

Name of the generated project.

Generates a project directory with this name; any valid directory name is accepted. Also sets the "name" property in the sfdx-project.json file to this name.

Type: option

\-t | \--template TEMPLATE

Optional

Template to use for project creation.

The template determines the sample configuration files and directories that this command generates. For example, the empty template provides these files and directory to get you started.

\- .forceignore

\- config/project-scratch-def.json

\- sfdx-project.json

\- package.json

\- force-app (basic source directory structure)

The standard template provides a complete force-app directory structure so you know where to put your source. It also provides additional files and scripts, especially useful when using Salesforce Extensions for VS Code. For example:

\- .gitignore: Use Git for version control.

\- .prettierrc and .prettierignore: Use Prettier to format your Aura components.

\- .vscode/extensions.json: When launched, Visual Studio Code, prompts you to install the recommended extensions for your project.

\- .vscode/launch.json: Configures Replay Debugger.

\- .vscode/settings.json: Additional configuration settings.

The analytics template provides similar files and the force-app/main/default/waveTemplates directory.

Type: option

Permissible values are: standard, empty, analytics

Default value: standard

\-d | \--output-dir OUTPUT-DIR

Optional

Directory for saving the created files.

The location can be an absolute path or relative to the current working directory. The default is the current directory.

Type: option

Default value: .

\-s | \--namespace NAMESPACE

Optional

Namespace associated with this project and any connected scratch orgs.

Type: option

\-p | \--default-package-dir DEFAULT-PACKAGE-DIR

Optional

Default package directory name.

Metadata items such as classes and Lightning bundles are placed inside this folder.

Type: option

Default value: force-app

\-x | \--manifest

Optional

Generate a manifest (package.xml) for change-set based development.

Generates a default manifest (package.xml) for fetching Apex, Visualforce, Lightning components, and static resources.

Type: boolean

\--api-version API-VERSION

Optional

Will set this version as sourceApiVersion in the sfdx-project.json file

Override the api version used for api requests made by this command

Type: option

### Aliases for template generate project

```

```

```

```