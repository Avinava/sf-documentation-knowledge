---
title: "EducCharRequirement"
domain: edu-cloud-dev-guide
topic: educcharrequirement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.185Z
estimatedTokens: 592
keywords: [EducCharRequirement, definition, educational, characteristics, needed, meet, requirement, API, version, 66.0, later, Calls]
---

# EducCharRequirement

> Represents a definition of the educational characteristics that are needed to
         meet an educational requirement. This object is available in API version 66.0 and
      later.

# EducCharRequirement

Represents a definition of the educational characteristics that are needed to meet an educational requirement. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BaseCharacteristicId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe educational characteristic that's associated with the educational characteristic requirement.This field is a relationship field.Relationship NameBaseCharacteristicRefers ToEducationalCharacteristic |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency related to the educational characteristic assignment.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| IsVisible | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the educational characteristic requirement is searchable in the student portal (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the educational characteristic requirement. |
| OperationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe logical operator that's associated with the educational characteristic requirement, for example, AND.Possible values are:And—ANDOr—OR |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who is the owner of this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
