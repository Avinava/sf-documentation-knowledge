---
title: "Adding Aura Components to Managed Packages"
domain: lightning
topic: adding-aura-components-to-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.002Z
estimatedTokens: 307
keywords: [Adding, Aura, Components, Managed, Packages, Add, component, package, detail, Setup]
---

# Adding Aura Components to Managed Packages

> Add an Aura component to a managed package from a package detail page in
  Setup.

# Adding Aura Components to Managed Packages

Add an Aura component to a managed package from a package detail page in Setup.

When you add an application or component to a package, all definition bundles referenced by the application or component are automatically included, such as other components, events, and interfaces. Custom fields, custom objects, list views, page layouts, and Apex classes referenced by the application or component are also included.

However, when you add a custom object to a package, you must explicitly add the application and other definition bundles that reference that custom object to the package. Other dependencies that you must add to a package explicitly include the following.

-   Trusted URLs
-   Remote Site Settings

#### See Also

-   [*Second-Generation Managed Packaging Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp.htm "Second-Generation Managed Packaging Developer Guide - HTML (New Window)")

-   [*First-Generation Managed Packaging Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/sharing_apps.htm "First-Generation Managed Packaging Developer Guide - HTML (New Window)")
