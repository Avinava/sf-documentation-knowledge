---
title: "InformationVerification"
domain: financial-services-cloud-object-reference
topic: informationverification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.496Z
estimatedTokens: 1500
keywords: [InformationVerification, verification, initiated, API, version, 61.0, later, Digital, Lending, permission, Calls, Associated, Objects]
---

# InformationVerification

> Represents the details of the information verification initiated for an
         object. This object is available in API version 61.0 and later. Available with Digital
      Lending permission set.

# InformationVerification

Represents the details of the information verification initiated for an object. This object is available in API version 61.0 and later. Available with Digital Lending permission set.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssignedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the information was assigned to the verifier for verification. |
| Comments | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe verifier's comments to the information verified. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the information verification was complete. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Purpose | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the purpose of the information verification, such as collateral lien search or title search.Possible values are:Collateral Lien SearchCollateral Ownership CheckCollateral Title ClearanceCollateral Valuation Verification |
| RelatedInformationVerfId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related information verification record that this verification record is associated with.This field is a relationship field.Relationship NameRelatedInformationVerfRefers ToInformationVerification |
| Stage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the stage of the information verification.Possible values are:ApprovedIn progressNewRejected |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the information verification was started. |
| VerificationObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe object for which the information verification was initiated.This field is a polymorphic relationship field.Relationship NameVerificationObjectRefers ToApplicationForm, PartyProfile |
| VerificationParentObjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context for which the information verification was initiated.This field is a polymorphic relationship field.Relationship NameVerificationParentObjectRefers ToApplicationForm, PartyProfile |
| VerificationScope | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the scope of the information verification. |
| VerifiedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user or account who verified the information.This field is a polymorphic relationship field.Relationship NameVerifiedByRefers ToAccount, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InformationVerificationChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[InformationVerificationFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InformationVerificationHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InformationVerificationOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[InformationVerificationShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InformationVerificationChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- InformationVerificationFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- InformationVerificationHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- InformationVerificationOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- InformationVerificationShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
