---
title: "Project Configuration File for a Second-Generation Managed Package"
domain: pkg2-dev
topic: project-configuration-file-for-a-second-generation-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:26.951Z
estimatedTokens: 1518
keywords: [Project, Configuration, File, Second-Generation, Managed, Package, blueprint, settings, outline, 2GP, determine, attributes, contents, Don’t, Want]
---

# Project Configuration File for a Second-Generation Managed Package

> The project configuration file is a blueprint for your project. The settings in the
    file create an outline of your managed 2GP package and determine the package attributes and
    package contents.

# Project Configuration File for a Second-Generation Managed Package

The project configuration file is a blueprint for your project. The settings in the file create an outline of your managed 2GP package and determine the package attributes and package contents.

Here are some of the parameters you can specify in the project configuration file. For additional parameters, see [Advanced Project Configuration Parameters for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_adv_config_file.htm "As your managed 2GP package development becomes more complex, consider including these optional parameters in your sfdx-project.json file.").

| Name | Details |
| --- | --- |
| ancestorId | Required? It depends on whether you’ve already promoted a package version of this package. If yes, you must specify either the ancestorId or ancestorVersion. If no, this parameter isn’t required.Default if Not Specified: NoneNone. The ID of the immediate parent in the package ancestry tree of the package version you’re creating. The ancestorId requires the 04t of the package version, or an alias to the package version. When specifying ancestors, you can use either ancestorId or ancestorVersion.Example:"ancestorId": "Expenser Logic@0.1.0-1"For more information, see Specify a Package Ancestor in the Project File for a Second-Generation Managed Package. |
| ancestorVersion | Required? It depends on whether you’ve already promoted a package version of this package. If yes, you must specify either the ancestorId or ancestorVersion. If no, this parameter isn’t required.Default if Not Specified: NoneThe version number of the immediate parent in the package ancestry tree of the package version you’re creating.Specify the ancestor version using the format of major.minor.patch.build. When specifying ancestors, you can use either ancestorId or ancestorVersion.Example:"ancestorVersion": "0.1.0.1"For more information, see Specify a Package Ancestor in the Project File for a Second-Generation Managed Package. |
| default | Required? Yes, if you’ve specified more than one package directoryDefault if Not Specified: trueIndicates the default package directory. When metadata is retrieved from a development org (scratch org or source-tracked sandbox) using sf project retrieve, it's placed in the default package directory.There can be only one package directory in which the default is set to true. |
| definitionFile | Required? NoDefault if Not Specified: NoneA reference to an external .json file used to specify the features and org settings required for the metadata of your package, such as the scratch org definition.Example:"definitionFile": "config/project-scratch-def.json", |
| namespace | Required? YesDefault if Not Specified: NoneA 1–15 character alphanumeric identifier that distinguishes your package and its contents from packages of other developers. |
| package | Required? YesDefault if Not Specified: NoneThe package name is specified in the project json file. |
| packageAliases | Required? NoDefault if Not Specified: Salesforce CLI updates this file with the aliases when you create a package or package version. You can also manually update this section for existing packages or package versions. You can use the alias instead of the cryptic package ID when running CLI sf package commands. |
| path | Required? YesDefault if Not Specified: None.Specify the location that contains the package metadata in the --path attribute of sf package create Salesforce CLI command. |
| seedMetadata | Required? NoDefault if Not Specified: None.Specify the path to your seedMetadata directory.Seed metadata is available to standard value sets only. If your package depends on standard value sets, you can specify a seed metadata directory that contains the value sets.Example:"packageDirectories": [     {         "seedMetadata": {             "path": "my-unpackaged-seed-directory"          }     },  ] |
| versionDescription | Required? NoDefault if Not Specified: None |
| versionName | Required? NoDefault if Not Specified: If not specified, the CLI uses versionNumber as the version name. |
| versionNumber | Required? YesDefault if Not Specified: NoneThe versionNumber field sets the version number that is assigned the next time you create a 2GP version. Version numbers are formatted as MAJOR.MINOR.PATCH.BUILD. For example, 1.2.1.8. To avoid creating multiple package versions with the same MAJOR.MINOR.PATCH.BUILD number, you must increment the versionNumber before creating a new package version.To automatically increment the build number to the next available build for the package, use the keyword NEXT (1.2.1.NEXT).Alternatively, when you create a new package version, you can set the version number using the --versionNumber flag in the CLI.For more details, see Guidance for Version Numbering. |

When you specify a parameter using Salesforce CLI, it overrides the value listed in the project definition file.

The Salesforce DX project definition file is a JSON file is located in the root directory of your project. Use the sf project generate CLI command to generate a project file that you can build upon. Here’s how the parameters in packageDirectories appear.

```

```

## What If I Don’t Want My Salesforce DX Project Automatically Updated?

In some circumstances, you don’t want to have automatic updates to the sfdx-project.json file. When you require more control, use these environment variables to suppress automatic updates to the project file.

| For This Command | Set This Environment Variable to True |
| --- | --- |
| sf package create | SFDX_PROJECT_AUTOUPDATE_DISABLE_FOR_PACKAGE_CREATE |
| sf package version create | SFDX_PROJECT_AUTOUPDATE_DISABLE_FOR_PACKAGE_VERSION_CREATE |

#### See Also

-   [Advanced Project Configuration Parameters for Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_adv_config_file.htm "Advanced Project Configuration Parameters for Second-Generation Managed Packages - HTML (New Window)")

## Code Examples

```
"packageDirectories": [
    {
        "seedMetadata": {
            "path": "my-unpackaged-seed-directory"
         }
    }, 
]
```

```
{
   "namespace": "exp-mgr",
   "sfdcLoginUrl": "https://login.salesforce.com",
   "sourceApiVersion": "61.0",
   "packageDirectories": [
      {
         "path": "util",
         "default": true,
         "package": "Expense Manager - Util",
         "versionName": "Summer ‘24",
         "versionDescription": "Welcome to Summer 2024 Release of Expense Manager Util Package",
         "versionNumber": "4.7.0.NEXT",
         "definitionFile": "config/scratch-org-def.json"
      },
      {
         "path": "exp-core",
         "default": false,
         "package": "Expense Manager",
         "versionName": "v 3.2",
         "versionDescription": "Summer 2024 Release",
         "versionNumber": "3.2.0.NEXT", 
         "ancestorVersion": "3.0.0.7",
         "definitionFile": "config/scratch-org-def.json",
         "dependencies": [
            {
               "package": "Expense Manager - Util",
               "versionNumber": "4.7.0.LATEST"

            },
            {
               "package" : "External Apex Library - 1.0.0.4"
            }
         ]
      }
   ],
   "packageAliases": {
      "Expense Manager - Util": "0HoB00000004CFpKAM",
      "External Apex Library@1.0.0.4": "04tB0000000IB1EIAW",
      "Expense Manager": "0HoB00000004CFuKAM"}
}
```

## Related Topics

- Advanced Project Configuration Parameters for Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_adv_config_file.htm)
- Specify a Package Ancestor in the Project File for a Second-Generation Managed Package (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_ancestors.htm)
