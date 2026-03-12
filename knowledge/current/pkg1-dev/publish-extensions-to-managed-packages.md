---
title: "Publish Extensions to Managed Packages"
domain: pkg1-dev
topic: publish-extensions-to-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.639Z
estimatedTokens: 743
keywords: [Publish, Extensions, Managed, Packages, extension, any, package, component, components, adds, functionality, requires, base, installed, org]
---

# Publish Extensions to Managed Packages

> An extension is any package, component, or set of
      components that adds to the functionality of a managed package. An extension requires
      that the base managed package is installed in the org. For example, if you have built a
      recruiting app, an extension to this app can include a component for performing
      background checks on candidates.

# Publish Extensions to Managed Packages

An extension is any package, component, or set of components that adds to the functionality of a managed package. An extension requires that the base managed package is installed in the org. For example, if you have built a recruiting app, an extension to this app can include a component for performing background checks on candidates.

| Available in: Group, Professional, Enterprise, Performance, Unlimited, and Developer Editions |
| --- |


| User Permissions Needed |
| --- |
| To create packages: | Create AppExchange Packages |
| To upload packages: | Upload AppExchange Packages |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Building a new app? Have you considered using second-generation managed packages? Flexible versioning and the ability to share a namespace across packages are just two reasons why developers love creating second-generation managed packages. We think you’d love it, too. To learn more, see: [Why Switch to Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/why_switch_2GP.htm), and [Comparison of First- and Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_comparison.htm).

The community of developers, users, and visionaries building and publishing apps on AppExchange is part of what makes Salesforce Platform such a rich development platform. Use this community to build extensions to other apps and encourage them to build extensions to your apps.

When working with both first-generation (1GP) and second-generation (2GP) managed packages, only certain combinations of packages are supported. See: [Which Package Types Can Your Package Depend On?](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_dependency_overview.htm)

To publish extensions to a managed package:

1.  Install the base package in the Salesforce org that you plan to use to upload the extension.
2.  Build your extension components.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

    #### Note

    To build an extension, install the base package and include a dependency to that base package in your package. The extension attribute automatically becomes active.

3.  Create a package and add your extension components. Salesforce automatically includes some related components.
4.  Upload the new package that contains the extension components.
5.  Proceed with the publishing process as usual. For information on creating a test drive or registering and publishing your app, go to [Salesforce Partner Community](https://partners.salesforce.com).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Packages can’t be upgraded to Managed - Beta if they’re used within the same org as an extension.
