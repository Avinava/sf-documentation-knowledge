---
title: "View Unused Components in a Managed Package"
domain: pkg1-dev
topic: view-unused-components-in-a-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.734Z
estimatedTokens: 350
keywords: [View, Unused, Components, Managed, Package, longer, current, version]
---

# View Unused Components in a Managed Package

> View components no longer being used in the current version of a
                package.

# View Unused Components in a Managed Package

View components no longer being used in the current version of a package.

| Available in: Salesforce Classic |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


Any component shown here that’s part of a managed package is safe to delete unless you’ve used it in custom integrations. After you've deleted an unused component, it appears in this list for 15 days. During that time, you can either undelete it to restore the component and all data stored in it, or delete the component permanently. When you undelete a custom field, some properties on the field will be lost or changed. After 15 days, the field and its data are permanently deleted.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Before deleting a custom field, you can keep a record of its data. From Setup, enter Data Export in the Quick Find box, then select **Data Export**.

The following component information is displayed (in alphabetical order):

| Attribute | Description |
| --- | --- |
| Action | Can be one of two options:UndeleteDelete |
| Name | Displays the name of the component. |
| Parent Object | Displays the name of the parent object a component is associated with. For example, a custom object is the parent of a custom field. |
| Type | Displays the type of the component. |
