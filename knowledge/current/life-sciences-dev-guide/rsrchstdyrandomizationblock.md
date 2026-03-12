---
title: "RsrchStdyRandomizationBlock"
domain: life-sciences-dev-guide
topic: rsrchstdyrandomizationblock
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:47.364Z
estimatedTokens: 1212
keywords: [RsrchStdyRandomizationBlock, block, that’s, generated, research, study, randomization, API, version, 61.0, later, Calls, Associated, Objects]
---

# RsrchStdyRandomizationBlock

> Represents the details of a block that’s generated through the parameters
         specified in the research study randomization. This object is available in API version
      61.0 and later.

# RsrchStdyRandomizationBlock

Represents the details of a block that’s generated through the parameters specified in the research study randomization. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrentBlockItemSeqNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe sequence number of the item in the research study randomization block. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the research study randomization block. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the object assigned to the territory.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ResearchStdyRandomizationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe research study randomization associated with the research study randomization block.This field is a relationship field.Relationship NameResearchStdyRandomizationRefers ToResearchStdyRandomization |
| RsrchStdyRndmCriteriaSrcId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Research study criteria source associated with the research study randomization block.This field is a polymorphic relationship field.Relationship NameRsrchStdyRndmCriteriaSrcRefers ToCareProgramSite, RsrchStdyRandomizationCrit, devopsimpkg11__CardFrameworkConfiguration__c, devopsimpkg11__DRBatchQueue__c, devopsimpkg11__DRBulkData__c, devopsimpkg11__DREncryption__c, devopsimpkg11__DRWorker__c, devopsimpkg11__Interface_DRGeneric__c, devopsimpkg11__TestResult__c, devopsimpkg11__TriggerSetup__c, devopsimpkg11__UISettings__c, devopsimpkg11__VlocityDataPack__c, devopsimpkg11__VlocityDocuSignTemplate__c, devopsimpkg11__VlocityErrorLogEntry__c, devopsimpkg11__VlocityScheduledJob__c, devopsimpkg11__VlocityTrackingEntry__c |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the research study randomization block.Possible values are:AllocationComplete—Allocation CompleteAvailableInProgress—In Progress |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RsrchStdyRandomizationBlockChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[RsrchStdyRandomizationBlockFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[RsrchStdyRandomizationBlockHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[RsrchStdyRandomizationBlockShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- RsrchStdyRandomizationBlockChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- RsrchStdyRandomizationBlockFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- RsrchStdyRandomizationBlockHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- RsrchStdyRandomizationBlockShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
