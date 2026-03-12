---
title: "Remove Components from First-Generation Managed Packages"
domain: pkg1-dev
topic: remove-components-from-first-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:35:25.571Z
estimatedTokens: 1775
keywords: [Remove, Components, First-Generation, Managed, Packages, metadata, Apex, classes, longer, want, Removing, Visualforce]
---

# Remove Components from First-Generation Managed Packages

> Remove metadata components such as Apex classes that you no longer want in your
    first-generation managed packages.

# Remove Components from First-Generation Managed Packages

Remove metadata components such as Apex classes that you no longer want in your first-generation managed packages.

After a managed package has been promoted to the Managed-Released state, only certain components can be removed. To confirm whether a specific component can be removed, see [Components Available in Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_packageable_components.htm) in the Second-Generation Managed Packaging Developer Guide.

**Impact of Component Removal in Subscriber Orgs**

During package upgrade only certain component types are hard deleted and removed from the subscriber org. Most metadata components that were removed in a package version, will remain in the subscriber org after package upgrade, and marked as deprecated. When a package is upgraded in the subscriber org, the Setup Audit Trail logs which components were removed. Admins of a subscriber org can delete deprecated metadata.

To enable component deletion in your packaging org, log a case with [Salesforce Partner Support.](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/pkg2_feature_enablement.htm)

Before you remove a component, ensure that there aren’t any dependencies on the metadata you plan to remove. If any component in the package depends on or references the component you're removing, the package version creation operation fails. After you remove a component or field, you can't access the component, or any customizations that depend on the removed component.

When you delete a component, you also permanently delete the data that exists in that component. Delete tracked history data is also deleted, and integrations that rely on the component, such as assignment or escalation rules, are changed. After you delete a component in a managed package, you can’t restore it or create another component with the same name.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

In a managed package, the API names of fields must be unique and can’t be reused even after you delete the component. This restriction prevents conflicts during package installation and upgrade.

Data and metadata are never deleted in a subscriber org without specific action by the customer. When a subscriber upgrades to the new package version, the deleted components are still available in the subscriber’s org. The components are displayed in the Unused Components section of the Package Details page. This section ensures that subscribers have the opportunity to export data and modify custom integrations involving those components before explicitly deleting them. For example, before deleting custom objects or fields, customers can preserve a record of their data from Setup by entering Data Export in the Quick Find box and then selecting **Data Export**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Educate your customers about the potential impact of deleted components. Consider listing all custom components that you’ve deleted and specifying any actions needed in the Release Notes for your upgraded package.

These restrictions apply when deleting managed components.

-   If a component is referenced by any other metadata, such as workflow rules, validation rules, or Apex classes, you can’t delete it.
-   You can’t delete a custom object if it includes Apex Sharing Reason, Apex Sharing Recalculation, Related Lookup Filter, Compact Layout, or Action.
-   Salesforce doesn’t recommend deleting a custom field that is referenced by a custom report type in the same package. This type of deletion causes an error when installing the upgraded package.
-   When you delete a field that is used for bucketing or grouping in a custom report type that is part of a managed package, you receive an error message.
-   When you remove a connected app that is a component of a package, the app remains available until you update the package with a new version. But if you delete the connected app, it’s permanently deleted. Any version of the package that contains the deleted connected app is invalidated and can’t be installed. You can update a version of the package that *doesn’t* contain the connected app as a component. Never delete a connected app that Salesforce distributes, such as the Salesforce app.

You can delete managed components either declaratively from the user interface or programmatically using Metadata API. With Metadata API, specify the components that you want to delete in a destructiveChanges.xml manifest file and then use the standard deploy() call. The process is identical to deleting components that aren’t managed. For more information, see the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/ "HTML (New Window)") .

## Removing Public Apex Classes and Public Visualforce Components

Because the behavior of managed package components differs from public Apex classes and public Visualforce components, you use a two-stage process to delete Visualforce pages, global Visualforce components, and global Lightning components from a managed package. When you upgrade a package in a subscriber org, the Visualforce pages, global Visualforce components, and Lightning components that you deleted aren’t removed. Although a Delete button or link is available to org administrators, many orgs continue using the obsolete pages and components. However, public Apex classes and public Visualforce components are deleted as part of the upgrade process. If you delete pages and components without performing this two-stage procedure, Salesforce can’t warn you when later deletions of public classes and components break your subscribers’ obsolete pages and components.

If you’re deleting these types of components, perform this two-stage process in the order presented.

-   -   A Visualforce page or global Visualforce component that refers to or uses public Apex classes or public Visualforce components
    -   An Aura component with global access
    -   A Lightning web component with an isExposed value of true

    1.  Stage one: Remove references.
        1.  Edit the global component that you want to delete.
            -   For Visualforce, edit your Visualforce page or global Visualforce component to remove all references to public Apex classes or public Visualforce components.
            -   For Lightning components, edit the global Lightning component to remove all references to other Lightning components.
        2.  Upload your new package version.
        3.  Push the stage-one upgrade to your subscribers.
    2.  Stage two: Delete your obsolete pages or components.
        1.  Delete your Visualforce page, global Visualforce component, or global Lightning component.
        2.  Optionally, delete other related components and classes.
        3.  Upload your new package version.
        4.  Push the stage-two upgrade to your subscribers.
