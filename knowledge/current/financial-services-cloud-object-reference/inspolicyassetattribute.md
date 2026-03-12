---
title: "InsPolicyAssetAttribute"
domain: financial-services-cloud-object-reference
topic: inspolicyassetattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.547Z
estimatedTokens: 296
keywords: [InsPolicyAssetAttribute, attributes, insurance, policy, asset, API, version, 63.0, later, Calls]
---

# InsPolicyAssetAttribute

> Represents attributes for insurance policy asset. This object is
      available in API version 63.0 and later.

# InsPolicyAssetAttribute

Represents attributes for insurance policy asset. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe attribute definition associated with the Insurance Policy Asset Attribute.This field is a relationship field. |
| AttributeName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the attribute. |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe attribute picklist value associated with the Insurance Policy Asset Attribute.This field is a relationship field. |
| AttributeValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the attribute. |
| InsurancePolicyAssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe insurance policy asset associated with the Insurance Policy Asset Attribute.This field is a relationship field. |
