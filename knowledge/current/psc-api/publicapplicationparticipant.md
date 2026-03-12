---
title: "PublicApplicationParticipant"
domain: psc-api
topic: publicapplicationparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.159Z
estimatedTokens: 940
keywords: [PublicApplicationParticipant, junction, individual, application, business, license, account, contact, stores, participants, associated, participant, applicant, co-applicant, household]
---

# PublicApplicationParticipant

> Represents a junction between an individual application or business license
         application, and an account or a contact. This object stores the details of the
         participants associated with an application. This participant could be the applicant,
         co-applicant, a household, or even a business account that is added to an application.
      This object is available in API version 58.0 and later.

# PublicApplicationParticipant

Represents a junction between an individual application or business license application, and an account or a contact. This object stores the details of the participants associated with an application. This participant could be the applicant, co-applicant, a household, or even a business account that is added to an application. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe individual application or business application associated with the public application participant record.This field is a polymorphic relationship field.Relationship NameApplicationRelationship TypeLookupRefers ToBusinessLicenseApplication, IndividualApplication |
| BenefitEligibilityStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the participant's benefit eligibility.Possible values are:EligibleIneligibleOnHold |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the public application participant record. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe participant associated with the public application participant record.This field is a polymorphic relationship field.Relationship NameParticipantRelationship TypeLookupRefers ToAccount, Contact |
| RelationshipType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe participant's relationship to the primary applicant of the individual or business applicationPossible values are:AuntBrotherCousinDaughterFatherFoster ChildFoster ParentGrandfatherGrandmotherMotherNephewNieceNot RelatedSelfSisterSonSpouseStepdaughterStepfatherStepmotherStepsonUncle |
| Role | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the role of the public application participant.Possible values are:ApplicantCo-applicant |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the public application participant.Possible values are:ActiveInactive |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PublicApplicationParticipantFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PublicApplicationParticipantHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PublicApplicationParticipantFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- PublicApplicationParticipantHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
