---
title: "Select and Enable a Dev Hub Org"
domain: sfdx-dev
topic: select-and-enable-a-dev-hub-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.996Z
estimatedTokens: 903
keywords: [Select, Enable, Dev, Hub, Org, lets, scratch, orgs, unlocked, packages, second-generation, managed, designated, place, manage]
---

# Select and Enable a Dev Hub Org

> The Dev Hub lets you create scratch orgs, unlocked packages, and second-generation
  managed packages. Your Dev Hub is also the designated place to manage all your scratch orgs,
  packages, and namespaces.

# Select and Enable a Dev Hub Org

The Dev Hub lets you create scratch orgs, unlocked packages, and second-generation managed packages. Your Dev Hub is also the designated place to manage all your scratch orgs, packages, and namespaces.

| Available in: Salesforce Classic and Lightning Experience |
| --- |
| Dev Hub available in: Developer, Enterprise, Performance, and Unlimited Editions |
| Scratch orgs available in: Developer, Enterprise, Group, and Professional Editions |


Determine which org to use as your Dev Hub org, then enable the Dev Hub setting in that org. Dev Hub comprises objects with permissions that allow admins to control the level of access available to a user and an org. If you’re developing an unlocked package that you intend to deploy to other orgs, enable the Dev Hub setting in one of your active production orgs. This ensures that your package is owned by an active org.

All Salesforce ISV and OEM partners should designate their Partner Business Org (PBO) as their Dev Hub org, see [Enable Dev Hub and Second-Generation Managed Packaging](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_enable_devhub.htm) for more details.

To enable Dev Hub in an org:

1.  Log in as System Administrator to your production, Developer Edition, or trial org.
2.  From Setup, enter Dev Hub in the Quick Find box and select **Dev Hub**.

    If you don't see Dev Hub in the Setup menu, make sure that your org is one of the supported editions.

3.  To enable Dev Hub, click **Enable**.

    After you enable Dev Hub, you can’t disable it.


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

You can’t enable Dev Hub in a sandbox.

The Dev Hub org instance determines where scratch orgs are created.

-   Scratch orgs created from a Dev Hub org in Government Cloud are created on a Government Cloud instance.
-   Scratch orgs created from a Dev Hub org in Hyperforce are created on a Hyperforce instance.

Consider these factors if you select a trial or Developer Edition org as your Dev Hub.

-   You can create up to six scratch orgs and package versions per day, with a maximum of three active scratch orgs.
-   Trial orgs expire on their expiration date.
-   Developer Edition orgs can expire due to inactivity.
-   Package versions are associated with your Dev Hub org. When a trial or Developer Edition org expires, you lose access to the package versions.

-   **[Enable Unlocked Packaging](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_secondgen_pkg.htm)**
    Enable packaging in your org so you can develop unlocked packages. You can work with the packages in scratch orgs and sandboxes.
-   **[Enable Einstein Chatbot Features in Scratch Orgs](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_einstein.htm)**
    Turn on Einstein Features in your Dev Hub to eliminate the manual steps for enabling the Chatbot feature in scratch orgs. When you accept the Terms of Service for Einstein, a separate acceptance is not required in each scratch org created from this Dev Hub org. If you previously accepted the Terms of Service for Einstein to turn on an Einstein-related feature, this setting is already enabled.
-   **[Enable Language Extension Packages (Beta)](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_language_extension_packages_beta.htm)**
    Enable Language Extension Packages in Dev Hub to create language extension packages that contain translations of components in other packages. This feature is available in unlocked and first- and second-generation managed packages.

## Related Topics

- Enable Unlocked Packaging (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_secondgen_pkg.htm)
- Enable Einstein Chatbot Features in Scratch Orgs (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_einstein.htm)
- Enable Language Extension Packages (Beta) (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_language_extension_packages_beta.htm)
