---
title: "NetworkDataCategory"
domain: object-reference
topic: networkdatacategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:36.064Z
estimatedTokens: 326
keywords: [NetworkDataCategory, categories, Lightning, Web, Runtime, LWR, Experience, Cloud, Sites, API, 59.0]
---

> Represents data categories in Lightning Web Runtime (LWR) Experience Cloud Sites. This object is available in API version 59.0 and later.

# NetworkDataCategory

Represents data categories in Lightning Web Runtime (LWR) Experience Cloud Sites. This object is available in API version 59.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

This object is available only when your org has Digital Experiences and Knowledge or Service Catalog enabled.

## Fields

| Field | Details |
| --- | --- |
| DataCategoryGroupName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the data category group that contains one or more data categories. |
| DataCategoryName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the data category. |
| Description | TypetextareaPropertiesNillableDescriptionDescription of the data category. |
| ImageId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionImage associated with the data category.This field is a relationship field.Relationship NameImageRelationship TypeLookupRefers ToManagedContent |
| Label | TypestringPropertiesFilter, Group, SortDescriptionThe name of the data category shown in the UI. |
| NetworkId | TypereferencePropertiesFilter, Group, SortDescriptionID of the associated Experience site.This field is a relationship field.Relationship NameNetworkRelationship TypeLookupRefers ToNetwork |
