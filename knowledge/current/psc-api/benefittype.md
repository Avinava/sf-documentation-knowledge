---
title: "BenefitType"
domain: psc-api
topic: benefittype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.226Z
estimatedTokens: 792
keywords: [BenefitType, benefits, applied, individual, group, Calls, Associated, Objects]
---

# BenefitType

> Represents information about the type of benefits that can be applied
         to an individual or a group.

# BenefitType

Represents information about the type of benefits that can be applied to an individual or a group.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The category of the benefit type. Picklist values aren't provided for this field and must be added based on the requirements of the organization. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of benefit type. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the benefit type. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProcessType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The process type associated with the benefit type. Set to PublicSector. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of benefit being offered.Possible values are:GoodsMonetaryServiceThe default value is Service. |
| UnitofMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the unit of measure that's used to calculate the benefit type.This field is a relationship field.Relationship NameUnitofMeasureRelationship TypeLookupRefers ToUnitOfMeasure |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BenefitTypeOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[BenefitTypeShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- BenefitTypeOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- BenefitTypeShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
