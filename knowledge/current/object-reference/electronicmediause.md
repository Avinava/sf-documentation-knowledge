---
title: "ElectronicMediaUse"
domain: object-reference
topic: electronicmediause
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.313Z
estimatedTokens: 264
keywords: [ElectronicMediaUse, usage, media, API, version, 49.0, later, Calls, Special, Access, Rules]
---

# ElectronicMediaUse

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
