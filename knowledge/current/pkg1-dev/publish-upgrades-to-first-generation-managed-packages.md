---
title: "Publish Upgrades to First-Generation Managed Packages"
domain: pkg1-dev
topic: publish-upgrades-to-first-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.643Z
estimatedTokens: 1181
keywords: [Publish, Upgrades, First-Generation, Managed, Packages, publisher, ensure, app, upgradeable, converting, package]
---

# Publish Upgrades to First-Generation Managed Packages

> As a publisher, first ensure that your app is upgradeable by converting it to a managed
    package.

# Publish Upgrades to First-Generation Managed Packages

As a publisher, first ensure that your app is upgradeable by converting it to a managed package.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Building a new app? Have you considered using second-generation managed packages? Flexible versioning and the ability to share a namespace across packages are just two reasons why developers love creating second-generation managed packages. We think you’d love it, too. To learn more, see: [Why Switch to Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/why_switch_2GP.htm), and [Comparison of First- and Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_comparison.htm).


| User Permissions Needed |
| --- |
| To configure namespace settings: | Customize Application |
| To create packages: | Create AppExchange Packages |
| To upload packages: | Upload AppExchange Packages |

Any changes you make to the components in a managed package are automatically included in subsequent uploads of that package, with one exception. When you upgrade a package, changes to the API access are ignored even if the developer specified them. These changes are ignored so that the administrator installing the upgrade has full control. Installers must carefully examine the changes in package access in each upgrade during installation and note all acceptable changes. Then, because those changes are ignored, the admin must manually apply any acceptable changes after installing an upgrade.

1.  From Setup, enter Package Manager in the Quick Find box, then select **Package Manager**.
2.  Select the package from the list of available packages.
3.  View the list of package components. Changes you have made to components in this package are automatically included in this list. If the changes reference additional components, those components are automatically included as well. To add new components, click **Add** to add them to the package manually.
4.  Click **Upload** and upload it as usual.

    After you upload a new version of your Managed - Released package, you can click **Deprecate** so installers can’t install an older version. Deprecation prevents new installations of older versions without affecting existing installations.

    You can’t deprecate the most recent version of a managed package upload.

5.  When you receive an email with the link to the upload on AppExchange, notify your installed users that the new version is ready. To distribute this information, use the list of installed users from the License Management Application (LMA). The License Management Application (LMA) automatically stores the version number that your installers have in their organizations.

-   **[Plan the Release of First-Generation Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/determine_managed_package_state.htm)**
    Releasing a managed package is similar to releasing any other program in software development.
-   **[Remove Components from First-Generation Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_managed_component_deletion.htm)**
    Remove metadata components such as Apex classes that you no longer want in your first-generation managed packages.
-   **[Delete Components from First-Generation Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/viewing_deleted_components.htm)**
    After you've uploaded a Managed - Released first-generation managed package, you may find that a component needs to be deleted from your packaging org.
-   **[Modifying Custom Fields after a Package Is Released](atlas.en-us.pkg1_dev.meta/pkg1_dev/modifying_custom_fields.htm)**
    The following changes are allowed to custom fields in a package, after it’s released.
-   **[Manage Versions of First-Generation Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/managing_uploads.htm)**
    After you upload a package to AppExchange, you can still manage it from the Package Manager page.
-   **[View Unused Components in a Managed Package](atlas.en-us.pkg1_dev.meta/pkg1_dev/unused_package_components.htm)**
    View components no longer being used in the current version of a package.
-   **[Push Package Upgrades to Subscribers](atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_intro.htm)**
    A push upgrade is a method of automatically upgrading your customers to a newer version of your package. This feature can be used to ensure that all your customers are on the same or latest version of your package. You can push an upgrade to any number of organizations that have installed your managed package.

## Related Topics

- Plan the Release of First-Generation Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/determine_managed_package_state.htm)
- Remove Components from First-Generation Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_managed_component_deletion.htm)
- Delete Components from First-Generation Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/viewing_deleted_components.htm)
- Modifying Custom Fields after a Package Is Released (atlas.en-us.pkg1_dev.meta/pkg1_dev/modifying_custom_fields.htm)
- Manage Versions of First-Generation Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/managing_uploads.htm)
- View Unused Components in a Managed Package (atlas.en-us.pkg1_dev.meta/pkg1_dev/unused_package_components.htm)
- Push Package Upgrades to Subscribers (atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_intro.htm)
