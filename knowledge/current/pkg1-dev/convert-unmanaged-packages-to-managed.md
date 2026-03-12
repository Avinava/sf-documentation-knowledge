---
title: "Convert Unmanaged Packages to Managed"
domain: pkg1-dev
topic: convert-unmanaged-packages-to-managed
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.686Z
estimatedTokens: 385
keywords: [Convert, Unmanaged, Packages, Managed, Package, uploads, installs, Group, Professional, Enterprise, Performance, Unlimited, Developer, Editions]
---

# Convert Unmanaged Packages to Managed

> Package uploads and installs are available in
         Group, Professional, Enterprise, Performance, Unlimited,
        and Developer Editions

# Convert Unmanaged Packages to Managed

| Available in: Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Developer EditionPackage uploads and installs are available in Group, Professional, Enterprise, Performance, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To configure namespace settings: | Customize Application |
| To create packages: | Create AppExchange Packages |
| To upload packages: | Upload AppExchange Packages |

Before you convert an existing package to managed, alert any current installers that they must save their data:

1.  Export all the data from the previous, unmanaged version of the package.
2.  Uninstall the unmanaged package.
3.  Install the new managed version of the package.
4.  Import all the exported data into the new managed package.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

    #### Note

    Note to installers: if you have made customizations to an installation of an unmanaged package, make a list of these customizations before uninstalling since you may want to implement them again.


To convert an unmanaged package into a managed package:

1.  [Register a namespace](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/register_namespace_prefix.htm "HTML (New Window)").
2.  From Setup, enter Package Manager in the Quick Find box, then select **Package Manager**.
3.  Edit the package that you want to make managed, then select **Managed**.
