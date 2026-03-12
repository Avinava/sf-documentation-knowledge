---
title: "Benefit"
domain: loyalty
topic: benefit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.881Z
estimatedTokens: 621
keywords: [Benefit, benefits, associated, loyalty, program, mapped, members, tier, rules, API, version, 51.0, later, Calls]
---

# Benefit

> Represents information about benefits associated with the loyalty
      program. Benefits are mapped to the members based on the tier or other program rules.
    This object is available in API version 51.0 and later.

# Benefit

Represents information about benefits associated with the loyalty program. Benefits are mapped to the members based on the tier or other program rules. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BenefitActionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the benefit action.This is a relationship field.Relationship NameBenefitActionRelationship TypeLookupRefers ToBenefitAction |
| BenefitTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the benefit type.This is a relationship field.Relationship NameBenefitTypeRelationship TypeLookupRefers ToBenefitType |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDetailed description of loyalty benefit. |
| ImageUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URL for the image. This field is available in API version 57.0 and later. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the loyalty benefit is active. |
| IsBenefitSelectionAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a member is allowed to select the benefit (true) or not (false). This field is available in API version 57.0 and later.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the loyalty benefit. |
| PrioritySequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPriority rating of the loyalty benefit. |
| UnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for quantity.This is a relationship field.Relationship NameUnitRelationship TypeLookupRefers ToUnitOfMeasure |
| Value | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity included in the loyalty benefit. |
