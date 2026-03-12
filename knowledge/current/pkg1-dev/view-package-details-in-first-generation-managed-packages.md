---
title: "View Package Details in First-Generation Managed Packages"
domain: pkg1-dev
topic: view-package-details-in-first-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.381Z
estimatedTokens: 2216
keywords: [View, Package, First-Generation, Managed, Packages, Setup, enter, Quick, box, select, Click, including, added, components, whether]
---

# View Package Details in First-Generation Managed Packages

> From Setup, enter Packages in the Quick
    Find box, then select Packages. Click the name of a
    package to view its details, including added components, whether it’s a managed package,
    whether the package has been uploaded, and so on.

# View Package Details in First-Generation Managed Packages

From Setup, enter Packages in the Quick Find box, then select **Packages**. Click the name of a package to view its details, including added components, whether it’s a managed package, whether the package has been uploaded, and so on.

From the package detail page:

-   To change the package name, the custom link that displays when users click Configure, or the description, click **Edit**.
-   To delete the package, click **Delete**. This action doesn’t delete the components contained in the package, but the components are no longer bundled together within this package.
-   To upload the package, click **Upload**. You’re notified by email when the upload is complete.
-   You can enable, disable, or change the dynamic Apex and API access that components in the package have to standard objects in the installing org by using the links next to API Access.

## View Package Details

For package developers, the package detail section displays these attributes (in alphabetical order).

| Attribute | Description |
| --- | --- |
| API Access | The type of access that the API and dynamic Apex that package components have. The default is Unrestricted, which means that all package components that access the API have the same access as the user who is logged in. Click Enable Restrictions or Disable Restrictions to change the API and dynamic Apex access permissions for a package. |
| Created By | The name of the developer that created this package, including the date and time. |
| Description | A description of the package. |
| Language | The language used for the labels on components. The default value is your user language. |
| Last Modified By | The name of the last user to modify this package, including the date and time. |
| Notify on Apex Error | The username of the person who receives email notifications when an exception occurs in Apex that isn’t caught by the code. If you don’t specify a username, all uncaught exceptions send an email notification to Salesforce. Available only for managed packages.Apex can be packaged only from Developer, Enterprise, Unlimited, and Performance Edition orgs. |
| Notify on Packaging Error | The email address of the person who receives email notifications if an error occurs when a subscriber’s attempt to install, upgrade, or uninstall a packaged app fails. This field appears only if packaging error notifications are enabled. To enable notifications, contact your Salesforce representative. |
| Package Name | The name of the package, provided by the publisher. |
| Push Upgrade Exclusion List | A comma-separated list of org IDs to exclude when you push a package upgrade to subscribers. |
| Post Install Script | The Apex code that runs after this package is installed or upgraded. For more information, see Run Apex on Package Install/Upgrade. |
| Type | Indicates whether it’s a managed or unmanaged package. |
| Uninstall Script | The Apex code that runs after this package is uninstalled. For more information, see Run Apex on Package Uninstall. |

## View Package Components

The Components tab lists each package component contained in the package, including the name and type of each component.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Some related components are automatically included in the package even though they aren’t displayed in the Package Components list. For example, when you add a custom object to a package, its custom fields, page layouts, and relationships with standard objects are included. For a list of components that Salesforce automatically includes, see [Components Automatically Added](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_components_auto_added.htm#packaging_components_auto_added "When adding components to your first-generation managed package, related components are automatically added. For example, if you add a Visualforce page to a package that references a custom controller, that Apex class is also added.").

Package components frequently depend on other components that aren’t always added to the package explicitly. Each time you change a package, Salesforce checks for dependencies and displays the components as package members. Package Manager checks for dependencies and shows the component relationship to the package in the Include By column of the Package Details.

When your package contains 1,000 or more components, you can decide when to refresh the components list in the Package Details and avoid a long wait while this page loads. The components list refreshes automatically for packages with less than 1,000 components. Click **Refresh Components** if the package has new or changed components, and wait for the list to refresh.

Click **View Dependencies** to review a list of components that rely on other components, permissions, or preferences within the package. An entity can include such things as a standard or custom field, or an organization-wide setting like multicurrency. Your package can’t be installed unless the installer has the listed components enabled or installed. Click **Back to Package** to return to the Package detail page.

Click **View Deleted Components** to see which components were deleted from the package across all its versions.

## View Version History

For package developers, the Versions tab lists all the previous uploads of a package.

To manage an uploaded package version, click the version number of a listed upload. For more information, see [Manage Versions of First-Generation Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/managing_uploads.htm#managing_uploads "After you upload a package to AppExchange, you can still manage it from the Package Manager page.").

To [automatically upgrade subscribers to a specific version](atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_scheduling.htm#push_upgrade_scheduling "After you’ve created an updated version of your package, you can automatically deploy it to customers using a push upgrade."), click **Push Upgrades**. Orgs entered in the Push Upgrade Exclusion List are omitted from the upgrade. The orgs can still install the upgrade when you publish the new version.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Push Upgrades is available for patches and major upgrades. Salesforce Partners can request Push Major Upgrade functionality. Log a support case in the [Salesforce Partner Community](https://partners.salesforce.com "HTML (New Window)").

The versions table displays the package attributes (in alphabetical order).

| Attribute | Description |
| --- | --- |
| Action | Lists the actions you can perform on the package. The possible actions are:Deprecate—Deprecates a package version.Users can no longer download or install this package. However, existing installations continue to work.Undeprecate—Enables a previously deprecated package version to be installed again. |
| Status | The status of the package. The possible statuses are:Released: The package is Managed - Released.Beta: The package is Managed - Beta.Deprecated: The package version is deprecated. |
| Version Name | The version name for this package. The version name is the marketing name for a specific release of a package. It’s more descriptive than Version Number. |
| Version Number | The version number for the latest installed package version. The format is majorNumber.minorNumber.patchNumber, such as 2.1.3. The version number represents a release of a package. Version Name is a more descriptive name for the release. The patchNumber is generated only when you create a patch. If there’s no patchNumber, it’s assumed to be zero (0). |

## View Patch Development Orgs

Each patch is developed in a patch development org, which is the org where patch versions are developed, maintained, and uploaded. To start developing a patch, create a patch development org. [Create and Upload Patches](atlas.en-us.pkg1_dev.meta/pkg1_dev/patches_creating.htm#patches_creating "Patch versions are developed and maintained in a patch development org.") Patch development orgs permit developers to change existing components without causing incompatibilities between existing subscriber installations. Click **New** to create a patch for this package.

The Patch Organizations table lists all the patch development orgs created. It lists these attributes (in alphabetical order).

| Attribute | Description |
| --- | --- |
| Action | Lists the actions that you can perform on a patch development org. The possible actions are:Login—Log in to your package version.Reset—Emails a temporary password for your patch development org. |
| Administrator Username | The login associated with the patch org. |
| Patching Major Release | The package version number that you’re patching. |

## Related Topics

- Run Apex on Package Install/Upgrade (atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_post_install_script.htm)
- Run Apex on Package Uninstall (atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_uninstall_script.htm)
- Components Automatically Added (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_components_auto_added.htm)
- Manage Versions of First-Generation Managed
        Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/managing_uploads.htm)
- automatically upgrade subscribers to a
          specific version (atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_scheduling.htm)
- Create and Upload Patches (atlas.en-us.pkg1_dev.meta/pkg1_dev/patches_creating.htm)
