---
title: "After Installing a Package"
domain: appExchangeInstallGuide
topic: after-installing-a-package
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:00.570Z
estimatedTokens: 1813
keywords: [Installing, Package, solution, AppExchange, manage, solutions, packages, installed, Salesforce, org, Uninstall, Managed, Considerations, Uninstalling]
---

# After Installing a Package

> After installing a solution from AppExchange, manage it like you manage the other
      solutions and packages you installed in your Salesforce org.

# After Installing a Package

After installing a solution from AppExchange, manage it like you manage the other solutions and packages you installed in your Salesforce org.

## Manage Installed Packages

Manage packages installed in your Salesforce org, including assigning licenses to users, uninstalling packages, and exporting package data.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=appExchangeInstallGuide)

#### Note

Salesforce only lists license information for managed packages. For unmanaged packages, the license-related fields, such as **Allowed Licenses**, **Used Licenses**, and **Expiration Date**, displays the value “N/A.”

-   Click **Uninstall** to remove the package and all its components from your Salesforce organization.
-   Click **Upgrade to Recommended Version** to install the package version recommended by the package publisher.
-   Click **Manage Licenses** to assign available licenses to users in your organization.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=appExchangeInstallGuide)

    #### Note

    If you purchased a site license or if the managed package is not licensed, Salesforce assigns licenses to all your users and you can’t manage licenses. Your users can use the package as long as they have the appropriate permissions.

-   Click **Become Primary Contact** to update the current contact for the installed package to your username. This contact name displays for the package publisher from the Push Package Upgrade page. Initially, it’s set to the name of the person who installed the package. If you have Download AppExchange Packages permission and aren’t the current primary contact, this option is enabled.
-   Click **Configure** if the publisher has included a link to an external website with information about configuring the package.
-   Click the package name to view details about this package.
-   View the publisher of the package.
-   View the status of the licenses for this package. Available values include:

    -   Trial
    -   Active
    -   Suspended
    -   Expired
    -   Free

    This field is only displayed if the package is managed and licensed.

-   Track the number of licenses available (Allowed Licenses) and the number of licenses that are assigned to users (Used Licenses).
-   View the date your licenses for this package are scheduled to expire.
-   View the date your licenses were installed.
-   View the number of custom apps, tabs, and objects this package contains.
-   See whether the custom apps, tabs, and objects count toward your organization’s limits. If they do, the box in the Limits column is checked.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=appExchangeInstallGuide)

#### Note

If you have not installed a licensed managed package, the Publisher, Status, Allowed Licenses, Used Licenses, and Expiration Date fields do not appear.

After an uninstall, Salesforce automatically creates an export file containing the package data, associated notes, and any attachments. When the uninstall is complete, Salesforce sends an email containing a link to the export file to the user performing the uninstall. The export file and related notes and attachments are listed below the list of installed packages. We recommend storing the file elsewhere because it’s only available for a limited time after the uninstall completes. Using this list, you can:

-   Click **Download** to open or store the export file.
-   Click **Del** to delete the export file.

If a criteria-based sharing rule references a field from a licensed managed package whose license has expired, (expired) is appended to the label of the field. The field label is displayed in the field drop-down list on the rule’s definition page in Setup. Criteria-based sharing rules that reference expired fields aren't recalculated, and new records aren't shared based on those rules. However, the sharing of existing records prior to the package's expiration is preserved.

## Uninstall a Managed Package

Uninstalling a managed package removes its components and data from the org. During the uninstall process, any customizations, including custom fields or links, that you’ve made to the package are removed.

1.  From Setup, enter Installed Packages in the Quick Find box, then select **Installed Packages**.
2.  Click **Uninstall** next to the package that you want to remove.
3.  Determine whether to save and export a copy of the package’s data, and then select the corresponding radio button.
4.  Select **Yes, I want to uninstall** and click **Uninstall**.

If you choose to save a copy of the package data, we create an export file containing the package data, associated notes, and any attachments. When the uninstall is complete, we send an email containing a link to the export file to the user performing the uninstall. We delete export files two days after a completed package uninstall.

## Considerations on Uninstalling Packages

-   If you’re uninstalling a package that includes a custom object, all components on that custom object are also deleted. Deleted items include custom fields, validation rules, custom buttons, and links, workflow rules, and approval processes.
-   You can’t uninstall a package whenever a component not included in the uninstall references any component in the package. For example:
    -   When an installed package includes any component on a standard object that another component references, Salesforce prevents you from uninstalling the package. An example is a package that includes a custom user field with a workflow rule that gets triggered when the value of that field is a specific value. Uninstalling the package would prevent your workflow from working.
    -   When you’ve installed two unrelated packages that each include a custom object and one custom object component references a component in the other, you can’t uninstall the package. An example is if you install an expense report app that includes a custom user field and create a validation rule on another installed custom object that references that custom user field. However, uninstalling the expense report app prevents the validation rule from working.
    -   When an installed folder contains components you added after installation, Salesforce prevents you from uninstalling the package.
    -   When an installed letterhead is used for an email template you added after installation, Salesforce prevents you from uninstalling the package.
    -   When an installed package includes a custom field that’s referenced by Einstein Prediction Builder or Case Classification, Salesforce prevents you from uninstalling the package. Before uninstalling the package, edit the prediction in Prediction Builder or Case Classification so that it no longer references the custom field.
-   You can’t uninstall a package that removes all active business and person account record types. Activate at least one other business or person account record type, and try again.
-   You can’t uninstall a package if a background job is updating a field added by the package, such as an update to a roll-up summary field. Wait until the background job finishes, and try again.
