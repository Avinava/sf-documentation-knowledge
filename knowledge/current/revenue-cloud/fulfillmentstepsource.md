---
title: "FulfillmentStepSource"
domain: revenue-cloud
topic: fulfillmentstepsource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.504Z
estimatedTokens: 687
keywords: [FulfillmentStepSource, link, fulfillment, step, corresponding, order, lines, API, version, 61.0, later, Calls, Associated, Objects]
---

# FulfillmentStepSource

> Represents a link between a fulfillment step and the corresponding
         order lines. This object is available in API version 61.0 and later.

# FulfillmentStepSource

Represents a link between a fulfillment step and the corresponding order lines. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn automatically generated name for the fulfillment step source. |
| SourceIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the source order line item (order item or fulfillment order line). |
| SourceLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor internal use only.This field is a polymorphic relationship field.Relationship NameSourceLineItemRefers ToFulfillmentOrderLineItem, OrderItem |
| StepId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe identifier of the fulfillment step.This field is a relationship field.Relationship NameStepRelationship TypeMaster-detailRefers ToFulfillmentStep (the master object) |
| VersionGroupIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the version group that's assigned to the fulfillment step source item. This field is available in API version 64.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FulfillmentStepSourceChangeEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- FulfillmentStepSourceChangeEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_change_event.htm)
