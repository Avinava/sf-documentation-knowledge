---
title: "How Manageability Rules and Ancestry Impact Upgrades for Second-Generation Managed
  Packages"
domain: pkg2-dev
topic: how-manageability-rules-and-ancestry-impact-upgrades-for-second-generation-manag
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:26.971Z
estimatedTokens: 980
keywords: [How, Manageability, Rules, Ancestry, Impact, Upgrades, Second-Generation, Managed, Packages, dive, package, 2GP, it’s, understand, concepts]
---

# How Manageability Rules and Ancestry Impact Upgrades for Second-Generation Managed
  Packages

> Before you dive in and create your first second-generation managed package (managed
  2GP), it’s important to understand these concepts, and how they affect each other.

# How Manageability Rules and Ancestry Impact Upgrades for Second-Generation Managed Packages

Before you dive in and create your first second-generation managed package (managed 2GP), it’s important to understand these concepts, and how they affect each other.

-   Manageability Rules
-   Package Ancestry
-   Package Upgrades

Manageability Rules

Each metadata component that you include in a managed 2GP package has certain rules that determine its behavior in a subscriber org. Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is installed in a subscriber’s org.

Manageability rules apply at both the component level and at the component attribute level. For example, manageability rules determine whether you or the subscriber can delete a custom field, and more specifically whether either of you can edit the Field Label, Default Value, or other attributes of the custom field. For all first- and second-generation managed packages, we enforce manageability rules during package version creation. If you attempt to make a change that would break a manageability rule for one of the metadata components in your package, your package version creation fails.

Package Ancestry

Second-generation managed packaging offers a flexible linear package versioning model by letting you break your linear versioning and abandon a package version you no longer want to build upon. We call these versioning decisions package ancestry. When you create a package version, you must also specify which package version is the ancestor.

In this quick glance at a package ancestry tree, version 1.2 and 1.5 have been abandoned. To dig deeper into this topic, see [Package Ancestors](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_package_ancestor_intro.htm "HTML (New Window)").

![Visualization of a package ancestry tree](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fsfdx_packaging_ancestry_nodes.png&folder=pkg2_dev)

How Manageability Rules and Ancestry Impact Package Upgrades

Both manageability rules and package ancestry impact package upgrades. During package upgrade we enforce the manageability rule for each new and changed component in your package version. Depending on what you changed when you created the new package version, some metadata is added to the org during package upgrade, other metadata is modified or deleted, and some changes aren’t applied at all.

For example, page layouts don’t get updated during package upgrade, so if you change a page layout, only new customers receive your modified page layout. When existing subscribers upgrade their package, they won’t receive that change. Conversely, changes to Apex code or the formula in a formula field are updated during a package upgrade.

Package ancestry determines the package upgrade path. This is a complex topic, and we have topics that go deeper into this subject. At a high level the package version you designate as the ancestor determines whether a subscriber can upgrade to that version. Subscribers can upgrade from one package version to another only if the ancestry tree is followed. To learn more, see [Understanding Package Upgrades with Ancestry](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_upgrades.htm "HTML (New Window)").

#### See Also

-   [Package Ancestors for Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_package_ancestor_intro.htm "Package Ancestors for Second-Generation Managed Packages - HTML (New Window)")

-   [Understanding Package Upgrades with Ancestry](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_upgrades.htm "Understanding Package Upgrades with Ancestry - HTML (New Window)")
