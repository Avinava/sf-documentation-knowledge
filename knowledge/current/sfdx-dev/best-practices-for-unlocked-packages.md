---
title: "Best Practices for Unlocked Packages"
domain: sfdx-dev
topic: best-practices-for-unlocked-packages
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:18.733Z
estimatedTokens: 493
keywords: [Best, Practices, Unlocked, Packages, suggest, follow, working]
---

# Best Practices for Unlocked Packages

> We suggest that you follow these best practices when working with unlocked packages.

# Best Practices for Unlocked Packages

We suggest that you follow these best practices when working with unlocked packages.

-   We recommend that you work with only one Dev Hub, and enable Dev Hub in a production org.
-   The Dev Hub org against which you run the sf package create command becomes the owner of the package. If the Dev Hub org associated with a package expires or is deleted, its packages no longer work.
-   Use care in deciding how to utilize namespaces. For most customers, we recommend working with no namespace or a single namespace to avoid unnecessary complexity in managing components. If you’re test-driving unlocked packages, use a test namespace.

    Use real namespaces only when you’re ready to embark on a development path headed for release in a production org.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

    #### Note

    You can’t install a no-namespace, unlocked package into any org with a namespace (for example, a scratch org with a namespace).

-   Include the \--tag option when you use the sf package version create and sf package version update commands. This option helps you keep your version control system tags in sync with specific package versions.
-   Create user-friendly aliases for packaging IDs, and include those aliases in your Salesforce DX project file and when running CLI packaging commands. See: [Package IDs and Aliases for Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_pkg_ids.htm "During the package lifecycle, packages and package versions are identified by an ID or package alias. When you create a package or package version, Salesforce CLI creates a package alias based on the package name, and stores that name in the sfdx-project.json file. When you run CLI commands or write scripts to automate packaging workflows, it’s often easier to reference the package alias, instead of the package ID or package version ID.").

## Related Topics

- Package IDs and Aliases for Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_pkg_ids.htm)
