---
title: "Project Configuration File for Unlocked Packages"
domain: sfdx-dev
topic: project-configuration-file-for-unlocked-packages
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:36:18.751Z
estimatedTokens: 2142
keywords: [Project, Configuration, File, Unlocked, Packages, blueprint, settings, outline, package, determine, attributes, contents, Don’t, Want, Salesforce]
---

# Project Configuration File for Unlocked Packages

> The project configuration file is a blueprint for your project. The settings in the
    file create an outline of your package and determine the package attributes and package
    contents.

# Project Configuration File for Unlocked Packages

The project configuration file is a blueprint for your project. The settings in the file create an outline of your package and determine the package attributes and package contents.

Here are the parameters you can specify in the project configuration file.

| Name | Required? | Default if Not Specified |
| --- | --- | --- |
| apexTestAccess | No | None. Assign permission sets and permission set licenses to the user in context when your Apex tests run at package version creation. "apexTestAccess": {                 "permissionSets": [                 "Permission_Set_1",                 "Permission_Set_2"                 ],                 "permissionSetLicenses": [                 "SalesConsoleUser"                 ]                 }               See Specify Unpackaged Metadata or Apex Access for Apex Tests (Unlocked Packages) |
| branch | No | None. If your package has an associated branch, but your package dependency is associated with a different branch, use this format."dependencies": [                 {                 "package": "pkgB",                 "versionNumber": "1.3.0.LATEST",                 "branch": "featureC"                 }                 ]               If your package has an associated branch, but your package dependency doesn’t have an associated branch, use this format."dependencies": [                   {                   "package": "pkgB",                   "versionNumber": "1.3.0.LATEST",                   "branch": ""                   }                   ]                 See Use Branches in Unlocked Packaging |
| calculateTransitiveDependencies | No | False. Enables the calculation of the package’s indirect dependencies. A package can have multilevel dependencies where pkgC depends on pkgB, and pkgB depends on pkgA. By default, you list all of a package’s dependencies, including indirect (transitive) dependencies. When calculateTransitiveDependencies is set to true, you specify a package’s direct dependencies only, and the indirect dependencies are calculated for you. See the dependencies parameter’s description for example configurations in the sfdx-project.json file.calculateTransitiveDependencies also enables you to generate a hierarchical graph of a package version’s dependencies. To generate the dependencies graph, run the package version displaydependencies CLI command. See package version displaydependencies in the Salesforce CLI Command Reference. |
| default | Yes, if you’ve specified more than one package directory | trueIndicates the default package directory. Use the sf project retrieve command to copy metadata from your scratch org to your default package directory.There can be only one package directory in which the default is set to true. |
| definitionFile | No | None. A reference to an external .json file used to specify the features and org settings required for the metadata of your package, such as the scratch org definition.Example:"definitionFile": "config/project-scratch-def.json", |
| dependencies | No | None. Specify the dependencies on other packages.To specify dependencies for unlocked packages within the same Dev Hub, use either the package version alias or a combination of the package name and the version number."dependencies": [     {       "package": "MyPackageName@0.1.0.1"    } ]"dependencies": [     {       "package": "MyPackageName",       "versionNumber": "0.1.0.LATEST"    } ]To specify dependencies for unlocked packages outside of the Dev Hub use:"dependencies": [     {       "package": "OtherOrgPackage@1.2.0"    } ]NoteYou can use the LATEST keyword for the version number to set the dependency.To denote dependencies with package IDs instead of package aliases, use:The 0Ho ID if you specify the package ID along with the version numberThe 04t ID if you specify only the package version IDIf the package has more than one dependency, provide a comma-separated list of packages in the order of installation. For example, if a package depends on the package Expense Manager - Util, which in turn depends on the package External Apex Library, the package dependencies are:"dependencies": [    {       "package" : "External Apex Library - 1.0.0.4"           },    {       "package": "Expense Manager - Util",       "versionNumber": "4.7.0.LATEST"     } ]If you set the calculateTransitiveDependencies parameter to true, you specify the package’s direct dependencies only, and the indirect (transitive) dependencies are calculated for you.For example, if calculateTransitiveDependencies is enabled and the package depends on the package Expense Manager - Util, which in turn depends on the package External Apex Library, the package dependency is:"dependencies": [    {       "package": "Expense Manager - Util",       "versionNumber": "4.7.0.LATEST"     } ]See: Extract Dependency Information from Unlocked Packages and Considerations for Promoting Packages with Dependencies |
| includeProfileUserLicenses | No | False. Setting this parameter to true ensures that user licenses associated with profiles in unlocked packages are retained during package version creation. By default, unlocked packages remove profile information not pertinent to the packaged metadata."packageDirectories": [                 {                 "package": "PackageA",                 "path": "common",                 "versionName": "ver 0.1",                 "versionNumber": "0.1.0.NEXT",                 "default": false,                 "includeProfileUserLicenses": true                 }                 ] |
| namespace | no | None. A 1–15 character alphanumeric identifier that distinguishes your package and its contents from packages of other developers. |
| package | Yes | The package name specified in the project json file. |
| packageAliases | Yes | Salesforce CLI updates the project file with aliases when you create a package or package version. You can also manually update this section for existing packages or package versions. You can use the alias instead of the cryptic package ID when running CLI sf package commands. |
| path | Yes | If you don’t specify a path, Salesforce CLI uses a placeholder when you create a package. |
| postInstallUrl | No | None. A URL to post-install instructions for subscribers. |
| releaseNotesUrl | No | None. A URL to release notes. |
| seedMetadata | No | None.Specify the path to your seedMetadata directory.Seed metadata is available to standard value sets only. If your package depends on standard value sets, you can specify a seed metadata directory that contains the value sets.Example:"packageDirectories": [     {         "seedMetadata": {             "path": "my-unpackaged-seed-directory"          }     },  ] |
| unpackagedMetadata | No | None. See Specify Unpackaged Metadata or Apex Access for Apex Tests (Unlocked Packages) |
| versionDescription | No | None. |
| versionName | No | If not specified, the CLI uses versionNumber as the version name. |
| versionNumber | Yes | The versionNumber field sets the version number that is assigned the next time you create a new version. Version numbers are formatted as MAJOR.MINOR.PATCH.BUILD. For example, 1.2.1.8. To avoid creating multiple package versions with the same MAJOR.MINOR.PATCH.BUILD number, you must increment the versionNumber before creating a new package version.To automatically increment the build number to the next available build for the package, use the keyword NEXT (1.2.1.NEXT).Alternatively, when you create a new package version, you can set the version number using the --versionNumber flag in the CLI.For more details, see Guidance for Version Numbering. |

