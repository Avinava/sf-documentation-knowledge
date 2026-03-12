---
title: "Plan Your Package Migration"
domain: pkg1-dev
topic: plan-your-package-migration
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.479Z
estimatedTokens: 1099
keywords: [Plan, Package, Migration, ready, move, subscribers, 2GP, speed, ease, depend, few, key, factors, Supporting, Multiple]
---

# Plan Your Package Migration

> Are you ready to move your subscribers to 2GP? The speed and ease of your package
  migration depend on a few key factors.

# Plan Your Package Migration

Are you ready to move your subscribers to 2GP? The speed and ease of your package migration depend on a few key factors.

Before you start, think about your current situation:

-   How many 1GP packages do you own?
-   How many subscribers are using them?
-   Are your subscribers all using the same major and minor version of your package, or are you supporting multiple package versions?
-   Do your packages depend on other packages?

Be sure to review the [Considerations for Package Migrations](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/migrations_known_limitations.htm) and the prerequisites listed in [Before you Begin Package Migrations](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_prerequistes.htm).

## Supporting Multiple Versions of a Package?

If you currently have subscribers using multiple versions of your package, think through how to upgrade your subscribers using lower versions of your 1GP package.

When you migrate a package, the 1GP package version installed on a subscriber org must match the major.minor.patch version of the converted 2GP package you migrate to that org. When you run the Salesforce CLI package conversion command, the latest major.minor managed-released package version is converted.

If you’re able to get your subscribers all updated to the same package version, you only need to convert that one package version (for example version 6.0), and then you could bulk migrate all subscribers to version 6.0 of the converted 2GP package. Package migration is significantly easier if you aren’t having to convert and migrate several versions of the same package.

But if upgrading all subscribers to the same package version isn’t possible for you, make sure to create an upgrade path for subscribers using lower package versions. One way to do that is to convert each 1GP package version that you promote to the managed-released state.

| Package Version | Package Built After 6/15/25? | Can package version be converted to 2GP? |
| --- | --- | --- |
| 1.0 | No | No |
| 1.1 | No | No |
| 1.2 | No | No |
| 1.3 | Yes | Yes. If it’s converted before creating 1.4, otherwise, no. |
| 1.4 | Yes | Yes. If it’s converted before creating 1.5, otherwise, no. |
| 1.5 | Yes | Yes. If it’s converted before creating 1.6, otherwise, no. |
| 1.6 | Yes | Yes. If it’s converted before creating 1.7, otherwise, no. |

If you convert package version 1.3 before you create version 1.4, then subscribers using versions 1.0-1.2 can be upgraded to 1.3 and migrated to 2GP. Even if you aren’t ready to migrate subscribers, simply having the converted 1.3 package version gives subscribers using version 1.3 and lower an upgrade path in the future. Without the converted version 1.3, subscribers must to upgrade to version 1.4 or whatever converted versions are available.

If your subscribers are using a 1GP major.minor package version that hasn’t been converted, you must first upgrade them to a 1GP package version that has been converted.

## Migrating Packages with Dependencies

If the package you plan to convert depends on other packages, the order in which you migrate your package might be significant. As you may already know, a 1GP package can't depend on a 2GP package.

![Graphic illustration of package dependencies](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fmigration_dependencies_graphic.png&folder=pkg1_dev)

This limitation impacts the order in which you migrate a package with dependencies. Because 1GP packages can’t depend on 2GP packages, when you migrate a 1GP package with dependencies, we recommend migrating the packages in a particular order starting with the leaf package.

![Graphic displays the best order for migrating packages with dependencies](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fmigration_dependency_flow.png&folder=pkg1_dev)

In this example of a three-level package dependency, you migrate the leaf package, followed by the extension package, and end with migrating the base package.

It’s possible to migrate the base package first, but this creates added complexity as 1GP extension packages can't depend on a base 2GP package. Therefore, our recommendation is to start migrating with leaf packages and then make your way down to the base package.
