---
title: "SalesChannel"
domain: object-reference
topic: saleschannel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.442Z
estimatedTokens: 988
keywords: [SalesChannel, origin, order, web, storefront, physical, store, marketplace, mobile, app, integrate, Salesforce, Management, B2C, Commerce]
---

# SalesChannel

> Represents the origin of an order. For example, a web storefront, physical
      store, marketplace, or mobile app. If you integrate Salesforce Order Management with
      Salesforce B2C Commerce, set up a SalesChannel corresponding to each Site in your B2C Commerce
      implementation. This object is available in API version 48.0 and later.

# SalesChannel

Represents the origin of an order. For example, a web storefront, physical store, marketplace, or mobile app. If you integrate Salesforce Order Management with Salesforce B2C Commerce, set up a SalesChannel corresponding to each Site in your B2C Commerce implementation. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is only available in Salesforce Order Management orgs.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the SalesChannel. |
| ExternalChannelNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExternal system identifier for the SalesChannel. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. A null value can mean that this record has only been referenced (LastReferencedDate) and not viewed. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this SalesChannel. Default value is the user logged in to the API to perform the create. |
| SalesChannelName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the SalesChannel. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of the SalesChannel. Each Type corresponds to one Type Category. You can customize the Type picklist to represent your business processes, but the Type Category picklist is fixed because some order processing is based on those values. If you customize the Type picklist, include at least one value for each Type Category. This field is available in API version 53.0 and later.Default values are:B2BB2COther |
| TypeCategory | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionType Category of the SalesChannel. Each Type Category corresponds to one or more Types. This field isn’t visible in the UI. This field is available in API version 53.0 and later.Possible values are:B2BB2COther |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SalesChannelChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

#### See Also

-   [Order](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_order.htm "Represents an order associated with a contract or an account.")

-   [OrderSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm "Represents the current properties and state of an order. Corresponds to one or more order objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

## Related Topics

- SalesChannelChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- Order (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_order.htm)
- OrderSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm)
