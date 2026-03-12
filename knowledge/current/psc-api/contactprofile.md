---
title: "ContactProfile"
domain: psc-api
topic: contactprofile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.856Z
estimatedTokens: 1075
keywords: [ContactProfile, individual, their, ethnicity, citizenship, birth, place, race, Calls, Associated, Objects]
---

# ContactProfile

> Represents information about an individual, such as their ethnicity,
         citizenship, birth place, race, and so on.

# ContactProfile

Represents information about an individual, such as their ethnicity, citizenship, birth place, race, and so on.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BirthPlace | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual's place of birth. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contact associated with the contact profile record.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| Ethnicity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the ethnicity of the individual.Possible values are:Hispanic or LatinoNot Hispanic or LatinoNot Selected |
| HighestEducationLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the highest educational qualification of the individualPossible values are:GraduateHigh SchoolMastersOtherPhD |
| IsFirstGenerationStudent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the individual is the first generation to enroll in education beyond high school.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MilitaryBranch | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the military branch if the individual has ever enlisted in the military.Possible values are:Air ForceArmyCoast GuardMarine CorpsNavyOtherSpace Force |
| MilitaryService | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the current status of military service.Possible values are:Active DutyActive ReserveFull timeOtherPart timeRetiredUnknownVeteran |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name for this record. |
| PrimaryCitizenshipType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of primary citizenship held by the individual.Possible values are:AsylumNationalOtherRefugee |
| Race | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the race of the individual.Possible values are:Alaska NativeAmerican IndianAsianBlack or African AmericanNative Hawaiian or Other Pacific IslanderWhite |
| SecondaryCitizenshipType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of secondary citizenship held by the individual.Possible values are:AsylumNationalOtherRefugee |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContactProfileFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ContactProfileHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ContactProfileShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ContactProfileFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- ContactProfileHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- ContactProfileShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
