---
title: "ResearchStdyCmprGroupCndt"
domain: life-sciences-dev-guide
topic: researchstdycmprgroupcndt
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:47.256Z
estimatedTokens: 979
keywords: [ResearchStdyCmprGroupCndt, junction, research, study, control, group, candidate, API, version, 61.0, later, Calls, Associated, Objects]
---

# ResearchStdyCmprGroupCndt

> Represents the junction between a research study control group and a research
         study candidate. This object is available in API version 61.0 and later.

# ResearchStdyCmprGroupCndt

Represents the junction between a research study control group and a research study candidate. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CandidateAllocSourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context through which the research study candidate is mapped to the research study group.This field is a polymorphic relationship field.Relationship NameCandidateAllocSourceRefers ToResearchStudyRndmBlockSlot, devopsimpkg11__CardFrameworkConfiguration__c, devopsimpkg11__DRBatchQueue__c, devopsimpkg11__DRBulkData__c, devopsimpkg11__DREncryption__c, devopsimpkg11__DRWorker__c, devopsimpkg11__Interface_DRGeneric__c, devopsimpkg11__TestResult__c, devopsimpkg11__TriggerSetup__c, devopsimpkg11__UISettings__c, devopsimpkg11__VlocityDataPack__c, devopsimpkg11__VlocityDocuSignTemplate__c, devopsimpkg11__VlocityErrorLogEntry__c, devopsimpkg11__VlocityScheduledJob__c, devopsimpkg11__VlocityTrackingEntry__c |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the research study comparison group candidate. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the object assigned to the territory.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ResearchStudyCandidateId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe research study candidate associated with the research study candidate group.This field is a relationship field.Relationship NameResearchStudyCandidateRefers ToResearchStudyCandidate |
| ResearchStudyCmprGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe research study group associated with the research study candidate group.This field is a relationship field.Relationship NameResearchStudyCmprGroupRefers ToResearchStudyCmprGroup |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ResearchStdyCmprGroupCndtFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ResearchStdyCmprGroupCndtHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ResearchStdyCmprGroupCndtShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ResearchStdyCmprGroupCndtFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ResearchStdyCmprGroupCndtHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ResearchStdyCmprGroupCndtShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
