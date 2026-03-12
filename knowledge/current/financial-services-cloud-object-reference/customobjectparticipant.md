---
title: "CustomObjectParticipant"
domain: financial-services-cloud-object-reference
topic: customobjectparticipant
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:29.927Z
estimatedTokens: 1428
keywords: [CustomObjectParticipant, participant, context, custom, record, API, version, 55.0, later, Calls, Associated, Objects]
---

# CustomObjectParticipant

> Represents information about a participant in the context of a custom object
         record. This object is available in API version 55.0 and later.

# CustomObjectParticipant

Represents information about a participant in the context of a custom object record. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comments | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe additional information about the participant. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe user or group associated with this participant.This field is a polymorphic relationship field.Relationship NameParticipantRelationship TypeLookupRefers ToGroup, User |
| ParticipantRoleId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe role associated with the participant.This field is a relationship field.Relationship NameParticipantRoleRelationship TypeLookupRefers ToParticipantRole |
| ReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe parent custom object record that's related to this participant record.This field is a polymorphic relationship field.Relationship NameReferenceObjectRelationship TypeLookupRefers ToFSC12__AccountAccountRelation__c, FSC12__Alert__c, FSC12__AssetsAndLiabilities__c, FSC12__B2CLeadCompanyNameConfig__c, FSC12__BillingStatement__c, FSC12__Card__c, FSC12__ChargesAndFees__c, FSC12__ContactContactRelation__c, FSC12__Education__c, FSC12__Employment__c, FSC12__FinancialAccountRole__c, FSC12__FinancialAccountTransaction__c, FSC12__FinancialAccount__c, FSC12__FinancialGoal__c, FSC12__FinancialHolding__c, FSC12__IdentificationDocument__c, FSC12__IndustriesAppConfig__c, FSC12__IndustriesSettings__c, FSC12__LifeEvent__c, FSC12__NextLastInteractionSettings__c, FSC12__PolicyPaymentMethod__c, FSC12__QueryOptimization__c, FSC12__ReciprocalRole__c, FSC12__Record_Rollup_Configuration__c, FSC12__Record_Rollup_and_Trigger_Configuration__c, FSC12__Revenue__c, FSC12__RollupByLookupConfig__c, FSC12__RollupByLookupFilterCriteria__c, FSC12__Securities__c, FSC12__UsePersonAccount__c, FSC12__WealthAppConfig__c, FSC12__individualExcludedFields__c, vlocity_lwc27__CardFrameworkConfiguration__c, vlocity_lwc27__DRBatchQueue__c, vlocity_lwc27__DRBulkData__c, vlocity_lwc27__DREncryption__c, vlocity_lwc27__DRWorker__c, vlocity_lwc27__Interface_DRGeneric__c, vlocity_lwc27__TestResult__c, vlocity_lwc27__TriggerSetup__c, vlocity_lwc27__UISettings__c, vlocity_lwc27__VlocityDataPack__c, vlocity_lwc27__VlocityDocuSignTemplate__c, vlocity_lwc27__VlocityErrorLogEntry__c, vlocity_lwc27__VlocityScheduledJob__c, vlocity_lwc27__VlocityTrackingEntry__c |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CustomObjectParticipantChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CustomObjectParticipantFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CustomObjectParticipantHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CustomObjectParticipantShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CustomObjectParticipantChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CustomObjectParticipantFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CustomObjectParticipantHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CustomObjectParticipantShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
