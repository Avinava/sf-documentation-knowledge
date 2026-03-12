---
title: "Enable Dev Hub and Second-Generation Managed Packaging"
domain: pkg1-dev
topic: enable-dev-hub-and-second-generation-managed-packaging
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.722Z
estimatedTokens: 590
keywords: [Enable, Dev, Hub, Second-Generation, Managed, Packaging, lets, manage, packages, scratch, orgs, designated, place, 2GP, namespaces]
---

# Enable Dev Hub and Second-Generation Managed Packaging

> The Dev Hub lets you create and manage second-generation managed packages and scratch
  orgs. Your Dev Hub is the designated place to find and manage all your managed 2GP packages,
  scratch orgs, and namespaces.

# Enable Dev Hub and Second-Generation Managed Packaging

The Dev Hub lets you create and manage second-generation managed packages and scratch orgs. Your Dev Hub is the designated place to find and manage all your managed 2GP packages, scratch orgs, and namespaces.

| Available in: Salesforce Classic and Lightning Experience |
| --- |
| Dev Hub available in: Developer, Enterprise, Performance, and Unlimited Editions |


After you enable the Dev Hub setting on a Salesforce org, that Dev Hub becomes the owner of every managed 2GP package you create. All Salesforce ISV and OEM partners should designate their Partner Business Org (PBO) as their Dev Hub org.

To enable Dev Hub:

1.  Log in to your Partner Business Org.
2.  From Setup, enter Dev Hub in the Quick Find box and select **Dev Hub**. If you don't see Dev Hub in the Setup menu, make sure that your org is one of the supported editions.
3.  Select **Enable Dev Hub**. After you enable Dev Hub, you can’t disable it.
4.  Select **Enable Unlocked Packages and Second-Generation Managed Packages**. After you enable this setting, you can’t disable it.

If you choose to use a trial or Developer Edition org as your Dev Hub, consider these factors.

-   When a trial or Developer Edition org expires, you lose access to all packages associated with that Dev Hub org.
-   You’re limited to creating up to six scratch orgs and package versions per day, with a maximum of three active scratch orgs.
-   Trial orgs expire on their expiration date.
-   Developer Edition orgs can expire due to inactivity.
-   If a package is associated with a non-production Dev Hub org, and that org expires or becomes inactive, the installed package can't be updated, and new attempts to install the package may fail.
-   If you plan to create package versions or run continuous integration jobs, it’s better to use your PBO as your Dev Hub because of higher scratch org and package version limits.

The Dev Hub org instance determines where scratch orgs are created.

-   Scratch orgs created from a Dev Hub org in Government Cloud are created on a Government Cloud instance.
-   Scratch orgs created from a Dev Hub org in Public Cloud are created on a Public Cloud instance.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

You can’t enable Dev Hub in a sandbox.
