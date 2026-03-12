---
title: "BenefitType"
domain: nonprofit-cloud
topic: benefittype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.969Z
estimatedTokens: 464
keywords: [BenefitType, benefit, delivered, conjunction, units, measure, report, how, much, organization, delivers, across, programs, Program, Management]
---

# BenefitType

> Represents the type of benefit being delivered. Use benefit types in
         conjunction with units of measure to report on how many or how much of a type of benefit
         your organization delivers across programs. This object is available with Program
      Management in API version 57.0 and later.

# BenefitType

Represents the type of benefit being delivered. Use benefit types in conjunction with units of measure to report on how many or how much of a type of benefit your organization delivers across programs. This object is available with Program Management in API version 57.0 and later.

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The category of the benefit type. Picklist values aren't provided for this field and must be added based on the requirements of the organization. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of benefit type. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the benefit type. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProcessType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. The process type associated with the program management benefit type.Possible value: Program Management |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of benefit being offered as part of the program.Possible values are:GoodsMonetaryServiceThe default value is Service. |
| UnitofMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the unit of measure that's used to calculate the benefit type.This field is a relationship field.Relationship NameUnitofMeasureRelationship TypeLookupRefers ToUnitOfMeasure |
