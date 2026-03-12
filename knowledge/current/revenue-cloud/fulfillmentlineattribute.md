---
title: "FulfillmentLineAttribute"
domain: revenue-cloud
topic: fulfillmentlineattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.253Z
estimatedTokens: 457
keywords: [FulfillmentLineAttribute, Represents, attribute, fulfillment, order, line., API, version, 61.0, later., Important, Supported, Calls, Fields]
---

# FulfillmentLineAttribute

> Represents an attribute of a fulfillment order line. This object
      is available in API version 61.0 and later.

# FulfillmentLineAttribute

Represents an attribute of a fulfillment order line. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionA unique identifier for the attribute definition in the catalog.This field is a relationship field.Relationship NameAttributeDefinitionRefers ToAttributeDefinition |
| AttributeName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the attribute. |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor internal use only.This field is a relationship field.Relationship NameAttributePicklistValueRefers ToAttributePicklistValue |
| AttributeValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the attribute. |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID that uniquely identifies the relationship in an external data source. |
| FulfillmentOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA unique identifier for the fulfillment order line item.This field is a relationship field.Relationship NameFulfillmentOrderLineItemRelationship TypeMaster-detailRefers ToFulfillmentOrderLineItem (the master object) |
