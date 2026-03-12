---
title: "Configure Components for Lightning Experience Record Pages"
domain: lightning
topic: configure-components-for-lightning-experience-record-pages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.120Z
estimatedTokens: 913
keywords: [Configure, Components, Lightning, Experience, Record, Pages, component, work, App, Builder, guidelines, works]
---

# Configure Components for Lightning Experience Record Pages

> After your component is set up to work on Lightning pages and in the Lightning App
    Builder, use these guidelines to configure the component so it works on record pages in
    Lightning Experience.

# Configure Components for Lightning Experience Record Pages

After your component is set up to work on Lightning pages and in the Lightning App Builder, use these guidelines to configure the component so it works on record pages in Lightning Experience.

Record pages are different from app pages in a key way: they have the context of a record. To make your components display content that is based on the current record, use a combination of an interface and an attribute.

-   If your component is available for both record pages and any other type of page, implement flexipage:availableForAllPageTypes.
-   If your component is designed only for record pages, implement the flexipage:availableForRecordHome interface instead of flexipage:availableForAllPageTypes.
-   If your component needs the record ID, also implement the force:hasRecordId interface.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

    #### Note

    Don’t expose the recordId attribute to the Lightning App Builder—don’t put it in the component’s design resource. You don’t want admins supplying a record ID.

-   If your component needs the object’s API name, also implement the force:hasSObjectName interface.
-   When a component is generated on the server from metadata, the page loads from a client-side cache of the indexed database. The client-side cache timeout is 8 hours, with a refresh interval of 15 minutes. This long timeout allows for faster page loads for users who bootstrap the application frequently or click links from outside the application to open a new browser window or tab to Lightning Experience.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

If your managed component implements the flexipage or forceCommunity interfaces, its upload is blocked if the component and its attributes aren’t set to access="global". For more information on access checks, see [Controlling Access](atlas.en-us.lightning.meta/lightning/access_intro.htm#access_intro "The framework enables you to control access to your applications, attributes, components, events, interfaces, and methods via the access system attribute. The access system attribute indicates whether the resource can be used outside of its own namespace.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

When you use the Lightning App Builder, there is a known limitation when you edit a group page. Your changes appear when you visit the group from the Groups tab. Your changes don’t appear when you visit the group from the Recent Groups list on the Chatter tab.

#### See Also

-   [Configure Components for Lightning Pages and the Lightning App Builder](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder.htm "There are a few steps to take before you can use your custom Aura components in either Lightning pages or the Lightning App Builder.")

-   [Tips and Considerations for Configuring Components for Lightning Pages and the Lightning App Builder](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_tips.htm "Keep these guidelines in mind when creating components and component bundles for Lightning pages and the Lightning App Builder.")

-   [Using Apex to Work with Salesforce Records](atlas.en-us.lightning.meta/lightning/apex_records.htm "Use Apex only if you need to customize your user interface to do more than what Lightning Data Service allows, such as using a SOQL query to select certain records. Apex provisions data that’s not managed and you must handle data refresh on your own.")

## Related Topics

- Controlling Access (atlas.en-us.lightning.meta/lightning/access_intro.htm)
- Configure Components for Lightning Pages and the Lightning App Builder (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder.htm)
- Tips and Considerations for Configuring Components for Lightning Pages and the Lightning App Builder (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_tips.htm)
- Using Apex to Work with Salesforce Records (atlas.en-us.lightning.meta/lightning/apex_records.htm)
