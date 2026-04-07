---
title: "PrvdEngmtComplianceCycle"
domain: life-sciences-dev-guide
topic: prvdengmtcompliancecycle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:11.733Z
estimatedTokens: 1292
keywords: [PrvdEngmtComplianceCycle, duration, progress, compliance, cycles, provider, captures, essential, metadata, ensure, effective, monitoring, management, compliance-related, activities]
---

# PrvdEngmtComplianceCycle

> Represents the duration and progress of compliance cycles for a provider,
         which captures essential metadata to ensure effective monitoring and management of
         compliance-related activities.

# PrvdEngmtComplianceCycle

Represents the duration and progress of compliance cycles for a provider, which captures essential metadata to ensure effective monitoring and management of compliance-related activities.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionDelayReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the reason why the account was not visited. |
| ActualContactPointType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe channel used to interview the account. |
| CompletionAssessmentTaskId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the assessment task that completes the provider engagement compliance cycle.This field is a relationship field.Relationship NameCompletionAssessmentTaskRefers ToAssessmentTask |
| CompletionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the compliance cycle was completed. |
| DurationInDays | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration of the compliance cycle in days. |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the compliance cycle ends. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the compliance cycle begins. |
| IsStoppedOnCurrentCycle | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the compliance process was stopped in the current cycle.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last referenced a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the compliance cycle. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the record in the external system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external system that generated the record. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the compliance cycle.Possible values are:CompletedNewSkippedThe default value is New. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PrvdEngmtComplianceCycleChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[PrvdEngmtComplianceCycleFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PrvdEngmtComplianceCycleHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PrvdEngmtComplianceCycleShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PrvdEngmtComplianceCycleChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- PrvdEngmtComplianceCycleFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- PrvdEngmtComplianceCycleHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- PrvdEngmtComplianceCycleShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
