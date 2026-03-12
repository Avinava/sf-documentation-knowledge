---
title: "Considerations"
domain: lightning
topic: considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:48.669Z
estimatedTokens: 1118
keywords: [Considerations, Lightning, Data, Service, powerful, simple, However, it’s, replacement, writing, own, access, code, keep, mind]
---

# Considerations

> Lightning Data Service is powerful and simple to use. However, it’s not a complete
    replacement for writing your own data access code. Here are some considerations to keep in mind
    when using it.

# Considerations

Lightning Data Service is powerful and simple to use. However, it’s not a complete replacement for writing your own data access code. Here are some considerations to keep in mind when using it.

Lightning Data Service is available in the following containers:

-   Lightning Experience
-   Salesforce app
-   Experience Builder sites
-   Lightning Out
-   Lightning Components for Visualforce
-   Standalone Lightning apps
-   Lightning for Gmail
-   Lightning for Outlook

Lightning Data Service supports primitive DML operations—create, read, update, and delete. It operates on one record at a time, which you retrieve or modify using the record ID. Lightning Data Service supports spanned fields with a maximum depth of five levels. Support for working with collections of records or for querying for a record by anything other than the record ID isn’t available. If you must support higher-level operations or multiple operations in one transaction, use standard @AuraEnabled Apex methods.

Lightning Data Service shared data storage provides notifications to all components that use a record whenever a component changes that record. It doesn’t notify components if that record is changed on the server, for example, if someone else modifies it. Records changed on the server aren’t updated locally until they’re reloaded. Lightning Data Service notifies listeners about data changes only if the changed fields are the same as in the listener’s fields or layout.

Lightning Data Service does a lot of work to make code perform well.

-   Loads record data progressively.
-   Caches results on the client.
-   Invalidates cache entries when dependent Salesforce data and metadata changes.
-   Optimizes server calls by bulkifying and deduping requests.

## Use Base Components

To work with record data, use the following base components.

-   lightning:recordForm
-   lightning:recordEditForm
-   lightning:recordViewForm

Use these base components to:

-   Create a metadata-driven UI or form-based UI similar to the record detail page in Salesforce.
-   Display record values based on the field metadata.
-   Display or hide localized field labels.
-   Display the help text on a custom field.
-   Perform client-side validation and enforce validation rules.

Alternatively, use force:recordData to:

-   Create your own custom UI
-   Return raw record data for a small number of fields
-   Create UI that’s not metadata-driven

When using force:recordData, load the data once and pass it to child components as attributes. This approach reduces the number of listeners and minimizes server calls, which improves performance and ensures that your components show consistent data. For more information, see the [force:recordData documentation](https://developer.salesforce.com/docs/component-library/bundle/force:recordData/documentation).

For examples of base components in action, see [Lightning Action Examples](atlas.en-us.lightning.meta/lightning/data_service_example.htm "Here are some examples that use the base components to create a Quick Contact action panel.").

The base components and force:recordData are built on Lightning Data Service. If Lightning Data Service detects a change to a record or any data or metadata it supports, the components receive the new value. The detection is triggered if:

-   An Aura or Lightning web component mutates the record.
-   The Lightning Data Service cache entry expires and then a component built on Lightning Data Service triggers a read. The cache entry and the Lightning web component must be in the same browser and app (for example Lightning Experience) for the same user.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

To improve performance, we recommend specifying the fields you need instead of using a layout. Use a layout only if you want the administrator, not the component, to control the fields that are provisioned. The component must handle receiving every field that is assigned to the layout for the context user. For more information, see [Page Layouts](https://help.salesforce.com/articleView?id=customize_layout.htm&language=en_US "HTML (New Window)") in Salesforce Help.

## Supported Objects

Lightning Data Service supports custom objects and the [standard objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm) that User Interface API supports.

## Related Topics

- Lightning Action Examples (atlas.en-us.lightning.meta/lightning/data_service_example.htm)
