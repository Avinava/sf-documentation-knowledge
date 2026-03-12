---
title: "Create Dependencies Between Second-Generation Managed Packages"
domain: pkg2-dev
topic: create-dependencies-between-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.015Z
estimatedTokens: 1271
keywords: [Dependencies, Second-Generation, Managed, Packages, avoid, monolithic, package, development, practices, plan, develop, smaller, modular, group, similar]
---

# Create Dependencies Between Second-Generation Managed Packages

> To avoid monolithic package development practices, plan to develop smaller, modular
      packages that group similar functionality and components. You can then define the dependencies
      between these packages. A package dependency is when metadata contained in one package depends
      on metadata contained in another package. For example, defining dependencies allow you to
      extend the functionality of a base package with components and metadata located in a separate
      package.

# Create Dependencies Between Second-Generation Managed Packages

To avoid monolithic package development practices, plan to develop smaller, modular packages that group similar functionality and components. You can then define the dependencies between these packages. A package dependency is when metadata contained in one package depends on metadata contained in another package. For example, defining dependencies allow you to extend the functionality of a base package with components and metadata located in a separate package.

## How to Specify a Managed 2GP Package Dependency

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

To understand which combination of managed 2GP and managed 1GP package dependencies are supported, see [Which Package Types Can Your Package Depend On?](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_dependency_overview.htm "HTML (New Window)").

To specify dependencies between managed packages associated with the same Dev Hub, use either the package version alias or a combination of the package name and the version number.

Example 1:

```

```

Example 2:

```

```

To specify a dependency on a managed package that isn’t associated with your Dev Hub:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

You can use the RELEASED keyword for the version number to set the dependency.

To denote dependencies with package IDs instead of package aliases, use:

-   The 0Ho ID if you specify the package ID along with the version number
-   The 04t ID if you specify only the package version ID

## Specifying Multiple Package Dependencies

If your package has more than one dependency, provide a comma-separated list of packages in the order of installation.

For example, if your package depends on the package Expense Manager - Util, which in turn depends on the package External Apex Library, the package dependencies are:

```

```

If the package has multilevel dependencies, you can optionally set the calculateTransitiveDependencies parameter to true in the sfdx-project.json file. When calculateTransitiveDependencies is true, you can specify the package’s direct dependencies only, and the indirect (transitive) dependencies are calculated for you.

For example, if calculateTransitiveDependencies is enabled and the package depends on the package Expense Manager - Util, which in turn depends on the package External Apex Library, the package dependency is:

```

```

## Which Types of Dependencies Are Supported?

Circular Dependencies

Circular dependencies among packages aren’t supported.

A circular dependency occurs when pkgC depends on pkgB, pkgB depends on pkgA, and pkgA depends on pkgC.

Multi-level Dependencies

Multi-level package dependencies are supported.

A multi-level dependency occurs when pkgC depends on pkgB, and pkgB depends on pkgA.

![A diagram of a multilevel dependency where PkgC depends on PkgB, and PkgB depends on                         PkgA.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fsfdx_packaging_multilevel_dependencies.png&folder=pkg2_dev)

By default, you list all dependencies at all levels in the sfdx-project.json file. To specify only the package’s direct dependencies and have the indirect (transitive) dependencies calculated for you, you can optionally set calculateTransitiveDependencies to true in the sfdx-project.json file.

When calculateTransitiveDependencies is not enabled, list all dependencies in the sfdx-project.json file in the package installation order. In this example, pkgA must be installed first, followed by pkgB, and then pkgC. The dependencies specified for pkgC are both pkgA and pkgB.

```

```

When calculateTransitiveDependencies is set to true, specify each package’s direct dependencies only. In this example, pkgC depends on pkgB, pkgB depends on pkgA, and pkgC’s indirect dependency on pkgA is calculated for you.

```

```

The specified package version number also impacts the installation of package dependencies. Before pkgB can be installed, pkgA version 1.1 or higher must first be installed. If this condition isn’t met, the installation of pkgB fails.

#### See Also

-   [Advanced Project Configuration Parameters for Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_adv_config_file.htm "Advanced Project Configuration Parameters for Second-Generation Managed Packages - HTML (New Window)")

-   [Which Package Types Can Your Package Depend On?](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_dependency_overview.htm "Which Package Types Can Your Package Depend On? - HTML (New Window)")

-   [Considerations for Promoting Packages with Dependencies](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_considerations_pkg_dependency.htm "Considerations for Promoting Packages with Dependencies - HTML (New Window)")

## Code Examples

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
      "versionNumber": "1.0.0.RELEASED"
   }
]
```

```
"dependencies": [ 
   {
      "package": "04txxx"
   }
]
```

```
"dependencies": [
   {
      "package" : "External Apex Library - 1.0.0.4"

    },
   {
      "package": "Expense Manager - Util",
      "versionNumber": "4.7.0.RELEASED"

   }
]
```

```
"dependencies": [
   {
      "package": "Expense Manager - Util",
      "versionNumber": "4.7.0.RELEASED"

   }
]
```
