---
title: "Uninstall a First-Generation Managed Package"
domain: pkg1-dev
topic: uninstall-a-first-generation-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.605Z
estimatedTokens: 745
keywords: [Uninstall, First-Generation, Managed, Package, org, Setup, components, including, any, deprecated, were, previously, associated, deleted]
---

# Uninstall a First-Generation Managed Package

> You can uninstall a first-generation managed package from an org using the Setup UI.
  When you uninstall a first-generation managed package, all components in the package, including
  any deprecated components that were previously associated with the package, are deleted from the
  org.

# Uninstall a First-Generation Managed Package

You can uninstall a first-generation managed package from an org using the Setup UI. When you uninstall a first-generation managed package, all components in the package, including any deprecated components that were previously associated with the package, are deleted from the org.

1.  From Setup, enter Installed Packages in the Quick Find box, then select **Installed Packages**.
2.  Click **Uninstall** next to the package that you want to remove.
3.  Determine whether to save and export a copy of the package’s data, and then select the corresponding radio button.
4.  Select **Yes, I want to uninstall** and click **Uninstall**.

When you uninstall packages, consider the following:

-   If you’re uninstalling a package that includes a custom object, all components on that custom object are also deleted. Deleted items include custom fields, validation rules, custom buttons, and links, workflow rules, and approval processes.
-   You can’t uninstall a package whenever a component not included in the uninstall references any component in the package. For example:
    -   When an installed package includes any component on a standard object that another component references, Salesforce prevents you from uninstalling the package. An example is a package that includes a custom user field with a workflow rule that gets triggered when the value of that field is a specific value. Uninstalling the package would prevent your workflow from working.
    -   When you’ve installed two unrelated packages that each include a custom object and one custom object component references a component in the other, you can’t uninstall the package. An example is if you install an expense report app that includes a custom user field and create a validation rule on another installed custom object that references that custom user field. However, uninstalling the expense report app prevents the validation rule from working.
    -   When an installed folder contains components you added after installation, Salesforce prevents you from uninstalling the package.
    -   When an installed letterhead is used for an email template you added after installation, Salesforce prevents you from uninstalling the package.
    -   When an installed package includes a custom field that’s referenced by Einstein Prediction Builder or Case Classification, Salesforce prevents you from uninstalling the package. Before uninstalling the package, edit the prediction in Prediction Builder or Case Classification so that it no longer references the custom field.
-   You can’t uninstall a package that removes all active business and person account record types. Activate at least one other business or person account record type, and try again.
-   You can’t uninstall a package if a background job is updating a field added by the package, such as an update to a roll-up summary field. Wait until the background job finishes, and try again.
