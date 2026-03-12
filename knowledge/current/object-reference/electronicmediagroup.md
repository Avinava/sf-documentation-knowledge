---
title: "ElectronicMediaGroup"
domain: object-reference
topic: electronicmediagroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.309Z
estimatedTokens: 541
keywords: [ElectronicMediaGroup, media, associate, product, category.This, API, version, 49.0, later, Calls, Special, Access, Rules]
---

# ElectronicMediaGroup

> Represents the type of media that you can associate with a product or
         category.This object is available in API version 49.0 and later.

# ElectronicMediaGroup

Represents the type of media that you can associate with a product or category.This object is available in API version 49.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

You must have the B2B Commerce license and a CMS workspace to access a web store.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe default value is USD. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDescription of the store. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the media group. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the owner of the ElectronicMediaGroup object. For external routing, allows the object to be used in the Streaming API to listen to events whenever a ElectronicMediaGroup record is created, modified, or deleted. |
| UsageType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionPossible values are:AttachmentBannerListingStandardTile |
