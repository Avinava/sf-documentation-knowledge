---
title: "Create a Salesforce DX Project"
domain: sfdx-dev
topic: create-a-salesforce-dx-project
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.944Z
estimatedTokens: 1208
keywords: [Salesforce, Project, specific, structure, configuration, file, identifies, directory]
---

# Create a Salesforce DX Project

> A Salesforce DX project has a specific structure and a configuration file that identifies
    the directory as a Salesforce DX project.

# Create a Salesforce DX Project

A Salesforce DX project has a specific structure and a configuration file that identifies the directory as a Salesforce DX project.

1.  Change to the directory where you want the DX project located.
2.  Create the DX project.

    ```

    ```

    If you don’t specify an output directory with the \--output-dir flag, the project directory is created in the current location. You can also use the \--default-package-dir flag to specify the default package directory to target when syncing source to and from the org. If you don’t indicate a default package directory, this command creates a default package directory, force-app.

    Use the \--template flag to specify what your project initially looks like. Each template provides a complete directory structure that takes the guesswork out of where to put your source. If you choose \--template empty, your project contains these sample configuration files to get you started.

    -   .forceignore
    -   config/project-scratch-def.json
    -   sfdx-project.json
    -   package.json

    If you choose \--template standard, your project also contains these files that are especially helpful when using Salesforce Extensions for VS Code. If you don’t specify the \--template flag, the project generate command uses the standard template.

    -   .gitignore: Makes it easier to start using Git for version control.
    -   .prettierrc and .prettierignore: Make it easier to start using Prettier to format your Aura components.
    -   .vscode/extensions.json: Causes Visual Studio Code, when launched, to prompt you to install the recommended extensions for your project.
    -   .vscode/launch.json: Configures Replay Debugger, making it more discoverable and easier to use.
    -   .vscode/settings.json: By default, this file has one setting for excluding certain files and folders in searches and quick open. You can change this value or add other settings.

    If you choose \--template analytics, you get all the helpful basic and VS Code files. But the default package directory contains fewer directories, such as for storing Analytics template bundles. /force-app/main/default/waveTemplates) and a few other metadata types, such as Apex classes and LWC components.


## Example

```

```

```

```

Next steps:

-   (Optional) Register the namespace with the Dev Hub org.
-   Configure the project (sfdx-project.json). If you use a namespace, update this file to include it.
-   Create a scratch org definition that produces scratch orgs with the features you need for your project. The config directory of your new project contains a sample scratch org definition file (project-scratch-def.json).

#### See Also

-   [Create a Salesforce DX Project from Existing Source](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_from_existing.htm "If you’re a Salesforce developer, partner, or ISV, you likely have existing source in a managed package in your packaging org or application source in your sandbox or production org. Before you begin using Salesforce DX, retrieve the existing source into a Salesforce DX project.")

-   [Salesforce DX Project Configuration](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm "The project configuration file sfdx-project.json indicates that the directory is a Salesforce DX project. The configuration file contains project information and facilitates the authorization of orgs and the creation of second-generation packages. It also tells Salesforce CLI where to put files when syncing between the project and org.")

-   [Link a Namespace to a Dev Hub Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_reg_namespace.htm "To use a namespace with a scratch org, you must link the Developer Edition org where the namespace is registered to a Dev Hub org.")

-   [Build Your Own Scratch Org Definition File](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm "The scratch org definition file is a blueprint for a scratch org. It mimics the shape of an org that you use in the development lifecycle, such as sandbox, packaging, or production.")

-   [How to Exclude Source When Syncing](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm "When syncing metadata between your local file system and a target org, you often have source files you want to exclude. Similarly, you often want to exclude certain files when converting source to Salesforce DX source format. In both cases, you can exclude individual files or all files in a specific directory with a .forceignore file.")

-   [*VS Code Command*: SFDX: Create Project, SFDX: Create Project with Manifest](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/create-project.html "VS Code Command: SFDX: Create Project, SFDX: Create Project with Manifest - HTML (New Window)")

## Code Examples

```
sf project generate --name MyProject
```

```
sf project generate --name mywork --template standard
```

```
sf project generate --name mywork --default-package-dir myapp-source
```

## Related Topics

- Create a Salesforce DX Project from Existing Source (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_from_existing.htm)
- Salesforce DX Project Configuration (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm)
- Link a Namespace to a Dev Hub Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_reg_namespace.htm)
- Build Your Own Scratch Org Definition File (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm)
- How to Exclude Source When Syncing (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm)
