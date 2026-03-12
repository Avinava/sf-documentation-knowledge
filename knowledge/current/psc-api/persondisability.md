---
title: "PersonDisability"
domain: psc-api
topic: persondisability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.131Z
estimatedTokens: 1005
keywords: [PersonDisability, person's, disability, API, version, 58.0, later, Calls, Associated, Objects]
---

# PersonDisability

> Represents information about a person's disability. This object is
      available in API version 58.0 and later.

# PersonDisability

Represents information about a person's disability. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the disability. |
| IndividualId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual associated with the disability.This field is a polymorphic relationship field.Relationship NameIndividualRelationship TypeLookupRefers ToAccount, Contact, Individual |
| IsAccommodationRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the individual requires accommodation.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name for this record. |
| Rank | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the level of disability. |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the disability. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the disability.Possible values are:PermanentTemporaryThe default value is Temporary. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of disability.Possible values are:BlindnessCognitiveHearing impairment |
| VerificationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the disability was verified. |
| VerifiedBy | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the verifier of the disability in the individual.Possible values are:HealthcareProviderOtherPhysicianPsychologistSelfReportedSocialWorkerTeacherTherapistThe default value is Physician. |
| VerifiedByOther | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the verifier of the disability if its other than what is listed in VerifiedBy. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PersonDisabilityFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PersonDisabilityHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PersonDisabilityShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PersonDisabilityFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- PersonDisabilityHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- PersonDisabilityShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
