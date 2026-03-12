---
title: "ClaimRecovery"
domain: financial-services-cloud-object-reference
topic: claimrecovery
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.816Z
estimatedTokens: 1448
keywords: [ClaimRecovery, recovery, funds, insurance, claim, subrogation, salvage, activities, Recovered, amounts, come, company, legal, litigation, arbitration]
---

# ClaimRecovery

> Represents a recovery of funds on an insurance claim through subrogation and
         salvage activities. Recovered amounts can come from a salvage company or through legal
         litigation or arbitration. Master-detail child object of Claim. This object is
      available in API version 54.0 and later.

# ClaimRecovery

Represents a recovery of funds on an insurance claim through subrogation and salvage activities. Recovered amounts can come from a salvage company or through legal litigation or arbitration. Master-detail child object of Claim. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if the add-on license for Claims Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| ClaimCoverageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe claim coverage associated with the claim recovery.This is a relationship field.Relationship NameClaimCoverageRelationship TypeLookupRefers ToClaimCoverage |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe claim associated with the claim recovery.This is a relationship field.Relationship NameClaimRelationship TypeLookupRefers ToClaim |
| EstimatedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated amount the insurance carrier identified to pursue for the claim recovery. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Claim Recovery record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecoveredAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual amount the insurance carrier recovered. |
| RecoveredOnDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp the amount was recovered. For multi-currency scenarios, the recovery date is used to retrieve currency conversion rates. |
| RecoveryFromAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that the claim is recovered from.This is a relationship field.Relationship NameRecoveryFromAccountRelationship TypeLookupRefers ToAccount |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the claim recovery.Possible values are:Accepted RecoveryAccepted with Additional PursuitAdditional Recovery PursuedDisputed RecoveryEstimatedPartially RecoveredPursuedRecovery CanceledRecovery Written OffReferred to Other Department |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of claim recovery.Possible values include:SalvageSubrogation |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClaimRecoveryChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 63.0 and later.

[ClaimRecoveryFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClaimRecoveryHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ClaimRecoveryOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ClaimRecoveryShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ClaimRecoveryChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ClaimRecoveryFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ClaimRecoveryHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ClaimRecoveryOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ClaimRecoveryShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
