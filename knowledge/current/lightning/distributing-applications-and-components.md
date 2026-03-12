---
title: "Distributing Applications and Components"
domain: lightning
topic: distributing-applications-and-components
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:47.999Z
estimatedTokens: 623
keywords: [Distributing, Applications, Components, ISV, Salesforce, partner, package, distribute, users, organizations, including, outside, company]
---

# Distributing Applications and Components

> As an ISV or Salesforce partner, you can package and distribute applications and
  components to other Salesforce users and organizations, including those outside your
  company.

# Distributing Applications and Components

As an ISV or Salesforce partner, you can package and distribute applications and components to other Salesforce users and organizations, including those outside your company.

Publish applications and components to and install them from AppExchange.

A managed package ensures that your application and other resources are fully upgradeable. To create and work with managed packages, you must register a namespace prefix. A managed package includes your namespace prefix in the component names and prevents naming conflicts in an installer’s organization. After a managed package is released, the application or component names are locked, but the package developer can still edit these attributes.

-   API Version
-   Description
-   Label
-   Language
-   Markup

-   **[Apex Class Considerations for Packages](atlas.en-us.lightning.meta/lightning/apps_packaging_apex.htm)**
    Keep these considerations in mind when you develop Apex classes for packages.
-   **[Adding Aura Components to Managed Packages](atlas.en-us.lightning.meta/lightning/apps_packaging_add_components.htm)**
    Add an Aura component to a managed package from a package detail page in Setup.
-   **[Deleting Aura Components from Managed Packages](atlas.en-us.lightning.meta/lightning/apps_packaging_delete_components.htm)**
    After you’ve released a managed package, you may decide to refactor the package and delete an Aura component. It’s your responsibility to educate your customers about the potential impact from any components you delete. In the Release Notes for your upgraded package, list all custom components you’ve deleted and notify customers of any necessary actions.

#### See Also

-   [*Second-Generation Managed Packaging Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp.htm "Second-Generation Managed Packaging Developer Guide - HTML (New Window)")

-   [*First-Generation Managed Packaging Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/sharing_apps.htm "First-Generation Managed Packaging Developer Guide - HTML (New Window)")

-   [Testing Your Apex Code](atlas.en-us.lightning.meta/lightning/apps_packaging_tests.htm "Before you can upload a managed package, you must write and execute tests for your Apex code to meet minimum code coverage requirements. Also, all tests must run without errors when you upload your package to AppExchange.")

## Related Topics

- Apex Class Considerations for Packages (atlas.en-us.lightning.meta/lightning/apps_packaging_apex.htm)
- Adding Aura Components to Managed Packages (atlas.en-us.lightning.meta/lightning/apps_packaging_add_components.htm)
- Deleting Aura Components from Managed Packages (atlas.en-us.lightning.meta/lightning/apps_packaging_delete_components.htm)
- Testing Your Apex Code (atlas.en-us.lightning.meta/lightning/apps_packaging_tests.htm)
