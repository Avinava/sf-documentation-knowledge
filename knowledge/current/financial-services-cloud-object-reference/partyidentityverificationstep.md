---
title: "PartyIdentityVerificationStep"
domain: financial-services-cloud-object-reference
topic: partyidentityverificationstep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.214Z
estimatedTokens: 1334
keywords: [PartyIdentityVerificationStep, identity, verification, party, API, version, 56.0, later, Calls, Associated, Objects]
---

# PartyIdentityVerificationStep

> Represents information about the identity verification done for a party.
      This object is available in API version 56.0 and later.

# PartyIdentityVerificationStep

Represents information about the identity verification done for a party. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IdVerificationArtifactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe artifact submitted for identity verifcation.This field is a relationship field.Relationship NameIdVerificationArtifactRelationship TypeLookupRefers ToIdentityDocument |
| IntegrationProviderExecId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe integration provider execution that's associated with the party identity verification step.This field is a relationship field.Relationship NameIntegrationProviderExecRefers ToIntegrationProviderExecution |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the party profile verification step record. |
| PartyIdentityVerificationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe party identity verification record that's associated with the verification step.This field is a relationship field.Relationship NamePartyIdentityVerificationRelationship TypeLookupRefers ToPartyIdentityVerification |
| ReportUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL of the report provided by the third-party identity verification agency. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the third-party identity verification.Possible values are:CancelledCompletedIn ProgressInitiated |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of the third-party identity verification.Possible values are:DocumentFacial BiometricOther Biometric |
| VerificationDecision | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the decision taken after the third-party identity verification is completed.Possible values are:AcceptedManual Review RequiredNot Accepted |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyIdentityVerificationStepChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[PartyIdentityVerificationStepFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PartyIdentityVerificationStepHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartyIdentityVerificationStepOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PartyIdentityVerificationStepShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PartyIdentityVerificationStepChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- PartyIdentityVerificationStepFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- PartyIdentityVerificationStepHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- PartyIdentityVerificationStepOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PartyIdentityVerificationStepShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
