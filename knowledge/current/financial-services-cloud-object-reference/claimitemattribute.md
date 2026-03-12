---
title: "ClaimItemAttribute"
domain: financial-services-cloud-object-reference
topic: claimitemattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.778Z
estimatedTokens: 249
keywords: [ClaimItemAttribute, attributes, claim, item, API, version, 65.0, later, Calls]
---

# ClaimItemAttribute

> Represents attributes for a claim item. This object is available in API
      version 65.0 and later.

# ClaimItemAttribute

Represents attributes for a claim item. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe attribute definition associated with the claim item attribute. |
| AttributeName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the attribute. |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe attribute picklist value associated with the claim item attribute. |
| AttributeValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the attribute. |
| ClaimItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe claim item associated with the claim item attribute. |
