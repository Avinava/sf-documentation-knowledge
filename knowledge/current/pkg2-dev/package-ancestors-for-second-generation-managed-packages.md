---
title: "Package Ancestors for Second-Generation Managed Packages"
domain: pkg2-dev
topic: package-ancestors-for-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.106Z
estimatedTokens: 1162
keywords: [Package, Ancestors, Second-Generation, Managed, Packages, packaging, 2GP, offers, flexible, versioning, model, lets, break, linear, abandon]
---

# Package Ancestors for Second-Generation Managed Packages

> Second-generation managed packaging (managed 2GP) offers a flexible package versioning
  model that lets you break your linear versioning and abandon a package version you no longer want
  to build upon. We call these versioning decisions package ancestry.

# Package Ancestors for Second-Generation Managed Packages

Second-generation managed packaging (managed 2GP) offers a flexible package versioning model that lets you break your linear versioning and abandon a package version you no longer want to build upon. We call these versioning decisions *package ancestry*.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

Only package versions that have been promoted to the managed-released state can be specified as a package ancestor.

When package versioning is linear, the package version number (formatted as major.minor.patch.build) always increments to an increasing number. For example, looking at just the major and minor version numbers, linear versioning looks something like 1.0 → 1.1 → 1.2 → 2.0. The next package version created in this linear versioning example must be higher than 2.0.

## How Managed 2GP Package Versioning Affects Package Upgrades

Before we dig into package ancestry and how managed 2GP lets you break your linear versioning, let’s clarify how package versioning impacts package upgrades. Let’s use our previous example of a package version history that looks like this, 1.0 → 1.1 → 1.2 → 2.0. A customer could install version 1.0 and upgrade through each of the subsequent package versions, or they could skip versions and upgrade from 1.0 to 2.0. As long as they upgrade from a lower package version number to a higher package version number, the package upgrade succeeds.

But what if during your development process you create a package version that you don’t want to build upon? Managed 2GP lets you break free from linear versioning and select a different package version to build upon.

Say your team creates version 1.0, then 1.1, then 1.2 and oops! 1.2 made a mess of 1.1. Not a problem. When you create a package version, you specify which package version is the ancestor. So you abandon 1.2, and make 1.1 the ancestor of 1.3. And this process can be repeated. For example, the illustration shows how to abandon 1.5, and build 1.6 off 1.4.

![Visualization of a versioning tree with three branches](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fsfdx_packaging_ancestry_nodes.png&folder=pkg2_dev)

This more complex and tree-like versioning has the added benefit of making it possible for two or more development teams to do parallel package development.

## With Great Power Comes Great Responsibility

The flexibility to break from linear versioning is powerful. But remember that if abandoned versions like 1.2 and 1.5 are installed in customer orgs, those customers no longer have an upgrade path. Packages can only upgrade along the ancestry line. For example, you can upgrade from version 1.1 to 1.7, but not from version 1.5 to 1.7.

## Patch Versions and Package Ancestry

You can’t specify a [patch version](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_patch_version.htm), such as 1.0.2, as a direct ancestor of a non-patch version. Instead, use the [keyword](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_keywords.htm) “ancestorVersion" : "HIGHEST”, or specify a non-patch version as the ancestor. Installed patch versions inherit the upgrade path of the non-patch version with the same major and minor number. For example, patch version 1.0.3 has the same upgrade path as 1.0.0.

-   **[Understanding Package Upgrades with Ancestry](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_upgrades.htm)**
    Review how package ancestry impacts which package version upgrades are allowed.
-   **[View Package Ancestry](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_view_ancestors.htm)**
    Use Salesforce CLI commands to quickly confirm your package’s ancestor, or to create a visualization of the package ancestry tree.

#### See Also

-   [Understanding Package Upgrades with Ancestry](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_upgrades.htm "Understanding Package Upgrades with Ancestry - HTML (New Window)")

-   [View Package Ancestry](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_view_ancestors.htm "View Package Ancestry - HTML (New Window)")

-   [Namespace-Based Visibility for Apex Classes in Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_namespace_visibility.htm "Namespace-Based Visibility for Apex Classes in Second-Generation Managed Packages - HTML (New Window)")

## Related Topics

- Understanding Package Upgrades with Ancestry (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_upgrades.htm)
- View Package Ancestry (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_view_ancestors.htm)
