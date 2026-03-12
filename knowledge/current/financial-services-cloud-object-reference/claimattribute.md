---
title: "ClaimAttribute"
domain: financial-services-cloud-object-reference
topic: claimattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.708Z
estimatedTokens: 240
keywords: [ClaimAttribute, attributes, claim, API, version, 65.0, later, Calls]
---

# ClaimAttribute

> Represents attributes for a claim. This object is available in API
      version 65.0 and later.

# ClaimAttribute

Represents attributes for a claim. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe attribute definition associated with the claim attribute. |
| AttributeName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the attribute. |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe attribute picklist value associated with the claim attribute. |
| AttributeValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the attribute. |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe claim associated with the claim attribute. |
