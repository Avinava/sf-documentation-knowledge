---
title: "FulfillmentAssetAttribute"
domain: revenue-cloud
topic: fulfillmentassetattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.228Z
estimatedTokens: 438
keywords: [FulfillmentAssetAttribute, Represents, attribute, fulfillment, asset., API, version, 61.0, later., Important, Supported, Calls, Fields]
---

# FulfillmentAssetAttribute

> Represents an attribute of a fulfillment asset. This object is
      available in API version 61.0 and later.

# FulfillmentAssetAttribute

Represents an attribute of a fulfillment asset. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe attribute definition in the catalog.This field is a relationship field.Relationship NameAttributeDefinitionRelationship TypeLookupRefers ToAttributeDefinition |
| AttributeName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the attribute. |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor internal use only.This field is a relationship field.Relationship NameAttributePicklistValueRelationship TypeLookupRefers ToAttributePicklistValue |
| AttributeValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the attribute. |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor internal use only. |
| FulfillmentAssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe identifier of the fulfillment asset.This field is a relationship field.Relationship NameFulfillmentAssetRelationship TypeMaster-detailRefers ToFulfillmentAsset (the master object) |
