---
title: "DigitalVerfSetupDetail"
domain: health-cloud-object-reference
topic: digitalverfsetupdetail
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:37.015Z
estimatedTokens: 726
keywords: [DigitalVerfSetupDetail, Stores, contextual, digital, verification, setup, user, messages, display, time, API, version, 60.0, later, Calls]
---

# DigitalVerfSetupDetail

> Stores contextual details of a digital verification setup, such as the user who does
      the verification, and the messages that display at the time of verification. This object is
      available in API version 60.0 and later.

# DigitalVerfSetupDetail

Stores contextual details of a digital verification setup, such as the user who does the verification, and the messages that display at the time of verification. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DesignatedVerifierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe role, user or user group associated with the digital verification setup detail.This field is a polymorphic relationship field.Relationship NameDesignatedVerifierRelationship TypeLookupRefers ToGroup, ParticipantRole |
| DigitalVerificationSetupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent digital verification setup associated with the digital verification setup detail.This field is a relationship field.Relationship NameDigitalVerificationSetupRelationship TypeLookupRefers ToDigitalVerificationSetup |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a record indirectly; for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the digital verification setup detail record. |
| PostVerificationMessage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe message that is displayed after a verification is performed. |
| PreVerificationMessage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe message that is displayed before a verification is performed. |
| VerifierRank | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the rank of the verifier that provides the verification.Possible values are:FifthVerifierFirstVerifierFourthVerifierSecondVerifierThirdVerifier |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DigitalVerfSetupDetailHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- DigitalVerfSetupDetailHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
