---
title: "Managed Package Types"
domain: apex-guide
topic: managed-package-types
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:47.313Z
keywords: [Managed, Package, Types, See]
---

# Managed Package Types

# Managed Package Types

Salesforce supports the creation and distribution of Apex through different types of packages. Understand the distinctions between package types, and recognize that Apex behavior can vary across them.

A package is a container that can be as small as an individual component or as large as a set of related apps. After creating a package, you can distribute it to other Salesforce users and orgs, including orgs outside of your company.

Developers can create unmanaged packages and managed packages. These package types have different use cases and characteristics.

[Unmanaged packages](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_developing_unmanaged.htm) are best suited for one-time drops of apps that require customization after installation. After the components are installed from an unmanaged package, the components can be edited in the org that they’re installed in. The developer who created and uploaded the unmanaged package has no control over the installed components, and can’t change or upgrade them.

Managed packages are ideal for commercial distribution through the [AppExchange](https://appexchange.salesforce.com/ "HTML (New Window)"). Unlike unmanaged packages, package developers can upgrade managed packages and push these changes to subscriber orgs. Preserving the backwards-compatibility of managed packages is the package developer’s responsibility. However, Salesforce provides significant guardrails and tools that help package developers safely upgrade managed packages while minimizing the risk of introducing changes that may break existing code.

Salesforce supports [first-generation managed packages (1GP)](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/sharing_apps.htm) and [second-generation managed packages (2GP)](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp.htm). Salesforce also supports the [conversion and migration of 1GP managed packages to 2GP managed packages](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/move_to_second_gen_pkg.htm). For new apps, we recommend using 2GP managed packages, as they allow for source-driven development and flexible versioning. See [Why Switch to Second-Generation Managed Packaging](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/why_switch_2GP.htm) and [Comparison of First- and Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_comparison.htm).

Apex classes and triggers from 1GP, 2GP, and migrated 2GP managed packages can behave differently depending on the managed package type. If a section of the Apex Developer Guide or the Apex Reference Guide doesn’t specify whether a behavior applies to only 1GP or 2GP, then it applies to all managed package types.

#### See Also

-   [*ISVforce Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/packaging_intro.htm)
    
-   [*First-Generation Managed Packaging Developer Guide*: Move to 2GP](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/move_to_second_gen_pkg.htm)
    
-   [*Second-Generation Managed Packaging Developer Guide*: Components Available in Second-Generation Managed Packages–Apex Class](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_packageable_components.htm#mdc_apex_class)