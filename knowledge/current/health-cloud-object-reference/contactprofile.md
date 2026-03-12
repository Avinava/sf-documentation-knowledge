---
title: "ContactProfile"
domain: health-cloud-object-reference
topic: contactprofile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.616Z
estimatedTokens: 1459
keywords: [ContactProfile, individual, their, ethnicity, citizenship, birth, place, race, API, version, 57.0, later, Calls]
---

# ContactProfile

> Represents information about an individual, such as their ethnicity,
         citizenship, birth place, race, and so on. This object is available in API version
      57.0 and later.

# ContactProfile

Represents information about an individual, such as their ethnicity, citizenship, birth place, race, and so on. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdvancementGraduationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of the person's first graduation from an institution. |
| BirthCountryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual's country of birth.This field is a relationship field.Relationship NameBirthCountryRefers ToGeoCountry |
| BirthPlace | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual's place of birth. |
| BirthSex | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the sex of an individual assigned at birth, as defined by the Office of the national Coordinator for Health IT (ONC). This extension aligns with the C-CDA Birth Sex Observation (LOINC 76689-9).Possible values are:FemaleIntersexMalePreferNotToDisclose—Prefer not to DiscloseUnknown |
| ContactId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contact associated with the contact profile record.This field is a relationship field.Relationship NameContactRelationship TypeMaster-detailRefers ToContact (the master object) |
| Ethnicity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the ethnicity of the individual.Possible values are:Hispanic or LatinoNot Hispanic or LatinoNot Selected |
| GenerationalCohort | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person's age group, or generational cohort, based on their birth date. |
| HighestEducationLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the highest educational qualification of the individual.Possible values are:GraduateHigh SchoolMastersOtherPhD |
| HousingStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the housing status of the contact, such as evicted, homeless, or home owner. |
| IsFirstGenerationStudent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the individual is the first generation to enroll in education beyond high school.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LivingArrangementType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of living arrangement, such as alone or with parents. |
| Location | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location where the contact currently resides. |
| MilitaryBranch | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the military branch if the individual has ever enlisted in the military.Possible values are:Air ForceArmyCoast GuardMarine CorpsNavyOtherSpace Force |
| MilitaryService | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the current status of military service.Possible values are:Active DutyActive ReserveFull timeOtherPart timeRetiredUnknownVeteran |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name for this record. |
| PrimaryCitizenshipId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary citizenship held by the individual.This field is a relationship field.Relationship NamePrimaryCitizenshipRefers ToGeoCountry |
| PrimaryCitizenshipType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of primary citizenship held by the individual.Possible values are:AsylumNationalOtherRefugee |
| Race | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the race of the individual.Possible values are:Alaska NativeAmerican IndianAsianBlack or African AmericanNative Hawaiian or Other Pacific IslanderWhite |
| ResidenceSubType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the subtype of residence. |
| ResidenceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of residence, such as trailer, single-family home, or assisted living. |
| SecondaryCitizenshipId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe secondary citizenship of the individual if they hold dual citizenship.This field is a relationship field.Relationship NameSecondaryCitizenshipRefers ToGeoCountry |
| SecondaryCitizenshipType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of secondary citizenship held by the individual.Possible values are:AsylumNationalOtherRefugee |
| TribalAffiliationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the tribe affiliated with the contact. |
| Website | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA website that’s associated with the contact. |
