---
title: "Know Your Orgs for Second-Generation Managed Packages"
domain: pkg2-dev
topic: know-your-orgs-for-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:26.986Z
estimatedTokens: 584
keywords: [Know, Orgs, Second-Generation, Managed, Packages, packaging, 2GP, unique, purpose, Choose, Dev, Hub, Org]
---

# Know Your Orgs for Second-Generation Managed Packages

> Some of the orgs that you use with second-generation managed packaging (managed 2GP) have
        a unique purpose.

# Know Your Orgs for Second-Generation Managed Packages

Some of the orgs that you use with second-generation managed packaging (managed 2GP) have a unique purpose.

## Choose Your Dev Hub Org

Use the Dev Hub org for these purposes.

-   As owner of all second-generation managed packages
-   To link your namespaces
-   To authorize and run your sf package Salesforce CLI commands

We recommend that your Partner Business Org is also your Dev Hub org. For important considerations about your Dev Hub org, see [Enable Dev Hub and Second-Generation Managed Packaging](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_enable_devhub.htm "The Dev Hub lets you create and manage second-generation managed packages and scratch orgs. Your Dev Hub is the designated place to find and manage all your managed 2GP packages, scratch orgs, and namespaces.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

The Dev Hub org against which you run the sf package create command becomes the owner of the package.

If the Dev Hub org expires or is deleted, packages owned by that Dev Hub:

-   Can’t be transferred to a different Dev Hub
-   Stop working and new package versions can’t be created

## Namespace Org

The primary purpose of the namespace org is to acquire a namespace for your managed 2GP package.

After you create a namespace org and specify the namespace in it, open the Dev Hub org and link the namespace org to the Dev Hub org.

## Other Orgs

When you work with managed 2GP packages, you also use these orgs:

-   Scratch orgs to develop and test your packages.
-   A target or installation org in which you install the package.

#### See Also

-   [Link a Namespace to a Dev Hub Org](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_reg_namespace.htm "Link a Namespace to a Dev Hub Org - HTML (New Window)")

-   [Scratch Org Allocations for Partners](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/isv_partner_scratch_org_allocations.htm "Scratch Org Allocations for Partners - HTML (New Window)")

-   [*Salesforce DX Developer Guide:* Scratch Orgs](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm "Salesforce DX Developer Guide: Scratch Orgs - HTML (New Window)")

## Related Topics

- Enable Dev Hub and Second-Generation Managed Packaging (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_enable_devhub.htm)
