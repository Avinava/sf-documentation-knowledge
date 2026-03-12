---
title: "AssessmentSignature"
domain: omnistudio
topic: assessmentsignature
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.490Z
estimatedTokens: 939
keywords: [AssessmentSignature, Stores, respondent’s, during, assessment., API, version, 57.0, later., Supported, Calls, Fields, Associated, Objects]
---

# AssessmentSignature

> Stores the respondent’s signature during an assessment. This object is
      available in API version 57.0 and later.

# AssessmentSignature

Stores the respondent’s signature during an assessment. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe assessment that's associated with the signature.This field is a relationship field.Relationship NameAssessmentRelationship TypeLookupRefers ToAssessment |
| DateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time of signature. |
| DigitalSignatureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe digital signature that's associated with the assessment signature record.This field is a relationship field.Relationship NameDigitalSignatureRelationship TypeLookupRefers ToDigitalSignature |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of this assessment signature record. |
| OmniscriptIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionIdentifier of signature instance in OmniScript Form. |
| Place | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location at the time of signature. |
| SignedBy | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the individual who signed the assessment. |
| SignedInitial | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe initial used when signing the assessment. |
| SigneeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user or contact who signed the assessment.This field is a polymorphic relationship field.Relationship NameSigneeRelationship TypeLookupRefers ToContact, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssessmentSignatureChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AssessmentSignatureFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[AssessmentSignatureHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[AssessmentSignatureOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[AssessmentSignatureShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
