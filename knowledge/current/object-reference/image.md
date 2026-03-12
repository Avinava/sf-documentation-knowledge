---
title: "Image"
domain: object-reference
topic: image
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.171Z
estimatedTokens: 653
keywords: [Image, API, version, 47.0, later, Calls]
---

# Image

> Represents the details of an image. This object is available in API
    version 47.0 and later.

# Image

Represents the details of an image. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AlternateText | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccessibility text to explain the image in words. |
| CapturedAngle | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAngle at which the image was captured. |
| ContentDocumentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique identifier of the content document where image is stored.This is a relationship field.Relationship NameContentDocumentRelationship TypeLookupRefers ToContentDocument |
| ImageClass | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe image category.Possible values are:FOODLOGOSOBJECTSSCENES |
| ImageClassObjectType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of image. Used in Einstein Object Detection to identify whether the image is used to detect objects or build a model.Possible values are:DETECTION—Actual ImageFEEDBACKTRAINING |
| ImageViewType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOrientation of the image. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if an image is active. The default value is False. An active image can be used for building or updating a model in Einstein Object Detection. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date on which the image was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date on which the image was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionUnique identifier of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTitle of the image. |
| Url | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPublic URL of the image file. |