When you specify a parameter using Salesforce CLI, it overrides the value listed in the project definition file.

The Salesforce DX project definition file is a JSON file located in the root directory of your project. Use the sf project generate CLI command to generate a project file that you can build upon. Here’s how the parameters in packageDirectories appear.

```

```

## What If I Don’t Want My Salesforce DX Project Automatically Updated?

In some circumstances, you don’t want to have automatic updates to the sfdx-project.json file. When you require more control, use these environment variables to suppress automatic updates to the project file.

| For This Command | Set This Environment Variable to True |
| --- | --- |
| sf package create | SFDX_PROJECT_AUTOUPDATE_DISABLE_FOR_PACKAGE_CREATE |
| sf package version create | SFDX_PROJECT_AUTOUPDATE_DISABLE_FOR_PACKAGE_VERSION_CREATE |

## Code Examples

```
"apexTestAccess": {
                "permissionSets": [
                "Permission_Set_1",
                "Permission_Set_2"
                ],
                "permissionSetLicenses": [
                "SalesConsoleUser"
                ]
                }
```

```
"dependencies": [
                {
                "package": "pkgB",
                "versionNumber": "1.3.0.LATEST",
                "branch": "featureC"
                }
                ]
```

```
"dependencies": [
                  {
                  "package": "pkgB",
                  "versionNumber": "1.3.0.LATEST",
                  "branch": ""
                  }
                  ]
```

```
"dependencies": [ 
   {
      "package": "MyPackageName@0.1.0.1"
   }
]
```

```
"dependencies": [ 
   {
      "package": "MyPackageName",
      "versionNumber": "0.1.0.LATEST"
   }
]
```

## Related Topics

- Specify Unpackaged Metadata or Apex Access for Apex Tests (Unlocked Packages) (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_unpackaged_md.htm)
- Use Branches in Unlocked Packaging (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_use_branches.htm)
- Extract Dependency Information from Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_extract_dependency_info.htm)
- Considerations for Promoting Packages with Dependencies (atlas.en-us.sfdx_dev.meta/sfdx_dev/dev2gp_considerations_pkg_dependency.htm)
