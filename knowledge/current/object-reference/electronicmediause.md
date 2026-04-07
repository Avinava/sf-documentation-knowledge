---
title: "ElectronicMediaUse"
domain: object-reference
topic: electronicmediause
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:30.065Z
estimatedTokens: 264
keywords: [ElectronicMediaUse, media, API, 49.0]
---

> Represents the usage of media. This object is available in API
      version 49.0 and later.

# ElectronicMediaUse

Represents the usage of media. This object is available in API version 49.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

You must have the B2B Commerce license and a CMS workspace to access a web store.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe default value is USD. Possible values are:USD—U.S. Dollar |
| ElectronicMediaGroupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the electronic media group. |
| ElectronicMediaId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the electronic media. |
| ImplementorType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of implementor. Available implementors of ElectronicMediaUse include:ProductMediaProductCategoryMedia |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe order that electronic media is displayed in. |
