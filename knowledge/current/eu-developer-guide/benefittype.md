---
title: "BenefitType"
domain: eu-developer-guide
topic: benefittype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.060Z
estimatedTokens: 430
keywords: [BenefitType, benefits, Participatory, Services, program, manager, Management, API, version, 57.0, later]
---

# BenefitType

> Represents information about the type of benefits such as
         Participatory Services available to the program manager. This object is available with
      Program Management in API version 57.0 and later.

# BenefitType

Represents information about the type of benefits such as Participatory Services available to the program manager. This object is available with Program Management in API version 57.0 and later.

| Field | Details |
| --- | --- |
| BenefitTypeName | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The category of the benefit type. Picklist values aren't provided for this field and must be added based on the requirements of the organization. |
| Category | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired.Possible values are:CalculatedEnergySavingsContractorEnrollmentIncentiveOrRebateInstallationServices |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of benefit type. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the benefit type. |
| ProcessType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. The process type associated with the program management benefit type.Possible value: Program Management |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of benefit being offered as part of the program.Possible values are:GoodsMonetaryServiceThe default value is Service. |
| UnitofMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the unit of measure that's used to calculate the benefit type.This field is a relationship field.Relationship NameUnitofMeasureRelationship TypeLookupRefers ToUnitOfMeasure |
