---
title: "Best Practices for Second-Generation Managed Packages"
domain: pkg2-dev
topic: best-practices-for-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:27.116Z
estimatedTokens: 456
keywords: [Best, Practices, Second-Generation, Managed, Packages, suggest, follow, working]
---

# Best Practices for Second-Generation Managed Packages

> We suggest that you follow these best practices when working with second-generation
  managed packages.

# Best Practices for Second-Generation Managed Packages

We suggest that you follow these best practices when working with second-generation managed packages.

-   We recommend that you work with only one Dev Hub, and enable Dev Hub in your partner business org.
-   The Dev Hub org against which you run the sf package create command becomes the owner of the package. If the Dev Hub org associated with a package expires or is deleted, its packages no longer work.
-   Include the \--tag option when you use the sf package version create and sf package version update commands. This option helps you keep your version control system tags in sync with specific package versions.
-   Create user-friendly aliases for packaging IDs, and include those aliases in your Salesforce DX project file and when running CLI packaging commands. See: [Package IDs and Aliases for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_plan_pkg_types_pkg_ids.htm "During the package lifecycle, packages and package versions are identified by an ID or package alias. When you create a second-generation managed package or package version, Salesforce CLI creates a package alias based on the package name, and stores that name in the packageAliases section of the sfdx-project.json file. When you run CLI commands or write scripts to automate packaging workflows, it’s often easier to reference the package alias, instead of the package ID or package version ID.").
-   When adding components to your package, check the product documentation for that component to ensure that the product is generally available (GA). If you choose to package a non-GA component, it may have limitations and isn't guaranteed to GA. This scenario is particularly risky if the component can't be removed from a managed package.

## Related Topics

- Package IDs and Aliases for Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_plan_pkg_types_pkg_ids.htm)
