---
title: "SalesAgreeProductAttribute"
domain: mfg-api-devguide
topic: salesagreeproductattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.224Z
estimatedTokens: 389
keywords: [SalesAgreeProductAttribute, virtual, stores, key-value, pairs, attributes, sales, agreement, products, API, version, 60.0, later, Calls]
---

# SalesAgreeProductAttribute

> Represents a virtual object that stores the key-value pairs for attributes of
         sales agreement products. This object is available in API version 60.0 and later.

# SalesAgreeProductAttribute

Represents a virtual object that stores the key-value pairs for attributes of sales agreement products. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe definition of the attribute that describes the sales agreement product.This field is a relationship field.Relationship NameAttributeDefinitionRelationship TypeLookupRefers ToAttributeDefinition |
| AttributeDefinitionName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the sales agreement product attribute. |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value in the attribute picklist that describes the sales agreement product.This field is a relationship field.Relationship NameAttributePicklistValueRelationship TypeLookupRefers ToAttributePicklistValue |
| AttributeValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the sales agreement product attribute. |
| SalesAgreementProductId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe sales agreement product that the sales agreement product attribute describes.This field is a relationship field.Relationship NameSalesAgreementProductRelationship TypeLookupRefers ToSalesAgreementProduct |
