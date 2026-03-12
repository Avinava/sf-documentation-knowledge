---
title: "Advanced Project Configuration Parameters for Second-Generation Managed Packages"
domain: pkg2-dev
topic: advanced-project-configuration-parameters-for-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:35:26.942Z
estimatedTokens: 1435
keywords: [Advanced, Project, Configuration, Second-Generation, Managed, Packages, 2GP, package, development, becomes, complex, consider, including, sfdx-project.json, file]
---

# Advanced Project Configuration Parameters for Second-Generation Managed Packages

> As your managed 2GP package development becomes more complex, consider including these
  optional parameters in your sfdx-project.json file.

# Advanced Project Configuration Parameters for Second-Generation Managed Packages

As your managed 2GP package development becomes more complex, consider including these optional parameters in your sfdx-project.json file.

| Name | Details |
| --- | --- |
| apexTestAccess | Required? NoDefault if Not Specified: NoneAssign permission sets and permission set licenses to the user in context when your Apex tests run at package version creation. "apexTestAccess": {                "permissionSets": [                    "Permission_Set_1",                    "Permission_Set_2"                ],                "permissionSetLicenses": [                    "SalesConsoleUser"                ]            } See Specify Unpackaged Metadata or Apex Access for Package Version Creation Tests for Second-Generation Managed Packages |
| branch | Required? NoDefault if Not Specified: NoneIf your package has an associated branch, but your package dependency is associated with a different branch, use this format."dependencies": [     {     "package": "pkgB",     "versionNumber": "1.3.0.LATEST",     "branch": "featureC"    } ] If your package has an associated branch, but your package dependency doesn’t have an associated branch, use this format."dependencies": [     {     "package": "pkgB",     "versionNumber": "1.3.0.LATEST",     "branch": ""     } ] See Use Branches in Second-Generation Managed Packaging |
| calculateTransitiveDependencies | Required? NoDefault if Not Specified: falseEnables the calculation of the package’s indirect dependencies. A package can have multiple levels of dependencies, where pkgC depends on pkgB, and pkgB depends on pkgA, for example. By default, you list all of a package’s dependencies, including indirect (transitive) dependencies. When calculateTransitiveDependencies is set to true, you specify a package’s direct dependencies only, and the indirect dependencies are calculated for you. See the dependencies parameter’s description for example configurations in the sfdx-project.json file.calculateTransitiveDependencies also enables you to generate a hierarchical graph of a package version’s dependencies. To generate the dependencies graph, run the package version displaydependencies CLI command. See package version displaydependencies in the Salesforce CLI Command Reference. |
| dependencies | Required? NoDefault if Not Specified: NoneSpecify the dependencies on other packages.To specify dependencies for managed packages within the same Dev Hub, use either the package version alias or a combination of the package name and the version number."dependencies": [     {       "package": "MyPackageName@1.1.0.1"    } ]"dependencies": [     {       "package": "MyPackageName",       "versionNumber": "1.1.0.RELEASED"    } ]To specify dependencies for managed packages outside of the Dev Hub use:"dependencies": [     {       "package": "04txxx"    } ]To set the dependency, you can use the keywords RELEASED or LATEST for the version number.To denote dependencies with package IDs instead of package aliases, use:The 0Ho ID if you specify the package ID along with the version numberThe 04t ID if you specify only the package version IDIf the package has more than one dependency, provide a comma-separated list of packages in the order of installation. For example, if a package depends on the package Expense Manager - Util, which in turn depends on the package External Apex Library, the package dependencies are:"dependencies": [    {       "package" : "External Apex Library - 1.0.0.4"           },    {       "package": "Expense Manager - Util",       "versionNumber": "4.7.0.RELEASED"     } ]If you set the calculateTransitiveDependencies parameter to true, you specify the package’s direct dependencies only, and the indirect (transitive) dependencies are calculated for you.For example, if calculateTransitiveDependencies is enabled and the package depends on the package Expense Manager - Util, which in turn depends on the package External Apex Library, the package dependency is:"dependencies": [    {       "package": "Expense Manager - Util",       "versionNumber": "4.7.0.RELEASED"     } ] See: Considerations for Promoting Packages with Dependencies |
| postInstallScript | Required? NoDefault if Not Specified: NoneAn Apex script that runs automatically in the subscriber org after the managed package is installed or upgraded. |
| postInstallURL | Required? NoDefault if Not Specified: NoneA URL to post-install instructions for subscribers. |
| releaseNotesUrl | Required? NoDefault if Not Specified: NoneA URL to release notes. |
| scopeProfiles | Required? NoDefault if Not Specified: falseThe scopeProfiles parameter is a child of packageDirectories. If you set scopeProfiles to true for a package directory, profile settings from only the package directory being packaged are included, and profile settings outside of that package directory are ignored.When you set scopeProfiles to false (the default value), the new package version includes relevant pieces of profile settings in any package directory defined in sfdx-project.json. |
| unpackagedMetadata | Required? NoDefault if Not Specified: NoneSee Specify Unpackaged Metadata or Apex Access for Package Version Creation Tests for Second-Generation Managed Packages. |
| uninstallScript | Required? NoDefault if Not Specified: NoneAn Apex script to run automatically in the subscriber org before the managed package is uninstalled. |

#### See Also

-   [Project Configuration File for a Second-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_config_file.htm "Project Configuration File for a Second-Generation Managed Package - HTML (New Window)")

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
      "package": "MyPackageName@1.1.0.1"
   }
]
```

```
"dependencies": [ 
   {
      "package": "MyPackageName",
      "versionNumber": "1.1.0.RELEASED"
   }
]
```

## Related Topics

- Specify Unpackaged Metadata or Apex Access for Package Version Creation Tests for Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_unpackaged_md.htm)
- Use Branches in Second-Generation Managed Packaging (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_use_branches.htm)
- Considerations for Promoting Packages with Dependencies (atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_considerations_pkg_dependency.htm)
