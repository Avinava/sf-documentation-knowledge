---
title: "Delete Components from First-Generation Managed Packages"
domain: pkg1-dev
topic: delete-components-from-first-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.752Z
estimatedTokens: 874
keywords: [Components, First-Generation, Managed, Packages, you've, uploaded, Released, package, may, component, needs, deleted, packaging, org]
---

# Delete Components from First-Generation Managed Packages

> After you've uploaded a Managed - Released first-generation managed package, you may
    find that a component needs to be deleted from your packaging org.

# Delete Components from First-Generation Managed Packages

After you've uploaded a Managed - Released first-generation managed package, you may find that a component needs to be deleted from your packaging org.

One of the following situations may occur:

-   The component, after it’s added to a package, can't be deleted.
-   The component can be deleted, but can only be undeleted from the Deleted Package Components page.
-   The component can be deleted, but can be undeleted from either the Deleted Package Components page or through the Recycle Bin

After a package is uploaded with a component marked for deletion, the component is deleted forever.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pkg1_dev)

#### Warning

When a component is deleted, its **Name** remains within Salesforce, and you can’t create a new component that uses the deleted component’s name. The Deleted Package Components page lists the names that can no longer be used.

To access the Deleted Package Components page, from Setup, enter Package Manager in the Quick Find box, then select **Package Manager**. Select the package that the component was uploaded to, and then click **View Deleted Components**. You can retrieve components from the Recycle Bin and Deleted Package Components page any time *before* uploading a new version of the package. To do this, click **Undelete** next to the component.

You can retrieve these types of components.

-   Apex classes and triggers that don't have global access.
-   Visualforce components with public access. (If the ability to remove components has been enabled for your packaging org then these Visualforce components can’t be undeleted. As a result, they don’t show up in the Recycle Bin or the Deleted Package Components page after they’ve been deleted.)
-   Protected components, including:
    -   Custom labels
    -   Custom links (for Home page only)
    -   Custom metadata types
    -   Custom permissions
    -   Custom settings
    -   Workflow alerts
    -   Workflow field updates
    -   Workflow outbound messages
    -   Workflow tasks
    -   Workflow flow triggers

        The pilot program for flow trigger workflow actions is closed. If you've already enabled the pilot in your org, you can continue to create and edit flow trigger workflow actions. If you didn't enable the pilot in your org, use Flow Builder to create a record-triggered flow, or use Process Builder to launch a flow from a process.

-   Data components, such as Documents, Dashboards, and Reports. These components are the only types that can also be undeleted from the Recycle Bin.

You can retrieve components from the Recycle Bin and Deleted Package Components page any time *before* uploading a new version of the package. To do this, click **Undelete** next to the component.

The Deleted Components displays the following information (in alphabetical order):

| Attribute | Description |
| --- | --- |
| Action | If the Managed - Released package hasn't been uploaded with the component deleted, this contains an Undelete link that allows you to retrieve the component. |
| Available in Versions | Displays the version number of the package in which a component exists. |
| Name | Displays the name of the component. |
| Parent Object | Displays the name of the parent object a component is associated with. For example, a custom object is the parent of a custom field. |
| Type | Displays the type of the component. |
