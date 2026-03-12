---
title: "HousingAssessment__c"
domain: health-cloud-object-reference
topic: housingassessmentc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.950Z
estimatedTokens: 562
keywords: [HousingAssessment__c, settings, assessing, living, situation, individuals, API, version, 49.0, later, HousingAssessment, Calls]
---

# HousingAssessment__c

> Represents the settings for assessing the living situation of individuals.
    This object is available in API version 49.0 and later.

# HousingAssessment\_\_c

Represents the settings for assessing the living situation of individuals. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the account object. |
| AssessmentDate__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when the housing assessment took place. |
| CanPrepareFoodSafely__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the person can prepare food. |
| CanQuarantine__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the person can quarantine effectively. |
| Dwelling__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicated the type of residence for the person.Possible values are:ApartmentBoard and Care or Assisted Living FacilityHotel or MotelHouseLong-Term Care FacilityMulti-Family DwellingNursing HomeRecreational Vehicle or Mobile HomeSkilled Nursing Facility |
| HasPrivateBathroom__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the person has access to a private bathroom. |
| IsHomeless__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the person has a place to live in. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the housing assessment. |
| QuarantineEndDate__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date of the quarantine period. |
| QuarantineLocation__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the location where the person must quarantine. |
| QuarantineStartDate__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date of the quarantine period. |
