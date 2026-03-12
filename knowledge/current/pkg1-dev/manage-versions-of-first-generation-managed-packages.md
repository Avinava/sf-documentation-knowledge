---
title: "Manage Versions of First-Generation Managed Packages"
domain: pkg1-dev
topic: manage-versions-of-first-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.456Z
estimatedTokens: 456
keywords: [Manage, Versions, First-Generation, Managed, Packages, upload, package, AppExchange, Manager]
---

# Manage Versions of First-Generation Managed Packages

> After you upload a package to AppExchange, you can still manage it from the Package
    Manager page.

# Manage Versions of First-Generation Managed Packages

After you upload a package to AppExchange, you can still manage it from the Package Manager page.


| User Permissions Needed |
| --- |
| To upload packages: | Upload AppExchange Packages |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Building a new app? Have you considered using second-generation managed packages? Flexible versioning and the ability to share a namespace across packages are just two reasons why developers love creating second-generation managed packages. We think you’d love it, too. To learn more, see: [Why Switch to Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/why_switch_2GP.htm), and [Comparison of First- and Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_comparison.htm).

To manage your versions:

1.  From Setup, enter Packages in the Quick Find box, then select **Packages**.
2.  Select the package that contains the app or components you uploaded.
3.  Select the version number listed in the Versions tab.
    -   To change the password option, click **Change Password** link.
    -   To prevent new installations of this package while allowing existing installations to continue operating, click **Deprecate**.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

        #### Note

        You can’t deprecate the most recent version of a managed package.

    -   To make a deprecated version available for installation again, click **Undeprecate**.
    -   To view the package installation URL, see **Installation URL**. Installation URLs contain the 04t package ID for the package version.
